import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div classNameName="hero">
            <div class="card text-white bg-dark border-0">
                <img src="/assets/bg.jpg" class="card-img" alt="..." height='100%'/>
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 class="card-title display-3 fw-border mb-0 ">NEW SEASON ARRIVAL</h5>
                        <p class="card-text">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
