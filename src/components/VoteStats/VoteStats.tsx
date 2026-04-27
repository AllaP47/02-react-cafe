import css from './VoteStats.module.css'

const VoteStats = ({ stats, total }: { stats: Votes; total: number }) => {

  const positive = total > 0 ? Math.round((stats.good / total) * 100) : 0;

  return (
    <div className={css.container}>
      <p className={css.stat}>Good: <strong>{stats.good}</strong></p>
      <p className={css.stat}>Neutral: <strong>{stats.neutral}</strong></p>
      <p className={css.stat}>Bad: <strong>{stats.bad}</strong></p>
      <p className={css.stat}>Total: <strong>{total}</strong></p>
      <p className={css.stat}>Positive: <strong>{positive}%</strong></p>
    </div>
  
  );
};

export default VoteStats;