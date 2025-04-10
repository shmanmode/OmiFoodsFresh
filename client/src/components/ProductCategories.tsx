import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@shared/schema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

interface ProductCategoriesProps {
  activeCategory?: string;
  onSelectCategory?: (slug: string) => void;
}

const ProductCategories = ({ activeCategory, onSelectCategory }: ProductCategoriesProps) => {
  const [location] = useLocation();
  const [activeSlug, setActiveSlug] = useState(activeCategory || "all");
  
  const { data: categories, isLoading, error } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });
  
  const handleCategoryClick = (slug: string) => {
    setActiveSlug(slug);
    if (onSelectCategory) {
      onSelectCategory(slug);
    }
  };

  if (isLoading) {
    return (
      <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide sticky top-20 bg-white z-30 pt-2 animate-pulse">
        <div className="flex space-x-2 mx-auto">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="h-10 w-24 rounded-full bg-gray-200"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !categories) {
    return (
      <div className="flex justify-center p-4 text-red-500">
        Failed to load categories
      </div>
    );
  }

  return (
    <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide sticky top-20 bg-white z-30 pt-2">
      <div className="flex space-x-2 mx-auto">
        <Button
          variant={activeSlug === "all" ? "default" : "secondary"}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap",
            activeSlug === "all" ? "bg-primary text-white" : "bg-light text-dark hover:bg-primary hover:text-white"
          )}
          onClick={() => handleCategoryClick("all")}
        >
          All Products
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeSlug === category.slug ? "default" : "secondary"}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition",
              activeSlug === category.slug ? "bg-primary text-white" : "bg-light text-dark hover:bg-primary hover:text-white"
            )}
            onClick={() => handleCategoryClick(category.slug)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
