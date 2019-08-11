import React from 'react';
import './Home.scss';


const Home = () => (
    <div className='Home'>
        <div className='Menu'>
            <div className='Menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='Menu-item'>
                <div className='content'>
                    <h1 className='title'>JACKETS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='Menu-item'>
                <div className='content'>
                    <h1 className='title'>SNEAKERS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='Menu-item'>
                <div className='content'>
                    <h1 className='title'>KIDS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='Menu-adults'>
                <div className='Menu-item'>
                    <div className='content'>
                        <h1 className='title'>WOMENS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='Menu-item'>
                    <div className='content'>
                        <h1 className='title'>MENS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

)


export default Home;