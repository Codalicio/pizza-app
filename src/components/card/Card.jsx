export default function Card({ image, title, description }) {
  return (
    <>
      <div className="border-2 border-gray-300 p-4 rounded-md">
        <img src={image} className="w-full my-3 object-cover" />
        <h2 className="my-2 font-bold text-sm sm:text-md">{title}</h2>
        <p className="my-2 text-xs sm:text-sm">{description}</p>
        <button className="w-full bg-green-700 py-2 rounded-md my-3 text-[#ffffff] cursor-pointer">
          View More
        </button>
      </div>
    </>
  );
}
