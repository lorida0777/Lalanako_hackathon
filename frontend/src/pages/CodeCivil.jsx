import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs';
import ArticleText from '../components/ArticleText';
import Explanation from '../components/Explanation';
import data from '../data/code_civil.json';

/**
 * Page principale pour naviguer et afficher le Code Civil.
 */
const CodeCivil = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Fonction pour navigation next/prev (basique, à implémenter fully)
  const handleNext = () => {
    // Logique pour item suivant (e.g., flatten tree and navigate)
    console.log('Next article');
  };

  const handlePrev = () => {
    console.log('Previous article');
  };

  return (
    <div className="flex h-screen">
      <Sidebar data={data} onSelect={setSelectedItem} />
      <main className="flex-1 p-4 overflow-y-auto">
        {selectedItem ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">{selectedItem.name || selectedItem.number}</h1>
            <Tabs
              tabs={[
                { label: 'Texte Original', content: <ArticleText item={selectedItem} /> },
                { label: 'Explication Simple', content: <Explanation text={selectedItem.text || selectedItem.expose} /> },
              ]}
            />
            <div className="flex justify-between mt-4">
              <button onClick={handlePrev} className="bg-gray-200 px-4 py-2 rounded">Précédent</button>
              <button onClick={handleNext} className="bg-gray-200 px-4 py-2 rounded">Suivant</button>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              “Ity dia fanazavana tsotra ihany. Tsy misolo mpisolovava.”
            </p>
          </div>
        ) : (
          <p>Sélectionnez une section dans la barre latérale.</p>
        )}
      </main>
    </div>
  );
};

export default CodeCivil;