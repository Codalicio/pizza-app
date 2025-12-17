import NavItem from "./NavItem";

export default function Nav({ activeTab, setActiveTab }) {
  const navItems = ["Pizzas", "Sides", "Desserts", "Drinks", "Deals"];

  return (
    <>
      <div className="flex flex-col sm:flex-row my-3 border-2 border-gray-300">
        {navItems.map((item, index) => (
          <NavItem
            key={item}
            label={item}
            isLast={index === navItems.length - 1}
            isActive={activeTab === item}
            onClickItem={() => setActiveTab(item)}
          />
        ))}
      </div>
    </>
  );
}
