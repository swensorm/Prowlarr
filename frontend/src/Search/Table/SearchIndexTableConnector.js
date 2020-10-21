import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { setReleasesSort } from 'Store/Actions/releaseActions';
import createUISettingsSelector from 'Store/Selectors/createUISettingsSelector';
import SearchIndexTable from './SearchIndexTable';

function createMapStateToProps() {
  return createSelector(
    (state) => state.app.dimensions,
    (state) => state.releases.columns,
    createUISettingsSelector(),
    (dimensions, columns, uiSettings) => {
      return {
        isSmallScreen: dimensions.isSmallScreen,
        columns,
        longDateFormat: uiSettings.longDateFormat,
        timeFormat: uiSettings.timeFormat
      };
    }
  );
}

function createMapDispatchToProps(dispatch, props) {
  return {
    onSortPress(sortKey) {
      dispatch(setReleasesSort({ sortKey }));
    }
  };
}

export default connect(createMapStateToProps, createMapDispatchToProps)(SearchIndexTable);
