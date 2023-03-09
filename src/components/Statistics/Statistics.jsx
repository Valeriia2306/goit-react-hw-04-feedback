import PropTypes from 'prop-types';
// import styles

import {
  Tittle,
  StatisticList,
  StatisticItem,
  Label,
  Text,
} from './Statistics.styled';
//

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <section>
      <Tittle>Statistics</Tittle>
      <StatisticList>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
      </StatisticList>
      <Label>Total: {total}</Label>
      <Text>Positive feedback: {positivePercentage}%</Text>
    </section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export { Statistics };
