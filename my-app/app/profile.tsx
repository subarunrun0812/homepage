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
                I'm 19 years old.
            </p>
        </div >
    );
};


export default ProfileBanner;
