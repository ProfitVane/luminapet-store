export const metadata = {
  title: "Dúvidas Frequentes (FAQ) | LuminaPet",
  description: "Tire suas dúvidas sobre envio, garantia e produtos da LuminaPet.",
};

export default function FAQ() {
  return (
    <div className="container animate-fade-in" style={{ padding: '60px 24px', maxWidth: '800px', margin: '0 auto', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '16px', letterSpacing: '-0.5px', fontFamily: 'Playfair Display' }}>
        Dúvidas <span className="text-gradient-sage">Frequentes</span>
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
        Encontre as respostas para as perguntas mais comuns dos nossos clientes.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <details className="faq-item" style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '16px', cursor: 'pointer' }}>
          <summary style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
            1. O site é realmente seguro?
            <span>+</span>
          </summary>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.6 }}>
            Sim! Nosso site utiliza criptografia de ponta a ponta (SSL) para proteger todos os seus dados. Os pagamentos são processados por gateways homologados pelo Banco Central, o que significa que não temos acesso aos dados do seu cartão de crédito.
          </p>
        </details>

        <details className="faq-item" style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '16px', cursor: 'pointer' }}>
          <summary style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
            2. Qual é o prazo de entrega?
            <span>+</span>
          </summary>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.6 }}>
            Trabalhamos com estoque nacional. Os pedidos são despachados em até 48 horas úteis. O prazo médio de entrega varia de 3 a 12 dias úteis, dependendo da sua região (nossa média para Sul e Sudeste é de 4 dias).
          </p>
        </details>

        <details className="faq-item" style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '16px', cursor: 'pointer' }}>
          <summary style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
            3. Os produtos têm garantia?
            <span>+</span>
          </summary>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.6 }}>
            Sim! Além dos 7 dias de garantia incondicional (direito de arrependimento) após o recebimento, nossos produtos da linha Lumina Premium (como a Steam Brush) possuem 90 dias de garantia contra defeitos de fabricação.
          </p>
        </details>

        <details className="faq-item" style={{ background: 'var(--bg-secondary)', padding: '24px', borderRadius: '16px', cursor: 'pointer' }}>
          <summary style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
            4. Como recebo meu código de rastreio?
            <span>+</span>
          </summary>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.6 }}>
            Assim que seu pedido for coletado pela transportadora, enviaremos o código de rastreamento automaticamente para o seu e-mail e WhatsApp cadastrados. Você também pode acompanhá-lo pela nossa página de "Rastrear Pedido".
          </p>
        </details>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        details.faq-item > summary::-webkit-details-marker {
          display: none;
        }
        details[open].faq-item > summary span {
          transform: rotate(45deg);
        }
        details.faq-item > summary span {
          transition: transform 0.3s;
          font-size: 1.5rem;
          line-height: 1;
        }
      `}} />
    </div>
  );
}
