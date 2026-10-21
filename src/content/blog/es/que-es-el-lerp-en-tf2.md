---
translationKey: "lerp"
title: "Qué es el lerp en TF2 y cómo configurarlo (cl_interp y rates)"
seoTitle: "Lerp en TF2: qué es y cómo configurarlo | SKYNET"
description: "Entiende el lerp (cl_interp) y las rates de TF2, las ventajas y desventajas de reducir el retraso y las configuraciones listas para servidores de 66 y 100 tick, como los de SKYNET."
date: 2026-10-21
cover: ../../../assets/img/blog-lerp-capa.jpg
draft: false
---

El lerp es un pequeño retraso que el propio TF2 agrega a lo que ves en pantalla, para que el movimiento de los demás jugadores se vea más suave. Por defecto es de 100 ms, pensado para conexiones malas, y hoy casi todos pueden usar mucho menos. En esta guía entiendes qué es el lerp, qué son las rates y copias la configuración correcta para tu PC y para el servidor en el que juegas.

![Cuatro cuadros del mismo Scout corriendo: con lerp alto el disparo falla, con lerp bajo acierta](../../../assets/img/blog-lerp-hit-miss.jpg)
*Con lerp alto, lo que ves va atrasado respecto al servidor: el disparo que parecía certero puede fallar.*

## Qué es el lerp

Lerp viene de *interpolación*. Tu juego no recibe la posición de los demás jugadores todo el tiempo, sino en paquetes. Para no mostrar a todos dando "saltos", espera un poco y dibuja el camino entre un paquete y otro. Ese tiempo de espera es el lerp.

El valor por defecto, **100 ms (0,1 s)**, fue pensado para quien jugaba con internet inestable, como un módem 3G. Para quien tiene un PC razonable y una conexión estable, es exagerado: cuanto menor el lerp, más coincide lo que aparece en tu pantalla con lo que pasa en el servidor.

### Ventajas de reducir el lerp

- **Aciertos más precisos:** con armas de precisión, el tiempo entre el clic y el acierto registrado es menor.
- **Proyectiles más fieles:** el cohete del Soldier y la granada del Demoman salen del arma del enemigo y recorren todo el camino, en vez de aparecer a mitad del trayecto y "teletransportarse" hacia ti.
- **Apuntas donde está el enemigo**, y no donde estará dentro de una fracción de segundo. Vale para balas y proyectiles.

### Desventajas

- **Exige un buen servidor.** El servidor también tiene FPS: si cae, lo notas al instante. Necesita un rendimiento estable y la configuración de red correcta.
- **Un jugador con mala conexión se ve trabado en tu pantalla.** Con proyectiles te puedes arreglar, pero con armas de precisión es difícil acertarle a quien tiene mucho lag.

## Cómo cambiar el lerp

El comando es `cl_interp`, con el tiempo en segundos. Por ejemplo, `cl_interp 0.035` es un lerp de 35 ms. El consejo es empezar por el valor más bajo y subir de a poco si aparece algún problema.

- **No se puede cambiar en medio de la partida:** tienes que estar de espectador o fuera del servidor.
- **El lerp real nunca llega a cero.** El juego usa el mayor valor entre `cl_interp` y `cl_interp_ratio ÷ cl_updaterate`. En un servidor de 66 tick, el mínimo ronda los **15,2 ms**; en un servidor de **100 tick**, como Classic Maps y MGE de SKYNET, baja a **10 ms**.

## Qué son las rates

Las rates son cuántas veces por segundo tu juego intercambia datos con el servidor:

- `cl_updaterate`: cuántos paquetes por segundo **recibes**;
- `cl_cmdrate`: cuántos paquetes por segundo **envías**.

Un servidor común de TF2 calcula la partida 66,7 veces por segundo, y nuestros servidores de 100 tick, 100 veces. Aun así, el valor antiguo del juego era de solo 20 paquetes recibidos y 30 enviados por segundo. Subir las rates hasta el tick del servidor hace que el movimiento de los demás se vea más suave y que los aciertos sean más precisos. Para entender el tick, lee [Qué es el tickrate y por qué 100 tick hace la diferencia en TF2](/es/blog/que-es-el-tickrate-en-tf2/).

Subir las rates no tiene desventajas, siempre que tu PC y tu internet lo aguanten:

- **FPS:** el juego no envía datos más veces de las que dibuja cuadros. Si tus FPS bajan de las rates, no sirve de nada subirlas.
- **Ancho de banda:** en plena pelea, el tráfico puede llegar a unos 50 KB/s (400 kbit/s).
- **Estabilidad:** si tu ping salta todo el tiempo, por ejemplo entre 80 y 120, es mejor usar rates más bajas.

Y vale lo mismo que en la parte del lerp: con las rates al máximo, cualquier caída de FPS del servidor se convierte en lag en tu pantalla. Antes de culpar a la configuración, revisa si el servidor en el que estás aguanta.

## Configuraciones listas

Empieza por la primera de la lista y solo baja si tienes lag constante en todos los servidores.

**Servidores de 100 tick (Classic Maps y MGE de SKYNET)**, para un PC que mantiene más de 100 FPS:

```
cl_cmdrate 100; cl_updaterate 100; cl_interp_ratio 1; cl_interp 0; rate 196608
```

**Ideal para servidores de 66 tick:**

```
cl_cmdrate 66; cl_updaterate 66; cl_interp_ratio 1; cl_interp 0.0151515; rate 66000
```

**Un poco por debajo:**

```
cl_cmdrate 50; cl_updaterate 50; cl_interp_ratio 1; cl_interp 0.023; rate 50000
```

**Si las otras dan lag:**

```
cl_cmdrate 40; cl_updaterate 40; cl_interp_ratio 1; cl_interp 0.04; rate 40000
```

**Conexión muy mala (peor que esto, solo la configuración por defecto del juego):**

```
cl_cmdrate 30; cl_updaterate 30; cl_interp_ratio 2; cl_interp 0.066666; rate 30000
```

El `rate` es el límite de datos por segundo que aceptas recibir. El valor por defecto actual de TF2 ya es 196608, mayor que los de la lista. Si el tuyo ya es ese, puedes mantenerlo, y el resto de la línea sigue valiendo. El `cl_interp_ratio` define cuántos paquetes de margen guarda el juego para interpolar: con 1 el lerp queda al mínimo, y con 2 aguanta mejor la pérdida de paquetes.

### Para no perder la configuración

Los comandos de la consola solo valen hasta que cierras el juego. Para usarlos siempre:

1. Abre la carpeta del juego, en `Team Fortress 2/tf/cfg`. En Steam: clic derecho en TF2 → **Administrar** → **Ver archivos locales**.
2. Crea (o abre) el archivo `autoexec.cfg`.
3. Pega la línea de la configuración elegida y guarda. TF2 carga ese archivo cada vez que se abre.

Para comprobarlo, escribe `net_graph 1` en la consola: aparecen el lerp, el ping, la pérdida de paquetes y las rates en uso.

---

*Este post es una adaptación, en español, de la guía de lerp y rates escrita por sheo, con las configuraciones para los servidores de 100 tick de SKYNET.*

**By sheo**
