import React from 'react';

const MenuList = ({ restaurantInfo }) => (
    <img src={restaurantInfo.menuimage} style={{width: 100, height: 100}}></img>
)

export default MenuList;