import React, { useEffect, useState } from "react";

const Timer = ({ setStop, questionNumber, waitMusic, backgroundMusicFuncs }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
      setStop(true);
      waitMusic();
      backgroundMusicFuncs.stop();
    }

    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return <>{timer}</>;
};

export default Timer;
