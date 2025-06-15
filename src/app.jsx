import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MentorComponent from './componets/MentorComponent';
import SessionComponent from './componets/SessionComponent';
import FeedBackComponent from './componets/FeedBackComponent';
import TaskComponent from './componets/TaskComponent';
import HeaderComponent from './componets/HeaderComponent';

const App = () => {
  return (
   
      
      <div className="p-6">
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<SessionComponent />} />
          <Route path="/mentor" element={<MentorComponent />} />
          <Route path="/feedback" element={<FeedBackComponent />} />
          <Route path="/tasks" element={<TaskComponent />} />
        </Routes>
      </div>
  
  );
};

export default App;

