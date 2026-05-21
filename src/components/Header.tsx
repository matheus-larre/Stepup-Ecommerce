import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();

  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <a href="#home">StepUp</a>
        </div>
        
        {/* Botão Hambúrguer para Mobile */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          ☰
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="menu">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Início</a></li>
            <li><a href="#produtos" onClick={() => setIsMenuOpen(false)}>Produtos</a></li>
            <li><a href="#categorias" onClick={() => setIsMenuOpen(false)}>Categorias</a></li>
            <li><a href="#promocoes" className="highlight" onClick={() => setIsMenuOpen(false)}>Promoções</a></li>
          </ul>
        </nav>
        
        <div className="nav-actions" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button className="btn btn-outline">Login</button>
          
          <button 
            className="btn btn-primary" 
            onClick={toggleCart}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span>🛒</span>
            <span style={{ 
              background: 'white', 
              color: 'var(--primary)', 
              borderRadius: '50%', 
              padding: '2px 8px', 
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}>
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}