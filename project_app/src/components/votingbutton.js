import React from "react";

function VotingButton({ index, option, addVote, votes }) {
  return (
    <div key={index} className="voting-button">
      <button onClick={() => addVote(index)}>
        Vote for {option} ({votes[index]} votes)
      </button>
    </div>
  );
}

export default VotingButton;