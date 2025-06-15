import React from 'react';
import { useSelector } from 'react-redux';

const FeedBackComponent = () => {
  const feedback = useSelector(state => state.feedback);

  return (
    <div className="bg-white shadow p-4 rounded-md mb-4">
      <h2 className="text-xl font-bold mb-4">Feedback</h2>
      {feedback.map((item, index) => (
        <div key={index} className="border-b py-2">
          <p className="italic">"{item.comment}"</p>
          <p className="text-sm text-gray-500">Date: {item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedBackComponent;
