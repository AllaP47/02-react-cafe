import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css'

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  total: number;
}

const VoteOptions = ({ onVote, onReset, total }: VoteOptionsProps) => {

  return (
    <div className={css.container}>
     <button className={css.btn} onClick={() => onVote('good')}>Good</button>
      <button className={css.btn} onClick={() => onVote('neutral')}>Neutral</button>
      <button className={css.btn} onClick={() => onVote('bad')}>Bad</button>
     {total > 0 && (
  <button className={`${css.button} ${css.reset}`} onClick={onReset}>
    Reset
  </button>
)}
    </div >
  );

};

export default VoteOptions
