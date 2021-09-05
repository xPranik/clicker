import React from "react";
import {
  UpdateButton,
  UpdateItemBody,
  UpdateItemFooter,
  UpdateItemHeader,
  UpdateItemLvl,
  UpdateItemPrice,
  UpdateItemStyled,
  UpdateItemTitle,
} from "./UpdateItemStyled";
import money_icon from "./../../../static/icons/money.svg";

const UpdateItem = ({ update, buyHandler, total, type }) => {
  const price = update.price;
  const onBuyHandler = () => {
    buyHandler(update.id);
  };
  return (
    <UpdateItemStyled>
      <UpdateItemHeader>
        <UpdateItemTitle>{update.name}</UpdateItemTitle>
        {update.lvl >= 0 && <UpdateItemLvl>level {update.lvl}</UpdateItemLvl>}
      </UpdateItemHeader>
      {type === "shop" && (
        <UpdateItemBody>
          Gives <span>{update.cps}</span> clicks per second
          <br />
          {update.lvl > 0 && `Total cps: ${update.cps * update.lvl}`}
        </UpdateItemBody>
      )}
      <UpdateItemFooter>
        <UpdateItemPrice>Price: {update.price}</UpdateItemPrice>
        <UpdateButton
          disabled={total < update.price || total < price || update.sold}
          onClick={onBuyHandler}
          sold={update.sold}
        >
          <img src={money_icon} alt="money" />
          Buy
        </UpdateButton>
      </UpdateItemFooter>
    </UpdateItemStyled>
  );
};

export default UpdateItem;
