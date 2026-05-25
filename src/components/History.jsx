function History({ history }) {
  return (
    <div className="history">
      <h3>Today's Sessions</h3>

      {history.length === 0 ? (
        <p>No sessions yet</p>
      ) : (
        history.map((session, index) => (
          <div key={index} className="session-card">
            ✓ {session.duration}:00 focus — {session.time}
          </div>
        ))
      )}
    </div>
  );
}

export default History;