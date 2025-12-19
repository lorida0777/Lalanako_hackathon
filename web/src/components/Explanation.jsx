import React, { useEffect, useState } from 'react';


const Explanation = ({ text }) => {
  const [explanation, setExplanation] = useState('Chargement de l\'explication...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExplanation = async () => {
      try {
        const response = await fetch('http://localhost:8000/explain', {  
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
        });
        if (!response.ok) throw new Error('Erreur lors de l\'appel API');
        const data = await response.json();
        setExplanation(data.explanation);
      } catch (err) {
        setError(err.message);
        setExplanation('Erreur lors de la génération de l\'explication. Veuillez réessayer.');
      }
    };
    if (text) fetchExplanation();
  }, [text]);

  if (error) return <p className="text-red-500">{error}</p>;

  return <p className="whitespace-pre-wrap">{explanation}</p>;
};

export default Explanation;