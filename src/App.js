import React, { useEffect } from "react";
import "./App.css";
import Target from "./ui/Target/Target";
import { useDispatch, useSelector } from "react-redux";
import Updates from "./ui/Updates/Updates";
import { update } from "./store/actions/updatesActions";
import { AppStyled } from "./AppStyled";

function App() {
  const { total } = useSelector((state) => state.updates);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(update());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppStyled>
      <Updates type="shop" />
      <Target total={total} />
      <Updates type="upgrades" />
    </AppStyled>
  );
}

export default App;
