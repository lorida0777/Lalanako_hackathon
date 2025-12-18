import React from 'react';


const Sidebar = ({ data, onSelect }) => {
  const renderTree = (items, type) => (
    <ul className="ml-4">
      {items.map((item, index) => (
        <li key={index}>
          <button
            onClick={() => onSelect(item)}
            className="text-left hover:bg-gray-200 p-1 rounded w-full"
          >
            {item.name || item.number} {item.page ? `(p. ${item.page})` : ''} {item.note ? ` - ${item.note}` : ''}
          </button>
          {item.titles && renderTree(item.titles, 'titles')}
          {item.chapters && renderTree(item.chapters, 'chapters')}
          {item.subsections && renderTree(item.subsections, 'subsections')}
          {item.sections && renderTree(item.sections, 'sections')}
          {item.articles && renderTree(item.articles, 'articles')}
        </li>
      ))}
    </ul>
  );

  return (
    <aside className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">{data.title}</h2>
      {renderTree(data.parts, 'parts')}
    </aside>
  );
};

export default Sidebar;