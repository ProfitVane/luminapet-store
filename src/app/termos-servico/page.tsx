export const metadata = {
  title: "Termos de Serviço | LuminaPet",
  description: "Termos e condições de uso do site da LuminaPet.",
};

export default function TermosServico() {
  return (
    <div className="container animate-fade-in" style={{ padding: '60px 24px', maxWidth: '800px', margin: '0 auto', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '40px', letterSpacing: '-0.5px', fontFamily: 'Playfair Display' }}>
        Termos de <span className="text-gradient-terracotta">Serviço</span>
      </h1>
      
      <div style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <p>
          Ao utilizar o site <strong>luminapet.com.br</strong>, você concorda com estes Termos de Serviço. Solicitamos que leia atentamente as informações abaixo antes de realizar qualquer compra.
        </p>

        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginTop: '24px', marginBottom: '8px' }}>1. Prazos e Entregas</h2>
        <p>
          Trabalhamos com fornecedores nacionais e despachamos a maioria dos pedidos no prazo de 24 a 48 horas úteis após a confirmação do pagamento. O tempo estimado de entrega varia conforme a transportadora selecionada (Correios ou Jadlog) e a região de destino, e é devidamente informado no checkout. Em casos de força maior (greves, catástrofes naturais), atrasos excepcionais podem ocorrer.
        </p>

        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginTop: '24px', marginBottom: '8px' }}>2. Trocas, Devoluções e Garantia (Direito de Arrependimento)</h2>
        <p>
          Conforme estabelecido pelo Código de Defesa do Consumidor (Art. 49), você tem o direito de se arrepender da compra no prazo de até 7 (sete) dias corridos após o recebimento do produto. O item deve ser devolvido na embalagem original, sem indícios de uso ou violação do lacre original do fabricante, acompanhado de todos os acessórios.
        </p>
        <p>
          Além disso, todos os eletrônicos da linha Lumina Premium (como a <em>Steam Brush</em>) possuem <strong>90 dias de garantia</strong> contra defeitos de fabricação diretos da fábrica.
        </p>

        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginTop: '24px', marginBottom: '8px' }}>3. Pagamentos e Fraudes</h2>
        <p>
          Aceitamos pagamentos via PIX, Cartões de Crédito e Boleto Bancário. Todas as compras por cartão de crédito passam por um sistema de análise antifraude. A LuminaPet reserva-se o direito de cancelar pedidos que sejam sinalizados com alto risco de fraude, estornando imediatamente o valor ao titular do cartão para garantir a segurança de ambas as partes.
        </p>

        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginTop: '24px', marginBottom: '8px' }}>4. Propriedade Intelectual</h2>
        <p>
          Todo o material visual, código fonte, textos, logotipos e ilustrações deste site são de propriedade exclusiva da LuminaPet Tecnologia LTDA. O uso, reprodução ou cópia não autorizada de qualquer material (mesmo de forma automatizada por ferramentas de web scraping) constitui infração de direitos autorais, sujeitando os responsáveis a ações cíveis e criminais.
        </p>

        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginTop: '24px', marginBottom: '8px' }}>5. Modificações dos Termos</h2>
        <p>
          A LuminaPet reserva-se o direito de alterar estes termos a qualquer momento, visando adequações operacionais ou atualizações na legislação. As mudanças entram em vigor imediatamente após a publicação no site.
        </p>

        <p style={{ marginTop: '32px', fontSize: '0.9rem' }}>
          Para abrir um chamado sobre garantia ou devolução, acione nosso SAC via WhatsApp informando o número do seu pedido e o CPF do comprador.
        </p>
      </div>
    </div>
  );
}
