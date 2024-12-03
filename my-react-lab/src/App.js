import React from 'react';
import ProductCard from './Components/productcard';

function App() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <ProductCard
                title="Grip Strenght Trainer"
                description="The hand grip strengthener features an ergonomic, soft-grip handle for comfortable 
                and safe workouts. Its adjustable resistance range of 5kg-60kg (11-110 lbs) makes it ideal for men 
                and women aiming to improve grip strength. Compact and portable, it’s perfect for on-the-go training. 
                Designed for multiple purposes, it enhances wrist, finger, and forearm strength, benefiting rock climbers, 
                athletes, musicians, and aiding recovery from conditions like tendinitis or carpal tunnel. Made from durable, 
                high-quality plastic and reinforced metal, it ensures long-lasting performance."
                price="11"
                imageUrl="E:\visual code studio (codes)\my react lab\my-react-lab\public\Screenshot 2024-12-03 222806.png"
            />
        </div>
    );
}

export default App;



