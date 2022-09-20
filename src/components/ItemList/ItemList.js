import Item from "../Item/Item"
import { CartContex } from "../../context/CartContex";
import { useContext } from "react";

const ItemList = ({ itemList }) => {

  const { productCartList, isInCart } = useContext(CartContex);

  const itemStock = (item) => {
    if (isInCart(item.id)) {
      const productoExistente = productCartList.find(product => product.id === item.id)
      return item.stock - productoExistente.quantity
    } else {
      return item.stock
    }
  }

  return (
    <>
      {itemList?.map((reserva) => {
        return (
          <Item
            key={reserva.id}
            id={reserva.id}
            nombre={reserva.nombre}
            precio={reserva.precio}
            imagen={reserva.imagen}
            stock={itemStock(reserva)}
          />
        )
      })}
    </>
  )
}

export default ItemList