function ProgressRing({
  secondsLeft,
  totalSeconds,
}) {

  const radius = 135;

  const circumference =
    2 * Math.PI * radius;

  const progress =
    secondsLeft / totalSeconds;

  const strokeDashoffset =
    circumference * (1 - progress);

  return (

    <div className="ring-wrapper">

      <svg
        width="320"
        height="320"
        className="progress-ring"
      >

        <circle
          className="ring-bg"

          strokeWidth="12"

          fill="transparent"

          r={radius}

          cx="160"
          cy="160"
        />

        <circle
          className="ring-progress"

          strokeWidth="12"

          fill="transparent"

          r={radius}

          cx="160"
          cy="160"

          style={{
            strokeDasharray:
              circumference,

            strokeDashoffset,
          }}
        />

      </svg>

    </div>
  );
}

export default ProgressRing;