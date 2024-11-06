import { useEffect, useState } from "react";
import Card from "./Card";

function Body() {
  const [data, setData] = useState([]);

  let fetchData = async () => {
    let response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    let jsonData = await response.json();
    let restaurants = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setData(restaurants);
}
  
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="d-flex flex-wrap gap-4 justify-content-around mt-4">
       {data?.map((restaurant, index)=>(
        <Card key={index} restaurant={restaurant}/>
       ))}
    </div>
  )
}

export default Body;