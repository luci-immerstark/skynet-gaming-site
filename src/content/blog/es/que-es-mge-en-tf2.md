---
translationKey: "mge"
title: "Qué es MGE en TF2: cómo jugar y cómo funciona el ranking"
seoTitle: "Qué es MGE en TF2 y cómo jugar | SKYNET"
description: "Conoce el MGE de TF2: duelos 1 contra 1 en arenas, cómo entrar a una arena, los comandos, el ELO y el ranking del servidor MGE de SKYNET Gaming, a 100 tick."
date: 2026-10-21
cover: ../../../assets/img/mge-soldier-capa.jpg
draft: false
---

MGE es el modo de duelos 1 contra 1 de Team Fortress 2: dos jugadores frente a frente en una arena, y gana quien llegue primero al límite de frags de la arena. Es la forma más directa de entrenar puntería, movimiento y duelo, y los jugadores competitivos lo usan mucho para calentar antes de las partidas. SKYNET ahora tiene un servidor de MGE a 100 tick: mira cómo entrar al final del post.

## Qué es MGE

En MGE nadie juega en equipo. El mapa se divide en varias **arenas** separadas, y cada arena recibe **dos jugadores a la vez**, uno contra el otro. Quien llega primero al límite de frags de la arena gana el duelo, y quien estaba en la fila entra en lugar de quien perdió. Así el servidor entero se llena de duelos al mismo tiempo.

El modo funciona con el plugin **MGEMod**. El nombre viene de la comunidad **My Gaming Edge**, donde surgió, creado por Lange y Cprice a partir de un plugin anterior, el kAmmomod. Hoy la versión más usada la mantiene la comunidad (sappho.io y otros colaboradores), y es la que corre en nuestro servidor.

## Las arenas de nuestro mapa

El servidor usa `mge_training_v8_beta4b`, el mapa de MGE más conocido, con **18 arenas**:

- **11 arenas de MGE clásico**, que recrean lugares famosos de mapas competitivos: Viaduct, Granary (medio y last), Badlands (medio y spire), Gullywash, Waste, Snakewater, Gravelpit, Process y Trainyard. En ellas el duelo llega a **20 frags**, y las clases permitidas son **Soldier, Demoman, Scout y Sniper**.
- **Arenas especiales** con reglas propias: **Turris** (rey de la colina 1 contra 1), **Ammomod**, **No Splash** (sin daño de explosión en área), **Endif** (cohetes que lanzan al rival por los aires) y **BBall 2v2**, el básquet de TF2.

## Cómo jugar en nuestro servidor

1. Entra al servidor y escribe **`!add`** en el chat. Se abre un menú con todas las arenas; elige una.
2. Si la arena está ocupada, entras en la **fila** y juegas en cuanto termine un duelo.
3. Elige una de las clases permitidas en la arena y duela. Cada vez que matas al rival, ganas 1 frag.
4. Quien llegue primero al límite de la arena gana. Para salir, escribe **`!remove`**.

| Comando | Qué hace |
|---|---|
| `!add` | abre el menú de arenas (o `!add número` para ir directo a una) |
| `!first` | entra a la primera arena libre |
| `!remove` | sale de la arena |
| `!rank` | muestra tu ELO de MGE (o `!rank nombre` de otro jugador) |
| `!top5` | muestra los 5 mejores ELO del servidor |
| `!hud` | activa y desactiva el marcador en pantalla |
| `!hitblip` | activa y desactiva el sonido de acierto |
| `!handicap` | reduce tu vida máxima, para entrenar con desventaja |
| `!mgehelp` | muestra la ayuda de MGE |

## Cómo funciona el ranking

El servidor tiene **dos rankings** al mismo tiempo, y cada uno mide algo distinto.

### El ELO de MGE (en el juego)

Es el ranking del propio MGEMod, que ves con `!rank`. Todos empiezan con **1600**, y cada duelo cambia el ELO de los dos jugadores según la fuerza de cada uno, como en el ajedrez:

| Situación | Ganador | Perdedor |
|---|---|---|
| Dos jugadores del mismo nivel | +8 | −8 |
| Gana el más débil (400 puntos abajo) | +14 | −14 |
| Gana el más fuerte (400 puntos arriba) | +1 | −1 |

Ganarle a alguien más fuerte vale mucho, y ganarle a alguien mucho más débil casi no vale nada. Por eso el ELO muestra la fuerza real de cada jugador. Por encima de 2400 puntos los cambios son menores, para que la cima no oscile demasiado.

### El ranking SKYNET (en el sitio)

Es el ranking HLstatsZ, el mismo panel de nuestros otros servidores, con una regla simple:

- **+5 puntos** por cada duelo ganado;
- **−2 puntos** por cada duelo perdido;
- las kills y las muertes **no** cambian los puntos: solo cuenta el resultado del duelo;
- quien sale en medio de un duelo puede llevarse la derrota;
- en BBall 2v2, los dos jugadores del equipo ganador reciben +5 y los dos del equipo perdedor pierden 2.

Aquí sube quien juega más y gana más, aunque sus rivales sean más débiles. O sea: el ELO mide quién es el mejor duelista, y el ranking SKYNET premia a quien siempre está en el servidor ganando duelos.

**[Ver el ranking de MGE](https://stats.skynet-tf2.com.br/hlstats.php?game=tfmge)**

## Cómo es nuestro servidor

- **Nombre:** SKYNET GAMING BRASIL / LATAM - MGE [100-Tick Rate]
- **En línea desde:** 21/10/2026
- **Capacidad:** 12 slots, **100 tick**, alojado en São Paulo.
- **Mapa:** `mge_training_v8_beta4b`, con 18 arenas. La primera vez, el mapa se descarga automáticamente al entrar.
- **Misma administración:** reglas, admins, SourceBans y Discord son los mismos de los otros servidores. ¿Viste trampa? Escribe `!report` en el chat.

¿Quieres entender por qué 100 tick hace la diferencia en un duelo? Lee [Qué es el tickrate y por qué 100 tick hace la diferencia en TF2](/es/blog/que-es-el-tickrate-en-tf2/).

## Cómo entrar

Abre la consola del juego y escribe:

`connect 212.38.89.226:27055`

O entra directo, con TF2 ya conectado:

<a class="btn btn-gold" href="steam://connect/212.38.89.226:27055">Jugar ahora</a> <button class="btn btn-ghost" type="button" data-copy="212.38.89.226:27055" data-done="¡IP copiada!"><span class="copy-label">Copiar IP</span></button>

Mira tu posición en el [ranking de MGE](https://stats.skynet-tf2.com.br/hlstats.php?game=tfmge).
