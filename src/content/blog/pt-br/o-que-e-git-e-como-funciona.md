---
translationKey: "o-que-e-git"
title: "O que é Git e como funciona: guia básico para começar"
seoTitle: "O que é Git? Como funciona e guia básico de comandos | SKYNET"
description: "Entenda o que é o Git, como ele funciona (commits, área de preparação, branches e repositórios remotos) e aprenda, passo a passo, os comandos básicos para versionar seus projetos."
date: 2026-11-09
cover: ../../../assets/img/blog-git.jpg
draft: false
---

Sabe quando você salva o jogo antes de um chefe difícil, para poder voltar se der errado? O **Git** faz isso com projetos inteiros: cada "save" guarda uma foto de todos os arquivos, com data, autor e uma mensagem explicando o que mudou. Dá para voltar no tempo, testar ideias sem medo e trabalhar em equipe sem um sobrescrever o trabalho do outro.

Neste post explicamos o que é o Git, como ele funciona por dentro e fechamos com um guia básico, comando por comando. O conteúdo se baseia no [tutorial oficial do Git](https://git-scm.com/docs/gittutorial) e no clássico [git - the simple guide](https://rogerdudler.github.io/git-guide/), de Roger Dudler, atualizado com os comandos mais novos.

## O que é o Git

O Git é um **sistema de controle de versão**: um programa que registra o histórico de mudanças de um conjunto de arquivos. Ele foi criado em **2005 por Linus Torvalds**, o mesmo criador do Linux, para organizar o desenvolvimento do kernel, um projeto com milhares de pessoas contribuindo ao mesmo tempo. Hoje é software livre e o controle de versão mais usado do mundo, em projetos de todos os tamanhos.

O Git é **distribuído**: cada pessoa tem uma cópia completa do projeto, com todo o histórico, no próprio computador. Dá para trabalhar offline, ver versões antigas e criar novos registros sem depender de um servidor.

### Git não é GitHub

É uma confusão comum. O **Git** é o programa que roda no seu computador. O **GitHub**, assim como o GitLab e o Bitbucket, é um **site que hospeda repositórios Git** na internet e adiciona recursos de colaboração, como revisão de código e controle de tarefas. Você pode usar o Git sem nenhum desses sites.

## Como o Git funciona

### Repositório

Um **repositório** é a pasta do projeto acompanhada pelo Git. Todo o histórico fica em uma pasta oculta chamada `.git`, dentro dela. Apague a `.git` e o histórico vai junto; os arquivos atuais continuam lá.

### Commits: fotos do projeto

Cada registro no Git se chama **commit**. Um commit é uma **foto completa** de como os arquivos estavam naquele momento, junto com o autor, a data, uma mensagem e uma ligação com o commit anterior. Assim nasce uma corrente de versões. Cada commit recebe uma identificação única, um código como `3d6e2aa`, que serve para encontrá-lo depois.

### As três áreas

Antes de virar commit, uma mudança passa por três lugares:

| Área | O que é |
|---|---|
| **Pasta de trabalho** | Os arquivos como estão no seu disco, onde você edita. |
| **Área de preparação** (staging ou index) | Uma "sala de espera" com as mudanças escolhidas para o próximo commit. |
| **Repositório** | O histórico de commits gravado na pasta `.git`. |

O caminho é sempre o mesmo: você edita na pasta de trabalho, escolhe o que vai entrar com `git add` e grava com `git commit`. A área de preparação parece um passo a mais, mas é ela que permite separar mudanças diferentes em commits diferentes, deixando o histórico organizado.

### Branches: linhas paralelas de trabalho

Uma **branch** (ramo) é uma linha de desenvolvimento independente. A principal costuma se chamar `main` (em projetos mais antigos, `master`). Para criar algo novo sem bagunçar o que já funciona, você abre uma branch, faz seus commits nela e, quando estiver pronto, **junta (merge)** de volta na principal. No Git, criar e trocar de branch é instantâneo, então vale usar à vontade.

### Repositórios remotos

Um **remoto** é uma cópia do repositório em outro lugar, como um servidor ou o GitHub. Por convenção, o principal se chama `origin`. Você **envia** seus commits com `git push` e **recebe** os dos outros com `git pull`.

## Guia básico, passo a passo

### 1. Instalar e configurar

No Linux, instale pelo gerenciador de pacotes (no Ubuntu e no Debian, `sudo apt install git`). No Windows, baixe o Git for Windows em [git-scm.com](https://git-scm.com/). No macOS, ele vem com as ferramentas de linha de comando do Xcode. Confira com `git --version`.

Depois, diga ao Git quem você é. Essas informações aparecem em cada commit:

```bash
git config --global user.name "Seu Nome"
git config --global user.email voce@exemplo.com
git config --global init.defaultBranch main
```

### 2. Criar ou copiar um repositório

Para começar um projeto do zero:

```bash
mkdir meu-projeto
cd meu-projeto
git init
```

Para baixar um projeto que já existe, com todo o histórico:

```bash
git clone https://github.com/usuario/projeto.git
```

### 3. O primeiro commit

Crie ou edite um arquivo e veja o que o Git enxerga:

```bash
git status
```

Escolha o que vai entrar no commit e grave:

```bash
git add README.md        # um arquivo
git add .                # ou tudo o que mudou na pasta
git commit -m "Primeiro commit: cria o README"
```

### 4. Ver mudanças e histórico

```bash
git diff                 # o que mudou e ainda não foi preparado
git diff --staged        # o que já está preparado para o commit
git log --oneline        # histórico resumido
git log --graph --oneline --all   # histórico com o desenho das branches
```

### 5. Trabalhar com branches

```bash
git switch -c nova-funcao    # cria a branch e entra nela
# ...edita, git add, git commit...
git switch main              # volta para a principal
git merge nova-funcao        # junta o trabalho
git branch -d nova-funcao    # apaga a branch que já foi juntada
```

Em tutoriais mais antigos, você vai ver `git checkout -b nova-funcao` e `git checkout main`. Funcionam igual; `git switch` é a forma mais nova e mais clara.

### 6. Resolver conflitos

Se duas branches mudaram a mesma linha, o Git não adivinha qual vale e marca o **conflito** no arquivo:

```text
<<<<<<< HEAD
versão da sua branch
=======
versão da outra branch
>>>>>>> nova-funcao
```

Edite o trecho deixando a versão certa, apague as marcações e finalize com `git add arquivo` e `git commit`.

### 7. Enviar e receber de um servidor

```bash
git remote add origin https://github.com/usuario/projeto.git
git push -u origin main      # primeiro envio; depois, só git push
git pull                     # baixa e junta as mudanças dos outros
git fetch                    # só baixa, para você olhar antes de juntar
```

### 8. Desfazer com segurança

```bash
git restore arquivo           # descarta mudanças ainda não preparadas
git restore --staged arquivo  # tira o arquivo da área de preparação
git revert 3d6e2aa            # cria um commit que desfaz outro
```

Cuidado com `git reset --hard`: ele apaga mudanças que não estão em commit, sem volta. Para desfazer algo que já foi enviado para o servidor, prefira `git revert`, que não reescreve o histórico dos outros.

### 9. Marcar versões com tags

```bash
git tag v1.0.0
git push origin v1.0.0
```

Tags dão nome a um commit importante, como uma versão lançada.

## Resumo dos comandos

| Comando | Para que serve |
|---|---|
| `git init` | Cria um repositório na pasta atual. |
| `git clone URL` | Copia um repositório existente. |
| `git status` | Mostra o que mudou e o que está preparado. |
| `git add` | Prepara mudanças para o próximo commit. |
| `git commit -m "..."` | Grava um commit com uma mensagem. |
| `git log` | Mostra o histórico. |
| `git diff` | Mostra as diferenças linha a linha. |
| `git switch -c nome` | Cria uma branch e entra nela. |
| `git merge nome` | Junta outra branch na atual. |
| `git push` / `git pull` | Envia e recebe commits de um remoto. |
| `git restore` | Descarta mudanças locais. |
| `git revert` | Desfaz um commit criando outro. |

## Boas práticas

- **Commits pequenos e com uma ideia cada.** Fica fácil entender o histórico e desfazer só o que deu errado.
- **Mensagens claras:** um título curto (até uns 50 caracteres) dizendo o que o commit faz e, se precisar, uma explicação depois de uma linha em branco.
- **Use um `.gitignore`** para o Git ignorar arquivos que não devem ser versionados, como arquivos temporários e pastas geradas automaticamente.
- **Nunca faça commit de senhas, tokens ou chaves.** Mesmo que você apague depois, eles continuam no histórico. Em repositório público, considere que já vazaram e troque na hora.
- **Faça `git pull` antes de começar** a trabalhar em um projeto compartilhado, para partir da versão mais nova.

## O Git na SKYNET

Por aqui, o Git faz parte do dia a dia. Os plugins que criamos para os servidores, as imagens Docker que publicamos para a comunidade e o próprio site são versionados com Git: cada mudança vira um commit com uma mensagem explicando o que foi feito, e o site é publicado automaticamente a cada envio. Quando algo dá errado, dá para ver exatamente o que mudou e voltar atrás em minutos.

Se você está começando no mundo Linux, vale ler também [O que é Linux e por que ele domina os servidores do mundo](/blog/o-que-e-linux-e-por-que-domina-os-servidores/) e [Diretórios do Linux: para que serve cada pasta](/blog/diretorios-do-linux-para-que-serve-cada-pasta/). E, quando cansar do terminal, venha jogar nos nossos servidores e conferir o [ranking](https://stats.skynet-tf2.com.br/hlstats.php).
