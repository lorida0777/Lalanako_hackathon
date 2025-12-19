import React from 'react';


const Sidebar = ({ data, onSelect }) => {
  const renderTree = (items, type) => (
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index}>
          <button
            onClick={() => onSelect(item)}
            className="text-left hover:bg-indigo-50 p-2 rounded w-full text-sm text-slate-700 hover:text-indigo-700"
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
    <div>
      <h2 className="text-lg font-bold mb-4 text-red-700">{data.title}</h2>
      {renderTree(data.parts, 'parts')}
    </div>
  );
};

export default Sidebar;