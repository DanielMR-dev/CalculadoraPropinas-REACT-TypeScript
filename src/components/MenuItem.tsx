import type { MenuItem } from "../types"

type MenuItemProps = { // Se crea el prop de menu item
  item: MenuItem
}

export default function MenuItem({item} : MenuItemProps) { // Se aplica destructuring a la funcion de MenuItem, haciendo que deje de ser de tipo "any"
  return (
    <>
      <p>{item.name}</p>
      <p className="font-black">{item.price}</p>
    </>
  )
}
