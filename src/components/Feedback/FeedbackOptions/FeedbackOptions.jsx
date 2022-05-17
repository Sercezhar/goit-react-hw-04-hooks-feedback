import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.FeedbackOptionsWrapper}>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={styles.FeedbackBtn}
            onClick={() => onLeaveFeedback('goodFeedback')}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
