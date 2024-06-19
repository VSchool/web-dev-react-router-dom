import { inventory } from "../inventory";
import { useParams } from "react-router-dom";

function InventoryDetails() {

    
  const {id} = useParams()

  const foundItem = inventory.find(item => item.id === id)

  console.log(foundItem)

    return ( 
        <div>
            <h2>{id}</h2>
            <h2>Name: {foundItem.name}</h2>
            <h3>Category : {foundItem.category}</h3>
            <p>Price: {foundItem.price}</p>
            <p>Quantity: {foundItem.quantity}</p>
        </div>
     );
}

export default InventoryDetails;