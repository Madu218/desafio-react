const l = [
    {id: 1, nome: 'Ana', nota: 9.2},
    {id: 2, nome: 'Bia', nota: 8.2},
    {id: 3, nome: 'Carlos', nota: 7.2},
]

const p = l.map((i) => `${i.nome} tirou ${i.nota}`);
console.log(p);