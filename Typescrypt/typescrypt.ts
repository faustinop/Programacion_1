class Auto {
    marca: string;
    modelo: string;
    potencia: number;
    maxVelocidad: number;

    constructor(marca:string, modelo:string, potencia:number, maxVelocidad:number){
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.maxVelocidad = maxVelocidad;
    }

    calcularTiempo(km:number){
        console.log(`El tiempo que se tardara en recorrer ${(km)} Km será de ${(km/this.maxVelocidad)} hs `);

    } 
}

const auto1 = new Auto("Peugeot", "504", 80, 140);
const auto2 = new Auto("Ford","Focus", 160, 220);
const auto3 = new Auto("Toyota", "Hylux", 220, 180)
const auto4 = new Auto("Ford", "Ranger", 190, 150)
const auto5 = new Auto("Volkswagen", "Vento", 160, 220)

const autos: Object = [auto1, auto2, auto3, auto4, auto5];

function mostrar(): void{
    console.log(autos);
}
mostrar()

function tiempo(arreglo:any, km:number){
    for (let i=0; i< arreglo.length; i++){
        console.info(arreglo[i].calcularTiempo(km))
    }
}
tiempo(autos,345)

console.log("------------------");

class Escuela{
    nombre: string;
    curso1: string;
    curso2:string;
    alumnos1:number;
    alumnos2:number
    constructor(nombre:string, curso1:string, curso2:string, alumnos1:number, alumnos2:number ){
        this.nombre = nombre;
        this.curso1 = curso1;
        this.curso2 = curso2;
        this.alumnos1 = alumnos1;
        this.alumnos2 = alumnos2;
    }
    descripcion(){
        console.log(`El ${this.nombre} tiene cursos de ${this.curso1} y de ${this.curso2} con un total de ${this.alumnos1} y ${this.alumnos2} alumnos respectivamente`);
    }
    asignarAlumno(alumnos1:number, alumnos2:number){
     return this.alumnos1+=alumnos1, this.alumnos2+= alumnos2;
         
    }
}    

const escuela1 = new Escuela("Instituto Maipú de Educación Integral","Biología","Economía", 16, 14);
escuela1.descripcion()
escuela1.asignarAlumno(12, 13)
escuela1.descripcion()

console.log("-----------------------");

class CuentaBancaria{
    nombre:string;
    fondos:number;
    constructor(nombre:string, fondos:number){
        this.nombre = nombre;
        this.fondos = fondos;
    }
    descripcionCuenta(){
      console.log(`El titular de la cuenta es ${this.nombre} \n Su saldo actual es de: $${this.fondos}`);
    }
    CargarFondos(cantidad:number){
      if (cantidad >= 500000){
        console.warn("No es posible ingresar dicho monto, intente con una cifra menor.");
      }else{
        console.info(`El valor asignado a su cuenta es $${cantidad} \n Su saldo final es: $${(this.fondos = this.fondos + cantidad)} `);
      }
    }
    RetirarFondos(cantidad:number){
      if (cantidad > this.fondos){
        console.warn("El valor ingresado es mayor al disponible en su cuenta.");
      }else if (cantidad >= 100000){
        console.warn("Ha excedido el limite diario de extracción")
      }else{
        console.info(`El valor retirado de su cuenta es $${cantidad} \n Su saldo actual es de: $${(this.fondos = this.fondos - cantidad)} `);
      }
    }
  }
  
  const cuenta= new CuentaBancaria("Pedro Troglio",40000)
  console.log('Cargando fondos')
  cuenta.descripcionCuenta()
  cuenta.CargarFondos(1000);
  cuenta.descripcionCuenta();
  console.log('--------------')
  console.log('Cargando más de 500000');
  cuenta.CargarFondos(500000);
  console.log('--------------');
  console.log('Retirando más de lo disponible');
  cuenta.RetirarFondos(50000);
  console.log('--------------');
  console.log('Excediendo el límite de extracción diario');
  cuenta.CargarFondos(80000);
  cuenta.RetirarFondos(100000);
  

let arrayColores: string[] = ["azul", "verde", "rojo"];
let amarillo: string = 'amarillo';
let naranja: string = 'naranja';

function devolverArray(){
    arrayColores.splice(1, 0, amarillo);
    arrayColores.splice(3, 0, naranja);
    console.log(arrayColores);
}

devolverArray();

function quitarElemento(){
    arrayColores.splice(2,1);
    console.log(arrayColores);
}

quitarElemento();