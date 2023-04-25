let citta = document.querySelector('#city')
let bottone = document.querySelector('#bottone')
let container = document.querySelector('#container-meteo')
let containerIcona = document.querySelector('#container-icona')

bottone.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citta.value}&appid=5ce54222dc307d3c4a21c765092a506d`)
    .then((response) => response.json())
    .then((data) => {
    let temp = parseInt(data.main.temp - 273,15)
    let tempMax = parseInt(data.main.temp_max - 273,15)
    let tempMin = parseInt(data.main.temp_min - 273,15)
    let meteo = data.weather[0].main
    let subMeteo = data.weather[0].description
    let name = data.name

    

    if(meteo == 'Rain'){
        containerIcona.innerHTML = ''
        containerIcona.innerHTML = '<i class="fa-solid fa-cloud-rain icon-custom" style= "color:blue"></i>'
        createCardTemp(name, meteo, subMeteo, temp, tempMax, tempMin)
        
    }else if(meteo == 'Clouds'){
        containerIcona.innerHTML = ''
        containerIcona.innerHTML = '<i class="fa-solid fa-cloud icon-custom" style= "color:grey"></i>'
        createCardTemp(name, meteo, subMeteo, temp, tempMax, tempMin)
        
    }else if(meteo == 'Clear'){
        containerIcona.innerHTML = ''
        containerIcona.innerHTML = '<i class="fa-solid fa-sun icon-custom" style= "color:yellow"></i>'
        createCardTemp(name, meteo, subMeteo, temp, tempMax, tempMin)
        
    }else if(meteo == 'Drizzle'){
        containerIcona.innerHTML = ''
        containerIcona.innerHTML = '<i class="fa-solid fa-cloud-rain icon-custom" style= "color:grey"></i>'
        createCardTemp(name, meteo, subMeteo, temp, tempMax, tempMin)
        
    }else{
        createCardTemp(name, meteo, subMeteo, temp, tempMax, tempMin)
    }
})
})


    function createCardTemp(name, meteo, subMeteo, temp, temp_max, temp_min) {
        container.innerHTML = ''
        let containerDinamico = document.createElement('div')
        containerDinamico.classList.add('meteoDinamico')
        containerDinamico.innerHTML = `
        <h1>${name}</h1>
        <h2>${meteo}</h2>
        <h3>${subMeteo}</h3>
        <h3>temperatura: ${temp}°</h3>
        <h3>massima: ${temp_max}° minima: ${temp_min}°</h3>
    `
    container.appendChild(containerDinamico)
    }

    function createIcon(){
        containerIcona.innerHTML = ''
        let span = document.createElement('span')
        span.innerHTML = ``
        container.appendChild(containerIcona)
    }
