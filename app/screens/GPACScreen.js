import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  View,
  ListView,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { getCurrentLocationInfo } from '../ducks/googleplaces';

const WINDOW = Dimensions.get('window');

const defaultStyles = {
  container: {
    flex: 1,
  },
  poweredContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  powered: {},
  listView: {
    flex: 1,
  },
  row: {
    padding: 13,
    height: 44,
    flexDirection: 'row',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#c8c7cc',
  },
};

export class GPACScreen extends React.Component {
  static defaultProps = {
    x: this.x,
    myCards: {},
    googlePlaces: {},
    location: {},
    isRowScrollable: true,
    keyboardShouldPersistTaps: 'always',
    listUnderlayColor: '#c8c7cc',
  };

  static propTypes = {
    x: PropTypes.func,
    myCards: PropTypes.object,
    googlePlaces: PropTypes.object,
    location: PropTypes.object,
    isRowScrollable: React.PropTypes.bool,
    listUnderlayColor: React.PropTypes.string,
    keyboardShouldPersistTaps: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
    const gData = this.props.googlePlaces.gData || {};
    this.state = {
      dataSource: this.ds.cloneWithRows(gData),
      location: this.props.location,
    };
    this._renderRow = this._renderRow.bind(this);
  }

  componentDidMount() {
    this.props.x(this.state.location);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.googlePlaces.gData) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.googlePlaces.gData.results),
      });
    }
  }

  _renderSeparator(sectionID, rowID) {
    if (rowID === this.dataSource.getRowCount() - 1) {
      return null;
    }

    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={[defaultStyles.separator]}
      />
    );
  }

  _renderPoweredLogo() {
    return (
      <View
        style={[defaultStyles.row, defaultStyles.poweredContainer]}
      >
        <Text>Powered by Google</Text>
      </View>
    );
  }

  _renderRow(rowData = {}) {
    return (
      <ScrollView
        scrollEnabled={this.props.isRowScrollable}
        keyboardShouldPersistTaps={this.props.keyboardShouldPersistTaps}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <TouchableHighlight
          style={{ minWidth: WINDOW.width }}
          underlayColor={this.props.listUnderlayColor || '#c8c7cc'}
        >
          <View style={[defaultStyles.row]}>
            {this._renderRowData(rowData)}
          </View>
        </TouchableHighlight>
      </ScrollView>
    );
  }

  _renderRowData(rowData) {
    return (
      <Text
        style={[defaultStyles.description]}
        numberOfLines={1}
      >
        {this._renderDescription(rowData)}
      </Text>
    );
  }

  _renderDescription(rowData) {
    return rowData.description || rowData.formatted_address || rowData.name;
  }

  _getListView() {
    return (
      <ListView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        style={[defaultStyles.listView]}
        dataSource={this.state.dataSource}
        renderSeparator={this._renderSeparator}
        automaticallyAdjustContentInsets={false}
        renderRow={this._renderRow}
        renderFooter={this._renderPoweredLogo}
      />
    );
  }

  render() {
    return (
      <View
        style={[defaultStyles.container]}
      >
        {this._getListView()}
      </View>
    );
  }
}

export function mapStateToProps(state) {
  return {
    googlePlaces: state.googleplaces,
    myCards: state.mycards,
    location: state.location,
  };
}

const mapDispatchToProps = dispatch => ({
  x: state =>
    dispatch(getCurrentLocationInfo(state)),
});


export default connect(mapStateToProps, mapDispatchToProps)(GPACScreen);
