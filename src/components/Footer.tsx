export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>StepUp</h3>
          <p>O conforto que os seus pés merecem, com o estilo que você procura.</p>
        </div>
        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#categorias">Categorias</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Atendimento</h4>
          <ul>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Trocas e Devoluções</a></li>
            <li><a href="#">Perguntas Frequentes</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 StepUp Calçados. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}