export default class Parcelador {
    private valor: number
    private quantidadeParcelas: number
    constructor(valor: number, quantidadeParcelas: number) {
        this.valor = valor
        this.quantidadeParcelas = quantidadeParcelas
    }

    private ajustarParcelas(valor: number, parcelas: number[]): number[] {
        let somaParcelas = 0
        for (let i = 0; i < parcelas.length; i++) {
            somaParcelas = somaParcelas + parcelas[i];
        }
        if (somaParcelas < valor || somaParcelas > valor) {
            let diferenca = valor - somaParcelas
            let arredonamento = Number(diferenca.toFixed(2))
            parcelas[0] = Number((parcelas[0] + arredonamento).toFixed(2))
        }
        return parcelas

    }

    public obterParcelas(): number[] {
        let parcela = this.valor / this.quantidadeParcelas
        parcela = Number(parcela.toFixed(2))
        let parcelas: number[] = []
        for (let i = 0; i < this.quantidadeParcelas; i++) {
            parcelas[i] = parcela
        }
        return this.ajustarParcelas(this.valor, parcelas)
    }
}