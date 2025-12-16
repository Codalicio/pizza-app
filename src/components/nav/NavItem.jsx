export default function NavItem({ label, isLast, isActive, onClickItem }) {
  return (
    <>
      <h2
        className={`w-[20%] py-3 cursor-pointer border-2 border-gray-300 border-t-0 border-b-0 border-l-0 text-center ${
          isLast ? "border-r-0" : ""
        } ${isActive ? "bg-red-500 text-[#fff]" : ""}`}
        onClick={onClickItem}
      >
        {label}
      </h2>
    </>
  );
}
