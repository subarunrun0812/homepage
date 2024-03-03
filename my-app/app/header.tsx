import React from 'react';

const headerStyles: React.CSSProperties = {
    position: 'fixed' as const,
    display: 'flex',
    fontSize: '1rem',
    backgroundColor: '#000',
    top: '0px',
    paddingTop: '30px',
    width: '100%',
    zIndex: 100,
};

const Header = () => {
    return (
        <header style={headerStyles}>
            <h1 style={{ position: 'absolute', left: '10px' }}>Subaru.com</h1>
            <h1 style={{ position: 'absolute', right: '10px' }}>
                <a href='/'>home</a>
            </h1>
        </header>
    );
};



export default Header;

{/* <a href="/">
    Home
</a>
<a href="/about">
    About
</a> */}