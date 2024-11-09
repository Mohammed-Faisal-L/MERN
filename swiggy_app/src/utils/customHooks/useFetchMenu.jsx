import { useEffect, useState } from "react";
import { menuUrl } from "../constants/myUrls";

export const useFetchMenu = (id) => {
  const [menuItemData, setMenuItemData] = useState([]);
  const [tempData, setTempData] = useState([]);

  const fetchData = async () => {
    const data = await fetch(`${menuUrl}${id}`);
    const menuData = await data.json();
    const myMenuList =
      menuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
        ?.card?.card?.itemCards;
    setMenuItemData(myMenuList);
    setTempData(myMenuList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { menuItemData, tempData, setTempData };
};
