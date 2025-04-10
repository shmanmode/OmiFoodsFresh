import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, ShoppingCart, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet";
import { Badge } from "@/components/ui/badge";

const ProductDetail = () => {
  const { slug } = useParams();
  
  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: [`/api/products/${slug}`],
  });

  // Format price from cents to rupees
  const formatPrice = (priceInCents?: number): string => {
    if (!priceInCents) return "₹0";
    return `₹${(priceInCents / 100).toFixed(0)}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
          <p>Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for could not be found or may have been removed.</p>
          <Link href="/products">
            <Button className="bg-primary text-white">Browse All Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | OmiFoods</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link href="/products">
            <Button variant="ghost" className="mb-6 flex items-center text-gray-600 hover:text-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  className="h-96 w-full object-cover"
                  src={product.imageUrl}
                  alt={product.name}
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold font-poppins text-gray-900 mb-1">{product.name}</h1>
                    {product.badge && (
                      <Badge className="bg-accent text-white mb-2">{product.badge}</Badge>
                    )}
                  </div>
                  <Badge variant="outline" className={`px-3 py-1 rounded-full ${product.isVeg ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                    {product.isVeg ? "Veg" : "Non-Veg"}
                  </Badge>
                </div>

                <p className="text-gray-600 mb-6 text-lg">{product.description}</p>

                <div className="border-t border-b py-4 mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">{formatPrice(product.price)} <span className="text-base font-normal text-gray-600">/ pack</span></div>
                  <div className="flex items-center text-green-600">
                    <Check className="h-5 w-5 mr-2" />
                    <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white flex-1">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="flex-1">
                        Order Now
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold mb-2">Product Features:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Made with fresh ingredients</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Ready to cook in minutes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>No preservatives or artificial colors</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Authentic taste and flavors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
