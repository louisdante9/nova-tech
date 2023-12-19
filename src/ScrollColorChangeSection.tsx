import React, { useState, useEffect } from 'react';

const ScrollColorChangeSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define the scroll height at which you want to change the background color
  const scrollThreshold = 200;

  // Conditionally apply background color based on scroll height
  const backgroundColor = scrollY > scrollThreshold ? 'lightblue' : 'transparent';

  return (
   <div>
     <div
      style={{
        height: '100vh', // Adjust the height of your section
        background: backgroundColor,
        transition: 'background-color 0.3s ease', // Optional: Add a transition effect
        padding: '20px',
      }}
    >
      <h1>Your Section Content</h1>
      <p>Scroll down to see the background color change.</p>
    </div>
    <div
      style={{
        height: '100vh', // Adjust the height of your section
        background: backgroundColor,
        transition: 'background-color 0.3s ease', // Optional: Add a transition effect
        padding: '20px',
      }}
    >
      <h1>Your Section Content</h1>
      <p>Scroll down to see the background color change.</p>
    </div>
    <div
      style={{
        height: '100vh', // Adjust the height of your section
        background: backgroundColor,
        transition: 'background-color 0.3s ease', // Optional: Add a transition effect
        padding: '20px',
      }}
    >
      <h1>Your Section Content</h1>
      <p>Scroll down to see the background color change.</p>
    </div>
   </div>
  );
};

export default ScrollColorChangeSection;
