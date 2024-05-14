import React, { useState } from "react";

function AgeCalculator() {
  const [day, setday] = useState("");
  const [age, setage] = useState(null);
  const headle = () => {
    const day1 = new Date(day);
    const todat = new Date();
    const deiff = todat - day1;
    const newdiff = new Date(deiff);
    const headle = Math.abs(newdiff.getFullYear() - 1970);
    setage(headle);
  };
  return (
    <div>
      <label htmlFor="day">my date</label>
      <input
        type="date"
        id="day"
        value={day}
        onChange={(e) => setday(e.target.value)}
      />
      <button onClick={headle}>enter</button>
      {age !== null && (
        <div>
          <p>{age}</p>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;
