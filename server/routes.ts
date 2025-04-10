import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { saveContactToGoogleSheet } from "./googleSheets";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get("/api/categories", async (_req: Request, res: Response) => {
    const categories = await storage.getAllCategories();
    res.json(categories);
  });

  app.get("/api/products", async (_req: Request, res: Response) => {
    const products = await storage.getAllProducts();
    res.json(products);
  });

  app.get("/api/products/featured", async (_req: Request, res: Response) => {
    const products = await storage.getFeaturedProducts();
    res.json(products);
  });

  app.get("/api/products/category/:slug", async (req: Request, res: Response) => {
    const { slug } = req.params;
    const category = await storage.getCategoryBySlug(slug);
    
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    
    const products = await storage.getProductsByCategory(category.id);
    res.json(products);
  });

  app.get("/api/products/:slug", async (req: Request, res: Response) => {
    const { slug } = req.params;
    const product = await storage.getProductBySlug(slug);
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    res.json(product);
  });

  app.get("/api/testimonials", async (_req: Request, res: Response) => {
    const testimonials = await storage.getAllTestimonials();
    res.json(testimonials);
  });

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      const contactFormData = {
        ...validatedData,
        createdAt: new Date().toISOString()
      };
      
      // Save to in-memory database
      const result = await storage.submitContactForm(contactFormData);
      
      // Try to save to Google Sheets if credentials are available
      try {
        if (process.env.GOOGLE_CREDENTIALS && process.env.SHEET_ID) {
          await saveContactToGoogleSheet(validatedData);
        }
      } catch (sheetError) {
        console.error("Error saving to Google Sheets:", sheetError);
        // Continue with the response even if Google Sheets fails
      }
      
      res.status(201).json(result);
    } catch (error) {
      // Handle ZodError for validation failures
      if (error instanceof ZodError) {
        const errorMessage = error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ');
        res.status(400).json({ error: errorMessage });
      } else if (error instanceof Error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
      } else {
        res.status(500).json({ error: "Something went wrong" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
