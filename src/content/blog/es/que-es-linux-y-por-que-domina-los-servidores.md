---
translationKey: "o-que-e-linux"
title: "Qué es Linux y por qué domina los servidores del mundo"
seoTitle: "¿Qué es Linux? Historia, distribuciones y servidores | SKYNET"
description: "Entiende qué es Linux, el software libre y el código abierto, la historia de GNU y del kernel, las distribuciones, comandos básicos y por qué domina los servidores."
date: 2026-10-15
cover: ../../../assets/img/blog-linux.jpg
draft: false
---

Si juegas en línea, casi seguro ya usaste Linux sin darte cuenta: corre en una enorme parte de los servidores de internet, y también dentro de celulares Android y de muchos aparatos de uso diario. En esta guía explicamos, desde cero, qué es Linux, de dónde vino, cómo usarlo y por qué es la opción número uno para servidores, incluidos los nuestros.

![Tux, el pingüino mascota de Linux](../../../assets/img/blog-linux-tux.webp)

## Qué es el código abierto y el software libre

**Código abierto (open source)** es el software cuyo código fuente, es decir, la "receta" del programa, puede ser leído, estudiado, modificado y compartido por cualquier persona, según una licencia.

**Software libre** es la idea más antigua detrás de esto, defendida por la Free Software Foundation. Para ella, el usuario tiene cuatro libertades: **ejecutar** el programa con cualquier fin, **estudiar** cómo funciona y adaptarlo, **redistribuir** copias y **mejorar** el programa y compartir las mejoras. Los dos términos se superponen bastante, pero el foco cambia: "software libre" habla de libertad; "open source" habla más de las ventajas prácticas de un desarrollo abierto.

Ojo: "libre" no significa necesariamente "gratis". Mucho software libre es gratuito, pero la palabra se refiere a la libertad, no al precio.

## La historia: GNU y Linux

- **1983:** Richard Stallman anuncia el **proyecto GNU**, con el objetivo de crear un sistema operativo completo y libre, parecido a Unix. En pocos años GNU tenía compilador, editores, herramientas de terminal y mucho más. Faltaba una pieza central: el kernel.
- **1991:** el estudiante finlandés **Linus Torvalds** empieza a escribir un kernel como proyecto personal y lo anuncia en internet. Ese kernel recibe el nombre **Linux**. Personas de todo el mundo empiezan a contribuir, y el proyecto crece hasta hoy.

Al juntar las herramientas de GNU con el kernel Linux nació un sistema operativo libre y completo.

## Qué es el kernel y por qué se dice "GNU/Linux"

El **kernel** es el "corazón" del sistema operativo: es el que habla con el hardware (procesador, memoria, disco, red) y entrega esos recursos a los programas. Sin un kernel, ningún programa puede usar la máquina.

Técnicamente, **Linux es solo el kernel**. El sistema que usamos a diario es el kernel sumado a muchas herramientas, en buena parte provenientes del proyecto GNU. Por eso algunas personas y proyectos prefieren decir **GNU/Linux**, reconociendo las dos partes. En la conversación común, la mayoría dice simplemente "Linux" para el conjunto.

## Distribuciones: ¿cuál elegir?

Una **distribución** (o "distro") es el kernel Linux empaquetado con programas, instalador y un sistema para actualizar todo. Todas usan el mismo kernel, pero cada una tiene su perfil:

- **Debian:** conocida por su estabilidad y su filosofía libre. Es la base de muchas otras distribuciones y muy usada en servidores.
- **Ubuntu:** basada en Debian, con foco en la facilidad de uso. Es una de las distribuciones más populares, tanto en escritorios como en servidores.
- **Fedora:** trae tecnologías nuevas temprano y está patrocinada por Red Hat. Buena para quien le gustan las novedades.
- **Arch Linux:** minimalista y a medida: armas el sistema como quieres, con actualizaciones continuas. Pide más conocimiento.
- **Otras:** Linux Mint (muy amigable para principiantes), openSUSE, Red Hat Enterprise Linux y sus derivadas (muy usadas en empresas), Alpine (liviana, común en contenedores) y muchas más.

Para empezar, Ubuntu y Linux Mint suelen ser las opciones más tranquilas.

## La línea de comandos

Además de las ventanas y los menús, Linux se puede controlar por texto, en la **terminal**. En servidores esa es la forma principal de trabajar: es rápida, precisa y fácil de automatizar. Algunos comandos básicos:

| Comando | Para qué sirve |
|---|---|
| `pwd` | Muestra en qué carpeta estás. |
| `ls` | Lista los archivos de la carpeta actual. |
| `cd carpeta` | Entra a una carpeta (`cd ..` vuelve una). |
| `mkdir nombre` | Crea una carpeta. |
| `cp origen destino` | Copia un archivo. |
| `mv origen destino` | Mueve o renombra un archivo. |
| `cat archivo` | Muestra el contenido de un archivo. |
| `grep texto archivo` | Busca un texto dentro de un archivo. |
| `sudo comando` | Ejecuta el comando con permisos de administrador. |
| `man comando` | Abre el manual de cualquier comando. |

Un aviso importante: comandos como `rm` borran archivos **sin pasar por la papelera**, y `sudo` da poder total. Lee con atención antes de ejecutar algo que no entiendes.

## Por qué Linux domina los servidores

- **Estabilidad:** los servidores Linux suelen estar encendidos por largos períodos, y la mayoría de las actualizaciones no exige reiniciar toda la máquina.
- **Seguridad:** el código abierto puede ser revisado por mucha gente, y el sistema tiene un modelo de permisos bien definido. Las correcciones suelen salir rápido.
- **Costo:** el sistema no tiene licencia de pago, lo que hace diferencia cuando se tienen decenas o miles de servidores.
- **Rendimiento:** puede ser liviano y ajustado para aprovechar bien el hardware, sin programas innecesarios corriendo.
- **Automatización:** casi todo en Linux se puede hacer por línea de comandos, así que es fácil escribir scripts y automatizar tareas.
- **Contenedores:** tecnologías como Docker nacieron en torno a recursos del kernel Linux, y hoy son la base de cómo se publican muchas aplicaciones.
- **Nube:** la inmensa mayoría de los servicios de nube pública corre Linux por debajo.
- **Supercomputadoras:** las computadoras más potentes del mundo, listadas en el ranking TOP500, corren Linux desde hace años.

## Linux en SKYNET

¿Y dónde entramos nosotros? **Nuestros servidores corren en Linux, con Docker**: una VPS con Ubuntu, un contenedor para cada servidor de juego, backups automáticos y reinicios programados. Todo esto es posible gracias al software libre. Si quieres ver en la práctica cómo armamos cada pieza, lee el post [Cómo funcionan los servidores SKYNET por dentro](/es/blog/como-funcionan-los-servidores-skynet/).

Después, ¿qué tal probar el resultado? Mira el [ranking de SKYNET](https://stats.skynet-tf2.com.br/hlstats.php), revisa el [SourceBans](https://bans.skynet-tf2.com.br/index.php?p=home) y entra a uno de nuestros servidores.
