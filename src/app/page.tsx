"use client";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', paddingBottom: '120px' }}>
      
      {/* Hero Section */}
      <section className="container animate-fade-in" style={{ display: 'flex', alignItems: 'center', minHeight: '75vh', gap: '60px' }}>
        <div style={{ flex: 1, zIndex: 1 }}>
          <div style={{ display: 'inline-block', padding: '8px 16px', background: 'var(--bg-secondary)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 500, color: 'var(--accent-terracotta)', marginBottom: '24px' }}>
            Chega de Pets Ansiosos ✨
          </div>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '24px' }}>
            Mais energia gasta. <br/><span style={{ color: 'var(--accent-sage)' }}>Mais paz em casa.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '500px' }}>
            A nova linha da LuminaPet foi desenhada para combater a ansiedade de separação, o tédio e o estresse do seu melhor amigo.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#produtos" className="btn-primary">
              Conhecer a Linha
            </a>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
           <div style={{ width: '100%', paddingBottom: '100%', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
             <img src="/images/hero-new.png" alt="Dono correndo livremente com seu cão" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
           </div>
        </div>
      </section>

      {/* ==================== PRODUTOS ==================== */}
      <section id="produtos" className="container animate-fade-in" style={{ animationDelay: '0.2s' }}>

        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Nova <span style={{ fontStyle: 'italic', color: 'var(--accent-sage)' }}>Coleção Zen</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Produtos projetados por especialistas em comportamento animal para gastar energia física e mental.</p>
        </div>

        {/* Produto 1: LickiMat (Baixo Ticket) */}
        <div className="card-soft" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '60px', alignItems: 'center' }}>
          <div style={{ borderRadius: '24px', height: '500px', overflow: 'hidden' }}>
            <img src="/images/licki-mat.png" alt="Lumina LickiMat - Tapete de Lamber" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
          </div>
          <div>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: '#fff0e6', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-terracotta)', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>🔥 Sucesso no TikTok</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Lumina <span style={{ fontStyle: 'italic', color: 'var(--accent-sage)' }}>LickiMat</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Transforme a hora de comer numa terapia. Lamber texturas libera endorfina, acalmando instantaneamente cães e gatos ansiosos.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Reduz tédio e comportamento destrutivo
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Melhora o hálito (raspa bactérias da língua)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Silicone Atóxico Grau Alimentício
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 49,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>R$ 79,90</span>
            </div>
            <a href="#" className="btn-primary" style={{ width: '100%', padding: '20px', display: 'block', textAlign: 'center', textDecoration: 'none' }}>Eu quero o LickiMat</a>
          </div>
        </div>

        {/* Produto 2: Guia Hands-Free (Médio Ticket) */}
        <div className="card-soft" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '60px', alignItems: 'center', marginTop: '60px' }}>
          <div>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: '#e8f5e9', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-sage)', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>🏃‍♂️ Mãos Livres</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Guia <span style={{ fontStyle: 'italic', color: 'var(--accent-terracotta)' }}>Hands-Free</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: 1.6 }}>
              A revolução do passeio. Prenda na cintura, absorva os puxões com a corda elástica e use o celular ou carregue sacolas enquanto seu pet gasta energia.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-terracotta)' }}>✓</span> Bungee (Elástico) Anti-Impacto para ombros
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-terracotta)' }}>✓</span> Prende firme na cintura (Ajustável)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-terracotta)' }}>✓</span> Costuras Refletivas para passeios noturnos
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 129,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>R$ 199,00</span>
            </div>
            <a href="#" className="btn-primary" style={{ width: '100%', padding: '20px', display: 'block', textAlign: 'center', textDecoration: 'none', background: 'var(--accent-sage)', color: 'white' }}>Liberdade no Passeio</a>
          </div>
          <div style={{ borderRadius: '24px', height: '500px', overflow: 'hidden' }}>
            <img src="/images/guia-hands-free.png" alt="Pessoa correndo com guia amarrada na cintura" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
          </div>
        </div>

        {/* Produto 3: Cama Nuvem (Alto Ticket) */}
        <div className="card-soft" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '60px', alignItems: 'center', marginTop: '60px' }}>
          <div style={{ borderRadius: '24px', height: '500px', overflow: 'hidden' }}>
            <img src="/images/cama-nuvem.png" alt="Cachorro dormindo confortavelmente na Cama Nuvem" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
          </div>
          <div>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: 'linear-gradient(135deg, #f5e6d3, #e8d5c4)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: '#8B6914', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>⭐ Anti-Estresse</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Cama <span style={{ fontStyle: 'italic', color: 'var(--accent-sage)' }}>Nuvem</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Projetada para simular o abraço materno. A pelúcia alta e a borda elevada acalmam o sistema nervoso do pet, garantindo o sono mais profundo que ele já teve.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Combate choro e ansiedade de separação
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Suporte ortopédico para coluna e pescoço
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Pode ser lavada inteira na máquina
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 249,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>R$ 350,00</span>
            </div>
            <a href="#" className="btn-primary" style={{ width: '100%', padding: '20px', display: 'block', textAlign: 'center', textDecoration: 'none' }}>Garantir o Conforto do Meu Pet</a>
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
