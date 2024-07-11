import type { MenuItem } from "../types"

type MenuItemProps = { // Se crea el prop de menu item
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) { // Se aplica destructuring a la funcion de MenuItem, haciendo que deje de ser de tipo "any"
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => addItem(item)} // Se agrega el item despues de dar click
    >
    
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}
