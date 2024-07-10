export type MenuItem = {
    id: number,
    name: string,
    price: number
}

export type OrderItem = MenuItem & { // Se crea el type para la orden especificamente
    quantity: number
}