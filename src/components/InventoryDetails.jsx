import { useParams } from "react-router-dom";
import { inventory } from "../inventory";

function InventoryDetails() {

    const {id} = useParams()
    
    const foundItem = inventory.find(item => item.id === id)

    return ( 
        <div>
            <h1>{foundItem.name}</h1>
            <h1>{foundItem.price}</h1>
            <h1>{foundItem.quantity}</h1>
        </div>
     );
}

export default InventoryDetails;