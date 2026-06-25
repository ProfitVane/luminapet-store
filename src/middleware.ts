import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Uma lista básica de User-Agents frequentemente associados a bots de scraping rudimentares.
const BLOCKED_USER_AGENTS = [
  'curl',
  'python-requests',
  'wget',
  'scrapy',
  'urllib',
  'postmanruntime',
  'httpclient'
];

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const userAgentLower = userAgent.toLowerCase();

  // Bloqueio de bots por User-Agent
  const isBlocked = BLOCKED_USER_AGENTS.some((bot) => userAgentLower.includes(bot));
  
  if (isBlocked) {
    return new NextResponse('Access Denied: Automated tools are not allowed.', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  // Next.js response padrão
  const response = NextResponse.next();
  
  // Reforçar o cabeçalho X-Powered-By ausente caso alguma ferramenta injete
  response.headers.delete('x-powered-by');
  
  return response;
}

// Configura em quais caminhos o middleware vai atuar
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
