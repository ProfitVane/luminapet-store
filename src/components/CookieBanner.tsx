"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lumina_cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("lumina_cookie_consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      right: '24px',
      maxWidth: '500px',
      backgroundColor: 'var(--bg-main)',
      border: '1px solid var(--border-soft)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      padding: '24px',
      borderRadius: '16px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      animation: 'fadeInUp 0.5s ease-out'
    }}>
      <h4 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-main)' }}>🍪 Respeitamos sua privacidade</h4>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
        Utilizamos cookies essenciais e tecnologias semelhantes de acordo com a nossa <a href="/politica-privacidade" style={{ color: 'var(--accent-sage)', textDecoration: 'underline' }}>Política de Privacidade</a> para garantir a melhor experiência de compra e segurança.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
        <button 
          onClick={acceptCookies}
          className="btn-primary" 
          style={{ padding: '10px 24px', fontSize: '0.95rem' }}
        >
          Aceitar e Continuar
        </button>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
