export const metadata = {
  title: "Nossa História | LuminaPet",
  description: "Conheça o propósito da LuminaPet: tecnologia, design e amor aos pets.",
};

export default function NossaHistoria() {
  return (
    <div className="container animate-fade-in" style={{ padding: '60px 24px', maxWidth: '800px', margin: '0 auto', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-0.5px' }}>
        Mais do que um pet shop. <br/><span className="text-gradient-terracotta">Um movimento.</span>
      </h1>
      
      <div style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <p>
          A LuminaPet não nasceu apenas para vender produtos. Nascemos da frustração de ver tutores apaixonados (como nós) comprando acessórios de baixa qualidade, sem tecnologia, que quebravam rápido ou, pior, causavam desconforto aos seus pets.
        </p>
        
        <p>
          Nós acreditamos que os animais de estimação não são apenas "bichos". Eles são família. E como família, merecem o que há de melhor, mais seguro e mais moderno no mundo.
        </p>

        <h2 style={{ fontSize: '2rem', color: 'var(--text-main)', marginTop: '32px', marginBottom: '16px', fontFamily: 'Playfair Display' }}>A revolução do cuidado</h2>
        
        <p>
          Viajamos o mundo pesquisando fornecedores, testando dezenas de materiais e tecnologias, até chegar ao nosso "padrão ouro". Cada item do nosso catálogo, desde a nossa famosa <strong>Steam Brush</strong> até nossos bebedouros inteligentes, passa por um rigoroso comitê de veterinários e especialistas em comportamento animal antes de chegar à sua casa.
        </p>

        <p>
          Na LuminaPet, unimos o afeto à engenharia. Porque o seu amor não tem preço, e o bem-estar do seu melhor amigo não aceita atalhos.
        </p>

        <div style={{ marginTop: '40px', padding: '32px', background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)', borderRadius: '16px', border: '1px solid rgba(190, 24, 93, 0.1)' }}>
          <h3 style={{ color: '#be185d', fontSize: '1.4rem', marginBottom: '12px' }}>O nosso compromisso com você:</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>🐾 <strong>Qualidade intransigente:</strong> Só vendemos o que usaríamos (e usamos) nos nossos próprios pets.</li>
            <li>🚀 <strong>Inovação constante:</strong> Trazendo para o Brasil as maiores tendências globais do mercado pet.</li>
            <li>❤️ <strong>Atendimento humano:</strong> Tratar cada cliente como único. Se houver um problema, nós resolveremos. Ponto.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
