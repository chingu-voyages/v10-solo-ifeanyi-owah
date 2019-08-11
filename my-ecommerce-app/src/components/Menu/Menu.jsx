import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.scss';


class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            categories: [
                {title:'hats',imgUrl:'https://images.pexels.com/photos/396777/pexels-photo-396777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',id:1},
                {title:'jackets',imgUrl:'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',id:2},
                {title:'sneakers',imgUrl:'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',id:3},
                {title:'kids',imgUrl:'https://images.pexels.com/photos/1058140/pexels-photo-1058140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',id:4},
                {title:'women',imgUrl:'https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',id:4},
                {title:'men',imgUrl:'https://images.pexels.com/photos/264554/pexels-photo-264554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',id:5},
            ]
        };
    }

    render(){
        return(
            <div className='Menu'>
                {this.state.categories.map(({id, title, imgUrl})=>(
                    <MenuItem key={id} title={title} imgUrl={imgUrl}/>
                ))}
            </div>
        );
    }
   
}


export default Menu;

