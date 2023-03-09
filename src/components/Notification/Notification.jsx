import PropTypes from 'prop-types';
// import styles
import { Notify } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <>
      <Notify>{message}</Notify>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export { Notification };
