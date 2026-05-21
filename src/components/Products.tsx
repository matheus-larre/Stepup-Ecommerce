import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Products() {
  const { addToCart } = useCart();
  const [activeFilter, setActiveFilter] = useState('Todos');

  const productsData = [
    {
      id: 'p1',
      name: 'Sneaker Red Velocity',
      category: 'Esportivo',
      price: 299.90,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
      badge: { text: 'Novo', type: 'promo' }
    },
    {
      id: 'p2',
      name: 'Urban Classic Low',
      category: 'Casual', // Changed to broader category to match filters
      price: 189.90,
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&q=80'
    },
    {
      id: 'p3',
      name: 'RunTech Air',
      category: 'Corrida', // Changed to broader category
      price: 319.90,
      oldPrice: 399.90,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80',
      badge: { text: '-20%', type: 'discount' }
    },
    {
      id: 'p4',
      name: 'Skate Retro Hi',
      category: 'Skate', // Changed
      price: 249.90,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80'
    },
    {
      id: 'p5',
      name: 'Runner Pro X',
      category: 'Esportivo',
      price: 459.90,
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80'
    },
    {
      id: 'p6',
      name: 'Canvas Slip-on',
      category: 'Casual',
      price: 129.90,
      image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&q=80'
    }
  ];

  // Extrair categorias únicas para os botões de filtro
  const filters = ['Todos', 'Esportivo', 'Casual', 'Corrida', 'Skate'];

  // Filtrar os produtos com base na categoria ativa
  const filteredProducts = activeFilter === 'Todos' 
    ? productsData 
    : productsData.filter(product => product.category === activeFilter);

  return (
    <section id="produtos" className="section">
      <div className="container">
        <h2 className="section-title">Destaques da Semana</h2>
        
        {/* Botões de Filtro */}
        <div className="product-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.badge && (
                  <span className={`badge ${product.badge.type}`}>
                    {product.badge.text}
                  </span>
                )}
              </div>
              <div className="product-info">
                <h4>{product.name}</h4>
                <p className="category">{product.category}</p>
                <div className="price">
                  {product.oldPrice && (
                    <span className="old">R$ {product.oldPrice.toFixed(2).replace('.', ',')}</span>
                  )}
                  <span className="current">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                </div>
                <button 
                  className="btn btn-block btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Nenhum produto encontrado nesta categoria.</p>
        )}
      </div>
    </section>
  );
}