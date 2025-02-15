/* eslint-disable react/prop-types */

export const ProductCard = ({ products }) => {
  const { title, price, image } = products;
  const handleadd = (id) => {
    console.log(id);
  };
  return (
    <section className="">
      <div className=" max-w-screen-xl m-auto rounded-md">
        <div className="max-w-sm shadow-lg border  ease-in-out duration-100 hover:scale-105   p-4 ">
          <img src={image} alt={title} className="w-80  h-80 rounded-md" />
          <h1 className="text-2xl mb-6 mt-4">{title}</h1>
          <div className="flex justify-between items-center">
            <p className="text-xl ">${price}</p>
            <button
              onClick={() => handleadd(products.id)}
              className="py-1 px-6 text-lg bg-blue-800 text-white  rounded-md capitalize ease-in-out duration-100 hover:scale-105 "
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
