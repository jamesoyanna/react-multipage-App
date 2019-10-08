import React, { Component } from 'react';

export class Menu extends Component {
    render() {
        return (
            <div>
              <u>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/products/product-1.html">Product</a></li>
                <li><a href="/contact.html">Contact</a></li>
                </u>  
            </div>
        );
    }
}

export default Menu;
