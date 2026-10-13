"use client";

export default function MenuError({ error, reset }) {
  return (
    <div className="state-banner error">
      <h3>⚠️ Something went wrong!</h3>
      <p style={{ margin: "10px 0" }}>{error?.message || "Could not load dishes."}</p>
      <button type="button" className="btn-primary" onClick={() => reset()}>
        ↻ Try Again
      </button>
    </div>
  );
}