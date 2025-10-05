import React from "react";
import Banner from '../Components/dashboard/Banner.jsx';
import Card from '../Components/dashboard/Card.jsx'
import Graph from '../Components/dashboard/Graph.jsx'
import Recent from '../Components/dashboard/Recent.jsx'

const Dashboard = () => {
  const values = [
    {
      heading: "Avg Sleep Time",
      para: "Average sleeping time in past 7 days",
      count: "6 Hrs",
      icon: <i className="bx bx-eye-closed"></i>
    },
    {
      heading: "Activity",
      para: "Total workouts this week",
      count: "120 mins",
      icon: <i className="bx bx-dumbbell"></i>
    },
    {
      heading: "Mood",
      para: "Average mood this week",
      count: "8 / 10",
      icon: <i class='bx  bx-smile' ></i>
    },
    {
      heading: "Meditation",
      para: "Total meditation sessions this week",
      count: "4",
      icon: <i className="bx bx-brain"></i>
    }
  ];

  return (
    <div class='items-end'>
      <div class='h-[200px] w-[77.5vw] mt-10 ml-10'>
        <Banner />
      </div>
      <div className="flex flex-row flex-wrap gap-4 h-[300px] w-[77.5vw] ml-10 mt-5">
        {values.map((item, index) => (
          <div key={index} className="flex-1 w-[500px] ">
            <Card
              heading={item.heading}
              para={item.para}
              count={item.count}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-4 w-[77.5vw]h-[250px] mt-10">
        <div className="h-[250px] w-[55vw]">
          <Graph />
        </div>
        <div className="h-[250px] w-[20vw] ml-10">
          <Recent />
        </div>
      </div>

    </div>

  );
};

export default Dashboard;
