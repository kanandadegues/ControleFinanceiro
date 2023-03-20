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
};

const tabela = document.getElementById("despesasGrupo");

const DespesaGrupo = [];

const titleElement = document.getElementById("title-input");
const participantsElement = document.getElementById("participants-input");
const amountElement = document.getElementById("amount-input");

function atualizarDespesas() {
    const despesa = DespesaGrupo[DespesaGrupo.length - 1];
        
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
};

function adicionarDespesaGrupo() {
    DespesaGrupo.push(
        new despesaGrupo(
            titleElement.value,
            participantsElement.value,
            amountElement.value,
        )
    );

    atualizarDespesas();

    titleElement.value = "";
    participantsElement.value = "";
    amountElement.value = "";

    alert("Despesa adicionada com sucesso!")

};