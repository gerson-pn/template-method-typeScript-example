import Processamento from "./processamento";

export default class ProcessamentoJson extends Processamento {
    protected separarDados(): void {
        let dados = JSON.parse(this.arquivo)
        let nome = dados['nomeProduto']
        let valor = dados['valorProduto']
        let desconto = dados['valorDesconto']
        let quantidadeParcelas = dados['quantidadeParcelas']
        this.dadosSeparados = [nome, valor, desconto, quantidadeParcelas]
    }
}