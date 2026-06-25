import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LuminaPet | Cuidado e Inovação para quem você ama",
  description: "Acessórios inteligentes e premium para o bem-estar do seu pet. Inovação com carinho e segurança.",
  authors: [{ name: "LuminaPet" }],
  publisher: "LuminaPet",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

const antiCopyScript = `
  document.addEventListener('contextmenu', event => event.preventDefault());
  document.addEventListener('keydown', event => {
    if (event.keyCode === 123) { // F12
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode === 73) { // Ctrl+Shift+I
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode === 74) { // Ctrl+Shift+J
      event.preventDefault();
    }
    if (event.ctrlKey && event.keyCode === 85) { // Ctrl+U
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode === 67) { // Ctrl+Shift+C
      event.preventDefault();
    }
  });
  console.log("%cStop!", "color: red; font-family: sans-serif; font-size: 4em; font-weight: bolder; text-shadow: #000 1px 1px;");
  console.log("%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a feature or 'hack' someone's account, it is a scam.", "font-size: 1.5em;");
`;

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
        <script dangerouslySetInnerHTML={{ __html: antiCopyScript }} />
      </body>
    </html>
  );
}
