import React from 'react';
import { useSelector } from 'react-redux';

const SessionComponent = () => {
  const sessions = useSelector(state => state.sessions);

  return (
    <div className="bg-white shadow p-4 rounded-md mb-4">
      <h2 className="text-xl font-bold mb-4">Upcoming Sessions</h2>
      {sessions.map((item, index) => (
        <div key={index} className="border-b py-2">
          <p><strong>{item.title}</strong></p>
          <p className="text-sm text-gray-600">Date: {item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default SessionComponent;
