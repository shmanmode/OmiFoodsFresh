import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProductsPage from "@/pages/ProductsPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ProductDetail from "@/pages/ProductDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppBanner from "@/components/AppBanner";
import BackToTop from "@/components/ui/back-to-top";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/products/:slug" component={ProductDetail} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
        <BackToTop />
        <AppBanner />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
