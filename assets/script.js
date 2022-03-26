const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milisegundos = document.getElementById('milisegundos');
const botoes = document.getElementById('botoes');
let mili = 0;
let sec = 0;
let min = 0


function botao(btn){

    const idbtn = btn.value; 
    console.log(idbtn);

      const relogio = setInterval(function cronometro(){
            mili++
            milisegundos.textContent = mili
            if (mili == 99){
                mili = 0;
                sec++
                segundos.textContent = sec
            }
            if(sec == 59){
                sec = 0;
                min++;
                minutos.textContent = min;
            }
        },10)
    

    if(idbtn == 'Iniciar'){
        botao();
    } else if(idbtn == 'Parar'){
        clearInterval(relogio);
    } else if(idbtn == 'Zerar'){
        clearInterval(relogio);
    mili = 0;
    sec = 0;
    min = 0
    milisegundos.textContent = mili
    segundos.textContent = sec
    minutos.textContent = min;
    } else{
        alert('Algo de errado aconteceu, sentimos muito pelo ocorrido!')
    }

}
