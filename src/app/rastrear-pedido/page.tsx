"use client";

import { useState } from "react";

export default function RastrearPedido() {
  const [codigo, setCodigo] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!codigo) return;
    
    // Como ainda não temos uma API de frete definida,
    // podemos redirecionar para um site genérico de rastreio (ex: Muambator)
    // ou apenas alertar para demonstração visual.
    window.open(`https://www.muambator.com.br/pacotes/${codigo}/detalhes/`, "_blank");
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '80px 24px', maxWidth: '600px', margin: '0 auto', minHeight: '65vh', textAlign: 'center' }}>
      <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '80px', height: '80px', background: 'var(--bg-secondary)', borderRadius: '50%', marginBottom: '32px', fontSize: '2.5rem' }}>
        📦
      </div>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '16px', letterSpacing: '-0.5px' }}>
        Rastreie seu <span className="text-gradient-sage">Pedido</span>
      </h1>
      
      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6 }}>
        Insira o código de rastreamento que enviamos para o seu e-mail ou WhatsApp para acompanhar a entrega do seu pacote LuminaPet.
      </p>

      <div className="card-soft" style={{ padding: '40px', background: 'white' }}>
        <form onSubmit={handleTrack} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '8px' }}>
            <label htmlFor="tracking-code" style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-main)' }}>Código de Rastreio</label>
            <input 
              id="tracking-code"
              type="text" 
              placeholder="Ex: NL123456789BR"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value.toUpperCase())}
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '2px solid var(--bg-secondary)',
                fontSize: '1rem',
                outline: 'none',
                fontFamily: 'Outfit, sans-serif',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-sage)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--bg-secondary)'}
            />
          </div>
          
          <button 
            type="submit" 
            className="btn-primary" 
            style={{ width: '100%', padding: '16px', fontSize: '1.1rem', marginTop: '8px' }}
          >
            Acompanhar Entrega
          </button>
        </form>
      </div>

      <p style={{ marginTop: '32px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
        Os códigos podem levar até 24h úteis para constar na base de dados dos Correios ou Transportadora após a postagem.
      </p>
    </div>
  );
}
