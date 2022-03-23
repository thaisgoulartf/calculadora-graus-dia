# Calculadora de Graus dia
O sistema Calculadora de Graus dia pretende auxiliar agricultores e agrônomos a tomarem melhores decisões no cultivo de suas plantações de acordo com a técnica chamada Graus-dia.
Graus-dia: É possível obter o total de graus-dia subtraindo a temperatura base, que é específica de cada planta, da temperatura média diária do ambiente em que ela é cultivada. Essa diferença é a quantidade de calor de fato acumulada durante o dia, sendo considerada promissora ao crescimento e desenvolvimento
da planta. Após se obter esse valor a cada dia, deve-se ir somando durante todos os dias da duração do plantio, esse somatório é chamado de somatório graus-dia, também sendo específico para cada planta.

Obs: Por enquanto é possível acompanhar 4 cultivares do Milho.

## Regras

### `Requisitos Funcionais`

1. RF01 - O sistema deve permitir login pelo Google ou se cadastrar pelo sistema;
2. RF02 - O sistema deve possibilitar a verificação por e-mail do cadastro de usuário;
3. RF03 - Ao acessar o sistema pela primeira vez, ou seja, sem nunca ter adicionado
cultura antes, deve-se mostrar a tela de Adicionar cultura;
4. RF04 - Após adicionar cultura deve ser mostrado a cultura no dashboard;
5. RF05 - Após entrar no Dashboard, deve ser possível adicionar novas culturas por
uma modal ao clicar no botão Adicionar;
6. RF06 - Deve ser possível excluir ou editar culturas já existentes;
7. RF07 - A tela e a modal de Adicionar Culturas devem mostrar os campos: Cultura
(combobox), Descrição (texto livre), Data de início da plantação (data) e Localização
(campo localização autocomplete);
8. RF08 - Cada cultura terá seu próprio Dashboard;
9. RF09 - As culturas possíveis de se calcular são:
• Milho K9300 PRO3 com temp basal = 10 e graus-dia acumulado = 726;
• Milho K7400 VIP3 com temp basal = 10 e graus-dia acumulado = 790;
• Milho K9105 VIP3 com temp basal = 10 e graus-dia acumulado = 810;
• Milho K7500 VIP3 com temp basal = 10 e graus-dia acumulado = 820.

10. RF10 - O usuário escolhe apenas as culturas, os valores de temperatura basal e
somatório graus dia já são guardadas pelo sistema.
11. RF11 - No Dashboard devem ser mostrados para cada Cultura:
• Um card do dia de Hoje com a data do dia atual, a média de temperatura do
dia atual e a localização da cultura.
• Um card do dia de Amanhã com a data do próximo dia, a média de temperatura
do próximo dia e a localização da cultura.
• Um gráfico contendo:
– O somatório de graus dia dentro do período da cultura, assim como a
previsão de graus dia para os próximos 15 dias;
– Curva de crescimento com base no cálculo de graus dias.
– O cálculo de graus dias é feito com base na temperatura basal da cultura
(valor fixo para cada cultura) e a temperatura média diária com a fórmula:
Graus Dia = Temperatura média - Temperatura basal.
– Cada cultura tem um somatório de GD específico já fixo para cada cultura.
Ex: Milho K9300 PRO3 tem GD de 900.
– Para cada dia a partir da data de início, deve-se obter a temperatura média
da localização escolhida e subtrair a temperatura basal da cultura, que é
um valor fixo. O resultado de cada dia deve ser somado e ao chegar ao GD
desejado deve se mostrar o dia, sendo essa a data provável final da cultura.
– Com base nisso, o gráfico deve mostrar: Data início preenchida pelo usuário
e data fim com provável data fim da cultura calculada pelo sistema. Para
cada dia do gráfico deve ser mostrado a data, a temperatura média do dia, o
resultado do graus dias acumulado e a quantidade de chuva em milímetros.

### `Requisitos Não Funcionais`

1. RNF01 - O sistema deve rodar nos navegadores Google Chrome e Mozilla Firefox;
2. RNF02 - O sistema deve ser responsivo para mobile;
3. RNF03 - O sistema deve ser implementado utilizando o ambiente de desenvolvimento
Visual Studio Code;
4. RNF04 - O sistema deve utilizar o banco de dados Firebase;


## Telas
1. Tela de Login
![image](https://user-images.githubusercontent.com/30840149/155749718-9316e594-e73c-4ff1-9401-573d758fb917.png)

2. Tela de Cadastro
![image](https://user-images.githubusercontent.com/30840149/155749840-588221ca-85aa-4ccc-b57d-9bfb15f63be3.png)

3. Tela de Dashboard
![image](https://user-images.githubusercontent.com/30840149/155749942-0849212e-20cc-4993-99b0-b323adef4fb6.png)

4. Modal de Adicionar Cultura
![image](https://user-images.githubusercontent.com/30840149/155750012-d2a29d64-f9e8-4a3b-a3d6-eb2c544c16cd.png)
