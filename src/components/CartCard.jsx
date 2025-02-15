/* eslint-disable react/prop-types */
export const CartCard = ({ products }) => {
  const { title, images, price } = products;
  return (
    <div className="grid grid-cols-4 ml-12   shadow-lg border   gap-4  p-4 my-10">
      <img src={images} alt={title} className="w-20 ml-8 " />
      <p className="text-lg text-center">{title}</p>
      <p className="text-lg text-center">${price}</p>
      <div className="text-right mr-8">
        <button className=" ease-in-out duration-100 hover:scale-105  bg-red-500 py-1 px-3 text-white rounded">
          Remove
        </button>
      </div>
    </div>
  );
};
