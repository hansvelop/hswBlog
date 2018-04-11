import React from 'react';
import {Icon} from 'semantic-ui-react';

import reactIcon from 'assets/images/react.jpg'

const Category = () => {
    return (
        <div className="category-area"> 
            <div className="category-conent">
                <div className="category-left-area">
                    <img className="icon" src={reactIcon} />
                    <span>ReactJs</span>
                </div>
                <div className="category-right-area">
                    <Icon name="search"/>
                </div>    
            </div>
        </div>
    );
};

export default Category;