---
translationKey: "lerp"
title: "O que é lerp no TF2 e como configurar (cl_interp e rates)"
seoTitle: "Lerp no TF2: o que é e como configurar | SKYNET"
description: "Entenda o lerp (cl_interp) e as rates do TF2, as vantagens e desvantagens de reduzir o atraso e as configurações prontas para servidores de 66 e 100 tick, como os da SKYNET."
date: 2026-10-21
cover: ../../../assets/img/blog-lerp-capa.jpg
draft: false
---

O lerp é um pequeno atraso que o próprio TF2 coloca no que você vê na tela, para deixar o movimento dos outros jogadores mais suave. O padrão é de 100 ms, pensado para conexões ruins, e quase todo mundo hoje pode usar bem menos. Neste guia você entende o que é o lerp, o que são as rates e copia a configuração certa para o seu PC e para o servidor em que joga.

![Quatro quadros do mesmo Scout correndo: com lerp alto o tiro erra, com lerp baixo acerta](../../../assets/img/blog-lerp-hit-miss.jpg)
*Com lerp alto, o que você vê está atrasado em relação ao servidor: o tiro que parecia certo pode errar.*

## O que é lerp

Lerp vem de *interpolação*. O seu jogo não recebe a posição dos outros jogadores o tempo todo, e sim em pacotes. Para não mostrar todo mundo dando "saltos", ele espera um pouco e desenha o caminho entre um pacote e outro. Esse tempo de espera é o lerp.

O valor padrão, **100 ms (0,1 s)**, foi pensado para quem jogava com internet instável, como modem 3G. Para quem tem um PC razoável e uma conexão estável, é exagerado: quanto menor o lerp, mais o que aparece na sua tela bate com o que está acontecendo no servidor.

### Vantagens de reduzir o lerp

- **Acerto mais preciso:** com armas de precisão, o tempo entre o clique e o acerto registrado fica menor.
- **Projéteis mais fiéis:** o foguete do Soldier e a granada do Demoman saem da arma do inimigo e voam o caminho todo, em vez de aparecer no meio do trajeto e "teleportar" até você.
- **Você mira onde o inimigo está**, e não onde ele vai estar daqui a uma fração de segundo. Vale para balas e para projéteis.

### Desvantagens

- **Exige um servidor bom.** O servidor também tem FPS: se ele cair, você sente na hora. Ele precisa ter desempenho estável e a configuração de rede correta.
- **Jogador com conexão ruim aparece travando na sua tela.** Com projéteis dá para se virar, mas com armas de precisão fica difícil acertar quem está com muito lag.

## Como mudar o lerp

O comando é `cl_interp`, com o tempo em segundos. Por exemplo, `cl_interp 0.035` é um lerp de 35 ms. A dica é começar pelo menor valor e subir aos poucos se aparecer algum problema.

- **Não dá para mudar no meio da partida:** você precisa estar de espectador ou fora do servidor.
- **O lerp real nunca chega a zero.** O jogo usa o maior valor entre `cl_interp` e `cl_interp_ratio ÷ cl_updaterate`. Num servidor de 66 tick, o mínimo fica em torno de **15,2 ms**; num servidor de **100 tick**, como o 24/7 2Fort, o Dodgeball e o MGE da SKYNET, cai para **10 ms**.

## O que são as rates

As rates são quantas vezes por segundo o seu jogo troca dados com o servidor:

- `cl_updaterate`: quantos pacotes por segundo você **recebe**;
- `cl_cmdrate`: quantos pacotes por segundo você **envia**.

Um servidor comum de TF2 calcula a partida 66,7 vezes por segundo, e os nossos servidores de 100 tick, 100 vezes. Mesmo assim, o padrão antigo do jogo era só 20 pacotes recebidos e 30 enviados por segundo. Aumentar as rates até o tick do servidor deixa o movimento dos outros jogadores mais suave e o acerto mais preciso. Para entender o tick, leia [O que é tickrate e por que 100 tick faz diferença no TF2](/blog/o-que-e-tickrate-no-tf2/).

Aumentar as rates não tem desvantagem, desde que o seu PC e a sua internet aguentem:

- **FPS:** o jogo não envia dados mais vezes do que desenha quadros. Se o seu FPS cai abaixo das rates, não adianta subir.
- **Banda:** no meio de uma luta, o tráfego pode chegar a uns 50 KB/s (400 kbit/s).
- **Estabilidade:** se o seu ping fica pulando, por exemplo entre 80 e 120 o tempo todo, é melhor usar rates mais baixas.

E vale o mesmo da parte do lerp: com rates no máximo, qualquer queda de FPS do servidor vira lag na sua tela. Antes de culpar a configuração, veja se o servidor em que você está aguenta.

## Configurações prontas

Comece pela primeira da lista e só desça se tiver lag constante em todos os servidores.

**Servidores de 100 tick (24/7 2Fort, Dodgeball e MGE da SKYNET)**, para PC que segura mais de 100 FPS:

```
cl_cmdrate 100; cl_updaterate 100; cl_interp_ratio 1; cl_interp 0; rate 196608
```

**Ideal para servidores de 66 tick:**

```
cl_cmdrate 66; cl_updaterate 66; cl_interp_ratio 1; cl_interp 0.0151515; rate 66000
```

**Um pouco abaixo:**

```
cl_cmdrate 50; cl_updaterate 50; cl_interp_ratio 1; cl_interp 0.023; rate 50000
```

**Se as outras derem lag:**

```
cl_cmdrate 40; cl_updaterate 40; cl_interp_ratio 1; cl_interp 0.04; rate 40000
```

**Conexão bem ruim (pior que isso, só o padrão do jogo):**

```
cl_cmdrate 30; cl_updaterate 30; cl_interp_ratio 2; cl_interp 0.066666; rate 30000
```

O `rate` é o limite de dados por segundo que você aceita receber. O padrão atual do TF2 já é 196608, maior que os valores da lista. Se o seu já for esse, pode manter, e o resto da linha continua valendo. O `cl_interp_ratio` define quantos pacotes de folga o jogo guarda para interpolar: com 1 o lerp fica no mínimo, e com 2 ele aguenta melhor a perda de pacotes.

### Para não perder a configuração

Os comandos do console valem só até você fechar o jogo. Para usar sempre:

1. Abra a pasta do jogo, em `Team Fortress 2/tf/cfg`. Na Steam: botão direito no TF2 → **Gerenciar** → **Ver arquivos locais**.
2. Crie (ou abra) o arquivo `autoexec.cfg`.
3. Cole a linha da configuração escolhida e salve. O TF2 carrega esse arquivo toda vez que abre.

Para conferir, digite `net_graph 1` no console: aparecem o lerp, o ping, a perda de pacotes e as rates em uso.

---

*Este post é uma adaptação, em português, do guia de lerp e rates escrito por sheo, com as configurações para os servidores de 100 tick da SKYNET.*

**By sheo**
