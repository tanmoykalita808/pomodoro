import { useEffect, useState } from "react";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import Settings from "./components/Settings";
import History from "./components/History";

function App() {
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  const [mode, setMode] = useState("focus");
  const [isRunning, setIsRunning] = useState(false);

  const [secondsLeft, setSecondsLeft] = useState(focusMinutes * 60);

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("pomodoro-history");
    const today = new Date().toDateString();

    if (!saved) return [];

    const parsed = JSON.parse(saved);

    if (parsed.date !== today) {
      localStorage.removeItem("pomodoro-history");
      return [];
    }

    return parsed.sessions;
  });

  useEffect(() => {
    localStorage.setItem(
      "pomodoro-history",
      JSON.stringify({
        date: new Date().toDateString(),
        sessions: history,
      })
    );
  }, [history]);

  useEffect(() => {
  if (mode === "focus") {
    setSecondsLeft(focusMinutes * 60);
  }
}, [focusMinutes]);

useEffect(() => {
  if (mode === "break") {
    setSecondsLeft(breakMinutes * 60);
  }
}, [breakMinutes]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev === 1) {
            handleSessionEnd();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleSessionEnd = () => {
    const audio = new Audio(
      "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
    );
    audio.play();

    if (mode === "focus") {
      const newSession = {
        duration: focusMinutes,
        time: new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        }),
      };

      setHistory((prev) => [newSession, ...prev]);

      setMode("break");
      setSecondsLeft(breakMinutes * 60);
    } else {
      setMode("focus");
      setSecondsLeft(focusMinutes * 60);
    }
  };

  const startTimer = () => setIsRunning(true);

  const pauseTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);

    if (mode === "focus") {
      setSecondsLeft(focusMinutes * 60);
    } else {
      setSecondsLeft(breakMinutes * 60);
    }
  };

  return (
    <div className={`app ${mode}`}>
      <div className="container">
        <h1>Pomodoro Timer</h1>

        <Timer secondsLeft={secondsLeft} mode={mode} />

        <Controls
          isRunning={isRunning}
          startTimer={startTimer}
          pauseTimer={pauseTimer}
          resetTimer={resetTimer}
        />

        <Settings
          focusMinutes={focusMinutes}
          breakMinutes={breakMinutes}
          setFocusMinutes={setFocusMinutes}
          setBreakMinutes={setBreakMinutes}
        />

        <History history={history} />
      </div>
    </div>
  );
}

export default App;