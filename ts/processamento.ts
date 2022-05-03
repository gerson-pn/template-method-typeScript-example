import { readFileSync } from "fs";
import path from "path";
import Parcelador from "./parcelador";

export default abstract class Processamento {
    protected nomeArquivo: string
    protected arquivo!: string
    protected dadosSeparados!: string[]

    constructor(nomeArquivo: string) {
        this.nomeArquivo = nomeArquivo
    }

    protected abriArquivo(): void {
        let diretorioExecucao = path.basename(__dirname)
        let caminhoAbsoluto = __dirname
        let diretorioArquivos = caminhoAbsoluto.replace(diretorioExecucao, 'arquivos')
        let caminhoArquivo = path.join(diretorioArquivos, this.nomeArquivo)
        this.arquivo = readFileSync(caminhoArquivo, 'ascii');
    }

    protected abstract separarDados(): void
    
    protected processarDados(): void {
        console.log(`Produto: ${this.dadosSeparados[0]}`)
        console.log(`Valor: ${this.dadosSeparados[1]}`)
        console.log(`Desconto: ${this.dadosSeparados[2]}`)
        console.log(`Parcelamento: ${this.dadosSeparados[3]}`)

        let valor = Number(this.dadosSeparados[1])
        let desconto = Number(this.dadosSeparados[2])
        valor = Number((valor - desconto).toFixed(2))
        console.log(`Valor com desconto: ${valor}`);

        let quantidadeParcelas = Number(this.dadosSeparados[3])
        let parcelador = new Parcelador(valor, quantidadeParcelas)
        let parcelas = parcelador.obterParcelas()
        console.log(`Valores das parcelas: ${parcelas}`);
    }

    public fazerProcessamento(): void {
        this.abriArquivo()
        this.separarDados()
        this.processarDados()
    }
}