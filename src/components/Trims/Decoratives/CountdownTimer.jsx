import React, { useState, useEffect } from 'react';
import moment from 'moment';

const CountdownTimer = ({dealtime='2029-06-28T00:00:00.123456Z', header='Deal Ending'}) => {
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  useEffect(() => {
    const targetDateTime = moment(dealtime); // Replace with your target datetime
    const interval = setInterval(() => {
      const now = moment();
      const duration = moment.duration(targetDateTime.diff(now));

      if (duration.asSeconds() > 0) {
        setDays(Math.floor(duration.asDays()));
        setHours(duration.hours());
        setMinutes(duration.minutes());
        setSeconds(duration.seconds());
      } else {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold ">{header}</h1>
      <div className="flex flex-row gap-1 justify-start items-start">
        <div className="flex flex-col items-center gap-0 min-w-[60px] bg-secondary-900 text-text-secondary-100">
          <span className="text-4xl font-bold">{days}</span>
          <span className="text-sm">Days</span>
        </div>
        <div className="flex flex-col items-center gap-0 min-w-[60px] bg-secondary-900 text-text-secondary-100">
          <span className="text-4xl font-bold">{hours}</span>
          <span className="text-sm">Hours</span>
        </div>
        <div className="flex flex-col items-center gap-0 min-w-[60px] bg-secondary-900 text-text-secondary-100">
          <span className="text-4xl font-bold">{minutes}</span>
          <span className="text-sm">Minutes</span>
        </div>
        <div className="flex flex-col items-center gap-0 min-w-[60px] bg-secondary-900 text-text-secondary-100">
          <span className="text-4xl font-bold">{seconds}</span>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
