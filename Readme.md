# Sistema de Gerenciamento Paroquial
 - [Resumo](#resumo)
 - [Problematica](#problematica)
 - [Objetivos do Sistema](#objetivos-do-sistema)
 - [Perfil de Usuário](#perfil-de-usuários)
 - [Requisitos Funcionais](#requisitos-funcionais)
 - [Requisitos Não Funcionais](#requisitos-não-funcionais)
 - [Escopo do Projeto](#escopo-do-projeto)
 - [Diagrama de Caso de Uso](#diagrama-de-caso-de-uso)
 - [Tecnologias a serem utilizadas](#tecnolgoias-a-serem-utilizadas)

### Resumo
###### [Voltar ao topo](#sistema-de-gerenciamento-paroquial)

É um sistema voltado para igrejas católicas com intuito de ajudar no gerenciamento paroquial, tendo como principal foco o Conselho Pastoral Paroquial, que são formado por representantes de cada pastoral, movimento e comunidade presente em uma paróquia.

A ideia é que todos os coordenadores tenham acesso ao sistema e utilizem no dia a dia para o auxilio em suas pastorais e movimentos, e que o pároco tenha total controle do que está acontencendo em sua paróquia.

O sistema contará com um Administrador, que será o pároco ou administrador paroquial da paróquia, que poderá estar liberando acesso para aqueles que cadastrarem para utilizar o sistema, impedindo assim que qualquer um possa realizar o cadastro e acessar o sistema sem as devidas permissões.


### Problematica
###### [Voltar ao topo](#sistema-de-gerenciamento-paroquial)
Atualmente a paróquia se reunie uma vez por mês para discutir sobre os eventos que estão por vir e também sobre a agenda, onde o que é decidido é passado para a secretaria paroquial para então ser colocado no Google Agenda onde apenas a secretaria e padre tem acesso.

A paróquia se utiliza de um sistema chamado Théos onde apenas a secretaria paroquial e a responsavél financeira tem acesso e que é integrado com a Diocese de Osasco.

Com isso, ocorre os seguintes problemas:
- Eventos que são marcado e, sem aviso, são desmarcados, continuando na agenda;
- Não há uma padronização para as catequese, ocorrendo perda de cadastros e documentos;
- Não há uma transparência com os coordenadores sobre a agenda paroquial;
- Não há uma padronização para a lojinha paroquial, sendo tudo registrado em caderno;

###  Objetivos do sistema
###### [Voltar ao topo](#sistema-de-gerenciamento-paroquial)
- As pastorais tenham acesso a uma agenda compartilhada, podendo marcar e desmarcar eventos, sendo permitido apenas pelo administrador do sistema;
- Deixar que a catequese crie as turmas e gerencie elas;
- Auxiliar na contabilidade da lojinha paroquial, sobre estoques e pedidos;
- Relatórios facéis para a secretaria paroquial e para o financeiro sobre catequese, lojinha paroquial e também sobre a agenda paroquial;

### Perfil de Usuários
###### [Voltar ao topo](#sistema-de-gerenciamento-paroquial)
Os usuáios são membros do Conselho Pastoral Paroquial, casais de apoio que ajudam na lojinha paroquial e catequistas. Sao pessoas que tem de 16 a 60 anos. Alguns utilizam desktop e notebooks, todos utilizam celulares e todos possuem acesso a internet, seja no celular via 4G/5G ou via internet cabeada (residencial).

### Requisitos Funcionais
###### [Voltar ao topo](#sistema-de-gerenciamento-paroquial)

1 - O sistema deve permitir que o usuário realize o cadastro.
2 - O sistema deve permitir que o usuário faça login através do e-mail e senha.
3 - O sistema deve apresentar ao usuário apenas os módulos que ele terá acesso.
4 - O sistema deve permitir que apenas o Administrador possa liberar o acesso aos usuários.
5 - O sistema não deve permitir que o usuário deixe campos em brancos.
6 - O sistema não deve permitir que o usuário faça a exclusão de qualquer dado no sistema, incluindo os proprios.
7 - O sistema deve permitir que o usuários possa alterar apenas dados especificos, não podendo alterar o nome e a sua pastoral ou movimento.
8 - O sistema não deve permitir que a alteração seja efetuada sem a autorização do Administrador, salvo em alteração de perfil do usuário.
9 - O sistema deve permitir que apenas o Administrador possa alterar seus dados totalmente.
10 - O sistema deve permitir que os usuários possam utilizar os módulos de acordo com a sua pastoral, movimento e comunidade.
11 - O sistema deve permitir que o Administrador possa fazer qualquer alteração em qualquer módulo, desde exclusão, alteração ou cadastro.
12 - O sistema deve notificar o Administrador sobre alterações a serem confirmadas, assim como inclusão de dados a serem confirmadors e liberação de cadastro a serem confirmadas.
13 - O sistema não deve permitir cadastro de usuários com mesmo e-mail.
14 - O sistema deve permitir a impressão de relatórios por módulo pertinentens a eles.

### Requisitos Não Funcionais
###### [Voltar ao topo](#sistema-de-gerenciamento-paroquial)
1 - O sistema deve estar funcionando 24h por dia.
2 - O sistema deve ter as senhas dos usuários criptografadas.
3 - O sistema deve notificar uma confirmação da ação que o usuário estpa fazendo.
4 - O sistema deve notificar uma verificação de exclusão de algo.
5 - O sistema deve manter um log de tudo que está ocorrendo no sistema por pelo menos 6 mêses para possiveis bugs.
6 - O sistema deve notificar o usuário faltar com algum dado a ser preenchido, a informação deve ser clara.
7 - O sistema deve notificar quando o sistema não estiver funcionando.
8 - O sistema deve notificar quando há um erro com informações claras.


### Escopo do Projeto
###### [Voltar ao topo](#sistema-de-gerenciamento-paroquial)

Inclui:
 - Criação dos protótipo de interface;
 - Teste de usabilidade com protótipo;
 - Desenvolvimento WEB com site semantico e responsivo;
 - Teste funcionais e usabilidade;
 - Documentação;

Não Inclui:
 - Desenvolvimento de aplicativo;
 - Publicação no servidor;
 - Mensalidade para manutenção e funcionalidade do sistema;


### Diagrama de Caso de Uso
###### [Voltar ao topo](#sistema-de-gerenciamento-paroquial)

 ![Diagrama de Caso de Uso](/img-md/diagrama_caso_de_uso.jpg)

### Tecnolgoias a serem utilizadas
###### [Voltar ao topo](#sistema-de-gerenciamento-paroquial)

Backend : Python utilizando flaks para criação de rotas
Frontend : HTML, CSS utilizando Tailwind CSS para estilização, JavaScript para interação;
Banco de Dados : Postgree no Supabase utilizando o JWT (JSON Web Token) e RLS (Row Level Security) que a plataforma disponibiliza
Versionamento de código : GitHUb
