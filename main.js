    // Array de objetos com nome e nota dos alunos
    const alunos = [
        { nome: 'Ana', nota: 8 },
        { nome: 'Carlos', nota: 5 },
        { nome: 'Bianca', nota: 7 },
        { nome: 'Daniel', nota: 4 },
        { nome: 'Eduarda', nota: 6 },
        { nome: 'Felipe', nota: 9 }
        ];
        
    // Função para filtrar alunos com nota maior ou igual a 6
        function filtrarAprovados(alunos) {
        return alunos.filter(aluno => aluno.nota >= 6);
        }
        
    // Usando a função para obter os alunos aprovados
        const alunosAprovados = filtrarAprovados(alunos);
        
    // Mostrando os alunos aprovados
        console.log(alunosAprovados);
