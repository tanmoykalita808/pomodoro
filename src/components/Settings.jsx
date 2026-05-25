function Settings({
  focusMinutes,
  breakMinutes,
  setFocusMinutes,
  setBreakMinutes,
}) {
  return (
    <div className="settings">
      <div>
        <label>Focus Minutes</label>

        <input
          type="number"
          value={focusMinutes}
          onChange={(e) => setFocusMinutes(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Break Minutes</label>

        <input
          type="number"
          value={breakMinutes}
          onChange={(e) => setBreakMinutes(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Settings;