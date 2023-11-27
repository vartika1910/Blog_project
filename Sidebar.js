import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>You can Wish!</h2><hr/>
            <div className="bday-info">
                <div className='bday-name'>🎂 John Doe</div><hr/>
                <div className='bday-name'>🎂 Jane Doe</div><hr/>
            </div>
        </div>
    );
}

export default Sidebar;
