import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

const Main = () => {
    return(
        <div className="main-banner">
            <h1>Indulge with us!</h1>
            <h2>Taste our 100% non-GMO European sweets and treats</h2>
            <Button variant="primary">Shop Now</Button>
        </div>
    );
}

export default Main;