import React from "react";
import UpdateItem from "./UpdateItem/UpdateItem";
import { UpdatesWrapper } from "./UpdatesStyled";
import { buyProduct, buyUpgrade } from "../../store/actions/updatesActions";
import { useDispatch, useSelector } from "react-redux";

const Updates = ({ type }) => {
  const { shop, upgrades, total } = useSelector((state) => state.updates);
  const dispatch = useDispatch();

  const buyHandler = (id) => {
    dispatch(type === "shop" ? buyProduct(id) : buyUpgrade(id));
  };

  const filteredList =
    type === "shop"
      ? Object.values(shop)
      : Object.values(upgrades).filter((upgrade) => !upgrade.sold);

  return (
    <UpdatesWrapper>
      {filteredList.map((update) => (
        <UpdateItem
          key={update.id}
          buyHandler={buyHandler}
          total={total}
          type={type}
          update={update}
        />
      ))}
    </UpdatesWrapper>
  );
};

export default Updates;
