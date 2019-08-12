import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.scss';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {title:'bags', imgUrl:'https://images.pexels.com/photos/1345082/pexels-photo-1345082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id:1},
                { title: 'hats', imgUrl: 'https://images.pexels.com/photos/396777/pexels-photo-396777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 2 },
                { title: 'jackets', imgUrl: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 3 },
                { title: 'sneakers', imgUrl: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 4 },
                { title: 'kids', imgUrl: 'https://images.pexels.com/photos/1058140/pexels-photo-1058140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 5 },
                { title: 'women', imgUrl: 'https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', size: 'size', id: 6,  },
                { title: 'men', imgUrl: 'https://images.pexels.com/photos/264554/pexels-photo-264554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', size: 'size', id: 7,  },
            ]
        };
    }

    render() {
        const shopCategory =  this.state.categories.map(({ id, title, imgUrl,size }) => (
            <MenuItem key={id} title={title} imgUrl={imgUrl} size={size}/>
        ))
        return (
            <div className='Menu'>
               {shopCategory}
            </div>
        );
    }

}


export default Menu;

