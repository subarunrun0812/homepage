import React from 'react';

const headerStyles: React.CSSProperties = {
    position: 'fixed' as const,
    fontSize: '2rem',
    backgroundColor: '#000',
    top: '0px',
    paddingTop: '30px',
    width: '100%',
    zIndex: 100,
};

const Header = () => {
    return (
        <header style={headerStyles}>
            <h1>Home</h1>
        </header>
    );
};

export default Header; 
