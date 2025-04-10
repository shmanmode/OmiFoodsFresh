import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import ProductCard from "./ProductCard";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ["/api/products/featured"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-dark">Featured Products</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Discover our most popular products that customers love</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-t-xl"></div>
                <div className="p-6 bg-white rounded-b-xl shadow-md">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="flex justify-between items-center mt-6">
                    <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-10 bg-gray-200 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">
            Error loading featured products. Please try again.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-dark">Featured Products</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Discover our most popular products that customers love</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} featured={true} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <span className="inline-flex items-center text-secondary hover:text-primary font-semibold transition cursor-pointer">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
