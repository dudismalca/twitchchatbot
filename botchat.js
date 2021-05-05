console.log("FERRAMENTAS ESTÃO OK");

const tmi = require('tmi.js');
const NOME_DO_BOT = 'jokerpitter01'
const canal = 'teamjokerzskulll'
const TOKEN = 'oauth:pj0wtmr3433qd0m1sbsknfxlzu9vod'

const opts = {
    identity: {
    username: NOME_DO_BOT,
    password: TOKEN
    },
    channels: [ canal ]
  };

  //intercepta mensagem do chat
function mensagemChegou(alvo, contexto, mensagem, ehBot) {
    if (ehBot) {
      return; //se for mensagens do nosso bot ele não faz nada
    } 
  
  const nomeDoComando = mensagem.trim();// remove espaço em branco da mensagem para verificar o comando
  // checando o nosso comando
    if (nomeDoComando === '!comandoUM') {
    console.log(`* Foi Executado um comando ${nomeDoComando}`);
    client.say(alvo, `* Você pediu para executar o comando ${nomeDoComando}`);
    } else if (nomeDoComando === '!comandoDOIS') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `* Você pediu para executar o comando ${nomeDoComando}`);
    } else {
    console.log(`* Não conheço o comando ${nomeDoComando}`);
    client.say(alvo, `* Não existe o comando ${nomeDoComando}`);
    }
  }
  
  function entrouNoChatDaTwitch(endereco, porta) {
    console.log(`* Bot entrou no endereço ${endereco}:${porta}`);
    client.say(canal, `Cheguei carai`);
  }

  // Cria um cliente tmi com  nossas opções
const client = new tmi.client(opts);

// Registra nossas funções
client.on('message', mensagemChegou);
client.on('connected', entrouNoChatDaTwitch);
// Connecta na Twitch:
client.connect();