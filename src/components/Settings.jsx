function Settings({

  focusMinutes,

  breakMinutes,

  setFocusMinutes,

  setBreakMinutes,

  isRunning,

}) {

  return (

    <div className="settings">

      <div>

        <label>
          Focus Minutes
        </label>

        <input
          type="number"

          value={focusMinutes}

          disabled={isRunning}

          onChange={(e) =>
            setFocusMinutes(
              Number(e.target.value)
            )
          }
        />

      </div>

      <div>

        <label>
          Break Minutes
        </label>

        <input
          type="number"

          value={breakMinutes}

          disabled={isRunning}

          onChange={(e) =>
            setBreakMinutes(
              Number(e.target.value)
            )
          }
        />

      </div>

    </div>
  );
}

export default Settings;