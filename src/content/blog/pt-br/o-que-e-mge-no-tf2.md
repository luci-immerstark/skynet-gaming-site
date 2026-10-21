---
translationKey: "mge"
title: "O que é MGE no TF2: como jogar e como funciona o ranking"
seoTitle: "O que é MGE no TF2 e como jogar | SKYNET"
description: "Entenda o MGE do TF2: duelos 1x1 em arenas, como entrar numa arena, os comandos, o ELO e o ranking do servidor MGE da SKYNET Gaming, em 100 tick."
date: 2026-10-21
cover: ../../../assets/img/mge-soldier-capa.jpg
draft: false
---

MGE é o modo de duelos 1x1 do Team Fortress 2: dois jogadores frente a frente numa arena, e vence quem fizer o número de frags da arena primeiro. É o jeito mais direto de treinar mira, movimentação e duelo, e é muito usado pelos jogadores competitivos para aquecer antes das partidas. A SKYNET agora tem um servidor de MGE em 100 tick: confira como entrar no fim do post.

## O que é MGE

No MGE, ninguém joga em time. O mapa é dividido em várias **arenas** separadas, e cada arena recebe **dois jogadores por vez**, um contra o outro. Quem chega primeiro ao limite de frags da arena vence o duelo, e quem estava na fila entra no lugar de quem perdeu. Assim o servidor inteiro fica cheio de duelos acontecendo ao mesmo tempo.

O modo funciona com o plugin **MGEMod**. O nome vem da comunidade **My Gaming Edge**, onde ele surgiu, criado por Lange e Cprice a partir de um plugin anterior, o kAmmomod. Hoje a versão mais usada é mantida pela comunidade (sappho.io e outros colaboradores), e é ela que roda no nosso servidor.

## As arenas do nosso mapa

O servidor roda o `mge_training_v8_beta4b`, o mapa de MGE mais conhecido, com **18 arenas**:

- **11 arenas de MGE clássico**, que recriam pontos famosos de mapas competitivos: Viaduct, Granary (meio e last), Badlands (meio e spire), Gullywash, Waste, Snakewater, Gravelpit, Process e Trainyard. Nelas o duelo vai até **20 frags**, e as classes liberadas são **Soldier, Demoman, Scout e Sniper**.
- **Arenas especiais** com regras próprias: **Turris** (rei do morro 1x1), **Ammomod**, **No Splash** (sem dano de explosão em área), **Endif** (foguetes que jogam o adversário para o alto) e **BBall 2v2**, o basquete do TF2.

## Como jogar no nosso servidor

1. Entre no servidor e digite **`!add`** no chat. Abre um menu com todas as arenas; escolha uma.
2. Se a arena estiver ocupada, você entra na **fila** e joga assim que um duelo terminar.
3. Escolha uma das classes liberadas na arena e duele. Cada vez que você mata o adversário, ganha 1 frag.
4. Quem chegar primeiro ao limite da arena vence. Para sair, digite **`!remove`**.

| Comando | O que faz |
|---|---|
| `!add` | abre o menu de arenas (ou `!add número` para ir direto a uma) |
| `!first` | entra na primeira arena livre |
| `!remove` | sai da arena |
| `!rank` | mostra o seu ELO do MGE (ou `!rank nome` de outro jogador) |
| `!top5` | mostra os 5 melhores ELOs do servidor |
| `!hud` | liga e desliga o placar na tela |
| `!hitblip` | liga e desliga o som de acerto |
| `!handicap` | diminui a sua vida máxima, para treinar com desvantagem |
| `!mgehelp` | mostra a ajuda do MGE |

## Como funciona o ranking

O servidor tem **dois rankings** ao mesmo tempo, e cada um mede uma coisa diferente.

### O ELO do MGE (no jogo)

É o ranking do próprio MGEMod, que você vê com `!rank`. Todo mundo começa com **1600**, e cada duelo muda o ELO dos dois jogadores conforme a força de cada um, como no xadrez:

| Situação | Vencedor | Perdedor |
|---|---|---|
| Dois jogadores do mesmo nível | +8 | −8 |
| O mais fraco (400 pontos abaixo) vence | +14 | −14 |
| O mais forte (400 pontos acima) vence | +1 | −1 |

Vencer alguém mais forte vale muito, e vencer alguém bem mais fraco quase não vale nada. Por isso o ELO mostra a força real de cada jogador. Acima de 2400 pontos as mudanças ficam menores, para o topo não oscilar demais.

### O ranking SKYNET (no site)

É o ranking HLstatsZ, o mesmo painel dos nossos outros servidores, com uma regra simples:

- **+5 pontos** para cada duelo vencido;
- **−2 pontos** para cada duelo perdido;
- kills e mortes **não** mexem nos pontos: só o resultado do duelo conta;
- quem sai no meio de um duelo pode levar a derrota;
- no BBall 2v2, os dois jogadores do time vencedor ganham +5 e os dois do time perdedor perdem 2.

Aqui quem joga mais e vence mais sobe, mesmo que os adversários sejam mais fracos. Ou seja: o ELO mede quem é o melhor duelista, e o ranking SKYNET premia quem está sempre no servidor ganhando duelos.

**[Ver o ranking do MGE](https://stats.skynet-tf2.com.br/hlstats.php?game=tfmge)**

## Como é o nosso servidor

- **Nome:** SKYNET BRASIL - MGE [100 TICK]
- **No ar desde:** 21/10/2026
- **Capacidade:** 12 slots, **100 tick**, hospedado em São Paulo.
- **Mapa:** `mge_training_v8_beta4b`, com 18 arenas. Na primeira vez, o mapa é baixado automaticamente quando você entra.
- **Mesma administração:** regras, admins, SourceBans e Discord são os mesmos dos outros servidores. Viu trapaça? Digite `!report` no chat.

Quer entender por que o 100 tick faz diferença num duelo? Leia [O que é tickrate e por que 100 tick faz diferença no TF2](/blog/o-que-e-tickrate-no-tf2/).

## Como entrar

Abra o console do jogo e digite:

`connect 212.38.89.226:27055`

Ou entre direto, com o TF2 já conectado:

<a class="btn btn-gold" href="steam://connect/212.38.89.226:27055">Jogar agora</a> <button class="btn btn-ghost" type="button" data-copy="212.38.89.226:27055" data-done="IP copiado!"><span class="copy-label">Copiar IP</span></button>

Veja a sua posição no [ranking do MGE](https://stats.skynet-tf2.com.br/hlstats.php?game=tfmge).
