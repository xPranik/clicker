import { updatesActionType } from "../../utils/consts";

export const buyProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: updatesActionType.BUY_PRODUCT, id });
    dispatch(update());
  };
};
export const buyUpgrade = (id) => {
  return async (dispatch) => {
    dispatch({ type: updatesActionType.BUY_UPGRADE, id });
    dispatch(update());
  };
};

export const clickTotal = () => {
  return async (dispatch) => {
    dispatch({ type: updatesActionType.CLICK_TOTAL });
  };
};

export const update = () => {
  return async (dispatch) => {
    dispatch({ type: updatesActionType.UPDATE });
  };
};
