// Função de multiplicação
function multiplicar(a: number, b: number): number {
    return a * b;
    }
    
  // Função de saudação
    function saudacao(nome: string): string {
    return "Olá " + nome;
    }
    
  // Exemplos de uso
    const resultadoMultiplicacao = multiplicar(5, 3);
    const saudacaoMensagem = saudacao("Carlos");
    
  console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`); // Resultado da multiplicação: 15
  console.log(saudacaoMensagem); // Olá Carlos