import React, { useState, useEffect } from "react";

const CountDownTimer = () => {
  const [time, setTime] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 59));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Countdown Timer</h1>
      <p>{time} seconds remaining...</p>
    </div>
  );
};

export default CountDownTimer;
