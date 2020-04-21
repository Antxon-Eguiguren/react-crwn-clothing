import { createSelector } from 'reselect';

// Input selector type 1: selects a part of the state
const selectShop = (state) => state.shop;

// Input selector type 2: selects a part of an input selector type 1
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// Output selectors: outputs from redux to the app the selected data, to be used in the mapStateToProps of the components
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(item => collections[item]) : []
);

export const selectCollection = (collectionUrlParam) => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    // !! converts an object into true/false value (if object is null then returns false, if not null (including an empty object), then returns true) 
    shop => !!shop.collections
);
