export default function Card({ image, title, description }) {
  return (
    <>
      <div className="w-[25%] border-2 border-gray-300 px-3">
        <img src={image} className="w-full my-3" />
        <h2 className="my-3 font-bold text-md">{title}</h2>
        <p className="my-3 text-sm">{description}</p>
        <button className="w-full bg-green-700 py-3 rounded-md my-3 text-[#ffffff] cursor-pointer">
          View More
        </button>
      </div>
    </>
  );
}
