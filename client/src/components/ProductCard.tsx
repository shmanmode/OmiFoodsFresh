import { Link } from "wouter";
import { Product } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { id, name, description, price, isVeg, slug, imageUrl, badge } = product;
  
  // Format price from cents to rupees
  const formatPrice = (priceInCents: number): string => {
    return `₹${(priceInCents / 100).toFixed(0)}`;
  };

  return (
    <>
      {featured ? (
        <div className="group bg-white rounded-xl shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl">
          <div className="relative h-64 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
            {badge && (
              <div className="absolute top-4 right-4 bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                {badge}
              </div>
            )}
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold font-poppins text-dark">{name}</h3>
              <span className="bg-light px-2 py-1 rounded text-sm text-secondary font-montserrat">
                {isVeg ? "Veg" : "Non-Veg"}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex justify-between items-center">
              <span className="text-primary font-bold font-montserrat text-lg">{formatPrice(price)} / pack</span>
              <Link href={`/products/${slug}`}>
                <Button className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-full">
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Card className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
          <div className="h-48 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold font-poppins">{name}</h3>
              <Badge variant="outline" className="bg-light px-2 py-0.5 rounded-full text-xs text-secondary">
                {isVeg ? "Veg" : "Non-Veg"}
              </Badge>
            </div>
            <p className="text-gray-600 text-sm mb-3">{description}</p>
            <div className="flex justify-between items-center">
              <span className="text-primary font-bold font-montserrat">{formatPrice(price)} / pack</span>
              <Link href={`/products/${slug}`}>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white py-1.5 px-3 rounded-full text-xs">
                  Add to Cart
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ProductCard;
