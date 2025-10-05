import { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Dashboard from './Pages/Dashboard';
import Journal from './Pages/Journal';
import Activities from './Pages/Activities';
import Analytics from './Pages/Analytics';
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
      {/* Sidebar */}
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
            <MenuItem onClick={() => setPage("dashboard")}>
              <i className="bx bx-dashboard-alt"></i> Dashboard
            </MenuItem>
            <MenuItem onClick={() => setPage("journal")}>
              <i className="bx bx-book-heart"></i> Journal
            </MenuItem>
            <MenuItem onClick={() => setPage("activities")}>
              <i className="bx bx-message-circle-heart"></i> Activities
            </MenuItem>
            <MenuItem onClick={() => setPage("analytics")}>
              <i className="bx bx-line-chart-square"></i> Analytics
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>

      {/* Page content */}
      <div className="page-container ml-[250px] flex-1 p-6">
        {page === "dashboard" && <Dashboard />}
        {page === "journal" && <Journal />}
        {page === "activities" && <Activities />}
        {page === "analytics" && <Analytics  data={data} />}
      </div>
    </div>
  );
}

export default App;
