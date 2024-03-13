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

const Home = () => {
  return (

    <main>
      <Header />
      <div className=" min-height: 100vh padding-bottom: 30cm">
        <Button />
      </div>
    </main>
  );
};

export default Home;
