function Timer({ secondsLeft, mode }) {
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="timer-section">
      <p className="mode-text">
        {mode === "focus"
          ? "Focus Session"
          : "Break Time"}
      </p>

      <div className="timer">
        {minutes}:{seconds}
      </div>
    </div>
  );
}

export default Timer;