import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) // Utilizando el Generic se especifica el tipo de dato que va a utilizar "order" en este caso el type de OrderItem[]

    const addItem = (item: MenuItem) => {

        const newItem : OrderItem = {...item, quantity: 1} // Se le asigna el type de OrderItem al newItem
        setOrder([...order, newItem])
    }

    return {
        addItem
    }
}