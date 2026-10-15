---
translationKey: "servidores-por-dentro"
title: "Cómo funcionan los servidores SKYNET por dentro"
seoTitle: "Cómo funcionan los servidores SKYNET por dentro | Entre bastidores"
description: "Entre bastidores de SKYNET Gaming: VPS en São Paulo, Docker, SourceMod, ranking HLstatsZ, SourceBans, backups y monitoreo de los servidores de TF2 y Left 4 Dead 2."
date: 2026-10-15
cover: ../../../assets/img/blog-navegador-de-servidores.jpg
draft: false
---

Entras al servidor, juegas tu partida y sales. ¿Pero qué hay detrás de todo eso? En este post te mostramos cómo funcionan por dentro los servidores de SKYNET Gaming: la máquina, Docker, los plugins, el ranking, los bans, los backups y el monitoreo. Es un texto técnico, pero escrito para jugadores: no hace falta saber de servidores para seguirlo.

## Visión general

SKYNET Gaming Brasil mantiene **4 servidores**, todos en la misma máquina en São Paulo:

- **TF2 Classic Maps**, con mapas clásicos de Team Fortress 2;
- **TF2 Dodgeball**, solo con Pyro;
- **TF2 Zombie Infection**, el modo de zombis;
- **Left 4 Dead 2**, una campaña cooperativa.

Alrededor de ellos hay varios servicios de apoyo: un ranking de estadísticas, un panel público de bans, monitoreo externo y rutinas de reinicio y de backup. Todo se describe a continuación.

## La máquina

Los servidores corren en una **VPS en São Paulo** (un servidor virtual alquilado), con:

- procesador **AMD Ryzen 9 9950X**, con 4 vCPUs para nuestra VPS;
- **8 GB de memoria RAM**;
- **180 GB de SSD**;
- sistema **Ubuntu Linux**.

Estar en São Paulo es importante para quien juega desde Brasil y Latinoamérica, porque la distancia hasta el servidor es corta y el ping, bajo. Como la máquina la comparten cuatro servidores de juego, los **núcleos de CPU se reparten entre ellos**: cada servidor usa su propio grupo de núcleos, y así un servidor lleno no perjudica el rendimiento de los demás. ¿Quieres entender por qué importa tanto el procesador? Lee [Qué es el tickrate y por qué 100 tick hace la diferencia en TF2](/es/blog/que-es-el-tickrate-en-tf2/).

## Docker: un contenedor para cada servidor

En lugar de instalar todo "suelto" en el sistema, cada servidor corre dentro de un **contenedor Docker**. Un contenedor es como una caja cerrada que lleva dentro el programa y todo lo que necesita para funcionar. Las ventajas para nosotros:

- **Aislamiento:** un problema en un servidor no tumba a los demás.
- **Orden:** cada servidor tiene sus configuraciones y archivos por separado.
- **Actualización y recuperación simples:** recrear un contenedor es rápido, y volver al estado anterior también.
- **Previsibilidad:** el servidor se comporta igual cada vez que se reinicia.

Los servidores de TF2 usan las imágenes del proyecto de código abierto **melkortf/tf2-servers**, que ya traen Team Fortress 2 listo para correr en Docker. Si quieres entender mejor la base de todo esto, lee también [Qué es Linux y por qué domina los servidores del mundo](/es/blog/que-es-linux-y-por-que-domina-los-servidores/).

## Los cuatro servidores

### TF2 Classic Maps

Servidor para **40 jugadores**, en **100 tick**, con mapas clásicos de TF2. Al final de cada mapa hay una **votación del siguiente**, con **3 opciones**. No se eligen al azar: se escogen según la **nota de "hype"** de cada mapa (cuánto le gusta a la comunidad) y el **tiempo que lleva sin jugarse**. Así, los mapas queridos aparecen más, y ninguno queda olvidado para siempre.

### TF2 Dodgeball

Servidor para **8 jugadores**, en **100 tick**, **solo con Pyro** y **sin bots**: el objetivo es devolver los cohetes. Tiene un ranking propio:

- **+1** por cada kill;
- **−1** por cada muerte, incluida la causada por un cohete que no fue devuelto;
- **+2** para cada jugador del equipo ganador.

La puntuación solo cuenta cuando hay **4 o más jugadores** en el servidor. Para saber más sobre el modo, mira [Qué es Dodgeball en TF2](/es/blog/que-es-dodgeball-en-tf2/).

### TF2 Zombie Infection

Modo hecho en **VScript** (el lenguaje de scripts del propio juego), que corre a **66,7 tick** y con **puntuación propia** en el ranking. Los sobrevivientes enfrentan una horda de zombis, y quien muere se convierte en zombi. Mira los detalles en [Qué es Zombie Infection en TF2](/es/blog/que-es-zombie-infection-en-tf2/).

### Left 4 Dead 2

**Campaña cooperativa para 20 jugadores**, en **100 tick** y **siempre en nivel Expert**. La partida comienza con **4 bots sobrevivientes**. El servidor tiene el menú **`!buy`**: ganas puntos matando infectados (**incluidos los zombis comunes**) y los gastas en el menú. Los puntos se quedan contigo **hasta que salgas del servidor**.

## SourceMod y plugins

**SourceMod** es la plataforma que permite instalar plugins en servidores de juegos de Valve. Gracias a él funcionan las votaciones de mapa, el menú `!buy`, las reglas de puntuación del Dodgeball y mucho más. Usamos varios plugins de la comunidad, y **varios de ellos fueron creados desde cero por la propia SKYNET** para lo que los plugins ya hechos no hacían como queríamos.

## Ranking: HLstatsZ

El ranking usa **HLstatsZ** ([SnipeZilla/HLSTATS-2](https://github.com/SnipeZilla/HLSTATS-2)), con el frontend **hlstatsz-web**. Registra lo que pasa en cada partida y arma las estadísticas de cada jugador. Los rankings están **separados por servidor y por juego**: Classic Maps, Dodgeball, Zombie Infection y Left 4 Dead 2 tienen cada uno su propia tabla. Míralo todo en el [ranking de SKYNET](https://stats.skynet-tf2.com.br/hlstats.php). Para entender la puntuación, lee [Cómo funciona el ranking del servidor](/es/blog/como-funciona-el-ranking/).

## SourceBans++

Para los baneos usamos **SourceBans++**, en **una sola instalación para todos los servidores**. En la práctica: quien es baneado en un servidor queda baneado en todos, y la lista de bans es pública. Puedes consultarla en el [panel de SourceBans](https://bans.skynet-tf2.com.br/index.php?p=home). Esto da transparencia: cualquiera puede ver quién fue sancionado y por qué.

## RCON y administración

**RCON** (*Remote CONsole*) es la consola remota del servidor: con ella se pueden ejecutar comandos, como cambiar de mapa o ajustar una configuración, sin estar dentro del juego. Es una herramienta poderosa, y por eso **solo la usa la administración**, de forma **protegida**: el acceso no está abierto al público y la contraseña nunca se divulga.

La administración tiene **niveles**: **dueños** y **moderadores**, cada uno con permisos distintos. **Left 4 Dead 2 tiene admins propios**, separados de los admins de TF2. Todos siguen las [reglas de la comunidad](/es/#regras), y las sanciones aparecen en SourceBans.

## Monitoreo

Para saber rápido cuando algo se cae, usamos un **monitoreo externo con UptimeRobot**. Vigila el **ranking**, **SourceBans** y la **VPS**, y si algo deja de responder envía una **alerta al Discord** de la administración. Los paneles web están detrás de **Cloudflare**, y este sitio corre en **Cloudflare Workers**, lo que ayuda con la velocidad y la protección.

## Reinicios y backups

- **Reinicio automático una vez al día, a las 5h**, cuando casi nadie está jugando. Mantiene los servidores "frescos" y evita que los problemas se acumulen.
- **Backups guardados por 7 días en la propia VPS y por 7 días en la nube.** Si algo sale muy mal, hay una copia en otro lugar.

## Comandos útiles

**Para jugadores** (en el chat del juego):

- Ranking HLstatsZ: `rank`, `top10`, `statsme` y `session`.
- Left 4 Dead 2: `!buy` abre el menú de compras.

**Para admins:**

- El menú de SourceMod, con `!admin`.
- Los baneos se hacen por SourceBans.

## Cómo entrar

Abre la consola del juego (o usa el botón "Jugar ahora" de la página de inicio) y escribe:

- Classic Maps: `connect 212.38.89.226:27015`
- Dodgeball: `connect 212.38.89.226:27025`
- Zombie Infection: `connect 212.38.89.226:27045`
- Left 4 Dead 2: `connect 212.38.89.226:27035`

Si es tu primera vez, mira el paso a paso en [Cómo entrar a un servidor de TF2](/es/blog/como-entrar-a-un-servidor-de-tf2/). Únete también al [grupo de SKYNET en Steam](https://steamcommunity.com/groups/skynetgaming-tf2), revisa el [ranking](https://stats.skynet-tf2.com.br/hlstats.php) y el [SourceBans](https://bans.skynet-tf2.com.br/index.php?p=home) ¡y buen juego!
