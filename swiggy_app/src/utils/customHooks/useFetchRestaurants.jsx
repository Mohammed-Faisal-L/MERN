import { useEffect, useState } from "react";
import { swiggyUrl } from "../constants/myUrls";

export const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [tempData, setTempData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(swiggyUrl);
    const jsonData = await response.json();
    const fetchedRestaurants =
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurants(fetchedRestaurants);
    setTempData(fetchedRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { restaurants, tempData, setTempData };
};
