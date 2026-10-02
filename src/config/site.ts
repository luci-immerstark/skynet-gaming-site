// Configuração central do site. Troque aqui links, IP e dados do evento.
export const site = {
  name: 'SKYNET GAMING TF2',
  url: 'https://skynet-tf2.com.br',
  discordUrl: 'https://discord.gg/HV7d6x8pEK',
  steamGroupUrl: 'https://steamcommunity.com/groups/skynetgaming-tf2',
  rankingUrl: 'https://stats.skynet-tf2.com.br/hlstats.php',
  sourcebansUrl: 'https://bans.skynet-tf2.com.br/index.php?p=home',
  serverIp: '212.38.89.226:27015',
  // Evento em destaque. Para o próximo evento, edite só este bloco.
  // enabled: false esconde o banner. start/end: ISO com fuso fixo.
  event: {
    enabled: true,
    start: '2026-10-30T20:00:00-03:00',
    end: '2026-11-02T20:00:00-03:00',
    text: {
      'pt-br': {
        title: 'EVENTO DE INAUGURAÇÃO',
        prize: 'R$ 500 em prêmios para o TOP 5 do ranking!',
        dates: 'De 30/10 às 20h até 02/11 às 20h (horário de Brasília)',
      },
      es: {
        title: 'EVENTO DE INAUGURACIÓN',
        prize: '¡R$ 500 en premios para el TOP 5 del ranking!',
        dates: 'Del 30/10 a las 20h al 02/11 a las 20h (hora de Brasil, UTC-3)',
      },
    },
  },
} as const;
