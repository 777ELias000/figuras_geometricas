let figura = prompt("Que area de figura deseas calcular:\n1)Rectangulo, \n2)Circulo, \n3)Triangulo, \n4)Paralelogramo ,\n5)Cuadrado,\n6)Rombo , \n7)Cometa,\n8)Trapecio");

//poner variables
let base;
let altura;
let radio;
let base1;
let base2;
let diagonal_a;
let diagonal_b;
// un control de evaluacion
switch(figura){
    case "1":

        base=prompt("Cuanto tienes de base ")
        altura=prompt("Cuanto tienes de altura ")
        document.write(`Tu area del rectangulo es ${base*altura} cm`)
    break
    case "2":
        radio=prompt("Cuanto tiene de radio")
        //Math 
        document.write(`El area de tu circulo es ${Math.PI*Math.pow(radio,2)} cm`)
    break
    case "3":
        base = prompt("Cuanto tienes de base")
        altura=prompt("Cuanto tienes de altura")
        document.write(`El area del triangulo: ${base*altura /2}cm`)
    break
    case"4":
        base = prompt("Cuanto tienes de base")
        altura=prompt("Cuanto tienes de altura")
        document.write(`El area del Paralelogramo es: ${base*altura}cm`)
    break
    case"5":
        lado= prompt("Cuanto mide el lado")
        document.write(`El area del Cuadrado es${lado*lado}cm`)
    break    
    case"6":
        diagonal_a= prompt("Cuanto es tu diagonal a")
        diagonal_b=prompt("Cuanto es tu diagonal b")
        document.write(`El area del Rombo es${diagonal_a*diagonal_b/2}cm`)
    break
    case"7":
        diagonal_a= prompt("Cuanto es tu diagonal a")
        diagonal_b=prompt("Cuanto es tu diagonal b")
        document.write(`El area del Rombo es${diagonal_a*diagonal_b/2}cm`)
    break
    case"8":
       base1=parseInt(prompt("Ingresar la base mayor"))
       base2=parseInt(prompt("Ingresar la  base menor"))
       altura=prompt("Cuanto tienes de altura")
       document.write(`El area del Trapecio es${altura*((base1 + base2)/2)}cm`)

    break   



    default:
        document.write("Esta opcion no es valida")
    break;

}
