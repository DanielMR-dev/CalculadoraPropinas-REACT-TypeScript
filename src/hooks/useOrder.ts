import { useState } from "react"
import type { OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) // Utilizando el Generic se especifica el tipo de dato que va a utilizar "order" en este caso el type de OrderItem[]
    const addItem = () => {
        console.log("Agregando")
    }

    return {
        addItem
    }
}