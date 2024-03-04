import React from 'react';
import Header from './header';
import Button from './button';
import ProfileBanner from './profile';

const bodyStyles = {
  minHeight: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '80px' /* ヘッダーの高さ + padding に合わせます */
};

const mainStyles =
{
  padding: '0px'
}

export default function Home() {
  return (

    <main>
      <Header />
    </main>
  );
};

// const Home = () => {
//   return (

//     <main style={mainStyles}>
// <Header />
// <body style={bodyStyles}>
// <ProfileBanner />
// </body>
//     </main>
//   );
// };
