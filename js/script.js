const carregamento = document.querySelector(".carregamento");
const imagem = document.querySelector(".imagem");

let inicioCarregamento = 0;


let int = setInterval(desfoque, 30)

function desfoque() {
    inicioCarregamento++
    
    if(inicioCarregamento > 99){
        clearInterval(int)
    }

    carregamento.innerText = `${inicioCarregamento}%`
    carregamento.style.opacity = scale(inicioCarregamento, 0, 100, 1, 0)
    imagem.style.filter = `blur(${scale(inicioCarregamento, 0, 100, 50, 0)}px)`
}

// For reference: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// const desfoque = () => {
//     desfoque++;
//     if(inicioCarregamento > 99) clearInterval(int);
//     carregamento.innerText = `${inicioCarregamento}%`;
//     carregamento.style.opacity = scale(inicioCarregamento, 0, 100, 1, 0);
//     imagem.style.filter = `blur(${scale(inicioCarregamento, 0, 100, 30, 0)}px)`
// };



//   let int = setInterval(desfoque, 30);