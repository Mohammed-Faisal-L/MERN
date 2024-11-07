import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Menu() {
    const [menuItemData, setMenuItemData] = useState([])
    const { id } = useParams()
    console.log(id, "param");

    const fetchData = async () =>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        console.log(data);
        const menuData = await data.json();        
        console.log(menuData, "fetchedData");
        const myMenuList = menuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
   
        setMenuItemData(myMenuList)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1 className='mb-5'>Menu Card</h1>
            <div className="d-flex justify-content-center flex-wrap">
            {menuItemData?.map((ele) => {
                return (
              <div className="card mb-3 w-75 shadow">
                <div className="row g-0">
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">{ele.card?.info?.name}</h5>
                      <p className="card-text mt-3">{ele.card?.info?.description}</p>
                      <div className='d-flex justify-content-start mt-3'>
                        <svg width="20" height="20" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="12" fill="green" />
                          <path d="M12 2.5l2.89 6.14 6.49.59-4.84 4.41 1.56 6.36-5.62-3.5-5.62 3.5 1.56-6.36-4.84-4.41 6.49-.59L12 2.5z" fill="white" />
                        </svg>
                        <p className="card-text ms-2 text-success"><small class="text-body-secondary fw-bold">{ele.card?.info?.ratings?.aggregatedRating?.rating}</small></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${ele.card?.info?.imageId}`} className="img-fluid rounded-start" alt="..."/>
                    <div className='d-flex justify-content-center p-2'>
                      <button type="button" class="btn btn-outline-success z-3 fw-bold rounded ps-5 pe-5">ADD</button>
                    </div>
                    <p style={{textAlign: 'center'}} className='fw-light'>Customisable</p>
                  </div>
                </div>
              </div>
                )
            })}
            </div>
        </div>
    )
}

export default Menu;