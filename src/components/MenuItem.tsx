import type { MenuItem } from "../types"

type MenuItemProps = { // Se crea el prop de menu item
  item: MenuItem
}

export default function MenuItem({item} : MenuItemProps) { // Se aplica destructuring a la funcion de MenuItem, haciendo que deje de ser de tipo "any"
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
    >
    
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}
