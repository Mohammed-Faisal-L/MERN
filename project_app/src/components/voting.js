import React, { useState } from "react";
import VotingButton from "./votingbutton";

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
      <h1>Voting</h1>
      {options.map((option, index) => (
        <VotingButton
          key={index}
          index={index}
          option={option}
          votes={votes}
          addVote={handleVote}
        />
      ))}
    </div>
  );
};

export default VotingSystem;
