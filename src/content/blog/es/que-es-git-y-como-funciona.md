---
translationKey: "o-que-e-git"
title: "Qué es Git y cómo funciona: guía básica para empezar"
seoTitle: "¿Qué es Git? Cómo funciona y guía básica de comandos | SKYNET"
description: "Entiende qué es Git, cómo funciona (commits, área de preparación, ramas y repositorios remotos) y aprende, paso a paso, los comandos básicos para versionar tus proyectos."
date: 2026-11-09
cover: ../../../assets/img/blog-git.jpg
draft: false
---

¿Sabes cuando guardas la partida antes de un jefe difícil, para poder volver si sale mal? **Git** hace eso con proyectos enteros: cada "guardado" registra una foto de todos los archivos, con fecha, autor y un mensaje que explica qué cambió. Puedes volver en el tiempo, probar ideas sin miedo y trabajar en equipo sin que uno pise el trabajo del otro.

En este post explicamos qué es Git, cómo funciona por dentro y cerramos con una guía básica, comando por comando. El contenido se basa en el [tutorial oficial de Git](https://git-scm.com/docs/gittutorial) y en la clásica [git - the simple guide](https://rogerdudler.github.io/git-guide/), de Roger Dudler, actualizada con los comandos más nuevos.

## Qué es Git

Git es un **sistema de control de versiones**: un programa que registra el historial de cambios de un conjunto de archivos. Lo creó en **2005 Linus Torvalds**, el mismo creador de Linux, para organizar el desarrollo del kernel, un proyecto con miles de personas contribuyendo al mismo tiempo. Hoy es software libre y el sistema de control de versiones más usado del mundo, en proyectos de todos los tamaños.

Git es **distribuido**: cada persona tiene una copia completa del proyecto, con todo el historial, en su propia computadora. Se puede trabajar sin conexión, ver versiones antiguas y crear nuevos registros sin depender de un servidor.

### Git no es GitHub

Es una confusión común. **Git** es el programa que corre en tu computadora. **GitHub**, igual que GitLab y Bitbucket, es un **sitio que aloja repositorios Git** en internet y suma funciones de colaboración, como revisión de código y seguimiento de tareas. Puedes usar Git sin ninguno de esos sitios.

## Cómo funciona Git

### Repositorio

Un **repositorio** es la carpeta del proyecto que Git sigue. Todo el historial está en una carpeta oculta llamada `.git`, dentro de ella. Si borras `.git`, el historial se va con ella; los archivos actuales siguen ahí.

### Commits: fotos del proyecto

Cada registro en Git se llama **commit**. Un commit es una **foto completa** de cómo estaban los archivos en ese momento, junto con el autor, la fecha, un mensaje y un enlace al commit anterior. Así nace una cadena de versiones. Cada commit recibe un identificador único, un código como `3d6e2aa`, que sirve para encontrarlo después.

### Las tres áreas

Antes de convertirse en commit, un cambio pasa por tres lugares:

| Área | Qué es |
|---|---|
| **Directorio de trabajo** | Los archivos como están en tu disco, donde editas. |
| **Área de preparación** (staging o index) | Una "sala de espera" con los cambios elegidos para el próximo commit. |
| **Repositorio** | El historial de commits guardado en la carpeta `.git`. |

El camino es siempre el mismo: editas en el directorio de trabajo, eliges qué entra con `git add` y lo guardas con `git commit`. El área de preparación parece un paso de más, pero es lo que permite separar cambios distintos en commits distintos y mantener el historial ordenado.

### Ramas: líneas de trabajo paralelas

Una **rama** (branch) es una línea de desarrollo independiente. La principal suele llamarse `main` (en proyectos más antiguos, `master`). Para crear algo nuevo sin romper lo que ya funciona, abres una rama, haces tus commits en ella y, cuando está lista, la **fusionas (merge)** de nuevo en la principal. En Git, crear y cambiar de rama es instantáneo, así que úsalas sin miedo.

### Repositorios remotos

Un **remoto** es una copia del repositorio en otro lugar, como un servidor o GitHub. Por convención, el principal se llama `origin`. **Envías** tus commits con `git push` y **recibes** los de los demás con `git pull`.

## Guía básica, paso a paso

### 1. Instalar y configurar

En Linux, instálalo desde el gestor de paquetes (en Ubuntu y Debian, `sudo apt install git`). En Windows, descarga Git for Windows en [git-scm.com](https://git-scm.com/). En macOS, viene con las herramientas de línea de comandos de Xcode. Compruébalo con `git --version`.

Después, dile a Git quién eres. Esta información aparece en cada commit:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email tu@ejemplo.com
git config --global init.defaultBranch main
```

### 2. Crear o copiar un repositorio

Para empezar un proyecto desde cero:

```bash
mkdir mi-proyecto
cd mi-proyecto
git init
```

Para descargar un proyecto que ya existe, con todo su historial:

```bash
git clone https://github.com/usuario/proyecto.git
```

### 3. El primer commit

Crea o edita un archivo y mira qué ve Git:

```bash
git status
```

Elige qué entra en el commit y guárdalo:

```bash
git add README.md        # un archivo
git add .                # o todo lo que cambió en la carpeta
git commit -m "Primer commit: crea el README"
```

### 4. Ver cambios e historial

```bash
git diff                 # lo que cambió y todavía no está preparado
git diff --staged        # lo que ya está preparado para el commit
git log --oneline        # historial resumido
git log --graph --oneline --all   # historial con el dibujo de las ramas
```

### 5. Trabajar con ramas

```bash
git switch -c nueva-funcion  # crea la rama y entra en ella
# ...editas, git add, git commit...
git switch main              # vuelve a la principal
git merge nueva-funcion      # fusiona el trabajo
git branch -d nueva-funcion  # borra la rama ya fusionada
```

En tutoriales más antiguos vas a ver `git checkout -b nueva-funcion` y `git checkout main`. Funcionan igual; `git switch` es la forma más nueva y más clara.

### 6. Resolver conflictos

Si dos ramas cambiaron la misma línea, Git no adivina cuál vale y marca el **conflicto** en el archivo:

```text
<<<<<<< HEAD
versión de tu rama
=======
versión de la otra rama
>>>>>>> nueva-funcion
```

Edita ese tramo dejando la versión correcta, borra las marcas y termina con `git add archivo` y `git commit`.

### 7. Enviar y recibir de un servidor

```bash
git remote add origin https://github.com/usuario/proyecto.git
git push -u origin main      # primer envío; después, solo git push
git pull                     # descarga y fusiona los cambios de los demás
git fetch                    # solo descarga, para que mires antes de fusionar
```

### 8. Deshacer con seguridad

```bash
git restore archivo           # descarta cambios que no están preparados
git restore --staged archivo  # saca el archivo del área de preparación
git revert 3d6e2aa            # crea un commit que deshace otro
```

Cuidado con `git reset --hard`: borra los cambios que no están en un commit, sin vuelta atrás. Para deshacer algo que ya se envió al servidor, mejor usa `git revert`, que no reescribe el historial de los demás.

### 9. Marcar versiones con tags

```bash
git tag v1.0.0
git push origin v1.0.0
```

Las tags le ponen nombre a un commit importante, como una versión publicada.

## Resumen de comandos

| Comando | Para qué sirve |
|---|---|
| `git init` | Crea un repositorio en la carpeta actual. |
| `git clone URL` | Copia un repositorio existente. |
| `git status` | Muestra qué cambió y qué está preparado. |
| `git add` | Prepara cambios para el próximo commit. |
| `git commit -m "..."` | Guarda un commit con un mensaje. |
| `git log` | Muestra el historial. |
| `git diff` | Muestra las diferencias línea por línea. |
| `git switch -c nombre` | Crea una rama y entra en ella. |
| `git merge nombre` | Fusiona otra rama en la actual. |
| `git push` / `git pull` | Envía y recibe commits de un remoto. |
| `git restore` | Descarta cambios locales. |
| `git revert` | Deshace un commit creando otro. |

## Buenas prácticas

- **Commits pequeños y con una idea cada uno.** El historial se entiende fácil y puedes deshacer solo lo que salió mal.
- **Mensajes claros:** un título corto (hasta unos 50 caracteres) que diga qué hace el commit y, si hace falta, una explicación después de una línea en blanco.
- **Usa un `.gitignore`** para que Git ignore archivos que no deben versionarse, como archivos temporales y carpetas generadas automáticamente.
- **Nunca hagas commit de contraseñas, tokens o claves.** Aunque los borres después, siguen en el historial. En un repositorio público, da por hecho que ya se filtraron y cámbialos enseguida.
- **Haz `git pull` antes de empezar** a trabajar en un proyecto compartido, para partir de la versión más nueva.

## Git en SKYNET

Por aquí, Git es parte del día a día. Los plugins que creamos para los servidores, las imágenes Docker que publicamos para la comunidad y el propio sitio se versionan con Git: cada cambio se convierte en un commit con un mensaje que explica qué se hizo, y el sitio se publica solo con cada envío. Cuando algo sale mal, podemos ver exactamente qué cambió y volver atrás en minutos.

Si estás empezando con Linux, lee también [Qué es Linux y por qué domina los servidores del mundo](/es/blog/que-es-linux-y-por-que-domina-los-servidores/) y [Directorios de Linux: para qué sirve cada carpeta](/es/blog/directorios-de-linux-para-que-sirve-cada-carpeta/). Y cuando te canses de la terminal, ven a jugar a nuestros servidores y revisa el [ranking](https://stats.skynet-tf2.com.br/hlstats.php).
