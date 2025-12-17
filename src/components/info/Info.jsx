import Card from "../card/Card";

export default function Info({ activeTab, searchTerm }) {
  const basicDetails = {
    Pizzas: {
      title: "Pizzas",
      description:
        "Explore our great range of pizza recipes from the Pizza Hut pizza menu.",
      products: [
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
        {
          img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita-ultimate-cheese.dd05f6fd1c45d62cdc6c8509d8734f3d.1.jpg",
          title: "Title-amit",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae consectetur aliquam illum odio. Earum, est. Delectus neque officia enim, quam inventore ipsam magnam nulla dignissimos voluptas modi, dolorem fugiat.",
        },
      ],
    },
    Sides: {
      title: "Sides",
      description:
        "Explore our great choice of delicious sides to complement your pizzas",
      products: [
        {
          img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/loaded-veggie-bbq-single.df6b3135f20dc413ff9220e275dc1350.1.jpg",
          title: "Title-amit",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae consectetur aliquam illum odio. Earum, est. Delectus neque officia enim, quam inventore ipsam magnam nulla dignissimos voluptas modi, dolorem fugiat.",
        },
        {
          img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/loaded-veggie-bbq-single.df6b3135f20dc413ff9220e275dc1350.1.jpg",
          title: "Title-amit",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae consectetur aliquam illum odio. Earum, est. Delectus neque officia enim, quam inventore ipsam magnam nulla dignissimos voluptas modi, dolorem fugiat.",
        },
        {
          img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/loaded-veggie-bbq-single.df6b3135f20dc413ff9220e275dc1350.1.jpg",
          title: "Title-Pizza By Amit",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae consectetur aliquam illum odio. Earum, est. Delectus neque officia enim, quam inventore ipsam magnam nulla dignissimos voluptas modi, dolorem fugiat.",
        },
        {
          img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/loaded-veggie-bbq-single.df6b3135f20dc413ff9220e275dc1350.1.jpg",
          title: "Title-amit",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae consectetur aliquam illum odio. Earum, est. Delectus neque officia enim, quam inventore ipsam magnam nulla dignissimos voluptas modi, dolorem fugiat.",
        },
        {
          img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/loaded-veggie-bbq-single.df6b3135f20dc413ff9220e275dc1350.1.jpg",
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
      ],
    },
    Desserts: {
      title: "Desserts",
      description:
        "Explore our tempting choice of delicious desserts. Available for delivery and collection.",
      products: [
        {
          img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/brow-wow-nie-single.af07c0805f1b335d9a66c9f906c355ec.1.jpg?width=251",
          title: "Brow-wow-nie",
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
        {
          img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita-ultimate-cheese.dd05f6fd1c45d62cdc6c8509d8734f3d.1.jpg",
          title: "Title-amit",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae consectetur aliquam illum odio. Earum, est. Delectus neque officia enim, quam inventore ipsam magnam nulla dignissimos voluptas modi, dolorem fugiat.",
        },
      ],
    },
    Drinks: {
      title: "Drinks",
      description: "Explore our great selection of refreshing drinks",
      products: [
        {
          img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi-600ml.617b20322a3d644403a0f75b000025ec.1.jpg?width=251",
          title: "Pepsi - 475ml",
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
          img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/jamuntini-350ml.3f8790dc78399da2e37e9cf0020c4bff.1.jpg?width=251",
          title: "Jamauntini",
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
        {
          img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita-ultimate-cheese.dd05f6fd1c45d62cdc6c8509d8734f3d.1.jpg",
          title: "Title-amit",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae consectetur aliquam illum odio. Earum, est. Delectus neque officia enim, quam inventore ipsam magnam nulla dignissimos voluptas modi, dolorem fugiat.",
        },
      ],
    },
    Deals: {
      title: "Deals",
      description: "Check out the latest meal deals available from Pizza Hut",
      products: [
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
          img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/3-course-meal-for-2.ffd5f674aa1e88e4eea00cf5807e4979.1.jpg?width=251",
          title: "Melts 3 Course Meal for 2",
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
        {
          img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita-ultimate-cheese.dd05f6fd1c45d62cdc6c8509d8734f3d.1.jpg",
          title: "Title-amit",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae consectetur aliquam illum odio. Earum, est. Delectus neque officia enim, quam inventore ipsam magnam nulla dignissimos voluptas modi, dolorem fugiat.",
        },
      ],
    },
  };

  const filteredProducts = basicDetails[activeTab].products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <h1 className="text-3xl text-center my-3">
          Our {basicDetails[`${activeTab}`].title}
        </h1>
        <p className="text-md text-center mb-15">
          {basicDetails[`${activeTab}`].description}
        </p>
      </div>
      <div className="flex flex-wrap gap-3 w-300 justify-evenly">
        {/* {basicDetails[`${activeTab}`].products.map((data, index) => {
          return (
            <Card
              key={index}
              image={data.img}
              title={data.title}
              description={data.description}
            />
          );
        })} */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((data, index) => (
            <Card
              key={index}
              image={data.img}
              title={data.title}
              description={data.description}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No results found</p>
        )}
      </div>
    </>
  );
}
