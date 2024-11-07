# Poker-Rush-Node
Plataforma de Poker acessível

### Cronograma para Plataforma de Poker Texas Hold'em

1. **Autenticação de Usuário**
   - Criar componentes de login e cadastro de usuários.

3. **Criação dos Componentes Básicos**
   - **Componente `Mesa`**: Criar a interface inicial da mesa de poker, com layout para os jogadores, cartas comunitárias e ações.
   - **Componente `Jogador`**: Separar cada jogador em um componente, permitindo futura customização para nome, fichas, e posição.
   - **Componente `CartasComunitarias`**: Componente dedicado às cartas da mesa, incluindo lógica para mostrar as cartas à medida que o jogo progride.

4. **Funcionalidade de Criação e Entrada em Mesas**
   - Criar uma página inicial ou lobby, onde os jogadores podem ver mesas disponíveis e se juntar a elas ou criar uma nova mesa.
   (Componente Lobby)
   - **Front-end**: Criar um formulário para criação de mesas (definir nome da mesa, quantidade de jogadores, etc.) e um botão para entrar em mesas já existentes. Mesa deverá ter quantidade de mesas sendo de 2 à 20 jogadores.

5. **Configuração do Estado do Jogo na Mesa**
   - Criar lógica para o estado da mesa (cartas comunitárias, turnos, fichas dos jogadores).
   - Adicionar gerenciamento de estado com `useState` e `useEffect` para controlar o fluxo do jogo.
   - Configurar ações principais (Call, Raise, All-in, Fold) com os botões e a captura de eventos de teclado.

6. **Implementação do Chat em Tempo Real**
   - Integrar uma biblioteca para comunicação em tempo real, como `socket.io`, para mensagens entre jogadores na mesa.
   - Criar um componente de chat com histórico de mensagens e entrada de texto.