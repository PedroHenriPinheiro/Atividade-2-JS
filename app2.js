var peso = prompt(`Digite seu peso, não minta!`)

if (peso > 0 && peso <= 16.9) {
    console.log(`Rapaz ta muito, baixo vamo dar uma comidinha!`)
}
else if (peso > 16.9 && peso <= 18.4) {
    console.log(`Ta um pouco abaixo do peso`)
}
else if (peso > 18.4 && peso <= 24.9) {
    console.log(`Peso normal, show de bola`)
}
else if (peso > 24.9 && peso <= 29.9) {
    console.log(`Acima do peso, ta dando uma engordadinha`)
}
else if (peso > 29.9 && peso <= 34.9) {
    console.log(`Rapaz... Obesidade tipo 1`)
}
else if (peso > 34.9 && peso <= 40) {
    console.log(`Meu fi... Obesidade do tipo 2, vc ta ficando louco?`)
}
else if (peso > 40) {
    console.log(`Obesidade tipo 3, contagem regrassiva para o infarto 3... 2... 1... POU`)
}
else {
    console.log(`Voce não existe`)
}