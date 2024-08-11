import { useState, useEffect } from 'react';

interface TypingEffectProps {
  phrases: string[];
  delay?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ phrases = [], delay = 150 }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); // Current phrase index
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0); // Current character index

  useEffect(() => {
    if (phrases.length === 0) return;

    const currentPhrase: string = phrases[index];

    const typeWriter = () => {
      if (isDeleting) {
        setCharIndex((prev) => prev - 1); // Decrement character index
      } else {
        setCharIndex((prev) => prev + 1); // Increment character index
      }

      setText(currentPhrase.substring(0, charIndex));

      // Start deleting after the full phrase is typed
      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }

      // Move to the next phrase after deletion
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timeout = setTimeout(typeWriter, delay);

    return () => clearTimeout(timeout);
  }, [phrases, delay, index, isDeleting, charIndex]);

  return (
    <div className='lg:text-3xl sm:text-base md:text-xl text-green-500'>
      {text}
    </div>
  );
};

export default TypingEffect;
