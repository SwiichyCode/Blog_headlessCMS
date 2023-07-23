import styled from "styled-components";
import React, { useEffect, useState } from "react";

const ClockWrapper = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
  letter-spacing: -0.36px;
`;

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours} h : ${minutes}`);
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <ClockWrapper>{time ? time : "00 h : 00"}</ClockWrapper>;
};

export default Clock;
