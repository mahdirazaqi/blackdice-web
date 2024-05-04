import { PRODUCTS } from "@/fake-data/products.fake";
import Image from "next/image";

interface Params {
  id: string;
}

interface InputProps {
  params: Params;
}

export default function Product({ params }: InputProps) {
  const product = PRODUCTS.filter((product) => product._id === params.id)[0];

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={500}
          height={500}
          className="w-full md:w-[400px] aspect-square object-cover"
        />

        <div className="flex-grow p-3">
          <h1 className="text-xl font-bold mb-8">{product?.title}</h1>

          <div className="hidden md:block">
            {Object.entries(product.properties).map(([k, v]) => (
              <div key={k} className="my-2">
                <span className="text-zinc-500">{k}: </span>
                <span className="font-bold">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-100 w-72 p-3 h-fit rounded-md hidden lg:block">
          <div className="text-sm line-through text-zinc-500 ">
            {product.referencePrice.toLocaleString()}
            <span> تومان</span>
          </div>

          <div className="text-lg my-3">
            {product.salePrice.toLocaleString()}
            <span> تومان</span>
          </div>

          <button className="bg-primary w-full p-3 text-center rounded-md text-white">
            افزودن به سبد خرید
          </button>
        </div>
      </div>

      <div className="m-5">
        <h3 className="font-bold text-lg mb-2">توضیحات محصول</h3>

        <p className="text-justify leading-6 text-zinc-700">
          {product.description}
        </p>
      </div>

      <div className="m-5">
        <h3 className="font-bold text-lg mb-2">مشخصات محصول</h3>

        <div>
          {Object.entries(product.properties).map(([k, v]) => (
            <div key={k} className="my-2">
              <span className="text-zinc-500">{k}: </span>
              <span className="font-bold">{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white fixed left-0 right-0 bottom-0 p-3 border flex justify-between lg:hidden">
        <button className="bg-primary w-fit p-3 text-center rounded-md text-white">
          افزودن به سبد خرید
        </button>

        <div>
          <div className="text-sm line-through text-zinc-500 ">
            {product.referencePrice.toLocaleString()}
            <span> تومان</span>
          </div>

          <div className="text-lg">
            {product.salePrice.toLocaleString()}
            <span> تومان</span>
          </div>
        </div>
      </div>
    </>
  );
}
