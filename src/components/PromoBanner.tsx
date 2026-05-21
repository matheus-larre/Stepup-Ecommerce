export default function PromoBanner() {
  return (
    <section id="promocoes" className="promo-banner">
      <div className="container banner-content">
        <h2>Descontos de até 50%</h2>
        <p>Assine nossa newsletter e ganhe 15% OFF na sua primeira compra.</p>
        <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Inscrito com sucesso!'); }}>
          <input type="email" placeholder="Seu melhor e-mail" required />
          <button type="submit" className="btn btn-primary">Inscrever-se</button>
        </form>
      </div>
    </section>
  );
}