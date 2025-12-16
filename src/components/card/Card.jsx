export default function Card() {
  return (
    <>
      <div className="w-[25%] border-2 px-3">
        <img
          src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita-ultimate-cheese.dd05f6fd1c45d62cdc6c8509d8734f3d.1.jpg"
          alt="pizza image"
          className="w-[100%] my-3"
        />
        <h2 className="my-3 font-bold text-md">Title</h2>
        <p className="my-3 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          recusandae consectetur aliquam illum odio. Earum, est. Delectus neque
          officia enim, quam inventore ipsam magnam nulla dignissimos voluptas
          modi, dolorem fugiat.
        </p>
        <button className="w-[100%] bg-green-700 py-3 rounded-md my-3 text-[#ffffff] cursor-pointer">
          View More
        </button>
      </div>
    </>
  );
}
