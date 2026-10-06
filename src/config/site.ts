// Configuração central do site. Troque aqui links, servidores (IP, slots, ranking) e dados do evento.
export const site = {
  name: 'SKYNET GAMING TF2',
  url: 'https://skynet-tf2.com.br',
  discordUrl: 'https://discord.gg/HV7d6x8pEK',
  steamGroupUrl: 'https://steamcommunity.com/groups/skynetgaming-tf2',
  // Link geral do ranking: mostra os dois rankings para escolher. Cada servidor tem o seu em `servers`.
  rankingUrl: 'https://stats.skynet-tf2.com.br/hlstats.php',
  sourcebansUrl: 'https://bans.skynet-tf2.com.br/index.php?p=home',
  // Cloudflare Web Analytics: cole o token aqui (Analytics & Logs → Web Analytics → Manage site). Vazio = sem script.
  analyticsToken: '' as string,
  // Páginas ainda sem conteúdo real: ficam com noindex e fora do sitemap. Remova a chave quando a página estiver pronta.
  paginasProvisorias: ['eventos'] as string[],
  // Servidores da comunidade, na ordem em que aparecem no site. O IP só é escrito aqui.
  servers: {
    classic: {
      id: 'classic',
      name: 'SKYNET GAMING BRASIL / LATAM - CLASSIC MAPS',
      ip: '212.38.89.226:27015',
      slots: 40,
      tick: 100,
      launchDate: '2026-10-02', // no ar desde
      rankingUrl: 'https://stats.skynet-tf2.com.br/hlstats.php?game=tf',
    },
    dodgeball: {
      id: 'dodgeball',
      name: 'SKYNET GAMING BRASIL / LATAM - DODGEBALL',
      ip: '212.38.89.226:27025',
      slots: 8,
      tick: 100,
      launchDate: '2026-10-06',
      rankingUrl: 'https://stats.skynet-tf2.com.br/hlstats.php?game=tfdb',
    },
  },
  // Evento em destaque. Para o próximo evento, edite só este bloco.
  // enabled: false esconde o banner. start/end: ISO com fuso fixo.
  event: {
    enabled: true,
    start: '2026-10-30T20:00:00-03:00',
    end: '2026-11-02T20:00:00-03:00',
    text: {
      'pt-br': {
        title: 'EVENTO DE INAUGURAÇÃO',
        prize: 'R$ 500 em prêmios para o TOP 5 do ranking do servidor Classic Maps!',
        dates: 'De 30/10 às 20h até 02/11 às 20h (horário de Brasília)',
      },
      es: {
        title: 'EVENTO DE INAUGURACIÓN',
        prize: '¡R$ 500 en premios para el TOP 5 del ranking del servidor Classic Maps!',
        dates: 'Del 30/10 a las 20h al 02/11 a las 20h (hora de Brasil, UTC-3)',
      },
      en: {
        title: 'GRAND OPENING EVENT',
        prize: 'R$ 500 in prizes for the TOP 5 of the Classic Maps server ranking!',
        dates: 'From Oct 30 at 8 PM to Nov 2 at 8 PM (Brasília time, UTC-3)',
      },
    },
  },
} as const;

export type Server = (typeof site.servers)[keyof typeof site.servers];
export const serverList: Server[] = [site.servers.classic, site.servers.dodgeball];
export const steamConnect = (s: Server) => `steam://connect/${s.ip}`;
