import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className='header-area'>
                    <h1 className='title'>Donate For Climate Changing</h1>
                    <p className="discription">Climate change includes both global warming driven by human-induced emissions of <br /> greenhouse gases and the resulting large-scale shifts in weather patterns.</p>
                    <h3 className="budget-amount"> Total Budget : <span >10 Million</span> </h3>
                </div>
            </div>
        </div>
    );
};

export default Header;