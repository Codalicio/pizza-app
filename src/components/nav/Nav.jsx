import NavItem from "./NavItem";

export default function Nav() {
  const navItems = ["Pizzas", "Sides", "Desserts", "Drinks", "Deals"];
  return (
    <>
      <div className="flex my-3 border-2">
        {navItems.map((item, index) => (
          <NavItem
            key={item}
            label={item}
            isLast={index === navItems.length - 1}
          />
        ))}
      </div>
    </>
  );
}
