# Desafio Classificador de Nível de Herói

## Descrição do Desafio

Neste projeto, implementei uma lógica que classifica heróis com base em sua experiência (XP).
Dependendo do valor de XP, o herói receberá uma classificação de nível. 
O objetivo é praticar conceitos básicos de programação, como variáveis, operadores, laços de repetição e estruturas de decisão.

## Tecnologias Utilizadas

- **JavaScript** (executado via Node.js)
- Estruturas de controle (if-else)
- Laços de repetição (`forEach`)
- Arrays

## Estrutura do Código

O código possui uma função `classificarHeroi` que classifica o nível de um herói com base na quantidade de XP. A lógica de classificação é baseada nas seguintes faixas de XP:

- **XP < 1000**: Nível Ferro
- **1001 <= XP <= 2000**: Nível Bronze
- **2001 <= XP <= 5000**: Nível Prata
- **5001 <= XP <= 7000**: Nível Ouro
- **7001 <= XP <= 8000**: Nível Platina
- **8001 <= XP <= 9000**: Nível Ascendente
- **9001 <= XP <= 10000**: Nível Imortal
- **XP >= 10001**: Nível Radiante

### Exemplo de Saída

Para um herói com XP 7143, a saída será:

```
O Herói de nome Skye está no nível de Platina
```

## Como Executar o Projeto

1. **Pré-requisitos:**
   - Certifique-se de ter o Node.js instalado em sua máquina. Caso não tenha, você pode baixá-lo [aqui](https://nodejs.org/).

2. **Clone o Repositório:**
   ```
   git clone [https://github.comLuTymos/Desafio-Classificador-de-nivel-de-Heroi/](https://github.com/LuTymos/Desafio-Classificador-de-nivel-de-Heroi.git)
   ```

3. **Navegue até o Diretório do Projeto:**
   ```
   cd Desafio-Classificador-de-nivel-de-Heroi
   ```

4. **Execute o Código:**
   No terminal, execute o seguinte comando:
   ```
   node desafio.js
   ```

5. **Resultado Esperado:**
   O terminal exibirá as mensagens correspondentes ao nível de cada herói, conforme seu XP.

 
 Nota: Este projeto foi desenvolvido com fins educacionais para praticar conceitos básicos de programação em JavaScript.
