import Card from "../card/Card";

export default function Info({ activeTab }) {
  const basicDetails = {
    Pizzas: {
      title: "Pizzas",
      description:
        "Explore our great range of pizza recipes from the Pizza Hut pizza menu.",
    },
    Sides: {
      title: "Sides",
      description:
        "Explore our great choice of delicious sides to complement your pizzas",
    },
    Desserts: {
      title: "Desserts",
      description:
        "Explore our tempting choice of delicious desserts. Available for delivery and collection.",
    },
    Drinks: {
      title: "Drinks",
      description: "Explore our great selection of refreshing drinks",
    },
    Deals: {
      title: "Deals",
      description: "Check out the latest meal deals available from Pizza Hut",
    },
  };

  const pizzas = [
    {
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita-ultimate-cheese.dd05f6fd1c45d62cdc6c8509d8734f3d.1.jpg",
      title: "Title-amit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae consectetur aliquam illum odio. Earum, est. Delectus neque officia enim, quam inventore ipsam magnam nulla dignissimos voluptas modi, dolorem fugiat.",
    },
    {
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita-ultimate-cheese.dd05f6fd1c45d62cdc6c8509d8734f3d.1.jpg",
      title: "Title-amit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae consectetur aliquam illum odio. Earum, est. Delectus neque officia enim, quam inventore ipsam magnam nulla dignissimos voluptas modi, dolorem fugiat.",
    },
    {
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita-ultimate-cheese.dd05f6fd1c45d62cdc6c8509d8734f3d.1.jpg",
      title: "Title-Pizza By Amit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae consectetur aliquam illum odio. Earum, est. Delectus neque officia enim, quam inventore ipsam magnam nulla dignissimos voluptas modi, dolorem fugiat.",
    },
    {
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita-ultimate-cheese.dd05f6fd1c45d62cdc6c8509d8734f3d.1.jpg",
      title: "Title-amit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae consectetur aliquam illum odio. Earum, est. Delectus neque officia enim, quam inventore ipsam magnam nulla dignissimos voluptas modi, dolorem fugiat.",
    },
    {
      img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita-ultimate-cheese.dd05f6fd1c45d62cdc6c8509d8734f3d.1.jpg",
      title: "Title-amit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae consectetur aliquam illum odio. Earum, est. Delectus neque officia enim, quam inventore ipsam magnam nulla dignissimos voluptas modi, dolorem fugiat.",
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-3xl text-center my-3">
          Our {basicDetails[activeTab].title}
        </h1>
        <p className="text-md text-center mb-15">
          {basicDetails[activeTab].description}
        </p>
      </div>
      <div className="border-2 flex flex-wrap gap-3 w-[1200px] justify-evenly">
        {pizzas.map((data, index) => {
          return (
            <Card
              key={index}
              image={data.img}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </div>
    </>
  );
}
