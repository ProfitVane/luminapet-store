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
            Produtos inteligentes que garantem a rotina perfeita para o seu pet, mesmo quando você não está em casa. Cuidado de verdade, do pelo à alimentação.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#produtos" className="btn-primary">
              Ver Produtos
            </a>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
           <div style={{ width: '100%', paddingBottom: '100%', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
             <img src="/images/hero-lifestyle.png" alt="Dona feliz cuidando do pet com LuminaPet" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
           </div>
        </div>
      </section>

      {/* ==================== PRODUTOS ==================== */}
      <section id="produtos" className="container animate-fade-in" style={{ animationDelay: '0.2s' }}>

        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Nossa <span style={{ fontStyle: 'italic', color: 'var(--accent-sage)' }}>Seleção</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Cada produto foi escolhido por veterinários e especialistas em bem-estar animal. Entrega rápida para todo o Brasil.</p>
        </div>

        {/* Produto 1: Steam Brush (Baixo Ticket / Alto Giro) */}
        <div className="card-soft" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '60px', alignItems: 'center' }}>
          <div style={{ borderRadius: '24px', height: '500px', overflow: 'hidden' }}>
            <img src="/images/steam-brush.png" alt="Lumina Steam Brush - Escova a Vapor Premium" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
          </div>
          <div>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: '#fff0e6', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-terracotta)', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>🔥 Mais Vendido</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Steam <span style={{ fontStyle: 'italic', color: 'var(--accent-sage)' }}>Brush</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: 1.6 }}>
              A escova a vapor que desembaraça, hidrata e massageia o pelo do seu pet em segundos. Sem puxões, sem stress. Só carinho.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Vapor suave (não queima a pele)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Remove pelos mortos sem dor
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Estoque no Brasil (Entrega Rápida)
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 119,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>R$ 189,90</span>
            </div>
            <a href="https://luminapet.mycartpanda.com/checkout/211202977:1" className="btn-primary" style={{ width: '100%', padding: '20px', display: 'block', textAlign: 'center', textDecoration: 'none' }}>Quero a Minha Steam Brush</a>
          </div>
        </div>

        {/* Produto 2: Aqua Flow (Médio Ticket / Médio Giro) */}
        <div className="card-soft" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '60px', alignItems: 'center', marginTop: '60px' }}>
          <div>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: '#e8f5e9', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-sage)', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>💧 Saúde Renal</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Aqua <span style={{ fontStyle: 'italic', color: 'var(--accent-terracotta)' }}>Flow</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: 1.6 }}>
              A fonte de água contínua que incentiva o seu pet a beber mais. Motor ultra-silencioso, filtragem de carvão ativado e entrega expressa para todo o Brasil.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-terracotta)' }}>✓</span> Filtragem Tripla de Carvão Ativado
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-terracotta)' }}>✓</span> Motor Ultra-Silencioso (Menos de 40dB)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-terracotta)' }}>✓</span> Previne Doenças Renais
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 149,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>R$ 220,00</span>
            </div>
            <a href="https://luminapet.mycartpanda.com/checkout/211202848:1" className="btn-primary" style={{ width: '100%', padding: '20px', display: 'block', textAlign: 'center', textDecoration: 'none', background: 'var(--accent-sage)', color: 'white' }}>Proteger a Saúde do Meu Pet</a>
          </div>
          <div style={{ borderRadius: '24px', height: '500px', overflow: 'hidden' }}>
            <img src="/images/aqua-flow.png" alt="Lumina Aqua Flow - Fonte de Água Premium para Pets" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
          </div>
        </div>

        {/* Produto 3: Feeder Pro (Alto Ticket / Baixo Giro) */}
        <div className="card-soft" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '60px', alignItems: 'center', marginTop: '60px' }}>
          <div style={{ borderRadius: '24px', height: '500px', overflow: 'hidden' }}>
            <img src="/images/feeder-pro.png" alt="Lumina Feeder Pro - Comedouro Inteligente com App" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
          </div>
          <div>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: 'linear-gradient(135deg, #f5e6d3, #e8d5c4)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: '#8B6914', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>⭐ Premium</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Feeder <span style={{ fontStyle: 'italic', color: 'var(--accent-sage)' }}>Pro</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: 1.6 }}>
              O comedouro inteligente que você controla pelo celular. Programe horários, ajuste porções e garanta que seu pet coma na hora certa, mesmo quando você está fora.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Controle Total via App (Wi-Fi)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Bateria Reserva Anti-Apagão
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Bowl de Aço Inox (Atóxico)
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 349,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>R$ 499,90</span>
            </div>
            <a href="https://luminapet.mycartpanda.com/checkout/211202742:1" className="btn-primary" style={{ width: '100%', padding: '20px', display: 'block', textAlign: 'center', textDecoration: 'none' }}>Garantir o Feeder Pro</a>
          </div>
        </div>

      </section>

      {/* Seção de Confiança */}
      <section className="container animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', textAlign: 'center' }}>
          <div className="card-soft" style={{ padding: '40px 32px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🚚</div>
            <h3 style={{ marginBottom: '8px', fontSize: '1.25rem' }}>Entrega Rápida</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Estoque no Brasil. Receba em 3 a 7 dias úteis.</p>
          </div>
          <div className="card-soft" style={{ padding: '40px 32px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔒</div>
            <h3 style={{ marginBottom: '8px', fontSize: '1.25rem' }}>Compra Segura</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Pague com PIX, cartão ou boleto. Seus dados protegidos.</p>
          </div>
          <div className="card-soft" style={{ padding: '40px 32px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>💬</div>
            <h3 style={{ marginBottom: '8px', fontSize: '1.25rem' }}>Suporte Humano</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Atendimento real via WhatsApp. Sem robôs.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
