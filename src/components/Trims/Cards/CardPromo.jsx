import ButtonPrimary from "../Buttons/ButtonPrimary";

const CardPromo = ({
  category,
  Toptitle,
  Toptext,
  image,
  price,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="">
      <div className="relative h-64 overflow-hidden rounded-xl">
        <img
          src={image}
          alt="Promo Image"
          className="w-full object-cover h-fit"
        />
        <div className="absolute top-0 left-0 p-7 flex flex-col justify-between items-stretch w-full h-full">
            <span className="px-3 py-1 rounded-full bg-red-600 bg-opacity-40 border border-red-500 w-fit ">Fresh Fruit</span>
          <h2 className="text-white text-3xl font-bold">New Baby Diaper</h2>
          <p className="text-white text-">Top Quality Product</p>
          <p className="text-primary-500">{price} $54.03</p>
          <ButtonPrimary text="Shop Now" bg="bg-black w-40" />
        </div>
      </div>
    </div>
  );
};

export default CardPromo;
