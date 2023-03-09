import { useState } from 'react';

import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

// Use hookies
function App() {
  const [good, setCounterGood] = useState(0);
  const [neutral, setCounterNeutral] = useState(0);
  const [bad, setCounterBad] = useState(0);

  const handleCounter = e => {
    const key = e.currentTarget.textContent;

    switch (key) {
      case 'good':
        setCounterGood(state => state + 1);
        break;
      case 'neutral':
        setCounterNeutral(state => state + 1);
        break;
      case 'bad':
        setCounterBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const feedbackList = ['good', 'neutral', 'bad'];

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = totalFeedback();
    if (good === 0) {
      return Math.round((neutral / total) * 50);
    }

    return Math.round((good / total) * 100);
  };

  return (
    <Container>
      <FeedbackOptions options={feedbackList} onClickFeedback={handleCounter} />
      {totalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={good + neutral + bad}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
}

export { App };
