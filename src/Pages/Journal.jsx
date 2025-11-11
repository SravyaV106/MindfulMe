import React, { useState, useCallback} from 'react';
import Banner from '../Components/journal/Banner';
import Entry from '../Components/journal/Entry';
import Add from '../Components/journal/Add';

const Journal = () => {
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const today = new Date().toLocaleDateString("en-US", options);

  const [data, setData] = useState([
    {
      date: "22/08/2025",
      title: "L",
      details: "Had a productive day working on my project. Learned new concepts and felt satisfied with progress.",
      mood: "😔",
      sleep: "7hrs",
      activity: "30min"
    },
    {
      date: "21/08/2025",
      title: "L",
      details: "Felt a little stressed due to deadlines but managed to complete most of the work.",
      mood: "😊",
      sleep: "5hrs",
      activity: "15min"
    },
    {
      date: "20/08/2025",
      title: "L",
      details: "Relaxed day, spent time with family and watched a good movie.",
      mood: "😒",
      sleep: "8hrs",
      activity: "1hr"
    }
  ]);

  const addData = useCallback((newItem) => {
      setData((prev) => [...prev, newItem]);
      closeForm();
    }, []);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = useCallback(() => {
    setIsFormOpen(true);
  }, []);

  const closeForm = useCallback(() => {
    setIsFormOpen(false);
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-4 items-center justify-center mt-5 ml-10 w-[77.5vw] text-center p-6">
        <h1 className="text-4xl font-bold text-indigo-700">Write, Reflect, Grow</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Capture your thoughts, emotions, and experiences. Let AI help you discover
          patterns and insights for better mental wellness.
        </p>
      </div>

      <div className='ml-10 w-[77.5vw] mt-5'>
        <Banner />
      </div>

     
      <div className="flex flex-row items-center justify-between ml-10 w-[77.5vw] mt-5">
        <h2 className="text-2xl font-bold text-indigo-700">Your Journal Entries</h2>
        <button
          className="text-lg font-semibold text-indigo-700 bg-[#F0F71B] px-4 py-2 rounded-lg shadow hover:bg-yellow-300 transition"
          onClick={openForm}
        >
          Add Entry
        </button>
      </div>

   
      <div className='flex flex-col flex-wrap gap-5 ml-10 w-[77.5vw] mt-5'>
        {data.map((item, index) => (
          <div key={index} className='w-[1000px]'>
            <Entry
              date={item.date}
              title={item.title}
              details={item.details}
              mood={item.mood}
              sleep={item.sleep}
              activity={item.activity}
            />
          </div>
        ))}
      </div>

      {isFormOpen && (
        <div className="mt-10">
          <Add onAdd={addData} onClose={closeForm} />
        </div>
      )}
    </div>
  );
};

export default Journal;
