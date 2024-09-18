import React, { useState, useEffect } from 'react';

const WeeklyCountdown = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const nextMonday = new Date(now);
      nextMonday.setUTCDate(now.getUTCDate() + ((1 + 7 - now.getUTCDay()) % 7));
      nextMonday.setUTCHours(0, 0, 0, 0);

      const diff = nextMonday.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getWeekNumber = (date) => {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
  };

  const today = new Date();
  const weekNumber = getWeekNumber(today);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Week {weekNumber} - {today.getFullYear()}</h1>
        <h2 className="text-2xl mb-6">{today.toLocaleDateString('es-ES', dateOptions)}</h2>
        <div className="border-2 border-black p-4">
          <div className="text-5xl font-bold mb-2">
            {countdown.days}:{countdown.hours.toString().padStart(2, '0')}:
            {countdown.minutes.toString().padStart(2, '0')}:{countdown.seconds.toString().padStart(2, '0')}
          </div>
          <div className="grid grid-cols-4 gap-4 text-xl">
            <div>days</div>
            <div>hours</div>
            <div>min</div>
            <div>sec</div>
          </div>
          <div className="mt-2 text-xl">until next rollover</div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCountdown;