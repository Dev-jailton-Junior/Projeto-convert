const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.6
    const bitcoinToday = 131.443


    if (currencySelect.value == "dolar") {
        //se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        //se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value =="libra"){
        //se o select estiver selecionado o valor libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin"){
        //se o valor selecionado for bitcoin, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src="./assets/euro.png"
    }
    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src="./assets/libra 1.png"
    }
    if(currencySelect.value =="bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src="./assets/bitcoin 1.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues)