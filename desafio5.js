const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]
function encontrarFuncionarioPorID(i){
    const str=i.toString().split('')[0];
    const acs=departamentos.find((a)=>a.id==str);
    const achar=acs.funcionarios.find((b)=>b.id===i);
    achar!==undefined? console.log(`Funcionário encontrado (ID ${i})`,'\n',achar):console.log('ID inexistente');
}
encontrarFuncionarioPorID(202);