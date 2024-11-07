import { useParams } from 'react-router-dom'
import { useFetchMenuData } from '../util/customHooks/useFetchMenuData'
import { useCheckNetwork } from '../util/customHooks/useCheckNetwork';

function InfoPage() {
    const { id } = useParams()
    const menuItemData = useFetchMenuData(id);
    const status = useCheckNetwork();

    return status ? <h1>No Internet !!! Please Check your internet connection !!! </h1> : 
    (
        <div>
            <h1 className='text-red-600'>Menu Card</h1>
            {menuItemData?.map((ele) => {
                return (
                    <li>{ele.card?.info?.name}</li>
                )
            })}
        </div>
    )
}

export default InfoPage