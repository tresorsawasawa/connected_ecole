import React, { useState, useEffect } from 'react'

const messages = [
  "Welcome!",
  "Karibu!",
  "Bienvenus!",
];

const TypingSlider: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeTimeout = setTimeout(() => {
      setCurrentMessage((prev) => prev + messages[messageIndex][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 300);

    if (charIndex === messages[messageIndex].length) {
      clearTimeout(typeTimeout);

      const nextMessageTimeout = setTimeout(() => {
        setCurrentMessage('');
        setCharIndex(0);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 2000);

      return () => clearTimeout(nextMessageTimeout);
    }

    return () => clearTimeout(typeTimeout);
  }, [charIndex, messageIndex]);

  return (
    <div className="h-12 flex items-center justify-center p-4">
      <span className="typing-text text-primary font-bold text-[2rem]">{currentMessage}</span>
      <span className="cursor text-white text-3xl">|</span>
    </div>
  );
};

export default TypingSlider;

