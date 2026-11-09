---
translationKey: "diretorios-do-linux"
title: "Directorios de Linux: para qué sirve cada carpeta (/, /home, /etc, /usr...)"
seoTitle: "Directorios de Linux: para qué sirve cada carpeta | SKYNET"
description: "Entiende la estructura de carpetas de Linux: la raíz /, /home, /root, /etc, /usr, /var, /tmp, /dev, /proc y las demás, con una forma fácil de memorizarlas y comandos para explorar."
date: 2026-11-09
cover: ../../../assets/img/blog-linux-diretorios.jpg
draft: false
---

Si vienes de Windows y abres una terminal de Linux por primera vez, la primera pregunta suele ser: **¿dónde está el disco C:?** En Linux no existen C:, D: ni E:. Todo cuelga de un único árbol de carpetas, y entender ese árbol es lo que hace que Linux deje de parecer difícil. En esta guía explicamos, carpeta por carpeta, dónde vive cada cosa y por qué.

Este post se basa en el video [LINUX isn't Hard Once You Understand This (File Directories)](https://www.youtube.com/watch?v=qvjRcZcW8CY), del canal Cloud X Berry, y en la especificación oficial que estandariza estas carpetas, el [Filesystem Hierarchy Standard (FHS)](https://refspecs.linuxbase.org/FHS_3.0/fhs/index.html), mantenido por la Linux Foundation.

## Todo empieza en la raíz: `/`

Linux tiene un único punto de partida, la **raíz**, que se escribe con una barra: `/`. Todas las carpetas, de todos los discos, están debajo de ella. Cuando conectas un pendrive o un segundo SSD, no recibe una letra: se **monta** en una carpeta de ese árbol y aparece ahí dentro.

Tres diferencias que confunden a quien viene de Windows:

- El separador de carpetas es la barra normal (`/home/ana/fotos`), no la invertida (`\`).
- Las mayúsculas y minúsculas **importan**: `Fotos`, `fotos` y `FOTOS` son tres nombres distintos.
- Los archivos y carpetas que empiezan con punto (como `.bashrc`) quedan ocultos. Para verlos, usa `ls -a`.

### Rutas absolutas y relativas

Una **ruta absoluta** empieza en la raíz y funciona desde cualquier lugar: `/etc/hostname`. Una **ruta relativa** parte de la carpeta en la que estás ahora: si estás en `/home/ana`, entonces `fotos` significa `/home/ana/fotos`. Algunos atajos ayudan mucho:

| Atajo | Significado |
|---|---|
| `/` | La raíz del sistema. |
| `~` | Tu carpeta personal (por ejemplo, `/home/ana`). |
| `.` | La carpeta actual. |
| `..` | La carpeta de arriba. |

## Las carpetas principales, una por una

Este es el panorama general. Justo debajo, los detalles de las que más confunden.

| Carpeta | Qué guarda |
|---|---|
| `/home` | Las carpetas personales de cada usuario (`/home/ana`, `/home/juan`). |
| `/root` | La carpeta personal del administrador (el usuario root). |
| `/bin` | Comandos del día a día, como `ls`, `cp` y `cat`. |
| `/sbin` | Herramientas de administración del sistema. |
| `/etc` | Archivos de configuración del sistema y de los programas. |
| `/usr` | La mayor parte de los programas, bibliotecas y documentación instalados. |
| `/lib` | Bibliotecas compartidas que usan los programas y módulos del kernel. |
| `/opt` | Programas extra instalados "aparte", fuera del gestor de paquetes. |
| `/var` | Datos que cambian todo el tiempo: logs, cachés, colas, bases de datos. |
| `/tmp` | Archivos temporales. |
| `/run` | Información de ejecución creada desde el último arranque. |
| `/srv` | Datos de los servicios que ofrece la máquina, como sitios web. |
| `/media` | Donde aparecen los pendrives y discos extraíbles. |
| `/mnt` | Punto de montaje temporal, usado manualmente. |
| `/dev` | Los dispositivos de hardware, representados como archivos. |
| `/proc` | Una ventana en vivo a los procesos y al kernel. |
| `/sys` | Información del kernel sobre el hardware y los drivers. |
| `/boot` | Todo lo necesario para arrancar Linux: el kernel y el gestor de arranque. |

### `/home` y `/root`: no lo confundas con la raíz

`/home` es donde está la carpeta de cada persona. Ahí van tus documentos, descargas y configuraciones personales. Los usuarios comunes solo pueden modificar su propia carpeta, lo que protege el resto del sistema.

En cambio, `/root` **no es la raíz del sistema**: es solo la carpeta personal del administrador, separada de las demás por seguridad. La raíz es `/`. Mucha gente confunde las dos por el nombre.

### `/bin`, `/sbin` y `/lib`: comandos y bibliotecas

`/bin` guarda comandos que usa cualquier usuario (`ls`, `cp`, `mv`, `cat`). `/sbin` guarda herramientas de administración, como las de red y de disco, que en general necesitan `sudo`. `/lib` guarda las **bibliotecas compartidas**, fragmentos de código que muchos programas usan al mismo tiempo, parecidos a las DLL de Windows.

Un detalle moderno: en distribuciones actuales como Ubuntu, Debian, Fedora y Arch, `/bin`, `/sbin` y `/lib` son solo **accesos directos** a `/usr/bin`, `/usr/sbin` y `/usr/lib`. Los nombres antiguos siguen existiendo para que los programas antiguos no se rompan.

### `/usr`: no es "user"

Por el nombre parece la carpeta de los usuarios, pero no lo es. Hoy, `/usr` guarda la mayor parte del software del sistema: programas (`/usr/bin`), bibliotecas (`/usr/lib`), documentación e íconos (`/usr/share`). Los programas que compilas e instalas a mano suelen ir a `/usr/local`.

Vas a escuchar que la sigla significa "Unix System Resources". En realidad, en las primeras versiones de Unix, `/usr` sí era donde estaban las carpetas de los usuarios. Con el tiempo pasó a guardar programas, y la explicación "System Resources" se inventó después. Lo que importa es el uso actual: **programas y recursos compartidos**, no archivos personales.

### `/etc`: las configuraciones

`/etc` es el panel de control de Linux, pero hecho de archivos de texto. Ahí están el nombre de la máquina (`/etc/hostname`), la lista de usuarios (`/etc/passwd`, que a pesar del nombre no guarda contraseñas), qué discos se montan al arrancar (`/etc/fstab`) y la configuración de casi todos los servicios instalados. Como todo es texto, es fácil hacer copias de seguridad, comparar versiones y automatizar cambios.

### `/var` y `/tmp`: datos que cambian

`/var` viene de "variable": guarda lo que crece y cambia mientras el sistema funciona. El ejemplo más conocido es `/var/log`, donde están los **logs**, el diario de a bordo de todo lo que pasa. Cuando algo falla en un servidor, ahí empieza la investigación. En `/var` también hay cachés, colas de impresión y datos de programas, como bases de datos.

`/tmp` es para archivos temporales. Cualquier programa puede escribir ahí, y en la mayoría de las distribuciones esta carpeta se **limpia en cada reinicio** (algunas incluso la guardan en la memoria RAM). Nunca guardes ahí algo que quieras conservar.

### `/dev`, `/proc` y `/sys`: el sistema visto como archivos

En Linux, **casi todo es un archivo**, incluso el hardware. En `/dev`, el primer disco puede aparecer como `/dev/sda` o `/dev/nvme0n1`, y hasta existe un "agujero negro", `/dev/null`, que descarta todo lo que le envíes.

`/proc` y `/sys` son carpetas **virtuales**: no ocupan espacio en el disco. El kernel las arma en la memoria y las actualiza en tiempo real. Prueba `cat /proc/cpuinfo` para ver el procesador o `cat /proc/meminfo` para ver la memoria. Cada proceso en ejecución también tiene una carpeta numerada dentro de `/proc`.

### `/boot`, `/media` y `/mnt`

`/boot` guarda el kernel de Linux y los archivos del gestor de arranque (como GRUB). Sin ellos la máquina no arranca, así que es una carpeta para mirar y no tocar.

`/media` es donde el sistema monta solo los pendrives, discos externos y tarjetas de memoria. `/mnt` es un lugar para montajes temporales hechos a mano, por ejemplo, un disco al que vas a acceder una sola vez.

### `/opt`, `/srv` y `/run`

`/opt` recibe programas "opcionales" que vienen en un paquete cerrado, fuera del gestor de paquetes. `/srv` guarda los datos de los servicios que ofrece la máquina, como los archivos de un sitio web. `/run` guarda información de lo que está corriendo desde el último arranque y se vuelve a crear en cada reinicio.

## Una forma fácil de memorizar

En lugar de memorizar decenas de nombres, agrupa las carpetas por función:

- **Personas:** `/home` y `/root`.
- **Programas:** `/bin`, `/sbin`, `/lib`, `/usr` y `/opt`.
- **Configuración:** `/etc`.
- **Datos que cambian:** `/var`, `/tmp`, `/run` y `/srv`.
- **Hardware y el sistema en vivo:** `/dev`, `/proc` y `/sys`.
- **Arrancar la máquina y conectar discos:** `/boot`, `/media` y `/mnt`.

Con estos seis grupos en mente, casi siempre puedes adivinar dónde está algo.

## Explóralo tú mismo

Abre una terminal y recorre el árbol. Estos comandos solo **muestran** información, así que son seguros:

| Comando | Qué hace |
|---|---|
| `pwd` | Muestra en qué carpeta estás. |
| `ls /` | Lista las carpetas de la raíz. |
| `cd /etc` y luego `ls` | Entra en `/etc` y muestra las configuraciones. |
| `ls -la ~` | Lista todo en tu carpeta personal, incluidos los ocultos. |
| `tree -L 1 /` | Dibuja el árbol de la raíz (quizá tengas que instalar `tree`). |
| `df -h` | Muestra los discos montados y el espacio libre. |
| `du -sh carpeta` | Muestra cuánto espacio ocupa una carpeta. |
| `man hier` | Abre el manual que describe toda la estructura de carpetas. |

Mira todo lo que quieras, pero **no borres ni edites** nada en `/etc`, `/usr`, `/boot` o `/lib` si no sabes exactamente lo que haces, sobre todo con `sudo`.

## ¿Y en los servidores de SKYNET?

Nuestros servidores corren en Linux, y esta organización es parte del trabajo diario: las configuraciones están en archivos de texto, los logs son lo primero que revisamos cuando algo falla y cada servidor de juego corre en un **contenedor Docker**, que ve su propio árbol de carpetas, con su propia raíz `/`, separado de los demás. Si Linux es nuevo para ti, empieza por el post [Qué es Linux y por qué domina los servidores del mundo](/es/blog/que-es-linux-y-por-que-domina-los-servidores/). Para ver cómo armamos cada pieza, lee [Cómo funcionan los servidores SKYNET por dentro](/es/blog/como-funcionan-los-servidores-skynet/).

Después de la teoría, ven a jugar: revisa el [ranking de SKYNET](https://stats.skynet-tf2.com.br/hlstats.php) y entra a uno de nuestros servidores.
