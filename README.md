## Projeto: Kawasaki

### Teste Automatizado: Verificação de Funcionalidade de Cadastro, Login, Localização de Concessionária, Menu Motocicletas, Caixa de Busca e Banner.

### Objetivo
Cadastro - O objetivo deste teste é verificar se o processo de registro de novos usuários no sistema funciona corretamente, conforme os requisitos definidos. Esse caso de teste visa assegurar que todos os campos obrigatórios sejam preenchidos adequadamente, e que o sistema responda de maneira apropriada em situações normais e excepcionais.

Login - O objetivo deste teste é verificar é assegurar que o sistema de autenticação permite que usuários legítimos acessem suas contas de forma segura e eficaz, enquanto impede acessos não autorizados. O teste deve garantir que todos os requisitos funcionais e não funcionais do processo de login sejam atendidos, desde a validação de credenciais até a proteção contra tentativas de acesso maliciosas.

Localização de Concessionária - O objetivo deste teste é garantir que o sistema identifique, processe e utilize corretamente a localização de uma(s) entidade(s) específica(s). Isso inclui verificar a precisão dos dados de localização, (como nme da entidade e cep) e a correta integração com APIs. 

Menu Motocicletas - O objetivo deste teste é assegurar que o menu exiba corretamente as promoções disponíveis, permitindo que os usuários interajam com ele de maneira eficiente e intuitiva.

Caixa de Busca - O objetivo deste teste é garantir que o sistema permita aos usuários encontrar informações de maneira rápida, precisa e relevante, de acordo com os critérios de pesquisa definidos. Esse teste deve verificar a eficiência do algoritmo de busca, a adequação dos resultados retornados, a usabilidade da interface de busca, e a conformidade com os requisitos funcionais e não funcionais.

Banner - O objetivo deste teste é garantir que os banners deslizantes sejam exibidos corretamente na interface do usuário, proporcionando uma experiência visual agradável e interativa. Este teste deve verificar que o carrossel funciona conforme o planejado, apresentando os banners em sequência, permitindo a navegação manual e automática, e cumprindo requisitos de design, desempenho e acessibilidade.

### Escopo
- Página: https://www.kawasakibrasil.com/pt-br/
- Navegadores: Chrome Versão 125.0.6422.176 (x64 bits)
- Dispositivos: Desktop
- Sistema Operacional: Windows 10
- Ferramenta de Teste: Cypress

### Pré-condições
1. O ambiente de teste deve estar configurado e acessível.
2. Cypress deve estar instalado e configurado no projeto.

### Para a execução do teste:
Execute o Cypress: npm cypress open

### Notas
- Em caso de falha, adicione comentários detalhados sobre o erro encontrado.
- Anexe capturas de tela, se necessário.

### Status
- **Data do Teste:** 27/08/2024
- **Testador:** Thierry Castro
