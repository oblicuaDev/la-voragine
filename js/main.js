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
      "<p>Dos fuerzas mueven la trama de <i>La vorágine</i>: la codicia y el azar. La codicia es subjetiva y social. El azar es, en la lógica de la frontera, una fuerza objetiva e inescrutable que determina todo. Toda economía extractiva ―como lo fue la del caucho― parece, conforme a ese pensamiento, dispuesta por el azar. Un día aparece, un día se va “sin dejar más que ruido y desolación” (Rivera, 2023, p. 13). Los juegos de azar y sentir que la vida es una apuesta son formas de ganarse el favor de la suerte. Esa es la vida de Arturo Cova y de casi todos los personajes de la novela: se juegan la vida. Pero también gracias al azar, José Eustasio Rivera recupera la denuncia de la explotación humana y de la naturaleza que hace Cova. </p>",
    textoFinal:
      "Esa es la vida de Arturo Cova y de casi todos los personajes de la novela. En uno u otro momento se juegan la vida y los caminos siempre conducen a la violencia. Pero también gracias al azar, o casi, José Eustasio Rivera recupera el relato de Cova para hacer una denuncia de la explotación humana y de la naturaleza que se vivía en la frontera.",
    citas: [
      {
        id: "01",
        image: "img/citas/azar/cita_01.jpg",
        bg: "img/citas/azar/0/Azar_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        comentario:
          "<p>José Eustasio Rivera fue osado al abrir su novela con este fragmento de una carta de Arturo Cova, el protagonista, ya que dispone la clave con la que ha de leerse <i>La vorágine</i>: se trata de un texto marcado por la fatalidad, no solo la de Cova, sino la de todo habitante de frontera. Son caucheros, quineros, raspachines, mineros, guaqueros o jornaleros, seres en zonas de economías extractivas, guiados por el viento, que es otro nombre para la fortuna. No en vano el nombre de Alicia evoca los alisios, vientos que soplan entre las áreas subtropicales y ecuatoriales. También se ha dicho que en este contexto Alicia pudiera significar “aliciente”.</p> <p>Este epígrafe no es solo el manifiesto de la vida de Arturo Cova, sino de toda una condición social de los habitantes de la frontera, en la que se lamenta el pasado perdido y se llora por la fortuna esquiva. Condición que inevitablemente conduce a la violencia; pues ese desarraigo fatal no deja a su paso <i>más que ruido y desolación.</i></p>",
        text: "<p>Los que un tiempo creyeron que mi inteligencia irradiaría extraordinariamente, cual una aureola de mi juventud; los que se olvidaron de mí apenas mi planta descendió al infortunio; los que al recordarme alguna vez piensen en mi fracaso y se pregunten por qué no fui lo que pude haber sido, sepan que el destino implacable me desarraigó de la prosperidad incipiente y me lanzó a las pampas, para que ambulara vagabundo, como los vientos, y me extinguiera como ellos sin dejar más que ruido y desolación (p. 13).</p>",
        desc: "Fragmento de la carta de Arturo Cova.",
        galeria: [
          {
            name: "1.1. Manuscrito de La vorágine - f.1r. José Eustasio Rivera",
            type: "jpg",
            ficha: [
              "<p>Manuscrito de <i>La vorágine</i></p>",
              "José Eustasio Rivera",
              "1922-1924",
              "Biblioteca Nacional de Colombia, Fondo Antiguo, RM617",
            ],
            text: "<p>La primera página del manuscrito de <i>La vorágine</i> muestra varios elementos interesantes: la firma de José Eustasio Rivera, el establecer que es una novela (que ya por entonces tenía la connotación de ser un relato de hechos imaginados, aunque desde el inicio su autor supiera que jugaría con los límites entre la verdad y la ficción) y un profundo tachón detrás del que, hasta ahora, no sabemos qué ocultó el escritor con ahínco. </p><p>Dentro de ese juego de realidad-ficción y, posiblemente, con la claridad de dar una forma circular en la novela, Rivera tiene claro que pondrá como epígrafe el fragmento de una carta enviada por su personaje central, Arturo Cova, al final de la novela. En esta, Cova denuncia al cónsul colombiano en Manaos las atrocidades que vivió y vio durante su recorrido por la Orinoquía y la Amazonía. </p>",
            link: "https://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/search/asset/268942",
            btnText:
              "Abrir material en el catálogo de la BN a través del vínculo",
            img: "img/citas/azar/0/1.1.Azar.jpg",
            thumbnail: "img/citas/azar/0/1.1.Azar_Thumb.jpg",
          },
          {
            name: "1.2. Arturo Cova en las barracas del Guaracú. José Eustasio Rivera",
            type: "jpg",
            ficha: [
              "<p><i>Arturo Cova en las barracas del Guaracú (fotografía tomada por la madona Zoraida Ayram)</i></p>",
              "Foto anónima",
              "<p>En José Eustasio Rivera, <i>La vorágine</i>, Bogotá: Cromos, 1924</p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Co863.5 R49v",
            ],
            text: "<p><i>La vorágine</i> fue una de las primeras novelas en servirse de fotografías para dar cuenta de la realidad de las situaciones que narraba o para hacer creer que lo que relataba era real. Pero hay varias incógnitas detrás de este ingenioso recurso. Cuando apareció la novela, algunos pensaron que Arturo Cova no era otro que el mismísimo José Eustasio Rivera, razón por la que el autor eliminó las fotos a partir de la quinta edición. Aun así, no es claro si la fotografía <i>Arturo Cova en las barracas de Guaracú</i> es un fotomontaje en el cual Rivera sobrepuso su rostro al de alguien más. Un censo cauchero levantado en 1912 por el venezolano Samuel Darío Maldonado muestra que sí hubo un Arturo Cova histórico, de carne y hueso, que vivió por la misma época y región en la que transcurre <i>La vorágine</i>. ¿Sería acaso, originalmente, el retrato de Arturo Cova con la cabeza superpuesta de Rivera?</p>",
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
          "<p>Azar, pasión, corazón y violencia: en esta misteriosa y contundente frase puede leerse los temas fundamentales de <i>La vorágine</i> y de la historia trágica de Colombia. Un país hecho en una buena medida por miles de personas que han buscado hacer “patria” o riqueza en las fronteras, en detrimento de sus habitantes indígenas y su equilibrio, siempre movidos por el azar. Yendo a donde el viento o la fortuna los lleven, como en la emblemática rueda de las cartas del tarot o como en un remolino caprichoso que siempre devora.</p><p>Un país que se consagró solemnemente al Sagrado Corazón de Jesús en 1902, al cabo de la más sanguinaria guerra civil, y luego lo invocó en la posterior violencia interpartidista, que muchas veces ha demostrado amalgamar pasión religiosa con pasión amorosa, de formas acérrimas y violentas. Y es que la violencia está en el corazón de la trama, es el ojo de la vorágine. La violencia es la que siempre media las relaciones entre los personajes, la violencia contra las mujeres, el exterminio de los indios, la esclavización, las relaciones del endeude y, claro, la violencia contra la naturaleza: el ganado, las garzas, los árboles y la selva. </p>",
        image: "img/citas/azar/cita_02.jpg",
        bg: "img/citas/azar/1/Azar_Cita02_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        text: "<p>Antes que me hubiera apasionado por mujer alguna, jugué mi corazón al azar y me lo ganó la Violencia (p. 15).</p>",
        desc: "Palabras con las que Arturo Cova da inicio a su relato.",
        galeria: [
          {
            name: "2.1. Sagrado Corazón de Jesús. Anónimo",
            type: "jpg",
            ficha: [
              "<p><i>Sagrado Corazón de Jesús</i></p>",
              "Anónimo",
              "<p>En <i>Nuevo manualito para los devotos del Sagrado Corazón de Jesús</i>, Bogotá: Imprenta de Francisco Torres Amaya, 1880 </p>",
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
              "<p><i>Nuevo manualito para los devotos del Sagrado Corazón de Jesús</i></p>",
              "Anónimo",
              "Bogotá: Imprenta de Francisco Torres Amaya, 1880",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 248.143 N83j",
            ],
            text: "<p>Si bien el azar es central en <i>La vorágine</i>, la violencia no es azarosa. Rivera denuncia sus actores, causas y consecuencias. Aunque la causa principal de la violencia es la codicia, ejercida por beneficios económicos, la novela también aborda otros tipos de violencia. </p><p>Aunque Rivera militaba en el Partido Conservador, abogó por la tolerancia política y religiosa. La violencia no es cuestión del azar o de la Sagrada Providencia, es decisión de quien la ejerce o la promueve. </p>",
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
          "<p>Se ha dicho en varias ocasiones que el verdadero protagonista de <i>La vorágine</i> es Clemente Silva, pues es el único que logra salir de la selva para entregarle el relato de Arturo Cova al cónsul colombiano en Manaos. </p><p>Su nombre, además, puede interpretarse como <i>selva clemente</i>. No obstante, esa capacidad de orientación en la espesura verde y de entendimiento con la selva la ha logrado a un precio muy alto: el sacrificio de su hijo Luciano y el fundirse con el entorno en una sola masa orgánica, en la que la selva lo va devorando de a poco. </p><p>Desde que salió de Pasto en busca de su hijo, que huyó de casa ante una afrenta al honor familiar, Clemente no ha conocido sino desventuras y dolores físicos. De cierta manera, evoca a un ermitaño místico de la antigüedad, no solo por su figura, sino por su enorme capacidad de sufrimiento en busca de redención. Pero, además, como personaje inaugura un tipo social muy de nuestra época, tan fundamental como trágico: el buscador de secuestrados o desaparecidos. </p>",
        image: "img/citas/azar/cita_03.jpg",
        bg: "img/citas/azar/2/Azar_Cita03_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        text: "<p>Este mísero anciano Clemente Silva siempre ha tenido el monopolio de la desventura. Desde el día que yendo de Iquitos para Manaos oyó noticias del hijo muerto, cifró su esperanza en prolongar la esclavitud. Quería ser cauchero unos años más, hasta que la tierra le permitiera exhumar los restos. La selva, indirectamente, lo reclamaba como prófugo, y era el espectro de Lucianito el que le pedía volver atrás (p. 153).</p>",
        refBibliografica:
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        desc: "Arturo Cova sobre Clemente Silva al encontrarse con el río Isana.",
        galeria: [
          {
            name: "3.1. El cauchero Clemente Silva. José Eustasio Rivera",
            type: "jpg",
            ficha: [
              "<p><i>El cauchero Clemente Silva</i></p>",
              "Foto anónima",
              "<p>En José Eustasio Rivera, <i>La vorágine</i>, Bogotá: Cromos, 1924</p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Co863.5 R49v1",
            ],
            text: "<p>Tan importante resultaba la presencia de Clemente Silva en <i>La vorágine</i>, que Rivera quiso que fuera el otro personaje de la trama que apareciera en una fotografía. Se trata de una imagen poderosa, en la que se demuestra la pericia del viejo cauchero que se funde con el entorno en una sola trama tupida y vegetal, a medio camino entre cielo e infierno. </p><p>El experto brasileño Leopoldo Bernucci ha demostrado que originalmente esta fotografía fue una postal que circuló en Manaos hacia 1904-1905, y que llamó la atención de José Eustasio Rivera. Pero como sabemos que al igual que hubo un Arturo Cova “real”, hubo un Clemente Silva que existió históricamente hacia esa misma época en la misma región, cabe en todo caso preguntarse si quien allí aparece no fuera el mismo sujeto. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4309/rec/5",
            btnText: "Para ver el libro completo, haga clic aquí",
            img: "img/citas/azar/2/3.1.Azar.jpg",
            thumbnail: "img/citas/azar/2/3.1.Azar_Thumb.jpg",
          },
          {
            name: "3.2. Retrato del Profesor Moncayo",
            type: "jpg",
            ficha: [
              "Retrato del Profesor Moncayo",
              "@Revista Semana/ GUILLERMO TORRES",
            ],
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
          "<p>Ramiro Estévanez representa otro tipo social de <i>La vorágine</i>. Arturo Cova lo encuentra bajo el alias de Esteban Ramírez en las barracas del Váquiro (un jefe cauchero tan brutal como estúpido) y lo identifica de inmediato, dado que habían hecho parte del mismo entorno en el pasado. </p><p>Como mucha gente de antes y de ahora, había huido hacia un frente de extracción o colonización para reinventar su historia. En su caso, lo impulsó el despecho. Siendo estudiante y cosmopolita, pero de pocos medios, asumió otro nombre y otro oficio. Presenció la masacre de San Fernando de Atabapo contra el gobernador Roberto Pulido, el 8 de mayo de 1913, que llevó al coronel Tomás Funes a volverse el hombre más fuerte y temible de la región. </p><p>Por haber sido testigo y hasta cierto punto cómplice, Ramiro cree que el destino lo castiga con la ceguera y que nunca regresará a casa porque la fortuna no lo ha favorecido. Por ello, antes que la redención, prefiere el olvido. No obstante, Estévanez es quien impulsa a Cova a escribir la carta de denuncia para el cónsul de Colombia en Manaos, con la esperanza de que el Estado detenga las atrocidades. </p>",
        image: "img/citas/azar/cita_04.jpg",
        bg: "img/citas/azar/3/Azar_Cita04_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        text: "<p>¿Volver yo a las ciudades, desmedrado, pobre y enfermo? El que dejó sus lares en busca de fortuna no debe tornar pidiendo limosna. Por aquí siquiera nadie conoce mis vicisitudes, y la miseria toma aspectos de voluntaria renunciación. Vete, la vida nos amasó con sustancias contradictorias. No podemos seguir el mismo camino. Si algún día ves a mis padres, cúrate de decirles dónde estoy. ¡Caiga el olvido sobre el que nunca puede olvidar! (p. 203).</p>",
        desc: "Ramiro Estévanez respondiendo a Arturo Cova sobre las posibilidades de fugarse de las barracas del Váquiro.",
        galeria: [
          {
            name: "4.1. Horacio Quiroga. Anónimo",
            type: "jpg",
            ficha: [
              "<p><i>Horacio Quiroga</i></p>",
              "Anónimo",
              "s. f.",
              "Biblioteca Nacional de Uruguay, Colección Aníbal Barrios Pintos",
            ],
            text: "<p>En esta fotografía se ve al escritor uruguayo Horacio Quiroga (1878-1937), autor de relatos terroríficos y sobrenaturales, y una suerte de “alma gemela” literaria de José Eustasio Rivera, aunque solo se conocieron tardíamente y nunca en persona. </p><p>La historia de Ramiro Estévanez se asemeja en muchos aspectos a la de varios personajes creados por Quiroga, y hasta cierto punto, al mismo escritor uruguayo, quien se fue a vivir a la selva de Misiones, en parte por una decepción amorosa, y la describió con maestría en muchos de sus textos. Aunque Rivera no se basó literalmente en historia alguna de Quiroga, el uruguayo celebró la publicación de <i>La vorágine</i>. Ambos autores son un referente de cómo se ha narrado la selva desde América Latina. </p>",
            link: "",
            btnText: "",
            img: "img/citas/azar/3/4.1.Azar.jpg",
            thumbnail: "img/citas/azar/3/4.1.Azar_Thumb.jpg",
          },
          {
            name: "4.2. Carta_HoracioQuiroga_v2",
            type: "jpg",
            ficha: [
              "Carta de Horacio Quiroga a José Eustasio Rivera, 4 de mayo de 1927",
              "Mottif.",
            ],
            text: "<p>Tras la muerte de José Eustasio Rivera, el 1.º de diciembre de 1928, <i>El Espectador</i>, en su <i>Suplemento Literario Ilustrado</i>, publicó la carta que Horacio Quiroga le envío a José Eustasio Rivera el 4 de mayo de 1927. En esta, Quiroga reconoce la riqueza literaria de <i>La vorágine</i> y ve al escritor colombiano como un “compañero” en los modos y temáticas que los hermanan.</p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        text: "<p>En estas fundaciones me dejó botada el coronel Infante, guerriyero venezolano que tomó a Caicara. Ayí me rifaron al tresiyo, como simple cosa, y fui ganada por un tal Puentes, pero Infante me descontó al liquidar el juego. Después lo derrotaron, tuvo que asilarse en Colombia y me abandonó por aquí (p. 58).</p>",
        desc: "Testimonio que Clarita dado a Arturo Cova luego de ser herido por una bala.",
        galeria: [
          {
            name: "5.2. Consumatum est. José María Gómez Castro",
            type: "jpg",
            ficha: [
              "<p><i>Consumatum est</i></p>",
              "José María Gómez Castro",
              "ca. 1927",
              "Banco de la República, Colección de Arte, AP1512",
            ],
            text: "<p><i>Consumatum est</i> es una ilustración en la que el artista José María Gómez Castro, conocido como Pepe Gómez, hace su propia versión del escudo de Colombia. La imagen hace referencia a esas otras patrias de los territorios basados en economías extractivistas donde, según la ilustración de Gómez, el dinero, el juego, la violencia y la muerte están en el centro. La expresión latina <i>Consummatum est</i> significa “se acabó todo” y se emplea a propósito de una tragedia. Esta imagen retrata la misma realidad de <i>La vorágine</i>, pero en el marco del <i>boom</i> de la exploración petrolera y no del caucho. </p>",
            link: "https://colecciones.banrepcultural.org/document/coleccion/63a069015d96b8790f25b6f3",
            btnText: "Haga click para acceder al recurso completo",
            img: "img/citas/azar/4/5.2.Azar.jpg",
            thumbnail: "img/citas/azar/4/5.2.Azar_Thumb.jpg",
          },
          {
            name: "5.1. Teoría del juego del tresillo (rocambor) y del chipolo",
            type: "jpg",
            ficha: [
              "<p><i>Teoría del juego del tresillo (rocambor) y del chipolo</i></p>",
              "Rodolfo Velasco",
              "Cali: Imprenta H. A. del Pino, 1892",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Misceláneas 208",
            ],
            text: "<p>Varios juegos de cartas están a medio camino entre el azar y la habilidad. Si bien las cartas son dadas por la suerte, el jugador las usará a partir de su conocimiento del juego y de sus oponentes. No es raro que este tipo de juegos sean metáforas del destino humano: “cada quién juega con la mano que le toca”, reza el dicho. </p><p>En <i>Teoría del tresillo</i>, un compilado de reglas sobre el popular juego de cartas de finales del siglo XIX, Rodolfo Velasco advierte que es entretenido, siempre y cuando lo jueguen “personas decentes” que no dejen “anarquizar el juego” al incumplir las reglas. La esencia verdadera de todo juego de azar es que cualquiera, incluso el mejor jugador, puede perder si la suerte no lo acompaña. </p><p>En <i>La vorágine</i>, cuando los juegos de azar aparecen, se apuesta todo: el dinero y la vida. Por ello, alguien siempre busca ganar al azar mediante la trampa: la habilidad real está en quien puede pasar por encima de las reglas sin ser descubierto. La destreza no está en el dominio del juego, sino de la trampa. No obstante, al final y bajo esta dinámica, todos pierden.</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4314/rec/1",
            btnText: "Para ver el libro completo, haga clic aquí",
            img: "img/citas/azar/4/5.1.Azar.jpg",
            thumbnail: "img/citas/azar/4/5.1.Azar_Thumb.jpg",
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
      "<p>La palabra ‘espejismo’ se define como una ilusión óptica, pero al referir al espejo recuerda que lo que este nos muestra es una ilusión. El espejo nos refleja más alargados o achatados, más gordos o flacos, más bellos o feos. De ahí que los gabinetes de espejos fueran una atracción en ferias y circos de antaño. Era divertido ver reflejada una imagen desconocida de sí mismo. ¿Quién no deposita sus ilusiones en el espejo, lo que quiere ser o como quiere verse para agradar o aterrar? <i>La vorágine </i>es también una galería de ilusiones y espejismos ópticos, pero también mentales, sentimentales, ideológicos y políticos. Las naciones y los valores nacionales se hacen ilusorios en las fronteras; el progreso, la conquista, la fama y la riqueza son hechos artificiosos. “¡Sueños irrealizados, triunfos perdidos!”, exclama el cauchero en su lamento.  </p>",
    textoFinal:
      "<p><i>La vorágine</i> es también una galería de ilusiones y espejismos ópticos, ciertamente, pero también mentales, sentimentales, ideológicos y políticos. Las naciones y los valores nacionales se hacen ilusorios en las fronteras; el progreso, la conquista, la fama y la riqueza son hechos artificiosos. “¡Sueños irrealizados, triunfos perdidos!”, exclama el cauchero en su lamento, que es también el de Arturo Cova. Son sueños que, además, terminan en pesadillas. </p>",
    citas: [
      {
        id: "04",
        image: "img/citas/espejismos/cita_01.jpg",
        bg: "img/citas/espejismos/0/Espejismos_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        comentario:
          "<p>Desde que aparece en Cáqueza, el Pipa es un vendedor de ilusiones en <i>La vorágine</i>. Cautivó la curiosidad y la ilusión de Arturo Cova y, sobre todo, de Alicia con palabras. El Casanare hacia el que ella huía, y que seguramente imaginaba como una difusa provincia en un mapa, de pronto se mostraba como un lugar que al tiempo sonaba temible y propicio para la aventura. ¿Creía, como Arturo Cova, que encontraría un refugio y una paz anónima allí? ¿Esperaba retornar a Bogotá al cabo de unos meses? ¿Sintió un súbito impulso por seguir hacia la región amazónica? Las contundentes imágenes dibujadas por el Pipa en un mínimo parlamento la hechizaron como una serpiente. Cova, al menos, lo sintió así, porque inmediatamente le pidió al Pipa que se callara. Como espejismos, el Llano, las caucherías, el Amazonas, el tigre y las culebras se veían al alcance de la mano. </p>",
        text: "<p>―¿Ha vivido usted en Casanare? —le preguntó.</p><p> ―Sí, sumercé, y conozco el Llano y las caucherías del Amazonas. Mucho tigre y mucha culebra he matado con la ayuda de Dios (p. 19).</p>",
        desc: "Diálogo entre Alicia y el Pipa en las cercanías de Villavicencio.",
        galeria: [
          {
            name: "1.1. Sin título. Noé León",
            type: "tif",
            ficha: [
              "<p><i>Sin título</i></p>",
              "Noé León",
              "1971",
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
              "<p><i>Personas alrededor del cadáver de Roa Sierra</i></p>",
              "Sady González",
              "1948",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        comentario:
          "<p>El llano y, por extensión, la frontera se les aparecen muy temprano a Arturo y Alicia como espejismos. Apenas Cova asegura que se están familiarizando con el entorno, la óptica les juega una trampa. Se trata de un “fenómeno de la región” creado por la refracción que ocurre por las altas temperaturas, al igual que en los desiertos. Pero en las palabras de don Rafo hay también una advertencia: la frontera es propensa a generar ilusiones. </p><p>Estas ilusiones son como los calmos venados que pasan frente a los ojos de los viajeros, que la ambición y vanidad de Cova ven como un trofeo de cacería. Parecen alcanzables, pero en realidad se hallan muy lejos, son imposibles. Lo mismo pasará con todos los planes grandiosos de Arturo. Tal y como lo lamenta al inicio de la tercera parte de <i>La vorágine</i>, nunca supo calcular el tiro. La ironía es que quienes sí sabían cómo tratar esos “fenómenos de la región” y procurar su sustento eran las bandas de indígenas. </p>",
        text: "<p>Poco a poco el regocijo de nuestras lenguas fue cediendo al cansancio. Habíamos hecho copiosas preguntas que don Rafo atendía con autoridad de conocedor. Ya sabíamos lo que era una <i>mata</i>, un <i>caño</i>, un <i>zural</i>, y por fin Alicia conoció los venados. Pastaban en un estero hasta media docena, y al ventearnos enderezaron hacia nosotros las orejas esquivas.</p><p>―No gaste usted los tiros de revólver ―ordenó don Rafo―. Aunque vea los bichos cerca, están a quinientos metros. Fenómenos de la región (p. 23).</p>",
        desc: "Memorias de Arturo Cova sobre su encuentro con don Rafo en el Llano",
        galeria: [
          {
            name: "2.1. La antelia en Fute. Lázaro María Girón y Greñas",
            type: "jpg",
            ficha: [
              "<p><i>La antelia en Fute</i></p>",
              "Dibujo de Lázaro María Girón grabado por Greñas",
              "<p>En <i>Papel Periódico Ilustrado</i>, n.º 40, 1883 </p>",
              "Hemeroteca Biblioteca Luis Ángel Arango, 070.9861 P16p2",
            ],
            text: "<p>La época en que José Eustasio Rivera escribió <i>La vorágine</i> está marcada por una idea de nación que había divulgado la Comisión Corográfica entre 1850 y 1862. La Comisión puso de presente cuánto había por descubrir en el país que fuera útil para la producción y cuánto había de asombroso y extraño en la enorme diversidad del territorio colombiano. El científico, pintor, cronista, crítico de arte y viajero Lázaro María Girón hizo parte de la Comisión Corográfica. Publicó sus ilustraciones y análisis sobre los más variados temas en el <i>Papel Periódico Ilustrado</i>, un periódico de enorme influencia para el pensamiento, las artes y la cultura visual de la segunda mitad del siglo XIX en Colombia. </p><p>En el número 40 (mayo de 1883), Girón describió un extraordinario fenómeno: la <i>antelia</i> o <i>espectro de Brocken</i> que presenció en las alturas de la hacienda Fute (entre Soacha, Bojacá y Mosquera, en Cundinamarca), producida por su sombra proyectada sobre una espesa cortina de niebla. Girón infirió que los antiguos habitantes de la sabana de Bogotá, al experimentar el mismo fenómeno, habían creado sus nociones de divinidad. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll26/id/304",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/espejismos/1/2.1.Espejismos.jpg",
            thumbnail: "img/citas/espejismos/1/2.1.Espejismos_Thumb.jpg",
          },
          {
            name: "2.2. Camille Flammarion frente al globo del planeta Marte",
            type: "jpg",
            ficha: [
              "<p><i>Camille Flammarion frente al globo del planeta Marte</i></p>",
              "Anónimo",
              "s. f.",
              "Biblioteca Nacional de Francia, Agencia de Prensa Meurisse, París",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        comentario:
          "<p>Narciso Barrera representa el mismísimo diablo en <i>La vorágine</i>: un ser de perturbadora e impecable blancura en medio de la espesura selvática o de los trabajos del llano, que se dedica a vender ilusiones que se vuelven condenas. No es mucho más y nada indica que tenga mayor capital. Lo único que tiene son palabras melosas y un carisma que fascina y convence a hombres y mujeres sobre paraísos futuros si le siguen hacia el Vichada.</p><p>Las postales que reparte a diestra y siniestra son espejismos. Son fotografías que hacen las veces de dones que embrujan. Quien las recibe, sucumbe al hechizo, pues siembran en ellos la ambición, el deseo y la envidia. Los contaminan. Luego salen a perseguir el espejismo para solo encontrar la muerte en el infierno verde. Como buen Narciso, el mismo Barrera sucumbirá a su propio encantamiento, a su propia vanidad: el espejismo mayúsculo. La muerte lo va a encontrar literalmente viéndose en el espejo. </p>",
        text: "<p>Y con acento cálido refirió que Barrera había venido a llevar gente para las caucherías del Vichada.</p><p>—Es la ocasión de mejorá: dan alimentación y cinco pesos por día. Así se lo he dicho a Franco […]. </p><p>—Barrera es <i>rasgaísimo</i>. Y miren las vistas del <i>fábrico</i> en el Vichada, a onde quere yevarnos. Digan imparcialmente si no son una preciosidá esos edificios y si estas fotografías no son primorosas. Barrera las ha repartío por toas partes. Miren cuántas tengo pegáas en el baúl.</p><p>Eran unas postales de colores. Se veían en ellas, a la orilla montuosa de un río, casas de dos pisos, en cuyos barandales se agrupaba la gente. Lanchas de vapor humeaban en el puertecito (pp. 28-29). </p>",
        desc: "Palabras de Griselda sobre la visita que hizo Barrera a La Maporita.",
        galeria: [
          {
            name: "3.1. Explotación de las salinas. Santa Marta, Colombia",
            type: "jpg",
            ficha: [
              "<p><i>Explotación de las salinas. Santa Marta, Colombia.</i></p>",
              "Anónimo",
              "s. f.",
              "En Colección de tarjetas postales de Colombia, vol. 6, 1903 - 1925",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, TP0204",
            ],
            text: "<p>Las fotos de Clemente Silva y de un cauchero anónimo que acompañaron la primera edición de <i>La vorágine</i> provenían de postales y fueron incluidas en varias ediciones de la novela para enganchar al lector. </p><p><i>La vorágine</i> da cuenta de una época en la que convergieron la fotografía y los correos. Miles de fotografías de entre 1900 y 1930 se imprimieron como postales con el fin de circular por el mundo y seducir, maravillar. El mercado de las postales era enorme y generaba algo parecido a una red social de nuestros tiempos. Valiéndose de imágenes de lugares que estimulaban la curiosidad y el deseo por viajar, las postales surtían la ilusión de estar allí, en ese lugar y con esas personas. Esta circulación era posible gracias a la cada vez más rápida industria postal, movida por trenes, barcos, aviones y carros, todos vehículos que requerían caucho. </p>",
            link: "",
            btnText: "",
            img: "img/citas/espejismos/2/3.1.Espejismos.jpg",
            thumbnail: "img/citas/espejismos/2/3.1.Espejismos_Thumb.jpg",
          },
          {
            name: "3.2. Rumbo a los yacimientos de oro de Klondike. Keystone",
            type: "tif",
            ficha: [
              "<p><i>Rumbo a los yacimientos de oro de Klondike, Chilcoot Pass, Alaska</i></p>",
              "Keystone View Company",
              "1898",
              "Biblioteca Pública de Nueva York",
            ],
            text: "<p>Por la misma época en la que Rivera publicó su novela, el escritor estadounidense Jack London (1876-1916) buscó fortuna en el Klondike o Yukón canadiense. Dejó varias narraciones que dialogan con <i>La vorágine</i>, siendo la más famosa <i>El llamado de la selva</i> (1903). Ramón Vinyes (1882-1952), librero y escritor catalán residente en Barranquilla y futuro mentor de Gabriel García Márquez, produjo un notable texto sobre London en 1919, lo que abre la posibilidad de que Rivera conociera la obra del estadounidense. En las novelas de London, el oro es una irrealidad. Lo que verdaderamente importa, en medio de ese contexto violento y difícil, es la solidaridad, el amor y la voluntad por sobrevivir. </p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        comentario:
          "<p><i>La vorágine</i> muestra cómo cambia la percepción en la frontera. No solo la gente y la naturaleza circundantes se mueven a otro ritmo, más pausado que el de la frenética ciudad, sino que también las ideas de continuidad y ruptura se trastocan o diluyen. Germán Arciniegas escribió en 1944 que “Todos los hombres que han comprendido la selva, lo primero que han hecho al pisar sus dominios, es tirar sus relojes en el primer charco que encuentran a la vista. Esto es lo que se denomina por los blancos la enfermedad de la selva”. Según interpretaciones como estas, el entorno monótono produce ambiciones delirantes y genera una profunda melancolía; una nostalgia por lo que se dejó atrás, por lo que hubiera podido ser y no fue, como reza la carta de Arturo Cova que hace de epígrafe en <i>La vorágine</i>. </p><p>En la selva, Arturo Cova se imagina como un aventurero. La palabra <i>aventura</i> implica en su etimología “lo que está por venir”. Las aventuras en <i>La vorágine</i> son viajes guiados por espejismos, cuando no llevan a la locura. Cova se veía temerario, donjuanesco y experimentado. Pero estas son trampas de su autopercepción: la trama va mostrando que es una persona muy distinta. Su imagen de sí es otro espejismo, como son las ilusiones que desde allí proyecta. No son las de un aventurero; más bien son las de alguien que busca una vida sedentaria, cómoda y burguesa. </p><p>“Esas cosas de Arturo” son sus repetidas ensoñaciones con una vida que sea todo lo opuesto a la vorágine que lo arrastra. La seguridad que anula el azar. La familia que apacigua el deseo de lances amorosos. La estabilidad que se opone a la violencia.  </p>",
        text: "<p>Me vi de nuevo entre mis condiscípulos, contándoles mis aventuras de Casanare, exagerándoles mi repentina riqueza, viéndolos felicitarme, entre sorprendidos y envidiosos. Los invitaría a comer a mi casa, porque ya para entonces tendría una, propia, de jardín cercano a mi cuarto de estudio. Con frecuencia, Alicia nos dejaría solos, urgida por el llanto del pequeñuelo, llamado Rafael, en memoria de nuestro compañero de viaje [...].</p><p>Poco a poco, mis buenos éxitos literarios irían conquistando el indulto. Según mi madre, debía tenérseme lástima. Después de mi grado en la facultad se olvidaba todo. Hasta mis amigas, intrigadas por mi conducta, disimularían mi pasado con esta frase: ¡Esas cosas de Arturo...! (p. 43). </p>",
        desc: "Ensoñaciones de Arturo Cova de llegar a ser exitoso el negocio entre Franco y Zubieta.",
        galeria: [
          {
            name: "4.1. De Bogotá al Atlántico. Santiago Pérez Triana",
            type: "jpg",
            ficha: [
              "<p><i>De Bogotá al Atlántico por las vías de los ríos Meta, Vichada y Orinoco</i></p>",
              "Santiago Pérez Triana",
              "París: Imprenta Sudamericana, 1897",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 918.6 P37b2",
            ],
            text: "<p>Santiago Pérez Triana (1858-1916) fue un eminente escritor, diplomático y viajero del siglo XIX colombiano. En la narración de un viaje que emprendió en 1893, siguiendo un camino parecido al de Arturo Cova, se ve que compartía la misma percepción de un tiempo estancado y que llamaba a los espejismos del recuerdo: </p><p>Aunque por semanas no más se contaba el tiempo de nuestra separación de las ciudades, merced a un espejismo mental de fácil explicación, dada la inmensidad que nos rodeaba, la cual imponía el sello de sus amplias proporciones a todas las impresiones del ánimo, nos parecía que habían transcurrido muchos años desde que así vagábamos peregrinos en las orillas de los ríos, al amparo de los bosques, en comunión íntima con la naturaleza. Y así como al viajero a larga distancia, ausente del nativo hogar, o al marino que en altas horas de la noche escudriña las estrellas sobre el puente de su barco, los recuerdos de nuestro mundo nos causaban especial deleite, y nos entregábamos a ellos, discurriendo con exquisita fruición sobre personas y hechos conocidos. (pp. 184 - 186) </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/3245/rec/2",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/espejismos/3/4.1.Espejismos.jpg",
            thumbnail: "img/citas/espejismos/3/4.1.Espejismos_Thumb.jpg",
          },
          {
            name: "4.2. Alma sin ilusión. Miguel Rasch Isla",
            type: "jpg",
            ficha: [
              "<p><i>Alma sin ilusión</i></p>",
              "Miguel Rasch Isla",
              "1916",
              "<p>En <i>Revista Moderna</i>, n.º 16, 1916</p>",
              "Hemeroteca Biblioteca Luis Ángel Arango, 17",
            ],
            text: "<p>El barranquillero Miguel Rasch Isla (1887-1953), amigo de Rivera, era conocido en los círculos literarios de su época como “el caballero del soneto” por la facilidad con que producía poemas. Rasch Isla sostenía con Rivera una amable competencia por quién dominaba mejor esta forma de poesía. “Para José Eustasio Rivera, mal amigo y peor poeta, con la admiración ferviente de su Miguel Rasch Isla”, rezaba la juguetona dedicatoria autógrafa al ejemplar que le obsequió de su poemario <i>A flor de alma</i> (1911). Luego de publicada la primera edición de <i>La vorágine</i>, Rasch Isla le ayudó a Rivera a revisar el texto y eliminar la cadencia poética que originalmente tenía. </p><p><i>Alma sin ilusión</i> es un soneto de Rasch Isla que seguía los estándares de su época. Cientos de poemas, tangos, valses y bambucos se compusieron sobre la idea: el alma está derrotada y no tiene ilusiones. La ironía está en que, a falta de ilusiones, aparece otro espejismo: “ser en el dolor cual una casa en el que todo ha muerto, pero donde una alondra en prisión vive cantando”. </p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        comentario:
          "<p>En <i>La vorágine</i>, el horror entra en escena con la muerte del llanero Millán a causa de la corneada de un toro salvaje. El cortejo fúnebre del jinete sin media cabeza se revela ante Cova como una <i>fantasmagoría</i>: otra forma de ilusión óptica de connotaciones tétricas. Como si se tratara de una ilusión desértica y casi mística, la caravana pasa frente a él anunciándole lo que vendrá: la Violencia, el ensañamiento de la muerte sobre la vida, la pérdida del alma y la impotencia. A partir de aquí, la oscuridad de la muerte fascinará a Arturo Cova y le llamará a hundirse en la selva. </p><p>La muerte propia o ajena es otro espejismo tras del cual irán Cova y sus camaradas. Y así como escribió el poeta Cova, tan célebremente, “jugué mi corazón al azar y me lo ganó la Violencia”, pudiera igualmente decir, como hizo en 1936 un magistral colega suyo de una generación posterior, León de Greiff (1895-1976): “Juego mi vida, cambio mi vida / de todos modos / la llevo perdida”. </p>",
        text: "<p>Lentamente, el desfile mortuorio pasó ante mí: un hombre de a pie cabestreaba el caballo fúnebre, y los taciturnos jinetes venían detrás. Aunque el asco me fruncía la piel, rendí mis pupilas sobre el despojo. Atravesado en la montura, con el vientre al sol, iba el cuerpo decapitado, entreabriendo las yerbas con los dedos rígidos, como para agarrarlas por última vez. Tintineando en los calcañales desnudos, pendían las espuelas que nadie se acordó de quitar, y del lado opuesto, entre el paréntesis de los brazos, destilaba aguasangre el muñón del cuello, rico de nervios amarillosos, como raicillas recién arrancadas. La bóveda del cráneo y la mandíbula que la sigue faltaban allí, y solamente el maxilar inferior reía ladeado, como burlándose de nosotros. Y esa risa sin rostro y sin alma, sin labios que la corrigieran, sin ojos que la humanizaran, me pareció vengativa, torturadora, y aun al través de los días que corren, me repite su mueca desde ultratumba y me estremece de pavor (pp. 77-78). </p>",
        desc: "Descripción de Arturo Cova del cuerpo inerte de Millán, luego de que un toro lo corneara.",
        galeria: [
          {
            name: "5.1. Cementerio de indígenas. Curiosidades de Colombia. JMGA",
            type: "jpg",
            ficha: [
              "<p><i>Cementerio de indígenas. Curiosidades de Colombia</i></p>",
              "José María Gutiérrez de Alba",
              "<p>En <i>Impresiones de un viaje a América</i>, tomo V, 1870-1884</p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, MSS3357",
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
              "<p><i>Mirando al misterio: contribución al estudio de los fenómenos medianímicos y sus proyecciones sobre el problema moral y religioso</i></p>",
              "Luis Zea Uribe",
              "París: Librairie des Sciences Psychiques, 1923",
              "Biblioteca Luis Ángel Arango, Colección Remota - Palacio Rudas, 133.9 Z31m",
            ],
            text: "<p>Un año antes de que apareciera La vorágine, el médico antioqueño Luis Zea Uribe (1872-1934) publicó <i>Mirando al misterio</i>, obra que escandalizó a la Iglesia y que le valió la excomunión por defender el espiritismo. En el libro, Zea hablaba de las manifestaciones de la vida después de la muerte y de la inmanencia del espíritu cuando se liberaba del cuerpo. José Eustasio Rivera seguro había oído hablar del médico y de su obra, pues Zea era profesor de la Facultad de Medicina de la Universidad Nacional, donde Rivera estudió Derecho entre 1912 y 1917. Además, Zea se había hecho famoso por ser el cirujano que intentó salvar la vida del general Rafael Uribe Uribe después de su atentado en 1914. </p><p>Por la época en la que este libro apareció, Rivera también se interesó por las manifestaciones de la vida desde el más allá. Varias experiencias lo habían convencido de que esta comunicación era posible. En Orocué, durante su participación en la Comisión de Límites con Venezuela, Rivera sufrió episodios de demencia transitoria, bien fuera por el golpe de sol o por las altas fiebres del paludismo. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4334/rec/1",
            btnText: "Abrir material en Babel a través del vínculo",
            img: "img/citas/espejismos/4/5.2.Espejismos.jpg",
            thumbnail: "img/citas/espejismos/4/5.2.Espejismos_Thumb.jpg",
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
      "<p>Más que una “novela de la selva”, <i>La vorágine</i> es una novela sobre el capitalismo―sobre las formas que adopta el capitalismo en las fronteras. En estas regiones, los negocios se entienden como redención y civilización, como inversiones que dan “impulso a la actividad financiera, al progreso y al desarrollo”. Si algo caracteriza el periodo de finales del siglo XIX y principios del siglo XX en América Latina fue el auge de las industrias de materias primas, que implicó la explotación de productos de diversas procedencias históricas y geográficas que fueron el motor del modelo extractivo exportador. Este proyecto se sustentó en tres ideas: los recursos naturales son ilimitados, su explotación debe ser rápida y barata, de manera que la acumulación de capital lleve al progreso. Tales ideas propiciaron la violencia entre seres humanos y contra la naturaleza.</p>",
    textoFinal:
      "<p>Si algo caracteriza el periodo de finales del siglo XIX y principios del siglo XX en América Latina fue el auge de las <i>industrias de materias primas</i>, que implicó la explotación de una serie de productos de diversas procedencias históricas y geográficas que fueron el motor del modelo “extractivo exportador”, adoptado por las economías de la región desde finales del siglo XIX. Este modelo se sustentó en tres ideas fundamentales: los recursos naturales son ilimitados, su explotación debe ser rápida y barata, y el progreso se sustenta en la acumulación de capital. Tales ideas propiciaron la violencia entre seres humanos y contra la naturaleza. </p>",
    citas: [
      {
        id: "14",
        image: "img/citas/codicia/Codicia_Cita01.jpg",
        bg: "img/citas/codicia/0/Codicia_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. </p>",
        comentario:
          "<p>En su acepción común, la RAE define <i>codicia</i> como el “Afán excesivo de riquezas”. La cita anterior enuncia el estado anímico de Arturo Cova durante su periodo en los llanos. Se imagina a sí mismo como un “héroe” que ha llevado el progreso a las zonas salvajes: un “civilizador”. Su premio es la acumulación de riquezas y su reconocimiento debe ser público. La codicia necesita la exhibición de dos cosas: la riqueza y el poder. ¿Para qué ambas si no es para tener lo que se desea? Ahora, el “civilizador”, en compensación por su trabajo, <i>debe</i> ser satisfecho. No importa si sus deseos son lícitos o éticos, si se le quieren dar o no. Tomará lo que cree merecer, aunque sea por la fuerza. La “dominante obsesión” no solo es <i>tener</i> más, es <i>ser</i> más. Al final, esta locura solo traerá dolor y muerte, como al toro atraído por los engaños del capote. </p>",
        text: "<p>El pensamiento de la riqueza se convirtió en esos días en mi dominante obsesión, y llegó a sugestionarme con tal poder, que ya me creía ricacho fastuoso, venido a los llanos a dar impulso a la actividad financiera (p. 43).</p>",
        desc: "Pensamientos de Arturo Cova ante las posibilidades de éxito del negocio entre Franco y Zubieta.",
        galeria: [
          {
            name: "1.1. Encuentro con un tigre. JMGA",
            type: "jpg",
            ficha: [
              "<p><i>Encuentro con un tigre. Camino de los Llanos</i>",
              "José María Gutiérrez de Alba",
              "En <i>Impresiones de un viaje a América, tomo V, 1870-1884</i></p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, MSS3357",
            ],
            text: "<p>En esta representación del encuentro con un tigre (probablemente, un jaguar) se muestra claramente el paisaje de la colonización llanera que Rivera describe en <i>La vorágine</i>: un horizonte de pastos que va sustituyendo el paisaje bosquesino de las sociedades indígenas que habitaron históricamente la región. Aquí, como lo muestra la lámina de Gutiérrez de Alba, se aprecia la lucha contra la selva, es el avance del paisaje que resulta del despojo de las tierras indígenas y de la inversión de capital con la que sueña Arturo Cova. Este paisaje del despojo se ve representado en el avance de un hombre armado, entre los troncos de los antiguos gigantes de la selva, de cuya frontera salta un jaguar que está siendo cazado.</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll16/id/43",
            btnText: "Haga click para acceder al recurso completo",
            img: "img/citas/codicia/0/1.1.Codicia.jpg",
            thumbnail: "img/citas/codicia/0/1.1.Codicia_Thumb.jpg",
          },
          {
            name: "1.2. Escudo_v2",
            type: "jpg",
            ficha: [
              "Escudo de la intendencia del Vichada, ilustración",
              "Mottif.",
            ],
            text: "<p>Las variaciones del escudo del actual departamento del Vichada (comisaría hasta 1991), en las que el paisaje de pastos y el ganado se opone a la selva y el jaguar, ilustran una idea que la novela de Rivera pone en cuestión: la noción de que las regiones salvajes, representadas por el jaguar en el monte, son lugares deshabitados, tierras de nadie para ser tomadas por quienes tienen alma de empresarios, negando y despreciando la autogestión y la productividad de sus habitantes originales. “Tierra de hombres para hombres sin tierra”, reza el escudo. Rivera, a través de los relatos de varios de los personajes de <i>La vorágine</i>, muestra que esta tierra estaba habitada por pueblos indígenas, a quienes se les niegan sus derechos a sangre y fuego en nombre de la “civilización”, aquí representada por el ganado y el mar de pastos.</p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. </p>",
        comentario:
          "<p>Este pasaje de <i>La vorágine</i> relata la excursión de Arturo Cova, Fidel Franco, el Pipa y el mulato Correa al garcero de Las Hermosas, a donde se dirigen a recoger plumas blancas de garza para venderlas a los comerciantes de Orocué. Estos las exportaban por el Orinoco hacia las ​grandes ​capitales de la moda. Los garceros se encuentran en los extensos esteros y lagunas de las llanuras inundables, a donde llegan una gran multiplicidad de especies de aves acuáticas a anidar. </p><p>Las investigaciones científicas recientes en biología y ciencias ambientales, con soportes etnográficos y arqueológicos, han reconocido que la existencia de estas lagunas de hiperabundancia se deben no solo a procesos puramente naturales, sino en gran parte a la actividad de las sociedades indígenas de la región. La explotación indiscriminada por parte de los colonizadores ha llegado a ponerlas en riesgos profundos e, incluso, a afectarlas de manera irrecuperable. </p>",
        text: "<p>—¿Y en qué lugar escondes el oro para tus planes?</p><p>–En el garcero de Las Hermosas. Cuatro libras de pluma fina, si mal nos va. Cada semana cambiaremos un manojito por mercancías […].</p><p>El inundado bosque del garcero, millonario de garzas reales, parecía algodonal de nutridos copos; y en la turquesa del cielo ondeaba, perennemente, un desfile de remos cándidos, sobre los cimborrios de los moriches, donde bullía la empeluzada muchedumbre de polluelos (p. 90).</p>",
        desc: "Conversación entre el Pipa y Arturo Cova sobre el garcero de Las Hermosas.",
        galeria: [
          {
            name: "2.1. La mujer detrás del arma. Gordon Ross",
            type: "tif",
            ficha: [
              "<p><i>La mujer detrás del arma</i></p>",
              "Gordon Ross",
              "24 de mayo de 1911",
              "Biblioteca del Congreso de los Estados Unidos",
            ],
            text: "<p>En uno de sus delirios, a Arturo Cova le parece ver llegar a Alicia “bajo el sombrero de lánguidas plumas, tendiéndome los brazos entre sollozos” (p. 57). Esta imagen de Alicia emplumada recuerda que, desde finales del siglo XIX, se impuso en la moda internacional adornar el vestuario femenino con “plumas irisadas”. En la Orinoquía, dos especies en particular, la garza real y la garza chumbita, fueron las protagonistas del <i>boom</i> de las plumas entre 1884 y 1930. Tuvieron una gran demanda en el mercado internacional para alimentar la industria de la moda: con ellas se creaban sombreros, boas, abanicos y estolas para las damas elegantes de la <i>belle époque</i>. </p><p>Esta ilustración del artista estadounidense Gordon Ross muestra una mujer a la moda de la <i>belle époque</i>, con sombrero de plumas y cazando garzas. Ilustra el modelo económico extractivo-exportador que dominó desde finales del siglo XIX hasta 1930, y que se concibió como un proyecto “civilizador” de selvas y “montes”. </p>",
            link: "",
            btnText: "",
            img: "img/citas/codicia/1/2.1.Codicia.png",
            thumbnail: "img/citas/codicia/1/2.1.Codicia_Thumb.jpg",
          },
          {
            name: "2.2. MapaComercioPlumas_1910_v2",
            type: "jpg",
            ficha: [
              "Mapa del comercio global de plumas, 1880-1920",
              "Mottif.",
              "Fuente: Margarita Serje, et. al, 'Atlas de La vorágine', Bogotá: Universidad de los Andes, 2024",
            ],
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.",
        comentario:
          "<p>El fenómeno que Balbino Jácome describe en este pasaje de <i>La vorágine</i> ilustra una situación recurrente en las economías extractivas: el endeude. Esta práctica maximiza los beneficios económicos mediante la explotación laboral, al crear una deuda impagable por parte del comerciante/prestamista.​​ El crédito se otorga generalmente en mercancía, y el comerciante y prestamista controla los medios del intercambio (las pesas, las medidas, el registro, la contabilidad, etc.) y monopoliza los medios de transporte. El prestamista impone de manera ilegal y arbitraria el precio y los términos de la deuda, que se paga en trabajo o en entregas de un determinado producto a futuro. Se trata de una práctica que llega hasta nuestros días (por ejemplo, en las economías de la coca y la minería ilegal) y que se registra en libros de contabilidad ficticia como los que describe Jácome, creando un flujo de mercancías que se evapora en el aire, dejando solo miseria a su alrededor. </p>",
        text: "<p>Mas el crimen perpetuo no está en las selvas sino en dos libros: en el Diario y en el Mayor. Si su señoría los conociera, encontraría más lectura en el debe que en el haber, ya que a muchos hombres se les lleva la cuenta por simple cálculo, según lo que informan los capataces. Con todo, hallaría datos inicuos: peones que entregan kilos de goma a cinco centavos y reciben franelas a veinte pesos; indios que trabajan hace seis años y aparecen debiendo aún el mañoco del primer mes; niños que heredan deudas enormes, procedentes del padre que les mataron, de la madre que les forzaron, hasta de las hermanas que les violaron, y que no cubrirán en toda su vida, porque cuando conozcan la pubertad, los solos gastos de su niñez les darán medio siglo de esclavitud (p. 135).</p>",
        desc: "Palabras de Balbino Jácome a Clemente Silva en el marco de la llegada de un visitador a los barracones.",
        galeria: [
          {
            name: "3.1. Pesando el caucho. Paternoster",
            type: "jpg",
            ficha: [
              "<p><i>Pesando el caucho</i>",
              "En G. Sidney Paternoster, <i>The Lords of the Devil’s Paradise</i>, Londres: Stanley Paul, 1913</p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 985.063 P17l",
            ],
            text: "<p>El desarrollo empresarial en las zonas “salvajes” se basa en la penetración del comercio, teniendo como punta de lanza un ejército de comerciantes ambulantes conocidos como <i>cacharreros</i> en Colombia, <i>bongueros</i> en el Orinoco, <i>aviadores</i> en Perú o marrateros en Brasil. Ellos iniciaban el <i>enganche, amarre o endeude</i> de trabajadores que comprometían su trabajo contra avances de mercancías a crédito. </p><p>En el momento en que se escribe <i>La vorágine</i>, los comerciantes endeudaban a colonos, <i>caboclos</i> y campesinos para obtener bolones de caucho, que se evaluaban según el peso y la calidad para determinar su valor contra la deuda adquirida. La clave era que esta deuda, que se adquiría contra bagatelas y mercancías de baja calidad, nunca pudiera ser saldada. </p><p>En muchos casos, la deuda involucraba familias enteras y era hereditaria. Esta forma de trabajo “pre-pago” se caracterizó porque la promesa de empleo seguro y riqueza fácil trajo a la región a rebuscadores y migrantes, por lo general, hombres solos o familias sin tierra. La entrega de “avances” creó cadenas de deuda que amarraban a trabajadores, capataces e intermediarios con grandes firmas comerciales. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4319/rec/3",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/codicia/2/3.1.Codicia.png",
            thumbnail: "img/citas/codicia/2/3.1.Codicia_Thumb.jpg",
          },
          {
            name: "3.2. Recibiendo la tarea a los peones. En Gaspar de Pinell",
            type: "jpg",
            ficha: [
              "<p><i>Recibiendo la tarea a los peones en una estación cauchera de Caraparaná</i>",
              "Foto anónima",
              "En Gaspar de Pinell, <i>Excursión apostólica por los ríos Putumayo, San Miguel de Sucumbíos, Cuyabeno, Caquetá y Caguán</i>, Bogotá: Imprenta Nacional, 1928</p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. </p>",
        comentario:
          "<p>Este pasaje de <i>La vorágine</i> introduce a Tomás Funes, quien asumió por la fuerza la gobernación del Estado Federal de Amazonas en Venezuela, creando una “república independiente” para la extracción de caucho y balatá. Rivera conoció este episodio de primera mano cuando fue abogado de la Comisión de Límites Colombo-Venezolana. En la novela, Ramiro Estébanez relata su historia y se pregunta: </p><p>¿Cuál podrá ser la suerte de los caucheros de San Fernando? Causa pavura considerarla. Pasado el primer acto de la tragedia, palidecieron; pero el caudillo que improvisaron ya tenía fuerza, ya tenía nombre. Le dieron a probar sangre y aún tiene sed. ¡Venga acá la gobernación! Él mató como comerciante, como gomero, solo por suprimir las competencias; mas como le quedan competidores en siringales y en barracas, ha resuelto exterminarlos con igual fin y por eso va asesinando a sus mismos cómplices. </p><p>—¡La lógica triunfa! </p><p><i>—¡Que viva la lógica!</i> (p. 189) </p><p>​​​​​De esta forma se refiere a la lógica del sistema y a la lógica de las caucherías y su régimen de violencia y terror. </p>",
        text: "<p>Y no pienses que al decir “Funes” he nombrado a persona única. Funes es un sistema, un estado de alma, es la sed de oro, es la envidia sórdida. Muchos son Funes, aunque lleve uno solo el nombre fatídico.</p><p>La costumbre de perseguir riquezas ilusas a costa de los indios y de los árboles; el acopio paralizado de caucherías para peones destinadas a producir hasta mil por ciento; la competencia del almacén del gobernador, quien no pagaba derecho alguno, y al vender con mano oficial recogía con ambas manos; la influencia de la selva, que pervierte como el alcohol, llegaron a crear en algunos hombres de San Fernando un impulso y una conciencia que los movió a valerse de un asesino para que iniciara lo que todos querían hacer y que le ayudaron a realizar (p. 184)</p>",
        desc: "Anotaciones de Arturo Cova del testimonio dado por Ramiro Estévanez sobre la matanza de San Fernando en 1913.",
        galeria: [
          {
            name: "4.1. Mapa de las exploraciones de los Hermanos Reyes",
            type: "jpg",
            ficha: [
              "<p><i>Mapa que muestra las exploraciones hechas por los Hermanos Reyes en la América del Sur y la línea del proyectado ferrocarril intercontinental</i></p>",
              "<p>En Rafael Reyes, <i>A través de la América del Sur: exploraciones de los hermanos Reyes. Trabajo presentado en la II Conferencia Panamericana reunida en México</i>, Barcelona: R. de S. N. Araluce, 1902</p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 918 R39a",
            ],
            text: "<p>Para comienzos del siglo XX, la macrorregión Orinoco-Amazónica fue escenario privilegiado del negocio de extracción masiva de caucho, que se ​posicionó​ como uno de los materiales más cotizados de la “segunda revolución industrial”. Tenía una multiplicidad de usos, en especial, en la industria automotriz, que creció de manera vertiginosa a principios del siglo XX. También era fundamental para el cableado, pues en este momento avanzaba la electrificación y se estaba intercomunicando el planeta por medio de cables submarinos para el telégrafo. </p><p>La importancia del caucho como potencial para la economía de la región queda ​expresada​ en el mapa que acompaña la memoria de las exploraciones de Rafael Reyes (presidente de Colombia entre 1904-1909) y sus hermanos. Allí se muestra el sueño de Reyes de construir una línea de tren que uniera el continente de norte a sur (dejando fuera las pampas, la Patagonia y la Tierra del Fuego). Es un mapa de recursos (aparecen la plata, el cobre, el hierro, la hulla y las tierras aptas para la ganadería) en el que se destaca el área de “caucho y cacao silvestres”. Muestra, además, los obstáculos que, de acuerdo con Reyes, era necesario afrontar: los indios salvajes (representados por flechas) o antropófagos (representados por calaveras negras). Esta idea de que los indios representan un obstáculo al desarrollo económico y a la explotación de recursos sigue vigente hasta hoy. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4320/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/codicia/3/4.1.Codicia.png",
            thumbnail: "img/citas/codicia/3/4.1.Codicia_Thumb.jpg",
          },
          {
            name: "4.2. Mapa casas caucheras",
            type: "jpg",
            ficha: [
              "Ilustración de las principales casas caucheras (entre 1890 y 1917)",
              "Mottif.",
              "Fuente: Margarita Serje, et. al, 'Atlas de La vorágine', Bogotá: Universidad de los Andes, 2024  ",
            ],
            text: "<p>La extracción de caucho natural en el Amazonas se llevó a cabo mediante el establecimiento de una serie de “casas comerciales” que habían acumulado inmensos capitales. ​Varias​ de estas casas se mencionan en <i>La vorágine</i> y se describe con detalle el accionar de la Casa Funes y la Casa Arana Hermanos de la Peruvian Amazon Co. Sin embargo, estas no fueron las únicas. En realidad, se construyó una red de empresas comerciales que abarcaban la enorme zona cauchera Orinoco-Amazónica. Estas firmas, asociadas con capitales principalmente británicos, franceses y estadounidenses, acopiaban el 90% de la producción del caucho en el mercado global. En este mapa, que dista de ser exhaustivo, se muestran algunas de las principales casas caucheras.</p><p><i>Orinoco:</i> Co Comercial Orinoco y Casa Funes.</p><p><i>Putumayo:</i> Arana Hermanos - Peruvian Amazon Co.</p><p><i>Ríos Negro y Vaupés:</i> JC Araujo, JS Amorim, Higson Co., Albuquerque Hnos. y Casa Pezil</p><p><i>Madeira y Madre de Dios:</i> Suárez Hnos., Orton Bolivia Rubber Co., Madeira-Mamoré Rway Co., US Rubber Co., Co. Francaise du Cautchoc, Inca Rubber Co., Fitzcarrald & Cardozo da Rosa y Co. Clairmont.</p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        comentario:
          "<p><i>La vorágine</i> utiliza la figura retórica de la selva como cárcel-sepulcro y como personaje que se defiende. Se enfrenta a quienes la violentan a través de hormigas, zancudos, enfermedades, culebras… Sin embargo, no es la selva la que mata, son los libros de cuentas: es la codicia la que impulsa los crímenes contra la naturaleza y la humanidad, y la que lleva a miles a buscar la riqueza en territorios para los que no están preparados. </p><p>Hay una especie de justicia poética en el hecho de que <i>La vorágine</i> fuera escrita en un libro de cuentas. La novela se constituye, de cierta manera, en un <i>ajuste de cuentas:</i> Rivera hace un registro minucioso de los excesos de quienes la explotan y, con ello, valora la codicia como fuente de muerte, y no de progreso. En otras palabras, condena a los hombres y exculpa a la selva. </p><p>Sin embargo, en la práctica, estos crímenes sí dieron inmensos beneficios a los “barones del caucho” —como se conocía a Funes y Arana—, a las grandes potencias y a la economía global de la época, que operó con un ojo cerrado ante las injusticias y el racismo cultural que invisibilizó las muertes de mulatos e indígenas bajo la justificación del “progreso” económico. </p>",
        text: "<p>Bien saben los gomeros que el oro vegetal no enriquece a nadie. Los potentados de la floresta no tienen más que créditos en los libros, contra peones que nunca pagan, si no es con la vida, contra indígenas que se merman, contra bongueros que se roban lo que transportan. La servidumbre en estas comarcas se hace vitalicia para esclavos y dueños: unos y otros deben morir aquí. Un sino de fracaso y maldición persigue a cuantos explotan la mina verde. La selva los aniquila, la selva los retiene, la selva los llama para tragárselos. Los que escapan, aunque se refugien en las ciudades, llevan ya el maleficio en cuerpo y alma. Mustios, envejecidos, decepcionados, no tienen más que una aspiración: volver, volver a sabiendas de que si vuelven perecerán. Y los que se quedan, los que desoyen el llamamiento de la montaña, siempre declinan en la miseria, víctimas de dolencias desconocidas, siendo carne palúdica de hospital, entregándose a la cuchilla que les recorta el hígado por pedazos, como en pena de algo sacrílego que cometieron contra los indios, contra los árboles (p. 189).</p>",
        desc: "Palabras del testimonio de Ramiro Estévanez sobre la matanza cometida por Funes en San Fernando. ",
        galeria: [
          {
            name: "5.1. En viaje. Carlos Rey de Castro",
            type: "jpg",
            ficha: [
              "<p><i>En viaje</i>",
              "Fotografía anónima",
              "En Carlos Rey de Castro, <i>Los escándalos del Putumayo: carta abierta dirigida a Mr. Geo G. Michell. Cónsul de S.M.B.</i>, Barcelona: Imp. Viuda de L. Tasso, 1913 </p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 918.5 R39e",
            ],
            text: "<p>La Casa Arana, registrada en Londres como la Peruvian Amazon Co., fue el centro de un escándalo en el que se hicieron públicas las condiciones de tortura, violación, violencia extrema y terror a las que fueron sometidos los indígenas, esclavizados por la deuda, desplazados, asesinados y desposeídos de sus tierras. Este horrible capítulo de la historia empresarial en la región ha sido considerado por el historiador Roberto Pineda como un verdadero holocausto. </p><p>A través del relato de Clemente Silva, en <i>La vorágine</i> se da cuenta de las brutales formas de explotación del caucho en la región del Putumayo establecidas por Julio César Arana. Este comerciante peruano había comenzado como “aviador”: avanzando mercancías y cobrando la deuda en caucho. Fue consolidando su negocio y desplazando a otros comerciantes, y en 1903 crea la compañía comercial Arana Hermanos. Esta firma se convirtió en la principal exportadora de caucho en Iquitos, gracias a las “deudas” del sistema del enganche. </p><p>Arana y otros “barones del caucho” acumularon riqueza y poder mediante este tipo de prácticas, y aunque eran despiadados patrones, se consideraban empresarios ejemplares, que estaban “haciendo patria” en la selva: llegaron a consolidarse como cabeza del poder local, mediadores del capital internacional y representantes del Estado nacional. Gracias a que estos barones y reyes de la mercancía monopolizaban los medios de transporte y de comercio –lanchas, aviones y camiones—, rápidamente usurparon el gobierno de la zona y se asumieron como autoridades civiles y militares, consolidándose como el grupo que encarnaba y cooptaba al Estado.</p><p>En la fotografía, Julio César Arana cena junto a los cónsules estadounidense, inglés y peruano durante un viaje en El Liberal, uno de los vapores de la Casa Arana. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4315/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/codicia/4/5.1.Codicia.jpg",
            thumbnail: "img/citas/codicia/4/5.1.Codicia_Thumb.jpg",
          },
          {
            name: "5.2. Vapor de la United Fruit Company tomando banano",
            type: "jpg",
            ficha: [
              "<p><i>Vapor de la United Fruit Company tomando banano</i></p>",
              "United Fruit Company",
              "1913",
              "En Colección de postales de José María Restrepo-Millán (1908-1914)",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos",
            ],
            text: "<p>Entre las principales actividades extractivistas que se realizaban en Colombia durante la época en la que se publicó <i>La vorágine</i> estaban: el monocultivo de banano (Magdalena), la explotación del petróleo (Concesiones de Mares y Barco), la minería de oro y la explotación de maderas finas (Chocó), entre otras.</p><p>En las regiones selváticas, estas actividades se centraron en extraer los “frutos de la selva”: coca, cacao, tagua, añil, achiote, sarrapia, guaraná e ipecacuana, por mencionar algunos. Estos frutos se suponían silvestres, sin reconocer que son producto del manejo indígena: son el resultado de miles de años de selección cultural tanto de las especies como de sus ecosistemas. Por ello, las empresas extractivas explotan en muchos casos lo que no han tenido que producir (como las plumas de garza). La riqueza que se extrae se acumula por fuera, dejando en la localidad solo los costos sociales y ambientales.</p><p>Esta postal retrata la carga de banano en un vapor de la United Fruit Company. En 1928, la empresa que estuvo involucrada en la tristemente célebre masacre de las bananeras en Ciénaga (Magdalena).</p>",
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
      "<p>La separación de Panamá a inicios del siglo XX, la pérdida de otros territorios del país y la necesidad de establecer fronteras internacionales preocupaban profundamente a José Eustasio Rivera. Durante este período, Colombia y sus vecinos iniciaron una carrera por controlar los territorios de la macrorregión Orinoco-Amazónica. Mientras Perú y Brasil tuvieron presencia militar, Colombia delegó su soberanía en misiones religiosas y en terratenientes y comerciantes cuyos intereses privados dependían de los grandes capitales extranjeros. Rivera refleja las implicaciones de esta situación en <i>La vorágine</i> a través de diversos personajes que muestran el desdén de funcionarios y comerciantes por indios y colonos. Estas preocupaciones de Rivera se expresan en las distintas formas a las que se hace referencia al sentido de “patria” en la novela: como pertenencia regional, pero también en relación con la autoridad y las instituciones.</p>",
    textoFinal:
      "<p>De la misma manera, Rivera expresa su preocupación por la integridad del territorio nacional y de sus gentes en las distintas formas a las que se hace referencia al sentido de “patria” en la novela: un caleidoscopio de imágenes compuesta de distintos pasajes de la novela. </p>",
    citas: [
      {
        id: "11",
        image: "img/citas/patria/0/Patria_Cita01.jpg",
        bg: "img/citas/patria/0/Patria_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. </p>",
        comentario:
          "<p>Durante la estadía de los protagonistas en la hacienda La Maporita, un hato llanero, Cova conoce a la mulata Tiana, encargada de la cocina. Antonio, hijo de Tiana, partirá al Vichada para trabajar en las caucherías y ella teme perderlo. Por ello, prepara el café de Antonio con el corazón de un pájaro piapoco. En este pasaje, Tiana se refiere a la patria como la tierra natal y como la región de origen. Los colombianos nos pensamos como “país de regiones” y, en la novela, Rivera enfatiza el mosaico de las identidades regionales de sus personajes, al tiempo en que deja entrever la suya propia como huilense. </p><p>Las palabras de la mulata Tiana expresan vívidamente su pertenencia a la llanura:  </p><p>Yo soy únicamente <i>yanera</i>, del <i>lao</i> de Manare. Dicen que soy craveña, pero no soy del Cravo; que pauteña, pero no soy del Pauto. ¡Yo soy de todas estas <i>yanuras!</i> Pa qué más patria, si son tan <i>beyas</i> y tan <i>dilatáas!</i> Bien dice el dicho: ¿Onde <i>tá</i> tu Dios? ¡Onde te salga el sol! (p. 45). </p><p>Esta idea de patria, que surge del arraigo a la geografía y a los lugares, es la que sustenta la nostalgia de otro de los personajes de la novela, Ramiro Estévanez, quien “Amaba de la vida cuanto era noble: el hogar, la patria, la fe, el trabajo, todo lo digno y lo laudable” (p. 175). La noción de patria cambia, sin embargo, a lo largo de la novela y comienza a mostrarse como una realidad mediada y moldeada por el Estado y sus funcionarios. </p>",
        text: "<p>Mientras que yo desayunaba, sentóse en el suelo y comenzó a ajustar con los dientes la cadenita de una medalla que llevaba al cuello. </p><p>—Resolví ponerme esta prenda, porque tá bendita y es milagrosa. A vé si el Antonio se anima a yevarme. Por si me dejare desamparáa, le di en el café el corazón de un pajarito llamao piapoco. Puée irse muy lejos y corré tierras; pero, onde oiga cantá otro pájaro semejante, se pondrá triste y tendrá que volverse, porque la guiña tá en que viene la pesaúmbre a poné de presente la patria y el rancho y el queré olvidao, y tras de los suspiros tiée que encaminarse el suspiraor o se muere de pena. La medaya también ayúa si se le cuelga al que se va (p. 35). </p>",
        desc: "Palabras de la mulata Sebastiana a Arturo Cova en La Maporita. ",
        galeria: [
          {
            name: "1.1. Llanos de San Martín, Colombia",
            type: "jpg",
            ficha: [
              "<p><i>Llanos de San Martín, Colombia</i></p> ",
              "Anónimo ",
              "En Colección de tarjetas postales de Colombia, 1903-1925 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, TP0204 ",
            ],
            text: "<p>La primera identidad patria que se presenta en <i>La vorágine</i> es la que se refiere a la llanera, una identidad colombo-venezolana que celebra la libertad de las sabanas, los vastos horizontes y las tierras abiertas. Este sentido de pertenencia al llano se canta en la música llanera, como en los famosos versos de <i>Alma llanera</i> (de Bolívar Coronado y Pedro Elías Gutiérrez), que trascienden las fronteras nacionales: </p><p>Yo nací en una ribera del Arauca vibrador.</p> <p>Soy hermano de la espuma, </p><p>de las garzas, de las rosas. </p><p>Soy hermano de la espuma, </p><p>de las garzas, de las rosas </p><p>y del sol (del sol) y del sol. </p><p>La noción de la patria mediada por las identidades regionales y sus riquezas naturales que emerge en la primera parte de <i>La vorágine</i> persiste hasta hoy en las diversas imágenes que destacan la belleza exótica de sus regiones y la diversidad de sus ecosistemas, su fauna y su flora, celebrándolas como “riquezas naturales”. Las selvas, los páramos o los manglares no sobrevivieron desde eras prehumanas, son paisajes producto de la interacción con las sociedades aborígenes. De hecho, como lo muestra <i>La vorágine</i>, la relación que nuestra sociedad urbana, capitalista y moderna establece con el entorno conlleva su extinción al transformar ecosistemas biodiversos en desiertos de pastos y monocultivos. </p><p>En la imagen, se ve un hato llanero, centro mismo de la identidad llanera.</p>",
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
        bg: "img/citas/patria/1/Patria_Cita02_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. </p>",
        comentario:
          "<p>Arturo Cova, el narrador de <i>La vorágine</i>, resume en esta frase el estatus de “los indios” en la República de Colombia a comienzos del siglo XX y define estos pueblos a partir de sus carencias: sin dioses, sin héroes, sin tiempo y, sobre todo, sin patria. Al negarles la patria, ignora la relación de las comunidades indígenas con la tierra, su espacio vital. Simultáneamente, niega su pertenencia al país y su estatus como ciudadanos. Desconoce de tajo su soberanía sobre los territorios que históricamente han habitado, su capacidad de autogestión y la posibilidad de su participación en el futuro de la región. </p><p>De hecho, cuando Rivera escribe la novela, se basa en los relatos de informantes “blancos”, que describen​ ​los “usos y costumbres” indígenas. La novela muestra la vida, los objetos y las costumbres indígenas interpretadas por los “blancos”, desde su propio punto de vista. Se pierde así todo el universo cosmológico que da forma a los modos de vida y a los conocimientos indígenas, privilegiando la imagen y la interpretación que desde nuestra cultura hemos creado sobre estas sociedades. </p>",
        text: "<p>El jefe de la familia me manifestaba cierta frialdad, que se traducía en un silencio despectivo. Procuraba yo halagarlo en distintas formas, por el deseo de que me instruyera en sus tradiciones, en sus cantos guerreros, en sus leyendas; inútiles fueron mis cortesías, porque aquellas tribus rudimentarias y nómades no tienen dioses, ni héroes, ni patria, ni pretérito, ni futuro (p. 92).</p>",
        desc: "Reflexiones de Arturo Cova sobre el cacique y la comunidad indígena que lo recibió junto al Pipa y sus compañeros. ",
        galeria: [
          {
            name: "2.1. Carta del curso del río Meta. AvH",
            type: "jpg",
            ficha: [
              "<p><i>Carta del curso del río Meta y de una parte de la cadena oriental de las montañas de Nueva Granada</i></p>",
              "Alexander von Humboldt ",
              "1817 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, H448 ",
            ],
            text: "<p>Los Llanos Orientales y, en general, la macrorregión Orinoco-Amazónica aparecen como territorios “infestados de indios” (así los describe Humboldt en su mapa del Meta a inicios del siglo XIX), como si se tratara de una plaga que es necesario erradicar a sangre y fuego. Durante el siglo XIX, las ideas de nación y de progreso justificaban el etnocidio para darle paso a la civilización. Para algunos pensadores, las avanzadas del progreso requerían de la expropiación de tierras y la explotación de la fuerza de trabajo de la población. Diversas escenas de <i>La vorágine</i> muestran este proceso. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll13/id/84",
            btnText: "Abrir material en Babel a través del vínculo",
            img: "img/citas/patria/1/2.1.Patria.jpg",
            thumbnail: "img/citas/patria/1/2.1.Patria_Thumb.jpg",
          },
          {
            name: "2.2. Colombia poblada. FJVV",
            type: "jpg",
            ficha: [
              "<p><i>Colombia poblada</i></p> ",
              "En Francisco Javier Velasco y Vergara, Atlas completo de geografía colombiana, Bogotá: Imprenta Eléctrica, 1906 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, R912.86 V37a ",
            ],
            text: "<p>Este “mapa mutilado” de la patria (como lo describe el geógrafo colombiano Simón Uribe) en el que solo aparece la mitad de su área muestra “el país que cuenta”, “el país conocido” y “el país poblado”. Se trata del país urbano, moderno o en vías de modernización. Representaciones como esta no tienen en cuenta que, para entonces, buena parte del territorio estaba habitado por distintas sociedades indígenas, así como de numerosas comunidades de cimarrones y de pequeños colonos. Así como se excluyen estos grupos como pobladores de la patria, se excluyen también sus territorios: las regiones selváticas que desaparecen simbólicamente del mapa <i>Colombia poblada</i> en el que se reconoce solo a las regiones Andina y Caribe.</p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. </p>",
        comentario:
          "<p>Esta reflexión de Arturo Cova sobre el mapa oficial de Colombia elaborado por la Oficina de Longitudes expresa varias de las preocupaciones de Rivera. Primero está el desconocimiento y desprecio de las élites por las regiones selváticas, a las que desdeñan y entienden como despensas que pueden usar y desechar, y que no ameritan ser conocidas ni reconocidas. Buena parte de la cartografía nacional se centró en las regiones de los Andes y Caribe, dejando el resto del territorio como “espacios en blanco en el mapa”. </p><p>Este pasaje revela también la preocupación por la integridad territorial. A comienzos del siglo XX, cuando la “fiebre del caucho” estaba en el centro de la escena, se estaban fijando los límites en la macrorregión Orinoco-Amazónica. Rivera participó en este proceso como abogado de la Comisión de Límites entre Colombia y Venezuela, que se llevó a cabo bajo la sombra de la separación de Panamá. </p><p>La patria también aparece representada en la novela por el Estado, más específicamente por los funcionarios del Estado, que encarnan la “libertad y el orden”: el principio de su autoridad y su “función constitucional”. La novela muestra cómo el accionar de los funcionarios distorsiona los objetivos de las instituciones, ya que actúan de acuerdo con sus intereses personales, por encima de los intereses de la patria. </p>",
        text: "<p>De juro que, si bajan hasta Manaos, nuestro cónsul, al leer mi carta, replicará que su valimiento y jurisdicción no alcanzan a estas latitudes, o lo que es lo mismo, que no es colombiano sino para contados sitios del país. Tal vez, al escuchar la relación de don Clemente, extienda sobre la mesa aquel mapa costoso, aparatoso, mentiroso y deficientísimo que trazó la Oficina de Longitudes de Bogotá, y le responda tras de prolija indignación: “¡Aquí no figuran ríos de esos nombres! Quizás pertenezcan a Venezuela. Diríjase usted a Ciudad Bolívar”. </p><p>Y, muy campante, seguirá atrincherado en su ignorancia, porque a esta pobre patria no la conocen sus propios hijos, ni siquiera sus geógrafos (p. 193). </p>",
        desc: "Reflexiones de Arturo Cova en las barracas del Váquiro. ",
        galeria: [
          {
            name: "3.1. Croquis de Colombia. José Eustasio Rivera",
            type: "jpg",
            ficha: [
              "<p><i>Croquis de Colombia</i> ",
              "En José Eustasio Rivera, <i>La vorágine</i>, Nueva York: Andes, 1928</p> ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Co863.5 R49v36 ",
            ],
            text: "<p>En el <i>Croquis de Colombia</i>, publicado en la quinta edición de <i>La vorágine</i>, los límites de la macrorregión Orinoco-Amazónica aparecen abiertos e indefinidos. Asimismo, los ríos se destacan más que las cordilleras, que aparecen un poco desdibujadas. Es decir, los ríos aparecen como verdaderos hitos del territorio. De cierta manera, este mapa se opone a la visión tradicional de la geografía de los países andino-amazónicos, que tiene como columna vertebral la cordillera, considerada como el rasgo determinante de su geografía, y que representan de manera enfática como barrera topográfica. </p><p>Es clara la intención de Rivera de representar de manera precisa en este mapa el espacio geográfico en oposición al “mapa costoso, aparatoso, mentiroso y deficientísimo que trazó la Oficina de Longitudes de Bogotá”. Se trata de un mapa ajustado a la realidad de los territorios: con fronteras abiertas y organizado alrededor del agua. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4302/rec/2 ",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/patria/2/3.1.Patria.jpg",
            thumbnail: "img/citas/patria/2/3.1.Patria_Thumb.jpg",
          },
          {
            name: "3.2. Mapa_TratadosVigentes",
            type: "jpg",
            ficha: [
              "Territorios que hacían parte de Colombia (primera mitad del siglo XX) ",
              "Mottif. ",
              "Fuente: Instituto Geográfico Agustín Codazzi",
            ],
            text: "<p>La diplomacia colombiana fue poco eficaz para defender los territorios de la frontera a inicios del siglo XX. Para el momento en que se escribió <i>La vorágine</i>, en la memoria de los colombianos aún pesaba como una sombra la separación de Panamá. En la pírrica negociación del gobierno de Colombia con el presidente Theodore Roosevelt de los Estados Unidos, el país perdió el istmo, cuya imagen sigue siendo unos de los elementos centrales del escudo nacional. </p><p>Consciente de la importancia geopolítica de la macrorregión Orinoco-Amazónica, Rivera señala en <i>La vorágine</i> la trascendencia del territorio, que solo será reconocida a hasta finales del siglo XX. Cuando Rivera escribió <i>La vorágine</i>, estaban en pugna áreas estratégicas de la región, como el río Casiquiare, que une las cuencas del Orinoco y el Amazonas, o el territorio entre los ríos Putumayo y Caquetá. En esta última zona, que estaba en disputa entre Colombia y Perú, ambas partes se comprometieron a no tomar medidas de soberanía hasta que no se firmara un acuerdo formal entre ellas. Este conflicto se resolvió finalmente después de la guerra entre Colombia y Perú en 1933. </p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. </p>",
        comentario:
          "<p>La forma en que más crudamente​ expresa <i>La vorágine</i> el sentido de pertenencia ​a la patria es a través del abandono del Estado: una idea recurrente en la historia del país. Esta idea hace referencia al hecho de que, en áreas consideradas inhóspitas, el Estado ha adoptado, en distintos momentos, una estrategia de administración por delegación, poniendo su presencia y su autoridad en manos de terceros por medio de convenios con misiones religiosas, concesiones comerciales, educación contratada y asignación de baldíos, entre otras figuras.  </p><p>Este aparte del relato de Clemente Silva muestra cómo la Casa Arana y sus empleados consideraban que tenían derecho a comandar el ejército y los recursos estatales del Perú. Lo veían, además, como una iniciativa patriótica. Sin embargo, el Estado había sido el que había delimitado los territorios donde el capital jugaba con otras reglas. Este proceso se entendía como “hacer patria” o “traer la civilización”. Frente al escándalo que estalló cuando se conocieron pública e internacionalmente las atrocidades de la Casa Arana y la Peruvian Amazon Co., esa fue la defensa de los caucheros: justificaron sus acciones y sus tácticas de terror y de brutalidad como “la única manera de civilizar a los indios”. Según ellos, era la única manera de ejercer soberanía en estos lugares alejados, por lo que el trabajo de la compañía debía entenderse como una contribución a la patria para enaltecerla. En este aparte, Rivera expone los argumentos que el mismo Arana usó ante el Parlamento inglés en el juicio contra la empresa Peruvian Amazon Co., de la que él era gerente de operaciones. </p>",
        text: "<p>—¿Y quién creerá que este insignificante detalle le origina complicaciones a la empresa? Tiene tantas rémoras este negocio, exige tal patriotismo y perseverancia, que si el Gobierno nos desatiende quedarán sin soberanía estos grandes bosques, dentro del propio límite de la patria. Pues bien: ya su señoría nos hizo el honor de averiguar en cada cuadrilla cuáles son las violencias, los azotes, los suplicios a que sometemos las peonadas, según decir de nuestros vecinos, envidiosos y despechados, que buscan mil maneras de impedir que nuestra nación recupere sus territorios y que haya peruanos en estas lindes, para cuyo intento no faltan nunca ciertos escritorcillos asalariados. [...] </p><p>—Afortunadamente —agregó el bellaco—, el Perú atenderá nuestra iniciativa patriótica: le hemos pedido a la autoridad que nos militarice las cuadrillas, mediante la dirección de oficiales y sargentos, a quienes pagaremos con mano pródiga su permanencia en estos confines, con tal que sirvan a un mismo tiempo de fiscales para la empresa y de vigilantes en las estradas. De esta suerte el Gobierno tendrá soldados, los trabajadores garantías innegables y los empresarios estímulo, protección y paz. </p><p>El Visitador hizo un signo de complacencia (p. 131). </p>",
        desc: "Declaraciones de un empleado cauchero para desmentir el testimonio de Clemente Silva ante el Visitador. ",
        galeria: [
          {
            name: "4.1. Soldados colombianos listos para marchar al Campo Barco",
            type: "jpg",
            ficha: [
              "<p><i>Soldados colombianos listos para marchar al Campo Barco</i> ",
              "Foto anónima ",
              "En <i>Photographs taken by members of Carib Syndicate Ltd., Expedition Colombia, South America</i>, s. d. 1917 </p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, FT2092 ",
            ],
            text: "<p>Las organizaciones privadas a las que el Estado había delegado su presencia (órdenes religiosas y empresas comerciales, ente otras) obtenían no solo el derecho a las tierras (que en muchos casos deben ser “limpiadas” de indios) y la prerrogativa de explotar los recursos naturales, sino el monopolio de comercio en grandes regiones, todo a cambio de la construcción de infraestructura y la creación de sistemas de transporte. En algunos casos, debido a su mandato o a la escala de su operación adoptan, formal o informalmente, funciones de gobierno y de ordenamiento territorial. En estos casos, la fuerza pública sirve para defender los intereses de las empresas y corporaciones por encima de los intereses de los ciudadanos y los habitantes históricos de estas regiones. Es esta la presencia del Estado a la que aspiran los funcionarios de la Casa Arana en su intercambio con el visitador en <i>La vorágine</i>. </p>",
            link: "",
            btnText: "",
            img: "img/citas/patria/3/4.1.Patria.jpg",
            thumbnail: "img/citas/patria/3/4.1.Patria_Thumb.jpg",
          },
          {
            name: "4.2. Grupo de indios salvajes del Caquetá. En Gaspar de Pinell",
            type: "jpg",
            ficha: [
              "<p><i>Grupo de indios salvajes del Caquetá</i> ",
              "Foto anónima ",
              "En Gaspar de Pinell, <i>Excursión apostólica por los ríos Putumayo, San Miguel de Sucumbíos, Cuyabeno, Caquetá y Caguán</i>, Bogotá: Imprenta Nacional, 1928</p> ",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. </p>",
        comentario:
          "<p>En <i>Horizonte humano</i> (1986), Eduardo Neale Silva cuenta que, en una ocasión, Rivera, conversando con su amigo Quijano comparó la tramoya burocrática del país a una laguneta de aguas estancadas: </p><p>“Escucha y dime si esto no es nuestra política”. Y comenzó a recitar de memoria un pasaje de su novela: “La laguneta de aguas amarillosas estaba cubierta de hojarascas. Por entre ellas nadaban unas tortuguillas llamadas galápagos, asomando la cabeza rojiza; y aquí y allí los caimanejos nombrados cachirres exhibían sobre la nata del pozo los ojos sin párpados. Garzas meditabundas, sostenidas en un pie, con picotazos repentinos arrugaban la charca tristísima, cuyas evaporaciones maléficas flotaban bajo los árboles como velo mortuorio”. Tú comprenderás en qué consisten los picotazos de esas calculadoras garzas de nuestra vida nacional. (p. 343) </p><p>A pesar de su visión del Estado y sus funcionarios como representantes de la patria, su protagonista, Arturo Cova, manda su informe al cónsul en Manaos, confiando en su reacción. No pierde la fe y la esperanza en esa patria. </p>",
        text: "<p>¡Santa Isabel! En la agencia de los vapores dejé una carta para el cónsul. En ella invoco sus sentimientos humanitarios en alivio de mis compatriotas, víctimas del pillaje y la esclavitud, que gimen entre la selva, lejos de hogar y patria, mezclando al jugo del caucho su propia sangre. En ella me despido de lo que fui, de lo que anhelé, de lo que en otro ambiente pude haber sido. ¡Tengo el presentimiento de que mi senda toca a su fin, y, cual sordo zumbido de ramajes en la tormenta, percibo la amenaza de la vorágine! (p. 207) </p>",
        desc: "Últimas anotaciones realizadas por Arturo Cova en su manuscrito.",
        galeria: [
          {
            name: "5.1. Paseando por los riachuelos. A. Freitas",
            type: "jpg",
            ficha: [
              "<p><i>Paseando por los riachuelos</i></p> ",
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
    title: "Extravío",
    minititle: "el extravío",
    intro:
      "<p>En 1925, el Diccionario de la Real Academia de la Lengua Española definió <i>extraviar</i> como “poner una cosa en el lugar que no le corresponde, ignorar el paradero de algo o alguien, o dejar la forma de vida que se había empezado por otra (comúnmente, en mal sentido)” (p. 554). Los personajes de <i>La vorágine</i> pierden el camino y la noción de realidad.</p><p>José Eustasio Rivera retrató de manera impactante las regiones del Orinoco y el Amazonas. Si bien la violencia y explotación de estas zonas alcanzaban los titulares de prensa, pasaban sin más. Pero quizá porque Rivera sintetizó crudas realidades o porque muchos leyeron la novela como testimonio real, <i>La vorágine</i> repercutió en la discusión sobre estos territorios que representaba la mitad del país. Un siglo después, muchos de estos territorios continúan extraviados en los fenómenos que Rivera denunció.</p>",
    textoFinal:
      "<p>Un siglo después, con más actores y mayores consecuencias, muchos de estos territorios continúan perdidos en los fenómenos que <i>La vorágine</i> denunció. </p>",
    citas: [
      {
        id: "03",
        image: "img/citas/extravio/0/Extravio_Cita01.jpg",
        bg: "img/citas/extravio/0/Extravio_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        comentario:
          "<p><i>La vorágine</i> inicia con la huida de Alicia y Arturo Cova hacia Casanare. Ella quiere evitar el matrimonio con un viejo terrateniente y él, la cárcel a la que lo condenó el prometido traicionado. El temor los hace buscar la seguridad y libertad que promete el desierto. </p><p>Aquí, el desierto no solo es el paisaje árido que solemos imaginar, sino cualquier lugar despoblado. En la Nueva Granada colonial o en la Colombia republicana, el desierto eran los Llanos Orientales, la alta Guajira, el desierto de la Candelaria o las selvas de la Amazonía y la Orinoquía. </p><p>El desierto es un lugar para escapar y encontrarse al mismo tiempo: los esclavos huyen allí para encontrar la libertad, los bandoleros construyen un mundo fuera de la ley, los perseguidos políticos sobreviven y se reorganizan, los místicos buscan a Dios en la soledad, los misioneros hallan las almas que ellos creían perdidas, los menos favorecidos buscan la riqueza y los amantes evaden los compromisos para entregarse a su amor. En <i>La vorágine</i>, muchas clases de personas, como las anteriores, se encuentran en el desierto. Llegan para buscarse o buscando algo; pero, sin excepción, se extravían. </p>",
        text: "<p>El peón que envié a Bogotá a caza de noticias me las trajo inquietantes. El escándalo ardía, avivado por las murmuraciones de mis malquerientes, comentábase nuestra fuga y los periódicos usufructuaban el enredo. La carta del amigo a quien me dirigí pidiéndole su intervención, tenía este remate: “¡Los prenderán! No te queda más refugio que Casanare. ¿Quién podría imaginar que un hombre como tú busque el desierto?” (p. 17). </p>",
        desc: "Memorias de Arturo Cova sobre el inicio de la fuga que emprendió junto con Alicia. ",
        galeria: [
          {
            name: "1.1. Puerto de descanse. JMGA",
            type: "jpg",
            ficha: [
              "<p><i>Puerto de descanse en el río Caquetá, abajo de Mocoa</i> ",
              "José María Gutiérrez de Alba ",
              "En <i>Impresiones de un viaje a América</i>, tomo XII, 1875</p> ",
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
              "<p><i>El desierto prodigioso y el prodigio del desierto</i></p>",
              "Pedro Solís y Valenzuela ",
              "ca. 1650 ",
              "Colección Instituto Caro y Cuervo, MS001 ",
            ],
            text: "<p>La narrativa hispanoamericana nace con el desierto. <i>El desierto prodigioso y los prodigios del desierto</i>, escrito hacia 1650 en Santafé de Bogotá por el sacerdote e inquisidor Pedro de Solís y Valenzuela, es tal vez la primera obra literaria de tipo novelesco producida en las colonias castellanas. Tiene por escenario el desierto de la Candelaria y describe la cotidianidad de los anacoretas y ermitaños que hacían su vida allí. Es un texto interesante y exigente, lleno de historias dentro de historias, con piratas y libertinos; un viaje literal al infierno de la mano del mismísimo demonio, lleno de acertijos y laberintos. Son pruebas que los lectores deben descifrar para avanzar en la historia. Algo de eso también hay en <i>La vorágine</i>. </p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. </p>",
        comentario:
          "<p>El Pipa, un agente de extravío en <i>La vorágine</i>, aparece temprano en la novela, cuando intercepta a Cova y se presenta de manera altisonante: “Yo me llamo Pepe Morillo Nieto y por mal nombre me dicen Pipa’ […] conozco el llano y las caucherías del Amazonas. Mucho tigre y mucha culebra he matado con la ayuda de Dios” (p. 19). Desde entonces, entra y sale de la historia, siempre para conducir a Cova o para perderlo. </p><p>Su historia es patética: niño prófugo (¿gamín o despojado por alguna guerra civil?) que huyó a los llanos, donde encontró la violencia de los llaneros. Los indios nómadas, en cambio, lo acogieron. Don Rafo lo llama “zorro”. En muchas mitologías, el zorro es personaje que, con astucia y picardía, juega malas pasadas y se sale con la suya. Es la encarnación de la idea colonial y racista de la “malicia indígena”: tramposo y delincuente. </p><p>En contraste a la “malicia indígena”, la noción del “buen salvaje” valoraba a los indígenas como esencialmente buenos e inocentes. Sin embargo, ambas ideas implican un grado de deshumanización por simplificación: se reduce la complejidad individual a unos prejuicios sobre toda una comunidad. Históricamente, esto ha resultado en la explotación, tortura, desaparición y genocidio de diferentes comunidades humanas. </p>",
        text: "<p>—¿Con que el mentado Pipa es un zorro llanero? —pregunté a don Rafo. </p><p>―El más astuto de los salteadores: varias veces prófugo, tras curar sus fiebres en los presidios, vuelve con mayores arrestos a ejercer la piratería. Ha sido capitán de indios salvajes, sabe idiomas de varias tribus y es boga y vaquero (p. 22). </p>",
        desc: "Conversación entre Arturo Cova y don Rafo en Casanare. ",
        galeria: [
          {
            name: "2.1. Manuscrito La vorágine. José Eustasio Rivera",
            type: "jpg",
            ficha: [
              "<p><i>Manuscrito de <i>La vorágine</i></p>",
              "José Eustasio Rivera ",
              "1922-1924 ",
              "Biblioteca Nacional de Colombia, Sala Fondo Antiguo, RM617 ",
            ],
            text: "<p>En el manuscrito de <i>La Vorágine</i>, Pepe Morillo Nieto se llama simplemente José Nieto. Pero este no era cualquier nombre: José Nieto era el terrateniente de Orocué que había contratado a Rivera en 1918, a poco de graduarse como abogado especialista en liquidación de herencias, para litigar en su favor en un pleito de sucesión que involucraba al hato más grande de Casanare. En algún momento Rivera pasó a representar a la contraparte y se enemistó a muerte con Nieto; incluso, intercambiaron disparos a orillas del río Meta. Al crear al Pipa, Rivera se vengaba de su antiguo adversario llanero y, de paso, lo mostraba como un truhan escurridizo e inescrupuloso. En la versión manuscrita de <i>La vorágine</i> que se conserva en la Biblioteca Nacional de Colombia se ve el nombre original de José Nieto con el que Rivera presenta a El Pipa. </p>",
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
              "<p><i>El proceso del Putumayo y sus secretos inauditos</i></p> ",
              "Carlos A. Valcárcel ",
              "Lima: Imprenta Comercial, 1915 ",
              "Biblioteca Luis Ángel Arango, Colección Especial Remota, 343.185 V15p ",
            ],
            text: "<p>La Casa Arana, empresa cauchera peruana instalada en la región y promocionada como un modelo exitoso, cometió uno de los mayores genocidios en la Amazonía en el siglo XX. Si bien esta compañía tuvo una bonanza económica, su riqueza se sustentó en la explotación de la mano de obra indígena, llegando al límite de irracionalidad productiva y el extravío moral. </p><p>En 1912, Carlos A. Valcárcel, juez peruano, se encargó de investigar las denuncias sobre las continuas atrocidades perpetuadas contra la población indígena por empleados de la Casa Arana en sus estaciones del Putumayo (la mayoría, en territorio colombiano). En su devastador informe, cita a otro juez, Rómulo Paredes, también comisionado por el gobierno peruano, quien juzgó la psiquis de los agentes de Arana: </p><p>Estaban <i>enfermos de la imaginación</i>, y veían por todas partes ataques de los indios, conjuraciones, traiciones, sublevaciones, etc.; y para salvarse de esos cataclismos fantásticos, para defenderse y no sucumbir, mataban y mataban sin compasión indiadas enteras (pp. 356-357). </p><p>Como en muchos genocidios y desde la mirada de los victimarios, las víctimas son violentas, irracionales y propensas a la venganza. En consecuencia, la tortura y el asesinato se ven como medios necesarios para sostener el bienestar de los victimarios y los suyos, incluso cuando se aniquila a la mano de obra que los ha hecho ricos. </p>",
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
          "<p><i>José Eustasio Rivera</i>, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p> ",
        comentario:
          "<p>Algunos pasajes de <i>La vorágine</i> anticipan el realismo mágico que se popularizó 40 años después. Arturo Cova y Antonio Correa se encuentran en la mitad de la nada llanera con un par de personajes singulares, absolutamente fuera de lugar. Un juez, ridículamente guarecido bajo un parasol rojo y envuelto en una sábana enorme, seguido por su ayudante. Encarnan la paradójica situación de la justicia en la frontera, siempre extraviada, inoportuna, sucia, enferma y muchas veces grotesca. La respuesta del mulato también es elocuente y está llena de humor negro. “Ahora y siempre” hace parte de la oración del gloria, que está precedido por “como era en el principio”. Aquí demostraba el abogado José Eustasio Rivera su desencanto mayúsculo con el derecho.</p><p>Para crear a Hernández, Rivera se inspiró de cerca en el juez de Orocué, con quien sostuvo una ardua batalla legal por el pleito de Mata de Palma, y a quien acusó de ignorante y corrupto. Al juez de Orocué poco le entusiasmaban las demostraciones jurídicas de Rivera y al final lo amenazó con enviarlo al cepo. Rivera perdió el pleito y ganó una lección: en ciertos territorios, la ley se pierde en la voluntad de quien tenga el poder. </p>",
        text: "<p>Mientras Correa remudaba los bagajes, llegaron los sujetos desconocidos, saludándonos a grandes voces: </p><p>―¡Favor a la justicia, que anda extraviada! </p><p>―Ora y siempre ―respondió el mulato ingenuo. </p><p>—Muéstrennos el camino de Hato Grande. ¡Este doctor es juez de Orocué, y yo su secretario, por añadidura baquiano! </p><p>Al oírlo, le averigüé si ese funcionario era el que firmaba José Isabel Rincón Hernández; e hice esta pregunta porque de tal yo sabía que de peoncejo de carretera ascendió a músico de banda municipal y luego a juez de circuito de Casanare, donde sus abusos lo hacían célebre (p. 71). </p>",
        desc: "Diálogo entre el mulato Correa y Arturo Cova con el juez de Orocué y su secretario. ",
        galeria: [
          {
            name: "3.1. José Eustasio Rivera. Fotografía anónima",
            type: "jpg",
            ficha: [
              "<p><i>José Eustasio Rivera</i> ",
              "Fotografía anónima ",
              "En José Eustasio Rivera, <i>Tierra de promisión</i>, Bogotá: Ed. Arboleda & Valencia, 1921 </p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Misc. 262 ",
            ],
            text: "<p>Retrato de José Eustasio Rivera hacia 1920. Esta fotografía, anónima, acompaña la primera edición de <i>Tierra de promisión</i>, poemario con el que Rivera se consolidó como escritor. Su amigo Ricardo Charria Tobar describió muy bien a Rivera durante esta época. Sus palabras muestran cómo, en ciertos lugares, la justicia se extravía hasta que solo aplica la ley del más fuerte. Esta falta de justica es esencial en <i>La vorágine</i>. Charria Tobar recuerda cómo Rivera fue herido por José Nieto, terrateniente de Orocué, cuando litigó contra él en el proceso Mata de Palma y Mata de Vaquero: </p><p>Su lucha allí fue brava, y así me lo confirmó varias veces. En cierta ocasión, ya egresado de los Llanos […] se bajó los pantalones y me mostró el muslo derecho ―a la altura de la ingle― atravesado por un balazo, herida que afectaba el plano de los músculos superficiales, y cuyos orificios de entrada y salida presentaban cicatrices retráctiles. El lance, me lo refirió en ese mismo instante, tuvo por testigo el río Meta, un poco debajo de Orocué, donde ocasionalmente se avistaron en medio del anchuroso cauce, en sus respectivas canoas, él y su contendor, el mismísimo Nieto (Charria Tobar, 1963, pp. 98-99). </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4312/rec/2",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/extravio/2/3.1.Extravio.jpg",
            thumbnail: "img/citas/extravio/2/3.1.Extravio_Thumb.jpg",
          },
          {
            name: "3.2. Indio reducido de la nación Andaquí. Manuel María Paz",
            type: "jpg",
            ficha: [
              "<p><i>Indio reducido de la nación Andaquí. Miguel Mosquera, nacido en Caquetá, práctico e intérprete que acompañó la Comisión Corográfica en 1857: Territorio del Caquetá </i></p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. </p>",
        comentario:
          "<p>Mucho se habla de <i>La vorágine</i> como “novela de la selva”, pero no se explora realmente lo que esto implica. Habitualmente se toma como la representación de un ámbito hostil que vuelve salvajes y miserables a los protagonistas de la historia, para luego devorarlos. Pero la intención de José Eustasio Rivera era otra: quería insistir en que el llano y la selva ―o cualquier otro entorno susceptible de ser colonizado― responderán con natural violencia al ser invadidos y explotados sin consideración. </p><p>Tal vez esto resulte fácil de comprender hoy, después de un siglo de desertificación de lugares que parecían reservas inagotables de fauna y flora, violentadas por el calentamiento global y el consumo desaforados. En <i>La vorágine</i>, la selva extravía a quienes la violan. Y ese extravío no solo es perderse en la espesura, también es perderse en sí mismo, volverse loco y sucumbir a la violencia. </p><p>Hoy, la naturaleza no se concibe como una fuerza que debe ser dominada ni como una fuente inagotable de recursos. Humanidad y naturaleza son uno, la humanidad es parte y no contraparte. Desafortunadamente llegamos a esta conclusión, como los personajes de <i>La vorágine</i>, perdidos ante la amenaza de nuestra propia existencia. </p>",
        text: "<p>Nadie ha sabido cuál es la causa del misterio que nos trastorna cuando vagamos por la selva. Sin embargo, creo acertar en la explicación: cualquiera de estos árboles se amansaría, tornándose amistoso y hasta risueño, en un parque, en un camino, en una llanura, donde nadie lo sangrara ni lo persiguiera; mas aquí todos son perversos, o agresivos, o hipnotizantes. En estos silencios, bajo estas sombras, tienen su manera de combatirnos: algo nos asusta, algo nos crispa, algo nos oprime, y viene el mareo de las espesuras, y queremos huir y nos extraviamos, y por esta razón miles de caucheros no volvieron a salir nunca (pp. 149-150). </p>",
        desc: "Palabras de Clemente Silva a Arturo Cova, quien ha sentido el embrujamiento de la montaña.",
        galeria: [
          {
            name: "4.1. ¡Acude ahora ¡oh muerte! acude! Gustave Doré, LDC",
            type: "jpg",
            ficha: [
              "<p><i>¡Acude ahora ¡oh muerte! acude! gritaba el que corría delante</i> ",
              "Ilustración de Gustave Doré ",
              "En Dante Alighieri, <i>La divina comedia</i>, Barcelona: Montaner y Simón, 1871-1872 </p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 851.15 D49g ",
            ],
            text: "<p>Una posible influencia sobre Rivera para recrear literariamente la selva pudo haber sido <i>La divina comedia</i> de Dante Alighieri, poema compuesto en las primeras décadas del siglo XIV, en lo que hoy es Italia. En la parte dedicada al Infierno, en su XIII canto, Dante ingresa a una selva mortecina donde encuentra a los condenados por cometer suicidio y a los derrochadores convertidos en árboles marchitos y dolientes. En una buena medida, ese mismo es el infierno que quería mostrar Rivera: los suicidas serían aquellos llevados a la locura, que antes de acabar consigo mismos arrastran todo a su paso “sin dejar más que ruido y desolación”; y los derrochadores, todos aquellos que consumen lo que sea, hasta agotarlo físicamente. La selva los condena a sufrir lo que ella ha sufrido.</p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4330/rec/1",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/extravio/3/4.1.Extravio.jpg",
            thumbnail: "img/citas/extravio/3/4.1.Extravio_Thumb.jpg",
          },
          {
            name: "4.2. La Amazonia colombiana. Rafael Thomas",
            type: "jpg",
            ficha: [
              "<p><i>La Amazonia colombiana</i></p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. </p>",
        comentario:
          "<p>Es casi inevitable leer <i>La vorágine</i> sabiendo que a Arturo, Alicia, Rafael (su recién nacido sietemesino), Fidel y Griselda “los devoró la selva” o, como popularmente se conoce, “se los tragó la selva”. </p><p>Rivera incorporó en su relato la mitología de Occidente sobre la selva: su idea de un lugar “salvaje” (desierto, tundra, océano, estepa, pampa, etc.) por oposición a “la civilización”, ya que engulle como una genuina vorágine a quienes lo penetran para dominarlo. Inevitablemente, allí todos terminan devorándose entre sí, mientras el entorno los devora. </p><p>El testimonio de Arturo Cova muestra cómo, primero, va cediendo a la locura, se va volviendo inhumano e insensible, y a la postre, mata a Barrera de una manera que evoca una venganza caníbal. Con raras excepciones ―como Clemente Silva o el mulato Correa―, una y otra vez se cumplirá que los intrusos creen que la única forma de dominar el mundo salvaje es haciéndose más salvajes e irracionalmente crueles con la naturaleza y sus congéneres, sin importar si son propios o ajenos. Pero la crueldad que ven como salida es verdaderamente su perdición. Absortos en su locura, no pueden verlo. </p>",
        text: "<p>“Andamos perdidos”. Estas dos palabras, tan sencillas y tan comunes, hacen estallar, cuando se pronuncian entre los montes, un pavor que no es comparable ni al “sálvese quien pueda” de las derrotas. Por la mente de quien las escucha pasa la visión de un abismo antropófago, la selva misma, abierta ante el alma como una boca que se engulle los hombres a quienes el hambre y el desaliento le van colocando entre las mandíbulas (pp. 157-158).</p>",
        desc: "Anotaciones de Arturo Cova sobre el relato de Clemente Silva cuando se extravía en la selva. ",
        galeria: [
          {
            name: "5.1. Ice Scenes, Long Point. George Hathaway",
            type: "jpg",
            ficha: [
              "<p><i>Ice Scenes, Cape Cod, Winter of 1875, Fishing Fleet off Long Point </i></p>",
              "George Hathaway Nickerson ",
              "1850-1930 ",
              "Getty Museum ",
            ],
            text: "<p>Estas fotografías estereoscópicas tomadas en el extremo norte, casi polar, de los Estados Unidos, ilustran muy bien el mundo fantasmagórico de una novela que tiene mucho en común con <i>La vorágine: La narración de Arthur Gordon Pym</i>, escrita por Edgar Allan Poe entre 1837 y 1838. </p><p>Este es también el recuento de una delirante aventura hacia la región antártica, en la que hay canibalismo y una progresiva inmersión de quien escribe hacia la locura. Tanto más, es probablemente con <i>La vorágine</i> la única otra novela producida en Occidente en la que el manuscrito queda interrumpido porque sus narradores no logran sobrevivir al entorno. </p><p>Que se sepa, Rivera nunca conoció esta obra de Poe. El colombiano fue muy audaz en tomar esta decisión narrativa, que convertía una novela de aventuras selvática en una cruda y real tragedia. </p>",
            link: "",
            btnText: "",
            img: "img/citas/extravio/4/5.1.Extravio.jpg",
            thumbnail: "img/citas/extravio/4/5.1.Extravio_Thumb.jpg",
          },
          {
            name: "5.2. Manuscrito de La vorágine - f.84v. José Eustasio Rivera",
            type: "jpg",
            ficha: [
              "<p>Manuscrito de <i>La vorágine</i></p> ",
              "José Eustasio Rivera ",
              "1922-1924 ",
              "Biblioteca Nacional de Colombia, Sala Fondo Antiguo, RM617 ",
            ],
            text: "<p>En el manuscrito de <i>La Vorágine</i> conservado en la Biblioteca Nacional de Colombia se evidencia una metamorfosis elocuente conforme avanza la escritura. La elegante caligrafía del abogado y normalista José Eustasio Rivera ―seguramente acostumbrada a preparar largos memoriales fáciles de leer― se vuelve nerviosa, vehemente y apretada. Rivera corrigió con creciente frenesí lo consignado y cada vez con más violencia tacha y sobrescribe. En la penúltima página, el manuscrito parece proceder no de la mano de José Eustasio Rivera, sino del mismísimo Arturo Cova. Delirante y poseso, traza con rabia una vorágine para eliminar un aparte completo del texto. El fragmento suprimido corresponde a la escena siguiente a cuando un remolino se ha engullido a los indígenas maipureños y Franco lo llama “un desequilibrado tan impulsivo como teatral”.</p>",
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
      "<p>La lujuria no solo está relacionada con el placer carnal, también es el exceso de cualquier cosa. Y como <i>La vorágine</i> es una novela sobre el exceso en todas sus formas, abunda en pasajes lujuriosos. Narra escenas de voluptuosidad que no necesariamente tienen talante sexual: el llano y la selva ofrecen paisajes y momentos rebosantes en colores, sonidos, aromas y sensaciones. También hay personajes lujuriosos, que derrochan sin vergüenza y esclavizan a los demás, atrapándolos con la promesa de satisfacer sus deseos. La Violencia que gana el corazón de Arturo Cova en un juego de azar es la violencia de los excesos, una violencia lujuriosa. En este sentido, <i>La vorágine</i> adelanta una ácida y pesimista crítica a los excesos del capitalismo, así como a la soledad y destrucción que deja tras su paso.</p>",
    textoFinal:
      "<p>Al igual que <i>El gran Gatsby</i> de Scott Fitzgerald, otra novela casi contemporánea, La vorágine adelanta una ácida y pesimista crítica a los excesos del capitalismo, así como a la soledad y destrucción que deja tras su paso.</p>",
    citas: [
      {
        id: "06",
        image: "img/citas/lujuria/0/Lujuria_Cita01.jpg",
        bg: "img/citas/lujuria/0/Lujuria_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. </p>",
        comentario:
          "<p>Al poeta Cova o al poeta Rivera les vienen bien las descripciones pródigas y lujuriosas, bien sea del paisaje, las personas o las situaciones. Al contrario de hacerlos narradores poco fiables, esto les permite dar cuenta de un mundo cuya tragedia está signada justamente por la sobreabundancia: de vida y muerte, de productos aprovechables y ambición, de belleza y terror, y de seres de toda índole que encarnan y hacen parte de la exuberancia general.  </p><p>En <i>La vorágine</i>, los llanos se van transformando de paraíso a entrada del infierno. En esta sobrecogedora narración de un amanecer llanero, aún el destino se ve tan prometedor como el paisaje mismo. Rivera —o Cova— conjuraron con música, color y belleza la lujuria de una escena que hasta el día de hoy se repite diariamente.</p>",
        text: "<p>Y la aurora surgió ante nosotros: sin que advirtiéramos el momento preciso, empezó a flotar sobre los pajonales un vapor sonrosado que ondulaba en la atmósfera como ligera muselina. Las estrellas se adormecieron, y en la lontananza de ópalo, al nivel de la tierra, apareció un celaje de incendio, una pincelada violenta, un coágulo de rubí. Bajo la gloria del alba hendieron el aire los patos chillones, las garzas morosas como copos flotantes, los loros esmeraldinos de tembloroso vuelo, las guacamayas multicolores. Y de todas partes, del pajonal y del espacio, del estero y de la palmera, nacía un hálito jubiloso que era vida, era acento, claridad y palpitación. Mientras tanto, en el arrebol que abría su palio inconmensurable, dardeó el primer destello solar y, lentamente, el astro, inmenso como una cúpula, ante el asombro del toro y la fiera, rodó por las llanuras, enrojeciéndose antes de ascender al azul (p. 22). </p>",
        desc: "Impresiones de Arturo Cova de los Llanos Orientales colombianos. ",
        galeria: [
          {
            name: "1.1. Salida del sol en los llanos. JMGA",
            type: "jpg",
            ficha: [
              "<p><i>Salida del sol en los llanos</i>",
              "José María Gutiérrez de Alba",
              "En <i>Impresiones de un Viaje a América</i>, tomo V, 1870-1884</p>",
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
              "<p><i>La jangada</i>",
              "Ilustración de L. Benett",
              "En Jules Verne, <i>La jangada. Huit cents lieues sur l’Amazone</i>, París: Librairie Hachette, 1915</p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 843.8 V37j5",
            ],
            text: "<p>Nada alimentó tanto la sed de viajes y exploraciones en el siglo XIX occidental como las novelas de Julio Verne. Sabemos que el propio José Eustasio Rivera las leyó febrilmente en sus primeros años. Verne produjo un relato policíaco ambientado en la Amazonia, <i>La jangada</i> (1881) y una novela de aventuras en el Orinoco, <i>El soberbio Orinoco</i> (1898). Aunque sus tramas son muy distintas, en ambas, el entorno hace las veces de catalizador para revelar un misterio, descubrir las maravillas de la naturaleza y tener encuentros no siempre pacíficos con los indígenas.</p><p>Curiosamente, Verne nunca viajó a la mayoría de los destinos que describió con erudición. Se valió de innumerables fuentes de viajeros, como los franceses Jules Crevaux y Jean Chaffanjon. En ese sentido, a él también le caía eso de solo conocer “las soledades domesticadas”.</p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p> ",
        comentario:
          "<p>El relato de Arturo Cova deja ver una y otra vez la obsesión occidental, frecuente en las narraciones de viajes desde tiempos antiquísimos, por creer que los pueblos indígenas del mundo entero siempre han de recibir al hombre blanco como un dios venido de tierras lejanas o de otro mundo, por demás sexualmente apetecible. Para Occidente, la frontera siempre ha sido el lugar de consumación de las fantasías masculinas. </p><p>Ciertamente, en muchas y muy distintas circunstancias, para muchos pueblos indígenas ofrecer mujeres en matrimonio resultaba una estrategia para buscar establecer alianzas de parentesco con gente que llegaba con pólvora y mercancías, y que parecía ser muy poderosa. En realidad, en este aparte la descripción no nos deja saber si la actitud de las mujeres fue una aproximación erótica o un simple gesto de curiosidad. Con ingenio y algo de humor negro, Rivera deja abierta la ambigüedad. Para Cova, en cambio, es la oportunidad para mostrarse como un santo tentado en el desierto por la lujuria.</p>",
        text: "<p>Cuando me retiré a mi chinchorro, en la más completa desolación, siguieron mis pasos unas indias y se acurrucaron cerca de mí. Al principio conversaban a medio tono, pero más tarde atrevióse una a levantar la punta de mi mosquitero. Las otras, por sobre el hombro de su compañera, me atisbaban y sonreían. Cerrando los ojos, rechacé la provocación amorosa, con profundo deseo de libertarme de la lascivia y pedirle a la castidad su refugio tranquilo y vigorizante. (p. 94) </p>",
        desc: "Memorias de Arturo Cova sobre su estancia con el Pipa y sus compañeros en una comunidad indígena. ",
        galeria: [
          {
            name: "2.1. Por saciar los ardores. José Eustasio Rivera",
            type: "png",
            ficha: [
              "<p><i>Por saciar los ardores</i>",
              "En José Eustasio Rivera, <i>Tierra de promisión</i>, Bogotá: Arboleda & Valencia, 1921</p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Misceláneas n.º 262",
            ],
            text: "<p>El primer libro publicado por Rivera en 1921, con una sugestiva carátula modernista, incluía 55 sonetos impecables dedicados al paisaje colombiano y a sus habitantes humanos, animales y vegetales. <i>Tierra de promisión</i> lo consagró como un poeta de renombre en la generación conocida como “del Centenario”, y aunque ya algunos de estos poemas trataban la violencia de los elementos, los animales o las personas, nada anticipaba que su siguiente obra fuera a ser en prosa y tuviera la crudeza de <i>La vorágine</i>. </p><p><i>Por saciar los ardores…</i> es un soneto erótico que concluye con una violación. Los temas literarios aquí se acentúan: el indio alcahueta, el blanco libidinoso y el dinero u otras prebendas que ofrece para comprar una cópula forzada con una indígena virgen. Se trata de una escena habitual en la historia de cualquier colonización o enclave colonial. Pero Rivera parece haber querido mostrar su anverso cuando desarrolló en <i>La vorágine</i> el tema de la venganza implacable de lo femenino —que también es la selva “virgen”— ultrajada sobre su agresor. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4312/rec/2",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/lujuria/1/2.1.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/1/2.1.Lujuria_Thumb.jpg",
          },
          {
            name: "2.2. Mujeres huitotos en atuendo festivo. Thomas Whiffen. SP",
            type: "jpg",
            ficha: [
              "<p><i>Mujeres huitotos en atuendo festivo</i>",
              "Foto de Thomas William Whiffen",
              "En G. Sidney Paternoster, <i>The Lords of the Devil’s Paradise</i>, Londres: Stanley Paul, 1913</p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 985.063 P17l",
            ],
            text: "<p>El capitán Thomas William Whiffen fue un explorador y etnógrafo británico que visitó el Putumayo entre 1908 y 1909. Su libro <i>The North-West Amazons</i>, publicado en 1915, sigue siendo una referencia fundamental para la etnología de los pueblos amazónicos y desde hace poco cuenta con su primera traducción al castellano, publicada por la Academia Colombiana de Historia.</p><p>Esta fotografía muestra un grupo de niñas okaina (a veces se ha dicho que son bora), preparadas para un baile con vistosos y complejos motivos de pintura corporal. En cualquier caso, existen dudas sobre la autenticidad de los diseños, que pudieron haber sido concebidos al menos parcialmente por Whiffen para darle más exotismo a la composición. La explotación de la imagen del cuerpo indígena, muchas veces de sus niñas y sus mujeres, y muchas veces intervenido para hacerlo más exótico, no era una actividad rara.</p><p>El okaina es un grupo lingüístico perteneciente a la familia witoto. Aunque se halla emparentado, el grupo bora habla bora-miraña, relacionada a su vez con las lenguas miraña y muinane.</p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023. </p>",
        comentario:
          "<p>Uno de los pasajes más conmovedores de <i>La vorágine</i> describe la caravana de los <i>picures</i>: caucheros fugados de la estación donde han sido esclavizados a punta de deudas impagables y su propia ambición. Es un catálogo de ilusiones en vilo que tendrá un desenlace fatídico. Desde las ilusiones más básicas hasta las más nobles adquieren un cariz lujurioso: nacen de un deseo descomunal e imposible. </p><p>Este tipo de ilusiones tiene varios ejemplos reales durante la explotación cauchera. Antonio Vaca Díez, empresario cauchero, trajo desde Francia una casa prefabricada de hierro diseñada por Gustav Eiffel (creador de la Torre Eiffel) para ubicarla en plena selva, a orillas del río Mishagua. Proyecto imposible: la primera mitad de la casa (enviada en dos partes) se debió situar en la ciudad de Iquitos; la segunda, se vendió como chatarra. </p><p><i>La vorágine</i> sorprende por cómo Rivera incorporó ―muchas veces sin ser consciente de ello― temas míticos de la tradición occidental. Esta escena recuerda el motivo platónico y medieval de la <i>nave de los locos</i>. Originalmente una fábula sobre la mala forma de gobernar, vino a representar la locura ante la convicción de ir por buen camino cuando se avanza hacia el dolor y la muerte.</p>",
        text: "<p>Y allá van por entre la selva, con la ilusión de la libertad, llenos de risas y proyectos, adulando al guía y prometiéndole su amistad, su recuerdo, su gratitud. Lauro Coutinho ha cortado la hoja de una palma y la conduce en alto, como un pendón; Souza Machado no quiere abandonar su balón de goma, que pesa más de dieciocho kilos, con cuyo producto piensa adquirir durante dos noches las caricias de una mujer, que sea blanca y rubia y que trasciende a brandy y a rosas; el italiano Peggi habla de salir a cualquier ciudad para emplearse de cocinero en algún hotel donde abunden las sobras y las propinas; Coutinho, el mayor, quiere casarse con una moza que tenga rentas; el indio Venancio anhela dedicarse a labrar curiaras; Pedro Fajardo aspira a comprar un techo para hospedar a su madre ciega, don Clemente Silva sueña en hallar una sepultura. ¡Es la procesión de los infelices, cuyo camino parte de la miseria y llega hasta la muerte! (p. 156). </p>",
        desc: "Anotaciones de Arturo Cova sobre el extravío en la selva de Clemente Silva junto con otros caucheros. ",
        galeria: [
          {
            name: "3.1. Studebaker. El mejor automóvil para nuestros caminos. M.M. Navarrete",
            type: "jpg",
            ficha: [
              "<p><i>Studebaker. El mejor automóvil para nuestros caminos</i>",
              "Manuel M. Navarrete",
              "En <i>Renovación</i>, 28 de junio de 1927</p>",
              "Hemeroteca Luis Ángel Arango, 9292",
            ],
            text: "<p>Los automóviles van de la mano con la lujuria. Son objetos de deseo, ostentación y exuberancia. Y, obviamente, no puede haber carros sin llantas de caucho. Desde que se perfeccionó la técnica de vulcanización del caucho, haciéndolo estable, firme y resistente, cobró vuelo la industria automotriz. Esto, de hecho, fue uno de los grandes disparadores del consumo mundial de caucho, amén de su importancia en otros avances tecnológicos fundamentales para la era del <i>capital</i> y <i>el imperio</i>, como el revestimiento de los cables para el teléfono, el telégrafo y la electricidad ―incluyendo las sondas submarinas que conectaban distancias oceánicas―; la indumentaria militar, de trabajo y de exploración; las ruedas para otros tantos vehículos, como la bicicleta y el naciente aeroplano; e incluso en la fabricación de preservativos sexuales, cuya demanda incrementó conforme las urbes se atestaban y se ensanchaban las fronteras colonizadas del planeta. </p><p>En otras palabras, el caucho se hizo necesario para controlar, someter, recorrer y penetrar de muchas maneras. Esa historia de consumo, guerra y deseo potencialmente ilimitados alimentó a su vez el derroche y la miseria en el mundo cauchero amazónico y orinoquense. </p>",
            link: "",
            btnText: "",
            img: "img/citas/lujuria/2/3.1.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/2/3.1.Lujuria_Thumb.jpg",
          },
          {
            name: "3.2. Libro Azul. Great Britain y Casement",
            type: "jpg",
            ficha: [
              "<p><i>Correspondence respecting the treatment of British Colonial subjects and native indians employed in the Collection of Rubber in the Putumayo District</i></p>",
              "Gran Bretaña",
              "Londres: His Majesty's Stationery Office, 1912",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Misceláneas n.º 1438",
            ],
            text: "<p>La expresión de lujuria está asociada al poder, es decir, tiene la posibilidad de satisfacer sus deseos sin límites. En 1912, el cónsul británico Roger Casement presentó un informe decisivo para dar importancia internacional a las denuncias sobre las atrocidades cometidas en el Putumayo por la Casa Arana contra las poblaciones indígenas. Uno de los temas recurrentes en el informe es la descripción de los agentes de la Casa Arana como seres lujuriosos, sedientos de sangre, dinero y sexo; una suerte de legión de vampiros que acabarían con la población nativa. Por lo que sabemos de muchas otras fuentes contemporáneas o de novelas como <i>La vorágine</i>, Casement tenía razón.</p><p>Es irónico que Casement lograra tanto gracias a ser un agente imperial y que Gran Bretaña tuviera tanto interés en sacar al Perú (o sea, a Arana y compañía) del mercado internacional del caucho. Además, igual le guiaban ideas extremadamente europeas sobre los indios del Putumayo: fundamentalmente buenos y nobles salvajes, incapaces de albergar cualquier sentimiento de “lujuria, codicia y crueldad”, a los que había que proteger, cuidar y, por lo mismo, controlar para convertirles en “diligentes e inteligentes trabajadores”.</p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p> ",
        comentario:
          "<p>El pasaje de la indiecita Mapiripana narra la muerte de una indígena en la hoguera perpetrada por un misionero alcohólico y violador. Ella, ser sobrenatural y protectora de la selva, toma venganza torturándolo en una cueva con la misma violencia física y sexual. Con esta escena, Rivera cuestiona la violencia ejercida por miembros de la Iglesia, incluidos los de su época. Por ejemplo, fray Ezequiel Moreno, español fundador de misiones religiosas en Casanare, vicario apostólico, obispo de Pasto y beato de la Iglesia. Fray Ezequil Moreno fue un famoso propiciador de la violencia durante la Guerra de los Mil Días, predicando desde su púlpito que “el liberalismo es pecado”. </p><p>La narración del mito de Mapiripana se localiza justo en la mitad de <i>La vorágine</i>. Ubicándolo así en el texto, pareciera que Rivera hubiera querido sintetizar una idea fundamental de su obra: que la selva se venga de quien la ultraja sembrándole el terror, por ello la condena que le espeta Mapiripana al lúbrico misionero cuando este siente que ya no puede más con la tortura que le prodigan sus hijos: “¿Quién puede librar al hombre de sus propios remordimientos?”. Pero es también la oportunidad de vincular al relato al misionero: otro tipo social fundamental de la frontera, lleno de paradojas y de indudable influencia en la vida de los pueblos indígenas de buena parte de Colombia y, en general, del mundo colonial. </p><p>Nada parece indicar que la historia de Mapiripana perteneciera originalmente a alguna sociedad indígena de la región en que ocurre esta parte de la novela. No obstante, fue tal su poder que hoy varios resguardos indígenas de ese mismo territorio la reclaman como propia. Rivera no solo plasmó en <i>La vorágine</i> el gran mito en el que Occidente proyectó sus miedos en la frontera; también dio a luz a un eficaz mito indígena.</p>",
        text: "<p>—La indiecita Mapiripana es la sacerdotisa de los silencios, la celadora de manantiales y lagunas. […] En otros tiempos, vino a estas latitudes un misionero, que se emborrachaba con jugo de palmas y dormía en el arenal con indias impúberes. Como era enviado del cielo a derrotar la superstición, esperó que la indiecita bajara cierta noche de los remansos del Chupave, para enlazarla con el cordón del hábito y quemarla viva, como a las brujas. […] Con lujurioso afán empezó a seguirla, mas se le escapaba en las tinieblas; llamábala con premura, y el eco engañoso respondía. Así lo fue internando en las soledades hasta dar con una caverna donde lo tuvo preso muchos años. </p><p>Para castigarle el pecado de la lujuria, chupábale los labios hasta rendirlo, y el infeliz, perdiendo su sangre, cerraba los ojos para no verle el rostro, peludo como el de un mono orangután. Ella, a los pocos meses, quedó encinta y tuvo dos mellizos aborrecibles: un vampiro y una lechuza. Desesperado el misionero porque engendraba tales seres, se fugó de la cueva, pero sus propios hijos lo persiguieron, y de noche, cuando se escondía, lo sangraba el vampiro y la lucífuga lo reflejaba, encendiendo sus ojos parpadeantes, como lamparillas de vidrio verde (p. 103).</p>",
        desc: "Historia relatada por Helí Mesa ante el Pipa, Arturo Cova y sus acompañantes. ",
        galeria: [
          {
            name: "4.2. Recuerdos de un viaje. Pablo V. Gómez",
            type: "jpg",
            ficha: [
              "<p><i>Recuerdos de un viaje</i></p>",
              "Pablo V. Gómez",
              "Zapatoca: Tipografía El Progreso, 1913",
              "Biblioteca Nacional de Colombia, 918.617",
            ],
            text: "<p>El militar Pablo V. Gómez fue un misterioso y excéntrico personaje que en 1925 le escribió a José Eustasio Rivera felicitándolo por <i>La vorágine</i> y preguntándole si no se habría inspirado en su colorida vida como soldado en la Guerra de los Mil Días para ciertas escenas y comportamientos de Arturo Cova.</p><p>En sus <i>Recuerdos de un viaje</i>, Gómez se mofaba de los frailes misioneros extranjeros que “se dedicaron a reducir exclusivamente la tribu sáliba”, entre la cual tuvo “ocasión de ver… dos mujeres rubias de notable hermosura y algunos otros ejemplares” que no eran sino hijas e hijos de los religiosos del lugar. Lo cierto es que es un capítulo todavía poco estudiado de la historia del impacto de las misiones, el de la progenie que los religiosos dejaron en varios lugares.</p>",
            link: "",
            btnText: "",
            img: "img/citas/lujuria/3/4.2.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/3/4.2.Lujuria_Thumb.jpg",
          },
          {
            name: "4.1. Informes sobre las misiones. Hermanos Menores Capuchinos",
            type: "jpg",
            ficha: [
              "<p><i>Informes sobre las misiones del Caquetá, Putumayo, Goajira, Casanare, Meta, Vichada, Vaupés y Arauca</i></p>",
              "Hermanos Menores Capuchinos",
              "Bogotá: Imprenta Nacional, 1917",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, Misceláneas n.º 197",
            ],
            text: "<p>Durante buena parte de la historia republicana de Colombia, el Estado hizo presencia en los llamados “territorios nacionales” mediante la delegación a misiones católicas de distintas congregaciones, la gran mayoría españolas. El gobierno conservador de Rafael Núñez suscribió en 1887 un concordato con la Santa Sede, que entre otros muchos asuntos permitía que las comunidades religiosas hicieran las veces de agentes en representación de los intereses nacionales fronterizos. Es por esto que los informes de misiones abundan para este periodo, especialmente sobre las regiones abarcadas en <i>La vorágine</i>. </p><p>Uno de estos documentos es <i>Informes sobre las misiones del Caquetá, Putumayo, Goajira, Casanare, Meta, Vichada, Vaupés y Arauca</i> (Hermanos Menores Capuchinos, 1917) que, como en muchos otros, señala tanto perjuicios como beneficios de la institución. Las misiones ejercieron sistemas de control y explotación del trabajo de los pueblos indígenas que muchas veces rayaron en lo brutal. Pero, igualmente, les proveyeron de un refugio invaluable frente a los avances caucheros y de armas, como la lectura, la escritura y la aritmética, que resultaban fundamentales para sobrevivir a los embates del mundo blanco. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4317/rec/2",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/lujuria/3/4.1.Lujuria.jpg",
            thumbnail: "img/citas/lujuria/3/4.1.Lujuria_Thumb.jpg",
          },
        ],
      },
      {
        id: "37,38,42",
        image: "img/citas/lujuria/4/Lujuria_Cita05.jpg",
        bg: "img/citas/lujuria/4/Lujuria_Cita05_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p",
        comentario:
          "<p>Las tres citas anteriores constituyen la imagen de una mujer excepcional en <i>La vorágine</i>: la madona Zoraida Ayram. Es el objeto de deseo de Arturo Cova, así afirme que solo la ha seducido para llegar a Alicia. Pero lo cierto es que ella es quien lo seduce. Según <i>La vorágine</i>, aprovecha su voluptuosidad para atraer hombres que la provean de caucho, créditos favorables y protección. Como Venus, Dalila o las sirenas, seduce para robar la fuerza y destruir al protagonista. </p><p>Su sensualidad se ha vuelto extensión de la cárcel verde, de la selva. Cova ve a la madona como una vampiresa o una bruja. Es esclavo de su lujuria. Y como ocurre con la brujería, ha sido víctima de una fascinación ilusoria: Zoraida ahora le parece horrible, tenebrosa, sórdida y temible. Aunque logrará abandonarla, su suerte ya está echada: la selva terminará el trabajo y lo devorará. </p><p>Zoraida y Alicia se oponen: son pecado y virtud. Esta dicotomía deja ver la reducida mirada masculina de Cova: las mujeres se dividen en controlables o incontrolables, dominadas o dominadoras, y santas o brujas. </p>",
        text: [
          "<p>La madona asomó a la puerta, llenando con su figura quicio y dintel. Era una hembra adiposa y agigantada, redonda de pechos y caderas. Ojos claros, piel láctea, gesto vulgar. Con sus vestidos blancos y sus encajes tenía la apariencia de una cascada. Luengo collar de cuentas azules se descolgaba desde su seno, cual una madreselva sobre una sima. Sus brazos, resonantes por las pulseras y desnudos desde los hombros, eran pulposos y satinados como dos cojincillos para el placer, y en la enyodada mano tenía un tatuaje que representaba dos corazones atravesados por un puñal (p. 166). </p>",
          "<p>Observándola de reojo, comencé a sentir la agresividad que precede a los desafíos. ¡Mujer singular, mujer ambiciosa, mujer varonil! (p. 169) </p>",
          "<p>Y la odio y la detesto por calurosa, por mercenaria, por incitante, por sus pulpas tiranas, por sus senos trágicos. Hoy, como nunca, siento nostalgia de la mujer ideal y pura, cuyos brazos brinden serenidad por la inquietud, frescura para el ardor, olvido para los vicios y las pasiones (p. 189).</p>",
        ],
        desc: "Reflexiones de Arturo Cova sobre la madona Zoraida Ayram, luego de encontrarla en las barracas del Váquiro. ",
        galeria: [
          {
            name: "5.1. Mujer sentada en una ventana fumando. Anónimo",
            type: "tif",
            ficha: [
              "<p><i>Mujer sentada en una ventana fumando</i></p>",
              "Anónimo",
              "1904",
              "Biblioteca del Congreso de los Estados Unidos",
            ],
            text: "<p>Para exacerbar el carácter de la madona, José Eustasio Rivera hizo énfasis en su extranjería. Es “turca”, nativa de algún lugar del Medio Oriente. Por ende, está llena de los misterios y la fascinación que los lectores de la época suponían que tenían las mujeres del mundo de <i>Las mil y una noches</i>. Desde los tiempos de las cruzadas hasta mediados del siglo XX, el Oriente, cercano o lejano, fue imaginado como un lugar pletórico en sensualidad, en donde los rígidos códigos religiosos y el cubrimiento de los rostros tenía como contraparte una cultura y permisividad sexuales mucho más ricas y abiertas que las de Occidente. Por ejemplo, muchos hombres homosexuales de recursos viajaron a Oriente en busca de una libertad de la que no podían gozar en sus ciudades, salvo en ámbitos clandestinos. </p><p>Por su parte, el arte orientalista creó y difundió con gran éxito el estereotipo de la mujer turca, árabe o gitana, de desinhibido deseo sexual y voluptuosas formas, con las que siempre era peligroso involucrarse. Razón de más para que fueran un desafío a la masculinidad. Así lo asumió Arturo Cova.</p>",
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
              "En Samuel Holland Rous, <i>The Victrola Book of the Opera: Stories of the Operas</i>, New Jersey: Victor Talking Machine Company, 1919",
              "Biblioteca Luis Ángel Arango, Depósito D1, 782.1 H65v",
            ],
            text: "<p>Como a mucha gente de su generación y entorno, la música que más gustaba e impactaba a José Eustasio Rivera era la del compositor alemán Richard Wagner (1813-1883). Los dramas musicales de Wagner habían generado una verdadera revolución estética y política en el mundo occidental durante la segunda mitad del siglo XIX, y se hicieron inmensamente populares e influyentes a través de traducciones a muchos idiomas y las primeras grabaciones fonográficas. La edición preparada en 1908 por la Casa Editorial Maucci (Barcelona) permitió que las complejidades de sus libretos y tramas se hicieran comprensibles para el público hispanohablante.</p><p>La historia de Arturo Cova con Zoraida evoca inevitablemente una de las más célebres obras de Wagner, <i>Tannhäuser</i>, sobre un poeta medieval que se debate entre el amor puro y el amor terrenal y lujurioso por la diosa Venus, que le tiene preso en su montaña, ubicada en el inframundo. A Venus le canta Tannhäuser desesperado, lira en mano: <i>“No solo el placer es vecino de mi corazón. / En medio del goce, busco el dolor. / De tu reino debo huir. / ¡Oh reina, diosa, déjame ir!”</i>. El peligro a la mujer dueña de sí misma, de su cuerpo e inteligencia, es un tema recurrente en todas las artes de Occidente.</p>",
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
      "<p>Se ha dicho que <i>La vorágine</i> es la gran novela colombiana sobre la violencia. También lo es sobre el capitalismo, la selva y la frontera. Pero <i>Violencia</i> es la palabra que, desde un inicio, establece la clave de interpretación de la trama. En el manuscrito que preparó Rivera de la primera parte de <i>La vorágine</i> y en todas las ediciones que él supervisó, la violencia de la primera frase iba en mayúscula. No fue una elección gratuita: Rivera quería enfatizar que se trataba de una fuerza destructora total, activa en múltiples formas y escenarios. Violencias políticas, violencias contra poblaciones enteras, violencia de la expoliación capitalista de la selva, violencia de la codicia, violencia de la explotación de personas, violencia contra las mujeres, violencia contra sí mismo, violencia como motor del mal.</p>",
    textoFinal:
      "<p>Tanto en el manuscrito que preparó Rivera de la primera parte de <i>La vorágine<i> —hoy en día en la Biblioteca Nacional de Colombia—, como en todas las ediciones que él supervisó, la violencia de la famosa primera frase fue escrita con mayúscula. No fue una opción gratuita: quería enfatizar que se trataba de una fuerza destructora total, activa en múltiples formas y escenarios. Violencias políticas, violencias contra poblaciones enteras, violencia de la expoliación capitalista de la selva, violencia de la codicia, violencia de la explotación de personas, violencia contra las mujeres, violencia contra sí mismo, violencia como motor del mal. Una fuerza trasmitida por muchas sustancias: el alcohol, por supuesto, pero también por el dinero, el perfume y el caucho, que ultimadamente conllevan la destrucción y el triunfo de la muerte; a eso que de otra manera llamamos “terror”. </p>",
    citas: [
      {
        id: "15",
        image: "img/citas/violencia/0/Violencia_Cita01.jpg",
        bg: "img/citas/violencia/0/Violencia_Cita01_Fondo.jpg",
        pagina: "Rivera, 2023, pág. 13",
        refBibliografica:
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        comentario:
          "<p>Este y otros pasajes de <i>La vorágine</i> muestran la historia de violencia genocida con la cual los indios fueron expropiados para sembrar pastos, sostener ganado y expandir la industria ganadera en los llanos. La violencia de este proceso es la base de la cultura del hato. En la primera parte de la novela se describe esta guerra mediante la cual se buscaba “limpiar” de indios las tierras de los llanos para abrir espacio a la ganadería y los hatos de los colonos y hacendados. </p><p>Estas partidas de caza para masacrar a los indios, conocidas como <i>cuibiadas</i> o <i>guajibiadas</i>, se venían adelantando sistemáticamente en la zona desde mediados del siglo XIX. Muchos viajeros que pasaron por estas tierras las mencionaron con desaprobación, siendo el más influyente de ellos José Eustasio Rivera. Sin embargo, el desdén y la indiferencia de las autoridades locales y nacionales permitieron las masacres de indígenas continuara hasta la década de 1970, cuando fue abiertamente condenada. A pesar de ello, se siguen practicando hasta hoy. </p>",
        text: "<p>—Mama, jue que los indios le mataron a él la jamilia, y como puaquí no hay autoridá, tié uno que desenrearse solo. Ya ven lo que pasó en El Hatico: <i>macetearon</i> a tóos los racionales y toavía humean los tizones. Blanco, ¡hay que apandiyarnos pa echarles una buscáa! </p><p>—¡No, no! ¿Cazarlos como a fieras? Eso es inhumano. </p><p>—Pues lo que usté no haga contra eyos, eyos lo hacen contra usté (p. 46). </p>",
        desc: "Diálogo entre el mulato Correa y Arturo Cova en La Maporita. ",
        galeria: [
          {
            name: "1.1. Casanare. Jorge Brisson",
            type: "png",
            ficha: [
              "<p><i>Casanare</i></p>",
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
              "<p><i>Excursiones por Casanare</i></p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        comentario:
          "<p>Una de las formas de la violencia que aparece en <i>La vorágine</i> es la que surge de la relación de poder entre guardias y prisioneros, así estos hayan sido encarcelados de manera legal. Los prisioneros han sido engañados y secuestrados para venderlos como trabajadores en las caucherías por parte de los hombres de Barrera. </p><p>“Barrera había venido a llevar la gente para las caucherías de Vichada”, explicaba a don Rafo la niña Griselda, “Es la ocasión de mejorá: dan alimentación y cinco pesos por día [...] ha treído mercancías y <i>morrocotas</i> para dá y convidá [...] tá ofreciendo plata anticipáa” (p. 28). Este era uno de los aspectos más rentables del negocio: engañarlos y obligarlos con ilusiones anticipadas. “Si pudiera, no negociaría en goma sino en gomeros” (p. 194), pensó tiempo después el propio Arturo Cova. Y para ponerlos en marcha, los guardianes y verdugos tenían que ejercer control total sobre los cuerpos y las vidas de los esclavizados. La brutalidad y violencia de los capataces caucheros y de los carceleros de secuestrados se facilitan porque están al margen de la ley. O mejor: porque en la frontera, la ley es otra, la de ellos. </p>",
        text: "<p>En el bongo de las mujeres van los chicuelos, a pleno sol, mojándose las cabecitas para no morir carbonizados. Parten el alma con sus vagidos, tanto como las súplicas de las madres, que piden ramas para taparlos. El día que salimos al Orinoco, un niño de pechos lloraba de hambre. El Matacano, al verlo lleno de llagas por las picaduras de los zancudos, dijo que se trataba de la viruela, y, tomándolo de los pies, volteólo en el aire y lo echó a las ondas. Al punto, un caimán lo atravesó en la jeta, y, poniéndose a flote, buscó la ribera para tragárselo. La enloquecida madre se lanzó al agua y tuvo igual suerte que la criaturilla. Mientras los centinelas aplaudían la diversión, logré zafarme las ligaduras, y, rapándole el grazt al que estaba cerca, le hundí al Matacano la bayoneta entre los riñones, lo dejé clavado contra la borda, y, en presencia de todos, salté al río. </p><p>Los cocodrilos se entretuvieron con la mujer. Ningún disparo hizo blanco en mí. Dios premió mi venganza y aquí estoy (p. 100). </p>",
        desc: "Relato de Helí Mesa en el Vichada contado a Arturo Cova y sus compañeros.",
        galeria: [
          {
            name: "2.1. Collage_Secuestro",
            type: "jpg",
            ficha: ["Portadas de novelas del secuestro, collage  ", "Mottif."],
            text: "<p>Cuando apareció en 1924, la crítica no señaló el papel fundamental de <i>La vorágine</i> para abordar el fenómeno de la violencia. Colombia vivía por entonces del optimismo generado por la llamada “danza de los millones”, o sea el sustancial desembolso que habían hecho Estados Unidos en pago por la separación de Panamá, que, se esperaba, habría de estimular la economía nacional con la construcción de grandes proyectos de infraestructura y la generación de muchos empleos. </p><p>Solo después de la Violencia de las décadas de 1940 a 1960 y del larguísimo conflicto entre la guerrilla y los paramilitares, así como la guerra sucia muchas veces adelantada por los gobiernos y la injerencia del narcotráfico en todos los bandos y sus propias formas de terror, la crítica destacó la importancia del motivo de la violencia <i>La vorágine</i>. La figura de Clemente Silva se empezó a entender como el primer buscador de desaparecidos y la novela como la primera obra de la “literatura del secuestro”, género literario o periodístico creado a partir de los testimonios de civiles o militares secuestrados por la guerrilla, popular en las décadas de 1990 a 2010. </p>",
            link: "",
            btnText: "",
            img: "img/citas/violencia/1/2.1.Violencia.jpg",
            thumbnail: "img/citas/violencia/1/2.1.Violencia_Thumb.jpg",
          },
          {
            name: "2.2. La cabaña del tío Tom. Harriet Beecher Stowe",
            type: "jpg",
            ficha: [
              "<p><i>La cabaña del tío Tom</i></p> ",
              "Harriet Beecher Stowe ",
              "París: Imprenta Poussielgue, 1852 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 813.37 S76c13 ",
            ],
            text: "<p>En 1933, el misionero británico Kenneth G. Grubb escribió, en su paso por Colombia, que “<i>La vorágine</i>, en tanto que aboga por la causa del cauchero, puede ser considerada como <i>La cabaña del tío Tom</i> de la vida amazónica”. </p><p><i>La cabaña del tío Tom</i>, novela de la abolicionista estadounidense Harriet Beecher Stowe, publicada por primera vez en un volumen en 1852 (con una traducción al castellano que salió en el mismo año y que hace parte de los tesoros de la Biblioteca Luis Ángel Arango), causó enorme revuelo en torno a la esclavitud en los Estados Unidos. Fue una de las fuentes intelectuales que ampararon la causa antiesclavista que condujo a la sangrienta guerra de Secesión en esa nación (1861-1865). A pesar de que hoy se lee con otros ojos y se identifican fuertes elementos racistas en la escritura y la trama, para su época se consideró como una contundente obra de denuncia contra el sistema esclavista. </p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        comentario:
          "<p>Clemente Silva se refiere en este aparte a la visita que hizo a la región del Putumayo Eugène Robuchon, un explorador y fotógrafo francés, miembro de la Sociedad Geográfica de París. En 1904 fue comisionado por Arana Hermanos para que documentara las actividades de la empresa en el Putumayo y produjera una “imagen positiva” de esta como portadora de civilización y progreso para una región otrora salvaje. Robuchon, sin embargo, se les salió de las manos y se dedicó a documentar las distintas formas de castigo, vejación, tortura y violación a los que los capataces de la Casa Arana sometían a “sus gomeros”, que se conoce como <i>las atrocidades del Putumayo</i>. En La <i>vorágine</i> se da a entender que al francés (el Mosiú, como aparece en la novela) lo desaparecieron en la selva los hombres de Arana. Lo cierto es que nadie volvió a saber de su paradero luego de febrero de 1906. Por su parte, la gente de Arana difundió la versión de que se lo habían comido los caníbales. Como haya sido, a él también, de una manera u otra, lo devoró la selva. </p>",
        text: "<p>De allí en adelante, el lente fotográfico se dio a funcionar entre las peonadas, reproduciendo fases de la tortura, sin tregua ni disimulo, abochornando a los capataces, aunque mis advertencias no cesaban de predicarle al naturalista el grave peligro de que mis amos lo supieran. El sabio seguía impertérrito, fotografiando mutilaciones y cicatrices. “Estos crímenes, que avergüenzan a la especie humana”, solía decirme, “deben ser conocidos en todo el mundo para que los gobiernos se apresuren a remediarlos”. Envió notas a Londres, París y Lima, acompañando vistas de sus denuncias, y pasaron tiempos sin que se notara ningún remedio. Entonces decidió quejarse a los empresarios, adujo documentos y me envió con cartas a La Chorrera […]. </p><p>¡El infeliz francés no salió jamás! (pp. 129-130). </p>",
        desc: "Relato de Clemente Silva sobre el explorador y naturalista llamado el Mosiú. ",
        galeria: [
          {
            name: "3.1.  Un incidente en el Putumayo. Foto anónima",
            type: "png",
            ficha: [
              "<p><i>Un incidente en el Putumayo. Mujer indígena condenada a morir de hambre en el Alto Putumayo </i></p>",
              "Foto anónima ",
              "<p>En Walter E. Hardenburg, <i>The Putumayo, the Devil's Paradise: Travels in the Peruvian Amazon Region and an Account of the Atrocities Committed Upon the Indians Therein</i>, Londres: T. Fisher Unwin, 1912 </p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 985.0001 H17p ",
            ],
            text: "<p>Algunos autores contemporáneos a las atrocidades del Putumayo atribuyeron esta impresionante fotografía a la lente de Eugene Robuchon. Pero su origen y circunstancias son perfectamente inciertos hasta la fecha. Se hizo enormemente popular cuando apareció la serie de reportajes y el libro titulados <i>El Putumayo, el paraíso del diabl</i>, del estadounidense Walter Hardenburg, quien sostuvo haber sido prisionero de Arana en la región. Después de su publicación en Londres, la crónica destapó los crímenes y el genocidio del Putumayo ante la opinión internacional. </p><p>Hardenburg tomó la fotografía de la revista <i>Variedades</i> de Lima, en la que había aparecido junto a una noticia que atribuía la comisión de este delito a unos caucheros colombianos que vivían de esclavizar indígenas y asaltar a sus vecinos. Esta versión tampoco puede desestimarse. Aun así, la verdad es que ni siquiera es posible establecer si la fotografía fue tomada en el Putumayo, cuándo ocurrió o si se trata de un montaje hecho a partir de un cuerpo momificado o a partir del testimonio gráfico de alguna enfermedad devastadora. Tanto Arana como sus detractores se valieron continuamente de fotomontajes para sustentar la “veracidad” de sus afirmaciones. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4323/rec/2",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/violencia/2/3.1.Violencia.jpg",
            thumbnail: "img/citas/violencia/2/3.1.Violencia_Thumb.jpg",
          },
          {
            name: "3.2. La guarida de los asesinos. Ricardo Gómez Arturo",
            type: "jpg",
            ficha: [
              "<p><i>La guarida de los asesinos. Relato histórico de los crímenes del Putumayo </i></p>",
              "Ricardo Gómez Arturo ",
              "Pasto: Imp. La Cosmopolita, 1933 ",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 325.8667 G65g ",
            ],
            text: "<p>Ricardo Gómez Arturo (1892-1971) conoció de primera mano la región del Putumayo cuando, en 1912, bajó hasta allí a engancharse como cauchero. En 1924, el mismo año de publicación de <i>La vorágine</i>, apareció su libro testimonial <i>La guarida de los asesinos</i>, obra que si bien tuvo mucho menor impacto que la novela, fue de los primeros registros extensivos hechos de las atrocidades del Putumayo por alguien que hubiera trabajado para la Casa Arana y sido testigo directo de sus métodos de terror. </p><p>Esta edición de 1933, la tercera, es particularmente interesante. El dibujo de su cubierta presenta a un personaje que muy probablemente fuera el sanguinario Armando Normand, boliviano empleado de la Casa Arana y gerente de la estación adecuadamente llamada Matanzas. Cuando el gobierno peruano dictó órdenes de captura contra Normand y otros muchos caucheros, este logró escapar sin dejar rastro y sin que se le hubiera podido identificar en ninguna fotografía. Así pues, este puede ser el único retrato que poseamos del tenebroso personaje. </p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica<i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        comentario:
          "<p>Una de las formas de violencia a las que se refiere reiteradamente <i>La voragine</i> es la sexual. En particular, se hacen reiteradas referencias a la forma en que las mujeres indígenas son violadas, explotadas y cosificadas: “saldrá pronto una expedición a someter las tribus <i>andoques</i> y lleva encargo de recoger <i>guarichas</i> donde las haya. […] cualquier indio que tenga mujer o hija debe presentarla en este establecimiento para saber que se hace con ella” (p. 122). Y más adelante, “estas noches los siringueros han invadido el zarzo de las mujeres, para gozarlas como premio de su semana, según vieja costumbre. […] Los menos rijosos cambian su derecho a los impacientes por tabacos, por goma o por píldoras de quinina” (p. 190). Pero no solo se hace referencia a la violencia sexual contra las indígenas. En la novela se cuenta también la historia de Clarita, una llanera venezolana a quien rifaron en un juego de tresillo y ha sido continuamente degradada y usada a cambio de prometerle un retorno a su tierra, que nunca ocurrirá. </p>",
        text: "<p>Y cuando pasamos junto a un caney, cercano al río, vi un grupo de niñas, de ocho a trece años, sentadas en el suelo, en círculo triste. Vestían todas chingues mugrientos, terciados en forma de banda y suspendidos por sobre el hombro con un cordón, de suerte que les quedaban pecho y brazos desnudos. Una espulgaba a su compañera, que se le había dormido sobre las rodillas; otras preparaban un cigarrillo en una corteza de <i>tabarí</i>, fina como el papel; esta, de cuando en cuando, mordía con displicencia un caimito lechoso; aquella, de ojos estúpidos y greñas alborotadas, distraía el hambre de una criatura que le pataleaba en las piernas, metiéndole el meñique entre la boquita, a falta del pezón ya exhausto. ¡Nunca veré otro grupo de más infinita desolación! </p><p>—Don Clemente, ¿qué se quedan haciendo estas indiecitas mientras tornan sus padres a la barraca? </p><p>—Estas son las queridas de nuestros amos. Se las cambiaron a sus parientes por sal, por telas y cachivaches o las arrancaron de sus bohíos como impuesto de esclavitud. Ellas casi no han conocido la serena inocencia que la infancia respira, ni tuvieron otro juguete que el pesado tarro de cargar agua o el hermanito sobre el cuadril. ¡Cuán impuro fue el holocausto de su trágica doncellez! Antes de los diez años, son compelidas al lecho, como a un suplicio; y, descaderadas por sus patrones, crecen entecas, taciturnas, ¡hasta que un día sufren el espanto de sentirse madres, sin comprender la maternidad! (p. 174).</p>",
        desc: "Diálogo entre Arturo Cova y Clemente Silva en las barracas de Guaracú. ",
        galeria: [
          {
            name: "4.1. Huitotas civilizadas al servicio de La Chorrera, 1904. Anónima",
            type: "jpg",
            ficha: [
              "<p><i>Huitotas civilizadas al servicio de La Chorrera, 1904</i></p>",
              "Foto anónima ",
              "<p>En Julio César Arana, <i>Las cuestiones del Putumayo</i>, Barcelona: Imp. Viuda de Luis Tasso, 1913</p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 327.8600985 A71c",
            ],
            text: "<p>Uno de los primeros efectos de los escándalos del Putumayo fue desestabilizar las operaciones en el Reino Unido de la Peruvian Amazon Company, nombre con el cual se radicó en Londres la empresa sostenida por las distintas compañías de Julio César Arana y asociados. Para intentar contrarrestar el descrédito, varios miembros de esta organización, incluido el mismo Arana, publicaron en Barcelona sendos folletos de defensa, dando a entender que lo que estaba detrás de los escándalos eran los intereses comerciales y políticos de Colombia, Estados Unidos y el mismo Reino Unido. </p><p>En el folleto que el propio Arana firmó aparecieron muchas fotografías que daban a entender que la población indígena no solo estaba bien, sino incluso feliz en sus estaciones y agencias. La gran mayoría habían sido tomadas, o eso parece, por el explorador francés Eugène Robuchon. </p><p>Ciertamente, el pasaje de <i>La vorágine</i> en el que Arturo Cova describe al grupo de niñas indígenas esclavizadas ocurre hacia el Vichada, lejos de los dominios de Arana. Pero por todo lo que sabemos, la real situación de la mayoría de mujeres indígenas en los predios de Arana era igual o peor de lo que narraba Cova. </p>",
            link: "https://babel.banrepcultural.org/digital/collection/p17054coll10/id/4322/rec/2",
            btnText: "Abrir libro en Babel a través del vínculo",
            img: "img/citas/violencia/3/4.1.Violencia.jpg",
            thumbnail: "img/citas/violencia/3/4.1.Violencia_Thumb.jpg",
          },
          {
            name: "4.2. Grupo de mujeres indígenas del río Papunáua. Hamilton Rice",
            type: "jpg",
            ficha: [
              "<p><i>Grupo de mujeres indígenas del río Papunáua</i></p>",
              "Fueron las primeras en ser contactadas que podían hablar tupi-guaraní o la llamada lingoa-geral. Aparentemente, esta gente tiene más relación con los indios del extremo Isana superior y el Vaupés, que con los del Inírida. Probablemente son de ascendente arawak. ",
              "<p>En Hamilton Rice, <i>Further Explorations in the North-West Amazon Basin</i>, Londres: W. Clowes, 1914</p>",
              "Biblioteca Luis Ángel Arango, Sala de Libros Raros y Manuscritos, 918.6 R42f ",
            ],
            text: "<p>Las indígenas que aparecen en esta fotografía pueden ser muy parecidas a las descritas por Arturo Cova luego de su esclavitud. Pertenecieron a uno de los varios grupos que fueron sometidos por el terror cauchero, ya no de Arana, sino del coronel Tomás Funes, al que <i>La vorágine</i> dedica su tercera parte. </p><p>En la novela, Funes es descrito como “un sistema, un estado del alma, es la sed de oro, es la envidia sórdida” (p. 184). Se calcula que exterminó algunas poblaciones de la región del Vaupés, arrasando sus aldeas, esclavizándolos para la recolección forzada de goma y prestar servicios sexuales. </p><p>Quien tomó la foto fue Hamilton Rice, un médico estadounidense que viajó extensivamente por el Vaupés entre 1907 y 1913, justo por la época en que transcurre la trama de la novela. </p><p>La <i>lingua geral</i> (lengua general) amazónica es una lengua de la familia tupí que por su extensión territorial y en hablantes fue estimulada desde muy temprano por los misioneros y comerciantes de la región como lengua franca, útil para hacer transacciones y evangelizar a pueblos indígenas de muy distintos orígenes y con lenguas maternas muy distintas entre sí. </p>",
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
          "<p>José Eustasio Rivera, <i>La vorágine. Una edición cosmográfica</i>, edición crítica de Margarita Serje y Erna von der Walde, Bogotá: Ediciones Uniandes, 2023.</p>",
        comentario:
          "<p>Uno de los momentos más impresionantes de toda la trama de <i>La vorágine</i> es cuando Clemente Silva narra cómo vivió una invasión de hormigas tambochas. Con este nombre se conoce a varios tipos de hormigas venenosas y carnívoras que en ciertos picos de su población se desplazan al tiempo por millones, abriendo vastas avenidas por entre la selva y arrasando con lo que encuentren a su paso. </p><p>Rivera aprovechó la narración de este fenómeno para describir la violencia de la naturaleza. Una que ya no es la de la venganza de la selva contra quien la ultraja, sino que es propia, inevitable, porque es la fuerza de la muerte que periódicamente invade y acaba con el mundo de la vida. Y con esto, Rivera produjo una poderosísima metáfora de todo sobre lo que versaba su novela: migraciones aniquiladoras de miles de seres que acaban con lo que tienen por delante, como en cualquier fiebre extractiva, pero también de cómo estas implican el vertimiento de las fuerzas de la muerte sobre el mundo de la vida, que no es sino otra forma como podemos llamar al terror. </p>",
        text: "<p>Desde allí miraron pasar la primera ronda. A semejanza de las cenizas que a lo lejos lanzan las quemas, caían sobre la charca fugitivas tribus de cucarachas y coleópteros, mientras que las márgenes se poblaban de arácnidos y reptiles, obligando a los hombres a sacudir las aguas mefíticas para que no avanzaran en ellas. Un temblor continuo agitaba el suelo, cual si las hojarascas hirvieran solas. Por debajo de troncos y raíces avanzaba el tumulto de invasión, a tiempo que los árboles se cubrían de una mancha negra, como cáscara movediza, que iba ascendiendo implacablemente a afligir las ramas, a saquear los nidos, a colarse en los agujeros. Alguna comadreja desorbitada, algún lagarto moroso, alguna rata recién parida eran ansiadas presas de aquel ejército, que las descarnaba, entre chillidos, con una presteza de ácidos disolventes (pp. 160-161). </p>",
        desc: "Relato de Clemente Silva sobre la invasión de tambochas en la selva.",
        galeria: [
          {
            name: "5.1. La hoya del Amazonas. Daniel Ortega Ricaurte",
            type: "jpg",
            ficha: [
              "<p><i>La hoya del Amazonas</i> (t. 1, 2.ª ed.) </p>",
              "Daniel Ortega Ricaurte ",
              "Bogotá: Editorial Centro, 1940 ",
              "Biblioteca Luis Ángel Arango, Colección Especial Remota, 918.1 O77h2 ",
            ],
            text: "<p><i>La vorágine</i> se convirtió rápidamente en una fuente de información privilegiada para múltiples tipos de obras, como las de historia y diplomacia fronterizas, o de historia militar (aparece invocada en muchas memorias sobre el conflicto colombo-peruano de 1932 a 1934). Fue constantemente referida en la prensa sindical obrera como testimonio de la explotación de los trabajadores e, incluso, incidió en trabajos de divulgación científica como <i>La hoya del Amazonas</i>, del ingeniero y científico Daniel Ortega Ricaurte (1884-1960), quien conoció personalmente a José Eustasio Rivera en 1922, cuando hicieron parte de la Comisión de Asuntos Limítrofes con Venezuela. </p><p>En este fragmento de su gran obra (publicada originalmente por entregas, entre 1935 y 1941) se hace evidente cómo se replica la figura de las tambochas con visos terroríficos semejantes a los de <i>La vorágine</i>. Sin embargo, en la novela las tambochas no solo son un fenómeno natural; son otra versión del drama que una y otra vez define la trama, que es el de hordas de seres que destruyen la selva y no dejan en su camino “más que ruido y desolación”. </p><p>En algunas épocas del año, especialmente en los inviernos, emigra acosada por el agua: entonces es el pavor del colono, del cauchero y aun del salvaje. Marcha en billones como un ejército en fuga, desorientado, perdido, vuelve a la derecha e izquierda, corta caminos o los recorre. Al aproximarse a las habitaciones se oye, rompiendo el silencio augusto de la selva, su ruido en las hojas, en el suelo y en los barrancos; los animales se alarman, las dantas y los tigres, los venados y las serpientes, los zainos y huanganas corren espantados; los borugos se esconden en sus madrigueras, las aves vuelan en busca de pozos inaccesibles, y la fauna toda, asustada, dominada por terror pánico, huye, y a medida que el chillido áspero, arrastrado, dantesco, crece y resuena, corre alucinada y despavorida. Las cucarachas, las ratas, los gatos y los perros, los murciélagos y los mismos moradores desertan de las casas; las madres conducen a los hijos; la desbandada es rápida y completa [...]. </p><p>Estas hormigas son las mismas tambochas que describe Rivera con vivo colorido en las hermosas páginas de <i>La vorágine</i> (Tomo I, pp. 395-396). </p>",
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
            text: "<p>En 1924, el mismo año en que apareció en Bogotá La vorágine, fue publicada en París, en francés, la novela <i>En el corazón de la América virgen</i> del pastuso Julio Quiñones. Este escritor conoció de primera mano el Putumayo de la Casa Arana, primero como miembro de una expedición militar colombiana en esa región y luego como cauchero. En ese oficio se desempeñó entre 1907 y 1911, y en documentos judiciales, de hecho, se le invoca como testigo de algunas atrocidades perpetradas por agentes de Arana. </p><p>No obstante, en su novela ―una interesante historia sobre la vida indígena que demuestra que Quiñones conocía el idioma huitoto― solo se intuye la presencia destructora de los blancos. O, mejor, aparece en forma de metáforas, en particular como la amenaza del gran tigre destructor. Las tambochas, en cambio, no representan para los indígenas el mismo terror apocalíptico que para los blancos. Aunque temidas y respetadas, hacen parte de los ritmos y ciclos del mundo, y cuentan con atributos propios de los seres culturales. </p><p>En el corazón de la <i>América virgen</i> fue traducida al español por el propio Quiñones y en esta versión aparece el siguiente fragmento sobre las tambochas: </p><p>Atraviesan el bosque constantemente, sobre todo en los bajos, en manchas compactas hasta de tres metros de ancho por más de cien metros de largo, destruyendo todo a su paso [...]. Sin embargo, estas hormigas no atacan espontáneamente, y nunca se desvían de la dirección que llevan. Desde lejos se oye como un zumbido sordo cuando se acercan y todos los animales huyen en tropel [...]. Los indígenas aseguran que las hormigas y falenas se comunican por medio de la telepatía, y han constatado que cuando las avanzadas del cuerpo de las hormigas exploradoras encuentran frutas o animales muertos a grandes distancias del hormiguero, todas las demás hormigas que se quedan trabajando en sus viviendas, salen precipitadamente y acuden al lugar del hallazgo (traducción de Julio Quiñones, p. 122). </p>",
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
if (document.querySelector(".lanovela")) {
  // Seleccionamos el elemento que queremos observar
  const controlsElement = document.querySelector(".controls");

  if (window.outerWidth < 1079) {
    document.querySelector(".toolslanovela").classList.add("show");
    document.querySelector(".lanovela .controls").style.padding =
      "80px 20px 20px";
  } else {
    // Configuramos el Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Si el elemento está visible en el viewport
            document.querySelector(".toolslanovela").classList.remove("show");
          } else {
            document.querySelector(".toolslanovela").classList.add("show");
            // Si el elemento está fuera del viewport
          }
        });
      },
      {
        root: null, // Observa el viewport
        threshold: [0], // Se dispara cuando cualquier parte del elemento entra o sale del viewport
      }
    );
    if (controlsElement) {
      // Observamos el elemento .controls
      observer.observe(controlsElement);
    }
  }
  if (document.querySelector("#openLinks")) {
    document.querySelector("#openLinks").addEventListener("click", () => {
      document.querySelector(".linkslanovela").classList.toggle("active");
    });
  }
  document.querySelectorAll(".linkslanovela a").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector(".linkslanovela").classList.toggle("active");
    });
  });

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

  // Control de tema (color de fondo, texto y subrayado)
  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const bgColor = button.getAttribute("data-bg");
      const textColor = button.getAttribute("data-color");

      // Aplicar cambios de fondo y texto a todos los elementos dentro de .content
      document.querySelector("body").style.backgroundColor = bgColor;
      document.querySelector(".toolslanovela").style.backgroundColor = bgColor;
      document.querySelector(".linkslanovela").style.backgroundColor = bgColor;
      document.querySelectorAll(".linkslanovela a").forEach((link) => {
        link.style.color = textColor;
      });
      document.querySelector(".toolslanovela button").style.color = textColor;
      contentElements.forEach((element) => {
        element.style.color = textColor;
      });

      // Ajustar colores de subrayado en base al color de fondo
      adjustUnderlineColors(bgColor);
    });
  });

  // Función para ajustar los colores del subrayado según el fondo
  function adjustUnderlineColors(bgColor) {
    let underlineColors;

    // Definir colores de subrayado dependiendo del fondo
    if (bgColor === "#ffffff") {
      underlineColors = {
        color01: "#a49cd6", // Ajustado para fondo blanco
        color02: "#a1d6f8",
        color03: "#cce7d3",
        color04: "#e7efc1",
        color05: "#fff9b8",
        color06: "#ffb874", // Ajustado para fondo blanco
        color07: "#fba28c", // Ajustado para fondo blanco
      };
    } else if (bgColor === "#d0d0d0") {
      underlineColors = {
        color01: "#9f97d2", // Ajustado para fondo gris claro
        color02: "#98d0f5",
        color03: "#bfe0cc",
        color04: "#dde3ae",
        color05: "#f5ef9d",
        color06: "#ffb66e", // Ajustado para fondo gris claro
        color07: "#fba58c", // Ajustado para fondo gris claro
      };
    } else if (bgColor === "#646363") {
      underlineColors = {
        color01: "#877bc4", // Ajustado para fondo gris oscuro
        color02: "#83bfe9",
        color03: "#b5d9c3",
        color04: "#d1da97",
        color05: "#e9e289",
        color06: "#ffad63", // Ajustado para fondo gris oscuro
        color07: "#f79173", // Ajustado para fondo gris oscuro
      };
    } else if (bgColor === "#000000") {
      underlineColors = {
        color01: "#c7c4e2",
        color02: "#c7eafb",
        color03: "#cce7d3",
        color04: "#e7efc1",
        color05: "#fff9b8",
        color06: "#ffdaa2",
        color07: "#fcd3c1",
      };
    }

    // Aplicar los colores de subrayado ajustados a los elementos con clase .color01, .color02, etc.
    Object.keys(underlineColors).forEach((className) => {
      document.querySelectorAll(`.${className}`).forEach((element) => {
        element.style.backgroundColor = underlineColors[className];
      });
    });
  }

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
if (window.innerWidth > 768) {
  // Resolución de referencia
  const baseWidth = 1920;
  const baseHeight = 1080;

  // Dimensiones actuales de la ventana
  const currentWidth = window.outerWidth;
  const currentHeight = window.outerHeight;

  // Calcula el factor de escala basándote en la proporción de la resolución actual respecto a la base
  const scaleWidth = currentWidth / baseWidth;
  const scaleHeight = currentHeight / baseHeight;

  // Usa el factor de escala menor para mantener la proporción sin distorsionar el contenido
  const scale = Math.min(scaleWidth, scaleHeight);
  if (scale < 0.8) {
    document.body.classList.add("isMinus");
  }

  if (currentWidth !== baseWidth && !document.querySelector(".home")) {
    document.querySelector("main").style.zoom = scale;
  } else {
    if (document.querySelector(".content-main")) {
      document.querySelector(".content-main").style.zoom = scale;
    }
  }
}
let animating = false;
const totalTarjetas = 8; // Total incluyendo la instrucción
const duracionGiro = 8000; // Duración del giro en milisegundos
const ruleta = document.querySelector(".vertices");
if (document.querySelector(".home")) {
  const clicSound = document.getElementById("clicSound");
  clicSound.volume = 0.2;

  function seleccionarTarjetaAleatoria(e) {
    if (
      e.target.href == "javascript:seleccionarTarjetaAleatoria(event);" ||
      e.target == document.querySelector(".home .vertices")
    ) {
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

      ruleta.style.transform = `translate(-50%, -50%) rotate(${angle}deg) `;

      clicSound.play();

      // Detecta cuando la transición termina
      ruleta.addEventListener(
        "transitionend",
        () => {
          animating = false;
          ruleta.style.transition = "none"; // Remueve la transición para el próximo giro
          ruleta.style.transform = `translate(-50%, -50%) rotate(${
            angle % 360
          }deg) `; // Ajusta el ángulo final

          document.querySelector(
            ".selectedLink"
          ).href = `vertice.html?id=${verticesTxtReal[tarjetaSeleccionada]}`;
        },
        { once: true }
      );
    }
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
    callback({ isVertical, width: img.width, height: img.height });
  };

  img.onerror = function () {
    callback(null); // O algún valor que indique el error
  };
}

const maxChars = 250;
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 768 && document.querySelector(".home")) {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    window.addEventListener("scroll", (e) => {
      window.scrollTo(0, 0);
    });
  }
  const params = new URLSearchParams(window.location.search);
  // Obtén el valor del parámetro `query`
  const idVertice = params.get("id") || "";

  let infoVertice = vertices.find((vertice) => vertice.id == idVertice);

  if (
    document.querySelector(".vertice") &&
    !document.querySelector("body.search")
  ) {
    const introLimpio = infoVertice.intro;
    const finalLimpio = limpiarHTMLConSaltosDeLinea(infoVertice.textoFinal);
    document.querySelector(".vertice .intro .center h3").innerHTML =
      introLimpio;
    document.querySelector(".vertice .grid-container").innerHTML = "";
    let text, textoLimpio, template;
    infoVertice.citas.forEach((cita, index) => {
      if (Array.isArray(cita.text)) {
        text = cita.text.join("");
        if (text.length > maxChars) {
          // Recortar el texto hasta el límite de caracteres
          let truncatedText = text.slice(0, maxChars);

          // Buscar el último espacio antes del límite
          const lastSpaceIndex = truncatedText.lastIndexOf(" ");

          // Si hay un espacio, recortar hasta ese espacio para no cortar palabras
          if (lastSpaceIndex > 0) {
            truncatedText = truncatedText.slice(0, lastSpaceIndex);
          }

          // Añadir los "..."
          text = truncatedText + "...";
        }
        textoLimpio = limpiarHTMLConSaltosDeLinea(text);

        template = `<a href="cita.html?id=${idVertice}&cita=${index}" class="grid-item"><img src="${cita.image}" alt="${textoLimpio}"><p>${textoLimpio}</p></a>`;
      } else {
        text = cita.text;
        if (text.length > maxChars) {
          // Recortar el texto hasta el límite de caracteres
          let truncatedText = text.slice(0, maxChars);

          // Buscar el último espacio antes del límite
          const lastSpaceIndex = truncatedText.lastIndexOf(" ");

          // Si hay un espacio, recortar hasta ese espacio para no cortar palabras
          if (lastSpaceIndex > 0) {
            truncatedText = truncatedText.slice(0, lastSpaceIndex);
          }

          // Añadir los "..."
          text = truncatedText + "...";
        }
        textoLimpio = limpiarHTMLConSaltosDeLinea(text);
        template = `<a href="cita.html?id=${idVertice}&cita=${index}" class="grid-item"><img src="${cita.image}" alt="${textoLimpio}"><p>${textoLimpio}</p></a>`;
      }

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
    document.querySelector(
      ".subtitle"
    ).href = `interna_hoy.html?vertice=${infoVertice.id}&ciudad=`;
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
      let citaContainer = document.querySelector(".citaTxt");
      if (Array.isArray(citaActual.text)) {
        // Si es un arreglo, generamos varios enlaces <a>
        citaContainer.innerHTML = ""; // Limpiar el contenedor primero

        citaActual.text.forEach((subText, index) => {
          // Crear un nuevo enlace para cada elemento del arreglo
          let enlace = document.createElement("a");
          enlace.href = `lanovela.html#${citaActual.id.split(",")[index]}`; // Asignar el href
          enlace.innerHTML = subText; // Asignar el texto al enlace

          // Puedes agregar clases o atributos según sea necesario
          enlace.classList.add("linkItem");

          // Agregar el enlace al contenedor
          citaContainer.appendChild(enlace);

          // Si necesitas agregar un salto de línea o separador, puedes hacerlo aquí
          if (index < citaActual.text.length - 1) {
            citaContainer.appendChild(document.createElement("br")); // Salto de línea entre enlaces
          }
        });
      } else {
        // Si no es un arreglo, se asigna un solo enlace
        citaContainer.innerHTML = ""; // Limpiar el contenedor
        let enlace = document.createElement("a");
        enlace.href = `lanovela.html#${citaActual.id}`; // Asignar el href
        enlace.innerHTML = citaActual.text; // Asignar el texto al enlace
        citaContainer.appendChild(enlace); // Agregar el enlace al contenedor
      }
      document.querySelector(".descCita").innerHTML = citaActual.desc;
      document.querySelector(".copy").innerHTML = citaActual.refBibliografica;
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
        if (img != "") {
          // Uso de la función
          checkImageOrientation(img, function ({ isVertical }) {
            // Generar el contenido dinámico para el figcaption
            let contenidoFicha = ficha
              .map((item, index) => {
                return index === 0
                  ? `<p><strong>${item}</strong></p>`
                  : `<p>${item}</p>`;
              })
              .join("");
            let template = `<button type="button" onclick="setHeight(${index})" popovertarget="galitem-${index}"><figure><img  src="${thumbnail}" alt="${name}"><figcaption>${contenidoFicha}</figcaption></figure>
            </button><div popover="" id="galitem-${index}" class="popover" style="${
              isVertical ? `height: 100%";` : ``
            }"><div class="content"><button class="close" popovertarget="galitem-${index}" popovertargetaction="toggle" type="button"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_101_2)"><path d="M20.2114 16.4061L14.3046 10.4993L20.2114 4.59246C21.2622 3.5417 21.2622 1.83796 20.2114 0.787191C19.1607 -0.263577 17.4569 -0.263577 16.4061 0.787191L10.4993 6.694L4.59317 0.78783C3.5424 -0.262937 1.83866 -0.262937 0.787893 0.78783C-0.262875 1.8386 -0.262875 3.54234 0.787893 4.5931L6.6947 10.4999L0.787893 16.4061C-0.262875 17.4569 -0.262875 19.1606 0.787893 20.2114C1.83866 21.2621 3.5424 21.2621 4.59317 20.2114L10.5 14.3045L16.4068 20.2114C17.4576 21.2621 19.1613 21.2621 20.2121 20.2114C21.2628 19.1606 21.2628 17.4569 20.2121 16.4061H20.2114Z" fill="#665343"></path></g><defs><clipPath id="clip0_101_2"><rect width="21" height="21" fill="white"></rect></clipPath></defs></svg></button><div class="content-header">${
              link != ""
                ? `<a href="${link}" target="_blank" class="complete"><svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.37 7.2H1.62V33.08H23.37V7.2Z" fill="white"></path><path d="M29.15 27.65H7.4V1.78H21.25L29.15 9.7V27.65Z" fill="white"></path><path d="M30.45 8.95L22.09 0.45C21.81 0.16 21.42 0 21.02 0H7.17C6.34 0 5.67 0.67 5.67 1.5V5.67H1.5C0.67 5.67 0 6.34 0 7.17V33.6C0 34.43 0.67 35.1 1.5 35.1H23.71C24.54 35.1 25.21 34.43 25.21 33.6V29.43H29.38C30.21 29.43 30.88 28.76 30.88 27.93V10C30.88 9.61 30.73 9.23 30.45 8.95ZM22.52 5.17L25.8 8.51H22.52V5.17ZM22.21 32.1H3V8.67H5.67V27.93C5.67 28.76 6.34 29.43 7.17 29.43H22.21V32.1ZM8.67 26.43V3H19.52V10C19.52 10.83 20.19 11.5 21.02 11.5H27.88V26.43H8.67Z" fill="#665344"></path><path d="M23.85 14.72H12.69C11.86 14.72 11.19 15.39 11.19 16.22C11.19 17.05 11.86 17.72 12.69 17.72H23.85C24.68 17.72 25.35 17.05 25.35 16.22C25.35 15.39 24.68 14.72 23.85 14.72Z" fill="#665344"></path><path d="M23.85 20.39H12.69C11.86 20.39 11.19 21.06 11.19 21.89C11.19 22.72 11.86 23.39 12.69 23.39H23.85C24.68 23.39 25.35 22.72 25.35 21.89C25.35 21.06 24.68 20.39 23.85 20.39Z" fill="#665344"></path></svg>PARA VER EL RECURSO COMPLETO, HAGA CLIC AQUÍ.</a>`
                : ``
            }</div>
    <div class="content-body"><img src="${img}" alt="image" style="${
              isVertical
                ? `height: ${window.innerWidth > 1024 ? "100%" : "50%"};`
                : ``
            }"><div class="txt" style="${
              isVertical
                ? `height: ${window.innerWidth > 1024 ? "100%" : "50%"};`
                : ``
            }" ><div class="nomargin">${contenidoFicha}</div>${text}</div></div></div></div>`;
            // Guardar el template en el array en la posición correcta
            templates[index] = template;
            // Verificar si todas las imágenes han sido procesadas
            if (
              templates.filter(Boolean).length === citaActual.galeria.length
            ) {
              // Si todos los templates están listos, renderizarlos en la interfaz en orden
              document.querySelector(".galeria").innerHTML = templates.join("");
            }
          });
        }
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

if (document.querySelector(".lanovela")) {
  // Seleccionamos todos los elementos <p> con la clase 'Cuerpo_Texto_01'
  const paragraphs = document.querySelectorAll(".content [id]");

  // Iteramos sobre cada párrafo y le agregamos un evento de clic
  paragraphs.forEach((p) => {
    // Obtenemos el ID del párrafo clicado
    const paragraphId = p.getAttribute("id");

    // Buscamos en 'vertices' y sus 'citas' si alguna tiene un 'id' que coincida con el del párrafo
    vertices.forEach((vertice) => {
      const result = vertice.citas.find((cita) => cita.id === paragraphId);
      const citaIndex = vertice.citas.findIndex(
        (cita) => cita.id === paragraphId
      );

      if (result) {
        console.log({ result, paragraphId });
        p.addEventListener("click", () => {
          window.location.href = `cita.html?id=${vertice.id}&cita=${citaIndex}`;
        });
      }
    });
  });
}

function setHeight(index) {
  setTimeout(() => {
    document.querySelector(
      `.cita #galitem-${index} .content-body .txt`
    ).style.height =
      document.querySelector(`.cita #galitem-${index} img`).height + "px";
  }, 100);
}
let keywords = [
  "Abuso de drogas",
  "Abuso de menores",
  "Administración pública",
  "Belleza corporal",
  "Capitalismo ",
  "Ciberespacio",
  "Clase social",
  "Conflicto",
  "Conflicto armado",
  "Conflicto interno",
  "Conflictos ambientales",
  "Conflictos socioambientales",
  "Consumismo",
  "Cultura",
  "Cultura de masas",
  "Derechos humanos",
  "Diversidad",
  "Economía",
  "Educación",
  "Empatía",
  "Esclavitud",
  "Estado",
  "Espiritualidad",
  "Equidad",
  "Fantasía",
  "Gobierno",
  "Identidad",
  "Igualdad",
  "Ilusión",
  "Infraestructura",
  "Justicia",
  "Justicia social",
  "Juventud",
  "Medioambiente",
  "Migración",
  "Libertad",
  "Literatura de denuncia",
  "Memoria histórica",
  "Narcotráfico",
  "Paramilitarismo",
  "Periodo Colonial",
  "Política",
  "Política exterior",
  "Problemas ambientales",
  "Problemas sociales",
  "Protesta",
  "Pueblos indígenas",
  "Recursos económicos",
  "Recursos naturales",
  "Recursos públicos",
  "Redes sociales",
  "Resolución de conflictos",
  "Riqueza económica",
  "Salud mental",
  "Símbolos patrios",
  "Segregación",
  "Seguridad",
  "Selva tropical",
  "Soberanía",
  "Trabajo forzoso",
  "Valentía",
  "Violencia de género",
];
let metodologia = {
  florencia: [
    {
      title: "¿Qué me hace sentir la violencia en La vorágine?",
      autor: "Leidy, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela:'Me hace sentir un poco triste porque puedo ver lo inhumano que puede llegar a ser el ser humano. En este apartado podemos ver cómo matan por tierras; aquí las tierras de los indios fueron expropiadas para sembrar pasto y sostener ganado, todo esto con el fin de expandir el negocio de la ganadería. Matan por tierras y para poder vivir. Leidy, 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes, pp. 129-130",
      fecha: "2024/07/12",
      categoria: "Violencia",
      keywords:
        "Conflictos socioambientales; Pueblos indígenas; Problemas sociales; Riqueza económica; Segregación",
      file: "Florencia_Leidy.JPG",
    },
    {
      title: "¿Qué me hace sentir la violencia en La vorágine?",
      autor: "Juan, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela: 'Me hace sentir un pesar muy grande con las súplicas de las madres y ver cómo pueden morir de hambre y ver lo que ellas harían por sus hijos. Y también me siento muy enojado por ver cómo son capaces de tirar a un niño a los cocodrilos y ver cómo su madre rompiendo en llanto se lanza ante él.  Juan, 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes, p. 100",
      fecha: "2024/07/12",
      categoria: "Violencia",
      keywords: "Problemas sociales; Segregación; Violencia de género",
      file: "Florencia_Juan.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la violencia en La vorágine con nuestra situación actual?",
      autor: "Sofia, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela: 'En mi opinión el hecho de adentrarse a la selva amazónica sigue siendo muy difícil poder sobrevivir y más ahora que las personas no están enseñadas a vivir rodeadas de animales o selva tan salvaje, y las pocas personas que logran vivir son aquellas que tienen conocimiento de aquella o tienen espíritu de sobrevivencia.  Sofia, 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes, pp. 129-130",
      fecha: "2024/07/12",
      categoria: "Violencia",
      keywords: "Diversidad; Medioambiente; Selva tropical; Soberanía",
      file: "Florencia_Sofia.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la violencia en La vorágine con nuestra situación actual?",
      autor: "Dayanna, 14 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela: 'La violencia de La Vorágine se relaciona con nuestros matones actuales, como los narcos, los militares, la guerrilla y etc. Las épocas cambiaron, pero sigue siendo perturbador y aterradoras, los matones matan, secuestran, estafan y entre otras.  Dayanna, 14 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes, p. 100",
      fecha: "2024/07/12",
      categoria: "Violencia",
      keywords:
        "Conflicto armado; Estado; Memoria histórica; Narcotráfico; Problemas sociales",
      file: "Florencia_Dayanna_3.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la codicia en La vorágine con nuestra situación actual?",
      autor: "Dayanna, 14 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de codicia en la novela: 'La codicia se relaciona con un tema relevante y una amenaza para la justicia social y ambiental, recordándonos la importancia de luchar por un equilibrio entre el desarrollo y la sostenibilidad, así como para la justicia y los derechos humanos.  Dayanna, 14 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/08",
      categoria: "Codicia",
      keywords:
        "Conflictos socioambientales; Derechos humanos; Economía, Justicia; Problemas sociales",
      file: "Florencia_Dayanna_1.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la patria en La vorágine con nuestra situación actual?",
      autor: "Dayanna, 14 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela: 'Lo que yo pienso es que es nuestra situación actual puede ser bastante profunda y multifacética. La patria  puede evocar sentimientos de identidad, pertenencia y orgullo, pero también puede estar ligada a la crítica social y política. Dayanna, 14 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/08",
      categoria: "Patria",
      keywords: "Estado; Identidad; Justicia; Protesta; Soberanía",
      file: "Florencia_Dayanna_2.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la lujuria en La vorágine con nuestra situación actual?",
      autor: "Parra, 17 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela: 'Se relaciona con el deseo de tener a alguna mujer, especialmente la más buena, al igual que los carros, motos o cosas materiales. Parra, 17 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes, p. 156",
      fecha: "2024/08/16",
      categoria: "Lujuria",
      keywords:
        "Capitalismo; Belleza corporal; Problemas sociales; Riqueza económica; Violencia de género",
      file: "Florencia_Parra.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de lujuria?",
      autor: "Karol, 17 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela: 'Uno de los nuevos caminos que debemos aprender a enseñar de manera correcta es el cuerpo humano para que más adelante se respeten ellos mismos y respeten los demás y que el cuerpo ajeno no se toca, sin consentimiento.  Karol, 17 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes, p. 103",
      fecha: "2024/08/16",
      categoria: "Lujuria",
      keywords: "Educación; Equidad; Identidad; Violencia de género",
      file: "Florencia_Karol.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de lujuria?",
      autor: "Laura, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela: 'Es complicado, ya que hoy en día la lujuria está super presente, es difícil deshacerse de ella, ya que gracias a la lujuria existe la población. Pero si hay que establecer leyes contra la pedofilia y páginas que incitan al morbo.  Laura P., 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes, p. 94",
      fecha: "2024/08/16",
      categoria: "Lujuria",
      keywords:
        "Ciberespacio; Consumismo; Cultura de masas; Violencia de género",
      file: "Florencia_Laura. JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de patria?",
      autor: "Ana, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela: 'Debemos luchar por nuestros derechos y hacer que personas, como el gobierno, debieran dar mejores recursos a todas las ciudades, por igual.  Es importante saber de dónde venimos, sentirnos orgullosos y no tener vergüenza por ser de un pueblo apartado.  Ana, 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes, p. 35",
      fecha: "2024/07/15",
      categoria: "Patria",
      keywords:
        "Derechos humanos; Diversidad; Igualdad; Protesta; Recursos económicos",
      file: "Florencia_Ana.JPG",
    },
  ],
  leticia: [
    {
      title: "¿Qué me hace sentir el extravío en La vorágine?",
      autor: "Estefanía, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela:  '(Dibujo)   “Cada gota de caucho robada, la selva la cobra con sangre”   Estefanía, 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/13",
      categoria: "Extravío",
      keywords:
        "Conflictos socioambientales; Medioambiente; Recursos naturales",
      file: "Leticia_Estefania_1.JPG",
    },
    {
      title: "¿Qué me hace sentir el extravío en La vorágine?",
      autor: "Ana Sofía, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela:  'Selva (paraíso) y selva (boca).   (Dibujo)   Viviendo al lado (o en) la misma selva, es difícil considerarla como algo peligroso. ¿Cómo vas a pensar que tu casa es peligrosa? Sin embargo, una vez yo misma me perdí en la selva y entiendo bien cómo se siente. Cualquier dirección se ve desconocida, potencialmente amenazante y lo peor de todo es no saber dónde estás, ni a qué lugar estas yendo.   La mayor parte del tiempo la selva es verde y dorada con el sol, pero al entrar es oscura y fría. Todo lo bueno (sol, aves y micos… y color) está en la copa de los árboles que crecen peleando por luz.   Ana Sofía,   15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/13",
      categoria: "Extravío",
      keywords: "Medioambiente; Selva tropical",
      file: "Leticia_AnaSofia_5.JPG",
    },
    {
      title: "¿Qué me hace sentir el extravío en La vorágine?",
      autor: "Devi, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela:  'El extravió en la Vorágine es justo para los caucheros, tanto daño, sufrimiento, dolor, maltrato y violencia merece ser pagado. Y más cuando el afectado es un lugar de paz, tranquilidad y sobre todo lleno de memorias, historia e identidad cultural.   La selva en la región Amazónica fue arrebatada por personas que se dejaron llevar por la avaricia, el dinero y el poder, tal vez por eso su castigo fue perderse en su propio juego.   Devi – 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/13",
      categoria: "Extravío",
      keywords:
        "Conflictos socioambientales; Diversidad; Literatura de denuncia; Riqueza económica; Selva tropical",
      file: "Leticia_Devi_2.JPG",
    },
    {
      title: "¿Qué me hace sentir el extravío en La vorágine?",
      autor: "Nicoll, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela:  'Siento sorpresa al leer lo que la selva es capaz de hacer a quienes acceden a ella de manera brusca, el cómo se le da importancia a sus reacciones ante algo, pues mayormente se ve lo negativo que le hace a las personas, pero no nos ponemos a analizar por qué sucedió eso.   El término extravío expresado en estos fragmentos me parece muy interesante, pues no lo expresan únicamente como alguien que entra a la selva y se pierde, por el contrario, nos dice a qué se debe y qué lo ocasionó, mostrando que el extravío no es únicamente por ingresar a la selva, sino que es por abusar y aprovecharse de lo que te brinda ésta, haciendo que la selva te responda de manera negativa.   Nicoll / 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/13",
      categoria: "Extravío",
      keywords:
        "Conflictos socioambientales; Literatura de dencuncia; Recursos naturales; Selva tropical",
      file: "Leticia_Nicoll.JPG",
    },
    {
      title: "¿Qué me hacen sentir los espejismos en La vorágine?",
      autor: "Lucero, 17 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de espejismos en la novela:  'Espejismo   (Dibujo)   Momentos engañosos y fantasiosos.   Lucero, 17 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/15",
      categoria: "Espejismos",
      keywords: "Fantasía; Ilusión",
      file: "Leticia_Lucero_1.JPG",
    },
    {
      title: "¿Qué me hace sentir la violencia en La vorágine?",
      autor: "María, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela:  'El cómo se silencian los problemas, la facilidad de cómo desechar a una persona y la poca consideración hacía el círculo familiar de la víctima, me genera un disgusto hacia esas acciones; cómo somos desechables para las personas con poder y cuando les generamos un problema, menos es el sentimiento hacia la vida ajena.   María, 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/20",
      categoria: "Violencia",
      keywords:
        "Capitalismo; Clase social; Problemas sociales; Riqueza económica; Segregación",
      file: "Leticia_Maria_1.JPG",
    },
    {
      title: "¿Qué me hace sentir la violencia en La vorágine?",
      autor: "Ana Sofia, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela:  'No hay cosa más triste que niñas despojadas de su inocencia y abandonadas en una maternidad que no terminan de comprender, por culpa de los hombres cuyo deseo asqueroso no es atraído ni siquiera por rostros o senos desarrollados, sino por malicia y un sentido de propiedad o superioridad que les hacer creer que tienen el derecho de tomar sin consentimiento algo que es puro y tierno.   Pero, así como tenían el valor de arrebatarles eso a las niñas, a ninguno de ellos se le pasó por la cabeza voltear la mirada a los bebés, cuyos padres podrían haber sido cualquiera de ellos, pero ahora serán bebés sin padre y como madre, una niña que estaba exhausta y adolorida.   (Dibujo)   Ana Sofía, 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/20",
      categoria: "Violencia",
      keywords:
        "Abuso de menores; Problemas sociales; Violencia de género; Segregación",
      file: "Leticia_AnaSofia_1.JPG",
    },
    {
      title: "¿Qué me hace sentir la violencia en La vorágine?",
      autor: "Sergio Alejandro, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela:  'En la cuarta cita del vértice de la violencia se puede notar cómo niñas de 8 a 13 años sufrían en ser cambiadas por sal, telas y cachivaches, además sufren el no haber conocido la serena inocencia que la infancia respira. Tuvieron que pasar por la esclavitud cargando tarros de agua y cargar a sus hermanos sobre el cuadril.   Estas niñas arrancadas de sus bohíos para sufrir el trágico e impuro holocausto de su fatal doncellez. Antes de los 10 años son condenadas al lecho, que es un suplicio del cual nunca van a poder salir son descaderadas, manchadas por la cruda vida que les espera, volviéndose almas en pena que fueron manchadas por las oscuras manos, les dejan manchas imborrables en su cuerpo, manchas de valor y vergüenza.  Y tener que volverse madres siendo niñas, sufren el trauma de ser madres sin saber qué hacer.   (Dibujo)   Sergio Alejandro, 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/20",
      categoria: "Violencia",
      keywords:
        "Abuso de menores; Problemas sociales; Violencia de género; Segregación",
      file: "Leticia_SergioAlejandro_1.JPG",
    },
    {
      title: "¿Qué me hace sentir la violencia en La vorágine?",
      autor: "Sergio Alejandro, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela:  '“Andamos perdidos”: esta frase refleja cómo dos palabras describen cómo el pavor no se compara con el famoso “sálvese quien pueda”, porque pronunciarla en los montes hace que la selva parezca un abismo antropófago, abierto al alma como una boca que engulle a los hombres perdidos en la locura o descrito en el libro como “los devoró la selva”.   Sergio Alejandro, 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/21",
      categoria: "Violencia",
      keywords: "Literatura de denuncia; Selva tropical",
      file: "Leticia_SergioAlejandro_2.JPG",
    },
    {
      title: "¿Qué me hace sentir la violencia en La vorágine?",
      autor: "Jaime Andrés, 18 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela:  'La violencia en la Vorágine me hizo sentir como empatía, una nueva forma de ver al pueblo indígena; también sobre el cómo el trabajador puede tener como una mejor oportunidad de trabajo mejorando su vida.   La muerte de los niños así como algo muy fuerte.   (Dibujo)   Jaime Andrés.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/14",
      categoria: "Violencia",
      keywords:
        "Abuso de menores; Empatía; Problemas sociales; Pueblos indígenas",
      file: "Leticia_JaimeAndres_1.JPG",
    },
    {
      title: "¿Qué me hace sentir el azar en La vorágine?",
      autor: "Hellen, 18 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela:  '(Dibujo)   Hellen Sandoval / 18 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/25",
      categoria: "Azar",
      keywords: "Conflictos socioambientales; Ilusión; Selva tropical",
      file: "Leticia_Hellen_1.JPG",
    },
    {
      title: "¿Qué me hace sentir la codicia en La vorágine?",
      autor: "Michelle, 26 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de codicia en la novela:  'La codicia en La vorágine:  Todos los seres humanos por naturaleza llevamos la maldad en las venas. Con el pasar del tiempo y la educación, podemos desarrollarnos sanamente para tener una mejor convivencia social.   Todos tenemos diferentes puntos de vista frente a las situaciones del mundo, pero nadie está exento a sufrir las consecuencias de los actos que han marcado, marcan o marcaran las vivencias económicas, sociales, etc.   Michelle, 26 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/26",
      categoria: "Codicia",
      keywords:
        "Diversidad; Educación; Problemas sociales; Resolución de conflictos",
      file: "Leticia_Michelle_4.JPG",
    },
    {
      title: "¿Qué me hace sentir la codicia en La vorágine?",
      autor: "Hellen, 18 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de codicia en la novela:  '(Dibujo)   Hellen / 18 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/26",
      categoria: "Codicia",
      keywords:
        "Capitalismo; Problemas sociales; Riqueza económica; Segregación",
      file: "Leticia_Hellen_4.JPG",
    },
    {
      title: "¿Qué me hace sentir la patria en La vorágine?",
      autor: "Ruth Estefania, 24 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela:  'Desconocimientos territoriales, límites de macrorregión; muchos de nosotros no nos apropiamos de la hermosa biodiversidad y cultura que tenemos en nuestro país.   Mas en los territorios de la Amazonia, los pueblos indígenas.  Ruth Tangoa,   24 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/27",
      categoria: "Patria",
      keywords:
        "Diversidad; Medioambiente; Pueblos indígenas; Segregación; Soberanía",
      file: "Leticia_RuthTangoa.JPG",
    },
    {
      title: "¿Qué me hace sentir la patria en La vorágine?",
      autor: "Hellen, 18 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela:  'Me hace sentir confundida, el gobierno a veces exige tal patriotismo, que nos apoyemos como amigos, pero cómo lo hacemos si no encontramos justicia, no tenemos protección y mucho menos ¿paz? Debemos actuar y que cuando digan “¡patria!”, el pueblo esté presente para el cambio.   Hellen / 18 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/27",
      categoria: "Patria",
      keywords: "Estado; Justicia; Política; Problemas sociales; Segregación",
      file: "Leticia_Hellen_2.JPG",
    },
    {
      title: "¿Qué me hace sentir la lujuria en La vorágine?",
      autor: "Andrea, 14 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela:  'Respuesta: Es confuso, aún no sé qué siento con la lujuria, quizás lo siento tan poético y a la vez tan absurdo “¿Por qué querer tanto de algo?”. Poético porque te empeñas tanto en conseguirlo y prácticamente en él están tus sueños y esfuerzos, y absurdo porque cuál es la necesidad, cuando todo podría ser más sencillo.   Andrea, 14 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/22",
      categoria: "Lujuria",
      keywords: "Ilusión; Juventud; Problemas sociales",
      file: "Leticia_Andrea.JPG",
    },
    {
      title: "¿Qué me hace sentir la lujuria en La vorágine?",
      autor: "Noreiny Paola, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela:  '#1. (Dibujo) Me causa curiosidad   #2. (Dibujo) Me causa abstinencia   #3. (Dibujo) Me causa confusión   16 años,   Noreiny Paola Paredes R.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/22",
      categoria: "Lujuria",
      keywords: "Juventud",
      file: "Leticia_Noreiny_1.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el extravío en La vorágine con nuestra situación actual?",
      autor: "María, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela:  'El extravío se logra ver de forma espiritual, las dolencias físicas, sustancias psicoactivas y situaciones sociales difíciles, que generan un reflejo físico y más que todo mental. El hacer o generar cosas malas para sentirse bien momentáneamente se vuelve un vicio o condena. Así mismo, la selva siente las emociones que tiene al adentrarse en ella, brindando una experiencia que marca de por vida a cada persona.   María, 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/13",
      categoria: "Extravío",
      keywords:
        "Abuso de drogas; Espiritualidad; Problemas sociales; Selva tropical",
      file: "Leticia_Maria_3.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el extravío en La vorágine con nuestra situación actual?",
      autor: "Estefanía, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela:  'En “La vorágine” y “La Divina Comedia” se retratan infiernos y zonas de castigo, por errores cometidos. Estas selvas mortecinas, que pierden y enloquecen, se pueden encontrar en nuestra actualidad. Por ejemplo, los montones de personas drogadictas, cuyo mismo vicio juega el papel de infierno, sus errores son reprendidos con todas las consecuencias de las drogas.   También se puede ver el infierno de Dante y Riviera con hechos como el cambio climático, donde toda la avaricia humana que destruyó la tierra, ahora se convierte en el mundo acabando con la humanidad, no sin antes agotarla y enloquecerla.   Estefanía, 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/13",
      categoria: "Extravío",
      keywords:
        "Abuso de drogas; Conflictos medioambientales; Literatura de denuncia",
      file: "Leticia_Estefania_3.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el extravío en La vorágine con nuestra situación actual?",
      autor: "Ana Sofia, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela:  'Cuando la tierra se mancha de sangre, la sangre queda. Cuántas cosas no habrá visto el Amazonas. La violencia viene, y no se va. Es un comportamiento arraigado al ser humano, un comportamiento natural y salvaje. ¿Quién limpiará la sangre de esta tierra?   Bonanzas como la de la cauchería, conflicto armado… Solo es una muestra reciente.   ¿El valor del oro blanco es igual al valor de pueblos indígenas enteros, sus costumbres y sus sueños?   ¿Selva verde o roja?   Ana Sofía,   15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/13",
      categoria: "Extravío",
      keywords:
        "Conflicto armado; Conflictos medioambientales; Pueblos indígenas; Recursos naturales; Segregación",
      file: "Leticia_AnaSofia_6.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el extravío en La vorágine con nuestra situación actual?",
      autor: "Devi, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela:  'El extravió en La vorágine, lo puedo relacionar con mi situación actual, presenciando el cambio de personas que se dejan influenciar por otras, que caen en el consumo de sustancias ilícitas o incluso en la pérdida de su verdadero ser por situaciones que son difíciles de llevar. Todo esto puede hacer mucho daño en personas que intentan acercarse a su vida, y al causar daño va pasando el tiempo y te das cuenta de que esa persona puede estar de mal en peor, por algo que conozco como el karma.   Devi – 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/13",
      categoria: "Extravío",
      keywords:
        "Abuso de drogas; Conflicto; Cultura de masas; Identidad; Problemas sociales",
      file: "Leticia_Devi_1.JPG",
    },
    {
      title:
        "¿Cómo se relacionan los espejismos en La vorágine con nuestra situación actual?",
      autor: "Lucero, 17 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de espejismos en la novela:  'Espejismo en la actualidad.   (Dibujo)   Lucero, 17 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/15",
      categoria: "Espejismos",
      keywords:
        "Belleza corporal; Conflicto; Problemas sociales; Violencia de género",
      file: "Leticia_Lucero_2.JPG",
    },
    {
      title:
        "¿Cómo se relacionan los espejismos en La vorágine con nuestra situación actual?",
      autor: "Bella Rosa, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de espejismos en la novela:  'En mi vida se relaciona en ilusiones y expectativas, ya sea en relaciones o metas; en La vorágine simboliza la realidad abrumadora que nos rodea. Confusión y desesperación: tener la sensación de estar perdidos y desorientados en nuestra vida, en el espejismo, me da a buscar una salida o un punto de referencia, nos atrae a lo desconocido sin entender completamente sus implicaciones. Sentimos estar atrapados en rutinas, obligaciones o situaciones que nos limitan; en el espejismo, nos da la ilusión de encontrar una escapatoria. Reflexión y auto-descubrimiento, en el espejismo, me da a conocer la reflexión; en La vorágine el auto-descubrimiento con nuestras emociones y pensamientos.   Bella Rosa,   16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/25",
      categoria: "Espejismos",
      keywords: "Conflicto; Ilusión; Problemas sociales; Salud mental",
      file: "Leticia_BellaRosa_1.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la violencia en La vorágine con nuestra situación actual?",
      autor: "Ana Sofía, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela:  'Aún hoy en día, se demuestra que en nuestra naturaleza existe la maldad y todavía se pueden encontrar niñas agredidas, encadenadas a la maternidad, sosteniendo bebés de verdad y no de plástico.   (Dibujo)   Algunas los aman, otras no. Pero no se puede forzar el amor de una madre obligada.   Ana Sofía,   15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/20",
      categoria: "Violencia",
      keywords: "Abuso de menores; Problemas sociales; Violencia de género",
      file: "Leticia_AnaSofia_2.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el azar en La vorágine con nuestra situación actual?",
      autor: "Mara Lizbeth, 24 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela:  'En mi vida actual al azar se me relaciona en un hecho de mi estudio, porque quise terminar el colegio, ir a la universidad, terminar mi carrera y en un futuro casarme, mas no sucedió como me lo imaginaba. Fue una experiencia con un sentimiento de tristeza y un poco de decepción, el resultado no era como esperaba.   Mara Lizbeth,   24 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/25",
      categoria: "Azar",
      keywords: "Ilusión; Problemas sociales",
      file: "Leticia_MaraLizbeth.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el azar en La vorágine con nuestra situación actual?",
      autor: "Daniela, 17 de años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela:  'En nuestra situación actual el azar se relaciona en diferentes ámbitos de nuestra vida, las personas más “vivas”, por decirlo así, se quieren apoderar de lo que deseen, cueste lo que cueste, sin importarles nada ni nadie; hacer trampa, como en los juegos de azar, es su habilidad, como por ejemplo, en el ámbito laboral, personas quieren llegar a la cima a costa de otras sin que se den cuenta. Eso es hacer trampa.   Daniela, 17 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/25",
      categoria: "Azar",
      keywords: "Capitalismo; Conflicto; Problemas sociales; Riqueza económica",
      file: "Leticia_Daniela_3.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la codicia en La vorágine con nuestra situación actual?",
      autor: "Hellen, 18 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de codicia en la novela:  '(Dibujo)   Capitalismo.   Hellen / 18 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/26",
      categoria: "Codicia",
      keywords:
        "Capitalismo; Clase social; Problemas sociales; Protesta; Segregación",
      file: "Leticia_Hellen_3.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la codicia en La vorágine con nuestra situación actual?",
      autor: "Álvaro, 24 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de codicia en la novela:  'Que, por querer hacer más, hacen menos. La avaricia y la codicia en la actualidad es atroz, ya que los mandatarios se están robando los recursos del pueblo para beneficio propio. Es tanta la ambición y la codicia que llegan a mentir al pueblo con promesas falsas para satisfacción propia. Ejemplo, la construcción del supuesto mega colegio en la institución educativa Sagrado Corazón de Jesús en Leticia – Amazonas, que fue entregada en obra negra. Fue tanta la codicia, que jugaron con los sueños de muchos niños y jóvenes por llenarse los bolsillos.   (Dibujo)   Álvaro, 24 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/26",
      categoria: "Codicia",
      keywords:
        "Administración pública; Infraestructura; Juventud; Recursos públicos; Segregación",
      file: "Leticia_Alvaro.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la patria en La vorágine con nuestra situación actual?",
      autor: "Michelle, 26 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela:  '(Texto al interior del dibujo)   La patria en La Vorágine en la actualidad. Relación.   Los pueblos indígenas aún siguen siendo vulnerados en sus derechos y malos tratos, hay abuso de autoridad en muchos ámbitos de la sociedad.   Muchos han sido desterrados de sus propios territorios, a causa de los conflictos internos del país.   Se han perdido un gran número de flora, fauna y también de conocimientos importantes de los pueblos indígenas.   Michelle, 26 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/27",
      categoria: "Patria",
      keywords:
        "Diversidad; Medioambiente; Problemas sociales; Pueblos indígenas; Segregación",
      file: "Leticia_Michelle_1.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la patria en La vorágine con nuestra situación actual?",
      autor: "Daniela, 17 de años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela:  'En la actualidad muchas personas se identifican con el tema de proteger y preservar su entorno natural como una forma de demostrar amor y compromiso con su país, pero se han dado casos de corrupción, deforestación, eso hace la diferencia grande de lo que es patria.   Daniela, 17 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/27",
      categoria: "Patria",
      keywords:
        "Conflicto; Conflictos socioambientales; Problemas sociales; Soberanía",
      file: "Leticia_Daniela_1.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la lujuria en La vorágine con nuestra situación actual?",
      autor: "Shayna Yuridia",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela:  'Pues pienso que en la época actual en la que estamos, las mujeres siguen siendo un objeto sexual, aunque también podemos decir que las necesidades también afectan en la sociedad y eso lleva a las mujeres a venderse por unos pesos, así que la lujuria nos acompaña en el día a día en la vida.   Shayna Yuridia.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/22",
      categoria: "Lujuria",
      keywords: "Problemas sociales; Trabajo forzoso; Violencia de género",
      file: "Leticia_ShaynaYuridia.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la lujuria en La vorágine con nuestra situación actual?",
      autor: "Noreiny Paola, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela:  '#1. (Texto al interior del dibujo) Se relaciona de la manera en que las mujeres son explotadas por extranjeros.   #2. (Texto al interior del dibujo) Se relaciona con que las mujeres indígenas venden a sus hijas para poder mantenerse.   #3. Se relaciona en la obsesión que tienen los hombres con las mujeres vírgenes.   #4. Se relaciona con la forma en la que se consigue bienes y bienestar con la explotación o trata de blancas.   15 años,   Noreiny Paola Paredes R.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/22",
      categoria: "Lujuria",
      keywords:
        "Capitalismo; Problemas sociales; Pueblos indígenas; Trabajo forzoso; Violencia de género",
      file: "Leticia_Noreiny_2.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la lujuria en La vorágine con nuestra situación actual?",
      autor: "Jesus David, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela:  'Se relaciona con la forma en la que en la actualidad tenemos posicionada la sexualidad y la belleza en diferentes ciudades o países, por cómo deberían vestir o ser, esto también forma parte de la evolución de las culturas como etnias y poblados.   Jesús David Jaimes Gutiérrez, 15 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/22",
      categoria: "Lujuria",
      keywords:
        "Identidad; Belleza corporal; Problemas sociales; Violencia de género",
      file: "Leticia_JesusDavid.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la lujuria en La vorágine con nuestra situación actual?",
      autor: "María, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela:  'Brutal violación hacia una indígena virgen - Por la culpa de alcahuetas, blancos (gringos) que quieren satisfacer sus deseos sexuales por el dinero.   María / 16 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/22",
      categoria: "Lujuria",
      keywords:
        "Conflicto; Pueblos indígenas; Segregación; Violencia de género",
      file: "Leticia_MariaM_2.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de extravío?",
      autor: "María, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela:  'La educación, el crecimiento personal y social son pilares primordiales que deben ser mejorados. La educación para guiar desde una edad muy temprana los valores humanos y la importancia de la naturaleza y las personas a nuestro alrededor.   El crecimiento personal y la mejora a uno mismo y los cuidados contribuyen a algunas personas, dejando un poco de buenas costumbres en cada quien. El crecimiento social es más complejo, pero sÍ es posible.   María, 15 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/13",
      categoria: "Extravío",
      keywords: "Cultura; Educación; Diversidad; Juventud; Medioambiente",
      file: "Leticia_Maria_2.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de extravío?",
      autor: "Ana Sofía, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela:  'Como país siempre tendremos que luchar con la memoria. La memoria de toda la violencia que hemos vivido en varias zonas del país, lo que lleva a la búsqueda de algún cierre para lograr comenzar algo nuevo, algo mejor.   Pero, como pasó con la Comisión de la Verdad, muchos no pueden olvidar y todavía guardan rencor. Quizás la tierra misma nos guarda rencor a nosotros, y por eso la selva devora a los hombres. Tiene hambre de amor. Los hombres también tienen hambre de amor.   Antes que nada, hay que comer un poco de amor, y quizás así podamos iniciar de nuevo.   Ana Sofía,   15 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/13",
      categoria: "Extravío",
      keywords: "Conflicto; Medioambiente; Memoria histórica; Selva tropical",
      file: "Leticia_AnaSofia_4.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de extravío?",
      autor: "Devi, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela:  'Primero, se debería empezar por el cambio de uno mismo, ya que existen conceptos diferentes por cada persona que vive en Colombia, y eso conlleva a tolerar, a no estar de acuerdo o a empatar con los mismos conceptos. Nuestro país ha sido reconocido por las bonanzas que ha vivido a lo largo de su historia, sin embargo, la sociedad no se ve interesada por sanar las heridas de nuestro país.   Devi – 15 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/13",
      categoria: "Extravío",
      keywords: "Conflicto; Diversidad; Recursos naturales",
      file: "Leticia_Devi_3.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de extravío?",
      autor: "Estefanía, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela:  'La discriminación, el sufrimiento y la violencia son problemas que llevan años (cientos) afectando el mundo. Aunque la educación sí es una herramienta fuerte para evitar que las personas se inclinen hacia esos caminos, hay muchísimas personas que no pueden acceder a ella. Varias organizaciones y personas ya han intentado combatir estas problemáticas, Colombia y el mundo siguen igual o peor. Aun si se hace el super plan para evitar el extravío, creo que no hay personas suficientes para enseñar y aprender. Un mundo sin extravío y problemas es un mundo platónico y este es, como el mismo Platón decía, imposible.   Estefanía, 15 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/13",
      categoria: "Extravío",
      keywords:
        "Conflicto; Educación; Problemas sociales; Recursos públicos; Segregación",
      file: "Leticia_Estefania_2.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de violencia?",
      autor: "Ana Sofía, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela:  'Dejen a las niñas ser niñas,   que nadie les arrebate su inocencia.   Dejen a las mujeres ser madres,   si ellas quieren y cuando ellas decidan.   Y que los hombres sean hombres,   que tengan honor y amen a las mujeres,   no a las niñas.   En este mundo cruel, lo niños serán niños.   Déjenlos ser.   Ana Sofía,   15 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/20",
      categoria: "Violencia",
      keywords: "Abuso de menores; Problemas sociales; Violencia de género",
      file: "Leticia_AnaSofia_3.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de violencia?",
      autor: "Jaime Andrés, 18 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela:  'Muchas veces violentamos a alguien sin darnos cuenta, aprender a reconocer los distintos tipos de violencia sería una de las maneras más efectivas de contrarrestar esta. Aprender a reconocer nuestros errores también es crucial para la ejecución de esta, una disculpa y cambio de actitud puede eliminar las violencias más leves.   (Dibujo)   Jaime Andrés, 18 años. '  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/14",
      categoria: "Violencia",
      keywords:
        "Educación; Empatía; Diversidad; Resolución de conflictos; Salud mental",
      file: "Leticia_JaimeAndres_2.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de azar?",
      autor: "Bella Rosa, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela:  'En el concepto de unos nuevos caminos del azar podemos encontrar:   Aceptación y adaptación: Aceptar que hay aspectos de la vida que escapan a nuestro control y aprender a adaptarnos a las circunstancias cambiantes.   Flexibilidad: Desarrollar nuestras capacidades de ser flexibles y ajustar nuestras expectativas y planes según las situaciones imprevistas que puedan seguir.   Bella Rosa,   16 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/25",
      categoria: "Azar",
      keywords:
        "Educación; Empatía; Diversidad; Resolución de conflictos; Salud mental",
      file: "Leticia_BellaRosa_2.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de azar?",
      autor: "Michelle, 26 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela:  'Nuevos horizontes frente al concepto azar.   Los cambios son personales vistos desde cada situación, la educación desde casa influirá positivamente para relacionarnos y generar cambios en la sociedad, desde ahí las jerarquías tendrán una mejor forma de resolver toda la problemática siempre dando soluciones.   Michelle, 26 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/25",
      categoria: "Azar",
      keywords: "Educación; Diversidad; Resolución de conflictos; Salud mental",
      file: "Leticia_Michelle_5.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de codicia?",
      autor: "Michelle, 26 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de codicia en la novela:  'Texto al interior de un mapa mental)   Nuevos caminos frente a la codicia.   Educación – casa – valores – nos forman para la vida y ser mejores seres humanos   Educación – colegios – valores – compañerismo, respeto, honestidad, etc... – vivir bien en sociedad   Educación – valores – capacitaciones – mejorar – convivencia, comportamiento, etc.   Michelle, 26 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/26",
      categoria: "Codicia",
      keywords:
        "Educación; Empatía; Diversidad; Problemas sociales; Salud mental",
      file: "Leticia_Michelle_3.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de codicia?",
      autor: "Jhon, 24 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de codicia en la novela:  'Debemos redefinir el éxito.   Cultivar la gratitud.   Fomentar la empatía.   Promover la sostenibilidad.   Desarrollar la conciencia.   Crear alternativas.   Educar y sensibilizar.   Colaborar.   Buscar la simplicidad.   Cultivar la espiritualidad.   Jhon,   24 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/26",
      categoria: "Codicia",
      keywords:
        "Educación; Espiritualidad; Diversidad; Resolución de conflictos; Salud mental",
      file: "Leticia_Jhon.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de patria?",
      autor: "Michelle, 26 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela:  'Nuevos rumbos frente al concepto de la patria.   En la actualidad el patriotismo se ve reflejado en escenarios deportivos, pero en escenarios para revivir memorias de personas que marcaron historia con respecto a la violencia interna del país es escaso. Son pocos quienes realmente hacen valer a esos seres que ahora forman parte de una triste realidad.   (Dibujos)   Michelle, 26 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/27",
      categoria: "Patria",
      keywords:
        "Conflicto; Conflicto armado; Justicia; Memoria histórica; Problemas sociales",
      file: "Leticia_Michelle_2.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de patria?",
      autor: "Daniela, 17 de años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela:  'En estos tiempos cambiantes, creo que es importante definir el concepto de patria hacia uno más inclusivo y diverso. La unidad en la diversidad, el respeto y la equidad.   Daniela, 17 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/27",
      categoria: "Patria",
      keywords:
        "Cultura; Diversidad; Educación; Equidad; Resolución de conflictos",
      file: "Leticia_Daniela_2.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de patria?",
      autor: "Lenis, 26 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela:  'Debemos tener más sentido de pertenencia, ser más responsables con nuestra patria, ser más unidos como nación, conectar con nuestra tierra, hacer construcción colectiva.   Lenis,   26 años.'  ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "",
      categoria: "Patria",
      keywords:
        "Cultura; Diversidad; Equidad; Medioambiente; Resolución de conflictos",
      file: "Leticia_Lenis.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de lujuria?",
      autor: "María, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela:  'No es malo desear algo, lo malo es tenerlo y desearlo aún más, porque como seres humanos, somos ambiciosos al querer resaltar más que los demás.   Deberíamos ser más realistas y aceptar que nunca vamos a estar satisfechos con lo que deseamos, debemos ser personas humildes y no desearle el mal a nadie, desearles el bien para que puedan cumplir lo que quieran conseguir.   María / 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/29",
      categoria: "Lujuria",
      keywords: "Capitalismo; Conflicto; Cultura de masas; Problemas sociales",
      file: "Leticia_MariaM_1.JPG",
    },
  ],
  neiva: [
    {
      title: "¿Qué me hace sentir la violencia en La vorágine?",
      autor: "Ana Laura, 18 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela: 'Escuchar la verdadera historia detrás que hay sobre la novela “romántica” que pensábamos que era, es muy cruel, ya que no precisamente era una novela romántica, guardaba un oscuro secreto que es la VIOLENCIA que hay en el país desde hace muchos años. Escuchar todo lo que pasaron esas personas en aquella época me hace sentir un poco triste, un poco no: muy triste y desconsolada.  Ana Laura, 18 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/11",
      categoria: "Violencia",
      keywords: "Conflicto; Literatura de denuncia; Memoria histórica",
      file: "Neiva_AnaLaura.JPG",
    },
    {
      title: "¿Qué me hace sentir la patria en La vorágine? ",
      autor: "Frank Steeven, 17 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela: 'Me hace sentir que nuestra patria, que estamos presenciando, debemos cuidarla, protegerla, construirla, para tener un país mejor, con muchos avances, porque la patria del pasado, poco a poco la iban desmejorando, como destruirla y así iba decayendo todo.  Mi propósito es pensar antes de actuar, para así cambiar el mundo; representar de donde vengo, porque para mí Colombia es lo mejor, ya que contamos con muchas riquezas ambientales y culturales. Para ello, pensemos antes de actuar para construir un patria libre y segura.  Frank Steeven // 17 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/09",
      categoria: "Patria",
      keywords: "Diversidad; Identidad; Libertad; Recursos naturales",
      file: "Neiva_FrankSteeven.JPG",
    },
    {
      title: "¿Qué me hace sentir la patria en La vorágine? ",
      autor: "Freinier, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela: 'Al conocer el concepto de patria en la Vorágine, me despierta un sentimiento de curiosidad y asombro, ya que el llano y el Amazonas, al formar parte de Colombia, estaban abandonados por el gobierno, en el contexto en el que se adapta la Vorágine, ocasionando que la comunidad llegara a tales medidas, como se relata en el libro: la explotación laboral, el acoso sexual, el engaño y las falsas esperanzas de conseguir una vida mejor, siendo los principales afectado la raza indígena.  En los tiempos pasados, Colombia estaba sumergida en procesos de cambio, conflictos sociales y ambientales, algo que José Eustasio Rivera dejó palpado en el libro, cuyo valor actualmente se conmemora. Sinceramente, esto es plenamente hermoso, ya que permite conocer nuestra patria en tiempo remotos de la Historia, dando a volar nuestra imaginación, sintiendo y comprendiendo el texto del escrito, algo que a su vez describe el contexto social de Colombia. Freiner / 15 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/09",
      categoria: "Patria",
      keywords:
        "Conflictos socioambientales; Literatura de denuncia; Memoria histórica; Pueblos indígenas; Trabajo forzoso",
      file: "Neiva_Freinier.JPG",
    },
    {
      title: "¿Qué me hace sentir la patria en La vorágine? ",
      autor: "Juan Andrés, 17 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela: 'José Eustasio Rivera nos muestra aspectos importantes de regiones invisibilizadas del país, esos lugares vulnerables, y nos invitan en La vorágine a girar nuestra mirada a esos lugares en donde se daba la explotación laboral a manos de personas, inclusive de otros países.  Logro sentir la nostalgia de gente que se ve obligada a abandonar la patria, y su sensación de no entender por qué tienen que dejarla. Esto me lleva a valorar la importancia que tiene conocer nuestras raíces. Ahora sé del gran valor que tiene conocer nuestra patria. Juan Andrés, 17 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/09",
      categoria: "Patria",
      keywords: "Identidad; Literatura de denuncia; Migración; Trabajo forzoso",
      file: "Neiva_JuanAndres.JPG",
    },
    {
      title: "¿Qué me hacen sentir los espejismos en La vorágine?",
      autor: "Isabella, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de espejismos en la novela: 'Opino que la novela La vorágine maneja muy bien la representación de estos, de cómo los personajes se visualizaron en una vida que no pudieron conseguir. Esta es una situación que le pasa mucho a la gente hoy en día, personas que viajan a otros países para una mejor calidad de vida, porque han pintado ese lugar como una maravilla que al final resultó no serlo. Me parece triste la situación en que acaban esto, porque abandonaron su antigua vida y costumbres, lejos de seres queridos, para terminar fracasando.  Isabella (16 años).'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Espejismos",
      keywords: "Ilusión; Migración; Problemas sociales; Segregación",
      file: "Neiva_Isabella.JPG",
    },
    {
      title: "¿Qué me hacen sentir los espejismos en La vorágine?",
      autor: "Juan José, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de espejismos en la novela: 'Me hace sentir un vacío en el estómago, al ver los sueños y esperanzas de los personajes siendo arrastrados por la cruda realidad. Al pensar que me llegue a pasar esto, me llena de angustia y temor a vivir, a que mis alas sean cortadas por la afilada espada del mundo, a que mis sueños no se hagan realidad, a vivir una vida sin vida.  Juan José – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/26",
      categoria: "Espejismos",
      keywords: "Conflicto; Empatía; Ilusión; Problemas sociales",
      file: "Neiva_JuanJose_2.JPG",
    },
    {
      title:
        "¿Cómo se relacionan los espejismos en La vorágine con nuestra situación actual?",
      autor: "Ángel Santiago, 17 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de espejismos en la novela: 'Los espejismos de La vorágine se pueden relacionar con nuestra realidad, concretamente con fenómenos como la migración natal a países del primer mundo, en busca de mejores oportunidades, para encontrar la explotación laboral despiadada. Incluso, se pueden relacionar con la dimensión ambiental y con aquellas personas que esperanzadamente reciclan sólo para encontrar que sus esfuerzos fueron en vano.  Ángel Santiago, 17 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/26",
      categoria: "Espejismos",
      keywords:
        "Conflictos socioambientales; Migración; Problemas sociales; Trabajo forzoso; Segregación",
      file: "Neiva_AngelSantiago.JPG",
    },
    {
      title:
        "¿Cómo se relaciona los espejismos en La vorágine con nuestra situación actual?",
      autor: "Juan José, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de espejismos en la novela: 'Muchas personas sueñan con mejorar su vida, en ser alguien importante; sueñan con ser felices haciendo lo que les apasiona, pero lamentablemente, debido a su contexto social y económico, no son capaces de cumplir sus expectativas y terminan siendo consumidos vilmente por el mundo. Sus vidas son como estrellas fugaces, pasan efímeramente por el firmamento, brillan momentáneamente con esperanza y pasión, pero se terminan perdiendo en el espacio.  Juan José – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/26",
      categoria: "Espejismos",
      keywords: "Clase social; Ilusión; Problemas sociales; Segregación",
      file: "Neiva_JuanJose_1.JPG",
    },
    {
      title:
        "¿Cómo se relaciona los espejismos en La vorágine con nuestra situación actual?",
      autor: "Ana María, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de espejismos en la novela: 'Los espejismos en la actualidad están constantemente, como el de Arturo que migró para encontrar otras oportunidades y ser más adinerado. Hoy en día en Colombia seguimos esperanzados de que el salir del país da oportunidades y las da, sólo que son difíciles de alcanzar. O también el espejismo de la persona ideal, muchos nos imaginamos a esa persona en un futuro, sin haber conocido bien a la persona.  Ana María, 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/26",
      categoria: "Espejismos",
      keywords:
        "Clase social; Ilusión; Migración; Riqueza económica; Segregación",
      file: "Neiva_AnaMaria.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el azar en La vorágine con nuestra situación actual?",
      autor: "Angy, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela: 'Hoy en día millones de jóvenes e incluso adultos, no tienen ni idea de qué es lo que van a hacer en su vida. Algunos están muy arrepentidos de haber tomado decisiones que ellos consideraban “era su destino” o “para esto nacieron”, pero la gran mayoría de jóvenes dicen querer lograr muchas cosas y ganar plata, pero ni siquiera se esfuerzan por lograr esas “metas”, al contrario, dejan que “el destino” los ayude a involucrarse en cosas ilegales o peligrosas.  Angy, 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/29",
      categoria: "Azar",
      keywords: "Ilusión; Juventud; Problemas sociales; Riqueza económica",
      file: "Neiva_Angy.JPG",
    },
    {
      title: "¿Qué me hace sentir el azar en La vorágine? ",
      autor: "Maria Camila, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela: 'El azar en La vorágine, me hace sentir incierta sobre mi futuro: que hoy estemos planeando algo que anhelamos lograr y la incertidumbre sobre no saber si el “azar” no juega a nuestro favor y no logremos cumplir nuestros objetivos. Terminar haciendo algo que no me agrade y sentir que fallé en cumplir mi propósito.   Maria Camila, 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/29",
      categoria: "Azar",
      keywords: "Ilusión; Juventud; Problemas sociales",
      file: "Neiva_MariaCamila_1.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto del azar? ",
      autor: "Maria Camila, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela: 'Como jóvenes, debemos tomar medidas para poder encontrar nuevos caminos, ya sea fomentando nuestra capacidad de comunicación, ayudando al cambio climático, promoviendo la igualdad, el respeto, la tolerancia y otros valores fundamentales para la proyección de nuevos comienzos como sociedad. Nosotros somos los dueños de nuestro futuro, nosotros tenemos en nuestras manos la capacidad de mejorar, de crear un país en donde prevalezcan valores y sobre todo la paz.   Maria Camila (16 años)'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/29",
      categoria: "Azar",
      keywords:
        "Empatía; Igualdad; Juventud; Medioambiente; Resolución de conflictos",
      file: "Neiva_MariaCamila_2.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el extravío en La vorágine con nuestra situación actual?",
      autor: "Danna Alejandra, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'El extravío en la Vorágine se relaciona con nuestra situación actual en momentos de incertidumbre, cambios inesperados o desafíos que nos hacen sentir perdidos o confundidos.  Al igual que los personajes de la novela, siempre podemos encontrar manera de enfrentar esas situaciones, buscar ayuda y seguir adelante. A como era hace 100 años en la Vorágine, el extravío se ha venido presentando en Colombia al momento de las personas “extraviarse”, pierden su identidad y propósito, al abandonar el país por crisis económicas o falta de empleo, esto hace que el extravío continúe, como también lo hace presente la violencia y la corrupción. Danna Alejandra – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/29",
      categoria: "Extravío",
      keywords:
        "Conflicto; Identidad; Política; Problemas sociales; Salud mental",
      file: "Neiva_DannaAlejandra.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto del extravío? ",
      autor: "María Fernanda, 18 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'Creo que es importante buscar nuevos caminos que nos ayuden a recuperar el rumbo, la claridad y la orientación en medio de la incertidumbre o la confusión. Esto puede implicar explorar nuevas formas de pensar, buscar ayuda, establecer metas claras o incluso tomar un momento para reflexionar.   Enfrentar el extravío puede ser una oportunidad para crecer, aprender y descubrir aspectos de nosotros mismos que quizás desconocíamos.   En el contexto colombiano, el concepto del “extravío” puede estar relacionado con la sensación de pérdida de rumbo en medio de los complejos desafíos que el país enfrenta, como la corrupción, la desigualdad, la violencia, la explotación de los recursos naturales y los retos económicos y sociales.   María Fernanda, 18 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/29",
      categoria: "Extravío",
      keywords:
        "Administración pública; Conflictos socioambientales; Educación; Gobierno; Problemas sociales; Resolución de conflictos",
      file: "Neiva_MariaFernanda.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la codicia en La vorágine con nuestra situación actual?",
      autor: "Ana Sofía, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de codicia en la novela: 'Hoy en día se sigue reflejando la gran codicia que existe en nuestra sociedad, como por ejemplo se sigue manejando la explotación de las personas para obtener así mano de obra barata. Otro tema clave se trata del narcotráfico que hay donde la avaricia abarca los recursos naturales sin importarle sus excesos y daños que le puede causar en años futuros a la naturaleza. La gente busca la manera de poder tener beneficios a costilla de los demás, sin importar el daño que se le puede causar a aquellos trabajadores que contrata, aquellas personas codiciosas. También, aquellos secuestros son temas de codicia que se generan para conseguir beneficios sin importarle el sufrimiento que se le puede causar a los demás.  Ana Sofía G., 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Codicia",
      keywords:
        "Conflicto armado; Conflictos socioambientales; Narcotráfico; Trabajo forzoso; Segregación",
      file: "Neiva_AnaSofia.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la lujuria en La vorágine con nuestra situación actual?",
      autor: "Juliana, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela: 'La vorágine de la lujuria en la era digital puede ser abrumadora, pero no es inevitable. Al ser conscientes de nuestras acciones y nuestras emociones, podemos salir de la vorágine y encontrar un camino más saludable y más auténtico.  Juliana, 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/05",
      categoria: "Lujuria",
      keywords: "Ciberespacio; Resolución de conflictos; Salud mental",
      file: "Neiva_Juliana.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de la lujuria?",
      autor: "Pablo Andrés, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela: 'Frente al concepto de lujuria, es crucial buscar caminos que promuevan un entendimiento equilibrado y saludable de la sexualidad. En lugar de reprimir o demonizar los impulsos naturales, se debe fomentar la educación sexual integral, el respeto mutuo y la auto-reflexión. Esto incluye ofrecer información precisa y completa sobre la sexualidad, promover conversaciones sinceras sobre deseos y límites, enseñar y respetar el consentimiento, fomentar la reflexión personal e integrar la salud sexual con la salud mental y emocional.   By: Pablo Andrés, 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/05",
      categoria: "Lujuria",
      keywords: "Diversidad; Educación; Salud mental",
      file: "Neiva_PabloAndres_1.JPG",
    },
    {
      title: "¿Qué me hace sentir la lujuria en La vorágine?",
      autor: "Pablo Andrés, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela: 'En medio de La Vorágine, la lujuria me puede hacer sentir como si estuviera perdiendo el control de tus propias acciones y pensamientos. Es posible que me sienta atrapado en un remolino de emociones, donde mis deseos dominan por completo mi comportamiento, llevándome a actuar impulsivamente sin considerar las consecuencias.   By: Pablo Andrés, 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/05",
      categoria: "Lujuria",
      keywords: "Conflicto; Problemas sociales",
      file: "Neiva_PabloAndres_2.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto del extravío? ",
      autor: "Juan Diego, 18 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'Una forma de encontrar nuevos caminos es desarrollar habilidades de adaptabilidad y resiliencia para enfrentar situaciones de incertidumbre con mayor tranquilidad y confianza. Es importante aprender a gestionar el estrés, mantener una mentalidad abierta para explorar diferentes enfoques ante los desafíos y buscar apoyo emocional cuando sea necesario. Además, cultivar la autoconciencia para identificar nuestras emociones y necesidades en momentos de extravío, nos puede ayudar a tomar decisiones más acertadas y encontrar el rumbo nuevamente.  Juan Diego – 18 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/29",
      categoria: "Extravío",
      keywords: "Espiritualidad; Resolución de conflictos; Salud mental",
      file: "Neiva_JuanDiego.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de la patria?",
      autor: "Idali, 17 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela: 'El camino que deberíamos tomar sería mejorar la calidad de justicia, al mismo tiempo, cumplir las leyes que ya están constituidas. Con el cumplimiento de estas podríamos evitar tantas injusticias, una de esas y la más común es la explotación laboral, la cual se viene viviendo desde hace muchos años atrás, como se puede ver plasmado en la obra la Vorágine, obra la cual fue escrita con hechos reales que se vivián en esa época, hechos los cuales tristemente en la actualidad se siguen viviendo, a pesar de haber leyes para evitar este tipo de abusos.  100 años después de la publicación de la Vorágine, en nuestro país se siguen viviendo varios temas que se tocan en esa obra, como lo son: la explotación laboral, los abusos sexuales, la explotación de los recursos naturales, el conflicto armado y los asesinatos que han ocurrido de varios líderes sociales. Idali, 17 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/09",
      categoria: "Patria",
      keywords:
        "Conflicto armado; Conflictos socioambientales; Literatura de denuncia; Memoria histórica; Violencia de género",
      file: "Neiva_Idali.JPG",
    },
  ],
  pasto: [
    {
      title: "¿Qué me hace sentir el extravío en La vorágine?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "Pasto_LauraV_4.JPG",
    },
    {
      title: "¿Qué me hace sentir el azar en La vorágine?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela: 'La sabana se enrojece ante el jaguar adormilado,  después del tiempo se rifan las tierras del afectado.  (Dibujo)  Laura V – 16 años.' ",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Azar",
      keywords: "Conflicto; Medioambiente; Problemas sociales",
      file: "Pasto_LauraV_8.JPG",
    },
    {
      title: "¿Qué me hace sentir la patria en La vorágine?",
      autor: "Esteban T, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela: '— La patria la siento cuando yo mismo tomo conciencia y autoridad sobre mi país. Comprender que ni yo mismo conozco la patria colombiana y que el estado solo se encuentra en sitios muy reducidos del país.  Amazonas / Medellín. Florecimiento de las ciudades. (Dibujo)  Esteban T. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/06/22",
      categoria: "Patria",
      keywords: "Estado; Segregación",
      file: "Pasto_EstebanT_1.JPG",
    },
    {
      title: "¿Qué me hace sentir la patria en La vorágine?",
      autor: "David, 18 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela: 'Rta./ La patria es de unos pocos: de aquellos de las grandes ciudades, de aquellos cuyo pensamiento occidentalizado no permite ver más allá de los límites de su realidad. La patria es centralizada, es abrupta y excluyente; destroza, mutila y niega a sus propios hijos. Somos trazados por longitudes ajenas, puestos a servicio de unos pocos, viviendo de la ignorancia de nuestra tierra y de su gente. Así pues, la patria de unos pocos, de aquellos de las grandes ciudades…  David / 18 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/06/22",
      categoria: "Patria",
      keywords: "Justicia social; Problemas sociales",
      file: "Pasto_David_3.JPG",
    },
    {
      title: "¿Qué me hace sentir la codicia en La vorágine?",
      autor: "Dayana, 19 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de codicia en la novela:'La codicia es tan insaciable neurosis del ser humano, la cual yace detrás del temor a ser olvidado en la inmensidad del universo; nos retrasa como especie, nos consume. Me hace sentir reflexiva, en un sentido, preocupada de que la sociedad se vea absorta de las consecuencias de aquella codicia, hambrienta en totalidad por el afán de obtener más riquezas y validación, tal y como se dio en la obra, donde la codicia dio paso al salvajismo. ¿Dejaremos que la validación externa, las riquezas y el mismo capitalismo, marquen nuestra vida y futuro? ¿Acaso nos dejaremos consumir por dicho impulso? Dayana – 19 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/06/22",
      categoria: "Codicia",
      keywords:
        "Capitalismo; Consumismo; Problemas sociales; Riqueza económica",
      file: "Pasto_Dayana.JPG",
    },
    {
      title: "¿Qué me hace sentir el azar en La vorágine?",
      autor: "William, 19 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela:'Me encontraba acobijado con grandes hojas y el último amigo que me quedaba, un reloj que marca el tiempo de ese jaguar que me esperaba. Temiendo de él, sudaba. Era el sol desde mi ventana mirándome escribir en mi máquina. William – 19 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/10",
      categoria: "Azar",
      keywords: "Fantasía; Ilusión",
      file: "Pasto_William_3.JPG",
    },
    {
      title: "¿Qué me hace sentir la patria en La vorágine?",
      autor: "Felipe, 28 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela:'El patriotismo al que se refiere en estos párrafos me hace sentir mucho temor e impotencia al conocer por sus propias palabras de empresario el cómo se sirven de la seguridad militar para sus propios fines comerciales, poniendo en primer lugar sus intereses antes que los de la ley y los derechos humanos. Al afirmar que hay “vecinos envidiosos” pienso que sus convicciones hacia su empresa están primero que cualquier derecho de los trabajadores. Felipe Revelo Revelo – 28 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/06/29",
      categoria: "Patria",
      keywords: "Capitalismo; Derechos humanos; Problemas sociales",
      file: "Pasto_FelipeRevelo_1.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el extravío en La vorágine con nuestra situación actual?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela:'El extravío es un camino sin lugar, lo he buscado en enciclopedias, pero no está ni allí, ni allá, no está cerca del recuerdo, de la muerte, de los ángeles; tal vez él mismo se ha creado y él mismo se esconde. Me usa de rehén, me mece, se burla, se ríe. Es vago, vacío, es feroz bestia, me quema junto con él. He de parecer un infante llamándole. El cielo cae, el mar se levanta, todos se rebelan contra mí; se acerca, me susurra y grita y vuelve a desaparecer. Soy lo que se pierde. Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "Pasto_LauraV_3.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el azar en La vorágine con nuestra situación actual?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela:'Se humedece la cascada del colmillo del jaguar se sonroja y sonsaca el agua ante el martirio. ¿Quién se ha caído? Preguntan los demás. “Creo que la luz del sol he visto pasar”.(Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Azar",
      keywords: "Conflicto; Fantasía",
      file: "Pasto_LauraV_7.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la patria en La vorágine con nuestra situación actual?",
      autor: "Esteban T, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela:'— La Patria se ve afectada más que todo por el desconocimiento que nosotros mismos tenemos de nuestro país, y en cómo las elites desprecian las regiones selváticas: ellos sólo buscan el interés personal por encima de los intereses de la patria, olvidando muchas regiones del país y dejándonos desolados. Región Andino-Caribe. Blancos en el mapa. (Dibujo) Esteban T. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/15",
      categoria: "Patria",
      keywords: "Justicia social; Política; Segregación",
      file: "Pasto_EstebanT_2.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la patria en La vorágine con nuestra situación actual?",
      autor: "David, 18 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela:'Rta./ Se relaciona con la exclusión de nuestra propia gente; se relaciona con discursos vacíos, imprácticos e ideológicos que muchos políticos usan en nuestra doliente actualidad. Donde la violencia se ha tomado el país, los intereses propios salen a la luz; no se trabaja a favor del estado, se trabaja a favor de uno. En nuestros días solo quedan cenizas de promesas incompletas y sangre de olvidadas culturas. David / 18 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/06/22",
      categoria: "Patria",
      keywords: "Justicia social; Política; Segregación",
      file: "Pasto_David_1.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la patria en La vorágine con nuestra situación actual?",
      autor: "Jeidy, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela: 'Nuestra situación actual está mucho más sesgada y amarrada a un país en donde la patria se vuelve cada día más vulnerable, priorizando nuevas formas de contribución al país, pero en clases sociales más específicas. La patria en la Vorágine es influenciada por culturas indígenas, resaltando la importancia de estas en nuestro país, pero en nuestros diversos puntos de vista, esta manera de reflejar puede variar continuamente en un país multicultural.  Jeidy – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/06/22",
      categoria: "Patria",
      keywords: "Clase social; Diversidad; Pueblos indígenas",
      file: "Pasto_Jeidy_1.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la patria en La vorágine con nuestra situación actual?",
      autor: "Felipe, 28 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela: 'Servirse estos empresarios del caucho de los militares del estado, demuestra una acción de paramilitarismo. Es una modalidad muy conocida en todo el territorio, lamentablemente. Las empresas bananeras, actualmente, han ido a juicio por casos de financiación a paramilitares, es el caso de Chiquita Brands que ha afectado a muchas comunidades en el norte del país, así como en los tiempos de las Caucherías.  Felipe Revelo Revelo – 28 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/06/22",
      categoria: "Patria",
      keywords: "Memoria histórica; Paramilitarismo; Problemas sociales",
      file: "Pasto_FelipeRevelo_2.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el azar en La vorágine con nuestra situación actual?",
      autor: "Germán, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela: 'Colombia, un país inmerso en problemas como si fueran árboles frondosos. En medio de la adversidad, un terreno firme es tan probable como conseguir una carta de joker en toda la baraja. La situación es tan difícil que incluso la bandera fue rasgada.  (Dibujo)  German Alejandro – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/08/06",
      categoria: "Azar",
      keywords: "Problemas sociales; Símbolos patrios",
      file: "Pasto_GermanAlejandro.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el extravío en La vorágine con nuestra situación actual?",
      autor: "William, 19 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'El extravío es un camino sin lugar que no encontrarás y está en luto. Ahí escondí el sol de los pasos medidos, edifica un día que promete cambiar de ruta donde siempre te encontrará. Condenado estás y te retiene usar los caminos, soy lo que se pierde.  William – 19 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/10",
      categoria: "Extravío",
      keywords: "Ilusión",
      file: "Pasto_William_1.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el azar en La vorágine con nuestra situación actual?",
      autor: "William, 19 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela: 'Infectaron la tierra, arrasaron con toda presa que veían como un jaguar. Aún quedan los restos de una selva roja, color rojo como se tiene la idea del infierno.  William – 19 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/10",
      categoria: "Azar",
      keywords: "Conflictos socioambientales; Medioambiente ",
      file: "Pasto_William_2.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el extravío en La vorágine con nuestra situación actual?",
      autor: "Amy, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'Inicio: El extravío es un camino sin lugar. Nombre adormecido, tesoro perdido, memoria naufragante, despertar de la creación, ausencia de camino, infierno del paraíso, luto de amor, triunfo del corazón, vacío segador del frío, fuego constructor del cálido abrazo soleado separado de mí o de ti, canto blanco de mi camino, llave del mago, reflejo de mi esencia. Soy lo que se pierde.  Amy Bastidas – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/06/20",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "Pasto_AmyBastidas.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de violencia?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de violencia en la novela: '(Inicio diálogo con dibujo)  — “Palabras” —mencionó.  — “¿Tan solo palabras? —dijo el pequeño.  — “Exacto, lo triste de ello es que todos son unos tartamudos por desinterés o miedo”.  (Fin diálogo con dibujo)  Solo hacen falta palabras, ganas y valentía. Quienes tienen esas habilidades innatas son asesinados, desaparecidos o se desplazan a otros estados. El resto, somos colombianos cobardes.  Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Violencia",
      keywords: "Conflicto interno; Valentía",
      file: "Pasto_LauraV_1.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de extravío?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'El azar juega con la ilusión, son amigos, pelean, forman una contraparte, reviven y mueren. Toman venganza, hablan fantasmales, se dirigen a la plaza, a las calles, al monte, al cementerio. Toman presos a quien encuentran, ignorantes para tomar una decisión. Son escurridizos, inesperados e incrépulos (sic).  Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Ilusión",
      file: "Pasto_LauraV_5.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de azar?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de azar en la novela: 'Oh, en la profundidad me encuentro  y aquí, más bases tengo.  Aunque saliera a la luz a brillar,  esa más oscura está.  ¿He de dar frutos? He llegado a dudar.  ¿Quién mis preguntas podrá contestar?  Tal vez el destello del sol,  ese me ha de aguantar.  Aquí abajo no hay tanta oscuridad  como en la que arriba me viene a buscar.  (Dibujo)  Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Azar",
      keywords: "Fantasía; Ilusión",
      file: "Pasto_LauraV_6.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de lujuria?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de lujuria en la novela: 'Iluso he contemplado el sol salir  rocía con sus destellos el devenir  majestuoso será, pronto ha de caer  y con su puño, la noche debe estremecer.  Quizás en el ardido calor se ha de cansar y ensangrentado el viajero podrá descansar, su salida gozosa y majestuosa será y pintará en el recuerdo la mentira del jamás. Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Lujuria",
      keywords: "Ilusión",
      file: "Pasto_LauraV_2.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de patria?",
      autor: "David, 18 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela: 'Rta./ Mas que nuevos caminos, se deben hallar nuevos conceptos, conceptos que nos lleven a una Colombia más unificada, cuya diversidad, cultura y vida no se vea limitada ni obstruida. Una Colombia de promesas hechas, completas; que el nombre de Colombia no se use para ganar votos, y así, de este modo, nos podremos llamar colombianos, conocedores de nuestra tierra y amantes de la cultura y la verdad. Colombia de fronteras abiertas.  David / 18 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/06/22",
      categoria: "Patria",
      keywords: "Diversidad; Política; Símbolos patrios ",
      file: "Pasto_David_2.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de patria?",
      autor: "Esteban T, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela: '— Otro camino que debemos encontrar es el de que nosotros mismos busquemos una forma de formar nuestra patria; no creer en los altos rangos como los gobernantes, sino de alguna manera realizar actos que nos unan y podamos salir adelante como colombianos.  Esteban T. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/06/22",
      categoria: "Patria",
      keywords: "Gobierno; Política; Resolución de conflictos",
      file: "Pasto_EstebanT_3.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de patria?",
      autor: "Jeidy, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de patria en la novela:'El concepto de Patria radica en la manera como el país la practica y la intuye en el pensamiento individual. De este modo, vemos cómo el hecho de excluir a grupos indígenas que hacen parte de nuestra patria baja el nivel que tenemos como sociedad. Hacer patria no solo consiste en hacer cosas que beneficien al estado en comunidades de mejores condiciones, sino más bien el hecho de ser parte de las culturas indígenas nos lleva por nuevos caminos de gran desarrollo en nuestro país; no solo en una ayuda comunitaria, sino también individual, contribuyendo a nuestro pensamiento colaborativo. Jeidy – 16 años.",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/06/29",
      categoria: "Patria",
      keywords: "Pueblos indígenas; Segregación; Resolución de conflictos",
      file: "Pasto_Jeidy_2.JPG",
    },
  ],
  riohacha: [
    {
      title: "¿Qué me hace sentir la patria en La vorágine? ",
      autor: "Eduardo, 18 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Patria",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Eduardo.JPG",
    },
    {
      title: "¿Qué me hace sentir la codicia en La vorágine? ",
      autor: "Isha, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Codicia",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Isha.JPG",
    },
    {
      title: "¿Qué me hace sentir la lujuria en La vorágine? ",
      autor: "Leidis, 17 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Lujuria",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Leidis.JPG",
    },
    {
      title: "¿Qué me hace sentir la patria en La vorágine? ",
      autor: "Yil, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Patria",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Yil.JPG",
    },
    {
      title: "¿Qué me hace sentir la lujuria en La vorágine? ",
      autor: "Maneth, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Lujuria",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Maneth_1.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el extravío en La vorágine con nuestra situación actual?",
      autor: "Shirley, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Shirley_1.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la lujuria en La vorágine con nuestra situación actual?",
      autor: "Graciela, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Lujuria",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Graciela.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la lujuria en La vorágine con nuestra situación actual?",
      autor: "Nayerlin, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Lujuria",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Nayerlin.JPG",
    },
    {
      title:
        "¿Cómo se relacionan los espejismos en La vorágine con nuestra situación actual?",
      autor: "Yoisiveed, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Espejismo",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Yoisiveed_1.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la violencia en La vorágine con nuestra situación actual?",
      autor: "Yoisiveed, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Violenci",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Yoisiveed_2.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la violencia en La vorágine con nuestra situación actual?",
      autor: "Nikoll, 17 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Violenci",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Nikoll.JPG",
    },
    {
      title:
        "¿Cómo se relaciona la lujuria en La vorágine con nuestra situación actual?",
      autor: "Maneth, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Lujuria",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Maneth_2.JPG",
    },
    {
      title:
        "¿Cómo se relacionan los espejismos en La vorágine con nuestra situación actual?",
      autor: "Yuranis, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Espejismo",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Yuranis.JPG",
    },
    {
      title:
        "¿Cómo se relaciona el extravío en La vorágine con nuestra situación actual?",
      autor: "Imeris, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravi",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Imeris.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de extravío?",
      autor: "Ivanna, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Ivanna.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de extravío?",
      autor: "Shirley, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Shirley_3.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de lujuria?",
      autor: "Shirley, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Lujuria",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Shirley_2.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de codicia?",
      autor: "Yayleth, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Codicia",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Yayleth_1.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de violencia?",
      autor: "Yayleth, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Violenci",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Yayleth_2.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto del azar?",
      autor: "Tatielys, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Aza",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Tatielys.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de espejismo?",
      autor: "Kiadna, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Espejismo",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Kiadna.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de espejismo?",
      autor: "Daniela V, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Espejismo",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Daniela.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de extravío?",
      autor: "Grey, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Grey_2.JPG",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de extravío?",
      autor: "Grey, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Lujuria",
      keywords: "Fantasía; Ilusión",
      file: "Riohacha_Grey_1.JPG",
    },
  ],
  santamarta: [
    {
      title: "¿Qué me hace sentir la patria en La vorágine? ",
      autor: "Angie, 17 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Patria",
      keywords: "Cultura; Libertad; Soberanía ",
      file: "SantaMarta_Andrea.JPG ",
    },
    {
      title:
        "¿Cómo se relaciona la patria en La vorágine con nuestra situación actual?",
      autor: "Valery, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Patria",
      keywords: "Conflictos socioambientales; Recursos públicos ",
      file: "SantaMarta_Angie.JPG ",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de codicia?",
      autor: "Angie, 20 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Codicia",
      keywords: " Empatía; Equidad",
      file: "SantaMarta_AngieS.JPG ",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de codicia?",
      autor: "Andrea, 24 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Codicia",
      keywords: "Cultura de masas; Economía; Equidad",
      file: "SantaMarta_Cam_1.1.JPG ",
    },
    {
      title:
        "¿Qué nuevos caminos debemos encontrar frente al concepto de patria?",
      autor: "Valery, 15 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Patria",
      keywords: "Diversidad; Igualdad; Pueblos indígenas ",
      file: "SantaMarta_Cam_1.JPG ",
    },
    {
      title: "¿Qué me hace sentir el extravío en La vorágine?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "SantaMarta_Ibeth_1.1.JPG ",
    },
    {
      title: "¿Qué me hace sentir el extravío en La vorágine?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "SantaMarta_Ibeth_1.JPG ",
    },
    {
      title: "¿Qué me hace sentir el extravío en La vorágine?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "SantaMarta_Ibeth_2.1.JPG ",
    },
    {
      title: "¿Qué me hace sentir el extravío en La vorágine?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "SantaMarta_Ibeth_2.JPG ",
    },
    {
      title: "¿Qué me hace sentir el extravío en La vorágine?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "SantaMarta_Pisciotti_1.1.JPG ",
    },
    {
      title: "¿Qué me hace sentir el extravío en La vorágine?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "SantaMarta_Pisciotti_1.JPG ",
    },
    {
      title: "¿Qué me hace sentir el extravío en La vorágine?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "SantaMarta_Valery_1.JPG",
    },
    {
      title: "¿Qué me hace sentir el extravío en La vorágine?",
      autor: "Laura V, 16 años",
      descripcion:
        "Resultado del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al concepto de extravío en la novela: 'EL EXTRAVÍO DE LO VORAZ  El infinito se aproximará y preso te convertirá,  es imposible huir: se huye de nada, se huye de todo.  En la profundidad se encuentra el puñal, el paraíso  los pinchará, el infierno conquistará. Habla y resígnate  ya. O calla y morirás igual. (Dibujo) Laura V. – 16 años.'",
      referencias:
        "Rivera, José Eustasio. (2023). La Vorágine. Una edición cosmográfica. (M. Serje, & E. von der Walde, Edits.) Bogotá: Ediciones Uniandes",
      fecha: "2024/07/12",
      categoria: "Extravío",
      keywords: "Fantasía; Ilusión",
      file: "SantaMarta_Valery_2.JPG",
    },
  ],
};

const params = new URLSearchParams(window.location.search);
// Obtén el valor del parámetro `query`
const verticeSelected = params.get("vertice") || "";
const ciudadSelected = params.get("ciudad") || "";
const getinfoMetodologiaCiudadVertice = (vertice, ciudad) => {
  const result = {
    byCity: [],
    byCategory: [],
    byCityAndCategory: [],
  };

  // 1. Encontrar todos los elementos de la ciudad especificada
  if (ciudad && metodologia[ciudad]) {
    result.byCity = metodologia[ciudad];
  }

  // 2. Encontrar todos los elementos con la categoría especificada
  for (const city in metodologia) {
    const filteredByCategory = metodologia[city].filter(
      (item) => item.categoria.toLowerCase() === vertice.toLowerCase()
    );
    result.byCategory.push(...filteredByCategory);
  }

  // 3. Encontrar todos los elementos de la ciudad especificada que coincidan con la categoría
  if (ciudad && metodologia[ciudad]) {
    result.byCityAndCategory = metodologia[ciudad].filter(
      (item) => item.categoria.toLowerCase() === vertice.toLowerCase()
    );
  }

  return result;
};
let gallery = [
  {
    city: "florencia",
    url: "img/metodologia/florencia/Fotografías/Florencia1.jpg",
    caption:
      "Estudiantes de la Institución Educativa La Salle durante el taller “La vorágine: Lecturas para otros caminos posibles”. Julio de 2024, Florencia (Caquetá, Colombia).",
  },
  {
    city: "florencia",
    url: "img/metodologia/florencia/Fotografías/Florencia2.jpg",
    caption:
      "Materiales producidos durante una sesión del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al tema de la violencia. Institución Educativa La Salle, 12 de julio de 2024, Florencia (Caquetá, Colombia).",
  },
  {
    city: "florencia",
    url: "img/metodologia/florencia/Fotografías/Florencia3.jpg",
    caption:
      "Materiales producidos durante una sesión del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al tema de la violencia. Institución Educativa La Salle, 12 de julio de 2024, Florencia (Caquetá, Colombia).",
  },
  {
    city: "florencia",
    url: "img/metodologia/florencia/Fotografías/Florencia4.jpg",
    caption:
      "Estudiantes de la Institución Educativa La Salle durante el taller “La vorágine: Lecturas para otros caminos posibles”. Julio de 2024, Florencia (Caquetá, Colombia).",
  },
  {
    city: "florencia",
    url: "img/metodologia/florencia/Fotografías/Florencia5.jpg",
    caption:
      "Materiales producidos durante una sesión del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al tema de la violencia. Institución Educativa La Salle, 12 de julio de 2024, Florencia (Caquetá, Colombia).",
  },
  {
    city: "leticia",
    url: "img/metodologia/leticia/Fotografías/LeticiaEspejismos1.jpg",
    caption: "",
  },
  {
    city: "leticia",
    url: "img/metodologia/leticia/Fotografías/LeticiaEspejismos2.jpg",
    caption: "",
  },
  {
    city: "leticia",
    url: "img/metodologia/leticia/Fotografías/LeticiaPatria1.jpg",
    caption: "",
  },
  {
    city: "leticia",
    url: "img/metodologia/leticia/Fotografías/LeticiaPatria2.jpg",
    caption: "",
  },
  {
    city: "neiva",
    url: "img/metodologia/neiva/Fotografías/Neiva1.JPG",
    caption:
      "Estudiante de la Institución Educativa Ricardo Borrero Álvarez durante el taller “La vorágine: Lecturas para otros caminos posibles”. Julio de 2024, Neiva (Huila, Colombia).",
  },
  {
    city: "neiva",
    url: "img/metodologia/neiva/Fotografías/Neiva2.JPG",
    caption:
      "Materiales producidos durante el taller “La vorágine: Lecturas para otros caminos posibles”. Institución Educativa Ricardo Borrero Álvarez, julio de 2024, Neiva (Huila, Colombia).",
  },
  {
    city: "neiva",
    url: "img/metodologia/neiva/Fotografías/Neiva3.JPG",
    caption:
      "Materiales producidos durante el taller “La vorágine: Lecturas para otros caminos posibles”. Institución Educativa Ricardo Borrero Álvarez, julio de 2024, Neiva (Huila, Colombia).",
  },
  {
    city: "neiva",
    url: "img/metodologia/neiva/Fotografías/Neiva4.jpg",
    caption:
      "Materiales producidos durante el taller “La vorágine: Lecturas para otros caminos posibles”. Institución Educativa Ricardo Borrero Álvarez, julio de 2024, Neiva (Huila, Colombia).",
  },
  {
    city: "pasto",
    url: "img/metodologia/pasto/Fotografías/PastoAzar1.jfif",
    caption:
      "Estudiantes de la Institución Educativa Municipal Ciudad de Pasto durante el taller “La vorágine: Lecturas para otros caminos posibles”. Auditorio del Centro Cultural Leopoldo Álvarez del Banco de la República, 12 de julio de 2024, Pasto (Nariño, Colombia).",
  },
  {
    city: "pasto",
    url: "img/metodologia/pasto/Fotografías/PastoAzar2.jfif",
    caption:
      "Respuestas de una sesión del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al tema del azar en La vorágine. Estudiantes de la Institución Educativa Municipal Ciudad de Pasto. Auditorio del Centro Cultural Leopoldo Álvarez del Banco de la República, 12 de julio de 2024, pasto (Nariño, Colombia).",
  },
  {
    city: "pasto",
    url: "img/metodologia/pasto/Fotografías/PastoCodicia.jfif",
    caption:
      "Estudiantes de la Institución Educativa Municipal Ciudad de Pasto durante el taller “La vorágine: Lecturas para otros caminos posibles”. Auditorio del Centro Cultural Leopoldo Álvarez del Banco de la República, 22 de junio de 2024, Pasto (Nariño, Colombia).",
  },
  {
    city: "pasto",
    url: "img/metodologia/pasto/Fotografías/PastoPatria1.jfif",
    caption:
      "Estudiantes de la Institución Educativa Municipal Ciudad de Pasto, durante el taller “La vorágine: Lecturas para otros caminos posibles”. Auditorio del Centro Cultural Leopoldo Álvarez del Banco de la República, 22 de junio de 2024, Pasto (Nariño, Colombia).",
  },
  {
    city: "pasto",
    url: "img/metodologia/pasto/Fotografías/PastoPatria2.jfif",
    caption:
      "Respuestas de una sesión del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al tema de patria en La vorágine. Estudiantes de la Institución Educativa Municipal Ciudad de Pasto. Auditorio del Centro Cultural Leopoldo Álvarez del Banco de la República, 22 de junio de 2024, Pasto (Nariño, Colombia).",
  },
  {
    city: "riohacha",
    url: "img/metodologia/riohacha/Fotografías/Riohacha2.jpg",
    caption:
      "Estudiantes de la Institución Educativa Centro de Integración Popular durante el taller “La vorágine: Lecturas para otros caminos posibles”. 10 de julio de 2024, Riohacha (La Guajira, Colombia).",
  },
  {
    city: "riohacha",
    url: "img/metodologia/riohacha/Fotografías/Riohacha6.JPG",
    caption:
      "Estudiantes de la Institución Educativa Centro de Integración Popular durante el taller “La vorágine: Lecturas para otros caminos posibles”. 10 de julio de 2024, Riohacha (La Guajira, Colombia).",
  },
  {
    city: "santamarta",
    url: "img/metodologia/santamarta/Fotografías/SantaMartaCodicia1.jpeg",
    caption:
      "Sesión del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al tema de la codicia en La vorágine. Centro Cultural del Banco de la República, 1.º de junio de 2024, Santa Marta (Magdalena, Colombia).",
  },
  {
    city: "santamarta",
    url: "img/metodologia/santamarta/Fotografías/SantaMartaPatria2.jpeg",
    caption:
      "Materiales y respuestas de una sesión del taller “La vorágine: Lecturas para otros caminos posibles”, que giró en torno al tema de la patria en La vorágine. Institución Educativa Liceo Samario, 12 de junio de 2024, Santa Marta (Magdalena, Colombia).",
  },
  {
    city: "santamarta",
    url: "img/metodologia/santamarta/Fotografías/SantaMartaPatria3.jpeg",
    caption:
      "Materiales y respuestas de una sesión del taller “La vorágine: Lecturas para otros caminos posibles”, que giró en torno al tema de la patria en La vorágine. Institución Educativa Liceo Samario, 12 de junio de 2024, Santa Marta (Magdalena, Colombia).",
  },
  {
    city: "santamarta",
    url: "img/metodologia/santamarta/Fotografías/SantaMartaPatria4.jpeg",
    caption:
      "Estudiantes del Liceo Samario durante una sesión del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al tema de la patria en La vorágine. Institución Educativa Liceo Samario, 12 de junio de 2024, Santa Marta (Magdalena, Colombia).",
  },
  {
    city: "santamarta",
    url: "img/metodologia/santamarta/Fotografías/SantaMartaPatria5.jpeg",
    caption:
      "Estudiantes del Liceo Samario durante una sesión del taller “La vorágine: Lecturas para otros caminos posibles” que giró en torno al tema de la patria en La vorágine. Institución Educativa Liceo Samario, 12 de junio de 2024, Santa Marta (Magdalena, Colombia).",
  },
];
let galleryFiltered = gallery.filter((photo) => photo.city == ciudadSelected);
let metodologiaactive = 0;
const findCityForItem = (item) => {
  for (const city in metodologia) {
    if (metodologia[city].some((obj) => obj.file === item.file)) {
      return city; // Retorna la ciudad donde se encontró el item
    }
  }
  return null; // Retorna null si no se encuentra
};

function renderItemMetodologia(item) {
  const ciudad = ciudadSelected || findCityForItem(item);

  document.querySelector(".interna_hoy .grid .center h5").innerHTML =
    item.title;
  document.querySelector(".interna_hoy .grid .center h4").innerHTML =
    ciudad == "santamarta" ? "santa marta" : ciudad;
  document.querySelector(
    ".interna_hoy .grid .center-header .info span.red"
  ).innerHTML = item.autor;
  document.querySelector(
    ".interna_hoy .grid .center-header .info span.date"
  ).innerHTML = `${ciudad} ${item.fecha}`;
  document.querySelector(
    ".interna_hoy .grid .center .note img"
  ).src = `img/metodologia/${ciudad}/Respuestas/${item.file}`;
}
let resultsList = [];
if (document.querySelector(".interna_hoy")) {
  document
    .querySelector(".interna_hoy .grid .center-header button#next")
    .addEventListener("click", () => {
      metodologiaactive = (metodologiaactive + 1) % resultsList.length; // Regresa al inicio si llega al final
      console.log(metodologiaactive);
      renderItemMetodologia(resultsList[metodologiaactive]);
    });

  document
    .querySelector(".interna_hoy .grid .center-header button#prev")
    .addEventListener("click", () => {
      metodologiaactive =
        (metodologiaactive - 1 + resultsList.length) % resultsList.length; // Regresa al final si llega al inicio
      console.log(metodologiaactive);
      renderItemMetodologia(resultsList[metodologiaactive]);
    });
  const results = getinfoMetodologiaCiudadVertice(
    verticeSelected,
    ciudadSelected
  );

  document
    .querySelector(`#vertice option[value='${verticeSelected}']`)
    .setAttribute("selected", true);
  if (ciudadSelected) {
    document
      .querySelector(`#ciudad option[value='${ciudadSelected}']`)
      .setAttribute("selected", true);
  } else {
    document.querySelector(".photos-cont").style.opacity = 0;
    document.querySelector(".photos-cont").style.pointerEvents = "none";
  }
  if (verticeSelected == "") {
    resultsList = results.byCity;
    console.log("🚀 ~ results:", results.byCity);
  } else if (ciudadSelected == "") {
    resultsList = results.byCategory;
    console.log("🚀 ~ results:", results.byCategory);
  } else if (verticeSelected != "" && ciudadSelected != "") {
    resultsList = results.byCityAndCategory;
    console.log("🚀 ~ results:", results.byCityAndCategory);
  }
  if (resultsList.length == 1) {
    document.querySelector(
      ".interna_hoy .grid .center-header button#next"
    ).style.display = "none";
    document.querySelector(
      ".interna_hoy .grid .center-header button#prev"
    ).style.display = "none";
  }
  renderItemMetodologia(resultsList[metodologiaactive]);
}

function showGallery() {
  Fancybox.show(
    galleryFiltered.map((photo) => ({
      src: `<div class="popover">
  <div class="content">
    <div class="content-body">
      <img
        src="${photo.url}"
        alt="${photo.alt}"
        style="max-width: 100%; object-fit: contain;height:480px;"
      />
      <div class="txt">
        <div class="nomargin">
          <p>
            ${photo.caption}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
      type: "html", // Especifica que es contenido HTML
    }))
  );
}

const verticeSelect = document.getElementById("vertice");
const ciudadSelect = document.getElementById("ciudad");

verticeSelect.addEventListener("change", () => {
  updateDisabledOptions("vertice");
  document
    .querySelector(".hoy .grid .left form button")
    .removeAttribute("disabled");
});
ciudadSelect.addEventListener("change", () => {
  updateDisabledOptions("ciudad");
  document
    .querySelector(".hoy .grid .left form button")
    .removeAttribute("disabled");
});

function updateDisabledOptions(changed) {
  document
    .querySelector(".hoy .grid .left form button")
    .removeAttribute("disabled");
  const selectedVertice = verticeSelect.value;
  const selectedCiudad = ciudadSelect.value;

  if (changed === "vertice") {
    // Actualizar ciudades basándose en el vértice seleccionado
    const validCities = Object.keys(metodologia).filter((city) =>
      metodologia[city].some(
        (entry) =>
          entry.categoria.toLowerCase() === selectedVertice.toLowerCase()
      )
    );

    toggleOptionDisabled(ciudadSelect, validCities);
  } else if (changed === "ciudad") {
    // Actualizar vértices basándose en la ciudad seleccionada
    const validVertices =
      metodologia[selectedCiudad]?.map((entry) =>
        entry.categoria.toLowerCase()
      ) || [];
    toggleOptionDisabled(verticeSelect, validVertices);
  }

  // Habilitar el botón si ambos tienen valores seleccionados
  const button = document.querySelector("form button");
  if (selectedVertice && selectedCiudad) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", true);
  }
}

function toggleOptionDisabled(select, validOptions) {
  Array.from(select.options).forEach((option) => {
    if (option.value === "") {
      option.disabled = false; // Siempre habilitar la opción inicial
    } else {
      option.disabled = !validOptions.includes(option.value.toLowerCase());
    }
  });
}
