class despesaGrupo {
    descricao;
    valorPessoa;
    valorTotal;
    numeroPessoas;

    constructor(descricao, valorTotal, numeroPessoas){
        this.descricao = descricao;
        this.valorTotal = Number(valorTotal);
        this.numeroPessoas = Number(numeroPessoas);
        this.valorPessoa = Number(valorTotal) / Number(numeroPessoas);
    }
}

const tabela = document.getElementById("despesasGrupo");

const DespesaGrupo = [
    new despesaGrupo("Netflix", 60, 3),
    new despesaGrupo("Amazon Prime", 20, 2),
    new despesaGrupo("HBO", 30, 2),
];

adicionarDespesa();

function adicionarDespesa() {
    DespesaGrupo.forEach((despesa) => {
        tabela.insertAdjacentHTML(
            "beforeend",
            `
            <div class="cabecalho">
                <div>${despesa.descricao}</div>
                <div>${despesa.valorPessoa}</div>
                <div>${despesa.valorTotal}</div>
            </div>
            `            
        );
    });
}