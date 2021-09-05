import React, { useState } from "react";
import { TargetStyled, TargetWrapper, Total } from "./TargetStyled";
import { useDispatch, useSelector } from "react-redux";
import { clickTotal } from "../../store/actions/updatesActions";

const Target = () => {
  const { cps, totalFriendly } = useSelector((state) => state.updates);
  const [randomColor, setRandomColor] = useState("#000");
  const dispatch = useDispatch();

  const targetClicKHandler = () => {
    setRandomColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    dispatch(clickTotal());
  };

  return (
    <TargetWrapper>
      <h1>Total CPS: {cps}</h1>
      <TargetStyled onClick={targetClicKHandler} randomColor={randomColor}>
        <Total>{totalFriendly}</Total>
      </TargetStyled>
    </TargetWrapper>
  );
};

export default Target;
