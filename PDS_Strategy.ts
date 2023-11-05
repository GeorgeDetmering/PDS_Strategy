// Interface Strategy com o método execute.
interface Strategy {
    execute(a: number, b: number): number;
  }
  
  // Classe concreta que implementa a Strategy para realizar a operação de Soma.
  class SomaStrategy implements Strategy {
    execute(a: number, b: number): number {
      return a + b;
    }
  }
  
  // Classe concreta que implementa a Strategy para realizar a operação de Subtração.
  class SubtracaoStrategy implements Strategy {
    execute(a: number, b: number): number {
      return a - b;
    }
  }
  
  // Classe concreta que implementa a Strategy para realizar a operação de Multiplicação.
  class MultiplicacaoStrategy implements Strategy {
    execute(a: number, b: number): number {
      return a * b;
    }
  }
  
  // Função para receber o input do usuário e escolher a Strategy apropriada.
  function calcular(): void {
    const inputA = parseInt(prompt('Digite o primeiro número:'));
    const inputB = parseInt(prompt('Digite o segundo número:'));
    const operacao = prompt('Digite a operação (+ para soma, - para subtração, * para multiplicação):');
  
    let strategy: Strategy;
  
    switch (operacao) {
      case '+':
        strategy = new SomaStrategy();
        break;
      case '-':
        strategy = new SubtracaoStrategy();
        break;
      case '*':
        strategy = new MultiplicacaoStrategy();
        break;
      default:
        console.log('Operação inválida');
        return;
    }
  
    const resultado = strategy.execute(inputA, inputB);
    console.log(`Resultado da operação: ${resultado}`);
  }
  
  // Chame a função para executar a calculadora.
  calcular();
  