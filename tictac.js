let turno = 0 ;
const gato = [];

const btnPulse = (event,pos) =>{    /* evento que se acciona o detona */
    turno ++;
    const btn = event.target;
    const color = turno % 2 ? 'red':'Green'; /* TODO:   Operador Condicional Ternario */
    btn.style.backgroundColor =   color;
    gato[pos] = color;
    if(ganar())alert('The player '+color+' has won')
    
    /* TODO: ARREGLAR  VACIAR COLORES DE LOS BOTONES*/
    if(ganar()){
        btn.style.backgroundColor =   'white';
    }
}

document.querySelectorAll('button').forEach(    /*Nodelist static para iterar(foreach) */
    (obj,pos) => obj.addEventListener('click', (e) => btnPulse(event,pos))) /* Detecta el pulso del buton */
  //btn2,position 

const ganar = () =>{
    if(gato[0] == gato[1] && gato[0] == gato[2] && gato[0]){
        return true;
    }else if(gato[3] == gato[4] && gato[3] == gato[5] && gato[3]){
        return true;
    }else if(gato[6] == gato[7] && gato[6] == gato[8] && gato[6]){
        return true;
    }else if(gato[0] == gato[3] && gato[0] == gato[6] && gato[0]){
        return true;
    }else if(gato[1] == gato[4] && gato[1] == gato[7] && gato[1]){
        return true;
    }else if(gato[2] == gato[5] && gato[2] == gato[8] && gato[2]){
        return true;
    }else if(gato[0] == gato[4] && gato[0] == gato[8] && gato[0]){
        return true;
    }else if(gato[2] == gato[4] && gato[2] == gato[6] && gato[2]){
        return true;
    }
}