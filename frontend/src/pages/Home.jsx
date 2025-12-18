import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold mb-4">LALÀNAKO</h1>
    <p className="mb-8">Le Code Civil Malgache, clair et vivant.</p>
    <Link to="/code-civil" className="bg-blue-500 text-white px-4 py-2 rounded">
      Accéder au Code Civil
    </Link>
  </div>
);

export default Home;