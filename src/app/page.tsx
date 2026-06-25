"use client";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '120px', paddingBottom: '0' }}>
      
      {/* Hero Section */}
      <section className="container animate-fade-in" style={{ display: 'flex', alignItems: 'center', minHeight: '80vh', gap: '60px', paddingTop: '40px' }}>
        <div style={{ flex: 1, zIndex: 1 }}>
          <div style={{ display: 'inline-block', padding: '8px 16px', background: 'var(--bg-secondary)', borderRadius: '100px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-terracotta)', marginBottom: '24px', letterSpacing: '0.5px' }}>
            Bem-Estar com Tecnologia ✨
          </div>
          <h1 style={{ fontSize: '5rem', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-1px' }}>
            Cuide de quem <br/><span className="text-gradient-sage">te ama sem pedir nada.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '520px' }}>
            A LuminaPet selecionou produtos de bem-estar animal com tecnologia real — entregues rápido na sua porta, de fornecedores nacionais.
          </p>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="#produtos" className="btn-primary" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>
              Ver Produtos
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                ⭐ ⭐ ⭐ ⭐ ⭐
              </div>
              <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>+10.000</span> Pets Felizes
            </div>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
           <div className="animate-float" style={{ width: '100%', paddingBottom: '100%', borderRadius: '50%', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(155, 175, 155, 0.2)' }}>
             <img src="/images/hero.png" alt="Tutora feliz com seu cachorro e gato em casa" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
           </div>
        </div>
      </section>

      {/* ==================== PRODUTOS ==================== */}
      <section id="produtos" className="container animate-fade-in" style={{ animationDelay: '0.2s' }}>

        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '16px', letterSpacing: '-0.5px' }}>Linha <span className="text-gradient-sage" style={{ fontStyle: 'italic' }}>Lumina Premium</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>Cada produto foi validado pelo nosso comitê de especialistas em comportamento e saúde animal.</p>
        </div>

        {/* ⭐ Produto Estrela: Escova a Vapor 3 em 1 */}
        <div className="card-soft" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', padding: '60px', alignItems: 'center' }}>
          <div className="img-zoom-container" style={{ borderRadius: '24px', height: '550px' }}>
            <img src="/images/steam-brush.png" className="img-zoom-target" alt="Lumina Steam Brush — Escova a Vapor 3 em 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
          </div>
          <div style={{ paddingRight: '20px' }}>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: 'linear-gradient(135deg, #f5e6d3, #e8d5c4)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: '#8B6914', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>⭐ Produto Estrela</div>
            <h2 style={{ fontSize: '3.2rem', marginBottom: '24px', letterSpacing: '-0.5px' }}>Lumina <span className="text-gradient-sage" style={{ fontStyle: 'italic' }}>Steam Brush</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.15rem', lineHeight: 1.7 }}>
              Spa Day em casa: escovação, massagem e limpeza profunda em um só movimento. O vapor quente abre os poros, remove pelos mortos e deixa a pelagem sedosa — sem estresse para o pet.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500, fontSize: '1.05rem' }}>
                <span style={{ color: 'var(--accent-sage)', fontWeight: 'bold' }}>✓</span> 3 em 1: Escova + Vapor + Massageador
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500, fontSize: '1.05rem' }}>
                <span style={{ color: 'var(--accent-sage)', fontWeight: 'bold' }}>✓</span> Recarregável via USB-C
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500, fontSize: '1.05rem' }}>
                <span style={{ color: 'var(--accent-sage)', fontWeight: 'bold' }}>✓</span> Reduz queda de pelo em até 90%
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500, fontSize: '1.05rem' }}>
                <span style={{ color: 'var(--accent-sage)', fontWeight: 'bold' }}>✓</span> Para cães e gatos de todas as raças
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.8rem', fontWeight: 700, fontFamily: 'Playfair Display', letterSpacing: '-1px' }}>R$ 119,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1.2rem' }}>R$ 189,90</span>
            </div>
            <a href="#" className="btn-primary" style={{ width: '100%', padding: '20px', display: 'block', textAlign: 'center', textDecoration: 'none', fontSize: '1.1rem' }}>Quero a Minha Steam Brush</a>
          </div>
        </div>

        {/* Produto 2: Comedouro Interativo (LickiMat) */}
        <div className="card-soft" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '60px', padding: '60px', alignItems: 'center', marginTop: '80px' }}>
          <div style={{ paddingLeft: '20px' }}>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: '#fff0e6', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-terracotta)', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>🔥 Viral no TikTok</div>
            <h2 style={{ fontSize: '3.2rem', marginBottom: '24px', letterSpacing: '-0.5px' }}>Lumina <span className="text-gradient-terracotta" style={{ fontStyle: 'italic' }}>LickiMat</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.15rem', lineHeight: 1.7 }}>
              Transforme a hora de comer numa sessão de terapia. 4 texturas de silicone que fazem seu pet lamber devagar, liberando endorfina e combatendo a ansiedade naturalmente.
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500, fontSize: '1.05rem' }}>
                <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold' }}>✓</span> Reduz tédio e comportamento destrutivo
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500, fontSize: '1.05rem' }}>
                <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold' }}>✓</span> Melhora a digestão (alimentação lenta)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500, fontSize: '1.05rem' }}>
                <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold' }}>✓</span> Silicone Atóxico — Grau Alimentício
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.8rem', fontWeight: 700, fontFamily: 'Playfair Display', letterSpacing: '-1px' }}>R$ 49,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1.2rem' }}>R$ 79,90</span>
            </div>
            <a href="#" className="btn-primary" style={{ width: '100%', padding: '20px', display: 'block', textAlign: 'center', textDecoration: 'none', background: 'var(--accent-terracotta)', color: 'white', fontSize: '1.1rem' }}>Quero o LickiMat</a>
          </div>
          <div className="img-zoom-container" style={{ borderRadius: '24px', height: '550px' }}>
            <img src="/images/lickimat.png" className="img-zoom-target" alt="Lumina LickiMat — Comedouro Interativo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
          </div>
        </div>

      </section>

      {/* Upsell: Kit Passeio */}
      <section className="container animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '12px', letterSpacing: '-0.5px' }}>Kit <span style={{ fontStyle: 'italic', color: '#be185d' }}>Passeio Consciente</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>Acessórios elegantes e sustentáveis para o passeio do seu pet.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {/* Cata Caca Rose */}
          <div className="card-soft" style={{ padding: '50px', background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: '#fbcfe8', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: '#be185d', marginBottom: '24px', letterSpacing: '1px', textTransform: 'uppercase' }}>🐾 Suporte Premium</div>
            <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Cata Caca <span className="text-gradient-terracotta" style={{ color: '#be185d' }}>Rosé</span></h3>
            <div className="img-zoom-container" style={{ width: '100%', height: '280px', marginBottom: '32px', borderRadius: '16px', background: 'white' }}>
              <img src="/images/cata-caca.png" className="img-zoom-target" alt="Cata Caca Rosé" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.6 }}>
              Design elegante com clipe para prender na guia + 15 saquinhos inclusos. Porque até na hora de limpar, a Lumina é diferente.
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 39,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1.1rem' }}>R$ 59,90</span>
            </div>
            <a href="#" className="btn-primary" style={{ padding: '16px 40px', textDecoration: 'none', display: 'inline-block' }}>Quero o Suporte</a>
          </div>
          {/* Refil Nature Biodegradável */}
          <div className="card-soft" style={{ padding: '50px', background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '6px 14px', background: '#a7f3d0', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: '#065f46', marginBottom: '24px', letterSpacing: '1px', textTransform: 'uppercase' }}>🌿 Eco-Friendly • 4.8★</div>
            <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Refil Nature <span className="text-gradient-sage" style={{ color: '#065f46' }}>Biodegradável</span></h3>
            <div className="img-zoom-container" style={{ width: '100%', height: '280px', marginBottom: '32px', borderRadius: '16px', background: 'white' }}>
              <img src="/images/refil.png" className="img-zoom-target" alt="Refil Nature Biodegradável" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.6 }}>
              4 rolos de saquinhos 100% biodegradáveis. Compatível com qualquer suporte. Cuide do seu pet e do planeta.
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'Playfair Display' }}>R$ 29,90</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1.1rem' }}>R$ 44,90</span>
            </div>
            <a href="#" className="btn-primary" style={{ padding: '16px 40px', textDecoration: 'none', display: 'inline-block', background: '#065f46', color: 'white' }}>Quero o Refil</a>
          </div>
        </div>
      </section>

      {/* Seção de Confiança */}
      <section className="container animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', textAlign: 'center' }}>
          <div className="card-soft" style={{ padding: '50px 32px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '24px' }}>🚚</div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.4rem' }}>Fornecedor Nacional</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.5 }}>Envio direto do Brasil. Entregas ultra-rápidas e sem surpresas de importação.</p>
          </div>
          <div className="card-soft" style={{ padding: '50px 32px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '24px' }}>🔒</div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.4rem' }}>Compra Blindada</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.5 }}>Pague com PIX, cartão ou boleto. Seus dados 100% criptografados de ponta a ponta.</p>
          </div>
          <div className="card-soft" style={{ padding: '50px 32px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '24px' }}>💬</div>
            <h3 style={{ marginBottom: '12px', fontSize: '1.4rem' }}>Suporte Humano</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.5 }}>Atendimento VIP e real via WhatsApp. Especialistas prontos para te ajudar.</p>
          </div>
        </div>
      </section>

      {/* ==================== POR QUE A LUMINA? (BENEFÍCIOS) ==================== */}
      <section id="beneficios" className="container animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center', marginTop: '80px' }}>
          <div className="img-zoom-container" style={{ borderRadius: '24px', height: '600px', overflow: 'hidden' }}>
            <img src="/images/hero.png" className="img-zoom-target" alt="Cachorro e Gato relaxando" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-0.5px' }}>
              A revolução do <span className="text-gradient-terracotta" style={{ fontStyle: 'italic' }}>cuidado animal</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.7, marginBottom: '40px' }}>
              Nós não vendemos "acessórios para pet". Nós projetamos soluções baseadas em dados e comportamento animal para prolongar a vida útil, a saúde mental e o conforto do seu melhor amigo.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ fontSize: '2.5rem' }}>🔬</div>
                <div>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Validação Veterinária</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Cada design passa por um rigoroso comitê de médicos veterinários para garantir ergonomia perfeita e materiais atóxicos (BPA-free e FDA approved).</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ fontSize: '2.5rem' }}>✨</div>
                <div>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Design que não esconde a sua casa</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Chega de cores berrantes que arruínam a sua decoração. Criamos produtos minimalistas que se integram perfeitamente ao design do seu lar.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ fontSize: '2.5rem' }}>♻️</div>
                <div>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Sustentabilidade Real</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Embalagens recicláveis, plásticos de engenharia de alta durabilidade e opções biodegradáveis. Cuidamos do pet e do planeta que ele habita.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAMÍLIA (DEPOIMENTOS) ==================== */}
      <section id="depoimentos" className="container animate-fade-in" style={{ animationDelay: '0.6s', marginTop: '120px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '16px', letterSpacing: '-0.5px' }}>A nossa <span className="text-gradient-sage" style={{ fontStyle: 'italic' }}>Família</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>Mais de 10.000 lares no Brasil já transformaram a rotina de cuidados com a LuminaPet.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {/* Review 1 */}
          <div className="card-soft" style={{ padding: '40px' }}>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '24px' }}>
              "A Steam Brush salvou meus sofás. Minha gata (Persa) odiava escovação, mas o vapor quente acalma ela. Agora ela ronrona toda vez que pego a escova!"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>M</div>
              <div>
                <h5 style={{ fontSize: '1.1rem' }}>Mariana S. & Luna</h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Compradora Verificada ✅</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="card-soft" style={{ padding: '40px', transform: 'translateY(-20px)' }}>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '24px' }}>
              "Comprei o LickiMat para o Thor (Golden de 2 anos) que devorava a comida em 10 segundos. Hoje ele passa 20 minutos focado na refeição. Qualidade excelente."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>R</div>
              <div>
                <h5 style={{ fontSize: '1.1rem' }}>Ricardo M. & Thor</h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Comprador Verificado ✅</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="card-soft" style={{ padding: '40px' }}>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>⭐⭐⭐⭐⭐</div>
            <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '24px' }}>
              "Primeira loja pet que os produtos não destoam da minha sala rs. Além de super funcionais, chegaram em 2 dias aqui em SP. Virei fã número 1 da marca."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>C</div>
              <div>
                <h5 style={{ fontSize: '1.1rem' }}>Camila F. & Bento</h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Compradora Verificada ✅</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer Premium */}
      <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-soft)', padding: '80px 0 40px 0', marginTop: '60px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '60px', marginBottom: '60px' }}>
          <div>
            <div style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', fontWeight: 700, color: 'var(--accent-terracotta)', marginBottom: '16px' }}>
              Lumina<span style={{ color: 'var(--text-main)' }}>Pet.</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '400px' }}>
              Nascemos para elevar o padrão do cuidado animal no Brasil. Unimos tecnologia e carinho para oferecer soluções definitivas para você e seu melhor amigo.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--text-main)' }}>Institucional</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><a href="/nossa-historia" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '1.05rem', transition: 'color 0.3s' }}>Nossa História</a></li>
              <li><a href="/politica-privacidade" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '1.05rem', transition: 'color 0.3s' }}>Política de Privacidade</a></li>
              <li><a href="/termos-servico" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '1.05rem', transition: 'color 0.3s' }}>Termos de Serviço</a></li>
              <li><a href="/rastrear-pedido" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '1.05rem', transition: 'color 0.3s' }}>Rastrear Pedido</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--text-main)' }}>Atendimento</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>Dúvidas Frequentes (FAQ)</li>
              <li style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>De segunda a sexta, 9h às 18h</li>
              <li><a href="#" style={{ color: 'var(--accent-sage)', fontWeight: 600, textDecoration: 'none', fontSize: '1.05rem' }}>Fale no WhatsApp</a></li>
              <li><a href="mailto:contato@luminapet.com.br" style={{ color: 'var(--accent-terracotta)', fontWeight: 600, textDecoration: 'none', fontSize: '1.05rem' }}>contato@luminapet.com.br</a></li>
            </ul>
          </div>
        </div>
        
        <div className="container" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            &copy; 2026 LuminaPet Tecnologia LTDA. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </p>
          <div style={{ display: 'flex', gap: '16px', opacity: 0.7 }}>
            {/* Payment Icons Placeholder */}
            <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>PIX</span>
            <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>Mastercard</span>
            <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>Visa</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
