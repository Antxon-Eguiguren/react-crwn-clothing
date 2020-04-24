import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

// It can be done like this, but it's difficult to read, better using compose
// const CollectionsOverviewContainer = connect(mapStateToProps, null)(WithSpinner(CollectionsOverview));

// Compose passes CollectionsOverview to HOC WithSpinner and the result passes to connect and stores in CollectionsOverviewContainer
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps, null),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
