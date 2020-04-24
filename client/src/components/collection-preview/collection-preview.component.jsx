import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

// title, items and routeName comes as props from parent component (CollectionsOverview) and history and match comes from withRouter (react-router-dom)
const CollectionPreview = ({ title, items, routeName, history, match }) => (
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
);

export default withRouter(CollectionPreview);
