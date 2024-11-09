import Card from "./Card";
import Header from "./Header";
import { useFetchRestaurants } from "../utils/customHooks/useFetchRestaurants";
import { useCheckNetwork } from "../utils/customHooks/useCheckNetwork";

function Body() {
  let { restaurants, tempData, setTempData } = useFetchRestaurants();
  const checkNetwork = useCheckNetwork();

  return checkNetwork ? (
    <h1> No Internet !!! Please Check Your Internet Connection !!!</h1>
  ) : (
    <div>
      <Header data={restaurants} setTempData={setTempData} />
      <div className="d-flex flex-wrap gap-4 justify-content-center mt-4">
        {tempData?.map((restaurant, index) => (
          <Card key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
