import styled from '@emotion/styled';

const Tittle = styled.h2`
  text-align: center;
  color: hotpink;
`;
const StatisticList = styled.ul`
  margin-left: 40px;
  margin-bottom: 15px;
  padding: 0;
  list-style: none;
`;

const StatisticItem = styled.li`
  font-size: 17px;
  :not(:last-child) {
    margin-bottom: 8px;
  }
  color: hotpink;
`;

const Label = styled.span`
  display: block;
  margin-left: 40px;
  font-size: 19px;
  margin-bottom: 40px;
  color: hotpink;
`;

const Text = styled.p`
  font-size: 20px;
  text-align: center;
  color: hotpink;
`;
export { Tittle, StatisticList, StatisticItem, Label, Text };
