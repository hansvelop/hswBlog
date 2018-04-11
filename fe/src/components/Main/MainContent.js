import React from 'react';
import Contents from './Contents/Contents';
import Wirte from './Contents/Wirte';
import Category from './Contents/Category';
const MainContent = () => {
    return (
        <div className="center-area">
            <Wirte />
            <Category />
            <Contents />
        </div>
    );
};

export default MainContent;