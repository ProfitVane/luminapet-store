"use client";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', paddingBottom: '120px' }}>
      
      {/* Hero Section */}
      <section className="container animate-fade-in" style={{ display: 'flex', alignItems: 'center', minHeight: '75vh', gap: '60px' }}>
        <div style={{ flex: 1, zIndex: 1 }}>
          <div style={{ display: 'inline-block', padding: '8px 16px', background: 'var(--bg-secondary)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 500, color: 'var(--accent-terracotta)', marginBottom: '24px' }}>
            Novidade no Brasil ✨
          </div>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '24px' }}>
            Mais saúde e <br/><span style={{ color: 'var(--accent-sage)' }}>menos preocupação.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '500px' }}>
            O comedouro inteligente que garante a rotina perfeita para o seu pet, mesmo quando você não está em casa. Água fresca e refeições na hora certa.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#produtos" className="btn-primary">
              Conhecer o Feeder Pro
            </a>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
           {/* Placeholder para uma imagem aconchegante de um gato ou cachorro usando o produto numa sala iluminada */}
           <div style={{ width: '100%', paddingBottom: '100%', background: 'var(--bg-secondary)', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--text-muted)' }}>[ Foto Afetiva UGC ]</div>
           </div>
        </div>
      </section>

      {/* Featured Product */}
      <section id="produtos" className="container animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="card-soft" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '60px', alignItems: 'center' }}>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: '24px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'var(--text-muted)' }}>[ Foto do Produto em Fundo Claro ]</span>
          </div>
          <div>
            <div style={{ color: 'var(--accent-terracotta)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontSize: '0.875rem' }}>Exclusividade</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Feeder <span style={{ fontStyle: 'italic', color: 'var(--accent-sage)' }}>Pro</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Feito com materiais atóxicos e design pensado para não causar fadiga nos bigodes do seu gato. Controle porções via app e receba notificações de saúde diretamente no seu celular.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Design Ergonômico (Zero stress)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Câmera HD e Áudio Bidirecional
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Aprovado por Veterinários
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 299,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>R$ 450,00</span>
            </div>
            <a href="https://luminapet.mycartpanda.com/checkout/211202742:1" className="btn-primary" style={{ width: '100%', padding: '20px', display: 'block', textAlign: 'center', textDecoration: 'none' }}>Garantir com Frete Grátis</a>
          </div>
        </div>

        {/* Produto B: Nacional (Bebedouro Fonte) */}
        <div className="card-soft" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '60px', alignItems: 'center', marginTop: '60px' }}>
          <div>
            <div style={{ color: 'var(--accent-sage)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', fontSize: '0.875rem' }}>Entrega Rápida BR</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Aqua <span style={{ fontStyle: 'italic', color: 'var(--accent-terracotta)' }}>Flow</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: 1.6 }}>
              A fonte de água contínua que incentiva o seu pet a beber mais. Motor ultra-silencioso, filtragem tripla e entrega expressa para todo o Brasil.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-terracotta)' }}>✓</span> Filtragem de Carvão Ativado
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-terracotta)' }}>✓</span> 2 Litros de Capacidade
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-terracotta)' }}>✓</span> Estoque no Brasil (Chega Rápido)
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 149,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>R$ 220,00</span>
            </div>
            {/* O link abaixo será substituído quando o usuário criar o Produto B no Cartpanda */}
            <a href="https://luminapet.mycartpanda.com/checkout/211202848:1" className="btn-primary" style={{ width: '100%', padding: '20px', display: 'block', textAlign: 'center', textDecoration: 'none', background: 'var(--accent-sage)', color: 'white' }}>Comprar Aqua Flow (Estoque BR)</a>
          </div>
          <div style={{ background: 'var(--bg-secondary)', borderRadius: '24px', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'var(--text-muted)' }}>[ Foto da Fonte de Água Pet ]</span>
          </div>
        </div>
      </section>

    </div>
  );
}
