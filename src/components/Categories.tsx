export default function Categories() {
  return (
    <section id="categorias" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Para todos os estilos</h2>
        <div className="grid grid-3">
          <div className="category-card" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80')" }}>
            <h3>Masculino</h3>
            <a href="#produtos">Comprar agora</a>
          </div>
          <div className="category-card" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80')" }}>
            <h3>Feminino</h3>
            <a href="#produtos">Comprar agora</a>
          </div>
          <div className="category-card" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&q=80')" }}>
            <h3>Infantil</h3>
            <a href="#produtos">Comprar agora</a>
          </div>
        </div>
      </div>
    </section>
  );
}