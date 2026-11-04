// Central site configuration. Change links, servers (IP, slots, ranking) and event data here.
/** Featured event. status 'adiado' (postponed): banner without dates, prize or countdown (start/end/prize/dates are not used).
 *  status 'agendado' (scheduled): banner with countdown, prize and dates (start/end: ISO with a fixed offset). enabled: false hides the banner. */
export type SiteEvent = {
  enabled: boolean;
  status: 'agendado' | 'adiado';
  start?: string;
  end?: string;
  text: Record<'pt-br' | 'es' | 'en', { title: string; prize?: string; dates?: string }>;
};
const event: SiteEvent = {
  enabled: true,
  status: 'adiado',
  text: {
    'pt-br': { title: 'EVENTO DE INAUGURAÇÃO ADIADO' },
    es: { title: 'EVENTO DE INAUGURACIÓN POSPUESTO' },
    en: { title: 'GRAND OPENING EVENT POSTPONED' },
  },
};

export const site = {
  name: 'SKYNET GAMING TF2',
  url: 'https://skynet-tf2.com.br',
  discordUrl: 'https://discord.gg/HV7d6x8pEK',
  steamGroupUrl: 'https://steamcommunity.com/groups/skynetgaming-tf2',
  // General ranking link: shows every ranking to choose from. Each server has its own in `servers`.
  rankingUrl: 'https://stats.skynet-tf2.com.br/hlstats.php',
  sourcebansUrl: 'https://bans.skynet-tf2.com.br/index.php?p=home',
  // Cloudflare Web Analytics: paste the token here (Analytics & Logs → Web Analytics → Manage site). Empty = no script.
  analyticsToken: '' as string,
  // Pages without real content yet: they get noindex and stay out of the sitemap. Remove the key when the page is ready.
  paginasProvisorias: [] as string[],
  // Community servers, in the order they appear on the site. The IP is only written here.
  servers: {
    classic: {
      id: 'classic',
      game: 'tf2',
      short: '24/7 2Fort',
      name: 'SKYNET BRASIL - 24/7 2FORT [100 TICK]',
      ip: '212.38.89.226:27015',
      slots: 40,
      tick: 100,
      launchDate: '2026-10-02', // online since
      rankingUrl: 'https://stats.skynet-tf2.com.br/hlstats.php?game=tf',
    },
    dodgeball: {
      id: 'dodgeball',
      game: 'tf2',
      short: 'Dodgeball',
      name: 'SKYNET BRASIL - DODGEBALL [100 TICK]',
      ip: '212.38.89.226:27025',
      slots: 16,
      tick: 100,
      launchDate: '2026-10-06',
      rankingUrl: 'https://stats.skynet-tf2.com.br/hlstats.php?game=tfdb',
    },
    mge: {
      id: 'mge',
      game: 'tf2',
      short: 'MGE',
      name: 'SKYNET BRASIL - MGE [100 TICK]',
      ip: '212.38.89.226:27055',
      slots: 12,
      tick: 100,
      launchDate: '2026-10-21',
      rankingUrl: 'https://stats.skynet-tf2.com.br/hlstats.php?game=tfmge',
    },
    zombieInfection: {
      id: 'zombieInfection',
      game: 'tf2',
      short: 'Freak Fortress 2',
      name: 'SKYNET BRASIL - FREAK FORTRESS 2',
      ip: '212.38.89.226:27045',
      slots: 24,
      tick: null, // the mode's default tick: do not advertise it as 100 tick
      launchDate: '2026-10-27',
      rankingUrl: 'https://stats.skynet-tf2.com.br/hlstats.php?game=tfzi',
    },
    l4d2: {
      id: 'l4d2',
      game: 'l4d2',
      short: 'Coop',
      name: 'SKYNET BRASIL - COOP EXPERT [100 TICK]', // exact name in the game's server browser
      ip: '212.38.89.226:27035',
      slots: 20,
      tick: 100,
      rankingUrl: 'https://stats.skynet-tf2.com.br/hlstats.php?game=l4d2',
    },
  },
  // Featured event. For the next event, edit only `event` above.
  event,
} as const;

export type Server = (typeof site.servers)[keyof typeof site.servers];
export type Game = Server['game'];
export const serverList: Server[] = [site.servers.classic, site.servers.dodgeball, site.servers.mge, site.servers.zombieInfection, site.servers.l4d2];
/** Servers grouped by game, in display order. Every place that lists IPs uses this. */
export const games: { id: Game; servers: Server[] }[] = [
  { id: 'tf2', servers: serverList.filter((s) => s.game === 'tf2') },
  { id: 'l4d2', servers: serverList.filter((s) => s.game === 'l4d2') },
];
export const steamConnect = (s: Server) => `steam://connect/${s.ip}`;
