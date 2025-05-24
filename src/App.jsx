import "./App.css";

import { useEffect, useRef, useState } from "react";
import getResults from "./composables/getResults";
import PastResults from "./components/PastResults";
import TestCard from "./components/TestCard";
import fetchRandomSentence from "./composables/fetchSentence";
import Headings from "./components/Headings";

function App() {
  // Constants
  const TOTAL_TIME = 60;

  // Refs
  const userTypeRef = useRef("");
  const timeRef = useRef(null);
  const intervalRef = useRef(null);

  // States
  const [sentence, setSentence] = useState("");
  const [userType, setUserType] = useState("");
  const [pastResults, setPastResults] = useState(
    JSON.parse(localStorage.getItem("pastResults")) || []
  );
  const [timer, setTimer] = useState(TOTAL_TIME);
  const [completed, setCompleted] = useState(false);
  const [wpm, setWPM] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  // Watcher

  useEffect(() => {
    timeRef.current = timer;
  }, [timer]);

  useEffect(() => {
    localStorage.setItem("pastResults", JSON.stringify(pastResults));
  }, [pastResults]);
  useEffect(() => {
    fetchSentence();
  }, []);

  // FUNCTIONS

  const fetchSentence = () => {
    const random = fetchRandomSentence();
    setSentence(random);
  };

  const addHistory = (WPM, accuracy, time) => {
    let updatedHistory = [
      {
        wpm: WPM,
        accuracy: accuracy,
        time: time,
        date: new Date().toLocaleDateString(),
      },
      ...pastResults,
    ];
    setPastResults(updatedHistory);
  };

  const stopTest = (val, time) => {
    let [WPM, accuracy, timeTaken] = getResults(
      val,
      sentence,
      time,
      TOTAL_TIME
    );

    setWPM(WPM);
    setAccuracy(accuracy);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCompleted(true);
    addHistory(WPM, accuracy, timeTaken);
  };

  const handleUserType = (e) => {
    let userValue = e.target.value;
    userTypeRef.current = userValue;
    setUserType(userValue);
    if (userValue.length === 1 && !intervalRef.current) {
      startTimer();
    }
    if (userValue.length === sentence.length) {
      stopTest(userTypeRef.current, timeRef.current);
    }
  };

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevVal) => {
        if (prevVal <= 1) {
          stopTest(userTypeRef.current, 0);
          return 0;
        }
        return prevVal - 1;
      });
    }, 1000);
  };

  const resetTest = () => {
    fetchSentence();
    setCompleted(false);
    setUserType("");
    userTypeRef.current = "";
    setTimer(TOTAL_TIME);
  };
  return (
    <>
      <div className="min-h-screen py-14 font-mono w-[90%] max-w-3xl mx-auto flex flex-col items-center bg-gradient-to-b from-blue-50 via-white to-blue-100 rounded-xl shadow-lg">
        <Headings timer={timer} />
        <TestCard
          sentence={sentence}
          userType={userType}
          completed={completed}
          handleUserType={handleUserType}
          wpm={wpm}
          accuracy={accuracy}
          TOTAL_TIME={TOTAL_TIME}
          timer={timer}
          tryAgain={resetTest}
        />
        {pastResults.length ? <PastResults pastResults={pastResults} /> : <></>}
      </div>
    </>
  );
}

export default App;
