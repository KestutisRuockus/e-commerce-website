import Link from "next/link";
import Stripe from "stripe";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import Image from "next/image";
import { Button } from "./button";

type Props = {
  product: Stripe.Product;
};

const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`products/${product.id}`} className="block h-full">
      <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-gray-300 gap-0">
        {product.images && product.images[0] && (
          <div className="relative h-60 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
            />
          </div>
        )}
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-bold text-gray-800 line-clamp-1">
            {product.name}
          </CardTitle>
          <CardContent className="p-4 flex-grow flex flex-col justify-between">
            <CardDescription className="line-clamp-1">
              {product.description}
            </CardDescription>
            {price && price.unit_amount && (
              <p className="text-xl">${(price.unit_amount / 100).toFixed(2)}</p>
            )}
            <Button className="mt-4 bg-black text-white cursor-pointer hover:opacity-70 transition-opacity duration 300">
              View Details
            </Button>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default ProductCard;
