import React, { useEffect } from "react";
import { useState } from "react";
import "./css/Stopwatch_module.css";

function Stopwatch () {

    const [seconds, setSeconds]  = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                if (seconds === 59) {
                    setMinutes(minutes + 1);
                    setSeconds(0);
                } else {
                    setSeconds(seconds + 1);
                }
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isActive, seconds, minutes]);

    const startTimer = () => {
        setIsActive(true);
    };

    const pauseTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setMinutes(0);
        setSeconds(0);
    };

    return (
        <div className="flex_wrapper">
            <div className="stopwatch_box">
                <h1>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                <div className="buttons">
                    <button className="start-btn" onClick={startTimer}>Start</button>
                    <button className="pause-btn" onClick={pauseTimer}>Pause</button>
                    <button className="stop-btn" onClick={resetTimer}>Stop</button>
                </div>
            </div>
        </div>
    );
};

export default Stopwatch