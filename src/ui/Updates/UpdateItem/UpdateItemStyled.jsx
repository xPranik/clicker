import styled from "styled-components";

export const UpdateButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 4px;
  font-size: 14px;
  cursor: pointer;
  background: #b9ee75;
  box-shadow: 0 0 4px #88cb31;
  border-radius: 5px;
  color: black;
  border: none;
  text-transform: uppercase;
  img {
    width: 12px;
    margin-right: 4px;
  }
  &:disabled {
    background: ${(props) => (props.sold ? "#e6e6e6" : "#ee7575")};
    box-shadow: 0 0 3px ${(props) => (props.sold ? "#e6e6e6" : "#cb3131")};
    opacity: ${(props) => props.sold && 0.7};
    cursor: default;
  }
`;

export const UpdateItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-bottom: 1px solid black;
`;

export const UpdateItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;
export const UpdateItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UpdateItemTitle = styled.div`
  color: black;
  font-size: 14px;
  font-weight: 500;
`;

export const UpdateItemLvl = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 300;
  background: #4a4a4a;
  padding: 2px 4px;
  border-radius: 5px;
`;
export const UpdateItemPrice = styled.div`
  font-size: 12px;
  font-weight: 300;
  span {
    font-weight: 400;
  }
`;

export const UpdateItemBody = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: #000;
  font-weight: 300;
  span {
    font-weight: 400;
  }
`;
