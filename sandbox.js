let app = document.querySelector('html');
let dog = document.querySelector('#dog');
let x_coord = document.querySelector('#x_coord');
let y_coord = document.querySelector('#y_coord');

app.addEventListener('pointermove',e=>{
	
    x_coord.textContent = e.pageX.toFixed(2);
    y_coord.textContent = e.pageY.toFixed(2);

    setTimeout(()=>{
        dog.setAttribute('style', 'left: '+(e.pageX+10)+'px;top: '+(e.pageY-60)+'px;');
    },500)

});
