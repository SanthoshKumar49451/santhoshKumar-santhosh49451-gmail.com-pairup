import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeTask } from '../features/taskSlice';

const TaskComponent = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow p-4 rounded-md mb-4">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      {tasks.map((item) => (
        <div key={item.id} className="border-b py-2">
          <p><strong>{item.title}</strong></p>
          <p>Deadline: {item.deadline}</p>
          {item.status !== "completed" ? (
            <button
              className="bg-green-500 text-white px-2 py-1 rounded mt-1"
              onClick={() => dispatch(completeTask({ id: item.id }))}
            >
              Mark as Complete
            </button>
          ) : (
            <p className="text-green-700 font-semibold mt-1">Completed</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskComponent;
