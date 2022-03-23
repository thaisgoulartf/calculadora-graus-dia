# Calculadora de Graus dia
O sistema Calculadora de Graus dia pretende auxiliar agricultores e agrônomos a tomarem melhores decisões no cultivo de suas plantações de acordo com a técnica chamada Graus-dia.
Graus-dia: É possível obter o total de graus-dia subtraindo a temperatura base, que é específica de cada planta, da temperatura média diária do ambiente em que ela é cultivada. Essa diferença é a quantidade de calor de fato acumulada durante o dia, sendo considerada promissora ao crescimento e desenvolvimento
da planta. Após se obter esse valor a cada dia, deve-se ir somando durante todos os dias da duração do plantio, esse somatório é chamado de somatório graus-dia, também sendo específico para cada planta.

Obs: Atualmente é possível acompanhar 4 cultivares do milho.

## Regras

### `Requisitos Funcionais`

1. RF01 - O sistema deve permitir o cadastro de usuários;
2. RF02 - O sistema deve permitir login com conta Google;
3. RF03 - Ao acessar o sistema pela primeira vez, ou se o usuário não tiver nenhuma
cultura cadastrada, deve-se mostrar a tela de Adicionar cultura;
4. RF04 - Após adicionar cultura deve ser mostrada a cultura no dashboard;
5. RF05 - Após entrar no Dashboard, deve ser possível adicionar novas culturas por
uma modal ao clicar no botão Adicionar;
6. RF06 - Deve ser possível adicionar, editar ou excluir culturas;
7. RF07 - A tela e a modal de Adicionar Culturas devem mostrar os campos: Cultura, Descrição, Data de início da plantação e Localização;
8. RF08 - Cada cultura terá seu próprio Dashboard;
9. RF09 - s cultivares possíveis de se calcular são:

• Milho K9300 PRO3 com temp basal = 10 e graus-dia acumulado = 726;
• Milho K7400 VIP3 com temp basal = 10 e graus-dia acumulado = 790;
• Milho K9105 VIP3 com temp basal = 10 e graus-dia acumulado = 810;
• Milho K7500 VIP3 com temp basal = 10 e graus-dia acumulado = 820.

A escolha destes cultivares se deu devido à disponibilidade de dados referentes
ao graus-dia nos portfólios do fabricante das sementes KWS. Também foram escolhidos pelos diferentes valores de graus-dia, representando cultivares de diferentes ciclos (superprecoce e precoce), permitindo que o usuário utilize cultivares com valores semelhantes, caso necessário.

10. RF10 - O usuário escolhe apenas os cultivares, ou seja, os valores de temperatura
basal e somatório de graus-dia já são guardadas pelo sistema;
11. RF11 - No Dashboard devem ser mostrados para cada Cultura um card do dia de Hoje com a data do dia atual, a média de temperatura do dia atual e a localização da cultura;
12. RF12 - No Dashboard devem ser mostrados para cada Cultura um card do dia de Amanhã com a data do próximo dia, a média de temperatura do próximo dia e a localização da cultura;
13. RF13 - No Dashboard devem ser mostrados para cada Cultura um gráfico contendo o somatório de graus-dia dentro do período da cultura, assim como a previsão de graus-dia até atingir a soma térmica do tipo da planta pré-estabelecido;
14. RF14 - O cálculo de graus-dias deve ser feito com base na temperatura basal da cultura (valor fixo para cada cultura) e a temperatura média diária da localização escolhida, com a fórmula: Graus Dia = Temperatura média - Temperatura basal;
15. RF15 - Para cada dia do gráfico deve ser mostrado a data, sendo representada no eixo X, o resultado do graus-dia acumulado no eixo Y esquerdo e a quantidade de chuva em milímetros no eixo Y direito.
16. RF16 - O resultado de cada dia deve ser somado e ao chegar ao somatório de graus-dia da planta, deve-se mostrar a data fim, sendo essa a data provável final da cultura;


## Telas
1. Tela de Login
![tela-login](https://user-images.githubusercontent.com/30840149/159804554-0b65c823-e334-42de-a30d-3055acad0c53.png)

2. Tela de Cadastro
![image](https://user-images.githubusercontent.com/30840149/155749840-588221ca-85aa-4ccc-b57d-9bfb15f63be3.png)

3. Tela de Dashboard
![dashboard-atualizado2](https://user-images.githubusercontent.com/30840149/159804711-09620082-3138-439e-be87-2816ed5678eb.png)

4. Modal de Adicionar Cultura
![modal-web](https://user-images.githubusercontent.com/30840149/159804852-05cbc6c8-491a-4fd1-98a5-37c5089c0f2e.png)


