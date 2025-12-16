export default function NavItem({ label, isLast }) {
  return (
    <>
      <h2
        className={`w-[20%] py-3 border-2 border-t-0 border-b-0 border-l-0 text-center ${
          isLast ? "border-r-0" : ""
        }`}
      >
        {label}
      </h2>
    </>
  );
}
