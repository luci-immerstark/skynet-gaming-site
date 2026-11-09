---
translationKey: "bots-casual-2026"
title: "La nueva ola de bots en el Casual de TF2: qué está pasando"
seoTitle: "Nueva ola de bots en el Casual de TF2 (2026) | SKYNET"
description: "Los bots volvieron al Casual de TF2 de una forma nueva: cuentas que ni abren el juego ocupan lugares como 'Player Connecting'. Entiende qué cambió, la historia y cómo jugar sin ellos."
date: 2026-11-09
cover: ../../../assets/img/blog-bots-casual-tf2.jpg
draft: false
---

Justo después de la actualización de Halloween, a fines de octubre de 2026, quien intentó jugar el modo **Casual** de Team Fortress 2 encontró algo raro: servidores que aparecían llenos, pero con la mitad de los jugadores atascados en **"Player Connecting..."**, equipos de 2 contra 7 y partidas que nunca se llenan. Los bots volvieron, y esta vez de otra manera.

En este post explicamos qué está pasando, por qué es distinto de las olas anteriores y cómo seguir jugando TF2 sin frustrarse. La información viene de reportes de la comunidad, de videos como [not this again... (already outdated)](https://www.youtube.com/watch?v=l2FSPBXrMpk), del canal Jontohil2, y de los reportes de bugs abiertos en el [GitHub de Valve](https://github.com/ValveSoftware/Source-1-Games/issues/8434).

## Un poco de historia: #SaveTF2 y #FixTF2

Los bots no son nada nuevo en TF2. Durante años, el Casual sufrió con cuentas automáticas que usaban **aimbot**, robaban el nombre de los jugadores, llenaban el chat de spam y abrían **votekicks** contra quien intentaba denunciarlas. La comunidad respondió con las campañas **#SaveTF2**, en 2022, y **#FixTF2**, en 2024.

En 2024 la presión fue enorme: una petición para que Valve resolviera el problema superó las [120 mil firmas](https://www.windowscentral.com/gaming/over-120000-team-fortress-2-players-sign-fix-tf2-petition-for-valve-to-end-the-bot-crisis), y las reseñas recientes del juego en Steam quedaron como ["Mayormente negativas" por primera vez](https://www.gamesradar.com/games/fps/team-fortress-2s-long-running-bot-issue-hits-a-historical-low-as-recent-steam-reviews-hit-mostly-negative-for-the-first-time-in-its-17-year-history). Valve entonces [reconoció públicamente el tamaño del problema](https://www.pcgamer.com/uk/valve-says-it-sees-how-large-team-fortress-2s-bot-problem-is-and-will-actually-do-something/), y una serie de actualizaciones a mediados de 2024 redujo drásticamente los bots tramposos.

## Qué cambió ahora: los bots "fantasma"

La ola de 2026 no es de bots con aimbot. Según los reportes, son cuentas que **ni siquiera abren el juego**. Hablan directamente con el **Game Coordinator**, el sistema de Valve que arma las partidas del Casual, entran en la cola y son enviadas a los servidores como si fueran jugadores de verdad. Estos clientes "sin cabeza" (headless, como los llama la comunidad) no ejecutan TF2 de verdad, así que se pueden correr muchos al mismo tiempo.

El problema está en cómo el Casual reserva los lugares. Cuando te ponen en una partida, el servidor guarda tu lugar mientras te conectas. Los bots entran en ese estado y se quedan ahí, como **"Player Connecting..."**, sin terminar nunca de cargar. Para el sistema, el lugar está ocupado. El resultado:

- **Servidores "llenos" y vacíos a la vez:** el servidor aparece lleno, pero casi nadie está jugando de verdad.
- **Equipos desbalanceados:** partidas de 2 contra 7, o con medio equipo en gris en el marcador.
- **Autobalance sin fin:** cuando alguno de esos bots por fin entra, suele salir enseguida, y el juego sigue cambiando jugadores de equipo.
- **Nombres raros:** muchas cuentas aparecen con nombres revueltos, entrando y saliendo rápido.

Los reportes en el rastreador de bugs de Valve dicen que el problema empeoró mucho desde el 29 de octubre, y que mapas populares como Upward y Badwater estaban entre los más afectados.

## ¿Y Valve?

Los jugadores abrieron reportes en el GitHub de Valve en los primeros días, incluso con propuestas de solución: un límite de tiempo para cargar, liberar el lugar cuando ese tiempo se agote y bloquear las cuentas que entran a partidas una y otra vez sin cargar nunca. Uno de esos reportes fue [cerrado como duplicado](https://github.com/ValveSoftware/Source-1-Games/issues/8433), y otro siguió abierto sin respuesta oficial en los primeros días.

En los días siguientes, creadores de contenido registraron momentos de mejora y, después, reportes de que la situación había empeorado otra vez. O sea, todo está cambiando rápido. Si Valve publica una corrección, actualizaremos este post.

## Por qué los servidores comunitarios se salvan

Este ataque apunta al **matchmaking** del Casual: es el Game Coordinator el que elige el servidor y reserva los lugares, y esa reserva es lo que los bots explotan. En un **servidor comunitario**, como los de SKYNET, es distinto:

- **Tú eliges dónde jugar:** la conexión es directa, por el navegador de servidores o con el comando `connect`, sin la cola del Casual en el medio.
- **Hay alguien vigilando:** los admins pueden expulsar, banear e investigar en el momento, y los baneos quedan registrados en un sistema propio, como nuestro [SourceBans](https://bans.skynet-tf2.com.br/index.php?p=home).
- **Una comunidad de verdad:** los mismos jugadores vuelven todos los días, y es fácil notar y denunciar a quien no es humano.

Ningún servidor es inmune a los tramposos, pero en un servidor comunitario hay alguien para actuar. Si nunca entraste a uno, mira el paso a paso en [Cómo entrar a un servidor comunitario de TF2](/es/blog/como-entrar-a-un-servidor-de-tf2/).

## Qué puedes hacer

- **Denuncia a los bots** en el propio juego o desde su perfil de Steam. Aunque tarde, las denuncias ayudan a Valve a identificar las cuentas.
- **No discutas en el chat:** a quien corre bots le gusta la atención. Denuncia y sigue.
- **Agrega a favoritos los servidores comunitarios** que te gusten, para no depender del Casual.
- **Sigue los canales oficiales** de TF2 para saber cuándo sale una corrección.

## Juega sin bots en SKYNET

Mientras el Casual no vuelve a la normalidad, los servidores de SKYNET están abiertos: cuatro servidores de TF2 en São Paulo, con admins de verdad, reglas claras y [ranking](https://stats.skynet-tf2.com.br/hlstats.php). Si quieres hablar con la comunidad, avisar de un problema o simplemente encontrar gente para jugar, entra a nuestro [Discord](https://discord.gg/HV7d6x8pEK).
