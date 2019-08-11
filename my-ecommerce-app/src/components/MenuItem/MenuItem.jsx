import React from 'react';
import './MenuItem.scss';


const MenuItem = ({title, imgUrl}) => (
    <div style={{backgroundImage:`url(${imgUrl}`}} 
    className='Menu-item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);


export default MenuItem;