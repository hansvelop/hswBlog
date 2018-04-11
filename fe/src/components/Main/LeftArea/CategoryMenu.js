import React, { Component } from 'react';

import reactIcon from 'assets/images/react.jpg'

class CategoryMenu extends Component {
    render(){
        const {subCategoryName} = this.props;
        return (
            <div className="category-area">
                <div className="sub-category">
                    <span className="name">{subCategoryName}</span>
                </div>
                <div className="menu-list">
                    <div className="menu-item">
                        <img src={reactIcon} className="icon"/><span>ReactJs</span>
                    </div>
                    <div className="menu-item">
                        <img src={reactIcon} className="icon"/><span>jQuery</span>
                    </div>
                    <div className="menu-item">
                        <img src={reactIcon} className="icon"/><span>jQuery Plugin</span>
                    </div>
                </div>
            </div>
        );
    }
};

export default CategoryMenu;