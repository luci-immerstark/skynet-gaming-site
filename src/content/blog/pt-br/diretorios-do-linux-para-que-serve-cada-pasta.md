---
translationKey: "diretorios-do-linux"
title: "Diretórios do Linux: para que serve cada pasta (/, /home, /etc, /usr...)"
seoTitle: "Diretórios do Linux: para que serve cada pasta | SKYNET"
description: "Entenda a estrutura de pastas do Linux: a raiz /, /home, /root, /etc, /usr, /var, /tmp, /dev, /proc e as outras, com um jeito fácil de memorizar e comandos para explorar."
date: 2026-11-09
cover: ../../../assets/img/blog-linux-diretorios.jpg
draft: false
---

Quem vem do Windows abre o terminal do Linux pela primeira vez e logo pergunta: **cadê o disco C:?** No Linux não existe C:, D: ou E:. Tudo fica pendurado em uma única árvore de pastas, e entender essa árvore é o que faz o Linux deixar de parecer difícil. Neste guia explicamos, pasta por pasta, onde cada coisa mora e por quê.

Este post foi feito com base no vídeo [LINUX isn't Hard Once You Understand This (File Directories)](https://www.youtube.com/watch?v=qvjRcZcW8CY), do canal Cloud X Berry, e na especificação oficial que padroniza essas pastas, o [Filesystem Hierarchy Standard (FHS)](https://refspecs.linuxbase.org/FHS_3.0/fhs/index.html), mantido pela Linux Foundation.

## Tudo começa na raiz: `/`

No Linux existe um único ponto de partida, a **raiz**, escrita com uma barra: `/`. Todas as pastas, de todos os discos, ficam abaixo dela. Quando você conecta um pendrive ou um segundo SSD, ele não ganha uma letra: ele é **montado** em uma pasta dessa árvore e passa a aparecer ali dentro.

Três diferenças que confundem quem vem do Windows:

- O separador de pastas é a barra normal (`/home/ana/fotos`), não a invertida (`\`).
- Maiúsculas e minúsculas **importam**: `Fotos`, `fotos` e `FOTOS` são três nomes diferentes.
- Arquivos e pastas que começam com ponto (como `.bashrc`) ficam ocultos. Para vê-los, use `ls -a`.

### Caminhos absolutos e relativos

Um **caminho absoluto** começa na raiz e funciona de qualquer lugar: `/etc/hostname`. Um **caminho relativo** parte da pasta onde você está agora: se você está em `/home/ana`, então `fotos` significa `/home/ana/fotos`. Alguns atalhos ajudam muito:

| Atalho | Significado |
|---|---|
| `/` | A raiz do sistema. |
| `~` | A sua pasta pessoal (por exemplo, `/home/ana`). |
| `.` | A pasta atual. |
| `..` | A pasta de cima. |

## As pastas principais, uma a uma

Esta é a visão geral. Logo abaixo, os detalhes das que mais confundem.

| Pasta | O que guarda |
|---|---|
| `/home` | As pastas pessoais de cada usuário (`/home/ana`, `/home/joao`). |
| `/root` | A pasta pessoal do administrador (o usuário root). |
| `/bin` | Comandos do dia a dia, como `ls`, `cp` e `cat`. |
| `/sbin` | Ferramentas de administração do sistema. |
| `/etc` | Arquivos de configuração do sistema e dos programas. |
| `/usr` | A maior parte dos programas, bibliotecas e documentação instalados. |
| `/lib` | Bibliotecas compartilhadas usadas pelos programas e módulos do kernel. |
| `/opt` | Programas extras instalados "à parte", fora do gerenciador de pacotes. |
| `/var` | Dados que mudam o tempo todo: logs, caches, filas, bancos de dados. |
| `/tmp` | Arquivos temporários. |
| `/run` | Informações de execução criadas desde o último boot. |
| `/srv` | Dados de serviços oferecidos pela máquina, como sites. |
| `/media` | Onde aparecem pendrives e discos removíveis. |
| `/mnt` | Ponto de montagem temporário, usado manualmente. |
| `/dev` | Os dispositivos de hardware, representados como arquivos. |
| `/proc` | Uma janela ao vivo para os processos e o kernel. |
| `/sys` | Informações do kernel sobre hardware e drivers. |
| `/boot` | Tudo o que é preciso para ligar o Linux: kernel e carregador de boot. |

### `/home` e `/root`: não confunda com a raiz

`/home` é onde fica a pasta de cada pessoa. É ali que vão seus documentos, downloads e configurações pessoais. Usuários comuns só podem mexer na própria pasta, o que protege o resto do sistema.

Já `/root` **não é a raiz do sistema**: é só a pasta pessoal do administrador, separada das outras por segurança. A raiz é `/`. Muita gente confunde as duas por causa do nome.

### `/bin`, `/sbin` e `/lib`: comandos e bibliotecas

`/bin` guarda comandos que qualquer usuário usa (`ls`, `cp`, `mv`, `cat`). `/sbin` guarda ferramentas de administração, como as de rede e de disco, que em geral exigem `sudo`. `/lib` guarda as **bibliotecas compartilhadas**, pedaços de código que vários programas usam ao mesmo tempo, parecidos com as DLLs do Windows.

Um detalhe moderno: em distribuições atuais como Ubuntu, Debian, Fedora e Arch, `/bin`, `/sbin` e `/lib` são apenas **atalhos** para `/usr/bin`, `/usr/sbin` e `/usr/lib`. Os nomes antigos continuam existindo para os programas antigos não quebrarem.

### `/usr`: não é "user"

Pelo nome, parece a pasta dos usuários, mas não é. Hoje, `/usr` guarda a maior parte do software do sistema: programas (`/usr/bin`), bibliotecas (`/usr/lib`), documentação e ícones (`/usr/share`). Programas que você compila e instala manualmente costumam ir para `/usr/local`.

Você vai ouvir que a sigla significa "Unix System Resources". Na verdade, nas primeiras versões do Unix, `/usr` era mesmo onde ficavam as pastas dos usuários. Com o tempo ela passou a guardar programas, e a explicação "System Resources" foi criada depois. O que importa é o uso atual: **programas e recursos compartilhados**, não arquivos pessoais.

### `/etc`: as configurações

`/etc` é o painel de controle do Linux, só que em arquivos de texto. Ali ficam o nome da máquina (`/etc/hostname`), a lista de usuários (`/etc/passwd`, que apesar do nome não guarda senhas), quais discos são montados no boot (`/etc/fstab`) e as configurações de quase todo serviço instalado. Como tudo é texto, dá para fazer backup, comparar versões e automatizar mudanças com facilidade.

### `/var` e `/tmp`: dados que mudam

`/var` vem de "variável": guarda o que cresce e muda enquanto o sistema roda. O exemplo mais famoso é `/var/log`, onde ficam os **logs**, o diário de bordo de tudo o que acontece. Quando algo dá errado em um servidor, é lá que se começa a investigar. Também ficam em `/var` caches, filas de impressão e dados de programas, como bancos de dados.

`/tmp` é para arquivos temporários. Qualquer programa pode escrever ali, e na maioria das distribuições essa pasta é **limpa a cada reinício** (algumas até a guardam na memória RAM). Nunca salve ali algo que você queira manter.

### `/dev`, `/proc` e `/sys`: o sistema visto como arquivos

No Linux, **quase tudo é um arquivo**, inclusive o hardware. Em `/dev`, o primeiro disco pode aparecer como `/dev/sda` ou `/dev/nvme0n1`, e existe até um "buraco negro", o `/dev/null`, que descarta tudo o que você mandar para ele.

`/proc` e `/sys` são pastas **virtuais**: não ocupam espaço no disco. O kernel monta essas pastas na memória e as atualiza em tempo real. Experimente `cat /proc/cpuinfo` para ver o processador ou `cat /proc/meminfo` para ver a memória. Cada processo em execução também tem uma pasta numerada dentro de `/proc`.

### `/boot`, `/media` e `/mnt`

`/boot` guarda o kernel do Linux e os arquivos do carregador de boot (como o GRUB). Sem eles, a máquina não liga, então essa é uma pasta para olhar e não mexer.

`/media` é onde o sistema monta sozinho pendrives, HDs externos e cartões de memória. `/mnt` é um lugar para montagens temporárias feitas manualmente, por exemplo, um disco que você vai acessar só uma vez.

### `/opt`, `/srv` e `/run`

`/opt` recebe programas "opcionais" que vêm em um pacote fechado, fora do gerenciador de pacotes. `/srv` guarda os dados de serviços que a máquina oferece, como os arquivos de um site. `/run` guarda informações de quem está rodando desde o último boot e é recriada a cada reinício.

## Um jeito fácil de memorizar

Em vez de decorar dezenas de nomes, agrupe as pastas pela função:

- **Pessoas:** `/home` e `/root`.
- **Programas:** `/bin`, `/sbin`, `/lib`, `/usr` e `/opt`.
- **Configuração:** `/etc`.
- **Dados que mudam:** `/var`, `/tmp`, `/run` e `/srv`.
- **Hardware e o sistema ao vivo:** `/dev`, `/proc` e `/sys`.
- **Ligar a máquina e conectar discos:** `/boot`, `/media` e `/mnt`.

Com esses seis grupos na cabeça, você quase sempre consegue adivinhar onde algo está.

## Explore você mesmo

Abra um terminal e passeie pela árvore. Estes comandos só **mostram** informações, então são seguros:

| Comando | O que faz |
|---|---|
| `pwd` | Mostra em qual pasta você está. |
| `ls /` | Lista as pastas da raiz. |
| `cd /etc` e depois `ls` | Entra em `/etc` e mostra as configurações. |
| `ls -la ~` | Lista tudo da sua pasta pessoal, inclusive os ocultos. |
| `tree -L 1 /` | Desenha a árvore da raiz (talvez seja preciso instalar o `tree`). |
| `df -h` | Mostra os discos montados e o espaço livre. |
| `du -sh pasta` | Mostra quanto espaço uma pasta ocupa. |
| `man hier` | Abre o manual que descreve toda a estrutura de pastas. |

Olhe à vontade, mas **não apague nem edite** nada em `/etc`, `/usr`, `/boot` ou `/lib` sem saber exatamente o que está fazendo, principalmente com `sudo`.

## E nos servidores da SKYNET?

Os nossos servidores rodam em Linux, e essa organização faz parte do trabalho do dia a dia: configurações ficam em arquivos de texto, logs são a primeira coisa que olhamos quando algo dá errado e cada servidor de jogo roda em um **container Docker**, que enxerga a sua própria árvore de pastas, com a sua própria raiz `/`, separada dos outros. Se o Linux é novidade para você, comece pelo post [O que é Linux e por que ele domina os servidores do mundo](/blog/o-que-e-linux-e-por-que-domina-os-servidores/). Para ver como montamos cada peça, leia [Como funcionam os servidores SKYNET por dentro](/blog/como-funcionam-os-servidores-skynet/).

Depois da teoria, venha jogar: confira o [ranking da SKYNET](https://stats.skynet-tf2.com.br/hlstats.php) e entre em um dos nossos servidores.
