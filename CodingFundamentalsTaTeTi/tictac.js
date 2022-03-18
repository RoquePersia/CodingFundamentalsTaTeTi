class Jugador{

    static datosJugador1(){
        if(document.querySelector('#texto_1').value == "")player1_name ="Jugador 1" //Si el jugador no ingresa un nombre se pone este por defecto
        else player1_name = document.querySelector('.set_player_1 #texto_1').value;
        document.querySelector(".player_1 #nombre_1").innerHTML = player1_name+" :";
        document.querySelector(".player_1 #puntaje_1").innerHTML = player1_points;
        document.querySelector('#texto_1').disabled = true;
        document.querySelector('#boton_1').disabled = true;
        desbloquear (choose);
    }


    static  datosJugador2(){
        if(document.querySelector('#texto_2').value == "")player2_name ="Jugador 2"
        else player2_name = document.querySelector('.set_player_2 #texto_2').value;
        document.querySelector(".player_2 #nombre_2").innerHTML = player2_name+"  :";
        document.querySelector(".player_2 #puntaje_2").innerHTML = player2_points;
        document.querySelector('#texto_2').disabled = true;
        document.querySelector('#boton_2').disabled = true;
        desbloquear (choose);
    }

    static elegirColor(obj){
        document.querySelectorAll('.choose button').forEach(
            function(obj,pos){
                obj.addEventListener('click',()=>{
                    if(player1_color == "zero"){
                        player1_color = obj.getAttribute("class"); //tomo la clase que le da color al botón apretado y se la asigno al jugador 1 (Por eso es importante que se ingresen en orden)
                        document.querySelector("#texto_2").disabled = false; //habilito las casillas del jugador 2
                        document.querySelector("#boton_2").disabled = false;
                    } else {
                        player2_color = obj.getAttribute("class");
                        desbloquear (tateti)
                        document.getElementById("ganador").innerHTML = "Juego en curso..."
                    }
                    obj.setAttribute("style","visibility: hidden")
                    bloquear(choose)
                })
            }
        )
    }

}


let turno = 0 ;
let gato = [];
let tateti = document.querySelectorAll('.board button');
let choose = document.querySelectorAll('.choose button');
let player1_name;
let player2_name;
let player1_points = 0;
let player2_points = 0;
let player1_color = "zero";
let player2_color = "zero";
let imagen = "";

// TODO: (Roque) El juego ya es completamente funcional, pero hay que estilizarlo un montón:
//     - Es necesaria una clase "jugador" que organice todas las declaraciones de eventos que se hacen abajo. En definitiva, acomodar el código
//     - El front es un horror, no hice casi nada de eso y me puse a pensar en la lógica porque mucho, no sé. Si ustedes pueden sería lo más importante, dejarlo presentable. 
//     - Los eventos habría que ponerlos en funciones con nombres que los hagan legibles

//Se bloquean los campos del jugador 2 para ingresar ordenados los datos
document.querySelector("#texto_2").disabled = true;
document.querySelector("#boton_2").disabled = true;
document.getElementById("reset").addEventListener("click",()=>{
    location.reload(); //esta propiedad refresca la página, sirve para setear todas las variables y comenzar de nuevo
})



//se setean los eventos para botón "enviar" del jugador 1
document.getElementById('boton_1').addEventListener('click',()=>{
    Jugador.datosJugador1()
    Jugador.elegirColor()

})

//se setean los eventos para botón "enviar" del jugador 2
document.getElementById('boton_2').addEventListener('click',()=>{
    Jugador.datosJugador2()
    Jugador.elegirColor()
})

// Esto sucede cuando damos "Reiniciar juego"
document.getElementById("restart").addEventListener('click',() => {
    tateti.forEach(function(obj,pos){
        obj.innerHTML=""
        obj.removeAttribute("class"); //quitamos la clase a todos los botones, para que vuelvan a ser color blanco
        obj.setAttribute("data-press",'0'); //seteamos todo a 0, para que se desbloqueen las teclas
        obj.disabled = false;
        turno = 0;
        gato = [];
        document.getElementById("ganador").innerHTML = "Juego en curso..."
    })

})

//Esto sucede cuando elegimos un color:
//Jugador.elegirColor()

const btnPulse = (event,pos) =>{    /* evento que se acciona o detona */
    const btn = event.target;
    if(btn.getAttribute("data-press") !== "0"){return;} //para evitar cambiar el color de una casilla ya pulsada chequeo siempre esta condición
    turno ++;
    const color = turno % 2 ? player1_color:player2_color; //ya no se asignan colores, sino clases, es útil para cambiar los colores del backround por imágenes y no modificar código
    imagen = turno % 2 ? "https://cdn-icons-png.flaticon.com/512/109/109602.png":"http://pngimg.com/uploads/letter_o/letter_o_PNG116.png"
    btn.innerHTML= "<img src=" + imagen + " height=100 width=100/>";
    btn.setAttribute("class", color );
    btn.setAttribute("data-press","1");
    gato[pos] = color;
    if(ganar()) {
        if ((turno % 2) == 1){ //la condición analiza el turno esta vez
             document.getElementById("ganador").innerHTML = player1_name + ' ha ganado'
             player1_points++;
             document.querySelector(".player_1 #puntaje_1").innerHTML = player1_points;
        } else {
             document.getElementById("ganador").innerHTML = player2_name + ' ha ganado'
             player2_points++;
             document.querySelector(".player_2 #puntaje_2").innerHTML = player2_points;
        }
        
        bloquear(tateti); // al terminar cada partida se bloquea el tablero
    } else {
        if(turno==9){ //si ya se pulsó 9 veces y no se ingresó a "ganar" hubo empate
            document.getElementById("ganador").innerHTML = "Empate"
            player1_points+=0.5;
            player2_points+=0.5;
            document.querySelector(".player_1 #puntaje_1").innerHTML = player1_points;
            document.querySelector(".player_2 #puntaje_2").innerHTML = player2_points;
            bloquear(tateti);
        }
    }
}




tateti.forEach(    /*Nodelist static para iterar(foreach) */
    function(obj,pos){
        obj.addEventListener('click', (e) => btnPulse(e,pos))/* Detecta el pulso del buton */
    })



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

const bloquear = (some) => {
    some.forEach(function(obj,pos){
        obj.disabled = true;
    })
}

const desbloquear = (some) => {
    some.forEach(function(obj,pos){
        obj.disabled = false;
    })
}

bloquear(choose); //al inicio se bloquean tanto los colores a seleccionar como el tablero, para no disparar los eventos
bloquear(tateti)