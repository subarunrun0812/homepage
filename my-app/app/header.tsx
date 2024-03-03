import React from 'react';

const headerStyles: React.CSSProperties = {
    position: 'fixed' as const,
    display: 'flex',
    fontSize: '1rem',
    backgroundColor: '#999',
    top: '0px',
    alignItems: 'center',
    width: '100%',
    height: '50px', // ヘッダーの高さ
    zIndex: 100,
};

const Header = () => {
    return (
        <header style={headerStyles}>
            <div style={{}} >
                <h1 style={{ position: 'absolute', left: '10px' }}>Subaru</h1>
                <h1 style={{ position: 'absolute', right: '100px' }}>
                    <a href='/'>home</a>
                </h1>
            </div>
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