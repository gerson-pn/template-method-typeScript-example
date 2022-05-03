import Processamento from "./processamento";

export default class ProcessamentoTxt extends Processamento {
    protected separarDados(): void {
        let dados = this.arquivo.split("\r\n")
        let nome = dados[0].split(' = ')[1]
        let valor = dados[1].split(' = ')[1]
        let desconto = dados[2].split(' = ')[1]
        let quantidadeParcelas = dados[3].split(' = ')[1]
        this.dadosSeparados = [nome, valor, desconto, quantidadeParcelas]
    }
}