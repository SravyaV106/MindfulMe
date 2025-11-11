import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Journal from './Pages/Journal';
import Activities from './Pages/Activities';
import Analytics from './Pages/Analytics';
import Meditation from './Components/activities/Meditation';
import Breathing from './Components/activities/Breathing';
import Affirmation from './Components/activities/Aff';
import './App.css';

function App() {
  const [page, setPage] = useState("dashboard");

  const data = [
    { label: "Last 7 days", streak: 5, mood: 8, sleep: 7, activities: 5 },
    { label: "Last 30 days", streak: 10, mood: 6, sleep: 5, activities: 7 },
    { label: "Last 90 days", streak: 15, mood: 7, sleep: 6, activities: 10 },
  ];

  return (
    <div className="app-container flex">

      <div className="fixed h-full w-[250px]">
        <Sidebar className="sidebar h-full">
          <div className="sidebar-header flex items-center gap-2 p-4">
            <div className="sidebar-logo text-2xl text-purple-600">
              <i className="bx bx-moon-star"></i>
            </div>
            <div>
              <h1 className="sidebar-title font-bold">MindfulMe</h1>
              <p className="sidebar-subtitle text-sm text-gray-500">
                Your wellness <br /> companion
              </p>
            </div>
          </div>

          <Menu className="menu">
            <MenuItem component={<NavLink to="/dashboard" />}>
              <i className="bx bx-dashboard-alt"></i> Dashboard
            </MenuItem>
            <MenuItem component={<NavLink to="/journal" />}>
              <i className="bx bx-book-heart"></i> Journal
            </MenuItem>
            <MenuItem component={<NavLink to="/activities" />}>
              <i className="bx bx-message-circle-heart"></i> Activities
            </MenuItem>
            <MenuItem component={<NavLink to="/analytics" />}>
              <i className="bx bx-line-chart-square"></i> Analytics
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>

      <div className="page-container ml-[250px] flex-1 p-6">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/journal" element={<Journal />} />

          <Route path="/activities" element={<Activities />}>
            <Route path="meditation" element={<Meditation />} />
            <Route path="breathing" element={<Breathing />} />
            <Route path="affirmation" element={<Affirmation />} />
          </Route>

          <Route path="/analytics" element={<Analytics data={data} />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
