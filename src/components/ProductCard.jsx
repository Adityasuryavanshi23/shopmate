/* eslint-disable react/prop-types */

export const ProductCard = ({ title, price, image }) => {
  return (
    <section className="">
      <div className=" max-w-screen-xl m-auto bg-gray-200 rounded-md">
        <div className="max-w-sm border p-4 ">
          <img src={image} alt="" className="w-80  h-80 rounded-md" />
          <h1 className="text-2xl mb-6 mt-4">{title}</h1>
          <div className="flex justify-between items-center">
            <p className="text-xl ">${price}</p>
            <button className="py-1 px-6 text-lg bg-blue-800 text-white  rounded-md capitalize">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
