import React from 'react';

//import card component
import Card from './card.jsx';


const cardx = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <Card />
                </div>
                <div className="col-xl-3 col-md-6">
                    <Card />
                </div>
                <div className="col-xl-3 col-md-6">
                    <Card />
                </div>
                <div className="col-xl-3 col-md-6">
                    <Card />
                </div>
            </div>
            
        </div>
    );
}

export default cardx;