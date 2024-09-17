import React, { useEffect, useState } from 'react';
import './Styles/WelcomeLoader.css';

const WelcomeLoader = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = "أَهْلاً وَ سَهْلاَ"; // Your phrase
  const words = fullText.split(' '); // Split the phrase into words
  const [index, setIndex] = useState(0); // Track the current word index

  useEffect(() => {
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + (prev ? ' ' : '') + words[index]);
        setIndex(index + 1);
      }, 450); // Adjust the timing as needed

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 3500); // Delay before ending the loader

      return () => clearTimeout(timeout);
    }
  }, [index, onComplete, words]);

  return (
    <div className="welcome-loader">
      <h1 className="welcome-text">
        {text}
        <span className="underline"></span>
      </h1>
    </div>
  );
};

export default WelcomeLoader;
