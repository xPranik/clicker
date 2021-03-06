import { updatesActionType } from "../../utils/consts";
import { abbrNum } from "../../utils/functions";

export const initState = {
  shop: {
    1050: {
      id: "1050",
      name: "GeForce 1050",
      lvl: 0,
      price: 2,
      priceMultiplier: 1.5,
      cps: 1,
    },
    1060: {
      id: "1060",
      name: "GeForce 1060",
      lvl: 0,
      price: 50,
      priceMultiplier: 2,
      cps: 10,
    },
    1070: {
      id: "1070",
      name: "GeForce 1070",
      lvl: 0,
      price: 200,
      priceMultiplier: 2.5,
      cps: 25,
    },
    1080: {
      id: "1080",
      name: "GeForce 1080",
      lvl: 0,
      price: 500,
      priceMultiplier: 3,
      cps: 35,
    },
    2060: {
      id: "2060",
      name: "GeForce 2060",
      lvl: 0,
      price: 1000,
      priceMultiplier: 3.5,
      cps: 50,
    },
  },
  upgrades: {
    doubleclick: {
      id: "doubleclick",
      name: "Double click",
      price: 1000,
      clickMultiplayer: 2,
      cpsMultiplayer: 1,
      sold: false,
    },
    doublecps: {
      id: "doublecps",
      name: "Double CPS",
      price: 5000,
      clickMultiplayer: 1,
      cpsMultiplayer: 2,
      sold: false,
    },
    doubleclick_2: {
      id: "doubleclick_2",
      name: "Double click",
      price: 10000,
      clickMultiplayer: 2,
      cpsMultiplayer: 1,
      sold: false,
    },
    doublecps_2: {
      id: "doublecps_2",
      name: "Double CPS",
      price: 50000,
      clickMultiplayer: 1,
      cpsMultiplayer: 2,
      sold: false,
    },
    doubleclick_3: {
      id: "doubleclick_3",
      name: "Double click",
      price: 50000,
      clickMultiplayer: 2,
      cpsMultiplayer: 1,
      sold: false,
    },
    doublecps_3: {
      id: "doublecps_3",
      name: "Double CPS",
      price: 100000,
      clickMultiplayer: 1,
      cpsMultiplayer: 2,
      sold: false,
    },
    tripleclick: {
      id: "tripleclick",
      name: "Triple click",
      price: 500000,
      clickMultiplayer: 3,
      cpsMultiplayer: 1,
      sold: false,
    },
    triplecps: {
      id: "triplecps",
      name: "Double CPS",
      price: 1000000,
      clickMultiplayer: 1,
      cpsMultiplayer: 3,
      sold: false,
    },
  },
  clickMultiplayer: 1,
  cpsMultiplayer: 1,
  total: 0,
  totalFriendly: 0,
  cps: 0,
};

export const updatesReducer = (state = initState, action) => {
  switch (action.type) {
    case updatesActionType.BUY_PRODUCT: {
      return {
        ...state,
        shop: {
          ...state.shop,
          [action.id]: {
            ...state.shop[action.id],
            lvl: state.shop[action.id].lvl + 1,
            price: Math.floor(
              state.shop[action.id].price *
                state.shop[action.id].priceMultiplier
            ),
          },
        },
        total: state.total - state.shop[action.id].price,
        totalFriendly: abbrNum(state.total - state.shop[action.id].price),
      };
    }
    case updatesActionType.BUY_UPGRADE: {
      return {
        ...state,
        upgrades: {
          ...state.upgrades,
          [action.id]: {
            ...state.upgrades[action.id],
            sold: true,
          },
        },
        clickMultiplayer:
          state.clickMultiplayer === 1
            ? state.upgrades[action.id].clickMultiplayer
            : state.clickMultiplayer +
              state.upgrades[action.id].clickMultiplayer,
        cpsMultiplayer:
          state.cpsMultiplayer === 1
            ? state.upgrades[action.id].cpsMultiplayer
            : state.cpsMultiplayer + state.upgrades[action.id].cpsMultiplayer,
        total: state.total - state.upgrades[action.id].price,
        totalFriendly: abbrNum(state.total - state.upgrades[action.id].price),
      };
    }
    case updatesActionType.CLICK_TOTAL: {
      return {
        ...state,
        total: state.total + state.clickMultiplayer,
        totalFriendly: abbrNum(state.total + state.clickMultiplayer),
      };
    }
    case updatesActionType.UPDATE: {
      const res = Object.values(state.shop).reduce((acc, update) => {
        return update.lvl * update.cps + acc;
      }, 0);
      return {
        ...state,
        cps: res * state.cpsMultiplayer,
        totalFriendly: abbrNum(state.cps + state.total),
        total: state.cps + state.total,
      };
    }
    default:
      return state;
  }
};
