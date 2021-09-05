import styled from "styled-components";

export const TargetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const TargetStyled = styled.div`
  width: 300px;
  height: 300px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 0 0 30px gray;
  box-shadow: 0 0 30px ${(props) => props.randomColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const Total = styled.div`
  color: #000;
  font-size: 24px;
  text-align: center;
  user-select: none;
`;
