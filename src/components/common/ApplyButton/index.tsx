import React from "react";
import styled from "styled-components";
interface Props {
  handleClickApplyButton: () => void;
}

const Container = styled.div`
  background: tomato;
  padding: 1rem 1rem;
`;
function ApplyButton({ handleClickApplyButton }: Props) {
  return <Container onClick={handleClickApplyButton}>ApplyButton</Container>;
}

export default ApplyButton;
