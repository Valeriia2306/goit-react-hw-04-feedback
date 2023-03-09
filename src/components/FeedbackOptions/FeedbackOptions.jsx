import PropTypes from 'prop-types';
// import styles
import { Tittle, FeedbackList, FeedbackItem, Button } from './Feedback.styled';

const FeedbackOptions = ({ options, onClickFeedback }) => {
  return (
    <section>
      <Tittle>Please leave feedback</Tittle>
      <FeedbackList>
        {options.map((value, index) => (
          <FeedbackItem key={index}>
            <Button onClick={onClickFeedback}>{value}</Button>
          </FeedbackItem>
        ))}
      </FeedbackList>
    </section>
  );
};

FeedbackOptions.propTypes = {
  onClickFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
export { FeedbackOptions };
