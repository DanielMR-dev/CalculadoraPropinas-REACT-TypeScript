import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) // Utilizando el Generic se especifica el tipo de dato que va a utilizar "order" en este caso el type de OrderItem[]
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        // Verificar si ya existe el item en la orden 
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist) { // El item existe
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? // Se genera una copia de order en updatedOrder
                {...orderItem, quantity : orderItem.quantity + 1} // Si el id del item a agregar ya está en order item, se aumenta la cantidad
                : orderItem // Retorna los elementos que no coinciden con el id que estamos buscando
            )
            setOrder(updatedOrder)
        } else { // El item NO existe
            const newItem : OrderItem = {...item, quantity: 1} // Se le asigna el type de OrderItem al newItem
            setOrder([...order, newItem])
        }
        
    }

    const removeItem = (id: MenuItem['id']) => { // Sintaxis de lookUp
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}