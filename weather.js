let waiting = document.querySelector('#waiting')
let result = document.querySelector('#result')

let weatherDescription = document.querySelector('#weatherDescription')
let humidity = document.querySelector('#humidity')
let maxTemp = document.querySelector('#maxTemp')
let minTemp = document.querySelector('#minTemp')
let feelTemp = document.querySelector('#feelTemp')

let weatherImg = document.querySelector('img')
let url = 'https://api.openweathermap.org/data/2.5/weather?q=Hong Kong&lang=zh_tw&units=metric&appid=0cd3852c2724eb4deaa299b977972b46'

fetch(url)
.then(res=> res.json())
.then(data=>{

    //資料來到時才顯示
    waiting.classList.add('hide')
    result.classList.remove('hide')
    
    //更新天氣資料
    weatherDescription.innerText = data.weather[0].description
    humidity.innerText = data.main.humidity
    maxTemp.innerText = data.main.temp_max
    minTemp.innerText = data.main.temp_min
    feelTemp.innerText = data.main.feels_like

    //天氣圖片
    weatherImg.setAttribute('src','http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png')

})
.catch(e=>{
    console.log(e)
})