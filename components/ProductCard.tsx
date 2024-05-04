import { Product } from "@/lib/types/product";
import Image from "next/image";
import Link from "next/link";

interface InputProps {
  product: Product;
}

export default function ProductCard({ product }: InputProps) {
  return (
    <div className="rounded-md border border-zinc-100">
      <Link href={`/products/${product._id}`}>
        <Image
          src={product.images[0]}
          alt={product.title}
          width={300}
          height={300}
          className="w-full rounded-md aspect-square object-cover"
        />
      </Link>

      <div className="p-2">
        <Link href={`/products/${product._id}`}>
          <h1
            className="font-bold text-base py-2 truncate"
            title={product.title}
          >
            {product.title}
          </h1>
        </Link>

        <div className="flex gap-3 my-3 items-end">
          <div className="text-base">
            {product.salePrice.toLocaleString()}{" "}
            <span className="text-xs">تومان</span>
          </div>

          <div className="text-sm line-through text-zinc-500">
            {product.referencePrice.toLocaleString()} <span>تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}
