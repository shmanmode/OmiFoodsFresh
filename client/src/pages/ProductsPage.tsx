import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import ProductCard from "@/components/ProductCard";
import ProductCategories from "@/components/ProductCategories";
import { Helmet } from "react-helmet";
import { Loader2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const ProductsPage = () => {
  const [location] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleProducts, setVisibleProducts] = useState(8);

  // Parse the category from URL if it exists
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location]);

  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: [selectedCategory === "all" ? "/api/products" : `/api/products/category/${selectedCategory}`],
  });

  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
    setVisibleProducts(8); // Reset visible products when changing category
    
    // Update URL without navigating
    const url = new URL(window.location.href);
    if (slug === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", slug);
    }
    window.history.pushState({}, "", url);
  };

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <>
      <Helmet>
        <title>Products | OmiFoods</title>
        <meta name="description" content="Explore our full range of ready-to-cook food products including momos, spring rolls, burger patties, and more." />
      </Helmet>

      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins text-dark">Our Products</h1>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Discover our full range of ready-to-cook food products
            </p>
          </div>

          {/* Product Categories Nav */}
          <ProductCategories 
            activeCategory={selectedCategory} 
            onSelectCategory={handleCategorySelect} 
          />

          {/* Products Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2">Loading products...</span>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">
              Error loading products. Please try again.
            </div>
          ) : products && products.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                {products.slice(0, visibleProducts).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {visibleProducts < (products?.length || 0) && (
                <div className="text-center">
                  <Button
                    onClick={loadMore}
                    variant="outline"
                    className="bg-white hover:bg-light border border-gray-300 text-dark font-medium py-2 px-6 rounded-full transition inline-flex items-center"
                  >
                    Load More
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
