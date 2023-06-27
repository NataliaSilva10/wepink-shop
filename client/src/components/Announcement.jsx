import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: rgb(255,228,225);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  border: black 4px;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
