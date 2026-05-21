import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, cartTotal } = useCart();

  return (
    <>
      {/* Overlay Escuro */}
      {isCartOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
      
      {/* Sidebar do Carrinho */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Seu Carrinho</h2>
          <button className="close-cart-btn" onClick={toggleCart}>&times;</button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Seu carrinho está vazio.</p>
              <button className="btn btn-outline" onClick={toggleCart}>Continuar Comprando</button>
            </div>
          ) : (
            <ul className="cart-items-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                    <p className="cart-item-qty">Qtd: {item.quantity}</p>
                  </div>
                  <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
            </div>
            <button className="btn btn-block btn-primary">Finalizar Compra</button>
          </div>
        )}
      </div>
    </>
  );
}