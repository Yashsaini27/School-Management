import React from 'react';
import Institutions from './Institutions';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Education Dashboard</h1>
            <Institutions type="schools" />
            {/* <Institutions type="colleges" />
            <Institutions type="universities" /> */}

            <div>
                
            </div>
        </div>

        
    );
};

export default HomePage;
