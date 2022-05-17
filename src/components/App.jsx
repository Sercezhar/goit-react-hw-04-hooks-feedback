import { useState } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Feedback/Statistics';
import { Notification } from './Notification';
import { Container } from './Container';

export function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const feedbackOptions = ['good', 'neutral', 'bad'];
  const totalFeedback = goodFeedback + neutralFeedback + badFeedback;

  function leaveFeedback(type) {
    if (type === 'good') {
      setGoodFeedback(prevState => prevState + 1);
    }
    if (type === 'neutral') {
      setNeutralFeedback(prevState => prevState + 1);
    }
    if (type === 'bad') {
      setBadFeedback(prevState => prevState + 1);
    }
  }

  function countPositiveFeedbackPercentage() {
    if (totalFeedback) {
      const goodFeedbackPercantage = Math.round(
        (100 * goodFeedback) / totalFeedback
      );
      return goodFeedbackPercantage;
    }

    return 0;
  }

  return (
    <div>
      <Container>
        <Section tag={'h1'} title={'Please leave feedback'}>
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>

        <Section tag={'h2'} title={'Statistics'}>
          {totalFeedback > 0 ? (
            <Statistics
              good={goodFeedback}
              neutral={neutralFeedback}
              bad={badFeedback}
              total={totalFeedback}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="*There is no feedback*" />
          )}
        </Section>
      </Container>
    </div>
  );
}
