import { 
  User, 
  InsertUser, 
  Category, 
  InsertCategory, 
  Product, 
  InsertProduct, 
  Testimonial, 
  InsertTestimonial,
  ContactForm,
  InsertContactForm
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Categories
  getAllCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  
  // Products
  getAllProducts(): Promise<Product[]>;
  getProductsByCategory(categoryId: number): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  getFeaturedProducts(): Promise<Product[]>;
  
  // Testimonials
  getAllTestimonials(): Promise<Testimonial[]>;
  
  // Contact Form
  submitContactForm(form: InsertContactForm): Promise<ContactForm>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private categories: Map<number, Category>;
  private products: Map<number, Product>;
  private testimonials: Map<number, Testimonial>;
  private contactForms: Map<number, ContactForm>;
  
  private userId: number;
  private categoryId: number;
  private productId: number;
  private testimonialId: number;
  private contactFormId: number;

  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.products = new Map();
    this.testimonials = new Map();
    this.contactForms = new Map();
    
    this.userId = 1;
    this.categoryId = 1;
    this.productId = 1;
    this.testimonialId = 1;
    this.contactFormId = 1;
    
    // Initialize with some data
    this.initializeData();
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Categories
  async getAllCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }
  
  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(
      (category) => category.slug === slug
    );
  }
  
  private createCategory(category: InsertCategory): Category {
    const id = this.categoryId++;
    const newCategory: Category = { ...category, id };
    this.categories.set(id, newCategory);
    return newCategory;
  }
  
  // Products
  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }
  
  async getProductsByCategory(categoryId: number): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.categoryId === categoryId
    );
  }
  
  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(
      (product) => product.slug === slug
    );
  }
  
  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.isFeatured
    );
  }
  
  private createProduct(product: InsertProduct): Product {
    const id = this.productId++;
    const newProduct: Product = { ...product, id };
    this.products.set(id, newProduct);
    return newProduct;
  }
  
  // Testimonials
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  private createTestimonial(testimonial: InsertTestimonial): Testimonial {
    const id = this.testimonialId++;
    const newTestimonial: Testimonial = { ...testimonial, id };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }
  
  // Contact Form
  async submitContactForm(form: InsertContactForm): Promise<ContactForm> {
    const id = this.contactFormId++;
    const contactForm: ContactForm = { ...form, id };
    this.contactForms.set(id, contactForm);
    return contactForm;
  }
  
  // Initialize with sample data
  private initializeData() {
    // Create categories
    const momos = this.createCategory({ name: "Momos", slug: "momos" });
    const kurkureMomos = this.createCategory({ name: "Kurkure Momos", slug: "kurkure-momos" });
    const springRoll = this.createCategory({ name: "Spring Roll", slug: "spring-roll" });
    const vada = this.createCategory({ name: "Vada", slug: "vada" });
    const burgerPatty = this.createCategory({ name: "Burger Patty", slug: "burger-patty" });
    const soyaChap = this.createCategory({ name: "Soya Chap", slug: "soya-chap" });
    const gravies = this.createCategory({ name: "Gravies", slug: "gravies" });
    const sauces = this.createCategory({ name: "Sauces", slug: "sauces" });
    
    // Create products
    // Momos
    this.createProduct({
      name: "Classic Veg Momos",
      slug: "classic-veg-momos",
      description: "Handcrafted momos with a delicious vegetable filling, perfect for snacking.",
      price: 12000, // ₹120
      isVeg: true,
      categoryId: momos.id,
      isFeatured: true,
      imageUrl: "/assets/WhatsApp_Image_2025-04-10_at_16.46.58.jpeg",
      badge: "Bestseller",
      inStock: true
    });
    
    // Kurkure Momos
    this.createProduct({
      name: "Kurkure Veg Momos",
      slug: "kurkure-veg-momos",
      description: "Crispy coated momos with delicious filling, a perfect fusion snack.",
      price: 15000, // ₹150
      isVeg: true,
      categoryId: kurkureMomos.id,
      isFeatured: true,
      imageUrl: "/assets/WhatsApp_Image_2025-04-10_at_16.46.56.jpeg",
      badge: "New",
      inStock: true
    });
    
    this.createProduct({
      name: "Paneer Kurkure Momos",
      slug: "paneer-kurkure-momos",
      description: "Delicious paneer-filled kurkure momos with a crispy exterior.",
      price: 16000, // ₹160
      isVeg: true,
      categoryId: kurkureMomos.id,
      isFeatured: true,
      imageUrl: "/assets/WhatsApp_Image_2025-04-10_at_16.46.57.jpeg",
      badge: "Popular",
      inStock: true
    });
    
    // Spring Rolls
    this.createProduct({
      name: "Veg Spring Rolls",
      slug: "veg-spring-rolls",
      description: "Crispy spring rolls filled with fresh vegetables and seasoning.",
      price: 14000, // ₹140
      isVeg: true,
      categoryId: springRoll.id,
      isFeatured: true,
      imageUrl: "/assets/WhatsApp_Image_2025-04-10_at_16.46.53.jpeg",
      badge: "Popular",
      inStock: true
    });
    
    // Vada
    this.createProduct({
      name: "Medu Vada",
      slug: "medu-vada",
      description: "Traditional South Indian vada for crispy and tasty snacking.",
      price: 13000, // ₹130
      isVeg: true,
      categoryId: vada.id,
      isFeatured: true,
      imageUrl: "/assets/WhatsApp_Image_2025-04-10_at_16.46.39.jpeg",
      badge: "Best Seller",
      inStock: true
    });
    
    // Burger Patty
    this.createProduct({
      name: "Veg Burger Patty",
      slug: "veg-burger-patty",
      description: "Ready-to-cook vegetable patties, perfect for quick and delicious burgers.",
      price: 16000, // ₹160
      isVeg: true,
      categoryId: burgerPatty.id,
      isFeatured: true,
      imageUrl: "/assets/WhatsApp_Image_2025-04-10_at_16.46.50.jpeg",
      badge: "Popular",
      inStock: true
    });
    
    // Soya Chap
    this.createProduct({
      name: "Soya Chaap",
      slug: "soya-chaap",
      description: "Marinated soya chaap ready to cook.",
      price: 18000, // ₹180
      isVeg: true,
      categoryId: soyaChap.id,
      isFeatured: false,
      imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      badge: "",
      inStock: true
    });
    
    // Gravies
    this.createProduct({
      name: "Makhani Gravy",
      slug: "makhani-gravy",
      description: "Ready-to-use restaurant style gravy.",
      price: 11000, // ₹110
      isVeg: true,
      categoryId: gravies.id,
      isFeatured: false,
      imageUrl: "https://images.unsplash.com/photo-1633237308525-cd427f9280e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      badge: "",
      inStock: true
    });
    
    // Sauces
    this.createProduct({
      name: "Schezwan Sauce",
      slug: "schezwan-sauce",
      description: "Spicy schezwan sauce for dipping.",
      price: 9000, // ₹90
      isVeg: true,
      categoryId: sauces.id,
      isFeatured: false,
      imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      badge: "",
      inStock: true
    });
    
    // Create testimonials
    this.createTestimonial({
      name: "Rahul Singh",
      location: "Delhi",
      rating: 5,
      comment: "The momos from OmiFoods are absolutely delicious! They taste just like the ones I get at restaurants, but I can prepare them at home. The quality is excellent.",
      initials: "RS",
      avatarColor: "primary"
    });
    
    this.createTestimonial({
      name: "Priya Kumar",
      location: "Mumbai",
      rating: 4,
      comment: "I love the spring rolls and sauces from OmiFoods. They're perfect for parties and always get compliments from my guests. The delivery is always on time too!",
      initials: "PK",
      avatarColor: "secondary"
    });
    
    this.createTestimonial({
      name: "Amit Mehta",
      location: "Bangalore",
      rating: 5,
      comment: "The Kurkure Momos are a game-changer! So crispy and flavorful. My kids absolutely love them. Will definitely be ordering more products from OmiFoods!",
      initials: "AM",
      avatarColor: "primary"
    });
  }
}

export const storage = new MemStorage();
