import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LuminaPet | Cuidado e Inovação para quem você ama",
  description: "Acessórios inteligentes e premium para o bem-estar do seu pet. Inovação com carinho e segurança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ scrollBehavior: 'smooth' }}>
      <body>
        <nav className="nav-clean" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, padding: '20px 0' }}>
          <div className="container flex-between">
            <div style={{ fontSize: '1.75rem', fontFamily: 'Playfair Display, serif', fontWeight: 700, color: 'var(--accent-terracotta)' }}>
              Lumina<span style={{ color: 'var(--text-main)' }}>Pet.</span>
            </div>
            <div style={{ display: 'flex', gap: '32px', fontWeight: 400, color: 'var(--text-main)', fontSize: '1.05rem' }}>
              <a href="#produtos" style={{ color: 'inherit', textDecoration: 'none' }}>Nossa Seleção</a>
              <a href="#beneficios" style={{ color: 'inherit', textDecoration: 'none' }}>Por que a Lumina?</a>
              <a href="#depoimentos" style={{ color: 'inherit', textDecoration: 'none' }}>Família</a>
            </div>
          </div>
        </nav>
        <main style={{ paddingTop: '90px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
