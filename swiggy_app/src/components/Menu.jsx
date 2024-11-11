import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import Header from "./Header";
import { useFetchMenu } from "../utils/customHooks/useFetchMenu";

function Menu() {
  const { id } = useParams();
  let { menuItemData, tempData, setTempData } = useFetchMenu(id);

  return (
    <div>
      <Header data={menuItemData} setTempData={setTempData} />
      <h1 className="mb-5">Menu Cards</h1>
      <div className="d-flex justify-content-center flex-wrap">
        {tempData?.map((ele, index) => {
          return <MenuCard key={index} ele={ele} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
