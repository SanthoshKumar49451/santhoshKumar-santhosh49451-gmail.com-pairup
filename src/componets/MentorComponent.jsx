import React from 'react';
import { useSelector } from 'react-redux';

const MentorComponent = () => {
  const { name, mentor, totalTasks, completedTasks } = useSelector(state => state.mentee);
  const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="bg-white shadow p-4 rounded-md mb-4">
      <h2 className="text-xl font-bold mb-2">Mentee Information</h2>
      <p>Mentee: <strong>{name}</strong></p>
      <p>Mentor: <strong>{mentor}</strong></p>

      <div className="mt-2">
        <input
          type="range"
          value={percentage}
          name="percentage"
          min="0"
          max="100"
          readOnly
          aria-label="Completion percentage"
          className="w-full"
        />
        <span className="block text-sm mt-1 text-gray-700">
          <strong>{percentage.toFixed(0)}%</strong> completed
        </span>
      </div>
    </div>
  );
};

export default MentorComponent;

