---
translationKey: "servidores-por-dentro"
title: "Como funcionam os servidores SKYNET por dentro"
seoTitle: "Como funcionam os servidores SKYNET por dentro | Bastidores"
description: "Bastidores da SKYNET Gaming: VPS em São Paulo, Docker, SourceMod, ranking HLstatsZ, SourceBans, backups e monitoramento dos servidores de TF2 e Left 4 Dead 2."
date: 2026-10-15
cover: ../../../assets/img/card-blog.jpg
draft: false
---

Você entra no servidor, joga a sua partida e sai. Mas o que existe por trás disso? Neste post mostramos como os servidores da SKYNET Gaming funcionam por dentro: a máquina, o Docker, os plugins, o ranking, os bans, os backups e o monitoramento. É um texto técnico, mas escrito para jogadores: não é preciso entender de servidores para acompanhar.

## Visão geral

A SKYNET Gaming Brasil mantém **4 servidores**, todos na mesma máquina em São Paulo:

- **TF2 Classic Maps**, com mapas clássicos do Team Fortress 2;
- **TF2 Dodgeball**, só com Pyro;
- **TF2 Zombie Infection**, o modo de zumbis;
- **Left 4 Dead 2**, uma campanha cooperativa.

Em volta deles há alguns serviços de apoio: um ranking de estatísticas, um painel público de bans, monitoramento externo, rotinas de reinício e de backup. Tudo isso é descrito abaixo.

## A máquina

Os servidores rodam em uma **VPS em São Paulo** (um servidor virtual alugado), com:

- processador **AMD Ryzen 9 9950X**, com 4 vCPUs liberadas para a nossa VPS;
- **8 GB de memória RAM**;
- **180 GB de SSD**;
- sistema **Ubuntu Linux**.

Ficar em São Paulo é importante para quem joga do Brasil, porque a distância até o servidor é pequena e o ping, baixo. Como a máquina é compartilhada por quatro servidores de jogo, os **núcleos de CPU são divididos entre eles**: cada servidor usa o seu grupo de núcleos, e assim um servidor cheio não atrapalha o desempenho dos outros. Quer entender por que o processador importa tanto? Leia [O que é tickrate e por que 100 tick faz diferença no TF2](/blog/o-que-e-tickrate-no-tf2/).

## Docker: um container para cada servidor

Em vez de instalar tudo "solto" no sistema, cada servidor roda dentro de um **container Docker**. Um container é como uma caixa fechada que leva dentro o programa e tudo de que ele precisa para funcionar. As vantagens para nós:

- **Isolamento:** um problema em um servidor não derruba os outros.
- **Organização:** cada servidor tem as suas configurações e os seus arquivos separados.
- **Atualização e recuperação simples:** recriar um container é rápido, e voltar ao estado anterior também.
- **Previsibilidade:** o servidor se comporta do mesmo jeito sempre que é reiniciado.

Os servidores de TF2 usam as imagens do projeto de código aberto **melkortf/tf2-servers**, que já trazem o Team Fortress 2 pronto para rodar em Docker. Se você quer entender melhor a base de tudo isso, leia também [O que é Linux e por que ele domina os servidores do mundo](/blog/o-que-e-linux-e-por-que-domina-os-servidores/).

## Os quatro servidores

### TF2 Classic Maps

Servidor para **40 jogadores**, em **100 tick**, com mapas clássicos do TF2. No fim de cada mapa acontece a **votação do próximo**, com **3 opções**. Elas não são sorteadas ao acaso: são escolhidas pela **nota de "hype"** de cada mapa (o quanto a comunidade gosta dele) e pelo **tempo que ele está sem ser jogado**. Assim, os mapas queridos aparecem mais, e nenhum fica esquecido para sempre.

### TF2 Dodgeball

Servidor para **8 jogadores**, em **100 tick**, **só com Pyro** e **sem bots**: o objetivo é rebater os foguetes. Tem ranking próprio:

- **+1** para cada kill;
- **−1** para cada morte, inclusive por um foguete que não foi rebatido;
- **+2** para cada jogador do time vencedor.

A pontuação só vale quando há **4 ou mais jogadores** no servidor. Para saber mais sobre o modo, veja [O que é Dodgeball no TF2](/blog/o-que-e-dodgeball-no-tf2/).

### TF2 Zombie Infection

Modo feito em **VScript** (a linguagem de scripts do próprio jogo), rodando a **66,7 tick** e com **pontuação própria** no ranking. Sobreviventes enfrentam uma horda de zumbis, e quem morre vira zumbi. Veja os detalhes em [O que é Zombie Infection no TF2](/blog/o-que-e-zombie-infection-no-tf2/).

### Left 4 Dead 2

**Campanha cooperativa para 20 jogadores**, em **100 tick** e **sempre no nível Expert**. A partida começa com **4 bots sobreviventes**. O servidor tem o menu **`!buy`**: você ganha pontos matando infectados (**inclusive os zumbis comuns**) e gasta esses pontos no menu. Os pontos ficam com você **até você sair do servidor**.

## SourceMod e plugins

O **SourceMod** é a plataforma que permite instalar plugins em servidores de jogos da Valve. É por ele que funcionam as votações de mapa, o menu `!buy`, as regras de pontuação do Dodgeball e muito mais. Usamos vários plugins da comunidade, e **vários deles foram criados do zero pela própria SKYNET** para o que os plugins prontos não faziam do jeito que queríamos.

## Ranking: HLstatsZ

O ranking usa o **HLstatsZ** ([SnipeZilla/HLSTATS-2](https://github.com/SnipeZilla/HLSTATS-2)), com o frontend **hlstatsz-web**. Ele registra o que acontece em cada partida e monta as estatísticas de cada jogador. Os rankings são **separados por servidor e por jogo**: o Classic Maps, o Dodgeball, o Zombie Infection e o Left 4 Dead 2 têm cada um a sua tabela. Veja tudo no [ranking da SKYNET](https://stats.skynet-tf2.com.br/hlstats.php). Para entender a pontuação, leia [Como funciona o ranking do servidor](/blog/como-funciona-o-ranking/).

## SourceBans++

Para banimentos usamos o **SourceBans++**, em **uma única instalação para todos os servidores**. Na prática: quem é banido em um servidor fica banido em todos, e a lista de bans é pública. Você pode consultá-la no [painel do SourceBans](https://bans.skynet-tf2.com.br/index.php?p=home). Isso dá transparência: qualquer pessoa vê quem foi punido e por quê.

## RCON e administração

**RCON** (*Remote CONsole*) é o console remoto do servidor: com ele é possível rodar comandos, como trocar de mapa ou ajustar uma configuração, sem estar dentro do jogo. É uma ferramenta poderosa, e por isso **só a administração usa**, de forma **protegida**: o acesso não é aberto ao público e a senha nunca é divulgada.

A administração tem **níveis**: **donos** e **moderadores**, cada um com permissões diferentes. O **Left 4 Dead 2 tem admins próprios**, separados dos admins do TF2. Todos seguem as [regras da comunidade](/#regras), e as punições aparecem no SourceBans.

## Monitoramento

Para saber rápido quando algo sai do ar, usamos um **monitoramento externo com o UptimeRobot**. Ele fica de olho no **ranking**, no **SourceBans** e na **VPS**, e, se algo parar de responder, manda um **alerta no Discord** da administração. Os painéis web ficam atrás da **Cloudflare**, e este site roda no **Cloudflare Workers**, o que ajuda na velocidade e na proteção.

## Reinícios e backups

- **Reinício automático uma vez por dia, às 5h**, quando quase ninguém está jogando. Ele mantém os servidores "frescos" e evita que problemas se acumulem.
- **Backups guardados por 7 dias na própria VPS e por 7 dias na nuvem.** Se algo der muito errado, existe uma cópia em outro lugar.

## Comandos úteis

**Para jogadores** (no chat do jogo):

- Ranking HLstatsZ: `rank`, `top10`, `statsme` e `session`.
- Left 4 Dead 2: `!buy` abre o menu de compras.

**Para admins:**

- O menu do SourceMod, com `!admin`.
- Banimentos feitos pelo SourceBans.

## Como entrar

Abra o console do jogo (ou use o botão "Jogar agora" da página inicial) e digite:

- Classic Maps: `connect 212.38.89.226:27015`
- Dodgeball: `connect 212.38.89.226:27025`
- Zombie Infection: `connect 212.38.89.226:27045`
- Left 4 Dead 2: `connect 212.38.89.226:27035`

Se for a sua primeira vez, veja o passo a passo em [Como entrar em um servidor de TF2](/blog/como-entrar-em-servidor-de-tf2/). Entre também no [grupo da SKYNET na Steam](https://steamcommunity.com/groups/skynetgaming-tf2), confira o [ranking](https://stats.skynet-tf2.com.br/hlstats.php) e o [SourceBans](https://bans.skynet-tf2.com.br/index.php?p=home) e bom jogo!
