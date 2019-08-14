import React from 'react';
import './MenuItem.scss';


const MenuItem = ({ title, imgUrl, size }) => (
   
        <div className={`${size} Menu-item`}>
                <div style={{ backgroundImage: `url(${imgUrl}` }} 
                className='Menu-background-image'>

                </div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
   

);


export default MenuItem;