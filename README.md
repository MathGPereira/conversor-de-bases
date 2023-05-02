# Conversor de Bases Numéricas

## Sobre
Com o intuito de aprender mais sobre manipulação de DOM com jQuery, nasceu um projeto simples, mas não pouco complexo. 
Aqui, de forma bem prática, é possível que o usuário escolha uma base numérica qualquer e, com um simples clicar de botão, obtenha a conversão do mesmo para outras bases numéricas.
Como limitação, o conversor não garante bons resultados para bases maiores que a sexagesimal (base 60).
Porém, é garantida uma precisão de 100% em todos os casos de conversão no qual o projeto se dedica.
Aqui se faz o uso de programação orientada a objeto, jQuery, AJAX, SASS, CSS, JavaScript, Node.js, HTML semântico e toda a lógica de programação necessária para se criar os algoritmos de conversão.

## Observação
Este projeto foi feito somente para tamanhos de tela mobile com início em 375px.
Além do mais, para conversões entre bases maiores que a decimal, se faz necessário ativar o json-server para que haja um resultado válido.

## Sumário

1. [Tecnologias usadas](#tecnologias)
2. [Contatos](#contato)
3. [Deploy](#deploy)
4. [Configurações](#configuracao)
    * Instalação do Node.js
        * [Windows](#instalaNodeNoWindows)
        * [Mac](#instalaNodeNoMac)
        * [Linux](#instalaNodeNoLinux)
    * [Instalando e executando o json-server](#instalaExecutaJsonServer)
5. [Problemas e Soluções](#problemaSolucao)
    * [Erro ao executar o npm](#erroNPM)
    * [Erro ao executar o Json-server](#erroJsonServer)

<a id="tecnologias"></a>

## Tecnologias
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

<a id="contato"></a>

## Contato
![email](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)
[![Linkedin](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](https://www.linkedin.com/in/matheuspereiradevfront/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MathGPereira)

<a id="deploy"></a>

## Deploy
* [Vercel](https://conversor-de-bases-eosin.vercel.app/)

<a id="configuracao"></a>

## Configurações Iniciais

### Instalação do Node.js

<a id="instalaNodeNoWindows"></a>

#### Windows
* Acessar o site oficial do [Node.js](https://nodejs.org/en);
* Baixar a versão mais recente;
* No Prompt de Comando insira:
```node --version``` para verificar se a instalação foi concluída corretamente. Virá uma resposta com a versão instalada do Node.js;

<a id="instalaNodeNoMac"></a>

#### Mac
* No terminal do Mac, insira os seguintes comandos:
    1. ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"```;
    2. ```brew update```;
    3. ```brew install node```;
    4. ```node --version``` para verificar se a instalação foi concluída corretamente. Virá uma resposta com a versão instalada do Node.js;

<a id="instalaNodeNoLinux"></a>

#### Linux
* No terminal do Linux, insira os seguintes comandos:
    1. ```curl -sL https://deb.nodesource.com/setup\_13.x | sudo -E bash -```;
    2. ```sudo apt install nodejs```;
    3. ```node --version``` para verificar se a instalação foi concluída corretamente. Virá uma resposta com a versão instalada do Node.js;

<a id="instalaExecutaJsonServer"></a>

### Instalação e execução do Json-server
1. Clonar o repositório do projeto para a sua máquina
2. Instalar o Json-server:
    * Através do Prompt de Comando (ou pelo Prompt integrado do Visual Studio Code), entre na pasta do repositório do projeto;
    * Insira o seguinte comando: 
    ```npm install -g json-server```
3. Iniciar o json-server:
    * Através do Prompt de Comando (ou pelo Prompt integrado do Visual Studio Code), entre na pasta do repositório do projeto;
    * Insira o seguinte comando:
    ```json-server --watch db.json```

<a id="problemaSolucao"></a>

## Possíveis problemas e como resolvê-los

<a id="erroNPM"></a>

1. Ao executar o comando do Node Package Manager (NPM) no passo 3, é possível receber o seguinte erro:
    > O arquivo XXXX não pode ser carregado porque a execução de scripts foi desabilitada neste sistema

    ### Solução
    * Abra o seu Power Shell em modo administrador;
    * Insira o seguinte comando:
    ```Set-ExecutionPolicy -ExecutionPolicy RemoteSigned```

<a id="erroJsonServer"></a>

2. Ao executar o comando do passo 4. é possível receber o seguinte erro:
    > json-server : O termo 'json-server' não é reconhecido como nome de cmdlet, função, arquivo de script ou programa
    operável. Verifique a grafia do nome ou, se um caminho tiver sido incluído, veja se o caminho está correto e tente 
    novamente.
    No linha:1 caractere:1
    json-server --watch db.json
        + CategoryInfo          : ObjectNotFound: (json-server:String) [], CommandNotFoundException
        + FullyQualifiedErrorId : CommandNotFoundException

    ### Solução
    * Abra o Prompt de Comando (ou o prompt integrado do Visual Studio Code);
    * Entre na pasta do repositório pelo Prompt;
    * Insira o comando 
    ```npx json-server --watch db.json```