import styled from '@emotion/styled';

const Tittle = styled.h2`
  margin-bottom: 50px;
  font-size: 30px;

  color: hotpink;
  text-align: center;
`;

const FeedbackList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 55px;
  padding: 0;
  list-style: none;
`;

const FeedbackItem = styled.li``;

const Button = styled.button`
  padding: 22px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export { Tittle, FeedbackList, FeedbackItem, Button };
