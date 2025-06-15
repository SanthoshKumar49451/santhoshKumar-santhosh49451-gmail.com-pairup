import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="flex space-x-6 justify-center">
        <Link className="hover:underline" to="/">Sessions</Link>
        <Link className="hover:underline" to="/mentor">Mentor</Link>
        <Link className="hover:underline" to="/feedback">Feedback</Link>
        <Link className="hover:underline" to="/tasks">Tasks</Link>
      </nav>
    </header>
  );
};

export default HeaderComponent;
