function Controls({
  isRunning,
  startTimer,
  pauseTimer,
  resetTimer,
}) {
  return (
    <div className="controls">
      {!isRunning ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={pauseTimer}>Pause</button>
      )}

      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Controls;