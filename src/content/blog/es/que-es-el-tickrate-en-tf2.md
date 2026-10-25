---
translationKey: "tickrate"
title: "¿Qué es el tickrate y por qué un servidor de 100 tick marca la diferencia en TF2?"
seoTitle: "Qué es el tickrate en TF2 y por qué importa 100 tick"
description: "Entiende qué es el tickrate, la diferencia entre 66 y 100 tick y qué cambia (y qué no) un servidor de 100 tick en Team Fortress 2."
date: 2026-10-02
updated: 2026-10-21
cover: ../../../assets/img/blog-tickrate.png
draft: false
---

El tickrate es cuántas veces por segundo el servidor actualiza el estado de la partida: posiciones, disparos, daño y eventos. Un servidor de 100 tick lo hace 100 veces por segundo (cada 10 ms), frente a unas 66 veces en el estándar de TF2 (cada ~15 ms). En la práctica, esto hace que el registro de disparos y movimientos sea algo más preciso y receptivo.

## Qué es un "tick"

El servidor no procesa el juego de forma continua: avanza en pasos discretos, los ticks. En cada tick lee las acciones de los jugadores, calcula el resultado y envía el nuevo estado de vuelta. Cuantos más ticks por segundo, menor es el intervalo entre una actualización y otra.

## Por qué 100 tick marca la diferencia

- **Registro de disparos más fino:** con intervalos más cortos, hay menos probabilidad de que un disparo se procese "entre" dos actualizaciones y pierda precisión, lo que ayuda sobre todo con armas de impacto instantáneo, como el Sniper y el Scout.
- **Movimiento más fiel:** la posición de los jugadores se actualiza con más frecuencia, lo que reduce la sensación de "teletransporte" en combates rápidos.
- **Respuestas más consistentes:** la espera máxima por una actualización baja de unos 15 ms a 10 ms.

## Qué no cambia con 100 tick

- **Tu ping:** el tickrate no reemplaza una buena conexión. Un servidor cercano sigue siendo lo que más reduce la latencia (el nuestro está en São Paulo).
- **Tu habilidad:** la diferencia es sutil. Ayuda a reducir frustraciones, pero no juega por ti.
- **Tu hardware:** una computadora que no sostiene buenos FPS limita la mejora.

## Cómo aprovecharlo mejor

Para aprovechar un servidor de 100 tick, lo ideal es tener una conexión estable y unos FPS cómodamente por encima de 100. Los valores `cl_cmdrate` y `cl_updaterate` de tu juego también influyen en la tasa de datos que intercambias con el servidor (que impone sus propios límites); puedes revisar tu conexión en la consola con `net_graph 1`, que muestra ping, pérdida de paquetes y la tasa de actualización. Para ajustar el lerp y las rates paso a paso, mira [Qué es el lerp en TF2 y cómo configurarlo](/es/blog/que-es-el-lerp-en-tf2/).

En SKYNET Gaming, Classic Maps (40 slots), Dodgeball (16 slots, solo Pyro) y MGE (12 slots, duelos 1 contra 1) funcionan a 100 tick, alojados en São Paulo. En MGE la diferencia se nota aún más, porque cada duelo se decide en el detalle de un disparo. Para entrar, mira [cómo entrar a un servidor comunitario de TF2](/es/blog/como-entrar-a-un-servidor-de-tf2/).
