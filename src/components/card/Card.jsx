export default function Card({ image, title, description }) {
  return (
    <>
      <div className="border-2 border-gray-300 p-4 rounded-md flex flex-col items-center">
        <img src={image} className="w-full my-3 object-cover" />
        <h2 className="my-2 font-bold text-sm sm:text-md text-center">
          {title}
        </h2>
        <p className="my-2 text-xs sm:text-sm text-center">{description}</p>
        <button className="mt-auto w-full bg-green-700 py-2 sm:py-3 rounded-md my-3 text-[#ffffff] cursor-pointer">
          View More
        </button>
      </div>
    </>
  );
}
