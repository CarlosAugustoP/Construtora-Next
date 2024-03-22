import React, { useState, useEffect } from 'react';
import Header from '../NavBar';
import Contato from '../Contato';
import PostHeader from '../PostHeader';
import FeaturedPost from '../FeaturedPost';
import Intro from '../Intro';
import QuemSomos from '../QuemSomos';
import Footer from '../Footer';

export default function App() {

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 942);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Header />
      <div style={{ height: '100px' }}></div>
      <Intro />
      {isLargeScreen ? (
        <>
          <FeaturedPost />
          <PostHeader />
        </>
      ) : (
        // Replace these components with whatever you want to render instead
        <div>Your alternative content for smaller screens here</div>
      )}
      <QuemSomos />
      <Contato />
      <Footer />
    </>
  );
}
