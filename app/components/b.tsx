"use client";

import React, { useState, useEffect } from "react";
import { format, utcToZonedTime } from "date-fns-tz";

const B = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const montrealTime = utcToZonedTime(date, "America/Montreal");
      setTime(format(montrealTime, "HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-4xl font-bold text-center text-red-500">
        Time in Montreal: {time}
      </div>
    </div>
  );
};

export default B;
