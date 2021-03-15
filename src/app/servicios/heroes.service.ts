import { Injectable } from '@angular/core';


@Injectable()
export class HeroesService{

    private heroes:Heroe[] = [
        {
          nombre: "Abominacion",
          bio: "Maldito con sangre eldritch pasó infinitos días encerrado y torturado. Ahora el hombre es libre, y por tanto, la bestia.",
          img: "assets/images/abomination.jpg",
          funcion: "Ofensivo / Utilidad"
        },
        {
          nombre: "Cazarrecompensas",
          bio: "Va armado con un hacha, un gancho y un plan. Está aquí porque sabe que el mundo no necesita héroes, necesita un profesional.",
          img: "assets/images/bountyhunter.jpg",
          funcion: "Ofensivo / Utilidad"
        },
        {
          nombre: "Cruzado",
          bio: "Un guerrero pío, justo y fervoroso, cuya poderosa espada sirve a la Luz impulsada por la fe. Un líder en la cruzada contra el mal.",
          img: "assets/images/crusader.png",
          funcion: "Defensivo / Utilidad"
        },
        {
          nombre: "Asaltatumbas",
          bio: "Ágil, evasiva y con una puntería mortífera. No juega limpio pero, ¿qué persona sensata lo hace?",
          img: "assets/images/graverobber.jpg",
          funcion: "Ofensivo"
        },
        {
          nombre: "Diabla",
          bio: "Una guerrera salvaje y voraz. Nunca retrocede y su grito de batalla basta para sanar las heridas y continuar la lucha.",
          img: "assets/images/hellion.jpg",
          funcion: "Ofensivo"
        },
        {
          nombre: "Bufón",
          bio: "La vida es un chiste malo, y él lo sabe. Puede inspirar a sus aliados con cánticos de batalla o preparar el gran final para su espectáculo, un final para morirse.",
          img: "assets/images/jester.png",
          funcion: "Utilidad"
        },
        {
          nombre: "Leproso",
          bio: "Este hombre ha aprendido a vivir con la muerte sobre su nombre. Acude a la llamada dispuesto a enfrentarse a la muerte en lugar de esperarla sentado. Un guerrero. Un poeta. Un hombre sin futuro.",
          img: "assets/images/leper.png",
          funcion: "Ofensivo / Defensivo"
        },
        {
          nombre: "Ocultista",
          bio: "Para enfrentarte al abismo, debes conocerlo. Ha pagado un alto precio a cambio de enormes poderes. Solo el tiempo dirá si su trato valió la pena.",
          img: "assets/images/occultist.png",
          funcion: "Utilidad"
        },
        {
          nombre: "Hombre de armas",
          bio: "Su cuerpo no conserva la robusted de la juventud, pero posee la sabiduría de cien batallas. Un experto comandante y un brillante estratega.",
          img: "assets/images/manatarms.png",
          funcion: "Defensivo / Utilidad"
        }
      ];

    constructor(){
        console.log("Servicio listo para usarse!");
    }

    getHeroes(){
        return this.heroes;
    }

    getSingleHeroe(index:string){
        return this.heroes[index];
    }

}

export interface Heroe{
    nombre: string;
    bio: string;
    img: string;
    funcion: string;
}