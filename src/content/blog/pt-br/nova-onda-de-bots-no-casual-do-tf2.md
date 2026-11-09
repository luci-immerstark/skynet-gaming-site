---
translationKey: "bots-casual-2026"
title: "A nova onda de bots no Casual do TF2: o que está acontecendo"
seoTitle: "Nova onda de bots no Casual do TF2 (2026) | SKYNET"
description: "Os bots voltaram ao Casual do TF2 de um jeito novo: contas que nem abrem o jogo ocupam vagas como 'Player Connecting'. Entenda o que mudou, o histórico e como jogar sem eles."
date: 2026-11-09
cover: ../../../assets/img/blog-bots-casual-tf2.jpg
draft: false
---

Logo depois da atualização de Halloween, no fim de outubro de 2026, quem tentou jogar o modo **Casual** do Team Fortress 2 encontrou algo estranho: servidores aparecendo como cheios, mas com metade dos jogadores parada em **"Player Connecting..."**, times de 2 contra 7 e partidas que nunca enchem. Os bots voltaram, e desta vez de um jeito diferente.

Neste post explicamos o que está acontecendo, por que é diferente das ondas anteriores e como continuar jogando TF2 sem passar raiva. As informações vêm de relatos da comunidade, de vídeos como [not this again... (already outdated)](https://www.youtube.com/watch?v=l2FSPBXrMpk), do canal Jontohil2, e dos relatórios de bug abertos no [GitHub da Valve](https://github.com/ValveSoftware/Source-1-Games/issues/8434).

## Um pouco de história: #SaveTF2 e #FixTF2

Os bots não são novidade no TF2. Durante anos, o Casual sofreu com contas automáticas usando **aimbot**, roubando o nome de jogadores, enchendo o chat de spam e abrindo **votekicks** contra quem tentava denunciar. A comunidade reagiu com as campanhas **#SaveTF2**, em 2022, e **#FixTF2**, em 2024.

Em 2024 a pressão foi enorme: uma petição pedindo que a Valve resolvesse o problema passou de [120 mil assinaturas](https://www.windowscentral.com/gaming/over-120000-team-fortress-2-players-sign-fix-tf2-petition-for-valve-to-end-the-bot-crisis), e as avaliações recentes do jogo na Steam ficaram ["Ligeiramente negativas" pela primeira vez](https://www.gamesradar.com/games/fps/team-fortress-2s-long-running-bot-issue-hits-a-historical-low-as-recent-steam-reviews-hit-mostly-negative-for-the-first-time-in-its-17-year-history). A Valve então [reconheceu publicamente o tamanho do problema](https://www.pcgamer.com/uk/valve-says-it-sees-how-large-team-fortress-2s-bot-problem-is-and-will-actually-do-something/), e uma série de atualizações em meados de 2024 reduziu drasticamente os bots trapaceiros.

## O que mudou agora: os bots "fantasma"

A onda de 2026 não é de bots com aimbot. Pelos relatos, são contas que **nem abrem o jogo**. Elas conversam diretamente com o **Game Coordinator**, o sistema da Valve que monta as partidas do Casual, entram na fila e são enviadas para os servidores como se fossem jogadores de verdade. Esses clientes "sem cabeça" (headless, como a comunidade chama) não usam o TF2 de verdade, então dá para rodar muitos ao mesmo tempo.

O problema está em como o Casual reserva as vagas. Quando você é colocado em uma partida, o servidor guarda o seu lugar enquanto você conecta. Os bots entram nesse estado e ficam ali, como **"Player Connecting..."**, sem nunca terminar de carregar. Para o sistema, a vaga está ocupada. O resultado:

- **Servidores "cheios" e vazios ao mesmo tempo:** o servidor aparece lotado, mas quase ninguém está jogando de verdade.
- **Times desequilibrados:** partidas de 2 contra 7, ou com metade do time em cinza no placar.
- **Autobalance sem fim:** quando algum desses bots finalmente entra, costuma sair na hora, e o jogo fica trocando jogadores de time.
- **Nomes estranhos:** muitas contas aparecem com nomes embaralhados, entrando e saindo rapidamente.

Os relatos no rastreador de bugs da Valve dizem que o problema piorou muito a partir de 29 de outubro, e que mapas populares como Upward e Badwater estavam entre os mais afetados.

## E a Valve?

Os jogadores abriram relatórios no GitHub da Valve logo nos primeiros dias, inclusive com sugestões de solução: um limite de tempo para carregar, liberar a vaga quando esse tempo acabar e travar contas que entram em partidas repetidamente sem nunca carregar. Um desses relatórios foi [fechado como duplicado](https://github.com/ValveSoftware/Source-1-Games/issues/8433), e outro continuou aberto sem resposta oficial nos primeiros dias.

Nos dias seguintes, criadores de conteúdo registraram momentos de melhora e, depois, relatos de que a situação tinha piorado de novo. Ou seja, a coisa está mudando rápido. Se a Valve publicar uma correção, atualizamos este post.

## Por que os servidores comunitários escapam disso

Esse ataque mira o **matchmaking** do Casual: é o Game Coordinator que escolhe o servidor e reserva as vagas, e é essa reserva que os bots exploram. Em um **servidor comunitário**, como os da SKYNET, é diferente:

- **Você escolhe onde jogar:** a conexão é direta, pelo navegador de servidores ou pelo comando `connect`, sem fila do Casual no meio.
- **Tem gente cuidando:** admins podem expulsar, banir e investigar na hora, e os bans ficam registrados em um sistema próprio, como o nosso [SourceBans](https://bans.skynet-tf2.com.br/index.php?p=home).
- **Comunidade de verdade:** os mesmos jogadores voltam todo dia, e fica fácil notar e denunciar quem não é humano.

Nenhum servidor é imune a trapaceiros, mas em um servidor comunitário existe alguém para agir. Se você nunca entrou em um, veja o passo a passo em [Como entrar em um servidor comunitário de TF2](/blog/como-entrar-em-servidor-de-tf2/).

## O que você pode fazer

- **Denuncie os bots** pelo próprio jogo ou pelo perfil da Steam. Mesmo que demore, as denúncias ajudam a Valve a identificar as contas.
- **Não brigue no chat:** quem roda bots gosta de atenção. Denuncie e siga em frente.
- **Favorite servidores comunitários** que você curte, para não depender do Casual.
- **Acompanhe os canais oficiais** do TF2 para saber quando sair uma correção.

## Jogue sem bots na SKYNET

Enquanto o Casual não volta ao normal, os servidores da SKYNET estão de portas abertas: quatro servidores de TF2 em São Paulo, com admins de verdade, regras claras e [ranking](https://stats.skynet-tf2.com.br/hlstats.php). Se quiser trocar ideia com a comunidade, avisar sobre um problema ou só achar gente para jogar, entre no nosso [Discord](https://discord.gg/HV7d6x8pEK).
