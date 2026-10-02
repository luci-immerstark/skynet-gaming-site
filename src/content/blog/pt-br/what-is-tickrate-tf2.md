---
title: "O que é tickrate e por que um servidor de 100 tick faz diferença no TF2?"
seoTitle: "O que é tickrate no TF2 e por que 100 tick importa"
description: "Entenda o que é tickrate, a diferença entre 66 e 100 tick e o que um servidor de 100 tick muda (e não muda) no Team Fortress 2."
date: 2026-10-02
updated: 2026-10-02
cover: ../../../assets/img/hero-bg.jpg
draft: false
---

Tickrate é quantas vezes por segundo o servidor atualiza o estado da partida: posições, tiros, danos e eventos. Um servidor de 100 tick faz isso 100 vezes por segundo (a cada 10 ms), contra cerca de 66 vezes no padrão do TF2 (a cada ~15 ms). Na prática, isso deixa o registro de tiros e de movimentos um pouco mais preciso e responsivo.

## O que é um "tick"

O servidor não processa o jogo de forma contínua: ele avança em passos discretos, os ticks. A cada tick, ele lê as ações dos jogadores, calcula o resultado e envia o novo estado de volta. Quanto mais ticks por segundo, menor o intervalo entre uma atualização e outra.

## Por que 100 tick faz diferença

- **Registro de tiros mais fino:** com intervalos menores, é menor a chance de um tiro ser processado "entre" duas atualizações e perder precisão, o que ajuda principalmente em armas de acerto instantâneo, como o Sniper e o Scout.
- **Movimento mais fiel:** a posição dos jogadores é atualizada com mais frequência, o que reduz a sensação de "teleporte" em combates rápidos.
- **Respostas mais consistentes:** o intervalo máximo de espera por uma atualização cai de cerca de 15 ms para 10 ms.

## O que 100 tick não muda

- **Seu ping:** o tickrate não substitui uma boa conexão. Um servidor próximo continua sendo o que mais reduz a latência (o nosso fica em São Paulo).
- **Sua habilidade:** a diferença é sutil. Ela ajuda a reduzir frustrações, mas não joga por você.
- **Seu hardware:** um computador que não sustenta bons FPS limita o ganho.

## Como aproveitar melhor

Para aproveitar um servidor de 100 tick, o ideal é ter uma conexão estável e um FPS confortavelmente acima de 100. Os valores `cl_cmdrate` e `cl_updaterate` do seu jogo também influenciam a taxa de dados trocada com o servidor (que impõe seus próprios limites); você pode conferir sua conexão no console com `net_graph 1`, que mostra ping, perda de pacotes e a taxa de atualização.

O servidor da SKYNET Gaming roda a 100 tick, com 40 slots e hospedagem em São Paulo. Para entrar, veja [como entrar em um servidor comunitário de TF2](/blog/how-to-join-tf2-community-server/).
