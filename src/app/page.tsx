"use client";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', paddingBottom: '120px' }}>
      
      {/* Hero Section */}
      <section className="container animate-fade-in" style={{ display: 'flex', alignItems: 'center', minHeight: '75vh', gap: '60px' }}>
        <div style={{ flex: 1, zIndex: 1 }}>
          <div style={{ display: 'inline-block', padding: '8px 16px', background: 'var(--bg-secondary)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 500, color: 'var(--accent-terracotta)', marginBottom: '24px' }}>
            Bem-Estar com Tecnologia ✨
          </div>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '24px' }}>
            Cuide de quem <br/><span style={{ color: 'var(--accent-sage)' }}>te ama sem pedir nada.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '500px' }}>
            A LuminaPet selecionou produtos de bem-estar animal com tecnologia real — entregues rápido na sua porta, de fornecedores nacionais.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#produtos" className="btn-primary">
              Ver Produtos
            </a>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
           <div style={{ width: '100%', paddingBottom: '100%', borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
             <img src="/images/hero.png" alt="Tutora feliz com seu cachorro e gato em casa" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
           </div>
        </div>
      </section>

      {/* ==================== PRODUTOS ==================== */}
      <section id="produtos" className="container animate-fade-in" style={{ animationDelay: '0.2s' }}>

        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Linha <span style={{ fontStyle: 'italic', color: 'var(--accent-sage)' }}>Lumina Premium</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Cada produto foi validado pelo nosso comitê de especialistas em comportamento e saúde animal.</p>
        </div>

        {/* ⭐ Produto Estrela: Escova a Vapor 3 em 1 */}
        <div className="card-soft" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '60px', alignItems: 'center' }}>
          <div style={{ borderRadius: '24px', height: '500px', overflow: 'hidden' }}>
            <img src="/images/steam-brush.png" alt="Lumina Steam Brush — Escova a Vapor 3 em 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
          </div>
          <div>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: 'linear-gradient(135deg, #f5e6d3, #e8d5c4)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: '#8B6914', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>⭐ Produto Estrela</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Lumina <span style={{ fontStyle: 'italic', color: 'var(--accent-sage)' }}>Steam Brush</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Spa Day em casa: escovação, massagem e limpeza profunda em um só movimento. O vapor quente abre os poros, remove pelos mortos e deixa a pelagem sedosa — sem estresse para o pet.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> 3 em 1: Escova + Vapor + Massageador
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Recarregável via USB-C
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Reduz queda de pelo em até 90%
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-sage)' }}>✓</span> Para cães e gatos de todas as raças
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 119,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>R$ 189,90</span>
            </div>
            <a href="#" className="btn-primary" style={{ width: '100%', padding: '20px', display: 'block', textAlign: 'center', textDecoration: 'none' }}>Quero a Minha Steam Brush</a>
          </div>
        </div>

        {/* Produto 2: Comedouro Interativo (LickiMat) */}
        <div className="card-soft" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '60px', alignItems: 'center', marginTop: '60px' }}>
          <div>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: '#fff0e6', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-terracotta)', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>🔥 Viral no TikTok</div>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Lumina <span style={{ fontStyle: 'italic', color: 'var(--accent-terracotta)' }}>LickiMat</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Transforme a hora de comer numa sessão de terapia. 4 texturas de silicone que fazem seu pet lamber devagar, liberando endorfina e combatendo a ansiedade naturalmente.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-terracotta)' }}>✓</span> Reduz tédio e comportamento destrutivo
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-terracotta)' }}>✓</span> Melhora a digestão (alimentação lenta)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500 }}>
                <span style={{ color: 'var(--accent-terracotta)' }}>✓</span> Silicone Atóxico — Grau Alimentício
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 49,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>R$ 79,90</span>
            </div>
            <a href="#" className="btn-primary" style={{ width: '100%', padding: '20px', display: 'block', textAlign: 'center', textDecoration: 'none', background: 'var(--accent-terracotta)', color: 'white' }}>Quero o LickiMat</a>
          </div>
          <div style={{ borderRadius: '24px', height: '500px', overflow: 'hidden' }}>
            <img src="/images/lickimat.png" alt="Lumina LickiMat — Comedouro Interativo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
          </div>
        </div>

      </section>

      {/* Upsell: Kit Passeio */}
      <section className="container animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Kit <span style={{ fontStyle: 'italic', color: '#be185d' }}>Passeio Consciente</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Acessórios elegantes e sustentáveis para o passeio do seu pet.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {/* Cata Caca Rose */}
          <div className="card-soft" style={{ padding: '40px', background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: '#fbcfe8', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: '#be185d', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>🐾 Suporte Premium</div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Cata Caca <span style={{ color: '#be185d' }}>Rosé</span></h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
              Design elegante com clipe para prender na guia + 15 saquinhos inclusos. Porque até na hora de limpar, a Lumina é diferente.
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 39,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '0.9rem' }}>R$ 59,90</span>
            </div>
            <a href="#" className="btn-primary" style={{ padding: '14px 32px', textDecoration: 'none', display: 'inline-block' }}>Quero o Suporte</a>
          </div>
          {/* Refil Nature Biodegradável */}
          <div className="card-soft" style={{ padding: '40px', background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: '#a7f3d0', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: '#065f46', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>🌿 Eco-Friendly • 4.8★</div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Refil Nature <span style={{ color: '#065f46' }}>Biodegradável</span></h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
              4 rolos de saquinhos 100% biodegradáveis. Compatível com qualquer suporte. Cuide do seu pet e do planeta.
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 29,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '0.9rem' }}>R$ 44,90</span>
            </div>
            <a href="#" className="btn-primary" style={{ padding: '14px 32px', textDecoration: 'none', display: 'inline-block', background: '#065f46', color: 'white' }}>Quero o Refil</a>
          </div>
        </div>
      </section>

      {/* Seção de Confiança */}
      <section className="container animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', textAlign: 'center' }}>
          <div className="card-soft" style={{ padding: '40px 32px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🚚</div>
            <h3 style={{ marginBottom: '8px', fontSize: '1.25rem' }}>Fornecedor Nacional</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Envio direto do Brasil. Sem surpresas de importação.</p>
          </div>
          <div className="card-soft" style={{ padding: '40px 32px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔒</div>
            <h3 style={{ marginBottom: '8px', fontSize: '1.25rem' }}>Compra Segura</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Pague com PIX, cartão ou boleto. Dados criptografados.</p>
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
