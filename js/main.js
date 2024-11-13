// Seleccionar el elemento con la clase ".preloader"
var preloader = document.querySelector(".preloader");
function getSecureRandomNumber(min, max) {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  const randomValue = array[0] / (0xffffffff + 1);
  return Math.floor(randomValue * (max - min + 1)) + min;
}
function limpiarHTMLConSaltosDeLinea(html) {
  // Reemplaza los <br> por saltos de línea
  let textoLimpio = html.replace(/<br\s*\/?>/gi, "\n");

  // Reemplaza las etiquetas <p> por dobles saltos de línea para marcar la separación de párrafos
  textoLimpio = textoLimpio.replace(/<\/?p>/gi, "\n\n");

  // Elimina cualquier otra etiqueta HTML
  textoLimpio = textoLimpio.replace(/<\/?[^>]+(>|$)/g, "");

  // Reemplaza múltiples saltos de línea consecutivos por un solo salto para evitar demasiados espacios
  textoLimpio = textoLimpio.replace(/\n{3,}/g, "\n\n");

  // Quita espacios en blanco al inicio y al final
  return textoLimpio.trim();
}

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
        id: "01",
        image: "img/citas/azar/cita_01.jpg",
        bg: "img/citas/azar/0/Azar_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>José Eustasio Rivera fue osado al abrir su novela con este fragmento de una carta de Arturo Cova, el protagonista, ya que dispone la clave con la que ha de leerse La vorágine: se trata de un texto marcado por la fatalidad, no solo la de Cova, sino la de todo habitante de frontera. Son caucheros, quineros, raspachines, mineros, guaqueros o jornaleros, seres en zonas de economías extractivas, guiados por el viento, que es otro nombre para la fortuna. No en vano el nombre de Alicia evoca los alisios, vientos que soplan entre las áreas subtropicales y ecuatoriales. También se ha dicho que en este contexto Alicia pudiera significar “aliciente”.</p> <p>Este epígrafe no es solo el manifiesto de la vida de Arturo Cova, sino de toda una condición social de los habitantes de la frontera, en la que se lamenta el pasado perdido y se llora por la fortuna esquiva. Condición que inevitablemente conduce a la violencia; pues ese desarraigo fatal no deja a su paso más que ruido y desolación.</p>",
        text: "<p>Los que un tiempo creyeron que mi inteligencia irradiaría extraordinariamente, cual una aureola de mi juventud; los que se olvidaron de mí apenas mi planta descendió al infortunio; los que al recordarme alguna vez piensen en mi fracaso y se pregunten por qué no fui lo que pude haber sido, sepan que el destino implacable me desarraigó de la prosperidad incipiente y me lanzó a las pampas, para que ambulara vagabundo, como los vientos, y me extinguiera como ellos sin dejar más que ruido y desolación (p. 13).</p>",
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
        id: "02",
        comentario:
          "<p>Azar, pasión, corazón y violencia: en esta misteriosa y contundente frase puede leerse los temas fundamentales de La vorágine y de la historia trágica de Colombia. Un país hecho en una buena medida por miles de personas que han buscado hacer “patria” o riqueza en las fronteras, en detrimento de sus habitantes indígenas y su equilibrio, siempre movidos por el azar. Yendo a donde el viento o la fortuna los lleven, como en la emblemática rueda de las cartas del tarot o como en un remolino caprichoso que siempre devora.</p><p>Un país que se consagró solemnemente al Sagrado Corazón de Jesús en 1902, al cabo de la más sanguinaria guerra civil, y luego lo invocó en la posterior violencia interpartidista, que muchas veces ha demostrado amalgamar pasión religiosa con pasión amorosa, de formas acérrimas y violentas. Y es que la violencia está en el corazón de la trama, es el ojo de la vorágine. La violencia es la que siempre media las relaciones entre los personajes, la violencia contra las mujeres, el exterminio de los indios, la esclavización, las relaciones del endeude y, claro, la violencia contra la naturaleza: el ganado, las garzas, los árboles y la selva. </p>",
        image: "img/citas/azar/cita_02.jpg",
        bg: "img/citas/azar/1/Azar_Cita02_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        text: "<p>Antes que me hubiera apasionado por mujer alguna, jugué mi corazón al azar y me lo ganó la Violencia (p. 15).</p>",
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
        id: "33",
        comentario:
          "<p>Se ha dicho en varias ocasiones que el verdadero protagonista de La vorágine es Clemente Silva, pues es el único que logra salir de la selva para entregarle el relato de Arturo Cova al cónsul colombiano en Manaos. </p><p>Su nombre, además, puede interpretarse como selva clemente. No obstante, esa capacidad de orientación en la espesura verde y de entendimiento con la selva la ha logrado a un precio muy alto: el sacrificio de su hijo Luciano y el fundirse con el entorno en una sola masa orgánica, en la que la selva lo va devorando de a poco. </p><p>Desde que salió de Pasto en busca de su hijo, que huyó de casa ante una afrenta al honor familiar, Clemente no ha conocido sino desventuras y dolores físicos. De cierta manera, evoca a un ermitaño místico de la antigüedad, no solo por su figura, sino por su enorme capacidad de sufrimiento en busca de redención. Pero, además, como personaje inaugura un tipo social muy de nuestra época, tan fundamental como trágico: el buscador de secuestrados o desaparecidos. </p>",
        image: "img/citas/azar/cita_03.jpg",
        bg: "img/citas/azar/2/Azar_Cita03_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        text: "<p>Este mísero anciano Clemente Silva siempre ha tenido el monopolio de la desventura. Desde el día que yendo de Iquitos para Manaos oyó noticias del hijo muerto, cifró su esperanza en prolongar la esclavitud. Quería ser cauchero unos años más, hasta que la tierra le permitiera exhumar los restos. La selva, indirectamente, lo reclamaba como prófugo, y era el espectro de Lucianito el que le pedía volver atrás (p. 153).</p>",
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
          {
            name: "3.2. ",
            type: "",
            ficha: [],
            text: "<p>Un moderno Clemente Silva fue el profesor Gustavo Moncayo (1952–2022), otro habitante del sur andino que emprendió un largo camino a pie en busca de su hijo secuestrado; en este caso, un militar capturado por las FARC. Su marcha conmovió a medio país y puso el dedo en la llaga sobre la necesidad de acuerdos humanitarios. En 2010, en una operación colombo-brasileña, Pablo Emilio Moncayo, su hijo, fue liberado. En un acto simbólico, el hijo le quitó al padre las cadenas con las que había caminado por más de cuatro años.</p>",
            link: "",
            btnText: "",
            img: "img/citas/azar/2/3.2.Azar.jpg",
            thumbnail: "img/citas/azar/2/3.2.Azar_Thumb.jpg",
          },
        ],
      },
      {
        id: "44",
        comentario:
          "<p>Ramiro Estévanez representa otro tipo social de La vorágine. Arturo Cova lo encuentra bajo el alias de Esteban Ramírez en las barracas del Váquiro (un jefe cauchero tan brutal como estúpido) y lo identifica de inmediato, dado que habían hecho parte del mismo entorno en el pasado. </p><p>Como mucha gente de antes y de ahora, había huido hacia un frente de extracción o colonización para reinventar su historia. En su caso, lo impulsó el despecho. Siendo estudiante y cosmopolita, pero de pocos medios, asumió otro nombre y otro oficio. Presenció la masacre de San Fernando de Atabapo contra el gobernador Roberto Pulido, el 8 de mayo de 1913, que llevó al coronel Tomás Funes a volverse el hombre más fuerte y temible de la región. </p><p>Por haber sido testigo y hasta cierto punto cómplice, Ramiro cree que el destino lo castiga con la ceguera y que nunca regresará a casa porque la fortuna no lo ha favorecido. Por ello, antes que la redención, prefiere el olvido. No obstante, Estévanez es quien impulsa a Cova a escribir la carta de denuncia para el cónsul de Colombia en Manaos, con la esperanza de que el Estado detenga las atrocidades. </p>",
        image: "img/citas/azar/cita_04.jpg",
        bg: "img/citas/azar/3/Azar_Cita04_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        text: "<p>¿Volver yo a las ciudades, desmedrado, pobre y enfermo? El que dejó sus lares en busca de fortuna no debe tornar pidiendo limosna. Por aquí siquiera nadie conoce mis vicisitudes, y la miseria toma aspectos de voluntaria renunciación. Vete, la vida nos amasó con sustancias contradictorias. No podemos seguir el mismo camino. Si algún día ves a mis padres, cúrate de decirles dónde estoy. ¡Caiga el olvido sobre el que nunca puede olvidar! (p. 203).</p>",
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
          {
            name: "4.2. ",
            type: "",
            ficha: [],
            text: "<p>Tras la muerte de José Eustasio Rivera, el 1.º de diciembre de 1928, El Espectador, en su Suplemento Literario Ilustrado, publicó la carta que Horacio Quiroga le envío a José Eustasio Rivera el 4 de mayo de 1927. En esta, Quiroga reconoce la riqueza literaria de La vorágine y ve al escritor colombiano como un “compañero” en los modos y temáticas que los hermanan.</p>",
            link: "",
            btnText: "",
            img: "img/citas/azar/3/4.2.Azar.jpg",
            thumbnail: "img/citas/azar/3/4.2.Azar_Thumb.jpg",
          },
        ],
      },
      {
        id: "16",
        comentario:
          "<p>Clarita es un personaje tan interesante como conmovedor: “Una mujercilla halconera, de rostro envilecido por el colorete, cabello oxigenado y brazos flacuchos” (p. 52). Una especie de retrato atemporal de la aventurera y la prostituta. Arturo Cova conoce su tragedia y su nobleza. Venezolana, de Ciudad Bolívar, es una de tantas mujeres convertidas en botín durante las guerras civiles; ha sido literalmente jugada al azar y no puede sino concebir la vida como un juego en el que siempre se pierde. </p><p>Cova la conoce en manos de Barrera, comerciante enriquecido con el caucho, el oro y la explotación humana, quien hace falsas promesas a sus trabajadores para pagarles una miseria o, en el peor de los casos (el de Clarita), convertirlos en esclavos. Ella está llena de ecos contemporáneos de las mujeres víctimas de la guerra, el desplazamiento o la migración forzada. Es irónico que Barrera se queje de “los asilados de Venezuela” que hacían invivible el llano y lo “infestaban como dañina langosta” (p. 37), a la vez que saca provecho de su necesidad. </p>",
        image: "img/citas/azar/cita_05.jpg",
        bg: "img/citas/azar/4/Azar_Cita05_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        text: "<p>En estas fundaciones me dejó botada el coronel Infante, guerriyero venezolano que tomó a Caicara. Ayí me rifaron al tresiyo, como simple cosa, y fui ganada por un tal Puentes, pero Infante me descontó al liquidar el juego. Después lo derrotaron, tuvo que asilarse en Colombia y me abandonó por aquí (p. 58).</p>",
        desc: "Testimonio que Clarita dado a Arturo Cova luego de ser herido por una bala. ",
        galeria: [
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
            btnText: "Haga click para acceder al recurso completo",
            img: "img/citas/azar/4/5.2.Azar.jpg",
            thumbnail: "img/citas/azar/4/5.2.Azar_Thumb.jpg",
          },
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
  {
    id: "espejismos",
    title: "Espejismos",
    minititle: "los espejismos",
    tarjeta: "img/azar.png",
    titleImg: "",
    intro:
      "<p><i>Espejismo</i> es una palabra paradójica. Se define como una ilusión óptica, pero al referir al espejo recuerda que lo que este nos muestra es, en una buena medida, una ilusión. Nos gusta creer que quien vemos en frente es el fidedigno retrato invertido de quien somos y nos aferramos a esa ilusión, pero siempre el espejo nos puede mostrar más alargados o achatados, más gordos o flacos, más bellos o feos. De ahí que los gabinetes de espejos fueran una atracción en ferias y circos de antaño. Era divertido verse monstruoso, ver reflejada una imagen desconocida de sí mismo. Porque, al fin y al cabo, ¿quién no deposita sus ilusiones en el espejo, lo que quiere ser o como quiere verse para agradar o aterrar? </p>",
    textoFinal:
      "<p><i>La vorágine</i> es también una galería de ilusiones y espejismos ópticos, ciertamente, pero también mentales, sentimentales, ideológicos y políticos. Las naciones y los valores nacionales se hacen ilusorios en las fronteras; el progreso, la conquista, la fama y la riqueza son hechos artificiosos. “¡Sueños irrealizados, triunfos perdidos!”, exclama el cauchero en su lamento, que es también el de Arturo Cova. Son sueños que, además, terminan en pesadillas. </p>",
    citas: [
      {
        id: "04",
        image: "img/citas/espejismos/cita_01.jpg",
        bg: "img/citas/espejismos/0/Espejismos_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>Desde que aparece en Cáqueza, el Pipa es un vendedor de ilusiones en <i>La vorágine</i>. Cautivó la curiosidad y la ilusión de Arturo Cova y, sobre todo, de Alicia con palabras. El Casanare hacia el que ella huía, y que seguramente imaginaba como una difusa provincia en un mapa, de pronto se mostraba como un lugar que al tiempo sonaba temible y propicio para la aventura. ¿Creía, como Arturo Cova, que encontraría un refugio y una paz anónima allí? ¿Esperaba retornar a Bogotá al cabo de unos meses? ¿Sintió un súbito impulso por seguir hacia la región amazónica? Las contundentes imágenes dibujadas por el Pipa en un mínimo parlamento la hechizaron como una serpiente. Cova, al menos, lo sintió así, porque inmediatamente le pidió al Pipa que se callara. Como espejismos, el Llano, las caucherías, el Amazonas, el tigre y las culebras se veían al alcance de la mano. </p>",
        text: "<p>―¿Ha vivido usted en Casanare? —le preguntó.</p><p> ―Sí, sumercé, y conozco el Llano y las caucherías del Amazonas. Mucho tigre y mucha culebra he matado con la ayuda de Dios (p. 19).</p>",
        desc: "Diálogo entre Alicia y el Pipa en las cercanías de Villavicencio.",
        galeria: [
          {
            name: "1.1. Sin título. Noé León",
            type: "tif",
            ficha: [
              "Sin título ",
              "Noé León ",
              "1971 ",
              "Banco de la República, Colección de Arte, AP369",
            ],
            text: "<p>El ocañero Noé León (1907-1978) fue un pintor autodidacta y gran exponente del arte conocido como “ingenuo” en el siglo XX colombiano. Sus obras retrataron un mundo selvático o ribereño exuberante, con tintes de pesadilla y violencia, producto de su vida de andariego. Fue policía, vendedor ambulante y cobrador de impuestos. El mundo de los cuadros de Noé León es el de la gente llevada por el viento, los miles de personas que suelen llamarse a sí mismas “fregadas” o “jodidas”, que van por la vida detrás de ilusiones, como el Pipa. Esos también eran los caucheros de <i>La vorágine</i>. Este lienzo se parece a las palabras del Pipa: advierte sobre una selva misteriosa, habitada por animales fascinantes y temibles, vista desde un ojo infantil que también advierte el enorme peligro del lugar.</p>",
            link: "https://colecciones.banrepcultural.org/document/coleccion/63a069015d96b8790f26037c",
            btnText: "Haga click para acceder al recurso completo",
            img: "img/citas/espejismos/0/1.1.Espejismos.jpg",
            thumbnail: "img/citas/espejismos/0/1.1.Espejismos_Thumb.jpg",
          },
          {
            name: "1.2. Personas alrededor del cadáver de Roa Sierra. Sady González",
            type: "jpg",
            ficha: [
              "Personas alrededor del cadáver de Roa Sierra ",
              "Sady González ",
              "1948 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, FT2071",
            ],
            text: "<p>Esta tétrica fotografía, tomada por Sady Gonzáles (1913-1979) el 10 de abril de 1948, muestra el cadáver de Juan Roa Sierra, que un día antes había asesinado a Jorge Eliécer Gaitán. Luego de tirar del gatillo, decenas de personas enfurecidas rodearon a Roa y lo arrastraron por las calles de Bogotá casi hasta desintegrarlo. </p><p>Quien le vendió el revolver dijo que Roa justificó la compra diciendo que se iba para los Llanos a acompañar una expedición de exploradores extranjeros. Cuando le preguntaron cuándo regresaba, respondió: “Si los indios no me matan y las fieras no me comen, nos volveremos a ver”. El suyo parecía un parlamento emitido por el Pipa y evocaba un lugar que para 1948 todavía era sinónimo de peligro y ferocidad. Con el Bogotazo desatado por los disparos de Roa se inició el periodo conocido como la Violencia, un espejismo que nos hizo creer que la agresión es el camino hacia la paz. </p>",
            link: "",
            btnText: "",
            img: "img/citas/espejismos/0/1.2.Espejismos.png",
            thumbnail: "img/citas/espejismos/0/1.2.Espejismos_Thumb.jpg",
          },
        ],
      },
      {
        id: "07",
        image: "img/citas/espejismos/cita_02.jpg",
        bg: "img/citas/espejismos/1/Espejismos_Cita02_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        comentario:
          "<p>El llano y, por extensión, la frontera se les aparecen muy temprano a Arturo y Alicia como espejismos. Apenas Cova asegura que se están familiarizando con el entorno, la óptica les juega una trampa. Se trata de un “fenómeno de la región” creado por la refracción que ocurre por las altas temperaturas, al igual que en los desiertos. Pero en las palabras de don Rafo hay también una advertencia: la frontera es propensa a generar ilusiones. </p><p>Estas ilusiones son como los calmos venados que pasan frente a los ojos de los viajeros, que la ambición y vanidad de Cova ven como un trofeo de cacería. Parecen alcanzables, pero en realidad se hallan muy lejos, son imposibles. Lo mismo pasará con todos los planes grandiosos de Arturo. Tal y como lo lamenta al inicio de la tercera parte de La vorágine, nunca supo calcular el tiro. La ironía es que quienes sí sabían cómo tratar esos “fenómenos de la región” y procurar su sustento eran las bandas de indígenas. </p>",
        text: "<p>Poco a poco el regocijo de nuestras lenguas fue cediendo al cansancio. Habíamos hecho copiosas preguntas que don Rafo atendía con autoridad de conocedor. Ya sabíamos lo que era una <i>mata</i>, un <i>caño</i>, un <i>zural</i>, y por fin Alicia conoció los venados. Pastaban en un estero hasta media docena, y al ventearnos enderezaron hacia nosotros las orejas esquivas.</p><p>―No gaste usted los tiros de revólver ―ordenó don Rafo―. Aunque vea los bichos cerca, están a quinientos metros. Fenómenos de la región (p. 23).</p>",
        desc: "Memorias de Arturo Cova sobre su encuentro con don Rafo en el Llano ",
        galeria: [
          {
            name: "2.1. La antelia en Fute. Lázaro María Girón y Greñas",
            type: "jpg",
            ficha: [
              "La antelia en Fute ",
              "Dibujo de Lázaro María Girón grabado por Greñas ",
              "En Papel Periódico Ilustrado, n.º 40, 1883 ",
              "Hemeroteca Biblioteca Luis Ángel Arango, 070.9861 P16p2 ",
            ],
            text: "<p>La época en que José Eustasio Rivera escribió La vorágine está marcada por una idea de nación que había divulgado la Comisión Corográfica entre 1850 y 1862. La Comisión puso de presente cuánto había por descubrir en el país que fuera útil para la producción y cuánto había de asombroso y extraño en la enorme diversidad del territorio colombiano. El científico, pintor, cronista, crítico de arte y viajero Lázaro María Girón hizo parte de la Comisión Corográfica. Publicó sus ilustraciones y análisis sobre los más variados temas en el Papel Periódico Ilustrado, un periódico de enorme influencia para el pensamiento, las artes y la cultura visual de la segunda mitad del siglo XIX en Colombia. </p><p>En el número 40 (mayo de 1883), Girón describió un extraordinario fenómeno: la antelia o espectro de Brocken que presenció en las alturas de la hacienda Fute (entre Soacha, Bojacá y Mosquera, en Cundinamarca), producida por su sombra proyectada sobre una espesa cortina de niebla. Girón infirió que los antiguos habitantes de la sabana de Bogotá, al experimentar el mismo fenómeno, habían creado sus nociones de divinidad. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll26/id/304 ",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/espejismos/1/2.1.Espejismos.jpg",
            thumbnail: "img/citas/espejismos/1/2.1.Espejismos_Thumb.jpg",
          },
          {
            name: "2.2. Camille Flammarion frente al globo del planeta Marte",
            type: "jpg",
            ficha: [
              "Camille Flammarion frente al globo del planeta Marte ",
              "Anónimo ",
              "s. f. ",
              "Biblioteca Nacional de Francia, Agencia de Prensa Meurisse, París ",
            ],
            text: "<p>Es probable que José Eustasio Rivera hubiera estudiado la obra del divulgador científico francés Camille Flammarion (1842-1925), cuyos libros eran ampliamente traducidos y difundidos en Hispanoamérica. Hay algo en la aproximación del francés que, aunque no sabemos si influyó en Rivera, sí pudo haber dispuesto a muchos de sus lectores: Flammarion era un astrónomo y divulgador místico que creía en un mundo encantado y en el significado trascendental y poético de los fenómenos atmosféricos. Así como explicaba con la rigurosidad del lenguaje científico de su época las razones de la ocurrencia de las cosas, defendía la existencia de formas imperceptibles de vida en la Tierra y de seres vivos en otros planetas, la eficacia del espiritismo y la transmigración de las almas.</p>",
            link: "",
            btnText: "",
            img: "img/citas/espejismos/1/2.2.Espejismos.jpg",
            thumbnail: "img/citas/espejismos/1/2.2.Espejismos_Thumb.jpg",
          },
        ],
      },
      {
        id: "08",
        image: "img/citas/espejismos/cita_03.jpg",
        bg: "img/citas/espejismos/2/Espejismos_Cita03_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        comentario:
          "<p>Narciso Barrera representa el mismísimo diablo en La vorágine: un ser de perturbadora e impecable blancura en medio de la espesura selvática o de los trabajos del llano, que se dedica a vender ilusiones que se vuelven condenas. No es mucho más y nada indica que tenga mayor capital. Lo único que tiene son palabras melosas y un carisma que fascina y convence a hombres y mujeres sobre paraísos futuros si le siguen hacia el Vichada.</p><p>Las postales que reparte a diestra y siniestra son espejismos. Son fotografías que hacen las veces de dones que embrujan. Quien las recibe, sucumbe al hechizo, pues siembran en ellos la ambición, el deseo y la envidia. Los contaminan. Luego salen a perseguir el espejismo para solo encontrar la muerte en el infierno verde. Como buen Narciso, el mismo Barrera sucumbirá a su propio encantamiento, a su propia vanidad: el espejismo mayúsculo. La muerte lo va a encontrar literalmente viéndose en el espejo. </p>",
        text: "<p>Y con acento cálido refirió que Barrera había venido a llevar gente para las caucherías del Vichada.</p><p>—Es la ocasión de mejorá: dan alimentación y cinco pesos por día. Así se lo he dicho a Franco […]. </p><p>—Barrera es rasgaísimo. Y miren las vistas del fábrico en el Vichada, a onde quere yevarnos. Digan imparcialmente si no son una preciosidá esos edificios y si estas fotografías no son primorosas. Barrera las ha repartío por toas partes. Miren cuántas tengo pegáas en el baúl.</p><p>Eran unas postales de colores. Se veían en ellas, a la orilla montuosa de un río, casas de dos pisos, en cuyos barandales se agrupaba la gente. Lanchas de vapor humeaban en el puertecito (pp. 28-29). </p>",
        desc: "Palabras de Griselda sobre la visita que hizo Barrera a La Maporita.",
        galeria: [
          {
            name: "3.1. Explotación de las salinas. Santa Marta, Colombia",
            type: "jpg",
            ficha: [
              "Explotación de las salinas. Santa Marta, Colombia. ",
              "Anónimo ",
              "s. f. ",
              "En Colección de tarjetas postales de Colombia, vol. 6, 1903 - 1925 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, TP0204 ",
            ],
            text: "<p>Las fotos de Clemente Silva y de un cauchero anónimo que acompañaron la primera edición de La vorágine provenían de postales y fueron incluidas en varias ediciones de la novela para enganchar al lector. </p><p>La vorágine da cuenta de una época en la que convergieron la fotografía y los correos. Miles de fotografías de entre 1900 y 1930 se imprimieron como postales con el fin de circular por el mundo y seducir, maravillar. El mercado de las postales era enorme y generaba algo parecido a una red social de nuestros tiempos. Valiéndose de imágenes de lugares que estimulaban la curiosidad y el deseo por viajar, las postales surtían la ilusión de estar allí, en ese lugar y con esas personas. Esta circulación era posible gracias a la cada vez más rápida industria postal, movida por trenes, barcos, aviones y carros, todos vehículos que requerían caucho. </p>",
            link: "",
            btnText: "",
            img: "img/citas/espejismos/2/3.1.Espejismos.jpg",
            thumbnail: "img/citas/espejismos/2/3.1.Espejismos_Thumb.jpg",
          },
          {
            name: "3.2. Rumbo a los yacimientos de oro de Klondike. Keystone",
            type: "tif",
            ficha: [
              "Rumbo a los yacimientos de oro de Klondike, Chilcoot Pass, Alaska ",
              "Keystone View Company ",
              "1898 ",
              "Biblioteca Pública de Nueva York ",
            ],
            text: "<p>Por la misma época en la que Rivera publicó su novela, el escritor estadounidense Jack London (1876-1916) buscó fortuna en el Klondike o Yukón canadiense. Dejó varias narraciones que dialogan con La vorágine, siendo la más famosa El llamado de la selva (1903). Ramón Vinyes (1882-1952), librero y escritor catalán residente en Barranquilla y futuro mentor de Gabriel García Márquez, produjo un notable texto sobre London en 1919, lo que abre la posibilidad de que Rivera conociera la obra del estadounidense. En las novelas de London, el oro es una irrealidad. Lo que verdaderamente importa, en medio de ese contexto violento y difícil, es la solidaridad, el amor y la voluntad por sobrevivir. </p>",
            link: "",
            btnText: "",
            img: "img/citas/espejismos/2/3.2.Espejismos.png",
            thumbnail: "img/citas/espejismos/2/3.2.Espejismos_Thumb.jpg",
          },
        ],
      },
      {
        id: "13",
        image: "img/citas/espejismos/cita_04.jpg",
        bg: "img/citas/espejismos/3/Espejismos_Cita04_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        comentario:
          "<p>La vorágine muestra cómo cambia la percepción en la frontera. No solo la gente y la naturaleza circundantes se mueven a otro ritmo, más pausado que el de la frenética ciudad, sino que también las ideas de continuidad y ruptura se trastocan o diluyen. Germán Arciniegas escribió en 1944 que “Todos los hombres que han comprendido la selva, lo primero que han hecho al pisar sus dominios, es tirar sus relojes en el primer charco que encuentran a la vista. Esto es lo que se denomina por los blancos la enfermedad de la selva”. Según interpretaciones como estas, el entorno monótono produce ambiciones delirantes y genera una profunda melancolía; una nostalgia por lo que se dejó atrás, por lo que hubiera podido ser y no fue, como reza la carta de Arturo Cova que hace de epígrafe en La vorágine. </p><p>En la selva, Arturo Cova se imagina como un aventurero. La palabra aventura implica en su etimología “lo que está por venir”. Las aventuras en La vorágine son viajes guiados por espejismos, cuando no llevan a la locura. Cova se veía temerario, donjuanesco y experimentado. Pero estas son trampas de su autopercepción: la trama va mostrando que es una persona muy distinta. Su imagen de sí es otro espejismo, como son las ilusiones que desde allí proyecta. No son las de un aventurero; más bien son las de alguien que busca una vida sedentaria, cómoda y burguesa. </p><p>“Esas cosas de Arturo” son sus repetidas ensoñaciones con una vida que sea todo lo opuesto a la vorágine que lo arrastra. La seguridad que anula el azar. La familia que apacigua el deseo de lances amorosos. La estabilidad que se opone a la violencia.  </p>",
        text: "<p>Me vi de nuevo entre mis condiscípulos, contándoles mis aventuras de Casanare, exagerándoles mi repentina riqueza, viéndolos felicitarme, entre sorprendidos y envidiosos. Los invitaría a comer a mi casa, porque ya para entonces tendría una, propia, de jardín cercano a mi cuarto de estudio. Con frecuencia, Alicia nos dejaría solos, urgida por el llanto del pequeñuelo, llamado Rafael, en memoria de nuestro compañero de viaje [...].</p><p>Poco a poco, mis buenos éxitos literarios irían conquistando el indulto. Según mi madre, debía tenérseme lástima. Después de mi grado en la facultad se olvidaba todo. Hasta mis amigas, intrigadas por mi conducta, disimularían mi pasado con esta frase: ¡Esas cosas de Arturo...! (p. 43). </p>",
        desc: "Ensoñaciones de Arturo Cova de llegar a ser exitoso el negocio entre Franco y Zubieta. ",
        galeria: [
          {
            name: "4.1. De Bogotá al Atlántico. Santiago Pérez Triana",
            type: "jpg",
            ficha: [
              "De Bogotá al Atlántico por las vías de los ríos Meta, Vichada y Orinoco ",
              "Santiago Pérez Triana ",
              "París: Imprenta Sudamericana, 1897 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 918.6 P37b2 ",
            ],
            text: "<p>Santiago Pérez Triana (1858-1916) fue un eminente escritor, diplomático y viajero del siglo XIX colombiano. En la narración de un viaje que emprendió en 1893, siguiendo un camino parecido al de Arturo Cova, se ve que compartía la misma percepción de un tiempo estancado y que llamaba a los espejismos del recuerdo: </p><p>Aunque por semanas no más se contaba el tiempo de nuestra separación de las ciudades, merced a un espejismo mental de fácil explicación, dada la inmensidad que nos rodeaba, la cual imponía el sello de sus amplias proporciones a todas las impresiones del ánimo, nos parecía que habían transcurrido muchos años desde que así vagábamos peregrinos en las orillas de los ríos, al amparo de los bosques, en comunión íntima con la naturaleza. Y así como al viajero a larga distancia, ausente del nativo hogar, o al marino que en altas horas de la noche escudriña las estrellas sobre el puente de su barco, los recuerdos de nuestro mundo nos causaban especial deleite, y nos entregábamos a ellos, discurriendo con exquisita fruición sobre personas y hechos conocidos. (pp. 184 - 186) </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/3245/rec/2 ",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/espejismos/3/4.1.Espejismos.jpg",
            thumbnail: "img/citas/espejismos/3/4.1.Espejismos_Thumb.jpg",
          },
          {
            name: "4.2. Alma sin ilusión. Miguel Rasch Isla",
            type: "jpg",
            ficha: [
              "Alma sin ilusión",
              "Miguel Rasch Isla",
              "1916",
              "En Revista Moderna, n.º 16, 1916",
              "Hemeroteca Biblioteca Luis Ángel Arango, 17",
            ],
            text: "<p>El barranquillero Miguel Rasch Isla (1887-1953), amigo de Rivera, era conocido en los círculos literarios de su época como “el caballero del soneto” por la facilidad con que producía poemas. Rasch Isla sostenía con Rivera una amable competencia por quién dominaba mejor esta forma de poesía. “Para José Eustasio Rivera, mal amigo y peor poeta, con la admiración ferviente de su Miguel Rasch Isla”, rezaba la juguetona dedicatoria autógrafa al ejemplar que le obsequió de su poemario A flor de alma (1911). Luego de publicada la primera edición de La vorágine, Rasch Isla le ayudó a Rivera a revisar el texto y eliminar la cadencia poética que originalmente tenía. </p><p>Alma sin ilusión es un soneto de Rasch Isla que seguía los estándares de su época. Cientos de poemas, tangos, valses y bambucos se compusieron sobre la idea: el alma está derrotada y no tiene ilusiones. La ironía está en que, a falta de ilusiones, aparece otro espejismo: “ser en el dolor cual una casa en el que todo ha muerto, pero donde una alondra en prisión vive cantando”. </p>",
            link: "",
            btnText: "",
            img: "img/citas/espejismos/3/4.2.Espejismos.jpg",
            thumbnail: "img/citas/espejismos/3/4.2.Espejismos_Thumb.jpg",
          },
        ],
      },
      {
        id: "18",
        image: "img/citas/espejismos/cita_05.jpg",
        bg: "img/citas/espejismos/4/Espejismos_Cita05_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        comentario:
          "<p>En La vorágine, el horror entra en escena con la muerte del llanero Millán a causa de la corneada de un toro salvaje. El cortejo fúnebre del jinete sin media cabeza se revela ante Cova como una fantasmagoría: otra forma de ilusión óptica de connotaciones tétricas. Como si se tratara de una ilusión desértica y casi mística, la caravana pasa frente a él anunciándole lo que vendrá: la Violencia, el ensañamiento de la muerte sobre la vida, la pérdida del alma y la impotencia. A partir de aquí, la oscuridad de la muerte fascinará a Arturo Cova y le llamará a hundirse en la selva. </p><p>La muerte propia o ajena es otro espejismo tras del cual irán Cova y sus camaradas. Y así como escribió el poeta Cova, tan célebremente, “jugué mi corazón al azar y me lo ganó la Violencia”, pudiera igualmente decir, como hizo en 1936 un magistral colega suyo de una generación posterior, León de Greiff (1895-1976): “Juego mi vida, cambio mi vida / de todos modos / la llevo perdida”. </p>",
        text: "<p>Lentamente, el desfile mortuorio pasó ante mí: un hombre de a pie cabestreaba el caballo fúnebre, y los taciturnos jinetes venían detrás. Aunque el asco me fruncía la piel, rendí mis pupilas sobre el despojo. Atravesado en la montura, con el vientre al sol, iba el cuerpo decapitado, entreabriendo las yerbas con los dedos rígidos, como para agarrarlas por última vez. Tintineando en los calcañales desnudos, pendían las espuelas que nadie se acordó de quitar, y del lado opuesto, entre el paréntesis de los brazos, destilaba aguasangre el muñón del cuello, rico de nervios amarillosos, como raicillas recién arrancadas. La bóveda del cráneo y la mandíbula que la sigue faltaban allí, y solamente el maxilar inferior reía ladeado, como burlándose de nosotros. Y esa risa sin rostro y sin alma, sin labios que la corrigieran, sin ojos que la humanizaran, me pareció vengativa, torturadora, y aun al través de los días que corren, me repite su mueca desde ultratumba y me estremece de pavor (pp. 77-78). </p>",
        desc: "Descripción de Arturo Cova del cuerpo inerte de Millán, luego de que un toro lo corneara.",
        galeria: [
          {
            name: "5.1. Cementerio de indígenas. Curiosidades de Colombia. JMGA",
            type: "jpg",
            ficha: [
              "Cementerio de indígenas. Curiosidades de Colombia ",
              "José María Gutiérrez de Alba ",
              "En Impresiones de un viaje a América, tomo V, 1870-1884 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, MSS3357 ",
            ],
            text: "<p>El viajero, periodista, escritor y dramaturgo español José María Gutiérrez de Alba pintó esta acuarela, con su respectiva reflexión, mientras recorría los llanos de San Martín a principios de 1871. </p><p>De una manera semejante a la visión de Arturo Cova de la procesión fúnebre de Millán, Gutiérrez experimenta una emoción mística (“religiosa”, la llama él) al encontrarse con un discreto cementerio de indios. Le parece un llamado a la humildad, a lo esencial de la conmemoración de la muerte, por oposición a los grandes monumentos de los cementerios en las urbes. Aunque Gutiérrez de Alba encuentra consuelo en la aparición mientras que Cova sucumbe ante el desespero, en ambos casos la frontera ―el desierto, el llano, la selva― se muestra como un lugar propicio para la revelación. Este es un motivo antiquísimo que, en muchas mitologías, llevan al héroe al desierto o a la selva a buscar alguna manifestación que anuncie su destino. La cita que acompaña la acuarela dice: </p><p>No había allí paredes que rodeasen aquel recinto mortuorio, ni túmulos levantados por la vanidad sobre el polvo de los que ya no pueden ostentarla; allí no había más que algunos toscos maderos colocados en forma de cruz entre un bosque solitario y un camino casi tan solitario como el bosque; y, sin embargo, aquellas humildes tumbas despertaron en mi espíritu ideas más grandes y un respeto religioso mil veces más profundo que el que había experimentado en situaciones análogas, al visitar los cementerios suntuosos, donde el mármol y el bronce traducen en artísticas formas las miserables ilusiones de lo que se llama en el mundo la grandeza humana (6 de enero de 1871). </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll16/id/30",
            btnText: "Abrir material en Babel a través del vínculo",
            img: "img/citas/espejismos/4/5.1.Espejismos.jpg",
            thumbnail: "img/citas/espejismos/4/5.1.Espejismos_Thumb.jpg",
          },
          {
            name: "5.2. Mirando al misterio. Luis Zea Uribe",
            type: "jpg",
            ficha: [
              "Mirando al misterio: contribución al estudio de los fenómenos medianímicos y sus proyecciones sobre el problema moral y religioso ",
              "Luis Zea Uribe ",
              "París: Librairie des Sciences Psychiques, 1923 ",
              "Biblioteca Luis Ángel Arango, Colección Remota - Palacio Rudas, 133.9 Z31m ",
            ],
            text: "<p>Un año antes de que apareciera La vorágine, el médico antioqueño Luis Zea Uribe (1872-1934) publicó Mirando al misterio, obra que escandalizó a la Iglesia y que le valió la excomunión por defender el espiritismo. En el libro, Zea hablaba de las manifestaciones de la vida después de la muerte y de la inmanencia del espíritu cuando se liberaba del cuerpo. José Eustasio Rivera seguro había oído hablar del médico y de su obra, pues Zea era profesor de la Facultad de Medicina de la Universidad Nacional, donde Rivera estudió Derecho entre 1912 y 1917. Además, Zea se había hecho famoso por ser el cirujano que intentó salvar la vida del general Rafael Uribe Uribe después de su atentado en 1914. </p><p>Por la época en la que este libro apareció, Rivera también se interesó por las manifestaciones de la vida desde el más allá. Varias experiencias lo habían convencido de que esta comunicación era posible. En Orocué, durante su participación en la Comisión de Límites con Venezuela, Rivera sufrió episodios de demencia transitoria, bien fuera por el golpe de sol o por las altas fiebres del paludismo. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4334/rec/1",
            btnText: "Abrir material en Babel a través del vínculo",
            img: "img/citas/espejismos/4/5.2.Espejismos.jpg",
            thumbnail: "img/citas/espejismos/4/5.2.Espejismos_Thumb.jpg",
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
  {
    id: "codicia",
    title: "Codicia",
    minititle: "la codicia",
    intro:
      "<p>Más que una “novela de la selva”, <i>La vorágine</i> es una novela sobre el capitalismo; más precisamente, sobre las formas que adopta el capitalismo salvaje en el contexto de los territorios fronterizos. En estas regiones, los negocios se entienden como redención y civilización, como inversiones que dan “impulso a la actividad financiera”, al progreso y al desarrollo. </p><p>Tal vez el rasgo más seductor de estas regiones consideradas salvajes e incultas a principios del siglo XX es la promesa de riqueza que se les atribuye y su potencial para el “comercio internacional” (como se conocía en ese momento el sistema global del capital). La bandera económica de este modelo fue la “apertura de recursos” para el mercado global. </p>",
    textoFinal:
      "<p>Si algo caracteriza el periodo de finales del siglo XIX y principios del siglo XX en América Latina fue el auge de las <i>industrias de materias primas</i>, que implicó la explotación de una serie de productos de diversas procedencias históricas y geográficas que fueron el motor del modelo “extractivo exportador”, adoptado por las economías de la región desde finales del siglo XIX. Este modelo se sustentó en tres ideas fundamentales: los recursos naturales son ilimitados, su explotación debe ser rápida y barata, y el progreso se sustenta en la acumulación de capital. Tales ideas propiciaron la violencia entre seres humanos y contra la naturaleza. </p>",
    citas: [
      {
        id: "14",
        image: "img/citas/codicia/Codicia_Cita01.jpg",
        bg: "img/citas/codicia/0/Codicia_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>En su acepción común, la RAE define codicia como el “Afán excesivo de riquezas”. La cita anterior enuncia el estado anímico de Arturo Cova durante su periodo en los llanos. Se imagina a sí mismo como un “héroe” que ha llevado el progreso a las zonas salvajes: un “civilizador”. Su premio es la acumulación de riquezas y su reconocimiento debe ser público. La codicia necesita la exhibición de dos cosas: la riqueza y el poder. ¿Para qué ambas si no es para tener lo que se desea? Ahora, el “civilizador”, en compensación por su trabajo, debe ser satisfecho. No importa si sus deseos son lícitos o éticos, si se le quieren dar o no. Tomará lo que cree merecer, aunque sea por la fuerza. La “dominante obsesión” no solo es tener más, es ser más. Al final, esta locura solo traerá dolor y muerte, como al toro atraído por los engaños del capote. </p>",
        text: "<p>El pensamiento de la riqueza se convirtió en esos días en mi dominante obsesión, y llegó a sugestionarme con tal poder, que ya me creía ricacho fastuoso, venido a los llanos a dar impulso a la actividad financiera (p. 43).</p>",
        desc: "Pensamientos de Arturo Cova ante las posibilidades de éxito del negocio entre Franco y Zubieta.",
        galeria: [
          {
            name: "1.1. Encuentro con un tigre. JMGA",
            type: "jpg",
            ficha: [
              "Encuentro con un tigre. Camino de los Llanos",
              "José María Gutiérrez de Alba",
              "En Impresiones de un viaje a América, tomo V, 1870-1884",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, MSS3357",
            ],
            text: "<p>En esta representación del encuentro con un tigre (probablemente, un jaguar) se muestra claramente el paisaje de la colonización llanera que Rivera describe en La vorágine: un horizonte de pastos que va sustituyendo el paisaje bosquesino de las sociedades indígenas que habitaron históricamente la región. Aquí, como lo muestra la lámina de Gutiérrez de Alba, se aprecia la lucha contra la selva, es el avance del paisaje que resulta del despojo de las tierras indígenas y de la inversión de capital con la que sueña Arturo Cova. Este paisaje del despojo se ve representado en el avance de un hombre armado, entre los troncos de los antiguos gigantes de la selva, de cuya frontera salta un jaguar que está siendo cazado.</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll16/id/43",
            btnText: "Haga click para acceder al recurso completo",
            img: "img/citas/codicia/0/1.1.Codicia.jpg",
            thumbnail: "img/citas/codicia/0/1.1.Codicia_Thumb.jpg",
          },
          {
            name: "",
            type: "",
            ficha: [],
            text: "<p>Las variaciones del escudo del actual departamento del Vichada (comisaría hasta 1991), en las que el paisaje de pastos y el ganado se opone a la selva y el jaguar, ilustran una idea que la novela de Rivera pone en cuestión: la noción de que las regiones salvajes, representadas por el jaguar en el monte, son lugares deshabitados, tierras de nadie para ser tomadas por quienes tienen alma de empresarios, negando y despreciando la autogestión y la productividad de sus habitantes originales. “Tierra de hombres para hombres sin tierra”, reza el escudo. Rivera, a través de los relatos de varios de los personajes de La vorágine, muestra que esta tierra estaba habitada por pueblos indígenas, a quienes se les niegan sus derechos a sangre y fuego en nombre de la “civilización”, aquí representada por el ganado y el mar de pastos.</p>",
            link: "",
            btnText: "",
            img: "img/citas/codicia/0/1.2.Codicia.jpg",
            thumbnail: "img/citas/codicia/0/1.2.Codicia_Thumb.jpg",
          },
        ],
      },
      {
        id: "19",
        image: "img/citas/codicia/Codicia_Cita02.jpg",
        bg: "img/citas/codicia/1/Codicia_Cita02_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>Este pasaje de La vorágine relata la excursión de Arturo Cova, Fidel Franco, el Pipa y el mulato Correa al garcero de Las Hermosas, a donde se dirigen a recoger plumas blancas de garza para venderlas a los comerciantes de Orocué. Estos las exportaban por el Orinoco hacia las ​grandes ​capitales de la moda. Los garceros se encuentran en los extensos esteros y lagunas de las llanuras inundables, a donde llegan una gran multiplicidad de especies de aves acuáticas a anidar. </p><p>Las investigaciones científicas recientes en biología y ciencias ambientales, con soportes etnográficos y arqueológicos, han reconocido que la existencia de estas lagunas de hiperabundancia se deben no solo a procesos puramente naturales, sino en gran parte a la actividad de las sociedades indígenas de la región. La explotación indiscriminada por parte de los colonizadores ha llegado a ponerlas en riesgos profundos e, incluso, a afectarlas de manera irrecuperable. </p>",
        text: "<p>—¿Y en qué lugar escondes el oro para tus planes?</p><p>–En el garcero de Las Hermosas. Cuatro libras de pluma fina, si mal nos va. Cada semana cambiaremos un manojito por mercancías […].</p><p>El inundado bosque del garcero, millonario de garzas reales, parecía algodonal de nutridos copos; y en la turquesa del cielo ondeaba, perennemente, un desfile de remos cándidos, sobre los cimborrios de los moriches, donde bullía la empeluzada muchedumbre de polluelos (p. 90).</p>",
        desc: "Conversación entre el Pipa y Arturo Cova sobre el garcero de Las Hermosas.",
        galeria: [
          {
            name: "2.1. La mujer detrás del arma. Gordon Ross",
            type: "tif",
            ficha: [
              "La mujer detrás del arma",
              "Gordon Ross",
              "24 de mayo de 1911",
              "Biblioteca del Congreso de los Estados Unidos",
            ],
            text: "<p>En uno de sus delirios, a Arturo Cova le parece ver llegar a Alicia “bajo el sombrero de lánguidas plumas, tendiéndome los brazos entre sollozos” (p. 57). Esta imagen de Alicia emplumada recuerda que, desde finales del siglo XIX, se impuso en la moda internacional adornar el vestuario femenino con “plumas irisadas”. En la Orinoquía, dos especies en particular, la garza real y la garza chumbita, fueron las protagonistas del boom de las plumas entre 1884 y 1930. Tuvieron una gran demanda en el mercado internacional para alimentar la industria de la moda: con ellas se creaban sombreros, boas, abanicos y estolas para las damas elegantes de la belle époque. </p><p>Esta ilustración del artista estadounidense Gordon Ross muestra una mujer a la moda de la belle époque, con sombrero de plumas y cazando garzas. Ilustra el modelo económico extractivo-exportador que dominó desde finales del siglo XIX hasta 1930, y que se concibió como un proyecto “civilizador” de selvas y “montes”. </p>",
            link: "",
            btnText: "",
            img: "img/citas/codicia/1/2.1.Codicia.png",
            thumbnail: "img/citas/codicia/1/2.1.Codicia_Thumb.jpg",
          },
          {
            name: "",
            type: "",
            ficha: [],
            text: "<p>El mapa muestra una síntesis del comercio de plumas en 1910, señalando con banderas los lugares de extracción de las materias primas y con abanicos los principales compradores. Por esa época, comerciantes locales colectaban las plumas de aves tropicales como las de las garzas del Orinoco, las de los avestruces africanos o las de las aves del paraíso en Nueva Guinea, y luego las vendían a empresas exportadoras, encargadas de subastarlas para las casas de moda en Nueva York, París y Ámsterdam. La creación de importantes iniciativas conservacionistas de la fauna, como la Sociedad para la Protección de Aves en el Reino Unido (1889) o la Sociedad Audubon en Estados Unidos (1896) no detuvo la extracción. La desaparición de los ecosistemas hiperabundantes en biodiversidad (incluida la desaparición casi total de garzas y otros animales) y la aparición de otras tendencias en la moda sí lo hicieron.</p><p>La explotación desbordada de los garceros puso en riesgo la seguridad alimentaria de los indígenas, quienes protegían esos lugares como nichos sagrados de caza. Este proceso recuerda la extinción de poblaciones indígenas de Norte América: mientras la cacería de búfalos, ballenas y venados producía millonarios ingresos, la reducción de las fuentes alimentarias indígenas aceleraba su exterminio.</p>",
            link: "",
            btnText: "Para ver el libro completo, haga clic aquí",
            img: "img/citas/codicia/1/2.2.Codicia.jpg",
            thumbnail: "img/citas/codicia/1/2.2.Codicia_Thumb.jpg",
          },
        ],
      },
      {
        id: "31",
        image: "img/citas/codicia/Codicia_Cita03.jpg",
        bg: "img/citas/codicia/2/Codicia_Cita03_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>El fenómeno que Balbino Jácome describe en este pasaje de La vorágine ilustra una situación recurrente en las economías extractivas: el endeude. Esta práctica maximiza los beneficios económicos mediante la explotación laboral, al crear una deuda impagable por parte del comerciante/prestamista.​​ El crédito se otorga generalmente en mercancía, y el comerciante y prestamista controla los medios del intercambio (las pesas, las medidas, el registro, la contabilidad, etc.) y monopoliza los medios de transporte. El prestamista impone de manera ilegal y arbitraria el precio y los términos de la deuda, que se paga en trabajo o en entregas de un determinado producto a futuro. Se trata de una práctica que llega hasta nuestros días (por ejemplo, en las economías de la coca y la minería ilegal) y que se registra en libros de contabilidad ficticia como los que describe Jácome, creando un flujo de mercancías que se evapora en el aire, dejando solo miseria a su alrededor. </p>",
        text: "<p>Mas el crimen perpetuo no está en las selvas sino en dos libros: en el Diario y en el Mayor. Si su señoría los conociera, encontraría más lectura en el debe que en el haber, ya que a muchos hombres se les lleva la cuenta por simple cálculo, según lo que informan los capataces. Con todo, hallaría datos inicuos: peones que entregan kilos de goma a cinco centavos y reciben franelas a veinte pesos; indios que trabajan hace seis años y aparecen debiendo aún el mañoco del primer mes; niños que heredan deudas enormes, procedentes del padre que les mataron, de la madre que les forzaron, hasta de las hermanas que les violaron, y que no cubrirán en toda su vida, porque cuando conozcan la pubertad, los solos gastos de su niñez les darán medio siglo de esclavitud (p. 135).</p>",
        desc: "Palabras de Balbino Jácome a Clemente Silva en el marco de la llegada de un visitador a los barracones. ",
        galeria: [
          {
            name: "3.1. Pesando el caucho. Paternoster",
            type: "jpg",
            ficha: [
              "Pesando el caucho",
              "En G. Sidney Paternoster, The Lords of the Devil’s Paradise, Londres: Stanley Paul, 1913",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 985.063 P17l",
            ],
            text: "<p>El desarrollo empresarial en las zonas “salvajes” se basa en la penetración del comercio, teniendo como punta de lanza un ejército de comerciantes ambulantes conocidos como cacharreros en Colombia, bongueros en el Orinoco, aviadores en Perú o marrateros en Brasil. Ellos iniciaban el enganche, amarre o endeude de trabajadores que comprometían su trabajo contra avances de mercancías a crédito. </p><p>En el momento en que se escribe La vorágine, los comerciantes endeudaban a colonos, caboclos y campesinos para obtener bolones de caucho, que se evaluaban según el peso y la calidad para determinar su valor contra la deuda adquirida. La clave era que esta deuda, que se adquiría contra bagatelas y mercancías de baja calidad, nunca pudiera ser saldada. </p><p>En muchos casos, la deuda involucraba familias enteras y era hereditaria. Esta forma de trabajo “pre-pago” se caracterizó porque la promesa de empleo seguro y riqueza fácil trajo a la región a rebuscadores y migrantes, por lo general, hombres solos o familias sin tierra. La entrega de “avances” creó cadenas de deuda que amarraban a trabajadores, capataces e intermediarios con grandes firmas comerciales. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4319/rec/3",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/codicia/2/3.1.Codicia.png",
            thumbnail: "img/citas/codicia/2/3.1.Codicia_Thumb.jpg",
          },
          {
            name: "3.2. Recibiendo la tarea a los peones. En Gaspar de Pinell",
            type: "jpg",
            ficha: [
              "Recibiendo la tarea a los peones en una estación cauchera de Caraparaná",
              "Foto anónima",
              "En Gaspar de Pinell, Excursión apostólica por los ríos Putumayo, San Miguel de Sucumbíos, Cuyabeno, Caquetá y Caguán, Bogotá: Imprenta Nacional, 1928",
              "Biblioteca Luis Ángel Arango, Depósito A1- Colección General, 266.2 P45e",
            ],
            text: "<p>Los comerciantes y “cacharreros” tenían especial interés en “amarrar” a los pueblos indígenas, pues constituían la principal fuente potencial de mano de obra para la extracción del caucho. Para ello, procedían a endeudar a tribus enteras con el fin de apropiarse no solo de su trabajo, sino también de su vida y de su entorno. Se trataba de una forma de esclavitud que involucraba al conjunto de la sociedad indígena y sus instituciones por medio de diversas formas de violencia física, como el desplazamiento forzado de comunidades enteras, el trabajo brutalizado de hombres, mujeres y niños, y el concubinato de mujeres jóvenes. El endeude sigue siendo hasta hoy una práctica que sustenta la esclavización de migrantes ilegales y de mujeres y niñas prostituidas. El modelo sigue en vigencia, aunque el producto a extraer haya cambiado.</p><p>En la imagen, capataces reciben y pesan el caucho traído por los indígenas en una estación de la Casa Arana y Peruvian Amazon Co.</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4316/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/codicia/2/3.2.Codicia.jpg",
            thumbnail: "img/citas/codicia/2/3.2.Codicia_Thumb.jpg",
          },
        ],
      },
      {
        id: "40",
        image: "img/citas/codicia/Codicia_Cita04.jpg",
        bg: "img/citas/codicia/3/Codicia_Cita04_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>Este pasaje de La vorágine introduce a Tomás Funes, quien asumió por la fuerza la gobernación del Estado Federal de Amazonas en Venezuela, creando una “república independiente” para la extracción de caucho y balatá. Rivera conoció este episodio de primera mano cuando fue abogado de la Comisión de Límites Colombo-Venezolana. En la novela, Ramiro Estébanez relata su historia y se pregunta: </p><p>¿Cuál podrá ser la suerte de los caucheros de San Fernando? Causa pavura considerarla. Pasado el primer acto de la tragedia, palidecieron; pero el caudillo que improvisaron ya tenía fuerza, ya tenía nombre. Le dieron a probar sangre y aún tiene sed. ¡Venga acá la gobernación! Él mató como comerciante, como gomero, solo por suprimir las competencias; mas como le quedan competidores en siringales y en barracas, ha resuelto exterminarlos con igual fin y por eso va asesinando a sus mismos cómplices. </p><p>—¡La lógica triunfa! </p><p>—¡Que viva la lógica! (p. 189) </p><p>​​​​​De esta forma se refiere a la lógica del sistema y a la lógica de las caucherías y su régimen de violencia y terror. </p>",
        text: "<p>Y no pienses que al decir “Funes” he nombrado a persona única. Funes es un sistema, un estado de alma, es la sed de oro, es la envidia sórdida. Muchos son Funes, aunque lleve uno solo el nombre fatídico.</p><p>La costumbre de perseguir riquezas ilusas a costa de los indios y de los árboles; el acopio paralizado de caucherías para peones destinadas a producir hasta mil por ciento; la competencia del almacén del gobernador, quien no pagaba derecho alguno, y al vender con mano oficial recogía con ambas manos; la influencia de la selva, que pervierte como el alcohol, llegaron a crear en algunos hombres de San Fernando un impulso y una conciencia que los movió a valerse de un asesino para que iniciara lo que todos querían hacer y que le ayudaron a realizar (p. 184)</p>",
        desc: "Anotaciones de Arturo Cova del testimonio dado por Ramiro Estévanez sobre la matanza de San Fernando en 1913. ",
        galeria: [
          {
            name: "4.1. Mapa de las exploraciones de los Hermanos Reyes",
            type: "jpg",
            ficha: [
              "Mapa que muestra las exploraciones hechas por los Hermanos Reyes en la América del Sur y la línea del proyectado ferrocarril intercontinenta",
              "En Rafael Reyes, A través de la América del Sur: exploraciones de los hermanos Reyes. Trabajo presentado en la II Conferencia Panamericana reunida en México, Barcelona: R. de S. N. Araluce, 1902",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 918 R39a",
            ],
            text: "<p>Para comienzos del siglo XX, la macrorregión Orinoco-Amazónica fue escenario privilegiado del negocio de extracción masiva de caucho, que se ​posicionó​ como uno de los materiales más cotizados de la “segunda revolución industrial”. Tenía una multiplicidad de usos, en especial, en la industria automotriz, que creció de manera vertiginosa a principios del siglo XX. También era fundamental para el cableado, pues en este momento avanzaba la electrificación y se estaba intercomunicando el planeta por medio de cables submarinos para el telégrafo. </p><p>La importancia del caucho como potencial para la economía de la región queda ​expresada​ en el mapa que acompaña la memoria de las exploraciones de Rafael Reyes (presidente de Colombia entre 1904-1909) y sus hermanos. Allí se muestra el sueño de Reyes de construir una línea de tren que uniera el continente de norte a sur (dejando fuera las pampas, la Patagonia y la Tierra del Fuego). Es un mapa de recursos (aparecen la plata, el cobre, el hierro, la hulla y las tierras aptas para la ganadería) en el que se destaca el área de “caucho y cacao silvestres”. Muestra, además, los obstáculos que, de acuerdo con Reyes, era necesario afrontar: los indios salvajes (representados por flechas) o antropófagos (representados por calaveras negras). Esta idea de que los indios representan un obstáculo al desarrollo económico y a la explotación de recursos sigue vigente hasta hoy. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4320/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/codicia/3/4.1.Codicia.png",
            thumbnail: "img/citas/codicia/3/4.1.Codicia_Thumb.jpg",
          },
          {
            name: "",
            type: "",
            ficha: [],
            text: "<p>La extracción de caucho natural en el Amazonas se llevó a cabo mediante el establecimiento de una serie de “casas comerciales” que habían acumulado inmensos capitales. ​Varias​ de estas casas se mencionan en La vorágine y se describe con detalle el accionar de la Casa Funes y la Casa Arana Hermanos de la Peruvian Amazon Co. Sin embargo, estas no fueron las únicas. En realidad, se construyó una red de empresas comerciales que abarcaban la enorme zona cauchera Orinoco-Amazónica. Estas firmas, asociadas con capitales principalmente británicos, franceses y estadounidenses, acopiaban el 90% de la producción del caucho en el mercado global. En este mapa, que dista de ser exhaustivo, se muestran algunas de las principales casas caucheras.</p><p>Orinoco: Co Comercial Orinoco y Casa Funes.</p><p>Putumayo: Arana Hermanos - Peruvian Amazon Co.</p><p>Ríos Negro y Vaupés: JC Araujo, JS Amorim, Higson Co., Albuquerque Hnos. y Casa Pezil</p><p>Madeira y Madre de Dios: Suárez Hnos., Orton Bolivia Rubber Co., Madeira-Mamoré Rway Co., US Rubber Co., Co. Francaise du Cautchoc, Inca Rubber Co., Fitzcarrald & Cardozo da Rosa y Co. Clairmont.</p>",
            link: "",
            btnText: "",
            img: "img/citas/codicia/3/4.2.Codicia.jpg",
            thumbnail: "img/citas/codicia/3/4.2.Codicia_Thumb.jpg",
          },
        ],
      },
      {
        id: "41",
        image: "img/citas/codicia/Codicia_Cita05.jpg",
        bg: "img/citas/codicia/4/Codicia_Cita05_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>La vorágine utiliza la figura retórica de la selva como cárcel-sepulcro y como personaje que se defiende. Se enfrenta a quienes la violentan a través de hormigas, zancudos, enfermedades, culebras… Sin embargo, no es la selva la que mata, son los libros de cuentas: es la codicia la que impulsa los crímenes contra la naturaleza y la humanidad, y la que lleva a miles a buscar la riqueza en territorios para los que no están preparados. </p><p>Hay una especie de justicia poética en el hecho de que La vorágine fuera escrita en un libro de cuentas. La novela se constituye, de cierta manera, en un ajuste de cuentas: Rivera hace un registro minucioso de los excesos de quienes la explotan y, con ello, valora la codicia como fuente de muerte, y no de progreso. En otras palabras, condena a los hombres y exculpa a la selva. </p><p>Sin embargo, en la práctica, estos crímenes sí dieron inmensos beneficios a los “barones del caucho” —como se conocía a Funes y Arana—, a las grandes potencias y a la economía global de la época, que operó con un ojo cerrado ante las injusticias y el racismo cultural que invisibilizó las muertes de mulatos e indígenas bajo la justificación del “progreso” económico. </p>",
        text: "<p>Bien saben los gomeros que el oro vegetal no enriquece a nadie. Los potentados de la floresta no tienen más que créditos en los libros, contra peones que nunca pagan, si no es con la vida, contra indígenas que se merman, contra bongueros que se roban lo que transportan. La servidumbre en estas comarcas se hace vitalicia para esclavos y dueños: unos y otros deben morir aquí. Un sino de fracaso y maldición persigue a cuantos explotan la mina verde. La selva los aniquila, la selva los retiene, la selva los llama para tragárselos. Los que escapan, aunque se refugien en las ciudades, llevan ya el maleficio en cuerpo y alma. Mustios, envejecidos, decepcionados, no tienen más que una aspiración: volver, volver a sabiendas de que si vuelven perecerán. Y los que se quedan, los que desoyen el llamamiento de la montaña, siempre declinan en la miseria, víctimas de dolencias desconocidas, siendo carne palúdica de hospital, entregándose a la cuchilla que les recorta el hígado por pedazos, como en pena de algo sacrílego que cometieron contra los indios, contra los árboles (p. 189).</p>",
        desc: "Palabras del testimonio de Ramiro Estévanez sobre la matanza cometida por Funes en San Fernando. ",
        galeria: [
          {
            name: "5.1. En viaje. Carlos Rey de Castro",
            type: "jpg",
            ficha: [
              "En viaje",
              "Fotografía anónima",
              "En Carlos Rey de Castro, Los escándalos del Putumayo: carta abierta dirigida a Mr. Geo G. Michell. Cónsul de S.M.B., Barcelona: Imp. Viuda de L. Tasso, 1913",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 918.5 R39e",
            ],
            text: "<p>La Casa Arana, registrada en Londres como la Peruvian Amazon Co., fue el centro de un escándalo en el que se hicieron públicas las condiciones de tortura, violación, violencia extrema y terror a las que fueron sometidos los indígenas, esclavizados por la deuda, desplazados, asesinados y desposeídos de sus tierras. Este horrible capítulo de la historia empresarial en la región ha sido considerado por el historiador Roberto Pineda como un verdadero holocausto. </p><p>A través del relato de Clemente Silva, en La vorágine se da cuenta de las brutales formas de explotación del caucho en la región del Putumayo establecidas por Julio César Arana. Este comerciante peruano había comenzado como “aviador”: avanzando mercancías y cobrando la deuda en caucho. Fue consolidando su negocio y desplazando a otros comerciantes, y en 1903 crea la compañía comercial Arana Hermanos. Esta firma se convirtió en la principal exportadora de caucho en Iquitos, gracias a las “deudas” del sistema del enganche. </p><p>Arana y otros “barones del caucho” acumularon riqueza y poder mediante este tipo de prácticas, y aunque eran despiadados patrones, se consideraban empresarios ejemplares, que estaban “haciendo patria” en la selva: llegaron a consolidarse como cabeza del poder local, mediadores del capital internacional y representantes del Estado nacional. Gracias a que estos barones y reyes de la mercancía monopolizaban los medios de transporte y de comercio –lanchas, aviones y camiones—, rápidamente usurparon el gobierno de la zona y se asumieron como autoridades civiles y militares, consolidándose como el grupo que encarnaba y cooptaba al Estado.</p><p>En la fotografía, Julio César Arana cena junto a los cónsules estadounidense, inglés y peruano durante un viaje en El Liberal, uno de los vapores de la Casa Arana. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4315/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/codicia/4/5.1.Codicia.jpg",
            thumbnail: "img/citas/codicia/4/5.1.Codicia_Thumb.jpg",
          },
          {
            name: "5.2. Vapor de la United Fruit Company tomando banano",
            type: "jpg",
            ficha: [
              "Vapor de la United Fruit Company tomando banano",
              "United Fruit Company",
              "1913",
              "En Colección de postales de José María Restrepo-Millán (1908-1914)",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos",
            ],
            text: "<p>Entre las principales actividades extractivistas que se realizaban en Colombia durante la época en la que se publicó La vorágine estaban: el monocultivo de banano (Magdalena), la explotación del petróleo (Concesiones de Mares y Barco), la minería de oro y la explotación de maderas finas (Chocó), entre otras.</p><p>En las regiones selváticas, estas actividades se centraron en extraer los “frutos de la selva”: coca, cacao, tagua, añil, achiote, sarrapia, guaraná e ipecacuana, por mencionar algunos. Estos frutos se suponían silvestres, sin reconocer que son producto del manejo indígena: son el resultado de miles de años de selección cultural tanto de las especies como de sus ecosistemas. Por ello, las empresas extractivas explotan en muchos casos lo que no han tenido que producir (como las plumas de garza). La riqueza que se extrae se acumula por fuera, dejando en la localidad solo los costos sociales y ambientales.</p><p>Esta postal retrata la carga de banano en un vapor de la United Fruit Company. En 1928, la empresa que estuvo involucrada en la tristemente célebre masacre de las bananeras en Ciénaga (Magdalena).</p>",
            link: "",
            btnText: "Para ver el libro completo, haga clic aquí",
            img: "img/citas/codicia/4/5.2.Codicia.jpg",
            thumbnail: "img/citas/codicia/4/5.2.Codicia_Thumb.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "patria",
    title: "Patria",
    minititle: "la patria",
    intro:
      "<p>La separación de Panamá a inicios del siglo XX, la pérdida de amplios territorios del país y la necesidad de establecer fronteras fueron problemas objeto de debate nacional que preocupaban profundamente a Rivera. El autor refleja estas preocupaciones en La vorágine a través de las reflexiones de diversos personajes sobre la integridad del territorio. Durante este período, Colombia y sus vecinos iniciaron una carrera por el control de los territorios de la macrorregión Orinoco-Amazónica. Los Estados habían delegado sus funciones de soberanía y control social en terratenientes, colonos y misiones religiosas, y los intereses privados de estos actores (que eran también los de los grandes capitales extranjeros) primaron sobre el bien común. Estos agentes cometieron múltiples abusos sabiendo que los Estados priorizarían los beneficios económicos sobre los perjuicios sociales y naturales. </p>",
    textoFinal:
      "<p>De la misma manera, Rivera expresa su preocupación por la integridad del territorio nacional y de sus gentes en las distintas formas a las que se hace referencia al sentido de “patria” en la novela: un caleidoscopio de imágenes compuesta de distintos pasajes de la novela. </p>",
    citas: [
      {
        id: "11",
        image: "img/citas/patria/0/Patria_Cita01.jpg",
        bg: "img/citas/patria/0/Patria_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>Durante la estadía de los protagonistas en la hacienda La Maporita, un hato llanero, Cova conoce a la mulata Tiana, encargada de la cocina. Antonio, hijo de Tiana, partirá al Vichada para trabajar en las caucherías y ella teme perderlo. Por ello, prepara el café de Antonio con el corazón de un pájaro piapoco. En este pasaje, Tiana se refiere a la patria como la tierra natal y como la región de origen. Los colombianos nos pensamos como “país de regiones” y, en la novela, Rivera enfatiza el mosaico de las identidades regionales de sus personajes, al tiempo en que deja entrever la suya propia como huilense. </p><p>Las palabras de la mulata Tiana expresan vívidamente su pertenencia a la llanura:  </p><p>Yo soy únicamente yanera, del lao de Manare. Dicen que soy craveña, pero no soy del Cravo; que pauteña, pero no soy del Pauto. ¡Yo soy de todas estas yanuras! Pa qué más patria, si son tan beyas y tan dilatáas! Bien dice el dicho: ¿Onde tá tu Dios? ¡Onde te salga el sol! (p. 45). </p><p>Esta idea de patria, que surge del arraigo a la geografía y a los lugares, es la que sustenta la nostalgia de otro de los personajes de la novela, Ramiro Estévanez, quien “Amaba de la vida cuanto era noble: el hogar, la patria, la fe, el trabajo, todo lo digno y lo laudable” (p. 175). La noción de patria cambia, sin embargo, a lo largo de la novela y comienza a mostrarse como una realidad mediada y moldeada por el Estado y sus funcionarios. </p>",
        text: "<p>Mientras que yo desayunaba, sentóse en el suelo y comenzó a ajustar con los dientes la cadenita de una medalla que llevaba al cuello. </p><p>—Resolví ponerme esta prenda, porque tá bendita y es milagrosa. A vé si el Antonio se anima a yevarme. Por si me dejare desamparáa, le di en el café el corazón de un pajarito llamao piapoco. Puée irse muy lejos y corré tierras; pero, onde oiga cantá otro pájaro semejante, se pondrá triste y tendrá que volverse, porque la guiña tá en que viene la pesaúmbre a poné de presente la patria y el rancho y el queré olvidao, y tras de los suspiros tiée que encaminarse el suspiraor o se muere de pena. La medaya también ayúa si se le cuelga al que se va (p. 35). </p>",
        desc: "Palabras de la mulata Sebastiana a Arturo Cova en La Maporita. ",
        galeria: [
          {
            name: "1.1. Llanos de San Martín, Colombia",
            type: "jpg",
            ficha: [
              "Llanos de San Martín, Colombia ",
              "Anónimo ",
              "En Colección de tarjetas postales de Colombia, 1903-1925 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, TP0204 ",
            ],
            text: "<p>La primera identidad patria que se presenta en La vorágine es la que se refiere a la llanera, una identidad colombo-venezolana que celebra la libertad de las sabanas, los vastos horizontes y las tierras abiertas. Este sentido de pertenencia al llano se canta en la música llanera, como en los famosos versos de Alma llanera (de Bolívar Coronado y Pedro Elías Gutiérrez), que trascienden las fronteras nacionales: </p><p>Yo nací en una ribera del Arauca vibrador. </p><p>Soy hermano de la espuma, de las garzas, de las rosas. Soy hermano de la espuma, de las garzas, de las rosas y del sol (del sol) y del sol.</p><p>La noción de la patria mediada por las identidades regionales y sus riquezas naturales que emerge en la primera parte de La vorágine persiste hasta hoy en las diversas imágenes que destacan la belleza exótica de sus regiones y la diversidad de sus ecosistemas, su fauna y su flora, celebrándolas como “riquezas naturales”. Las selvas, los páramos o los manglares no sobrevivieron desde eras prehumanas, son paisajes producto de la interacción con las sociedades aborígenes. De hecho, como lo muestra La vorágine, la relación que nuestra sociedad urbana, capitalista y moderna establece con el entorno conlleva su extinción al transformar ecosistemas biodiversos en desiertos de pastos y monocultivos. </p><p>En la imagen, se ve un hato llanero, centro mismo de la identidad llanera</p>",
            link: "",
            btnText: "",
            img: "img/citas/patria/0/1.1.Patria.jpg",
            thumbnail: "img/citas/patria/0/1.1.Patria_Thumb.jpg",
          },
        ],
      },
      {
        id: "21",
        image: "img/citas/patria/1/Patria_Cita01.jpg",
        bg: "img/citas/patria/1/Patria_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>Arturo Cova, el narrador de La vorágine, resume en esta frase el estatus de “los indios” en la República de Colombia a comienzos del siglo XX y define estos pueblos a partir de sus carencias: sin dioses, sin héroes, sin tiempo y, sobre todo, sin patria. Al negarles la patria, ignora la relación de las comunidades indígenas con la tierra, su espacio vital. Simultáneamente, niega su pertenencia al país y su estatus como ciudadanos. Desconoce de tajo su soberanía sobre los territorios que históricamente han habitado, su capacidad de autogestión y la posibilidad de su participación en el futuro de la región. </p><p>De hecho, cuando Rivera escribe la novela, se basa en los relatos de informantes “blancos”, que describen​ ​los “usos y costumbres” indígenas. La novela muestra la vida, los objetos y las costumbres indígenas interpretadas por los “blancos”, desde su propio punto de vista. Se pierde así todo el universo cosmológico que da forma a los modos de vida y a los conocimientos indígenas, privilegiando la imagen y la interpretación que desde nuestra cultura hemos creado sobre estas sociedades. </p>",
        text: "<p>El jefe de la familia me manifestaba cierta frialdad, que se traducía en un silencio despectivo. Procuraba yo halagarlo en distintas formas, por el deseo de que me instruyera en sus tradiciones, en sus cantos guerreros, en sus leyendas; inútiles fueron mis cortesías, porque aquellas tribus rudimentarias y nómades no tienen dioses, ni héroes, ni patria, ni pretérito, ni futuro (p. 92).</p>",
        desc: "Reflexiones de Arturo Cova sobre el cacique y la comunidad indígena que lo recibió junto al Pipa y sus compañeros. ",
        galeria: [
          {
            name: "2.1. Carta del curso del río Meta. AvH",
            type: "jpg",
            ficha: [
              "Carta del curso del río Meta y de una parte de la cadena oriental de las montañas de Nueva Granada ",
              "Alexander von Humboldt ",
              "1817 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, H448 ",
            ],
            text: "<p>Los Llanos Orientales y, en general, la macrorregión Orinoco-Amazónica aparecen como territorios “infestados de indios” (así los describe Humboldt en su mapa del Meta a inicios del siglo XIX), como si se tratara de una plaga que es necesario erradicar a sangre y fuego. Durante el siglo XIX, las ideas de nación y de progreso justificaban el etnocidio para darle paso a la civilización. Para algunos pensadores, las avanzadas del progreso requerían de la expropiación de tierras y la explotación de la fuerza de trabajo de la población. Diversas escenas de La vorágine muestran este proceso. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll13/id/84",
            btnText: "Abrir material en Babel a través del vínculo",
            img: "img/citas/patria/1/2.1.Patria.jpg",
            thumbnail: "img/citas/patria/1/2.1.Patria_Thumb.jpg",
          },
          {
            name: "2.2. Colombia poblada. FJVV",
            type: "jpg",
            ficha: [
              "Colombia poblada ",
              "En Francisco Javier Velasco y Vergara, Atlas completo de geografía colombiana, Bogotá: Imprenta Eléctrica, 1906 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, R912.86 V37a ",
            ],
            text: "<p>Este “mapa mutilado” de la patria (como lo describe el geógrafo colombiano Simón Uribe) en el que solo aparece la mitad de su área muestra “el país que cuenta”, “el país conocido” y “el país poblado”. Se trata del país urbano, moderno o en vías de modernización. Representaciones como esta no tienen en cuenta que, para entonces, buena parte del territorio estaba habitado por distintas sociedades indígenas, así como de numerosas comunidades de cimarrones y de pequeños colonos. Así como se excluyen estos grupos como pobladores de la patria, se excluyen también sus territorios: las regiones selváticas que desaparecen simbólicamente del mapa Colombia poblada en el que se reconoce solo a las regiones Andina y Caribe.</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4336/rec/2 ",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/patria/1/2.2.Patria.jpg",
            thumbnail: "img/citas/patria/1/2.2.Patria_Thumb.jpg",
          },
        ],
      },
      {
        id: "43",
        image: "img/citas/patria/2/Patria_Cita03.jpg",
        bg: "img/citas/patria/2/Patria_Cita03_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>Esta reflexión de Arturo Cova sobre el mapa oficial de Colombia elaborado por la Oficina de Longitudes expresa varias de las preocupaciones de Rivera. Primero está el desconocimiento y desprecio de las élites por las regiones selváticas, a las que desdeñan y entienden como despensas que pueden usar y desechar, y que no ameritan ser conocidas ni reconocidas. Buena parte de la cartografía nacional se centró en las regiones de los Andes y Caribe, dejando el resto del territorio como “espacios en blanco en el mapa”. </p><p>Este pasaje revela también la preocupación por la integridad territorial. A comienzos del siglo XX, cuando la “fiebre del caucho” estaba en el centro de la escena, se estaban fijando los límites en la macrorregión Orinoco-Amazónica. Rivera participó en este proceso como abogado de la Comisión de Límites entre Colombia y Venezuela, que se llevó a cabo bajo la sombra de la separación de Panamá. </p><p>La patria también aparece representada en la novela por el Estado, más específicamente por los funcionarios del Estado, que encarnan la “libertad y el orden”: el principio de su autoridad y su “función constitucional”. La novela muestra cómo el accionar de los funcionarios distorsiona los objetivos de las instituciones, ya que actúan de acuerdo con sus intereses personales, por encima de los intereses de la patria. </p>",
        text: "<p>De juro que, si bajan hasta Manaos, nuestro cónsul, al leer mi carta, replicará que su valimiento y jurisdicción no alcanzan a estas latitudes, o lo que es lo mismo, que no es colombiano sino para contados sitios del país. Tal vez, al escuchar la relación de don Clemente, extienda sobre la mesa aquel mapa costoso, aparatoso, mentiroso y deficientísimo que trazó la Oficina de Longitudes de Bogotá, y le responda tras de prolija indignación: “¡Aquí no figuran ríos de esos nombres! Quizás pertenezcan a Venezuela. Diríjase usted a Ciudad Bolívar”. </p><p>Y, muy campante, seguirá atrincherado en su ignorancia, porque a esta pobre patria no la conocen sus propios hijos, ni siquiera sus geógrafos (p. 193). </p>",
        desc: "Reflexiones de Arturo Cova en las barracas del Váquiro. ",
        galeria: [
          {
            name: "3.1. Croquis de Colombia. José Eustasio Rivera",
            type: "jpg",
            ficha: [
              "Croquis de Colombia ",
              "En José Eustasio Rivera, La vorágine, Nueva York: Andes, 1928 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Co863.5 R49v36 ",
            ],
            text: "<p>En el Croquis de Colombia, publicado en la quinta edición de La vorágine, los límites de la macrorregión Orinoco-Amazónica aparecen abiertos e indefinidos. Asimismo, los ríos se destacan más que las cordilleras, que aparecen un poco desdibujadas. Es decir, los ríos aparecen como verdaderos hitos del territorio. De cierta manera, este mapa se opone a la visión tradicional de la geografía de los países andino-amazónicos, que tiene como columna vertebral la cordillera, considerada como el rasgo determinante de su geografía, y que representan de manera enfática como barrera topográfica. </p><p>Es clara la intención de Rivera de representar de manera precisa en este mapa el espacio geográfico en oposición al “mapa costoso, aparatoso, mentiroso y deficientísimo que trazó la Oficina de Longitudes de Bogotá”. Se trata de un mapa ajustado a la realidad de los territorios: con fronteras abiertas y organizado alrededor del agua. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4302/rec/2 ",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/patria/2/3.1.Patria.jpg",
            thumbnail: "img/citas/patria/2/3.1.Patria_Thumb.jpg",
          },
          {
            name: "",
            type: "",
            ficha: [],
            text: "<p>La diplomacia colombiana fue poco eficaz para defender los territorios de la frontera a inicios del siglo XX. Para el momento en que se escribió La vorágine, en la memoria de los colombianos aún pesaba como una sombra la separación de Panamá. En la pírrica negociación del gobierno de Colombia con el presidente Theodore Roosevelt de los Estados Unidos, el país perdió el istmo, cuya imagen sigue siendo unos de los elementos centrales del escudo nacional. </p><p>Consciente de la importancia geopolítica de la macrorregión Orinoco-Amazónica, Rivera señala en La vorágine la trascendencia del territorio, que solo será reconocida a hasta finales del siglo XX. Cuando Rivera escribió La vorágine, estaban en pugna áreas estratégicas de la región, como el río Casiquiare, que une las cuencas del Orinoco y el Amazonas, o el territorio entre los ríos Putumayo y Caquetá. En esta última zona, que estaba en disputa entre Colombia y Perú, ambas partes se comprometieron a no tomar medidas de soberanía hasta que no se firmara un acuerdo formal entre ellas. Este conflicto se resolvió finalmente después de la guerra entre Colombia y Perú en 1933. </p>",
            link: "",
            btnText: "",
            img: "img/citas/patria/2/3.2.Patria.jpg",
            thumbnail: "img/citas/patria/2/3.2.Patria_Thumb.jpg",
          },
        ],
      },
      {
        id: "29",
        image: "img/citas/patria/3/Patria_Cita04.jpg",
        bg: "img/citas/patria/3/Patria_Cita04_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>La forma en que más crudamente​ expresa La vorágine el sentido de pertenencia ​a la patria es a través del abandono del Estado: una idea recurrente en la historia del país. Esta idea hace referencia al hecho de que, en áreas consideradas inhóspitas, el Estado ha adoptado, en distintos momentos, una estrategia de administración por delegación, poniendo su presencia y su autoridad en manos de terceros por medio de convenios con misiones religiosas, concesiones comerciales, educación contratada y asignación de baldíos, entre otras figuras.  </p><p>Este aparte del relato de Clemente Silva muestra cómo la Casa Arana y sus empleados consideraban que tenían derecho a comandar el ejército y los recursos estatales del Perú. Lo veían, además, como una iniciativa patriótica. Sin embargo, el Estado había sido el que había delimitado los territorios donde el capital jugaba con otras reglas. Este proceso se entendía como “hacer patria” o “traer la civilización”. Frente al escándalo que estalló cuando se conocieron pública e internacionalmente las atrocidades de la Casa Arana y la Peruvian Amazon Co., esa fue la defensa de los caucheros: justificaron sus acciones y sus tácticas de terror y de brutalidad como “la única manera de civilizar a los indios”. Según ellos, era la única manera de ejercer soberanía en estos lugares alejados, por lo que el trabajo de la compañía debía entenderse como una contribución a la patria para enaltecerla. En este aparte, Rivera expone los argumentos que el mismo Arana usó ante el Parlamento inglés en el juicio contra la empresa Peruvian Amazon Co., de la que él era gerente de operaciones. </p>",
        text: "<p>—¿Y quién creerá que este insignificante detalle le origina complicaciones a la empresa? Tiene tantas rémoras este negocio, exige tal patriotismo y perseverancia, que si el Gobierno nos desatiende quedarán sin soberanía estos grandes bosques, dentro del propio límite de la patria. Pues bien: ya su señoría nos hizo el honor de averiguar en cada cuadrilla cuáles son las violencias, los azotes, los suplicios a que sometemos las peonadas, según decir de nuestros vecinos, envidiosos y despechados, que buscan mil maneras de impedir que nuestra nación recupere sus territorios y que haya peruanos en estas lindes, para cuyo intento no faltan nunca ciertos escritorcillos asalariados. [...] </p><p>—Afortunadamente —agregó el bellaco—, el Perú atenderá nuestra iniciativa patriótica: le hemos pedido a la autoridad que nos militarice las cuadrillas, mediante la dirección de oficiales y sargentos, a quienes pagaremos con mano pródiga su permanencia en estos confines, con tal que sirvan a un mismo tiempo de fiscales para la empresa y de vigilantes en las estradas. De esta suerte el Gobierno tendrá soldados, los trabajadores garantías innegables y los empresarios estímulo, protección y paz. </p><p>El Visitador hizo un signo de complacencia (p. 131). </p>",
        desc: "Declaraciones de un empleado cauchero para desmentir el testimonio de Clemente Silva ante el Visitador. ",
        galeria: [
          {
            name: "4.1. Soldados colombianos listos para marchar al Campo Barco",
            type: "jpg",
            ficha: [
              "Soldados colombianos listos para marchar al Campo Barco ",
              "Foto anónima ",
              "En Photographs taken by members of Carib Syndicate Ltd., Expedition Colombia, South America, s. d. 1917 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, FT2092 ",
            ],
            text: "<p>Las organizaciones privadas a las que el Estado había delegado su presencia (órdenes religiosas y empresas comerciales, ente otras) obtenían no solo el derecho a las tierras (que en muchos casos deben ser “limpiadas” de indios) y la prerrogativa de explotar los recursos naturales, sino el monopolio de comercio en grandes regiones, todo a cambio de la construcción de infraestructura y la creación de sistemas de transporte. En algunos casos, debido a su mandato o a la escala de su operación adoptan, formal o informalmente, funciones de gobierno y de ordenamiento territorial. En estos casos, la fuerza pública sirve para defender los intereses de las empresas y corporaciones por encima de los intereses de los ciudadanos y los habitantes históricos de estas regiones. Es esta la presencia del Estado a la que aspiran los funcionarios de la Casa Arana en su intercambio con el visitador en La vorágine. </p>",
            link: "",
            btnText: "",
            img: "img/citas/patria/3/4.1.Patria.jpg",
            thumbnail: "img/citas/patria/3/4.1.Patria_Thumb.jpg",
          },
          {
            name: "4.2. Grupo de indios salvajes del Caquetá. En Gaspar de Pinell",
            type: "jpg",
            ficha: [
              "Grupo de indios salvajes del Caquetá ",
              "Foto anónima ",
              "En Gaspar de Pinell, Excursión apostólica por los ríos Putumayo, San Miguel de Sucumbíos, Cuyabeno, Caquetá y Caguán, Bogotá: Imprenta Nacional, 1928 ",
              "Biblioteca Luis Ángel Arango, Depósito A1- Colección general, 266.2 P45e ",
            ],
            text: "<p>El Estado colombiano, mediante el Convenio de Misiones de 1902 que firmó con el Vaticano, les concedió importantes territorios a diversas órdenes religiosas para que fueran desarrollados como parte de la civilización de los indígenas que los habitaban. Además de sus funciones de catequización, estos proyectos misionales funcionaban como empresas productivas y comerciales basadas en el trabajo indígena. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4316/rec/1 ",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/patria/3/4.2.Patria.jpg",
            thumbnail: "img/citas/patria/3/4.2.Patria_Thumb.jpg",
          },
        ],
      },
      {
        id: "45",
        image: "img/citas/patria/4/Patria_Cita05.jpg",
        bg: "img/citas/patria/4/Patria_Cita05_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>En Horizonte humano (1986), Eduardo Neale Silva cuenta que, en una ocasión, Rivera, </p><p>conversando con su amigo Quijano comparó la tramoya burocrática del país a una laguneta de aguas estancadas: “Escucha y dime si esto no es nuestra política”. Y comenzó a recitar de memoria un pasaje de su novela: “La laguneta de aguas amarillosas estaba cubierta de hojarascas. Por entre ellas nadaban unas tortuguillas llamadas galápagos, asomando la cabeza rojiza; y aquí y allí los caimanejos nombrados cachirres exhibían sobre la nata del pozo los ojos sin párpados. Garzas meditabundas, sostenidas en un pie, con picotazos repentinos arrugaban la charca tristísima, cuyas evaporaciones maléficas flotaban bajo los árboles como velo mortuorio”. Tú comprenderás en qué consisten los picotazos de esas calculadoras garzas de nuestra vida nacional. (p. 343) </p><p>A pesar de su visión del Estado y sus funcionarios como representantes de la patria, su protagonista, Arturo Cova, manda su informe al cónsul en Manaos, confiando en su reacción. No pierde la fe y la esperanza en esa patria. </p>",
        text: "<p>¡Santa Isabel! En la agencia de los vapores dejé una carta para el cónsul. En ella invoco sus sentimientos humanitarios en alivio de mis compatriotas, víctimas del pillaje y la esclavitud, que gimen entre la selva, lejos de hogar y patria, mezclando al jugo del caucho su propia sangre. En ella me despido de lo que fui, de lo que anhelé, de lo que en otro ambiente pude haber sido. ¡Tengo el presentimiento de que mi senda toca a su fin, y, cual sordo zumbido de ramajes en la tormenta, percibo la amenaza de la vorágine! (p. 207) </p>",
        desc: "Últimas anotaciones realizadas por Arturo Cova en su manuscrito.",
        galeria: [
          {
            name: "5.1. Paseando por los riachuelos. A. Freitas",
            type: "jpg",
            ficha: [
              "Paseando por los riachuelos ",
              "A. Freitas ",
              "1914 ",
              "En Colección de postales de José María Restrepo-Millán (1908-1914) ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, TP0238",
            ],
            text: "<p>Esta imagen de los visitantes urbanos (¿funcionarios?) vestidos de blanco, extraños a la selva y al río por el que navegan, recuerda el llamado que hizo alguna vez Francisco José de Caldas (1849): </p><p>¡Que se corten estos árboles enormes! Que se despejen estos lugares sombríos, para que los rayos del sol acaben con la humedad excesiva y entonces, como por encanto […], las fiebres, los insectos y los males huyan de estos lugares, y este país inhabitable se convierta en uno sereno, sano y feliz. (p.152) </p>",
            link: "",
            btnText: "",
            img: "img/citas/patria/4/5.1.Patria.jpg",
            thumbnail: "img/citas/patria/4/5.1.Patria_Thumb.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "extravio",
    title: "Extravio",
    minititle: "el extravio",
    intro:
      "<p>Por la época en que se publicó La vorágine, la Real Academia de la Lengua Española, en la edición del diccionario de 1925, definió extraviar como “poner una cosa en el lugar que no le corresponde, ignorar el paradero de algo o alguien, o dejar la forma de vida que se había empezado por otra (comúnmente, en mal sentido)” (p. 554). La vorágine se puede leer desde el extravío porque sus personajes pierden el camino y la noción de realidad, por lo que terminan en una mala parte: viven bajo la falacia de un futuro mejor. El extravío en la novela es exceso, locura, fiebre, delirio y violencia. </p><p>José Eustasio Rivera retrató de manera impactante las regiones del Orinoco y el Amazonas. Si bien las condiciones de violencia y explotación de estas zonas alcanzaban los titulares de prensa de cuando en cuando, pasaban sin más. Pero quizá por el compendio de crudas realidades que Rivera sintetizó o porque muchos leyeron la novela como testimonio real, La vorágine repercutió en la discusión sobre dicho territorio, desconocido o ignorado, a pesar de que representaba la mitad del país. </p>",
    textoFinal:
      "<p>Un siglo después, con más actores y mayores consecuencias, muchos de estos territorios continúan perdidos en los fenómenos que La vorágine denunció. </p>",
    citas: [
      {
        id: "03",
        image: "img/citas/extravio/0/Extravio_Cita01.jpg",
        bg: "img/citas/extravio/0/Extravio_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        comentario:
          "<p>La vorágine inicia con la huida de Alicia y Arturo Cova hacia Casanare. Ella quiere evitar el matrimonio con un viejo terrateniente y él, la cárcel a la que lo condenó el prometido traicionado. El temor los hace buscar la seguridad y libertad que promete el desierto. </p><p>Aquí, el desierto no solo es el paisaje árido que solemos imaginar, sino cualquier lugar despoblado. En la Nueva Granada colonial o en la Colombia republicana, el desierto eran los Llanos Orientales, la alta Guajira, el desierto de la Candelaria o las selvas de la Amazonía y la Orinoquía. </p><p>El desierto es un lugar para escapar y encontrarse al mismo tiempo: los esclavos huyen allí para encontrar la libertad, los bandoleros construyen un mundo fuera de la ley, los perseguidos políticos sobreviven y se reorganizan, los místicos buscan a Dios en la soledad, los misioneros hallan las almas que ellos creían perdidas, los menos favorecidos buscan la riqueza y los amantes evaden los compromisos para entregarse a su amor. En La vorágine, muchas clases de personas, como las anteriores, se encuentran en el desierto. Llegan para buscarse o buscando algo; pero, sin excepción, se extravían. </p>",
        text: "<p>El peón que envié a Bogotá a caza de noticias me las trajo inquietantes. El escándalo ardía, avivado por las murmuraciones de mis malquerientes, comentábase nuestra fuga y los periódicos usufructuaban el enredo. La carta del amigo a quien me dirigí pidiéndole su intervención, tenía este remate: “¡Los prenderán! No te queda más refugio que Casanare. ¿Quién podría imaginar que un hombre como tú busque el desierto?” (p. 17). </p>",
        desc: "Memorias de Arturo Cova sobre el inicio de la fuga que emprendió junto con Alicia. ",
        galeria: [
          {
            name: "1.1. Puerto de descanse. JMGA",
            type: "jpg",
            ficha: [
              "Puerto de descanse en el río Caquetá, abajo de Mocoa ",
              "José María Gutiérrez de Alba ",
              "En Impresiones de un viaje a América, tomo XII, 1875 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, MSS3357 ",
            ],
            text: "<p>José María Gutiérrez de Alba, agente enviado por la Corona española para evaluar la reactivación comercial tras la Independencia, definió al Caquetá como un “extensísimo territorio, en parte desierto y en parte poblado por varias tribus indígenas en el estado de la Naturaleza” (Tomo XII, p. 29r). Respecto al río Caquetá y a sus pobladores, dijo: </p><p>La vista del río y de las montañas que forman el horizonte en aquel lugar son sorprendentes. Aquella grande arteria fluvial tiene por allí más de cien metros de anchura, convidando a la navegación por los medios fáciles de la industria moderna; […] recorre centenares de millas por un terreno feracísimo, poblado de tribus numerosas, dispuestas a entrar en la vida de la civilización, con tal de que los racionales, como ellos llaman a los que tienen ya alguna cultura, no abusen de su sencillez y de su ignorancia (Tomo XII, pp. 29r-29v). </p><p>La acuarela en la que aparece esta descripción resalta la exuberancia vegetal. Incluye diversas embarcaciones resaltan las posibilidades de navegación y pone en primer plano la fácil disposición de los indígenas al trato con “racionales”. Es un retrato de territorios accesibles, explotables y con “buenos salvajes” (inocentes e ignorantes). </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll16/id/446",
            btnText: "Haga click para acceder al recurso completo",
            img: "img/citas/extravio/0/1.1.Extravio.jpg",
            thumbnail: "img/citas/extravio/0/1.1.Extravio_Thumb.jpg",
          },
          {
            name: "1.2. El desierto prodigioso y el prodigio del desierto. Pedro Solís y Valenzuela",
            type: "jpg",
            ficha: [
              "El desierto prodigioso y el prodigio del desierto ",
              "Pedro Solís y Valenzuela ",
              "ca. 1650 ",
              "Colección Instituto Caro y Cuervo, MS001 ",
            ],
            text: "<p>La narrativa hispanoamericana nace con el desierto. El desierto prodigioso y los prodigios del desierto, escrito hacia 1650 en Santafé de Bogotá por el sacerdote e inquisidor Pedro de Solís y Valenzuela, es tal vez la primera obra literaria de tipo novelesco producida en las colonias castellanas. Tiene por escenario el desierto de la Candelaria y describe la cotidianidad de los anacoretas y ermitaños que hacían su vida allí. Es un texto interesante y exigente, lleno de historias dentro de historias, con piratas y libertinos; un viaje literal al infierno de la mano del mismísimo demonio, lleno de acertijos y laberintos. Son pruebas que los lectores deben descifrar para avanzar en la historia. Algo de eso también hay en La vorágine. </p>",
            link: "",
            btnText: "",
            img: "img/citas/extravio/0/1.2.Extravio.jpg",
            thumbnail: "img/citas/extravio/0/1.2.Extravio_Thumb.jpg",
          },
        ],
      },
      {
        id: "05",
        image: "img/citas/extravio/1/Extravio_Cita02.jpg",
        bg: "img/citas/extravio/1/Extravio_Cita02_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>El Pipa, un agente de extravío en La vorágine, aparece temprano en la novela, cuando intercepta a Cova y se presenta de manera altisonante: “Yo me llamo Pepe Morillo Nieto y por mal nombre me dicen ‘Pipa’ […] conozco el llano y las caucherías del Amazonas. Mucho tigre y mucha culebra he matado con la ayuda de Dios” (p. 19). Desde entonces, entra y sale de la historia, siempre para conducir a Cova o para perderlo. </p><p>Su historia es patética: niño prófugo (¿gamín o despojado por alguna guerra civil?) que huyó a los llanos, donde encontró la violencia de los llaneros. Los indios nómadas, en cambio, lo acogieron. Don Rafo lo llama “zorro”. En muchas mitologías, el zorro es personaje que, con astucia y picardía, juega malas pasadas y se sale con la suya. Es la encarnación de la idea colonial y racista de la “malicia indígena”: tramposo y delincuente. </p><p>En contraste a la “malicia indígena”, la noción del “buen salvaje” valoraba a los indígenas como esencialmente buenos e inocentes. Sin embargo, ambas ideas implican un grado de deshumanización por simplificación: se reduce la complejidad individual a unos prejuicios sobre toda una comunidad. Históricamente, esto ha resultado en la explotación, tortura, desaparición y genocidio de diferentes comunidades humanas. </p>",
        text: "<p>—¿Con que el mentado Pipa es un zorro llanero? —pregunté a don Rafo. </p><p>―El más astuto de los salteadores: varias veces prófugo, tras curar sus fiebres en los presidios, vuelve con mayores arrestos a ejercer la piratería. Ha sido capitán de indios salvajes, sabe idiomas de varias tribus y es boga y vaquero (p. 22). </p>",
        desc: "Conversación entre Arturo Cova y don Rafo en Casanare. ",
        galeria: [
          {
            name: "2.1. Manuscrito La vorágine. José Eustasio Rivera",
            type: "jpg",
            ficha: [
              "Manuscrito de La vorágine ",
              "José Eustasio Rivera ",
              "1922-1924 ",
              "Biblioteca Nacional de Colombia, Sala Fondo Antiguo, RM617 ",
            ],
            text: "<p>En el manuscrito de La Vorágine, Pepe Morillo Nieto se llama simplemente José Nieto. Pero este no era cualquier nombre: José Nieto era el terrateniente de Orocué que había contratado a Rivera en 1918, a poco de graduarse como abogado especialista en liquidación de herencias, para litigar en su favor en un pleito de sucesión que involucraba al hato más grande de Casanare. En algún momento Rivera pasó a representar a la contraparte y se enemistó a muerte con Nieto; incluso, intercambiaron disparos a orillas del río Meta. Al crear al Pipa, Rivera se vengaba de su antiguo adversario llanero y, de paso, lo mostraba como un truhan escurridizo e inescrupuloso. En la versión manuscrita de La vorágine que se conserva en la Biblioteca Nacional de Colombia se ve el nombre original de José Nieto con el que Rivera presenta a El Pipa. </p>",
            link: "https://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/search/asset/268942",
            btnText:
              "Abrir material en el catálogo de la BN a través del vínculo",
            img: "img/citas/extravio/1/2.1.Extravio.jpg",
            thumbnail: "img/citas/extravio/1/2.1.Extravio_Thumb.jpg",
          },
          {
            name: "2.2. El proceso del Putumayo. Carlos A. Valcárcel",
            type: "jpg",
            ficha: [
              "El proceso del Putumayo y sus secretos inauditos ",
              "Carlos A. Valcárcel ",
              "Lima: Imprenta Comercial, 1915 ",
              "Biblioteca Luis Ángel Arango, Colección Especial Remota, 343.185 V15p ",
            ],
            text: "<p>La Casa Arana, empresa cauchera peruana instalada en la región y promocionada como un modelo exitoso, cometió uno de los mayores genocidios en la Amazonía en el siglo XX. Si bien esta compañía tuvo una bonanza económica, su riqueza se sustentó en la explotación de la mano de obra indígena, llegando al límite de irracionalidad productiva y el extravío moral. </p><p>En 1912, Carlos A. Valcárcel, juez peruano, se encargó de investigar las denuncias sobre las continuas atrocidades perpetuadas contra la población indígena por empleados de la Casa Arana en sus estaciones del Putumayo (la mayoría, en territorio colombiano). En su devastador informe, cita a otro juez, Rómulo Paredes, también comisionado por el gobierno peruano, quien juzgó la psiquis de los agentes de Arana: </p><p>Estaban enfermos de la imaginación, y veían por todas partes ataques de los indios, conjuraciones, traiciones, sublevaciones, etc.; y para salvarse de esos cataclismos fantásticos, para defenderse y no sucumbir, mataban y mataban sin compasión indiadas enteras (pp. 356-357). </p><p>Como en muchos genocidios y desde la mirada de los victimarios, las víctimas son violentas, irracionales y propensas a la venganza. En consecuencia, la tortura y el asesinato se ven como medios necesarios para sostener el bienestar de los victimarios y los suyos, incluso cuando se aniquila a la mano de obra que los ha hecho ricos. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4332/rec/1",
            btnText: "Para ver el libro completo, haga clic aquí",
            img: "img/citas/extravio/1/2.2.Extravio.jpg",
            thumbnail: "img/citas/extravio/1/2.2.Extravio_Thumb.jpg",
          },
        ],
      },
      {
        id: "17",
        image: "img/citas/extravio/2/Extravio_Cita03.jpg",
        bg: "img/citas/extravio/2/Extravio_Cita03_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>Algunos pasajes de La vorágine anticipan el realismo mágico que se popularizó 40 años después. Arturo Cova y Antonio Correa se encuentran en la mitad de la nada llanera con un par de personajes singulares, absolutamente fuera de lugar. Un juez, ridículamente guarecido bajo un parasol rojo y envuelto en una sábana enorme, seguido por su ayudante. Encarnan la paradójica situación de la justicia en la frontera, siempre extraviada, inoportuna, sucia, enferma y muchas veces grotesca. La respuesta del mulato también es elocuente y está llena de humor negro. “Ahora y siempre” hace parte de la oración del gloria, que está precedido por “como era en el principio”. Aquí demostraba el abogado José Eustasio Rivera su desencanto mayúsculo con el derecho.</p><p>Para crear a Hernández, Rivera se inspiró de cerca en el juez de Orocué, con quien sostuvo una ardua batalla legal por el pleito de Mata de Palma, y a quien acusó de ignorante y corrupto. Al juez de Orocué poco le entusiasmaban las demostraciones jurídicas de Rivera y al final lo amenazó con enviarlo al cepo. Rivera perdió el pleito y ganó una lección: en ciertos territorios, la ley se pierde en la voluntad de quien tenga el poder. </p>",
        text: "<p>Mientras Correa remudaba los bagajes, llegaron los sujetos desconocidos, saludándonos a grandes voces: </p><p>―¡Favor a la justicia, que anda extraviada! </p><p>―Ora y siempre ―respondió el mulato ingenuo. </p><p>—Muéstrennos el camino de Hato Grande. ¡Este doctor es juez de Orocué, y yo su secretario, por añadidura baquiano! </p><p>Al oírlo, le averigüé si ese funcionario era el que firmaba José Isabel Rincón Hernández; e hice esta pregunta porque de tal yo sabía que de peoncejo de carretera ascendió a músico de banda municipal y luego a juez de circuito de Casanare, donde sus abusos lo hacían célebre (p. 71). </p>",
        desc: "Diálogo entre el mulato Correa y Arturo Cova con el juez de Orocué y su secretario. ",
        galeria: [
          {
            name: "3.1. José Eustasio Rivera. Fotografía anónima",
            type: "jpg",
            ficha: [
              "José Eustasio Rivera ",
              "Fotografía anónima ",
              "En José Eustasio Rivera, Tierra de promisión, Bogotá: Ed. Arboleda & Valencia, 1921 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Misc. 262 ",
            ],
            text: "<p>Retrato de José Eustasio Rivera hacia 1920. Esta fotografía, anónima, acompaña la primera edición de Tierra de promisión, poemario con el que Rivera se consolidó como escritor. Su amigo Ricardo Charria Tobar describió muy bien a Rivera durante esta época. Sus palabras muestran cómo, en ciertos lugares, la justicia se extravía hasta que solo aplica la ley del más fuerte. Esta falta de justica es esencial en La vorágine. Charria Tobar recuerda cómo Rivera fue herido por José Nieto, terrateniente de Orocué, cuando litigó contra él en el proceso Mata de Palma y Mata de Vaquero: </p><p>Su lucha allí fue brava, y así me lo confirmó varias veces. En cierta ocasión, ya egresado de los Llanos […] se bajó los pantalones y me mostró el muslo derecho ―a la altura de la ingle― atravesado por un balazo, herida que afectaba el plano de los músculos superficiales, y cuyos orificios de entrada y salida presentaban cicatrices retráctiles. El lance, me lo refirió en ese mismo instante, tuvo por testigo el río Meta, un poco debajo de Orocué, donde ocasionalmente se avistaron en medio del anchuroso cauce, en sus respectivas canoas, él y su contendor, el mismísimo Nieto (Charria Tobar, 1963, pp. 98-99). </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4312/rec/2",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/extravio/2/3.1.Extravio.jpg",
            thumbnail: "img/citas/extravio/2/3.1.Extravio_Thumb.jpg",
          },
          {
            name: "3.2. Indio reducido de la nación Andaquí. Manuel María Paz",
            type: "jpg",
            ficha: [
              "Indio reducido de la nación Andaquí. Miguel Mosquera, nacido en Caquetá, práctico e intérprete que acompañó la Comisión Corográfica en 1857: Territorio del Caquetá ",
              "Manuel María Paz ",
              "1857 ",
              "Biblioteca Nacional de Colombia, Fondo Comisión Corográfica, 305.898 ",
            ],
            text: "<p>Juan Friede, antropólogo e historiador colombo-ucraniano, transcribió en 1948 cómo se impartía la justicia en La Ceja (Caquetá), territorio de los andaquíes, durante la fiebre del caucho. En concreto, se refiere a los hermanos Eloy, Venancio, Roberto, Francisco, Ramón, Raimundo, Emilio y Ricardo Gutiérrez, fundadores de varios enclaves en la región, entre estos Florencia: </p><p>No había ley ni corregidor que valiera. La ley era el máuser y la cachiporra, y era dictada por […] los “traviesos” Gutiérrez, como se les llamaba, por tener pendientes muchas causas con la justicia. </p><p>Así me relataba el estado reinante en aquellos tiempos un testigo presencial, el anciano don Polo Castro, en Acevedo (Huila) en el año 1947: </p><p>“Los Gutiérrez eran muchos. Todos de una sola familia de antioqueños, entre hermanos y sobrinos […]. Nuestras monedas eran libras esterlinas. Cuando pasaba un Gutiérrez le sonaban en el bolsillo. Se jugaba naipes, pero ante todo dados, ‘al doblete’, que eran dados calzados con azogue […]. Los bailaderos y cantinas estaban siempre llenos, nunca se cerraban. Venía la gente con el caucho, entregaban, pagaban sus deudas y ¡con el resto a la cantina! Allí dormían y comían, y solo salían para pelear a revólver, puñal y barbera (Friede, 1948, pp. 138-139). </p>",
            link: "",
            btnText: "",
            img: "img/citas/extravio/2/3.2.Extravio.jpg",
            thumbnail: "img/citas/extravio/2/3.2.Extravio_Thumb.jpg",
          },
        ],
      },
      {
        id: "32",
        image: "img/citas/extravio/3/Extravio_Cita04.jpg",
        bg: "img/citas/extravio/3/Extravio_Cita04_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>Mucho se habla de La vorágine como “novela de la selva”, pero no se explora realmente lo que esto implica. Habitualmente se toma como la representación de un ámbito hostil que vuelve salvajes y miserables a los protagonistas de la historia, para luego devorarlos. Pero la intención de José Eustasio Rivera era otra: quería insistir en que el llano y la selva ―o cualquier otro entorno susceptible de ser colonizado― responderán con natural violencia al ser invadidos y explotados sin consideración. </p><p>Tal vez esto resulte fácil de comprender hoy, después de un siglo de desertificación de lugares que parecían reservas inagotables de fauna y flora, violentadas por el calentamiento global y el consumo desaforados. En La vorágine, la selva extravía a quienes la violan. Y ese extravío no solo es perderse en la espesura, también es perderse en sí mismo, volverse loco y sucumbir a la violencia. </p><p>Hoy, la naturaleza no se concibe como una fuerza que debe ser dominada ni como una fuente inagotable de recursos. Humanidad y naturaleza son uno, la humanidad es parte y no contraparte. Desafortunadamente llegamos a esta conclusión, como los personajes de La vorágine, perdidos ante la amenaza de nuestra propia existencia. </p>",
        text: "<p>Nadie ha sabido cuál es la causa del misterio que nos trastorna cuando vagamos por la selva. Sin embargo, creo acertar en la explicación: cualquiera de estos árboles se amansaría, tornándose amistoso y hasta risueño, en un parque, en un camino, en una llanura, donde nadie lo sangrara ni lo persiguiera; mas aquí todos son perversos, o agresivos, o hipnotizantes. En estos silencios, bajo estas sombras, tienen su manera de combatirnos: algo nos asusta, algo nos crispa, algo nos oprime, y viene el mareo de las espesuras, y queremos huir y nos extraviamos, y por esta razón miles de caucheros no volvieron a salir nunca (pp. 149-150). </p>",
        desc: "Palabras de Clemente Silva a Arturo Cova, quien ha sentido el embrujamiento de la montaña.",
        galeria: [
          {
            name: "4.1. ¡Acude ahora ¡oh muerte! acude! Gustave Doré, LDC",
            type: "jpg",
            ficha: [
              "¡Acude ahora ¡oh muerte! acude! gritaba el que corría delante ",
              "Ilustración de Gustave Doré ",
              "En Dante Alighieri, La divina comedia, Barcelona: Montaner y Simón, 1871-1872 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 851.15 D49g ",
            ],
            text: "<p>Una posible influencia sobre Rivera para recrear literariamente la selva pudo haber sido La divina comedia de Dante Alighieri, poema compuesto en las primeras décadas del siglo XIV, en lo que hoy es Italia. En la parte dedicada al Infierno, en su XIII canto, Dante ingresa a una selva mortecina donde encuentra a los condenados por cometer suicidio y a los derrochadores convertidos en árboles marchitos y dolientes. En una buena medida, ese mismo es el infierno que quería mostrar Rivera: los suicidas serían aquellos llevados a la locura, que antes de acabar consigo mismos arrastran todo a su paso “sin dejar más que ruido y desolación”; y los derrochadores, todos aquellos que consumen lo que sea, hasta agotarlo físicamente. La selva los condena a sufrir lo que ella ha sufrido.</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4330/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/extravio/3/4.1.Extravio.jpg",
            thumbnail: "img/citas/extravio/3/4.1.Extravio_Thumb.jpg",
          },
          {
            name: "4.2. La Amazonia colombiana. Rafael Thomas",
            type: "jpg",
            ficha: [
              "La Amazonia colombiana ",
              "Rafael Thomas ",
              "Cartagena: Imprenta Eléctrica Departamental, 1920 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 986.17 T46a ",
            ],
            text: "<p>Rafael Thomas, momposino subteniente del ejército colombiano, viajó en 1911 por buena parte de la Amazonía. En el recuento de su marcha hizo continuas observaciones sobre cómo la selva era desaprovechada y debía convertirse en sabana productiva. Esto, por ejemplo, sostuvo sobre el Guaviare: </p><p>No es explicable la razón del criminal abandono de aquella región privilegiada. Dilatadas sabanas de pasto natural no aguardan sino la invasión de grandes cantidades de ganado que sostener y el establecimiento de haciendas a orillas de las aguas abundosas; bosques inmensos, vírgenes, de fertilidad prodigiosa en los que se encuentran todos los elementos para la edificación y el sostenimiento de la vida, no sirven de asilo sino a animales salvajes; en ellos la agricultura daría óptimos resultados (p. 30). </p><p>A esas empresas de colonización y tala las llamaron mejoras. Hoy en día vemos su efecto devastador y preocupante para el mundo entero. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4321/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/extravio/3/4.2.Extravio.jpg",
            thumbnail: "img/citas/extravio/3/4.2.Extravio_Thumb.jpg",
          },
        ],
      },
      {
        id: "35",
        image: "img/citas/extravio/4/Extravio_Cita05.jpg",
        bg: "img/citas/extravio/4/Extravio_Cita05_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>Es casi inevitable leer La vorágine sabiendo que a Arturo, Alicia, Rafael (su recién nacido sietemesino), Fidel y Griselda “los devoró la selva” o, como popularmente se conoce, “se los tragó la selva”. </p><p>Rivera incorporó en su relato la mitología de Occidente sobre la selva: su idea de un lugar “salvaje” (desierto, tundra, océano, estepa, pampa, etc.) por oposición a “la civilización”, ya que engulle como una genuina vorágine a quienes lo penetran para dominarlo. Inevitablemente, allí todos terminan devorándose entre sí, mientras el entorno los devora. </p><p>El testimonio de Arturo Cova muestra cómo, primero, va cediendo a la locura, se va volviendo inhumano e insensible, y a la postre, mata a Barrera de una manera que evoca una venganza caníbal. Con raras excepciones ―como Clemente Silva o el mulato Correa―, una y otra vez se cumplirá que los intrusos creen que la única forma de dominar el mundo salvaje es haciéndose más salvajes e irracionalmente crueles con la naturaleza y sus congéneres, sin importar si son propios o ajenos. Pero la crueldad que ven como salida es verdaderamente su perdición. Absortos en su locura, no pueden verlo. </p>",
        text: "<p>“Andamos perdidos”. Estas dos palabras, tan sencillas y tan comunes, hacen estallar, cuando se pronuncian entre los montes, un pavor que no es comparable ni al “sálvese quien pueda” de las derrotas. Por la mente de quien las escucha pasa la visión de un abismo antropófago, la selva misma, abierta ante el alma como una boca que se engulle los hombres a quienes el hambre y el desaliento le van colocando entre las mandíbulas (pp. 157-158).</p>",
        desc: "Anotaciones de Arturo Cova sobre el relato de Clemente Silva cuando se extravía en la selva. ",
        galeria: [
          {
            name: "5.1. Ice Scenes, Long Point. George Hathaway",
            type: "jpg",
            ficha: [
              "Ice Scenes, Cape Cod, Winter of 1875, Fishing Fleet off Long Point ",
              "George Hathaway Nickerson ",
              "1850-1930 ",
              "Getty Museum ",
            ],
            text: "<p>Estas fotografías estereoscópicas tomadas en el extremo norte, casi polar, de los Estados Unidos, ilustran muy bien el mundo fantasmagórico de una novela que tiene mucho en común con La vorágine: La narración de Arthur Gordon Pym, escrita por Edgar Allan Poe entre 1837 y 1838. </p><p>Este es también el recuento de una delirante aventura hacia la región antártica, en la que hay canibalismo y una progresiva inmersión de quien escribe hacia la locura. Tanto más, es probablemente con La vorágine la única otra novela producida en Occidente en la que el manuscrito queda interrumpido porque sus narradores no logran sobrevivir al entorno. </p><p>Que se sepa, Rivera nunca conoció esta obra de Poe. El colombiano fue muy audaz en tomar esta decisión narrativa, que convertía una novela de aventuras selvática en una cruda y real tragedia. </p>",
            link: "",
            btnText: "",
            img: "img/citas/extravio/4/5.1.Extravio.jpg",
            thumbnail: "img/citas/extravio/4/5.1.Extravio_Thumb.jpg",
          },
          {
            name: "5.2. Manuscrito de La vorágine - f.84v. José Eustasio Rivera",
            type: "jpg",
            ficha: [
              "Manuscrito de La vorágine ",
              "José Eustasio Rivera ",
              "1922-1924 ",
              "Biblioteca Nacional de Colombia, Sala Fondo Antiguo, RM617 ",
            ],
            text: "<p>En el manuscrito de La Vorágine conservado en la Biblioteca Nacional de Colombia se evidencia una metamorfosis elocuente conforme avanza la escritura. La elegante caligrafía del abogado y normalista José Eustasio Rivera ―seguramente acostumbrada a preparar largos memoriales fáciles de leer― se vuelve nerviosa, vehemente y apretada. Rivera corrigió con creciente frenesí lo consignado y cada vez con más violencia tacha y sobrescribe. En la penúltima página, el manuscrito parece proceder no de la mano de José Eustasio Rivera, sino del mismísimo Arturo Cova. Delirante y poseso, traza con rabia una vorágine para eliminar un aparte completo del texto. El fragmento suprimido corresponde a la escena siguiente a cuando un remolino se ha engullido a los indígenas maipureños y Franco lo llama “un desequilibrado tan impulsivo como teatral”.</p>",
            link: "https://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/search/asset/268942",
            btnText:
              "Abrir material en el catálogo de la BN a través del vínculo ",
            img: "img/citas/extravio/4/5.2.Extravio.jpg",
            thumbnail: "img/citas/extravio/4/5.2.Extravio_Thumb.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "lujuria",
    title: "Lujuria",
    minititle: "la lujuria",
    intro:
      "<p>La lujuria no solo está relacionada con el placer carnal, también es el exceso de cualquier cosa. Y como La vorágine es una novela sobre el exceso en todas sus formas, abunda en pasajes lujuriosos. Por ello, hay escenas de absoluta voluptuosidad que no necesariamente tienen talante sexual: el llano y la selva ofrecen paisajes y momentos rebosantes en colores, sonidos, aromas y sensaciones, bien sean conmovedoras o aterradoras. También hay personajes lujuriosos, que derrochan sin vergüenza, tienen mucho más de lo que necesitan —o incluso de lo que saben que tienen— y esclavizan a los demás, atrapándolos con la promesa de satisfacer sus deseos. La violencia que gana el corazón de Arturo Cova en un juego de azar es una violencia de los excesos, una violencia lujuriosa.</p>",
    textoFinal:
      "<p>Al igual que El gran Gatsby de Scott Fitzgerald, otra novela casi contemporánea, La vorágine adelanta una ácida y pesimista crítica a los excesos del capitalismo, así como a la soledad y destrucción que deja tras su paso.</p>",
    citas: [
      {
        id: "06",
        image: "img/citas/lujuria/0/Lujuria_Cita01.jpg",
        bg: "img/citas/lujuria/0/Lujuria_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>Al poeta Cova o al poeta Rivera les vienen bien las descripciones pródigas y lujuriosas, bien sea del paisaje, las personas o las situaciones. Al contrario de hacerlos narradores poco fiables, esto les permite dar cuenta de un mundo cuya tragedia está signada justamente por la sobreabundancia: de vida y muerte, de productos aprovechables y ambición, de belleza y terror, y de seres de toda índole que encarnan y hacen parte de la exuberancia general.  </p><p>En La vorágine, los llanos se van transformando de paraíso a entrada del infierno. En esta sobrecogedora narración de un amanecer llanero, aún el destino se ve tan prometedor como el paisaje mismo. Rivera —o Cova— conjuraron con música, color y belleza la lujuria de una escena que hasta el día de hoy se repite diariamente.</p>",
        text: "<p>Y la aurora surgió ante nosotros: sin que advirtiéramos el momento preciso, empezó a flotar sobre los pajonales un vapor sonrosado que ondulaba en la atmósfera como ligera muselina. Las estrellas se adormecieron, y en la lontananza de ópalo, al nivel de la tierra, apareció un celaje de incendio, una pincelada violenta, un coágulo de rubí. Bajo la gloria del alba hendieron el aire los patos chillones, las garzas morosas como copos flotantes, los loros esmeraldinos de tembloroso vuelo, las guacamayas multicolores. Y de todas partes, del pajonal y del espacio, del estero y de la palmera, nacía un hálito jubiloso que era vida, era acento, claridad y palpitación. Mientras tanto, en el arrebol que abría su palio inconmensurable, dardeó el primer destello solar y, lentamente, el astro, inmenso como una cúpula, ante el asombro del toro y la fiera, rodó por las llanuras, enrojeciéndose antes de ascender al azul (p. 22). </p>",
        desc: "Impresiones de Arturo Cova de los Llanos Orientales colombianos. ",
        galeria: [
          {
            name: "1.1. Salida del sol en los llanos. JMGA",
            type: "jpg",
            ficha: [
              "Salida del sol en los llanos",
              "José María Gutiérrez de Alba",
              "En Impresiones de un Viaje a América, tomo V, 1870-1884",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, MSS3357",
            ],
            text: "<p>Una sensibilidad semejante a la de Rivera fue la del viajero, poeta y periodista español José María Gutiérrez de Alba (1822-1897), quien en 1871 visitó los llanos de San Martín y pintó y describió de puño y letra el amanecer del 12 de febrero: “Desde la colina en que me hallaba”, anotó en su diario, “contemplé con gozo infinito la salida del sol, que se elevaba majestuosamente, como una bola ensangrentada, entre las ligeras y diáfanas brumas en que su propio calor iba convirtiendo el rocío de la noche”.</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll16/id/429",
            btnText: "Haga click para acceder al recurso completo",
            img: "img/citas/lujuria/0/1.1.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/0/1.1.Lujuria_Thumb.jpg",
          },
          {
            name: "1.2. La jangada. L. Benett. JV",
            type: "jpg",
            ficha: [
              "La jangada",
              "Ilustración de L. Benett",
              "En Jules Verne, La jangada. Huit cents lieues sur l’Amazone, París: Librairie Hachette, 1915",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 843.8 V37j5",
            ],
            text: "<p>Nada alimentó tanto la sed de viajes y exploraciones en el siglo XIX occidental como las novelas de Julio Verne. Sabemos que el propio José Eustasio Rivera las leyó febrilmente en sus primeros años. Verne produjo un relato policíaco ambientado en la Amazonia, La jangada (1881) y una novela de aventuras en el Orinoco, El soberbio Orinoco (1898). Aunque sus tramas son muy distintas, en ambas, el entorno hace las veces de catalizador para revelar un misterio, descubrir las maravillas de la naturaleza y tener encuentros no siempre pacíficos con los indígenas.</p><p>Curiosamente, Verne nunca viajó a la mayoría de los destinos que describió con erudición. Se valió de innumerables fuentes de viajeros, como los franceses Jules Crevaux y Jean Chaffanjon. En ese sentido, a él también le caía eso de solo conocer “las soledades domesticadas”.</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4313/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/lujuria/0/1.2.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/0/1.2.Lujuria_Thumb.jpg",
          },
        ],
      },
      {
        id: "22",
        image: "img/citas/lujuria/1/Lujuria_Cita02.jpg",
        bg: "img/citas/lujuria/1/Lujuria_Cita02_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>El relato de Arturo Cova deja ver una y otra vez la obsesión occidental, frecuente en las narraciones de viajes desde tiempos antiquísimos, por creer que los pueblos indígenas del mundo entero siempre han de recibir al hombre blanco como un dios venido de tierras lejanas o de otro mundo, por demás sexualmente apetecible. Para Occidente, la frontera siempre ha sido el lugar de consumación de las fantasías masculinas. </p><p>Ciertamente, en muchas y muy distintas circunstancias, para muchos pueblos indígenas ofrecer mujeres en matrimonio resultaba una estrategia para buscar establecer alianzas de parentesco con gente que llegaba con pólvora y mercancías, y que parecía ser muy poderosa. En realidad, en este aparte la descripción no nos deja saber si la actitud de las mujeres fue una aproximación erótica o un simple gesto de curiosidad. Con ingenio y algo de humor negro, Rivera deja abierta la ambigüedad. Para Cova, en cambio, es la oportunidad para mostrarse como un santo tentado en el desierto por la lujuria.</p>",
        text: "<p>Cuando me retiré a mi chinchorro, en la más completa desolación, siguieron mis pasos unas indias y se acurrucaron cerca de mí. Al principio conversaban a medio tono, pero más tarde atrevióse una a levantar la punta de mi mosquitero. Las otras, por sobre el hombro de su compañera, me atisbaban y sonreían. Cerrando los ojos, rechacé la provocación amorosa, con profundo deseo de libertarme de la lascivia y pedirle a la castidad su refugio tranquilo y vigorizante. (p. 94) </p>",
        desc: "Memorias de Arturo Cova sobre su estancia con el Pipa y sus compañeros en una comunidad indígena. ",
        galeria: [
          {
            name: "2.1. Por saciar los ardores. José Eustasio Rivera",
            type: "png",
            ficha: [
              "Por saciar los ardores",
              "En José Eustasio Rivera, Tierra de promisión, Bogotá: Arboleda & Valencia, 1921",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Misceláneas n.º 262",
            ],
            text: "<p>El primer libro publicado por Rivera en 1921, con una sugestiva carátula modernista, incluía 55 sonetos impecables dedicados al paisaje colombiano y a sus habitantes humanos, animales y vegetales. Tierra de promisión lo consagró como un poeta de renombre en la generación conocida como “del Centenario”, y aunque ya algunos de estos poemas trataban la violencia de los elementos, los animales o las personas, nada anticipaba que su siguiente obra fuera a ser en prosa y tuviera la crudeza de La vorágine. </p><p>Por saciar los ardores… es un soneto erótico que concluye con una violación. Los temas literarios aquí se acentúan: el indio alcahueta, el blanco libidinoso y el dinero u otras prebendas que ofrece para comprar una cópula forzada con una indígena virgen. Se trata de una escena habitual en la historia de cualquier colonización o enclave colonial. Pero Rivera parece haber querido mostrar su anverso cuando desarrolló en La vorágine el tema de la venganza implacable de lo femenino —que también es la selva “virgen”— ultrajada sobre su agresor. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4312/rec/2",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/lujuria/1/2.1.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/1/2.1.Lujuria_Thumb.jpg",
          },
          {
            name: "2.2. Mujeres huitotos en atuendo festivo. Thomas Whiffen. SP",
            type: "jpg",
            ficha: [
              "Mujeres huitotos en atuendo festivo",
              "Foto de Thomas William Whiffen",
              "En G. Sidney Paternoster, The Lords of the Devil’s Paradise, Londres: Stanley Paul, 1913",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 985.063 P17l",
            ],
            text: "<p>El capitán Thomas William Whiffen fue un explorador y etnógrafo británico que visitó el Putumayo entre 1908 y 1909. Su libro The North-West Amazons, publicado en 1915, sigue siendo una referencia fundamental para la etnología de los pueblos amazónicos y desde hace poco cuenta con su primera traducción al castellano, publicada por la Academia Colombiana de Historia.</p><p>Esta fotografía muestra un grupo de niñas okaina (a veces se ha dicho que son bora), preparadas para un baile con vistosos y complejos motivos de pintura corporal. En cualquier caso, existen dudas sobre la autenticidad de los diseños, que pudieron haber sido concebidos al menos parcialmente por Whiffen para darle más exotismo a la composición. La explotación de la imagen del cuerpo indígena, muchas veces de sus niñas y sus mujeres, y muchas veces intervenido para hacerlo más exótico, no era una actividad rara.</p><p>El okaina es un grupo lingüístico perteneciente a la familia witoto. Aunque se halla emparentado, el grupo bora habla bora-miraña, relacionada a su vez con las lenguas miraña y muinane.</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4319/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/lujuria/1/2.2.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/1/2.2.Lujuria_Thumb.jpg",
          },
        ],
      },
      {
        id: "34",
        image: "img/citas/lujuria/2/Lujuria_Cita03.jpg",
        bg: "img/citas/lujuria/2/Lujuria_Cita03_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>Uno de los pasajes más conmovedores de La vorágine describe la caravana de los picures: caucheros fugados de la estación donde han sido esclavizados a punta de deudas impagables y su propia ambición. Es un catálogo de ilusiones en vilo que tendrá un desenlace fatídico. Desde las ilusiones más básicas hasta las más nobles adquieren un cariz lujurioso: nacen de un deseo descomunal e imposible. </p><p>Este tipo de ilusiones tiene varios ejemplos reales durante la explotación cauchera. Antonio Vaca Díez, empresario cauchero, trajo desde Francia una casa prefabricada de hierro diseñada por Gustav Eiffel (creador de la Torre Eiffel) para ubicarla en plena selva, a orillas del río Mishagua. Proyecto imposible: la primera mitad de la casa (enviada en dos partes) se debió situar en la ciudad de Iquitos; la segunda, se vendió como chatarra. </p><p>La vorágine sorprende por cómo Rivera incorporó ―muchas veces sin ser consciente de ello― temas míticos de la tradición occidental. Esta escena recuerda el motivo platónico y medieval de la nave de los locos. Originalmente una fábula sobre la mala forma de gobernar, vino a representar la locura ante la convicción de ir por buen camino cuando se avanza hacia el dolor y la muerte.</p>",
        text: "<p>Y allá van por entre la selva, con la ilusión de la libertad, llenos de risas y proyectos, adulando al guía y prometiéndole su amistad, su recuerdo, su gratitud. Lauro Coutinho ha cortado la hoja de una palma y la conduce en alto, como un pendón; Souza Machado no quiere abandonar su balón de goma, que pesa más de dieciocho kilos, con cuyo producto piensa adquirir durante dos noches las caricias de una mujer, que sea blanca y rubia y que trasciende a brandy y a rosas; el italiano Peggi habla de salir a cualquier ciudad para emplearse de cocinero en algún hotel donde abunden las sobras y las propinas; Coutinho, el mayor, quiere casarse con una moza que tenga rentas; el indio Venancio anhela dedicarse a labrar curiaras; Pedro Fajardo aspira a comprar un techo para hospedar a su madre ciega, don Clemente Silva sueña en hallar una sepultura. ¡Es la procesión de los infelices, cuyo camino parte de la miseria y llega hasta la muerte! (p. 156). </p>",
        desc: "Anotaciones de Arturo Cova sobre el extravío en la selva de Clemente Silva junto con otros caucheros. ",
        galeria: [
          {
            name: "3.1. Studebaker. El mejor automóvil para nuestros caminos. M.M. Navarrete",
            type: "jpg",
            ficha: [
              "Studebaker. El mejor automóvil para nuestros caminos",
              "Manuel M. Navarrete",
              "En Renovación, 28 de junio de 1927",
              "Hemeroteca Luis Ángel Arango, 9292",
            ],
            text: "<p>Los automóviles van de la mano con la lujuria. Son objetos de deseo, ostentación y exuberancia. Y, obviamente, no puede haber carros sin llantas de caucho. Desde que se perfeccionó la técnica de vulcanización del caucho, haciéndolo estable, firme y resistente, cobró vuelo la industria automotriz. Esto, de hecho, fue uno de los grandes disparadores del consumo mundial de caucho, amén de su importancia en otros avances tecnológicos fundamentales para la era del capital y el imperio, como el revestimiento de los cables para el teléfono, el telégrafo y la electricidad ―incluyendo las sondas submarinas que conectaban distancias oceánicas―; la indumentaria militar, de trabajo y de exploración; las ruedas para otros tantos vehículos, como la bicicleta y el naciente aeroplano; e incluso en la fabricación de preservativos sexuales, cuya demanda incrementó conforme las urbes se atestaban y se ensanchaban las fronteras colonizadas del planeta. </p><p>En otras palabras, el caucho se hizo necesario para controlar, someter, recorrer y penetrar de muchas maneras. Esa historia de consumo, guerra y deseo potencialmente ilimitados alimentó a su vez el derroche y la miseria en el mundo cauchero amazónico y orinoquense. </p>",
            link: "",
            btnText: "",
            img: "img/citas/lujuria/2/3.1.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/2/3.1.Lujuria_Thumb.jpg",
          },
          {
            name: "3.2. Libro Azul. Great Britain y Casement",
            type: "jpg",
            ficha: [
              "Correspondence respecting the treatment of British Colonial subjects and native indians employed in the Collection of Rubber in the Putumayo District",
              "Gran Bretaña",
              "Londres: His Majesty's Stationery Office, 1912",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Misceláneas n.º 1438",
            ],
            text: "<p>La expresión de lujuria está asociada al poder, es decir, tiene la posibilidad de satisfacer sus deseos sin límites. En 1912, el cónsul británico Roger Casement presentó un informe decisivo para dar importancia internacional a las denuncias sobre las atrocidades cometidas en el Putumayo por la Casa Arana contra las poblaciones indígenas. Uno de los temas recurrentes en el informe es la descripción de los agentes de la Casa Arana como seres lujuriosos, sedientos de sangre, dinero y sexo; una suerte de legión de vampiros que acabarían con la población nativa. Por lo que sabemos de muchas otras fuentes contemporáneas o de novelas como La vorágine, Casement tenía razón.</p><p>Es irónico que Casement lograra tanto gracias a ser un agente imperial y que Gran Bretaña tuviera tanto interés en sacar al Perú (o sea, a Arana y compañía) del mercado internacional del caucho. Además, igual le guiaban ideas extremadamente europeas sobre los indios del Putumayo: fundamentalmente buenos y nobles salvajes, incapaces de albergar cualquier sentimiento de “lujuria, codicia y crueldad”, a los que había que proteger, cuidar y, por lo mismo, controlar para convertirles en “diligentes e inteligentes trabajadores”.</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4318/rec/4",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/lujuria/2/3.2.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/2/3.2.Lujuria_Thumb.jpg",
          },
        ],
      },
      {
        id: "24",
        image: "img/citas/lujuria/3/Lujuria_Cita04.jpg",
        bg: "img/citas/lujuria/3/Lujuria_Cita04_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. ",
        comentario:
          "<p>El pasaje de la indiecita Mapiripana narra la muerte de una indígena en la hoguera perpetrada por un misionero alcohólico y violador. Ella, ser sobrenatural y protectora de la selva, toma venganza torturándolo en una cueva con la misma violencia física y sexual. Con esta escena, Rivera cuestiona la violencia ejercida por miembros de la Iglesia, incluidos los de su época. Por ejemplo, fray Ezequiel Moreno, español fundador de misiones religiosas en Casanare, vicario apostólico, obispo de Pasto y beato de la Iglesia. Fray Ezequil Moreno fue un famoso propiciador de la violencia durante la Guerra de los Mil Días, predicando desde su púlpito que “el liberalismo es pecado”. </p><p>La narración del mito de Mapiripana se localiza justo en la mitad de La vorágine. Ubicándolo así en el texto, pareciera que Rivera hubiera querido sintetizar una idea fundamental de su obra: que la selva se venga de quien la ultraja sembrándole el terror, por ello la condena que le espeta Mapiripana al lúbrico misionero cuando este siente que ya no puede más con la tortura que le prodigan sus hijos: “¿Quién puede librar al hombre de sus propios remordimientos?”. Pero es también la oportunidad de vincular al relato al misionero: otro tipo social fundamental de la frontera, lleno de paradojas y de indudable influencia en la vida de los pueblos indígenas de buena parte de Colombia y, en general, del mundo colonial. </p><p>Nada parece indicar que la historia de Mapiripana perteneciera originalmente a alguna sociedad indígena de la región en que ocurre esta parte de la novela. No obstante, fue tal su poder que hoy varios resguardos indígenas de ese mismo territorio la reclaman como propia. Rivera no solo plasmó en La vorágine el gran mito en el que Occidente proyectó sus miedos en la frontera; también dio a luz a un eficaz mito indígena.</p>",
        text: "<p>—La indiecita Mapiripana es la sacerdotisa de los silencios, la celadora de manantiales y lagunas. […] En otros tiempos, vino a estas latitudes un misionero, que se emborrachaba con jugo de palmas y dormía en el arenal con indias impúberes. Como era enviado del cielo a derrotar la superstición, esperó que la indiecita bajara cierta noche de los remansos del Chupave, para enlazarla con el cordón del hábito y quemarla viva, como a las brujas. […] Con lujurioso afán empezó a seguirla, mas se le escapaba en las tinieblas; llamábala con premura, y el eco engañoso respondía. Así lo fue internando en las soledades hasta dar con una caverna donde lo tuvo preso muchos años. </p><p>Para castigarle el pecado de la lujuria, chupábale los labios hasta rendirlo, y el infeliz, perdiendo su sangre, cerraba los ojos para no verle el rostro, peludo como el de un mono orangután. Ella, a los pocos meses, quedó encinta y tuvo dos mellizos aborrecibles: un vampiro y una lechuza. Desesperado el misionero porque engendraba tales seres, se fugó de la cueva, pero sus propios hijos lo persiguieron, y de noche, cuando se escondía, lo sangraba el vampiro y la lucífuga lo reflejaba, encendiendo sus ojos parpadeantes, como lamparillas de vidrio verde (p. 103).</p>",
        desc: "Historia relatada por Helí Mesa ante el Pipa, Arturo Cova y sus acompañantes. ",
        galeria: [
          {
            name: "4.2. Recuerdos de un viaje. Pablo V. Gómez",
            type: "jpg",
            ficha: [
              "Recuerdos de un viaje",
              "Pablo V. Gómez",
              "Zapatoca: Tipografía El Progreso, 1913",
              "Biblioteca Nacional de Colombia, 918.617",
            ],
            text: "<p>El militar Pablo V. Gómez fue un misterioso y excéntrico personaje que en 1925 le escribió a José Eustasio Rivera felicitándolo por La vorágine y preguntándole si no se habría inspirado en su colorida vida como soldado en la Guerra de los Mil Días para ciertas escenas y comportamientos de Arturo Cova.</p><p>En sus Recuerdos de un viaje, Gómez se mofaba de los frailes misioneros extranjeros que “se dedicaron a reducir exclusivamente la tribu sáliba”, entre la cual tuvo “ocasión de ver… dos mujeres rubias de notable hermosura y algunos otros ejemplares” que no eran sino hijas e hijos de los religiosos del lugar. Lo cierto es que es un capítulo todavía poco estudiado de la historia del impacto de las misiones, el de la progenie que los religiosos dejaron en varios lugares.</p>",
            link: "",
            btnText: "",
            img: "img/citas/lujuria/3/4.2.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/3/4.2.Lujuria_Thumb.jpg",
          },
          {
            name: "4.1. Informes sobre las misiones. Hermanos Menores Capuchinos",
            type: "jpg",
            ficha: [
              "Informes sobre las misiones del Caquetá, Putumayo, Goajira, Casanare, Meta, Vichada, Vaupés y Arauca",
              "Hermanos Menores Capuchinos",
              "Bogotá: Imprenta Nacional, 1917",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Misceláneas n.º 197",
            ],
            text: "<p>Durante buena parte de la historia republicana de Colombia, el Estado hizo presencia en los llamados “territorios nacionales” mediante la delegación a misiones católicas de distintas congregaciones, la gran mayoría españolas. El gobierno conservador de Rafael Núñez suscribió en 1887 un concordato con la Santa Sede, que entre otros muchos asuntos permitía que las comunidades religiosas hicieran las veces de agentes en representación de los intereses nacionales fronterizos. Es por esto que los informes de misiones abundan para este periodo, especialmente sobre las regiones abarcadas en La vorágine. </p><p>Uno de estos documentos es Informes sobre las misiones del Caquetá, Putumayo, Goajira, Casanare, Meta, Vichada, Vaupés y Arauca (Hermanos Menores Capuchinos, 1917) que, como en muchos otros, señala tanto perjuicios como beneficios de la institución. Las misiones ejercieron sistemas de control y explotación del trabajo de los pueblos indígenas que muchas veces rayaron en lo brutal. Pero, igualmente, les proveyeron de un refugio invaluable frente a los avances caucheros y de armas, como la lectura, la escritura y la aritmética, que resultaban fundamentales para sobrevivir a los embates del mundo blanco. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4317/rec/2",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/lujuria/3/4.1.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/3/4.1.Lujuria_Thumb.jpg",
          },
        ],
      },
      {
        id: "37",
        image: "img/citas/lujuria/4/Lujuria_Cita05.jpg",
        bg: "img/citas/lujuria/4/Lujuria_Cita05_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        comentario:
          "<p>Las tres citas anteriores constituyen la imagen de una mujer excepcional en La vorágine: la madona Zoraida Ayram. Es el objeto de deseo de Arturo Cova, así afirme que solo la ha seducido para llegar a Alicia. Pero lo cierto es que ella es quien lo seduce. Según La vorágine, aprovecha su voluptuosidad para atraer hombres que la provean de caucho, créditos favorables y protección. Como Venus, Dalila o las sirenas, seduce para robar la fuerza y destruir al protagonista. </p><p>Su sensualidad se ha vuelto extensión de la cárcel verde, de la selva. Cova ve a la madona como una vampiresa o una bruja. Es esclavo de su lujuria. Y como ocurre con la brujería, ha sido víctima de una fascinación ilusoria: Zoraida ahora le parece horrible, tenebrosa, sórdida y temible. Aunque logrará abandonarla, su suerte ya está echada: la selva terminará el trabajo y lo devorará. </p><p>Zoraida y Alicia se oponen: son pecado y virtud. Esta dicotomía deja ver la reducida mirada masculina de Cova: las mujeres se dividen en controlables o incontrolables, dominadas o dominadoras, y santas o brujas. </p>",
        text: "<p>La madona asomó a la puerta, llenando con su figura quicio y dintel. Era una hembra adiposa y agigantada, redonda de pechos y caderas. Ojos claros, piel láctea, gesto vulgar. Con sus vestidos blancos y sus encajes tenía la apariencia de una cascada. Luengo collar de cuentas azules se descolgaba desde su seno, cual una madreselva sobre una sima. Sus brazos, resonantes por las pulseras y desnudos desde los hombros, eran pulposos y satinados como dos cojincillos para el placer, y en la enyodada mano tenía un tatuaje que representaba dos corazones atravesados por un puñal (p. 166). </p><p>Observándola de reojo, comencé a sentir la agresividad que precede a los desafíos. ¡Mujer singular, mujer ambiciosa, mujer varonil! (p. 169) </p><p>Y la odio y la detesto por calurosa, por mercenaria, por incitante, por sus pulpas tiranas, por sus senos trágicos. Hoy, como nunca, siento nostalgia de la mujer ideal y pura, cuyos brazos brinden serenidad por la inquietud, frescura para el ardor, olvido para los vicios y las pasiones (p. 189).</p>",
        desc: "Reflexiones de Arturo Cova sobre la madona Zoraida Ayram, luego de encontrarla en las barracas del Váquiro. ",
        galeria: [
          {
            name: "5.1. Mujer sentada en una ventana fumando. Anónimo",
            type: "tif",
            ficha: [
              "Mujer sentada en una ventana fumando",
              "Anónimo",
              "1904",
              "Biblioteca del Congreso de los Estados Unidos",
            ],
            text: "<p>Para exacerbar el carácter de la madona, José Eustasio Rivera hizo énfasis en su extranjería. Es “turca”, nativa de algún lugar del Medio Oriente. Por ende, está llena de los misterios y la fascinación que los lectores de la época suponían que tenían las mujeres del mundo de Las mil y una noches. Desde los tiempos de las cruzadas hasta mediados del siglo XX, el Oriente, cercano o lejano, fue imaginado como un lugar pletórico en sensualidad, en donde los rígidos códigos religiosos y el cubrimiento de los rostros tenía como contraparte una cultura y permisividad sexuales mucho más ricas y abiertas que las de Occidente. Por ejemplo, muchos hombres homosexuales de recursos viajaron a Oriente en busca de una libertad de la que no podían gozar en sus ciudades, salvo en ámbitos clandestinos. </p><p>Por su parte, el arte orientalista creó y difundió con gran éxito el estereotipo de la mujer turca, árabe o gitana, de desinhibido deseo sexual y voluptuosas formas, con las que siempre era peligroso involucrarse. Razón de más para que fueran un desafío a la masculinidad. Así lo asumió Arturo Cova.</p>",
            link: "",
            btnText: "",
            img: "img/citas/lujuria/4/5.1.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/4/5.1.Lujuria_Thumb.jpg",
          },
          {
            name: "5.2. Tannhäuser. Richard Wagner. The Victrola Book",
            type: "jpg",
            ficha: [
              "Tannhäuser",
              "Richard Wagner",
              "En Samuel Holland Rous, The Victrola Book of the Opera: Stories of the Operas, New Jersey: Victor Talking Machine Company, 1919",
              "Biblioteca Luis Ángel Arango, Depósito D1, 782.1 H65v",
            ],
            text: "<p>Como a mucha gente de su generación y entorno, la música que más gustaba e impactaba a José Eustasio Rivera era la del compositor alemán Richard Wagner (1813-1883). Los dramas musicales de Wagner habían generado una verdadera revolución estética y política en el mundo occidental durante la segunda mitad del siglo XIX, y se hicieron inmensamente populares e influyentes a través de traducciones a muchos idiomas y las primeras grabaciones fonográficas. La edición preparada en 1908 por la Casa Editorial Maucci (Barcelona) permitió que las complejidades de sus libretos y tramas se hicieran comprensibles para el público hispanohablante.</p><p>La historia de Arturo Cova con Zoraida evoca inevitablemente una de las más célebres obras de Wagner, Tannhäuser, sobre un poeta medieval que se debate entre el amor puro y el amor terrenal y lujurioso por la diosa Venus, que le tiene preso en su montaña, ubicada en el inframundo. A Venus le canta Tannhäuser desesperado, lira en mano: “No solo el placer es vecino de mi corazón. / En medio del goce, busco el dolor. / De tu reino debo huir. / ¡Oh reina, diosa, déjame ir!”. El peligro a la mujer dueña de sí misma, de su cuerpo e inteligencia, es un tema recurrente en todas las artes de Occidente.</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4331/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/lujuria/4/5.2.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/4/5.2.Lujuria_Thumb.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "violencia",
    title: "Violencia",
    minititle: "la violencia",
    intro:
      "<p>Se ha dicho que La vorágine es la gran novela colombiana sobre la violencia. También lo es sobre el capitalismo, la selva y la frontera. Pero, ciertamente, Violencia es la palabra que, casi desde el inicio, establece la clave de interpretación de la historia que Arturo Cova narra. </p>",
    textoFinal:
      "<p>Tanto en el manuscrito que preparó Rivera de la primera parte de La vorágine —hoy en día en la Biblioteca Nacional de Colombia—, como en todas las ediciones que él supervisó, la violencia de la famosa primera frase fue escrita con mayúscula. No fue una opción gratuita: quería enfatizar que se trataba de una fuerza destructora total, activa en múltiples formas y escenarios. Violencias políticas, violencias contra poblaciones enteras, violencia de la expoliación capitalista de la selva, violencia de la codicia, violencia de la explotación de personas, violencia contra las mujeres, violencia contra sí mismo, violencia como motor del mal. Una fuerza trasmitida por muchas sustancias: el alcohol, por supuesto, pero también por el dinero, el perfume y el caucho, que ultimadamente conllevan la destrucción y el triunfo de la muerte; a eso que de otra manera llamamos “terror”. </p>",
    citas: [
      {
        id: "15",
        image: "img/citas/violencia/0/Violencia_Cita01.jpg",
        bg: "img/citas/violencia/0/Violencia_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        comentario:
          "<p>Este y otros pasajes de La vorágine muestran la historia de violencia genocida con la cual los indios fueron expropiados para sembrar pastos, sostener ganado y expandir la industria ganadera en los llanos. La violencia de este proceso es la base de la cultura del hato. En la primera parte de la novela se describe esta guerra mediante la cual se buscaba “limpiar” de indios las tierras de los llanos para abrir espacio a la ganadería y los hatos de los colonos y hacendados. </p><p>Estas partidas de caza para masacrar a los indios, conocidas como cuibiadas o guajibiadas, se venían adelantando sistemáticamente en la zona desde mediados del siglo XIX. Muchos viajeros que pasaron por estas tierras las mencionaron con desaprobación, siendo el más influyente de ellos José Eustasio Rivera. Sin embargo, el desdén y la indiferencia de las autoridades locales y nacionales permitieron las masacres de indígenas continuara hasta la década de 1970, cuando fue abiertamente condenada. A pesar de ello, se siguen practicando hasta hoy. </p>",
        text: "<p>—Mama, jue que los indios le mataron a él la jamilia, y como puaquí no hay autoridá, tié uno que desenrearse solo. Ya ven lo que pasó en El Hatico: macetearon a tóos los racionales y toavía humean los tizones. Blanco, ¡hay que apandiyarnos pa echarles una buscáa! </p><p>—¡No, no! ¿Cazarlos como a fieras? Eso es inhumano. </p><p>—Pues lo que usté no haga contra eyos, eyos lo hacen contra usté (p. 46). </p>",
        desc: "Diálogo entre el mulato Correa y Arturo Cova en La Maporita. ",
        galeria: [
          {
            name: "1.1. Casanare. Jorge Brisson",
            type: "png",
            ficha: [
              "Casanare ",
              "Jorge Brisson ",
              "Bogotá: Imprenta Nacional, 1896 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 918.659 B74c ",
            ],
            text: "<p>Varios viajeros que pasaron por los llanos de San Martín repararon antes que José Eustasio Rivera en la angustiosa situación de las poblaciones indígenas nómadas. El ingeniero francés Jorge Brisson, que los visitó en 1894, mostró con indignación cómo las recurrentes y gratuitas agresiones de los colonos habían generado una enorme desconfianza entre la población guahiba. En una misión religiosa incluso escuchó decir que temían a la gente blanca porque ellos querían usar sus cuerpos para hacer jabón: poderosa imagen para dar cuenta de cómo percibían que para los blancos ellos no eran sino otro recurso extraíble y aniquilable. Diecisiete años después, el misionero agustino Pedro Fabo reiteró la preocupación, aunque para ello apeló al tipo de indigenismo que era corriente para principios del siglo XX: a los pueblos indígenas había que formarlos en valores patrios y hacer de ellos ciudadanos colombianos, para que así contribuyeran al progreso nacional, aportando mano de obra apta para los rigores de los climas tropicales y defendiendo las fronteras. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4324/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/violencia/0/1.1.Violencia.jpg",
            thumbnail: "img/citas/violencia/0/1.1.Violencia_Thumb.jpg",
          },
          {
            name: "1.2. Excursiones por Casanare. Fray Daniel Delgado",
            type: "png",
            ficha: [
              "Excursiones por Casanare ",
              "Fray Daniel Delgado",
              "Bogotá: Imprenta La Luz, 1909 ",
              "Biblioteca Luis Ángel Arango, Depósito D2, 918.6 D35e1 ",
            ],
            text: "<p>Entre los pueblos indígenas que más llamaron la atención de los misioneros en la última década del siglo XIX y la primera del siglo XX estaban los tunebos, achaguas, sálibas, guahibos, piapocos, cuibas, pumé y amorúas, que eran en su gran mayoría nómadas. Los glosarios, diccionarios y gramáticas de sus lenguas abundaron, con el claro fin de propiciar su evangelización. No obstante, una buena parte de estos no hizo la menor referencia a lo que le estaba sucediendo a estas sociedades, cuando las guajibiadas y cuibiadas se habían vuelto formas habituales de cacería humana y de despojo. De hecho, las justificaciones para producir estas gramáticas reproducían buena parte de las ideas por las cuales los colonos blancos los juzgaban inferiores. </p><p>Hubo misioneros, como fray Pedro Fabo, mucho más agudos y perceptivos sobre las complejidades de la vida indígena. Pero otros, como fray Daniel Delgado, si bien denunciaban los peores atropellos contra los aborígenes (algunas masacres multitudinarias, por cierto), les concedían razón a los colonos en “defenderse” cuando los indios venían a reclamar por la fuerza el territorio que les habían robado. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4337/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/violencia/0/1.2.Violencia.jpg",
            thumbnail: "img/citas/violencia/0/1.2.Violencia_Thumb.jpg",
          },
        ],
      },
      {
        id: "23",
        image: "img/citas/violencia/1/Violencia_Cita02.jpg",
        bg: "img/citas/violencia/1/Violencia_Cita02_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        comentario:
          "<p>Una de las formas de la violencia que aparece en La vorágine es la que surge de la relación de poder entre guardias y prisioneros, así estos hayan sido encarcelados de manera legal. Los prisioneros han sido engañados y secuestrados para venderlos como trabajadores en las caucherías por parte de los hombres de Barrera. </p><p>“Barrera había venido a llevar la gente para las caucherías de Vichada”, explicaba a don Rafo la niña Griselda, “Es la ocasión de mejorá: dan alimentación y cinco pesos por día [...] ha treído mercancías y morrocotas para dá y convidá [...] tá ofreciendo plata anticipáa” (p. 28). Este era uno de los aspectos más rentables del negocio: engañarlos y obligarlos con ilusiones anticipadas. “Si pudiera, no negociaría en goma sino en gomeros” (p. 194), pensó tiempo después el propio Arturo Cova. Y para ponerlos en marcha, los guardianes y verdugos tenían que ejercer control total sobre los cuerpos y las vidas de los esclavizados. La brutalidad y violencia de los capataces caucheros y de los carceleros de secuestrados se facilitan porque están al margen de la ley. O mejor: porque en la frontera, la ley es otra, la de ellos. </p>",
        text: "<p>En el bongo de las mujeres van los chicuelos, a pleno sol, mojándose las cabecitas para no morir carbonizados. Parten el alma con sus vagidos, tanto como las súplicas de las madres, que piden ramas para taparlos. El día que salimos al Orinoco, un niño de pechos lloraba de hambre. El Matacano, al verlo lleno de llagas por las picaduras de los zancudos, dijo que se trataba de la viruela, y, tomándolo de los pies, volteólo en el aire y lo echó a las ondas. Al punto, un caimán lo atravesó en la jeta, y, poniéndose a flote, buscó la ribera para tragárselo. La enloquecida madre se lanzó al agua y tuvo igual suerte que la criaturilla. Mientras los centinelas aplaudían la diversión, logré zafarme las ligaduras, y, rapándole el grazt al que estaba cerca, le hundí al Matacano la bayoneta entre los riñones, lo dejé clavado contra la borda, y, en presencia de todos, salté al río. </p><p>Los cocodrilos se entretuvieron con la mujer. Ningún disparo hizo blanco en mí. Dios premió mi venganza y aquí estoy (p. 100). </p>",
        desc: "Relato de Helí Mesa en el Vichada contado a Arturo Cova y sus compañeros.",
        galeria: [
          {
            name: "",
            type: "jpg",
            ficha: [],
            text: "<p>Cuando apareció en 1924, la crítica no señaló el papel fundamental de La vorágine para abordar el fenómeno de la violencia. Colombia vivía por entonces del optimismo generado por la llamada “danza de los millones”, o sea el sustancial desembolso que habían hecho Estados Unidos en pago por la separación de Panamá, que, se esperaba, habría de estimular la economía nacional con la construcción de grandes proyectos de infraestructura y la generación de muchos empleos. </p><p>Solo después de la Violencia de las décadas de 1940 a 1960 y del larguísimo conflicto entre la guerrilla y los paramilitares, así como la guerra sucia muchas veces adelantada por los gobiernos y la injerencia del narcotráfico en todos los bandos y sus propias formas de terror, la crítica destacó la importancia del motivo de la violencia La vorágine. La figura de Clemente Silva se empezó a entender como el primer buscador de desaparecidos y la novela como la primera obra de la “literatura del secuestro”, género literario o periodístico creado a partir de los testimonios de civiles o militares secuestrados por la guerrilla, popular en las décadas de 1990 a 2010. </p>",
            link: "",
            btnText: "",
            img: "img/citas/violencia/1/2.1.Violencia.jpg",
            thumbnail: "img/citas/violencia/1/2.1.Violencia_Thumb.jpg",
          },
          {
            name: "2.2. La cabaña del tío Tom. Harriet Beecher Stowe",
            type: "jpg",
            ficha: [
              "La cabaña del tío Tom ",
              "Harriet Beecher Stowe ",
              "París: Imprenta Poussielgue, 1852 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 813.37 S76c13 ",
            ],
            text: "<p>En 1933, el misionero británico Kenneth G. Grubb escribió, en su paso por Colombia, que “La vorágine, en tanto que aboga por la causa del cauchero, puede ser considerada como La cabaña del tío Tom de la vida amazónica”. </p><p>La cabaña del tío Tom, novela de la abolicionista estadounidense Harriet Beecher Stowe, publicada por primera vez en un volumen en 1852 (con una traducción al castellano que salió en el mismo año y que hace parte de los tesoros de la Biblioteca Luis Ángel Arango), causó enorme revuelo en torno a la esclavitud en los Estados Unidos. Fue una de las fuentes intelectuales que ampararon la causa antiesclavista que condujo a la sangrienta guerra de Secesión en esa nación (1861-1865). A pesar de que hoy se lee con otros ojos y se identifican fuertes elementos racistas en la escritura y la trama, para su época se consideró como una contundente obra de denuncia contra el sistema esclavista. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4335/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/violencia/1/2.2.Violencia.jpg",
            thumbnail: "img/citas/violencia/1/2.2.Violencia_Thumb.jpg",
          },
        ],
      },
      {
        id: "27",
        image: "img/citas/violencia/2/Violencia_Cita03.jpg",
        bg: "img/citas/violencia/2/Violencia_Cita03_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        comentario:
          "<p>Clemente Silva se refiere en este aparte a la visita que hizo a la región del Putumayo Eugène Robuchon, un explorador y fotógrafo francés, miembro de la Sociedad Geográfica de París. En 1904 fue comisionado por Arana Hermanos para que documentara las actividades de la empresa en el Putumayo y produjera una “imagen positiva” de esta como portadora de civilización y progreso para una región otrora salvaje. Robuchon, sin embargo, se les salió de las manos y se dedicó a documentar las distintas formas de castigo, vejación, tortura y violación a los que los capataces de la Casa Arana sometían a “sus gomeros”, que se conoce como las atrocidades del Putumayo. En La vorágine se da a entender que al francés (el Mosiú, como aparece en la novela) lo desaparecieron en la selva los hombres de Arana. Lo cierto es que nadie volvió a saber de su paradero luego de febrero de 1906. Por su parte, la gente de Arana difundió la versión de que se lo habían comido los caníbales. Como haya sido, a él también, de una manera u otra, lo devoró la selva. </p>",
        text: "<p>De allí en adelante, el lente fotográfico se dio a funcionar entre las peonadas, reproduciendo fases de la tortura, sin tregua ni disimulo, abochornando a los capataces, aunque mis advertencias no cesaban de predicarle al naturalista el grave peligro de que mis amos lo supieran. El sabio seguía impertérrito, fotografiando mutilaciones y cicatrices. “Estos crímenes, que avergüenzan a la especie humana”, solía decirme, “deben ser conocidos en todo el mundo para que los gobiernos se apresuren a remediarlos”. Envió notas a Londres, París y Lima, acompañando vistas de sus denuncias, y pasaron tiempos sin que se notara ningún remedio. Entonces decidió quejarse a los empresarios, adujo documentos y me envió con cartas a La Chorrera […]. </p><p>¡El infeliz francés no salió jamás! (pp. 129-130). </p>",
        desc: "Relato de Clemente Silva sobre el explorador y naturalista llamado el Mosiú. ",
        galeria: [
          {
            name: "3.1.  Un incidente en el Putumayo. Foto anónima",
            type: "png",
            ficha: [
              "Un incidente en el Putumayo. Mujer indígena condenada a morir de hambre en el Alto Putumayo ",
              "Foto anónima ",
              "En Walter E. Hardenburg, The Putumayo, the Devil's Paradise: Travels in the Peruvian Amazon Region and an Account of the Atrocities Committed Upon the Indians Therein, Londres: T. Fisher Unwin, 1912 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 985.0001 H17p ",
            ],
            text: "<p>Algunos autores contemporáneos a las atrocidades del Putumayo atribuyeron esta impresionante fotografía a la lente de Eugene Robuchon. Pero su origen y circunstancias son perfectamente inciertos hasta la fecha. Se hizo enormemente popular cuando apareció la serie de reportajes y el libro titulados El Putumayo, el paraíso del diablo, del estadounidense Walter Hardenburg, quien sostuvo haber sido prisionero de Arana en la región. Después de su publicación en Londres, la crónica destapó los crímenes y el genocidio del Putumayo ante la opinión internacional. </p><p>Hardenburg tomó la fotografía de la revista Variedades de Lima, en la que había aparecido junto a una noticia que atribuía la comisión de este delito a unos caucheros colombianos que vivían de esclavizar indígenas y asaltar a sus vecinos. Esta versión tampoco puede desestimarse. Aun así, la verdad es que ni siquiera es posible establecer si la fotografía fue tomada en el Putumayo, cuándo ocurrió o si se trata de un montaje hecho a partir de un cuerpo momificado o a partir del testimonio gráfico de alguna enfermedad devastadora. Tanto Arana como sus detractores se valieron continuamente de fotomontajes para sustentar la “veracidad” de sus afirmaciones. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4323/rec/2",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/violencia/2/3.1.Violencia.jpg",
            thumbnail: "img/citas/violencia/2/3.1.Violencia_Thumb.jpg",
          },
          {
            name: "3.2. La guarida de los asesinos. Ricardo Gómez Arturo",
            type: "jpg",
            ficha: [
              "La guarida de los asesinos. Relato histórico de los crímenes del Putumayo ",
              "Ricardo Gómez Arturo ",
              "Pasto: Imp. La Cosmopolita, 1933 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 325.8667 G65g ",
            ],
            text: "<p>Ricardo Gómez Arturo (1892-1971) conoció de primera mano la región del Putumayo cuando, en 1912, bajó hasta allí a engancharse como cauchero. En 1924, el mismo año de publicación de La vorágine, apareció su libro testimonial La guarida de los asesinos, obra que si bien tuvo mucho menor impacto que la novela, fue de los primeros registros extensivos hechos de las atrocidades del Putumayo por alguien que hubiera trabajado para la Casa Arana y sido testigo directo de sus métodos de terror. </p><p>Esta edición de 1933, la tercera, es particularmente interesante. El dibujo de su cubierta presenta a un personaje que muy probablemente fuera el sanguinario Armando Normand, boliviano empleado de la Casa Arana y gerente de la estación adecuadamente llamada Matanzas. Cuando el gobierno peruano dictó órdenes de captura contra Normand y otros muchos caucheros, este logró escapar sin dejar rastro y sin que se le hubiera podido identificar en ninguna fotografía. Así pues, este puede ser el único retrato que poseamos del tenebroso personaje. </p>",
            link: "",
            btnText: "",
            img: "img/citas/violencia/2/3.2.Violencia.jpg",
            thumbnail: "img/citas/violencia/2/3.2.Violencia_Thumb.jpg",
          },
        ],
      },
      {
        id: "39",
        image: "img/citas/violencia/3/Violencia_Cita04.jpg",
        bg: "img/citas/violencia/3/Violencia_Cita04_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        comentario:
          "<p>Una de las formas de violencia a las que se refiere reiteradamente La vorágine es la sexual. En particular, se hacen reiteradas referencias a forma en que las mujeres indígenas son violadas, explotadas y cosificadas: “saldrá pronto una expedición a someter las tribus andoques y lleva encargo de recoger guarichas donde las haya. […] cualquier indio que tenga mujer o hija debe presentarla en este establecimiento para saber que se hace con ella” (p. 122). Y más adelante, “estas noches los siringueros han invadido el zarzo de las mujeres, para gozarlas como premio de su semana, según vieja costumbre. […] Los menos rijosos cambian su derecho a los impacientes por tabacos, por goma o por píldoras de quinina” (p. 190). Pero no solo se hace referencia a la violencia sexual contra las indígenas. En la novela se cuenta también la historia de Clarita, una llanera venezolana a quien rifaron en un juego de tresillo y ha sido continuamente degradada y usada a cambio de prometerle un retorno a su tierra, que nunca ocurrirá. </p>",
        text: "<p>Y cuando pasamos junto a un caney, cercano al río, vi un grupo de niñas, de ocho a trece años, sentadas en el suelo, en círculo triste. Vestían todas chingues mugrientos, terciados en forma de banda y suspendidos por sobre el hombro con un cordón, de suerte que les quedaban pecho y brazos desnudos. Una espulgaba a su compañera, que se le había dormido sobre las rodillas; otras preparaban un cigarrillo en una corteza de tabarí, fina como el papel; esta, de cuando en cuando, mordía con displicencia un caimito lechoso; aquella, de ojos estúpidos y greñas alborotadas, distraía el hambre de una criatura que le pataleaba en las piernas, metiéndole el meñique entre la boquita, a falta del pezón ya exhausto. ¡Nunca veré otro grupo de más infinita desolación! </p><p>—Don Clemente, ¿qué se quedan haciendo estas indiecitas mientras tornan sus padres a la barraca? </p><p>—Estas son las queridas de nuestros amos. Se las cambiaron a sus parientes por sal, por telas y cachivaches o las arrancaron de sus bohíos como impuesto de esclavitud. Ellas casi no han conocido la serena inocencia que la infancia respira, ni tuvieron otro juguete que el pesado tarro de cargar agua o el hermanito sobre el cuadril. ¡Cuán impuro fue el holocausto de su trágica doncellez! Antes de los diez años, son compelidas al lecho, como a un suplicio; y, descaderadas por sus patrones, crecen entecas, taciturnas, ¡hasta que un día sufren el espanto de sentirse madres, sin comprender la maternidad! (p. 174).</p>",
        desc: "Diálogo entre Arturo Cova y Clemente Silva en las barracas de Guaracú. ",
        galeria: [
          {
            name: "4.1. Huitotas civilizadas al servicio de La Chorrera, 1904. Anónima",
            type: "jpg",
            ficha: [
              "Huitotas civilizadas al servicio de La Chorrera, 1904 ",
              "Foto anónima ",
              "En Julio César Arana, Las cuestiones del Putumayo, Barcelona: Imp. Viuda de Luis Tasso, 1913 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 327.8600985 A71c",
            ],
            text: "<p>Uno de los primeros efectos de los escándalos del Putumayo fue desestabilizar las operaciones en el Reino Unido de la Peruvian Amazon Company, nombre con el cual se radicó en Londres la empresa sostenida por las distintas compañías de Julio César Arana y asociados. Para intentar contrarrestar el descrédito, varios miembros de esta organización, incluido el mismo Arana, publicaron en Barcelona sendos folletos de defensa, dando a entender que lo que estaba detrás de los escándalos eran los intereses comerciales y políticos de Colombia, Estados Unidos y el mismo Reino Unido. </p><p>En el folleto que el propio Arana firmó aparecieron muchas fotografías que daban a entender que la población indígena no solo estaba bien, sino incluso feliz en sus estaciones y agencias. La gran mayoría habían sido tomadas, o eso parece, por el explorador francés Eugène Robuchon. </p><p>Ciertamente, el pasaje de La vorágine en el que Arturo Cova describe al grupo de niñas indígenas esclavizadas ocurre hacia el Vichada, lejos de los dominios de Arana. Pero por todo lo que sabemos, la real situación de la mayoría de mujeres indígenas en los predios de Arana era igual o peor de lo que narraba Cova. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4322/rec/2",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/violencia/3/4.1.Violencia.jpg",
            thumbnail: "img/citas/violencia/3/4.1.Violencia_Thumb.jpg",
          },
          {
            name: "4.2. Grupo de mujeres indígenas del río Papunáua. Hamilton Rice",
            type: "jpg",
            ficha: [
              "Grupo de mujeres indígenas del río Papunáua ",
              "Fueron las primeras en ser contactadas que podían hablar tupi-guaraní o la llamada lingoa-geral. Aparentemente, esta gente tiene más relación con los indios del extremo Isana superior y el Vaupés, que con los del Inírida. Probablemente son de ascendente arawak. ",
              "En Hamilton Rice, Further Explorations in the North-West Amazon Basin, Londres: W. Clowes, 1914 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 918.6 R42f ",
            ],
            text: "<p>Las indígenas que aparecen en esta fotografía pueden ser muy parecidas a las descritas por Arturo Cova luego de su esclavitud. Pertenecieron a uno de los varios grupos que fueron sometidos por el terror cauchero, ya no de Arana, sino del coronel Tomás Funes, al que La vorágine dedica su tercera parte. </p><p>En la novela, Funes es descrito como “un sistema, un estado del alma, es la sed de oro, es la envidia sórdida” (p. 184). Se calcula que exterminó algunas poblaciones de la región del Vaupés, arrasando sus aldeas, esclavizándolos para la recolección forzada de goma y prestar servicios sexuales. </p><p>Quien tomó la foto fue Hamilton Rice, un médico estadounidense que viajó extensivamente por el Vaupés entre 1907 y 1913, justo por la época en que transcurre la trama de la novela. </p><p>La lingua geral (lengua general) amazónica es una lengua de la familia tupí que por su extensión territorial y en hablantes fue estimulada desde muy temprano por los misioneros y comerciantes de la región como lengua franca, útil para hacer transacciones y evangelizar a pueblos indígenas de muy distintos orígenes y con lenguas maternas muy distintas entre sí. </p>",
            link: "",
            btnText: "",
            img: "img/citas/violencia/3/4.2.Violencia.jpg",
            thumbnail: "img/citas/violencia/3/4.2.Violencia_Thumb.jpg",
          },
        ],
      },
      {
        id: "36",
        image: "img/citas/violencia/4/Violencia_Cita05.jpg",
        bg: "img/citas/violencia/4/Violencia_Cita05_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "José Eustasio Rivera, La vorágine. Una edición cosmográfica, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        comentario:
          "<p>Uno de los momentos más impresionantes de toda la trama de La vorágine es cuando Clemente Silva narra cómo vivió una invasión de hormigas tambochas. Con este nombre se conoce a varios tipos de hormigas venenosas y carnívoras que en ciertos picos de su población se desplazan al tiempo por millones, abriendo vastas avenidas por entre la selva y arrasando con lo que encuentren a su paso. </p><p>Rivera aprovechó la narración de este fenómeno para describir la violencia de la naturaleza. Una que ya no es la de la venganza de la selva contra quien la ultraja, sino que es propia, inevitable, porque es la fuerza de la muerte que periódicamente invade y acaba con el mundo de la vida. Y con esto, Rivera produjo una poderosísima metáfora de todo sobre lo que versaba su novela: migraciones aniquiladoras de miles de seres que acaban con lo que tienen por delante, como en cualquier fiebre extractiva, pero también de cómo estas implican el vertimiento de las fuerzas de la muerte sobre el mundo de la vida, que no es sino otra forma como podemos llamar al terror. </p>",
        text: "<p>Desde allí miraron pasar la primera ronda. A semejanza de las cenizas que a lo lejos lanzan las quemas, caían sobre la charca fugitivas tribus de cucarachas y coleópteros, mientras que las márgenes se poblaban de arácnidos y reptiles, obligando a los hombres a sacudir las aguas mefíticas para que no avanzaran en ellas. Un temblor continuo agitaba el suelo, cual si las hojarascas hirvieran solas. Por debajo de troncos y raíces avanzaba el tumulto de invasión, a tiempo que los árboles se cubrían de una mancha negra, como cáscara movediza, que iba ascendiendo implacablemente a afligir las ramas, a saquear los nidos, a colarse en los agujeros. Alguna comadreja desorbitada, algún lagarto moroso, alguna rata recién parida eran ansiadas presas de aquel ejército, que las descarnaba, entre chillidos, con una presteza de ácidos disolventes (pp. 160-161). </p>",
        desc: "Relato de Clemente Silva sobre la invasión de tambochas en la selva.",
        galeria: [
          {
            name: "5.1. La hoya del Amazonas. Daniel Ortega Ricaurte",
            type: "jpg",
            ficha: [
              "La hoya del Amazonas (t. 1, 2.ª ed.) ",
              "Daniel Ortega Ricaurte ",
              "Bogotá: Editorial Centro, 1940 ",
              "Biblioteca Luis Ángel Arango, Colección Especial Remota, 918.1 O77h2 ",
            ],
            text: "<p>La vorágine se convirtió rápidamente en una fuente de información privilegiada para múltiples tipos de obras, como las de historia y diplomacia fronterizas, o de historia militar (aparece invocada en muchas memorias sobre el conflicto colombo-peruano de 1932 a 1934). Fue constantemente referida en la prensa sindical obrera como testimonio de la explotación de los trabajadores e, incluso, incidió en trabajos de divulgación científica como La hoya del Amazonas, del ingeniero y científico Daniel Ortega Ricaurte (1884-1960), quien conoció personalmente a José Eustasio Rivera en 1922, cuando hicieron parte de la Comisión de Asuntos Limítrofes con Venezuela. </p><p>En este fragmento de su gran obra (publicada originalmente por entregas, entre 1935 y 1941) se hace evidente cómo se replica la figura de las tambochas con visos terroríficos semejantes a los de La vorágine. Sin embargo, en la novela las tambochas no solo son un fenómeno natural; son otra versión del drama que una y otra vez define la trama, que es el de hordas de seres que destruyen la selva y no dejan en su camino “más que ruido y desolación”. </p><p>En algunas épocas del año, especialmente en los inviernos, emigra acosada por el agua: entonces es el pavor del colono, del cauchero y aun del salvaje. Marcha en billones como un ejército en fuga, desorientado, perdido, vuelve a la derecha e izquierda, corta caminos o los recorre. Al aproximarse a las habitaciones se oye, rompiendo el silencio augusto de la selva, su ruido en las hojas, en el suelo y en los barrancos; los animales se alarman, las dantas y los tigres, los venados y las serpientes, los zainos y huanganas corren espantados; los borugos se esconden en sus madrigueras, las aves vuelan en busca de pozos inaccesibles, y la fauna toda, asustada, dominada por terror pánico, huye, y a medida que el chillido áspero, arrastrado, dantesco, crece y resuena, corre alucinada y despavorida. Las cucarachas, las ratas, los gatos y los perros, los murciélagos y los mismos moradores desertan de las casas; las madres conducen a los hijos; la desbandada es rápida y completa [...]. </p><p>Estas hormigas son las mismas tambochas que describe Rivera con vivo colorido en las hermosas páginas de La vorágine (Tomo I, pp. 395-396). </p>",
            link: "",
            btnText: "",
            img: "img/citas/violencia/4/5.1.Violencia.jpg",
            thumbnail: "img/citas/violencia/4/5.1.Violencia_Thumb.jpg",
          },
          {
            name: "5.2. Au cœur de l’Amérique vierge. Julio Quiñones",
            type: "jpg",
            ficha: [
              "Au cœur de l’Amérique vierge ",
              "Julio Quiñones ",
              "París: J. Peyronnet et Cie. Éditeurs, 1924 ",
              "Banco de la República, Centro Cultural Leopoldo López Álvarez, Pasto, Sala General, Co863.5 Q84c2 ",
            ],
            text: "<p>En 1924, el mismo año en que apareció en Bogotá La vorágine, fue publicada en París, en francés, la novela En el corazón de la América virgen del pastuso Julio Quiñones. Este escritor conoció de primera mano el Putumayo de la Casa Arana, primero como miembro de una expedición militar colombiana en esa región y luego como cauchero. En ese oficio se desempeñó entre 1907 y 1911, y en documentos judiciales, de hecho, se le invoca como testigo de algunas atrocidades perpetradas por agentes de Arana. </p><p>No obstante, en su novela ―una interesante historia sobre la vida indígena que demuestra que Quiñones conocía el idioma huitoto― solo se intuye la presencia destructora de los blancos. O, mejor, aparece en forma de metáforas, en particular como la amenaza del gran tigre destructor. Las tambochas, en cambio, no representan para los indígenas el mismo terror apocalíptico que para los blancos. Aunque temidas y respetadas, hacen parte de los ritmos y ciclos del mundo, y cuentan con atributos propios de los seres culturales. </p><p>En el corazón de la América virgen fue traducida al español por el propio Quiñones y en esta versión aparece el siguiente fragmento sobre las tambochas: </p><p>Atraviesan el bosque constantemente, sobre todo en los bajos, en manchas compactas hasta de tres metros de ancho por más de cien metros de largo, destruyendo todo a su paso [...]. Sin embargo, estas hormigas no atacan espontáneamente, y nunca se desvían de la dirección que llevan. Desde lejos se oye como un zumbido sordo cuando se acercan y todos los animales huyen en tropel [...]. Los indígenas aseguran que las hormigas y falenas se comunican por medio de la telepatía, y han constatado que cuando las avanzadas del cuerpo de las hormigas exploradoras encuentran frutas o animales muertos a grandes distancias del hormiguero, todas las demás hormigas que se quedan trabajando en sus viviendas, salen precipitadamente y acuden al lugar del hallazgo (traducción de Julio Quiñones, p. 122). </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4333/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/violencia/4/5.2.Violencia.jpg",
            thumbnail: "img/citas/violencia/4/5.2.Violencia_Thumb.jpg",
          },
        ],
      },
    ],
  },
];

let verticesTxtReal = [
  "instrucciones",
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
  const duracionGiro = 8000; // Duración del giro en milisegundos

  function seleccionarTarjetaAleatoria() {
    if (animating) return; // Evita múltiples clics durante la animación
    animating = true;

    // Excluye la primera tarjeta (instrucción) y selecciona entre las demás
    // Excluye la primera tarjeta (instrucción) y selecciona entre las demás
    const tarjetaSeleccionada = getSecureRandomNumber(1, totalTarjetas - 1);

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
          ".selectedLink"
        ).href = `vertice.html?id=${verticesTxtReal[tarjetaSeleccionada]}`;
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
    const introLimpio = limpiarHTMLConSaltosDeLinea(infoVertice.intro);
    const finalLimpio = limpiarHTMLConSaltosDeLinea(infoVertice.textoFinal);
    document.querySelector(".vertice .intro h3").innerHTML = introLimpio;
    document.querySelector(".vertice .footerText").innerHTML = finalLimpio;
    document.querySelector(".vertice .grid-container").innerHTML = "";
    infoVertice.citas.forEach((cita, index) => {
      let text = cita.text;
      // Verifica si el texto es más largo que el límite
      if (text.length > maxChars) {
        text = text.slice(0, maxChars) + "...";
      }

      const textoLimpio = limpiarHTMLConSaltosDeLinea(text);

      let template = `<a href="cita.html?id=${idVertice}&cita=${index}" class="grid-item"><img src="${cita.image}" alt="${textoLimpio}"><p>${textoLimpio}</p></a>`;
      document.querySelector(".vertice .grid-container").innerHTML += template;
    });
  }
  if (document.querySelector(".title")) {
    if (infoVertice) {
      document.querySelector(".title").innerHTML = infoVertice.title;
    }
  }
  if (document.querySelector(".subtitle")) {
    if (infoVertice.minititle == "los espejismos") {
      document.querySelector(
        ".subtitle"
      ).innerHTML = `<h2>¿CÓMO SE LEEN HOY</h2><h2>${infoVertice.minititle.toUpperCase()}</h2><h2>EN LA VORÁGINE?</h2>`;
    } else {
      document.querySelector(
        ".subtitle"
      ).innerHTML = `<h2>¿CÓMO SE LEE HOY</h2><h2>${infoVertice.minititle.toUpperCase()}</h2><h2>EN LA VORÁGINE?</h2>`;
    }
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

      document.querySelector(
        ".citaTxt a"
      ).href = `lanovela.html#${citaActual.id}`;
      document.querySelector(
        "a.smallLink"
      ).href = `lanovela.html#${citaActual.id}`;
      document.querySelector(".citaTxt a").innerHTML = citaActual.text;
      document.querySelector(".descCita").innerHTML = citaActual.desc;
      document.querySelector("p.copy").innerHTML = citaActual.refBibliografica;
      document.querySelector(".comentario").innerHTML = citaActual.comentario;

      document.querySelector(".bgimage").style.opacity = "0";
      document.querySelector(".bgimage").src = citaActual.bg;
      setTimeout(() => {
        document.querySelector(".bgimage").style.opacity = "1";
      }, 200);
      document.querySelector(".galeria").innerHTML = "";
      let templates = []; // Array para almacenar los templates en orden

      citaActual.galeria.forEach((item, index) => {
        let { name, type, ficha, text, link, btnText, img, thumbnail } = item;

        // Uso de la función
        checkImageOrientation(img, function () {
          // Aquí puedes continuar con el resto del código, utilizando el valor de isVertical
          // Generar el contenido dinámico para el figcaption
          let contenidoFicha = ficha
            .map((item, index) => {
              return index === 0
                ? `<p><strong>${item}</strong></p>`
                : `<p>${item}</p>`;
            })
            .join("");
          let template = `<button type="button" popovertarget="galitem-${index}"><figure><img  src="${thumbnail}" alt="${name}"><figcaption>${contenidoFicha}</figcaption></figure>
          </button><div popover="" id="galitem-${index}" class="popover"><div class="content"><button class="close" popovertarget="galitem-${index}" popovertargetaction="toggle" type="button"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_101_2)"><path d="M20.2114 16.4061L14.3046 10.4993L20.2114 4.59246C21.2622 3.5417 21.2622 1.83796 20.2114 0.787191C19.1607 -0.263577 17.4569 -0.263577 16.4061 0.787191L10.4993 6.694L4.59317 0.78783C3.5424 -0.262937 1.83866 -0.262937 0.787893 0.78783C-0.262875 1.8386 -0.262875 3.54234 0.787893 4.5931L6.6947 10.4999L0.787893 16.4061C-0.262875 17.4569 -0.262875 19.1606 0.787893 20.2114C1.83866 21.2621 3.5424 21.2621 4.59317 20.2114L10.5 14.3045L16.4068 20.2114C17.4576 21.2621 19.1613 21.2621 20.2121 20.2114C21.2628 19.1606 21.2628 17.4569 20.2121 16.4061H20.2114Z" fill="#665343"></path></g><defs><clipPath id="clip0_101_2"><rect width="21" height="21" fill="white"></rect></clipPath></defs></svg></button><div class="content-header">${
            link != ""
              ? `<a href="${link}" target="_blank" class="complete"><svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.37 7.2H1.62V33.08H23.37V7.2Z" fill="white"></path><path d="M29.15 27.65H7.4V1.78H21.25L29.15 9.7V27.65Z" fill="white"></path><path d="M30.45 8.95L22.09 0.45C21.81 0.16 21.42 0 21.02 0H7.17C6.34 0 5.67 0.67 5.67 1.5V5.67H1.5C0.67 5.67 0 6.34 0 7.17V33.6C0 34.43 0.67 35.1 1.5 35.1H23.71C24.54 35.1 25.21 34.43 25.21 33.6V29.43H29.38C30.21 29.43 30.88 28.76 30.88 27.93V10C30.88 9.61 30.73 9.23 30.45 8.95ZM22.52 5.17L25.8 8.51H22.52V5.17ZM22.21 32.1H3V8.67H5.67V27.93C5.67 28.76 6.34 29.43 7.17 29.43H22.21V32.1ZM8.67 26.43V3H19.52V10C19.52 10.83 20.19 11.5 21.02 11.5H27.88V26.43H8.67Z" fill="#665344"></path><path d="M23.85 14.72H12.69C11.86 14.72 11.19 15.39 11.19 16.22C11.19 17.05 11.86 17.72 12.69 17.72H23.85C24.68 17.72 25.35 17.05 25.35 16.22C25.35 15.39 24.68 14.72 23.85 14.72Z" fill="#665344"></path><path d="M23.85 20.39H12.69C11.86 20.39 11.19 21.06 11.19 21.89C11.19 22.72 11.86 23.39 12.69 23.39H23.85C24.68 23.39 25.35 22.72 25.35 21.89C25.35 21.06 24.68 20.39 23.85 20.39Z" fill="#665344"></path></svg>PARA VER EL RECURSO COMPLETO, HAGA CLIC AQUÍ.</a>`
              : ``
          }</div>
  <div class="content-body"><img src="${img}" alt="image"><div class="txt"><div class="nomargin">${contenidoFicha}</div>${text}</div></div></div></div>`;
          // Guardar el template en el array en la posición correcta
          templates[index] = template;
          // Verificar si todas las imágenes han sido procesadas
          if (templates.filter(Boolean).length === citaActual.galeria.length) {
            // Si todos los templates están listos, renderizarlos en la interfaz en orden
            document.querySelector(".galeria").innerHTML = templates.join("");
          }
        });
      });
    }

    // Función para mostrar/ocultar botones
    function actualizarBotones() {
      if (currentIndex == 0) {
        prevButton.style.display = "none"; // Ocultar botón "Anterior" en el primer elemento
      } else {
        prevButton.style.display = "block"; // Mostrar botón "Anterior" si no es el primer elemento
      }

      if (currentIndex == citas.length - 1) {
        nextButton.style.display = "none"; // Ocultar botón "Siguiente" en el último elemento
      } else {
        nextButton.style.display = "block"; // Mostrar botón "Siguiente" si no es el último elemento
      }
    }

    // Función para manejar clic en el botón anterior
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        mostrarCita(currentIndex);
        actualizarBotones();
      }
    });

    // Función para manejar clic en el botón siguiente
    nextButton.addEventListener("click", () => {
      if (currentIndex < citas.length - 1) {
        currentIndex++;
        mostrarCita(currentIndex);
        actualizarBotones();
      }
    });

    // Inicializar mostrando la primera cita
    mostrarCita(currentIndex);
    actualizarBotones();
  }
  setTimeout(() => {
    fadeOut(preloader);
    if (idVertice) {
      rotarAguja(idVertice);
    } else {
      // Generar un índice aleatorio
      // Selecciona un índice aleatorio seguro
      let randomIndex = getSecureRandomNumber(0, verticesTxtReal.length - 1);

      // Obtener el elemento en la posición aleatoria
      let randomElement = verticesTxtReal[randomIndex];
      rotarAguja(randomElement);
    }
  }, 3000);
});
