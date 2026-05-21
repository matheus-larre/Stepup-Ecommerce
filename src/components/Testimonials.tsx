export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Mariana Silva",
      role: "Atleta Amadora",
      text: "Os tênis da StepUp mudaram minha forma de correr. O amortecimento é surreal e não sinto mais dores no joelho após os treinos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
    },
    {
      id: 2,
      name: "Carlos Eduardo",
      role: "Designer",
      text: "O design do modelo Urban Classic é incrível. Combina com tudo que eu visto no dia a dia e é extremamente confortável para passar horas trabalhando.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80"
    },
    {
      id: 3,
      name: "Fernanda Costa",
      role: "Mãe do Leo",
      text: "A linha infantil é maravilhosa! Meu filho adorou as cores e o material é super resistente, perfeito para a energia dele no parquinho.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80"
    }
  ];

  return (
    <section id="depoimentos" className="section bg-light">
      <div className="container">
        <h2 className="section-title">O que nossos clientes dizem</h2>
        <div className="grid grid-3">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={item.image} alt={item.name} className="testimonial-avatar" />
                <div>
                  <h4>{item.name}</h4>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
              </div>
              <p className="testimonial-text">"{item.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}