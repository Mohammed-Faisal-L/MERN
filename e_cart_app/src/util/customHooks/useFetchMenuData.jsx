import { useEffect, useState } from "react";
import { menuDataUrl } from "../constants";

 export const useFetchMenuData = (id) => {
    const [menuItemData, setMenuItemData] = useState([])
    const fetchData = async() => {
        const data = await fetch(`${menuDataUrl}${id}`)
        const menuData = await data.json();
        console.log(menuData, " fetchedData");
        const myMenuList = menuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        console.log(myMenuList);
        setMenuItemData(myMenuList)
    }

    useEffect( () => {
       fetchData();
    }, [])

    return menuItemData;
 }