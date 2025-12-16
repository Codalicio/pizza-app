import { useState } from "react";
import NavItem from "./NavItem";

export default function Nav() {
  const navItems = ["Pizzas", "Sides", "Desserts", "Drinks", "Deals"];

  const [isActive, setIsActive] = useState("Pizzas");

  return (
    <>
      <div className="flex my-3 border-2">
        {navItems.map((item, index) => (
          <NavItem
            key={item}
            label={item}
            isLast={index === navItems.length - 1}
            isActive={isActive === item}
            onClickItem={() => setIsActive(item)}
          />
        ))}
      </div>
    </>
  );
}
