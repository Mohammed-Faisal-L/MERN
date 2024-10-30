import React, { useState } from "react";

const VotingSystem = () => {
  const options = ["Party A", "Party B", "Party C"];
  const [votes, setVotes] = useState([0, 0, 0]);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  return (
    <div className="voting">
      <hr />
      <h1>Voting</h1>
      {options.map((option, index) => (
        <div key={index} className="voting-button">
          <button onClick={() => handleVote(index)}>
            Vote for {option} ({votes[index]} votes)
          </button>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default VotingSystem;
