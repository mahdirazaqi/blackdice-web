import TrashIcon from "@/components/icon/TrashIcon";
import { PRODUCTS } from "@/fake-data/products.fake";
import Image from "next/image";

export default function page() {
  const products = PRODUCTS.slice(0, 3);

  return (
    <div className="my-10">
      <div className="items-center flex text-center font-bold border-b p-2">
        <div className="w-44">عکس محصول</div>
        <div className="w-full p-3">نام محصول</div>
        <div className="w-64 p-3">قیمت</div>
        <div className="w-64 p-3">تعداد</div>
        <div className="w-64 p-3">حذف</div>
        <div className="w-64 p-3">قیمت کل</div>
      </div>

      {products.map((product) => (
        <div
          key={product._id}
          className="items-center flex border-b p-2 text-center"
        >
          <div className="w-44">
            <Image
              src={product.images[0]}
              alt={product.title}
              width={300}
              height={300}
              className="w-full"
            />
          </div>
          <div className="w-full p-3">{product.title}</div>
          <div className="w-64 p-3">
            {product.salePrice.toLocaleString()} تومان
          </div>
          <div className="w-64 p-3">
            <input
              type="number"
              value={1}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="w-64 p-3">
            <button className="p-2 hover:text-primary">
              <TrashIcon />
            </button>
          </div>
          <div className="w-64 p-3">
            {product.salePrice.toLocaleString()} تومان
          </div>
        </div>
      ))}

      <div className="w-96 ml-auto p-3 text-lg">
        <div className="flex justify-between my-4">
          <span className="font-bold">تخفیف:</span>
          <span> {products[0].salePrice.toLocaleString()} تومان</span>
        </div>
        <div className="flex justify-between my-4">
          <span className="font-bold">قیمت کل:</span>
          <span> {products[0].salePrice.toLocaleString()} تومان</span>
        </div>
        <button className="bg-primary text-white py-2 px-3 my-4 w-fit rounded-md">
          ثبت سفارش
        </button>
      </div>
    </div>
  );
}
