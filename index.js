// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  categories;
  products;
  testimonials;
  contactForms;
  userId;
  categoryId;
  productId;
  testimonialId;
  contactFormId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.categories = /* @__PURE__ */ new Map();
    this.products = /* @__PURE__ */ new Map();
    this.testimonials = /* @__PURE__ */ new Map();
    this.contactForms = /* @__PURE__ */ new Map();
    this.userId = 1;
    this.categoryId = 1;
    this.productId = 1;
    this.testimonialId = 1;
    this.contactFormId = 1;
    this.initializeData();
  }
  // Users
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.userId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  // Categories
  async getAllCategories() {
    return Array.from(this.categories.values());
  }
  async getCategoryBySlug(slug) {
    return Array.from(this.categories.values()).find(
      (category) => category.slug === slug
    );
  }
  createCategory(category) {
    const id = this.categoryId++;
    const newCategory = { ...category, id };
    this.categories.set(id, newCategory);
    return newCategory;
  }
  // Products
  async getAllProducts() {
    return Array.from(this.products.values());
  }
  async getProductsByCategory(categoryId) {
    return Array.from(this.products.values()).filter(
      (product) => product.categoryId === categoryId
    );
  }
  async getProductBySlug(slug) {
    return Array.from(this.products.values()).find(
      (product) => product.slug === slug
    );
  }
  async getFeaturedProducts() {
    return Array.from(this.products.values()).filter(
      (product) => product.isFeatured
    );
  }
  createProduct(product) {
    const id = this.productId++;
    const newProduct = { ...product, id };
    this.products.set(id, newProduct);
    return newProduct;
  }
  // Testimonials
  async getAllTestimonials() {
    return Array.from(this.testimonials.values());
  }
  createTestimonial(testimonial) {
    const id = this.testimonialId++;
    const newTestimonial = { ...testimonial, id };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }
  // Contact Form
  async submitContactForm(form) {
    const id = this.contactFormId++;
    const contactForm = { ...form, id };
    this.contactForms.set(id, contactForm);
    return contactForm;
  }
  // Initialize with sample data
  initializeData() {
    const momos = this.createCategory({ name: "Momos", slug: "momos" });
    const kurkureMomos = this.createCategory({ name: "Kurkure Momos", slug: "kurkure-momos" });
    const springRoll = this.createCategory({ name: "Spring Roll", slug: "spring-roll" });
    const vada = this.createCategory({ name: "Vada", slug: "vada" });
    const burgerPatty = this.createCategory({ name: "Burger Patty", slug: "burger-patty" });
    const soyaChap = this.createCategory({ name: "Soya Chap", slug: "soya-chap" });
    const gravies = this.createCategory({ name: "Gravies", slug: "gravies" });
    const sauces = this.createCategory({ name: "Sauces", slug: "sauces" });
    this.createProduct({
      name: "Classic Veg Momos",
      slug: "classic-veg-momos",
      description: "Handcrafted momos with a delicious vegetable filling, perfect for snacking.",
      price: 12e3,
      // ₹120
      isVeg: true,
      categoryId: momos.id,
      isFeatured: true,
      imageUrl: "/assets/WhatsApp_Image_2025-04-10_at_16.46.58.jpeg",
      badge: "Bestseller",
      inStock: true
    });
    this.createProduct({
      name: "Kurkure Veg Momos",
      slug: "kurkure-veg-momos",
      description: "Crispy coated momos with delicious filling, a perfect fusion snack.",
      price: 15e3,
      // ₹150
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
      price: 16e3,
      // ₹160
      isVeg: true,
      categoryId: kurkureMomos.id,
      isFeatured: true,
      imageUrl: "/assets/WhatsApp_Image_2025-04-10_at_16.46.57.jpeg",
      badge: "Popular",
      inStock: true
    });
    this.createProduct({
      name: "Veg Spring Rolls",
      slug: "veg-spring-rolls",
      description: "Crispy spring rolls filled with fresh vegetables and seasoning.",
      price: 14e3,
      // ₹140
      isVeg: true,
      categoryId: springRoll.id,
      isFeatured: true,
      imageUrl: "/assets/WhatsApp_Image_2025-04-10_at_16.46.53.jpeg",
      badge: "Popular",
      inStock: true
    });
    this.createProduct({
      name: "Medu Vada",
      slug: "medu-vada",
      description: "Traditional South Indian vada for crispy and tasty snacking.",
      price: 13e3,
      // ₹130
      isVeg: true,
      categoryId: vada.id,
      isFeatured: true,
      imageUrl: "/assets/WhatsApp_Image_2025-04-10_at_16.46.39.jpeg",
      badge: "Best Seller",
      inStock: true
    });
    this.createProduct({
      name: "Veg Burger Patty",
      slug: "veg-burger-patty",
      description: "Ready-to-cook vegetable patties, perfect for quick and delicious burgers.",
      price: 16e3,
      // ₹160
      isVeg: true,
      categoryId: burgerPatty.id,
      isFeatured: true,
      imageUrl: "/assets/WhatsApp_Image_2025-04-10_at_16.46.50.jpeg",
      badge: "Popular",
      inStock: true
    });
    this.createProduct({
      name: "Soya Chaap",
      slug: "soya-chaap",
      description: "Marinated soya chaap ready to cook.",
      price: 18e3,
      // ₹180
      isVeg: true,
      categoryId: soyaChap.id,
      isFeatured: false,
      imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      badge: "",
      inStock: true
    });
    this.createProduct({
      name: "Makhani Gravy",
      slug: "makhani-gravy",
      description: "Ready-to-use restaurant style gravy.",
      price: 11e3,
      // ₹110
      isVeg: true,
      categoryId: gravies.id,
      isFeatured: false,
      imageUrl: "https://images.unsplash.com/photo-1633237308525-cd427f9280e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      badge: "",
      inStock: true
    });
    this.createProduct({
      name: "Schezwan Sauce",
      slug: "schezwan-sauce",
      description: "Spicy schezwan sauce for dipping.",
      price: 9e3,
      // ₹90
      isVeg: true,
      categoryId: sauces.id,
      isFeatured: false,
      imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      badge: "",
      inStock: true
    });
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
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, integer, boolean, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique()
});
var insertCategorySchema = createInsertSchema(categories).pick({
  name: true,
  slug: true
});
var products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  // Price in cents/paise
  isVeg: boolean("isVeg").default(true),
  categoryId: integer("category_id").notNull(),
  isFeatured: boolean("is_featured").default(false),
  imageUrl: text("image_url").notNull(),
  badge: text("badge").notNull().default(""),
  inStock: boolean("in_stock").default(true)
});
var insertProductSchema = createInsertSchema(products).omit({
  id: true
});
var testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  rating: integer("rating").notNull(),
  comment: text("comment").notNull(),
  initials: varchar("initials", { length: 2 }).notNull(),
  avatarColor: text("avatar_color").notNull().default("primary")
});
var insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true
});
var contactForms = pgTable("contact_forms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull()
});
var contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(5, "Message is required")
});

// server/routes.ts
import { ZodError } from "zod";

// server/googleSheets.ts
import { google } from "googleapis";
async function saveContactToGoogleSheet(data) {
  try {
    if (!process.env.GOOGLE_CREDENTIALS) {
      console.error("Google credentials not found");
      throw new Error("Google Sheets API credentials not configured");
    }
    if (!process.env.SHEET_ID) {
      console.error("Google Sheet ID not found");
      throw new Error("Google Sheet ID not configured");
    }
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    const auth = new google.auth.JWT(
      credentials.client_email,
      void 0,
      credentials.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );
    const sheets = google.sheets({ version: "v4", auth });
    const values = [
      [
        (/* @__PURE__ */ new Date()).toISOString(),
        // Timestamp
        data.name,
        data.email,
        data.phone,
        data.subject,
        data.message
      ]
    ];
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1!A:F",
      // Assuming the first sheet with columns A-F
      valueInputOption: "RAW",
      requestBody: {
        values
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    throw error;
  }
}

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/categories", async (_req, res) => {
    const categories2 = await storage.getAllCategories();
    res.json(categories2);
  });
  app2.get("/api/products", async (_req, res) => {
    const products2 = await storage.getAllProducts();
    res.json(products2);
  });
  app2.get("/api/products/featured", async (_req, res) => {
    const products2 = await storage.getFeaturedProducts();
    res.json(products2);
  });
  app2.get("/api/products/category/:slug", async (req, res) => {
    const { slug } = req.params;
    const category = await storage.getCategoryBySlug(slug);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    const products2 = await storage.getProductsByCategory(category.id);
    res.json(products2);
  });
  app2.get("/api/products/:slug", async (req, res) => {
    const { slug } = req.params;
    const product = await storage.getProductBySlug(slug);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  });
  app2.get("/api/testimonials", async (_req, res) => {
    const testimonials2 = await storage.getAllTestimonials();
    res.json(testimonials2);
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const contactFormData = {
        ...validatedData,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      const result = await storage.submitContactForm(contactFormData);
      try {
        if (process.env.GOOGLE_CREDENTIALS && process.env.SHEET_ID) {
          await saveContactToGoogleSheet(validatedData);
        }
      } catch (sheetError) {
        console.error("Error saving to Google Sheets:", sheetError);
      }
      res.status(201).json(result);
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = error.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ");
        res.status(400).json({ error: errorMessage });
      } else if (error instanceof Error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
      } else {
        res.status(500).json({ error: "Something went wrong" });
      }
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
