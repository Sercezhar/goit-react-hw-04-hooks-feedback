import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.StatisticsWrapper}>
      <ul className={styles['StatisticsсList-names']}>
        <li>Good:</li>
        <li>Neutral:</li>
        <li>Bad:</li>
        <li>Total:</li>
        <li>Positive feedback:</li>
      </ul>
      <ul className={styles['StatisticsсList-numbers']}>
        <li>{good}</li>
        <li>{neutral}</li>
        <li>{bad}</li>
        <li>{total}</li>
        <li>{positivePercentage}%</li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
