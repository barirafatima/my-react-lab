import React, { useState } from 'react';
import './productcard.css';

function ProductCard(props) {
    let { title, description, price, imageUrl }=props;
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('#000000');

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const colors = ['#000000', '#FF6347', '#32CD32', '#FFD700'];

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img className="product-image" src="Screenshot 2024-12-03 222806.png"/>
            </div>
            <div className="product-details">
                <h3 className="product-title">{title}</h3>
                <p className="product-description">{description}</p>
                <div className="product-price">${price}</div>
                <div className="product-rating">
                    <span>⭐⭐⭐⭐☆</span>
                </div>
                <div className="product-options">
                    <div className="product-size">
                        <label>Size: </label>
                        <select value={selectedSize} onChange={(e) => setSelectedSize (e.target.value)}>
                            {sizes.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                    <div className="product-colors">
                        <label>Colors:</label>
                        <div className="color-options">
                            {colors.map(color => (
                                <div 
                                    key={color} 
                                    className="color-option" 
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;



