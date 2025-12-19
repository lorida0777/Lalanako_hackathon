import React, { useState } from 'react';



const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex border-b mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 transition-all duration-300 border border-gray-300 rounded-md ${activeTab === index ? 'border-b-2 border-blue-500 font-bold text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;