import React, { useState, useEffect } from "react";

const Aff = () => {
    const [quote, setQuote] = useState("");
    const [Que, setQue] = useState("");

    const quotes = [
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "Do what you can, with what you have, where you are. – Theodore Roosevelt",
        "Happiness depends upon ourselves. – Aristotle",
        "Act as if what you do makes a difference. It does. – William James",
        "In the middle of every difficulty lies opportunity. – Albert Einstein",
        "It always seems impossible until it’s done. – Nelson Mandela",
        "Turn your wounds into wisdom. – Oprah Winfrey",
        "The best way out is always through. – Robert Frost",
        "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "The future depends on what you do today. – Mahatma Gandhi",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
        "Peace begins with a smile. – Mother Teresa",
        "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
        "Difficulties in life are intended to make us better, not bitter. – Dan Reeves",
        "Everything you’ve ever wanted is on the other side of fear. – George Addair",
        "Opportunities don't happen, you create them. – Chris Grosser",
        "Do what you love and success will follow. – Oprah Winfrey",
        "Don’t count the days, make the days count. – Muhammad Ali",
        "Fall seven times and stand up eight. – Japanese Proverb",
        "Dream big and dare to fail. – Norman Vaughan",
        "If you can dream it, you can do it. – Walt Disney",
        "Doubt kills more dreams than failure ever will. – Suzy Kassem",
        "You miss 100% of the shots you don’t take. – Wayne Gretzky",
        "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
        "With the new day comes new strength and new thoughts. – Eleanor Roosevelt",
        "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
        "Limit your ‘always’ and your ‘nevers.’ – Amy Poehler",
        "The secret of getting ahead is getting started. – Mark Twain",
        "Everything has beauty, but not everyone sees it. – Confucius",
        "Strive not to be a success, but rather to be of value. – Albert Einstein",
        "Change your thoughts and you change your world. – Norman Vincent Peale",
        "Don’t let yesterday take up too much of today. – Will Rogers",
        "The best revenge is massive success. – Frank Sinatra",
        "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
        "Do what is right, not what is easy. – Unknown",
        "Life is really simple, but we insist on making it complicated. – Confucius",
        "Be yourself; everyone else is already taken. – Oscar Wilde",
        "Happiness is not by chance, but by choice. – Jim Rohn",
        "Small steps in the right direction can turn out to be the biggest step of your life. – Naeem Callaway",
        "Push yourself, because no one else is going to do it for you. – Unknown",
        "Success doesn’t just find you. You have to go out and get it. – Unknown",
        "Great things never come from comfort zones. – Unknown",
        "Dream it. Wish it. Do it. – Unknown",
        "Don’t stop when you’re tired. Stop when you’re done. – Unknown",
        "Wake up with determination. Go to bed with satisfaction. – Unknown",
        "Do something today that your future self will thank you for. – Unknown",
        "Little things make big days. – Unknown",
        "It’s going to be hard, but hard does not mean impossible. – Unknown",
        "Don’t wait for opportunity. Create it. – Unknown",
        "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. – Unknown",
        "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
        "Dream bigger. Do bigger. – Unknown",
        "Don’t wish it were easier. Wish you were better. – Jim Rohn",
        "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
        "Dare to begin, dare to fail, dare to succeed. – Unknown",
        "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
        "If opportunity doesn’t knock, build a door. – Milton Berle",
        "Everything you can imagine is real. – Pablo Picasso",
        "Do one thing every day that scares you. – Eleanor Roosevelt",
        "Keep going. Everything you need will come to you at the perfect time. – Unknown",
        "Be the change that you wish to see in the world. – Mahatma Gandhi",
        "No pressure, no diamonds. – Thomas Carlyle",
        "Stay hungry, stay foolish. – Steve Jobs",
        "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
        "Action is the foundational key to all success. – Pablo Picasso",
        "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
        "A journey of a thousand miles begins with a single step. – Lao Tzu",
        "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
        "Don’t let the fear of losing be greater than the excitement of winning. – Robert Kiyosaki",
        "The best way to predict your future is to create it. – Peter Drucker",
        "You only live once, but if you do it right, once is enough. – Mae West",
        "Be so good they can’t ignore you. – Steve Martin",
        "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
        "Great minds discuss ideas; average minds discuss events; small minds discuss people. – Eleanor Roosevelt",
        "Opportunities are usually disguised as hard work, so most people don’t recognize them. – Ann Landers",
        "I never dreamed about success, I worked for it. – Estée Lauder",
        "Don’t wait. The time will never be just right. – Napoleon Hill",
        "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
        "Believe in yourself and all that you are. – Christian D. Larson",
        "Focus on being productive instead of busy. – Tim Ferriss",
        "Do not pray for an easy life, pray for the strength to endure a difficult one. – Bruce Lee",
        "Opportunities multiply as they are seized. – Sun Tzu",
        "If you’re going through hell, keep going. – Winston Churchill",
        "Don’t let small minds convince you that your dreams are too big. – Unknown",
        "You can, you should, and if you’re brave enough to start, you will. – Stephen King",
        "Perseverance is not a long race; it is many short races one after the other. – Walter Elliot",
        "Go the extra mile, it’s never crowded. – Wayne Dyer",
        "Work hard in silence, let your success be your noise. – Frank Ocean",
        "Winners are not afraid of losing. But losers are. – Robert Kiyosaki",
        "Do not stop thinking of life as an adventure. – Eleanor Roosevelt",
        "Stars can’t shine without darkness. – Unknown",
        "Pain is temporary, quitting lasts forever. – Lance Armstrong",
        "A champion is defined not by their wins but by how they can recover when they fall. – Serena Williams",
        "What we think, we become. – Buddha",
        "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
    ];


    const mindfulnessQuestions = [
        "How did I practice mindfulness today?",
        "What am I grateful for today?",
        "How did I take care of my body today?",
        "Did I notice my thoughts without judgment today?",
        "When did I feel most at peace today?",
        "What moments brought me joy today?",
        "How did I handle stress or challenges today?",
        "Did I take time to breathe deeply or meditate today?",
        "What did I notice about my surroundings today?",
        "How did I connect with others today?",
        "What small victories did I achieve today?",
        "Did I spend time in nature today?",
        "How did I show kindness to myself or others today?",
        "Did I notice any tension or discomfort in my body today?",
        "What thoughts or feelings did I let go of today?",
        "How did I practice patience today?",
        "Did I focus fully on one task or activity today?",
        "What did I learn about myself today?",
        "Did I savor my meals or drinks today?",
        "How did I acknowledge my emotions today?",
        "Did I take a break or rest when I needed it today?",
        "What made me smile or laugh today?",
        "How did I stay present in conversations today?",
        "Did I do anything creative or expressive today?",
        "What challenges taught me the most today?",
        "How will I carry mindfulness into tomorrow?"
    ];

    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        setQue(mindfulnessQuestions[Math.floor(Math.random() * mindfulnessQuestions.length)]);
    }, []);

    const getAnother = () => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    const getAnotherQ = () => {
        setQue(mindfulnessQuestions[Math.floor(Math.random() * mindfulnessQuestions.length)]);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10  px-4">
            <div className="flex flex-wrap justify-center  gap-8 mt-10 mb-10 px-6">
                <div className="flex flex-col justify-between w-[550px] bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                    <div className="flex flex-col items-center mb-4">
                        <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
                            🌸 Daily Motivation
                        </h2>
                    </div>
                    <p className="text-gray-700 italic text-lg mb-6 text-center">“{quote}”</p>
                    <div className="flex justify-center">
                        <button
                            onClick={getAnother}
                            className="p-3 rounded-full bg-indigo-100 hover:bg-indigo-200 transition"
                        >
                            🔄
                        </button>
                    </div>
                </div>

                <div className="flex flex-col justify-between w-[550px] bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                    <div className="flex flex-col items-center mb-4">
                        <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
                            ☕ Daily Reflection
                        </h2>
                    </div>
                    <p className="text-gray-800 text-lg mb-6 text-center">{Que}</p>
                    <div className="flex justify-center mb-4">
                        <button
                            onClick={getAnotherQ}
                            className="p-3 rounded-full bg-green-100 hover:bg-green-200 transition"
                        >
                            🔄
                        </button>
                    </div>
                    <textarea
                        name="reflection"
                        id="reflection"
                        placeholder="Write your reflection here..."
                        className="w-full border border-gray-300 bg-white rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        rows="4"
                    ></textarea>
                </div>
            </div>


            <div className="w-full w-[77.5vw] bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h1 className="text-2xl font-bold text-purple-700 mb-6 text-center">
                    🌿 Mindfulness Tips for Daily Life
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                        <p className="font-semibold text-purple-800">☀️ Morning Mindfulness</p>
                        <p className="text-gray-600 mt-2">Start your day with 5 minutes of conscious breathing.</p>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-pink-50 to-purple-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                        <p className="font-semibold text-pink-800">🍎 Mindful Eating</p>
                        <p className="text-gray-600 mt-2">Eat slowly and savor each bite with full attention.</p>
                    </div>

                    <div className="p-5 bg-gradient-to-br from-green-50 to-purple-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                        <p className="font-semibold text-green-800">🚶 Walking Meditation</p>
                        <p className="text-gray-600 mt-2">Turn daily walks into mindful moments.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Aff;
