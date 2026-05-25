function Controls({
  isRunning,
  startTimer,
  pauseTimer,
  resetTimer,
}) {
  return (
    <div className="controls">

      {!isRunning ? (
        <button
          className="primary-btn"
          onClick={startTimer}
        >
          Start
        </button>
      ) : (
        <button
          className="primary-btn"
          onClick={pauseTimer}
        >
          Pause
        </button>
      )}

      <button
        className="secondary-btn"
        onClick={resetTimer}
      >
        Reset
      </button>

    </div>
  );
}

export default Controls;