import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import './App.css'; 

function App() {
  return (
    <CartProvider>
      <Header />
      <CartSidebar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Testimonials />
        <FAQ />
        <PromoBanner />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;