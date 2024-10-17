// Seleccionar el elemento con la clase ".preloader"
var preloader = document.querySelector(".preloader");
// Función para desvanecer gradualmente el elemento
function fadeOut(element) {
  var opacity = 1;
  var interval = 50; // intervalo de tiempo en milisegundos
  var duration = 500; // duración total del desvanecimiento en milisegundos

  // Función recursiva para ajustar la opacidad en cada paso del intervalo
  function decreaseOpacity() {
    opacity -= interval / duration;
    element.style.opacity = opacity;

    // Si la opacidad es mayor que 0, seguir desvaneciendo
    if (opacity > 0) {
      setTimeout(decreaseOpacity, interval);
    } else {
      // Si la opacidad llega a 0, ocultar el elemento
      element.style.display = "none";
    }
  }

  // Iniciar el desvanecimiento
  decreaseOpacity();
}
// Función para desvanecer gradualmente el elemento
function fadeIn(element) {
  var opacity = 0;
  var interval = 50; // intervalo de tiempo en milisegundos
  var duration = 500; // duración total del desvanecimiento en milisegundos

  // Mostrar el elemento antes de comenzar el desvanecimiento
  element.style.display = "block";

  // Función recursiva para ajustar la opacidad en cada paso del intervalo
  function increaseOpacity() {
    opacity += interval / duration;
    element.style.opacity = opacity;

    // Si la opacidad es menor que 1, seguir desvaneciendo
    if (opacity < 1) {
      setTimeout(increaseOpacity, interval);
    }
  }

  // Iniciar el desvanecimiento
  increaseOpacity();
}
let vertices = [
  {
    id: "azar",
    title: "Azar",
    minititle: "el azar",
    tarjeta: "img/azar.png",
    titleImg: "",
    intro:
      "Dos fuerzas mueven la trama de <i>La vorágine</i>: la codicia y el azar. La codicia es subjetiva y social. El azar es, en la lógica de la gente de frontera, una fuerza objetiva e inescrutable que determina todo. Toda economía extractiva ―como lo fue la del caucho y lo han sido las del oro, la coca, la marihuana o las pieles de tigrillo― parece, conforme a ese pensamiento, dispuesta por el azar. Un día aparece, un día se va “sin dejar más que ruido y desolación” (Rivera, 2023, p. 13). Las fortunas se amasan con la misma rapidez que se esfuman. Los juegos de azar y sentir que la vida es una apuesta son formas frecuentes de buscar ganarse el favor de la suerte.",
    textoFinal:
      "Esa es la vida de Arturo Cova y de casi todos los personajes de la novela. En uno u otro momento se juegan la vida y los caminos siempre conducen a la violencia. Pero también gracias al azar, o casi, José Eustasio Rivera recupera el relato de Cova para hacer una denuncia de la explotación humana y de la naturaleza que se vivía en la frontera.",
    citas: [
      {
        image: "img/citas/azar/cita_01.jpg",
        bg: "img/citas/azar/0/Azar_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>José Eustasio Rivera fue osado al abrir su novela con este fragmento de una carta de Arturo Cova, el protagonista, ya que dispone la clave con la que ha de leerse La vorágine: se trata de un texto marcado por la fatalidad, no solo la de Cova, sino la de todo habitante de frontera. Son caucheros, quineros, raspachines, mineros, guaqueros o jornaleros, seres en zonas de economías extractivas, guiados por el viento, que es otro nombre para la fortuna. No en vano el nombre de Alicia evoca los alisios, vientos que soplan entre las áreas subtropicales y ecuatoriales. También se ha dicho que en este contexto Alicia pudiera significar “aliciente”.</p> <p>Este epígrafe no es solo el manifiesto de la vida de Arturo Cova, sino de toda una condición social de los habitantes de la frontera, en la que se lamenta el pasado perdido y se llora por la fortuna esquiva. Condición que inevitablemente conduce a la violencia; pues ese desarraigo fatal no deja a su paso más que ruido y desolación.</p>",
        text: "Los que un tiempo creyeron que mi inteligencia irradiaría extraordinariamente, cual una aureola de mi juventud; los que se olvidaron de mí apenas mi planta descendió al infortunio; los que al recordarme alguna vez piensen en mi fracaso y se pregunten por qué no fui lo que pude haber sido, sepan que el destino implacable me desarraigó de la prosperidad incipiente y me lanzó a las pampas, para que ambulara vagabundo, como los vientos, y me extinguiera como ellos sin dejar más que ruido y desolación (p. 13).",
        desc: "Fragmento de la carta de Arturo Cova.",
        galeria: [
          {
            name: "1.1. Manuscrito de La vorágine - f.1r. José Eustasio Rivera",
            type: "jpg",
            ficha: [
              "Manuscrito de La vorágine ",
              "José Eustasio Rivera ",
              "1922-1924 ",
              "Biblioteca Nacional de Colombia, Fondo Antiguo, RM617 ",
            ],
            text: "<p>La primera página del manuscrito de La vorágine muestra varios elementos interesantes: la firma de José Eustasio Rivera, el establecer que es una novela (que ya por entonces tenía la connotación de ser un relato de hechos imaginados, aunque desde el inicio su autor supiera que jugaría con los límites entre la verdad y la ficción) y un profundo tachón detrás del que, hasta ahora, no sabemos qué ocultó el escritor con ahínco. </p><p>Dentro de ese juego de realidad-ficción y, posiblemente, con la claridad de dar una forma circular en la novela, Rivera tiene claro que pondrá como epígrafe el fragmento de una carta enviada por su personaje central, Arturo Cova, al final de la novela. En esta, Cova denuncia al cónsul colombiano en Manaos las atrocidades que vivió y vio durante su recorrido por la Orinoquía y la Amazonía. </p>",
            link: "https://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/search/asset/268942",
            btnText:
              "Abrir material en el catálogo de la BN a través del vínculo ",
            img: "img/citas/azar/0/1.1.Azar.jpg",
            thumbnail: "img/citas/azar/0/1.1.Azar_Thumb.jpg",
          },
          {
            name: "1.2. Arturo Cova en las barracas del Guaracú. José Eustasio Rivera",
            type: "jpg",
            ficha: [
              "Arturo Cova en las barracas del Guaracú (fotografía tomada por la madona Zoraida Ayram)",
              "Foto anónima",
              "En José Eustasio Rivera, La vorágine, Bogotá: Cromos, 1924",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Co863.5 R49v",
            ],
            text: "<p>La vorágine fue una de las primeras novelas en servirse de fotografías para dar cuenta de la realidad de las situaciones que narraba o para hacer creer que lo que relataba era real. Pero hay varias incógnitas detrás de este ingenioso recurso. Cuando apareció la novela, algunos pensaron que Arturo Cova no era otro que el mismísimo José Eustasio Rivera, razón por la que el autor eliminó las fotos a partir de la quinta edición. Aun así, no es claro si la fotografía Arturo Cova en las barracas de Guaracú es un fotomontaje en el cual Rivera sobrepuso su rostro al de alguien más. Un censo cauchero levantado en 1912 por el venezolano Samuel Darío Maldonado muestra que sí hubo un Arturo Cova histórico, de carne y hueso, que vivió por la misma época y región en la que transcurre La vorágine. ¿Sería acaso, originalmente, el retrato de Arturo Cova con la cabeza superpuesta de Rivera?</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4309/rec/5",
            btnText: "Para ver el libro completo, haga clic aquí",
            img: "img/citas/azar/0/1.2.Azar.jpg",
            thumbnail: "img/citas/azar/0/1.2.Azar_Thumb.jpg",
          },
        ],
      },
      {
        comentario:
          "<p>Azar, pasión, corazón y violencia: en esta misteriosa y contundente frase puede leerse los temas fundamentales de La vorágine y de la historia trágica de Colombia. Un país hecho en una buena medida por miles de personas que han buscado hacer “patria” o riqueza en las fronteras, en detrimento de sus habitantes indígenas y su equilibrio, siempre movidos por el azar. Yendo a donde el viento o la fortuna los lleven, como en la emblemática rueda de las cartas del tarot o como en un remolino caprichoso que siempre devora.</p><p>Un país que se consagró solemnemente al Sagrado Corazón de Jesús en 1902, al cabo de la más sanguinaria guerra civil, y luego lo invocó en la posterior violencia interpartidista, que muchas veces ha demostrado amalgamar pasión religiosa con pasión amorosa, de formas acérrimas y violentas. Y es que la violencia está en el corazón de la trama, es el ojo de la vorágine. La violencia es la que siempre media las relaciones entre los personajes, la violencia contra las mujeres, el exterminio de los indios, la esclavización, las relaciones del endeude y, claro, la violencia contra la naturaleza: el ganado, las garzas, los árboles y la selva. </p>",
        image: "img/citas/azar/cita_02.jpg",
        bg: "img/citas/azar/1/Azar_Cita02_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        text: "Antes que me hubiera apasionado por mujer alguna, jugué mi corazón al azar y me lo ganó la Violencia (p. 15). ",
        desc: "Palabras con las que Arturo Cova da inicio a su relato. ",
        galeria: [
          {
            name: "2.1. Sagrado Corazón de Jesús. Anónimo",
            type: "jpg",
            ficha: [
              "Sagrado Corazón de Jesús ",
              "Anónimo ",
              "En Nuevo manualito para los devotos del Sagrado Corazón de Jesús, Bogotá: Imprenta de Francisco Torres Amaya, 1880 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 248.143 N83j",
            ],
            text: "<p>El 22 de junio de 1902, el presidente José Manuel Marroquín consagró a Colombia al Sagrado Corazón de Jesús, al tiempo que sentaba la primera piedra para la iglesia del Voto Nacional en Bogotá. Buscaba establecer un lugar de paz y concordia tras la Guerra de los Mil Días (1899-1902), conflicto en el que Marroquín mostró una férrea rudeza al combatir a como diera lugar a los adversarios del gobierno. </p><p>El Sagrado Corazón de Jesús fue el emblema de los movimientos conservadores y contrarrevolucionarios. El perturbador contraste entre la faz beatífica de Jesús y su corazón extraído ha servido para reconocernos de varias maneras. Se dice que el nuestro es “el país del Sagrado Corazón” porque cualquier cosa, por inverosímil que sea, puede pasar. Casi que todo puede pasar azarosamente, paradójicamente “dejado de la mano de Dios”. También ha dado para que de una manera no exenta de mucha ambigüedad se proclame que “Colombia es pasión”. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4338/rec/1",
            btnText: "Para ver el libro completo, haga clic aquí",
            img: "img/citas/azar/1/2.1.Azar.jpg",
            thumbnail: "img/citas/azar/1/2.1.Azar_Thumb.jpg",
          },
          {
            name: "2.2. Nuevo manualito. Anónimo",
            type: "jpg",
            ficha: [
              "Nuevo manualito para los devotos del Sagrado Corazón de Jesús ",
              "Anónimo ",
              "Bogotá: Imprenta de Francisco Torres Amaya, 1880 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 248.143 N83j ",
            ],
            text: "<p>Si bien el azar es central en La vorágine, la violencia no es azarosa. Rivera denuncia sus actores, causas y consecuencias. Aunque la causa principal de la violencia es la codicia, ejercida por beneficios económicos, la novela también aborda otros tipos de violencia. </p><p>Aunque Rivera militaba en el Partido Conservador, abogó por la tolerancia política y religiosa. La violencia no es cuestión del azar o de la Sagrada Providencia, es decisión de quien la ejerce o la promueve. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4338/rec/1",
            btnText: "Para ver el libro completo, haga clic aquí",
            img: "img/citas/azar/1/2.2.Azar.jpg",
            thumbnail: "img/citas/azar/1/2.2.Azar_Thumb.jpg",
          },
        ],
      },
      {
        comentario:
          "<p>Se ha dicho en varias ocasiones que el verdadero protagonista de La vorágine es Clemente Silva, pues es el único que logra salir de la selva para entregarle el relato de Arturo Cova al cónsul colombiano en Manaos. </p><p>Su nombre, además, puede interpretarse como selva clemente. No obstante, esa capacidad de orientación en la espesura verde y de entendimiento con la selva la ha logrado a un precio muy alto: el sacrificio de su hijo Luciano y el fundirse con el entorno en una sola masa orgánica, en la que la selva lo va devorando de a poco. </p><p>Desde que salió de Pasto en busca de su hijo, que huyó de casa ante una afrenta al honor familiar, Clemente no ha conocido sino desventuras y dolores físicos. De cierta manera, evoca a un ermitaño místico de la antigüedad, no solo por su figura, sino por su enorme capacidad de sufrimiento en busca de redención. Pero, además, como personaje inaugura un tipo social muy de nuestra época, tan fundamental como trágico: el buscador de secuestrados o desaparecidos. </p>",
        image: "img/citas/azar/cita_03.jpg",
        bg: "img/citas/azar/2/Azar_Cita03_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        text: "Este mísero anciano Clemente Silva siempre ha tenido el monopolio de la desventura. Desde el día que yendo de Iquitos para Manaos oyó noticias del hijo muerto, cifró su esperanza en prolongar la esclavitud. Quería ser cauchero unos años más, hasta que la tierra le permitiera exhumar los restos. La selva, indirectamente, lo reclamaba como prófugo, y era el espectro de Lucianito el que le pedía volver atrás (p. 153). ",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        desc: "Arturo Cova sobre Clemente Silva al encontrarse con el río Isana.",
        galeria: [
          {
            name: "3.1. El cauchero Clemente Silva. José Eustasio Rivera",
            type: "jpg",
            ficha: [
              "El cauchero Clemente Silva ",
              "Foto anónima ",
              "En José Eustasio Rivera, La vorágine, Bogotá: Cromos, 1924 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Co863.5 R49v1",
            ],
            text: "<p>Tan importante resultaba la presencia de Clemente Silva en La vorágine, que Rivera quiso que fuera el otro personaje de la trama que apareciera en una fotografía. Se trata de una imagen poderosa, en la que se demuestra la pericia del viejo cauchero que se funde con el entorno en una sola trama tupida y vegetal, a medio camino entre cielo e infierno. </p><p>El experto brasileño Leopoldo Bernucci ha demostrado que originalmente esta fotografía fue una postal que circuló en Manaos hacia 1904-1905, y que llamó la atención de José Eustasio Rivera. Pero como sabemos que al igual que hubo un Arturo Cova “real”, hubo un Clemente Silva que existió históricamente hacia esa misma época en la misma región, cabe en todo caso preguntarse si quien allí aparece no fuera el mismo sujeto. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4309/rec/5",
            btnText: "Para ver el libro completo, haga clic aquí",
            img: "img/citas/azar/2/3.1.Azar.jpg",
            thumbnail: "img/citas/azar/2/3.1.Azar_Thumb.jpg",
          },
        ],
      },
      {
        comentario:
          "<p>Ramiro Estévanez representa otro tipo social de La vorágine. Arturo Cova lo encuentra bajo el alias de Esteban Ramírez en las barracas del Váquiro (un jefe cauchero tan brutal como estúpido) y lo identifica de inmediato, dado que habían hecho parte del mismo entorno en el pasado. </p><p>Como mucha gente de antes y de ahora, había huido hacia un frente de extracción o colonización para reinventar su historia. En su caso, lo impulsó el despecho. Siendo estudiante y cosmopolita, pero de pocos medios, asumió otro nombre y otro oficio. Presenció la masacre de San Fernando de Atabapo contra el gobernador Roberto Pulido, el 8 de mayo de 1913, que llevó al coronel Tomás Funes a volverse el hombre más fuerte y temible de la región. </p><p>Por haber sido testigo y hasta cierto punto cómplice, Ramiro cree que el destino lo castiga con la ceguera y que nunca regresará a casa porque la fortuna no lo ha favorecido. Por ello, antes que la redención, prefiere el olvido. No obstante, Estévanez es quien impulsa a Cova a escribir la carta de denuncia para el cónsul de Colombia en Manaos, con la esperanza de que el Estado detenga las atrocidades. </p>",
        image: "img/citas/azar/cita_04.jpg",
        bg: "img/citas/azar/3/Azar_Cita04_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        text: "¿Volver yo a las ciudades, desmedrado, pobre y enfermo? El que dejó sus lares en busca de fortuna no debe tornar pidiendo limosna. Por aquí siquiera nadie conoce mis vicisitudes, y la miseria toma aspectos de voluntaria renunciación. Vete, la vida nos amasó con sustancias contradictorias. No podemos seguir el mismo camino. Si algún día ves a mis padres, cúrate de decirles dónde estoy. ¡Caiga el olvido sobre el que nunca puede olvidar! (p. 203). ",
        desc: "Ramiro Estévanez respondiendo a Arturo Cova sobre las posibilidades de fugarse de las barracas del Váquiro. ",
        galeria: [
          {
            name: "4.1. Horacio Quiroga. Anónimo",
            type: "jpg",
            ficha: [
              "Horacio Quiroga ",
              "Anónimo ",
              "s. f. ",
              "Biblioteca Nacional de Uruguay, Colección Aníbal Barrios Pintos",
            ],
            text: "<p>En esta fotografía se ve al escritor uruguayo Horacio Quiroga (1878-1937), autor de relatos terroríficos y sobrenaturales, y una suerte de “alma gemela” literaria de José Eustasio Rivera, aunque solo se conocieron tardíamente y nunca en persona. </p><p>La historia de Ramiro Estévanez se asemeja en muchos aspectos a la de varios personajes creados por Quiroga, y hasta cierto punto, al mismo escritor uruguayo, quien se fue a vivir a la selva de Misiones, en parte por una decepción amorosa, y la describió con maestría en muchos de sus textos. Aunque Rivera no se basó literalmente en historia alguna de Quiroga, el uruguayo celebró la publicación de La vorágine. Ambos autores son un referente de cómo se ha narrado la selva desde América Latina. </p>",
            link: "",
            btnText: "",
            img: "img/citas/azar/3/4.1.Azar.jpg",
            thumbnail: "img/citas/azar/3/4.1.Azar_Thumb.jpg",
          },
        ],
      },
      {
        comentario:
          "<p>Clarita es un personaje tan interesante como conmovedor: “Una mujercilla halconera, de rostro envilecido por el colorete, cabello oxigenado y brazos flacuchos” (p. 52). Una especie de retrato atemporal de la aventurera y la prostituta. Arturo Cova conoce su tragedia y su nobleza. Venezolana, de Ciudad Bolívar, es una de tantas mujeres convertidas en botín durante las guerras civiles; ha sido literalmente jugada al azar y no puede sino concebir la vida como un juego en el que siempre se pierde. </p><p>Cova la conoce en manos de Barrera, comerciante enriquecido con el caucho, el oro y la explotación humana, quien hace falsas promesas a sus trabajadores para pagarles una miseria o, en el peor de los casos (el de Clarita), convertirlos en esclavos. Ella está llena de ecos contemporáneos de las mujeres víctimas de la guerra, el desplazamiento o la migración forzada. Es irónico que Barrera se queje de “los asilados de Venezuela” que hacían invivible el llano y lo “infestaban como dañina langosta” (p. 37), a la vez que saca provecho de su necesidad. </p>",
        image: "img/citas/azar/cita_05.jpg",
        bg: "img/citas/azar/4/Azar_Cita05_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        text: "En estas fundaciones me dejó botada el coronel Infante, guerriyero venezolano que tomó a Caicara. Ayí me rifaron al tresiyo, como simple cosa, y fui ganada por un tal Puentes, pero Infante me descontó al liquidar el juego. Después lo derrotaron, tuvo que asilarse en Colombia y me abandonó por aquí (p. 58). ",
        desc: "Testimonio que Clarita dado a Arturo Cova luego de ser herido por una bala. ",
        galeria: [
          {
            name: "5.1. Teoría del juego del tresillo (rocambor) y del chipolo",
            type: "jpg",
            ficha: [
              "Teoría del juego del tresillo (rocambor) y del chipolo ",
              "Rodolfo Velasco ",
              "Cali: Imprenta H. A. del Pino, 1892 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Misceláneas 208 ",
            ],
            text: "<p>Varios juegos de cartas están a medio camino entre el azar y la habilidad. Si bien las cartas son dadas por la suerte, el jugador las usará a partir de su conocimiento del juego y de sus oponentes. No es raro que este tipo de juegos sean metáforas del destino humano: “cada quién juega con la mano que le toca”, reza el dicho. </p><p>En Teoría del tresillo, un compilado de reglas sobre el popular juego de cartas de finales del siglo XIX, Rodolfo Velasco advierte que es entretenido, siempre y cuando lo jueguen “personas decentes” que no dejen “anarquizar el juego” al incumplir las reglas. La esencia verdadera de todo juego de azar es que cualquiera, incluso el mejor jugador, puede perder si la suerte no lo acompaña. </p><p>En La vorágine, cuando los juegos de azar aparecen, se apuesta todo: el dinero y la vida. Por ello, alguien siempre busca ganar al azar mediante la trampa: la habilidad real está en quien puede pasar por encima de las reglas sin ser descubierto. La destreza no está en el dominio del juego, sino de la trampa. No obstante, al final y bajo esta dinámica, todos pierden.</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4314/rec/1",
            btnText: "Para ver el libro completo, haga clic aquí",
            img: "img/citas/azar/4/5.1.Azar.jpg",
            thumbnail: "img/citas/azar/4/5.1.Azar_Thumb.jpg",
          },
          {
            name: "5.2. Consumatum est. José María Gómez Castro",
            type: "jpg",
            ficha: [
              "Consumatum est ",
              "José María Gómez Castro ",
              "ca. 1927 ",
              "Banco de la República, Colección de Arte, AP1512",
            ],
            text: "<p>Consumatum est es una ilustración en la que el artista José María Gómez Castro, conocido como Pepe Gómez, hace su propia versión del escudo de Colombia. La imagen hace referencia a esas otras patrias de los territorios basados en economías extractivistas donde, según la ilustración de Gómez, el dinero, el juego, la violencia y la muerte están en el centro. La expresión latina Consummatum est significa “se acabó todo” y se emplea a propósito de una tragedia. Esta imagen retrata la misma realidad de La vorágine, pero en el marco del boom de la exploración petrolera y no del caucho. </p>",
            link: "https://colecciones.banrepcultural.org/document/coleccion/63a069015d96b8790f25b6f3",
            btnText:
              "Abrir material en colecciones Banrep a través del vínculo",
            img: "img/citas/azar/4/5.2.Azar.jpg",
            thumbnail: "img/citas/azar/4/5.2.Azar_Thumb.jpg",
          },
        ],
      },
    ],
    metodologias: [
      {
        id: "santa marta",
        linkPhotos: "",
        linkDocComplete: "",
        docs: [
          {
            title: "¿Qué me hace sentir la codicia en La vorágine?",
            img: "img/note.png",

            person: "Juan (sato), 22 años",
            date: "Santa Marta, 01/06/2024",
          },
        ],
      },
      {
        id: "riohacha",
        docs: [
          {
            title: "¿Qué me hace sentir la codicia en La vorágine?",
            img: "img/note.png",
            person: "Juan (sato), 22 años",
            date: "Santa Marta, 01/06/2024",
          },
        ],
      },
      {
        id: "bogotá",
        docs: [
          {
            title: "¿Qué me hace sentir la codicia en La vorágine?",
            img: "img/note.png",
            person: "Juan (sato), 22 años",
            date: "Santa Marta, 01/06/2024",
          },
        ],
      },
      {
        id: "villavicencio",
        docs: [
          {
            title: "¿Qué me hace sentir la codicia en La vorágine?",
            img: "img/note.png",
            person: "Juan (sato), 22 años",
            date: "Santa Marta, 01/06/2024",
          },
        ],
      },
      {
        id: "buenaventura",
        docs: [
          {
            title: "¿Qué me hace sentir la codicia en La vorágine?",
            img: "img/note.png",
            person: "Juan (sato), 22 años",
            date: "Santa Marta, 01/06/2024",
          },
        ],
      },
      {
        id: "neiva",
        docs: [
          {
            title: "¿Qué me hace sentir la codicia en La vorágine?",
            img: "img/note.png",
            person: "Juan (sato), 22 años",
            date: "Santa Marta, 01/06/2024",
          },
        ],
      },
      {
        id: "florencia",
        docs: [
          {
            title: "¿Qué me hace sentir la codicia en La vorágine?",
            img: "img/note.png",
            person: "Juan (sato), 22 años",
            date: "Santa Marta, 01/06/2024",
          },
        ],
      },
      {
        id: "pasto",
        docs: [
          {
            title: "¿Qué me hace sentir la codicia en La vorágine?",
            img: "img/note.png",
            person: "Juan (sato), 22 años",
            date: "Santa Marta, 01/06/2024",
          },
        ],
      },
    ],
  },
];
let verticesTxt = ["azar", "azar", "azar", "azar", "azar", "azar", "azar"];
let verticesTxtReal = [
  "azar",
  "codicia",
  "espejismos",
  "extravio",
  "lujuria",
  "patria",
  "violencia",
];
if (document.querySelector(".content")) {
  // Selecciona los elementos necesarios
  const contentElements = document.querySelectorAll(".content *"); // Selecciona todos los elementos dentro de .content
  const fontSizeButtons = document.querySelectorAll(".font-size-btn");
  const themeButtons = document.querySelectorAll(".theme-btn");

  // Obtener el tamaño de fuente actual para cada elemento y almacenarlo en un Map
  let fontSizeMap = new Map();
  contentElements.forEach((element) => {
    const currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
    fontSizeMap.set(element, currentFontSize);
  });

  // Control de tamaño de fuente con incrementos de 1px
  fontSizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const size = button.getAttribute("data-size");

      contentElements.forEach((element) => {
        let currentFontSize = fontSizeMap.get(element);

        if (size === "small" && currentFontSize > 1) {
          // Reducir solo si la fuente es mayor a 1px
          currentFontSize -= 1;
        } else if (size === "large") {
          currentFontSize += 1;
        }

        // Actualizar el tamaño de la fuente en el mapa y el estilo
        fontSizeMap.set(element, currentFontSize);
        element.style.fontSize = `${currentFontSize}px`;
      });
    });
  });

  // Control de tema (color de fondo y texto)
  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const bgColor = button.getAttribute("data-bg");
      const textColor = button.getAttribute("data-color");

      // Aplicar cambios de fondo y texto a todos los elementos dentro de .content
      document.querySelector("body").style.backgroundColor = bgColor;
      contentElements.forEach((element) => {
        element.style.color = textColor;
      });
    });
  });

  if (window.innerWidth > 768) {
    if (document.querySelector(".controls")) {
      // Obtener el alto de la ventana
      let windowHeight = window.innerHeight;

      // Obtener el alto del header (en este caso .controls)
      let headerHeight = document.querySelector(".controls").offsetHeight + 20;

      // Calcular el espacio disponible para .content
      let contentHeight = windowHeight - headerHeight;

      // Aplicar la altura a .content
      // document.querySelector(".content").style.height = contentHeight + "px";
    }
  }
}
if (document.querySelector(".home")) {
  // Resolución de referencia
  const baseWidth = 1920;
  const baseHeight = 1080;

  // Dimensiones actuales de la ventana
  const currentWidth = window.innerWidth;
  const currentHeight = window.innerHeight;

  // Calcula el factor de escala basándote en la proporción de la resolución actual respecto a la base
  const scaleWidth = currentWidth / baseWidth;
  const scaleHeight = currentHeight / baseHeight;

  // Usa el factor de escala menor para mantener la proporción sin distorsionar el contenido
  const scale = Math.min(scaleWidth, scaleHeight);

  // Aplica el zoom si la resolución es diferente a 1920x1080
  if (currentWidth !== baseWidth || currentHeight !== baseHeight) {
    document.body.style.zoom = scale;
  }

  const clicSound = document.getElementById("clicSound");
  clicSound.volume = 0.2;
  let animating = false;
  const ruleta = document.querySelector(".vertices");
  const totalTarjetas = 8; // Total incluyendo la instrucción
  const duracionGiro = 5000; // Duración del giro en milisegundos

  function seleccionarTarjetaAleatoria() {
    if (animating) return; // Evita múltiples clics durante la animación
    animating = true;

    // Excluye la primera tarjeta (instrucción) y selecciona entre las demás
    const tarjetaSeleccionada =
      Math.floor(Math.random() * (totalTarjetas - 1)) + 1;

    const vueltas = 5; // Número de vueltas completas antes de detenerse
    const angle = vueltas * 360 + tarjetaSeleccionada * (360 / totalTarjetas);

    // Aplica la rotación con una transición
    ruleta.style.transition = `transform ${
      duracionGiro / 1000
    }s cubic-bezier(0.22, 1, 0.36, 1)`;
    if (window.innerWidth > 768) {
      ruleta.style.transform = `translate(-50%, -50%) rotate(${angle}deg) `;
    } else {
      ruleta.style.transform = `translateY(-50%) rotate(${angle}deg) `;
    }
    clicSound.play();

    // Detecta cuando la transición termina
    ruleta.addEventListener(
      "transitionend",
      () => {
        animating = false;
        ruleta.style.transition = "none"; // Remueve la transición para el próximo giro
        if (window.innerWidth > 768) {
          ruleta.style.transform = `translate(-50%, -50%) rotate(${
            angle % 360
          }deg) `; // Ajusta el ángulo final
        } else {
          ruleta.style.transform = `translateY(-50%) rotate(${
            angle % 360
          }deg) `; // Ajusta el ángulo final
        }
        document.querySelector(
          ".verticeSelected"
        ).href = `vertice.html?id=${verticesTxt[tarjetaSeleccionada]}`;
      },
      { once: true }
    );
  }
}

document.querySelector("#checkbox").addEventListener("change", () => {
  document.querySelector("nav.menu").classList.toggle("active");
});

function rotarAguja(final) {
  const aguja = document.querySelector(".aguja");
  if (aguja) {
    aguja.className = "aguja"; // Restablece la clase

    // Agrega la clase de la rotación final deseada
    setTimeout(() => {
      aguja.classList.add(final);
    }, 100);
  }
}

function checkImageOrientation(imageUrl, callback) {
  const img = new Image();
  img.src = imageUrl;

  img.onload = function () {
    const isVertical = img.width < img.height;
    callback(isVertical);
  };

  img.onerror = function () {
    callback(null); // O algún valor que indique el error
  };
}

const maxChars = 250;
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  // Obtén el valor del parámetro `query`
  const idVertice = params.get("id") || "";

  let infoVertice = vertices.find((vertice) => vertice.id == idVertice);

  if (
    document.querySelector(".vertice") &&
    !document.querySelector("body.search")
  ) {
    document.querySelector(".vertice .intro h3").innerHTML = infoVertice.intro;
    document.querySelector(".vertice .footerText").innerHTML =
      infoVertice.textoFinal;
    document.querySelector(".vertice .grid-container").innerHTML = "";
    infoVertice.citas.forEach((cita, index) => {
      let text = cita.text;
      // Verifica si el texto es más largo que el límite
      if (text.length > maxChars) {
        text = text.slice(0, maxChars) + "...";
      }

      let template = `<a href="cita.html?id=${idVertice}&cita=${index}" class="grid-item"><img src="${cita.image}" alt="${text}"><p>${text}</p></a>`;
      document.querySelector(".vertice .grid-container").innerHTML += template;
    });
  }
  if (document.querySelector(".title")) {
    if (infoVertice) {
      document.querySelector(".title").innerHTML = infoVertice.title;
    }
  }
  if (document.querySelector(".subtitle")) {
    document.querySelector(
      ".subtitle"
    ).innerHTML = `<h2>¿CÓMO SE LEE HOY</h2><h2>${infoVertice.minititle.toUpperCase()}</h2><h2>EN LA VORÁGINE?</h2>`;
  }
  if (document.querySelector(".cita")) {
    const idCita = params.get("cita") || "";
    const citas = infoVertice.citas; // Obtener el array de citas
    let currentIndex = idCita; // Índice inicial

    // Elementos del DOM
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    // Función para actualizar la cita mostrada
    function mostrarCita(index) {
      const citaActual = citas[index];
      document.querySelector("p.citaTxt").innerHTML = citaActual.text;
      document.querySelector(".descCita").innerHTML = citaActual.desc;
      document.querySelector("p.copy").innerHTML = citaActual.refBibliografica;
      document.querySelector(".comentario").innerHTML = citaActual.comentario;

      document.querySelector(".bgimage").style.opacity = "0";
      document.querySelector(".bgimage").src = citaActual.bg;
      setTimeout(() => {
        document.querySelector(".bgimage").style.opacity = "1";
      }, 200);
      document.querySelector(".galeria").innerHTML = "";
      citaActual.galeria.forEach((item, index) => {
        let { name, type, ficha, text, link, btnText, img, thumbnail } = item;

        // Uso de la función
        checkImageOrientation(img, function (isVertical) {
          // Aquí puedes continuar con el resto del código, utilizando el valor de isVertical
          // Generar el contenido dinámico para el figcaption
          let contenidoFicha = ficha.map((item) => `<p>${item}</p>`).join("");
          let template = `<button type="button" popovertarget="galitem-${index}"><figure><img  src="${thumbnail}" alt="${name}"><figcaption>${contenidoFicha}</figcaption></figure>
          </button><div popover="" id="galitem-${index}" class="popover"><div class="content"><button class="close" popovertarget="galitem-${index}" popovertargetaction="toggle" type="button"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_101_2)"><path d="M20.2114 16.4061L14.3046 10.4993L20.2114 4.59246C21.2622 3.5417 21.2622 1.83796 20.2114 0.787191C19.1607 -0.263577 17.4569 -0.263577 16.4061 0.787191L10.4993 6.694L4.59317 0.78783C3.5424 -0.262937 1.83866 -0.262937 0.787893 0.78783C-0.262875 1.8386 -0.262875 3.54234 0.787893 4.5931L6.6947 10.4999L0.787893 16.4061C-0.262875 17.4569 -0.262875 19.1606 0.787893 20.2114C1.83866 21.2621 3.5424 21.2621 4.59317 20.2114L10.5 14.3045L16.4068 20.2114C17.4576 21.2621 19.1613 21.2621 20.2121 20.2114C21.2628 19.1606 21.2628 17.4569 20.2121 16.4061H20.2114Z" fill="#665343"></path></g><defs><clipPath id="clip0_101_2"><rect width="21" height="21" fill="white"></rect></clipPath></defs></svg></button><div class="content-header"><a href="${link}" target="_blank" class="complete"><svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.37 7.2H1.62V33.08H23.37V7.2Z" fill="white"></path><path d="M29.15 27.65H7.4V1.78H21.25L29.15 9.7V27.65Z" fill="white"></path><path d="M30.45 8.95L22.09 0.45C21.81 0.16 21.42 0 21.02 0H7.17C6.34 0 5.67 0.67 5.67 1.5V5.67H1.5C0.67 5.67 0 6.34 0 7.17V33.6C0 34.43 0.67 35.1 1.5 35.1H23.71C24.54 35.1 25.21 34.43 25.21 33.6V29.43H29.38C30.21 29.43 30.88 28.76 30.88 27.93V10C30.88 9.61 30.73 9.23 30.45 8.95ZM22.52 5.17L25.8 8.51H22.52V5.17ZM22.21 32.1H3V8.67H5.67V27.93C5.67 28.76 6.34 29.43 7.17 29.43H22.21V32.1ZM8.67 26.43V3H19.52V10C19.52 10.83 20.19 11.5 21.02 11.5H27.88V26.43H8.67Z" fill="#665344"></path><path d="M23.85 14.72H12.69C11.86 14.72 11.19 15.39 11.19 16.22C11.19 17.05 11.86 17.72 12.69 17.72H23.85C24.68 17.72 25.35 17.05 25.35 16.22C25.35 15.39 24.68 14.72 23.85 14.72Z" fill="#665344"></path><path d="M23.85 20.39H12.69C11.86 20.39 11.19 21.06 11.19 21.89C11.19 22.72 11.86 23.39 12.69 23.39H23.85C24.68 23.39 25.35 22.72 25.35 21.89C25.35 21.06 24.68 20.39 23.85 20.39Z" fill="#665344"></path></svg>${btnText}</a></div>
  <div class="content-body"><img height="${
    isVertical ? 900 : 430
  }" src="${img}" alt="image"><div class="txt"><strong><i>Arturo Cova en las barracas del Guaracú. (Fotografía tomada por la madona Zoraida Ayram)</i></strong><i>En La vorágine (1ra Ed.)</i><div class="nomargin">${contenidoFicha}</div>${text}</div></div></div></div>`;
          document.querySelector(".galeria").innerHTML += template;
        });
      });
      // Actualizar visibilidad de los botones
      prevButton.style.display = index === 0 ? "none" : "inline-block";
      nextButton.style.display =
        index === citas.length - 1 ? "none" : "inline-block";
    }

    // Función para manejar clic en el botón anterior
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        mostrarCita(currentIndex);
      }
    });

    // Función para manejar clic en el botón siguiente
    nextButton.addEventListener("click", () => {
      if (currentIndex < citas.length - 1) {
        currentIndex++;
        mostrarCita(currentIndex);
      }
    });

    // Inicializar mostrando la primera cita
    mostrarCita(currentIndex);
  }
  setTimeout(() => {
    fadeOut(preloader);
    if (idVertice) {
      rotarAguja(idVertice);
    } else {
      // Generar un índice aleatorio
      let randomIndex = Math.floor(Math.random() * verticesTxt.length);

      // Obtener el elemento en la posición aleatoria
      let randomElement = verticesTxtReal[randomIndex];
      rotarAguja(randomElement);
    }
  }, 3000);
});
