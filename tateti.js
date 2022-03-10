let divsSaludo = document.getElementsByClassName("vacio") //Devuelve una Collection


        // console.log(divsSaludo)
        // console.log(divsSaludo[0])
        // divsSaludo[0].onclick = function(){
        //     alert("Hola")
        // }
        // divsSaludo[1].onclick = function(){
        //     alert("Hola")
        // }
        // Es lo mismo que hacer lo de abajo

        // for(var i = 0; i<divsSaludo.length;i++){
        //     divsSaludo[i].onclick = function(){
        //         alert("Hola")
        //         console.log(divsSaludo[i])
        //         console.log(i)
        //         divsSaludo[i].className = "saludo-presionado"
        //     }
        // }
        // for(let i = 0; i<divsSaludo.length;i++){
        //     let div = divsSaludo[i]
        //     div.onclick = function(){
        //         //alert("Hola")
        //         // console.log(divsSaludo[i])
        //         // console.log(i)
        //         div.className = "saludo saludo-presionado"
        //         //div.classList.add("saludo-presionado")
        //         console.log(divsSaludo)
        //     }
        // }
        let matriz = []
        let otraMatriz = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
        let h = 0;
        let boolean;

        let first = prompt (`Elije "O" o "X"`)
        let second
        if (first == "O"){
            second = "X"
            boolean = false
        } else {
            second = "O"
            boolean = true
        }
        
        // function addEvento (){
        //             //alert("Hola")
        //             // console.log(divsSaludo[i])
        //             // console.log(i)
        //             if (boolean){
        //                 div.className = "vacio letraX"
        //                 div.innerHTML = "X"
        //                 boolean = false
        //                 otraMatriz[i][j] = 1
        //                 console.log (i+" "+j)
        //             } else {
        //                 div.className = "vacio letraO"
        //                 div.innerHTML = "O"
        //                 boolean = true
        //                 console.log (i+" "+j)
        //                 otraMatriz[i][j] = -1
        //                 console.log (otraMatriz[0][0]+otraMatriz[0][1]+otraMatriz[0][2])
        //                 console.log (otraMatriz)
        //             }
        let contador = 1
        let numero
        let final = 0
        function sumarDiagonales(){
            if ((otraMatriz[0][0]+otraMatriz[1][1]+otraMatriz[2][2])==3||(otraMatriz[0][2]+otraMatriz[1][1]+otraMatriz[2][0])==3){
                return 3
            } else if ((otraMatriz[0][0]+otraMatriz[1][1]+otraMatriz[2][2])==-3||(otraMatriz[0][2]+otraMatriz[1][1]+otraMatriz[2][0])==-3) {
                return -3
            } else {
                return 0
            }
            }



        function sumarFilasColumnas (){
        let sumaf
        let sumac
        let sumad
        for (let i=0;i<3;i++){
            sumaf=0
            sumac=0
            for (let j=0;j<3;j++){
            sumaf+=otraMatriz[i][j]
            sumac+=otraMatriz[j][i]
            
            }
            if ((sumaf==3)||(sumaf==-3)){
            return sumaf
            } else if ((sumac==3)||(sumac==-3)){
            return sumac
            }
        }
        return sumarDiagonales()
        }
        function analize(){
            if ((final!=3)&&(final!=-3)&&(contador<10)){
        //   numero = prompt("1 o -1")
        //   fila = prompt ("fila")-1
        //   columna = prompt ("columna")-1
        //   numero = parseInt (numero)
        //   fila = parseInt (fila)
        //   columna = parseInt (columna)
        //   matriz [fila][columna] = numero
          
          final = sumarFilasColumnas()
          //alert (final)
          contador++
        }
        
        if (final==-3){
          console.log("Ganó la O")
        } else if (final==3){
          console.log("Ganó la X")
        } else {
          console.log ("Tibio empate")
        }

        }

        for(let i = 0; i<3;i++){
            let columnas = []
            for (let j = 0; j<3;j++){
                let div = divsSaludo[h]
                if (h < 9) {
                    h++
                }
                
                
                    
                    //div.addEventListener ("click",addEvento(),true)
                    //div.removeAttribute("onclick")
                    //div.classList.add("saludo-presionado")
                    
                //}

                div.onclick = function(){
                    //alert("Hola")
                    // console.log(divsSaludo[i])
                    // console.log(i)
                    if (boolean){
                        div.onclick = div.className = "letraO"
                        div.innerHTML = "X"
                        boolean = false
                        otraMatriz[i][j] = 1
                        console.log (otraMatriz)
                       
                    } else {
                        div.onclick = div.className = "letraX"
                        div.innerHTML = "O"
                        boolean = true
                        otraMatriz[i][j] = -1
                        //console.log (otraMatriz[0][0]+otraMatriz[0][1]+otraMatriz[0][2])
                        console.log (otraMatriz)
                        
                    }
                    console.log (sumarFilasColumnas())
                    analize (sumarFilasColumnas())
                    // div.onclick = div.className = "vacio prueba"
                //     //div.removeAttribute("onclick")
                //     //div.classList.add("saludo-presionado")
                    
                 }
                columnas[j] = div
                
            }
            matriz [i] = columnas
        }