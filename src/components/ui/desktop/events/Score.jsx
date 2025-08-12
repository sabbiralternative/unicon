import ScoreBottomPart from "../../Score/ScoreBottomPart";
import ScoreTopPart from "../../Score/ScoreTopPart";

const Score = ({ iscore }) => {
  return (
    <div
      style={{ marginTop: "2px" }}
      id="score-board"
      className="score-board  show mb-md-3"
    >
      <ScoreTopPart isMobile={false} iscore={iscore} />
      <ScoreBottomPart isMobile={false} iscore={iscore} />
    </div>
  );
};

export default Score;
