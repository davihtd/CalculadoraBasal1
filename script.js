const CALCULAR = document.getElementById('calcular')
const ERROR = document.getElementById('error')
const DIA = document.getElementById('dia')
const FLU = document.getElementById('flu')
const MAN = document.getElementById('man')

CALCULAR.addEventListener('click', calcular)

function calcular() {
    const DATO = document.getElementById('peso').value
    if (DATO > 0) {
        ERROR.style.display = 'none'
        let flujo = calcularFlujo(DATO)
        let mantenimiento = flujo * 1.5
        DIA.innerHTML = 'Diario: ' + flujo.toFixed(2) + 'cc'
        FLU.innerHTML = 'Flujo: ' + (flujo / 24).toFixed(3) + 'cc/hr'
        MAN.innerHTML = 'Mantenimiento: ' + mantenimiento.toFixed(2) + ' cc/hr'
        DIA.style.display = 'block'
        FLU.style.display = 'block'
        MAN.style.display = 'block'
    }
    else {
        ERROR.style.display = 'block'
        FLU.style.display = 'none'
        MAN.style.display = 'none'
    }
}

function calcularFlujo(peso) {
    let resultado = 0

    if (peso <= 10) {
        resultado = peso * 100
        return resultado
    }
    if (peso > 10 && peso <= 20) {
        resultado = 1000 + (resultado + ((peso - 10) * 50))
        return resultado
    }
    if (peso > 20 && peso <= 30) {
        resultado = 1500 + (resultado + ((peso - 20) * 20))
        return resultado
    } if (peso > 30) {
        return superficie(peso)
    }
}
function superficie(valor) {
    resultado = (((valor * 4) + 7) / (valor + 90))
    return resultado
}