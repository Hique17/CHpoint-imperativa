
const consertos = require('./consertos');
console.log `Aparelhos prontos e seus valores`
consertos.forEach(conserto => {if
    
    (conserto.pronto === true) {totalValor = 0;

    conserto.valores.forEach(valor => {totalValor += valor})

    console.log(`Aparelho: ${conserto.aparelho} 
    itensConsertados:
    * ${conserto.itensConsertados[0]},
    * ${conserto.itensConsertados[1]},    
    * ${conserto.itensConsertados[2]},
    valor total: R$ ${totalValor}
    `)



}

})

// aparelhos prontos e não prontos
const prontos = consertos.filter((entrega)=> {return entrega.pronto})

console.log(prontos);

const nãoProntos = consertos.filter(conserto => conserto.pronto === false);

console.log(nãoProntos);













