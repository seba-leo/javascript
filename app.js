//bucle
    let Question=parseInt(prompt("Ingrese el monto total en pesos"))
    let CCL=100;
    let UsdOf=200;
    let UsdBolsa=300;
    let total=0
    let seguirComprando=true;
    let Question2    


    let Buy=parseInt(prompt("¿A que tipo de cambio queres comprar? 1.CCL - 2.dolar oficial - 3.dolar bolsa"))
    console.log("tenes "+ Question + " pesos")
    console.log("elegiste la opcion  "+Buy)
    while(seguirComprando===true){
    if (Buy===1) {
        let conversion= Question/ CCL;
        alert('el dolar CCL cotiza a ' + CCL +' podes comprar '+ conversion +' dolares')
        total= total +conversion
        console.log("tu compra hasta el momento es  de " + total + " usd CCL")
        } else if(Buy===2){
        let conversion= Question/ UsdOf;
        alert('el dolar oficial cotiza a ' + UsdOf +' podes comprar '+ conversion +' dolares')
        total= total +conversion
        console.log("tu compra hasta el momento  es de " + total +" usd oficial")
        }
        else if(Buy===3)
        {
            let conversion= Question/ UsdBolsa;
            alert('el dolar bolsa cotiza a ' + UsdBolsa +' podes comprar '+ conversion +' dolares')
            total= total +conversion
            console.log("tu compra total es de " + total + " usd bolsa")
        }else {
            console.log("elige un numero del 1 al 3 para realizar la compra")
            alert("elige un numero del 1 al 3 para realizar la compra")
        }
        Question2 = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
        console.log("elegiste la opcion "+Question2)
        if (Question2 === 1 && Buy===1 ) {
            alert("Solo podes comprar CCL")
            Question=parseInt(prompt("Ingrese el monto total en pesos"))
        }else if(Question2 === 1 && Buy===2){
            alert("Solo podes comprar Dolar oficial")
            Question=parseInt(prompt("Ingrese el monto total en pesos"))
        }else if(Question2 === 1 && Buy===3){
            alert("Solo podes comprar Dolar Bolsa");
            Question=parseInt(prompt("Ingrese el monto total en pesos"))
        }
        else if(Question2 === 1){
            Buy=parseInt(prompt("¿A que tipo de cambio queres comprar? 1.CCL - 2.dolar oficial - 3.dolar bolsa"))
        }else if(Question2>=3){
                console.log("ingresa un numero del 1 al 2")
                while(Question2>=3){   
                    alert("ingresa un numero del 1 al 2")
                    Question2 = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No')) 
                    if (Question2===1){
                        Question=parseInt(prompt("Ingrese el monto total en pesos"))
                    }else{ seguirComprando = false
                        alert('tu compra total es de '+total + 'usd');
                        console.log('tu compra total es de '+total + 'usd')}
                }
        } 
        else {
            seguirComprando = false
            alert('tu compra total es de '+total + 'usd');
            console.log('tu compra total es de '+total + 'usd')
            }
        function Impuesto(){
            if (Buy===1 && total >=200 ) {
            let impuesto= (total*30)/100;
            let result= total - impuesto
                alert("la compra de CCL tiene un impuesto de  solidario de "+ impuesto +" usd, por lo que te queda es de "+ result+"usd")
                console.log("la compra de CCL tiene un impuesto solidario de "+ impuesto +" usd, por lo que te queda es de "+ result+"usd" )
            } else if(Buy===2 && total >=200) {
                let impuesto= (total*25)/100;
                let result= total - impuesto
                alert("la compra de dolar oficial tiene un impuesto de  solidario de "+ impuesto +" usd, por lo que te queda es de "+ result+"usd")
                console.log("la compra de dolar oficial tiene un impuesto de solidario "+ impuesto +"usd, por lo que te queda es de "+ result+"usd" )
            }else if(Buy===3 && total >=200){
                let impuesto= (total*15)/100;
                let result= total - impuesto
                alert("la compra de dolar bolsa tiene un impuesto de  solidario de "+ impuesto +" usd, por lo que te queda es de "+ result+"usd")
                console.log("la compra de dolar bolsa tiene un impuesto solidario de "+ impuesto +" usd, por lo que te queda es de "+ result+"usd" )
            }
        }
        
}
Impuesto()

