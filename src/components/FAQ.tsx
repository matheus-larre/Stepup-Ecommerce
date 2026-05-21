import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primeiro item aberto por padrão

  const faqs = [
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo de entrega varia de acordo com a sua região. Para capitais, o prazo médio é de 3 a 5 dias úteis. Para o interior, de 5 a 10 dias úteis após a confirmação do pagamento."
    },
    {
      question: "Como funciona a política de troca?",
      answer: "A primeira troca é totalmente grátis! Você tem até 30 dias após o recebimento do produto para solicitar a troca por outro tamanho ou modelo, desde que o calçado não apresente marcas de uso."
    },
    {
      question: "Os produtos têm garantia?",
      answer: "Sim. Todos os nossos calçados possuem garantia de 90 dias contra defeitos de fabricação, conforme o Código de Defesa do Consumidor."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos cartões de crédito em até 6x sem juros, PIX com 5% de desconto e boleto bancário."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container faq-container">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}