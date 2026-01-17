📅 Node.js Server de Saudação com Data e Hora

Um servidor HTTP simples em Node.js que responde com uma mensagem de saudação e a data/hora atuais do servidor. Ótimo para aprender como criar um servidor básico sem frameworks ou apenas com módulos nativos de Node.js.

🧠 Sobre o Projeto

Este projeto demonstra:

Como criar um servidor HTTP usando o módulo http do Node.js.

Como capturar a data e hora atuais com o objeto Date.

Como formatar respostas de texto simples para o cliente.

Ao acessar o servidor no navegador ou via curl, você receberá uma resposta personalizada contendo uma saudação junto com a data e hora atuais.

🚀 Pré‑requisitos

Antes de tudo, você precisará ter:

✔️ Node.js instalado (versão 12+ recomendada)
✔️ Terminal / prompt de comando

Se ainda não tiver instalado, pode baixar o Node.js em:
👉 https://nodejs.org/

📥 Instalação

Clone o repositório:

git clone https://github.com/Douglas-Pedroso/Node.js-server-saudacao-data-hora
cd Node.js-server-saudacao-data-hora


Instale as dependências (se houver):

Este projeto pode não ter dependências externas, pois usa apenas módulos nativos do Node.js.

▶️ Como Rodar o Servidor

Para iniciar o servidor, execute no terminal:

node index.js


ou, dependendo da sua configuração:

npm start


Após isso, o servidor ficará ativo em uma porta (normalmente 3000 ou conforme definido no código).

🌐 Testando a API
Acessando pelo navegador

Abra o navegador e vá para:

http://localhost:3000


Você verá uma resposta contendo algo como:

Olá! A data e hora atuais são: <data e hora do servidor>

Usando curl

No terminal:

curl http://localhost:3000

🤔 O que este servidor faz

✔️ Cria um servidor HTTP que fica escutando por requisições
✔️ Lê a data e hora atuais usando o objeto Date do JavaScript
✔️ Retorna essa informação junto com uma mensagem de saudação

Esse tipo de servidor é útil para aprender os fundamentos de Node.js sem precisar usar frameworks como Express .

🛠️ Exemplos de Código (Conceito)
const http = require('http');

const server = http.createServer((req, res) => {
  const agora = new Date();
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`Olá! A data e hora atuais são: ${agora}`);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


(Esse exemplo cria um servidor HTTP que responde com a data e hora atuais.)

📄 Licença

Este projeto está licenciado sob a Apache‑2.0 License conforme consta no repositório.

🤝 Contribuições

Contribuições e melhorias são bem‑vindas!

Faça um fork do repositório

Crie uma branch para sua feature

Faça commit com uma descrição clara

Envie um Pull Request
