import React from 'react';
import ProfileBanner from './profile';
import Link from 'next/link';

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
      <div className=" min-height: 100vh padding-bottom: 30cm">
        <h1>
          Sasaki Subaru Profile
        </h1>
        <Link href="/mdx">
          blog
        </Link>
      </div>
    </main>
  );
};

export default Home;
