"use client";

import React, { useState, useEffect } from "react";
import { format, utcToZonedTime } from "date-fns-tz";

const A = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const parisTime = utcToZonedTime(date, "Europe/Paris");
      setTime(format(parisTime, "HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-4xl font-bold text-center text-blue-500">
        Time in Paris: {time}
      </div>
    </div>
  );
};

export default A;
