import React from 'react';

import CategoryMenu from './CategoryMenu';

const LeftArea = () => {
    return (
        <div className="left-area">
            <div className="menu-title">Sector Categories</div>
            <div className="menu-list-area">
                <CategoryMenu subCategoryName="front-end"/>
                <CategoryMenu subCategoryName="back-end" />
            </div>
        </div>
    );
};

export default LeftArea;