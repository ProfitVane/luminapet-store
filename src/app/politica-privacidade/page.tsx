export const metadata = {
  title: "Política de Privacidade | LuminaPet",
  description: "Entenda como a LuminaPet protege os seus dados e privacidade.",
};

export default function PoliticaPrivacidade() {
  return (
    <div className="container animate-fade-in" style={{ padding: '60px 24px', maxWidth: '800px', margin: '0 auto', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '40px', letterSpacing: '-0.5px', fontFamily: 'Playfair Display' }}>
        Política de <span className="text-gradient-sage">Privacidade</span>
      </h1>
      
      <div style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <p>
          A privacidade e a segurança dos seus dados são prioridades máximas para a LuminaPet. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
        </p>

        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginTop: '24px', marginBottom: '8px' }}>1. Coleta de Informações</h2>
        <p>
          Coletamos as informações que você nos fornece diretamente ao realizar uma compra ou cadastro em nosso site, tais como: nome completo, endereço de entrega, CPF, e-mail e telefone de contato. Dados de pagamento não são armazenados em nossos servidores; eles são processados com criptografia de ponta a ponta (SSL) diretamente pelo nosso gateway de pagamento homologado pelo Banco Central.
        </p>

        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginTop: '24px', marginBottom: '8px' }}>2. Uso das Informações</h2>
        <p>
          Utilizamos seus dados estritamente para as seguintes finalidades:
        </p>
        <ul style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Processamento, faturamento e envio dos pedidos.</li>
          <li>Comunicação sobre o status do seu pedido (via e-mail ou WhatsApp).</li>
          <li>Cumprimento de obrigações legais e fiscais (emissão de Nota Fiscal).</li>
          <li>Melhoria contínua da sua experiência de navegação em nosso site.</li>
        </ul>

        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginTop: '24px', marginBottom: '8px' }}>3. Compartilhamento de Dados</h2>
        <p>
          A LuminaPet garante que <strong>nunca venderá ou alugará</strong> suas informações pessoais. Seus dados são compartilhados apenas com parceiros logísticos (transportadoras, Correios) e gateways de pagamento estritamente na medida do necessário para viabilizar a entrega e a cobrança do seu pedido.
        </p>

        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginTop: '24px', marginBottom: '8px' }}>4. Segurança Tecnológica (A Blindagem LuminaPet)</h2>
        <p>
          Temos orgulho de empregar medidas de segurança de classe mundial em nosso ecossistema:
        </p>
        <ul style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>Tráfego 100% criptografado (Protocolo HTTPS / TLS 1.3).</li>
          <li>Bloqueio ativo contra ferramentas maliciosas de raspagem de dados e bots.</li>
          <li>Adesão estrita a rigorosas Políticas de Segurança de Conteúdo (CSP) que bloqueiam tentativas de roubo de sessão.</li>
        </ul>

        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginTop: '24px', marginBottom: '8px' }}>5. Seus Direitos (LGPD)</h2>
        <p>
          Como titular dos dados, você tem o direito de solicitar o acesso, a retificação ou a exclusão dos seus dados pessoais dos nossos sistemas a qualquer momento. Para exercer esses direitos, basta enviar um e-mail para <a href="mailto:privacidade@luminapet.com.br" style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold' }}>privacidade@luminapet.com.br</a>.
        </p>

        <p style={{ marginTop: '32px', fontSize: '0.9rem' }}>
          * Esta política pode ser atualizada periodicamente. Última atualização: Junho de 2026.
        </p>
      </div>
    </div>
  );
}
