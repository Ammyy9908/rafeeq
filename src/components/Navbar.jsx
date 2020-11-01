import React from 'react'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import '../navbar.css'
import { Icon, IconButton } from '@material-ui/core';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__right">
                <div className="navbar__brand" style={{"backgroundImage":"url(https://img2.pngio.com/myntra-logo-transparent-png-hd-myntra-logo-png-image-free-download-myntra-png-715_715.png)"}}>
                    
                </div>
                <div className="navbar__links">
                    <ul>
                        <li><a href="#/">MEN</a></li>
                        <li><a href="#/">WOMEN</a></li>
                        <li><a href="#/">KIDS</a></li>
                        <li><a href="#/">OFFERS</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar__middle">
                    <div className="search">
                        <div className="search__icon">
                            <SearchIcon/>
                        </div>
                        <input type="text" name="search" id="key" placeholder="Search for Products,Brand and More..."/>
                    </div>
            </div>
            <div className="navbar__left">
                <IconButton> <PermIdentityIcon/></IconButton>
               
                <FavoriteIcon/>
                <ShoppingBasketIcon/>
            </div>
        </div>
    )
}

export default Navbar
