function Timer({ secondsLeft, mode }) {
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="timer-section">
      <h2>{mode === "focus" ? "Focus Time" : "Break Time"}</h2>

      <div className="timer">
        {minutes}:{seconds}
      </div>
    </div>
  );
}

export default Timer;