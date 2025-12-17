import basicDetails from "../../data/basicDetails";
import Card from "../card/Card";

export default function Info({ activeTab, searchTerm }) {
  const filteredProducts = basicDetails[activeTab].products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <h1 className="text-2xl sm:text-3xl text-center my-3">
          Our {basicDetails[`${activeTab}`].title}
        </h1>
        <p className="text-sm sm:text-md text-center mb-8">
          {basicDetails[`${activeTab}`].description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
          <p className="col-span-full text-center text-gray-500 text-sm sm:text-base mt-10">
            No results found
          </p>
        )}
      </div>
    </>
  );
}
