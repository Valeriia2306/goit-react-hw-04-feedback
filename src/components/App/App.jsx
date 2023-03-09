import React from 'react';

import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCounter = key => {
    this.setState(prevState => ({ [key]: (prevState[key] += 1) }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral } = this.state;
    const totalFeedback = this.countTotalFeedback();

    if (good === 0) {
      return Math.round((neutral / totalFeedback) * 50);
    }

    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const statisticsList = Object.keys(this.state);
    const percentage = this.countPositiveFeedbackPercentage();
    const totalFeedback = this.countTotalFeedback();
    return (
      <Container>
        <FeedbackOptions
          options={statisticsList}
          onClickFeedback={this.handleCounter}
        />
        {totalFeedback !== 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={percentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}

export { App };
