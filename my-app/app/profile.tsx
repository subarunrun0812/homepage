import React from 'react';


const myNameStyles = {
    fontSize: '3rem',
    fontWeight: 'bold',
};

const bodyStyles =
{
    textAlign: 'center',

}

const ProfileBanner = () => {
    return (
        <div style={bodyStyles}>
            <h1 style={myNameStyles}>
                Sasaki Subaru
            </h1>
            <p>
                2004年に大阪で生まれた
            </p>
        </div>
    );
};


export default ProfileBanner;
