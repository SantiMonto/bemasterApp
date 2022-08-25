import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import lilo from '../media/disney/lilo.jpg'
import encanto from '../media/disney/encanto.jpeg'
import frozen from '../media/disney/frozen.jpeg'
import ladamayvagabundo from '../media/disney/ladamayvagabundo.jpg'
import mulan from '../media/disney/mulan.jpg'
import up from '../media/disney/up.jpg'
import avengers from '../media/marvel/avengers.jpg'
import captain from '../media/marvel/captain.jpg'
import civilwar from '../media/marvel/civilwar.jpg'
import ironman from '../media/marvel/ironman.jpg'
import logan from '../media/marvel/logan.png'
import spiderman from '../media/marvel/spiderman.jpg'
import eightynine from '../media/ng/1989.jpg'
import explorer from '../media/ng/explorer.jpg'
import mars from '../media/ng/mars.jpg'
import photos from '../media/ng/photos.jpg'
import places from '../media/ng/places.jpg'
import whales from '../media/ng/whales.jpg'
import luca from '../media/pixar/luca.jpg'
import monsters from '../media/pixar/monsters.jpg'
import onward from '../media/pixar/onward.jpeg'
import soul from '../media/pixar/soul.jpg'
import toystory from '../media/pixar/toystory.jpeg'
import viaje from '../media/pixar/viaje.jpg'
import asenso from '../media/starwars/asenso.jpg'
import clone from '../media/starwars/clone.jpg'
import guerra from '../media/starwars/guerra.jpg'
import hansolo from '../media/starwars/hansolo.jpg'
import lastjedi from '../media/starwars/lastjedi.jpg'
import solo from '../media/starwars/solo.jpg'


const ContentDetails = () => {

    const categories = [
        {
            name: 'Disney',
            title: 'Lilo y Stich',
            img: lilo,
            description: 'Lilo y Stitch narra la cautivadora historia del encuentro de una niña y del extraterrestre más buscado de la galaxia. Lilo es una niña hawaiana que se siente sola y adopta una "mascota" muy fea a la que decide llamar Stitch. Stitch sería el perro perfecto si no fuera en realidad un experimento genético que ha escapado de un planeta alienígena y que ha aterrizado en la Tierra.'
        },
        {
            name: 'Disney',
            title: 'Encanto',
            img: encanto,
            description: 'Los Madrigal son una extraordinaria familia que vive escondida en las montañas de Colombia en un lugar encantado llamado El Encanto. La magia del Encanto ha bendecido a cada niño de la familia con un regalo único: todos los niños excepto Mirabel. Sin embargo, pronto puede ser la última esperanza de Madrigal cuando descubre que la magia que rodea al Encanto está ahora en peligro.'
        },
        {
            name: 'Disney',
            title: 'Frozen',
            img: frozen,
            description:'Cuando su reino queda atrapado en un invierno perpetuo, la intrépida Anna (Kristen Bell) une fuerzas con el alpinista Kristoff (Jonathan Groff) y su compañero reno para encontrar a la hermana de Anna, la Reina de las Nieves Elsa (Idina Menzel), y romper su hechizo helado. Aunque su viaje épico los lleva a encuentros con trolls místicos, un cómico muñeco de nieve (Josh Gad), duras condiciones y magia a cada paso, Anna y Kristoff valientemente avanzan en una carrera para salvar su reino de las garras del frío invierno.'
        },
        {
            name: 'Disney',
            title: 'La dama y el Vagabundo',
            img: ladamayvagabundo,
            description: 'Este clásico animado de Disney sigue a una mimada cocker spaniel llamada Lady (Wilfred Jackson) cuya cómoda vida se esfuma una vez que sus dueños tienen un bebé. Cuando, después de algunas circunstancias tensas, Lady se encuentra suelta y en la calle, el rudo vagabundo vagabundo (Hamilton Luske) se hace amiga y la protege. Un romance comienza a florecer entre los dos perros, pero sus muchas diferencias, junto con más drama en la casa de Lady, amenazan con mantenerlos separados.'
        },
        {
            name: 'Disney',
            title: 'Mulan',
            img: mulan,
            description: 'Para evitar que su padre enfermo sirva en el ejército imperial, una valiente joven se disfraza de hombre y lucha contra los invasores del norte en China.'
        },
        {
            name: 'Disney',
            title: 'UP',
            img: up,
            description: 'Carl Fredricksen, un vendedor de globos de 78 años, está a punto de cumplir el sueño de toda una vida. Atando miles de globos a su casa, vuela hacia la naturaleza sudamericana. Pero la peor pesadilla del cascarrabias Carl se hace realidad cuando descubre que un niño pequeño llamado Russell es un polizón a bordo de la casa propulsada por globos.'
        },
        {
            name: 'Marvel',
            title: 'Avengers',
            img: avengers,
            description: 'Cuando el hermano malvado de Thor, Loki (Tom Hiddleston), obtiene acceso al poder ilimitado del cubo de energía llamado Tesseract, Nick Fury (Samuel L. Jackson), director de S.H.I.E.L.D., inicia un esfuerzo de reclutamiento de superhéroes para derrotar la amenaza sin precedentes a la Tierra. . Uniéndose al "equipo de ensueño" de Fury están Iron Man (Robert Downey Jr.), el Capitán América (Chris Evans), Hulk (Mark Ruffalo), Thor (Chris Hemsworth), la Viuda Negra (Scarlett Johansson) y Hawkeye (Jeremy Renner).'
        },
        {
            name: 'Marvel',
            title: 'Capitan America',
            img: captain,
            description:'Es 1941 y el mundo está en medio de la guerra. Steve Rogers (Chris Evans) quiere hacer su parte y unirse a las fuerzas armadas de Estados Unidos, pero el ejército lo rechaza debido a su pequeña estatura. Finalmente, Steve tiene su oportunidad cuando lo aceptan en un programa experimental que lo convierte en un supersoldado llamado Capitán América. Uniendo fuerzas con Bucky Barnes (Sebastian Stan) y Peggy Carter (Hayley Atwell), el Capitán América lidera la lucha contra la organización HYDRA respaldada por los nazis.'
        },
        {
            name: 'Marvel',
            title: 'Guerra Civil',
            img: civilwar,
            description:'La presión política aumenta para instalar un sistema de rendición de cuentas cuando las acciones de los Vengadores provocan daños colaterales. El nuevo statu quo divide profundamente a los miembros del equipo. El Capitán América (Chris Evans) cree que los superhéroes deben permanecer libres para defender a la humanidad sin la interferencia del gobierno. Iron Man (Robert Downey Jr.) no está de acuerdo y apoya la supervisión. A medida que el debate se convierte en una disputa total, Black Widow (Scarlett Johansson) y Hawkeye (Jeremy Renner) deben elegir un bando.'
        },
        {
            name: 'Marvel',
            title: 'Iron Man',
            img: ironman,
            description:'Un industrial multimillonario y genio inventor, Tony Stark (Robert Downey Jr.), está realizando pruebas de armas en el extranjero, pero los terroristas lo secuestran para obligarlo a construir un arma devastadora. En cambio, construye un traje blindado y pone patas arriba a sus captores. Al regresar a Estados Unidos, Stark refina el traje y lo usa para combatir el crimen y el terrorismo.'
        },
        {
            name: 'Marvel',
            title: 'Logan',
            img: logan,
            description:'Atraído a un Japón que no ha visto desde la Segunda Guerra Mundial, el centenario mutante Wolverine (Hugh Jackman) se encuentra en un sombrío reino de yakuza y samuráis. Wolverine se ve empujado a su límite físico y emocional cuando se ve obligado a huir con la hija de un poderoso industrial (Tao Okamoto) y se enfrenta, por primera vez, con la perspectiva de la muerte. Mientras lucha por redescubrir al héroe que lleva dentro, debe enfrentarse a poderosos enemigos y a los fantasmas de su propio pasado atormentado.'
        },
        {
            name: 'Marvel',
            title: 'El hombre Araña',
            img: spiderman,
            description:'Con la identidad de Spider-Man ahora revelada, nuestro amistoso lanzador de telarañas del vecindario está desenmascarado y ya no puede separar su vida normal como Peter Parker de las altas apuestas de ser un superhéroe. Cuando Peter le pide ayuda al Doctor Strange, lo que está en juego se vuelve aún más peligroso y lo obliga a descubrir lo que realmente significa ser Spider-Man.'
        },
        {
            name: 'National Geographic',
            title: '1989',
            img: eightynine,
            description:'Ningún otro año en la historia reciente ha jugado un papel más fundamental en la configuración del presente que 1989. 30 años después, observamos los eventos icónicos que definieron este año y continúan dominando la conversación pública desde el fundamentalismo y la raza hasta la igualdad de género y la influencia de La Internet. ¿El fin de la Guerra Fría... el desmantelamiento del Apartheid, el lanzamiento de la World Wide Web? y el estreno de Los Simpson. Si solo uno de estos tuvo lugar en 1989, se consideraría un año decisivo. Pero estos fueron solo el comienzo.'
        },
        {
            name: 'National Geographic',
            title: 'Explorer',
            img: explorer,
            description:'Presentada por Phil Keoghan, la serie insignia de National Geographic Explorer investiga historias globales de ciencia, naturaleza y cultura. Es la serie documental de cable de mayor duración y ganadora de 52 premios Emmy, 13 premios Cable ACE, los premios Genesis y Peabody, y dos veces nominada a los Premios de la Academia. Recién reformateada como una serie de revista semanal de 1 hora, los episodios se transmiten en 171 países en 45 idiomas y cuentan con el apoyo de 440 millones de espectadores.'
        },
        {
            name: 'National Geographic',
            title: 'Marte',
            img: mars,
            description:'Marte es una serie de televisión que mezcla los géneros documental y ciencia ficción dura producida por National Geographic, emitida por primera vez en su canal y en FX el 14 de noviembre de 2016.1​2​ Con anterioridad a esta primera emisión estuvo disponible por streaming desde el 1 de noviembre de 2016.3​ Mezcla escenas correspondientes a entrevistas reales con una historia de ficción en la que un grupo de astronautas aterrizan en el planeta Marte.'
        },
        {
            name: 'National Geographic',
            title: 'Fotos',
            img: photos,
            description:'Este impresionante volumen fue el libro regalo del año cuando se publicó por primera vez, y las imágenes que adornan sus páginas siguen siendo icónicas.'
        },
        {
            name: 'National Geographic',
            title: 'Ballenas',
            img: whales,
            description:'Filmada durante tres años en 24 localizaciones, es una saga profundamente personal, aventurándose profundamente en el mundo de las ballenas para desvelar la vida y el amor desde su perspectiva.'
        },
        {
            name: 'National Geographic',
            title: 'Lugares',
            img: places,
            description: 'Aprenda todo sobre las personas, los lugares, las tendencias y los desarrollos de nuestro mundo en la quinta edición de este aclamado atlas. Tiene un diseño fresco y amigable para los niños y toda la información geográfica y política más reciente y mejor que hacen de este un recurso tan valioso. Las nuevas características incluyen un mapa temático sobre especies en peligro de extinción, un mapa sobre la región de África Central y una sección ampliada de la Antártida que presenta a los niños la importante investigación que se está llevando a cabo allí.'
        },
        {
            name: 'Pixar',
            title: 'Luca',
            img: luca,
            description:'Ambientada en una hermosa ciudad costera en la Riviera italiana, la película animada original es una historia sobre la mayoría de edad sobre un niño que experimenta un verano inolvidable lleno de helados, pastas y paseos en scooter interminables. Luca comparte estas aventuras con su nuevo mejor amigo, pero toda la diversión se ve amenazada por un secreto profundamente guardado: es un monstruo marino de otro mundo justo debajo de la superficie del agua.'
        },
        {
            name: 'Pixar',
            title: 'Monsters Inc',
            img: monsters,
            description:'Monsters Incorporated es la fábrica de miedo más grande del mundo de los monstruos, y James P. Sullivan (John Goodman) es uno de sus mejores asustadores. Sullivan es un monstruo enorme e intimidante con pelaje azul, grandes manchas moradas y cuernos. Su asistente de miedo, mejor amigo y compañero de cuarto es Mike Wazowski (Billy Crystal), un pequeño monstruo verde, obstinado y luchador de un solo ojo. Boo (Mary Gibbs), una niña pequeña que va a donde ningún humano ha ido antes, viene de visita desde el mundo humano.'
        },
        {
            name: 'Pixar',
            title: 'Onward',
            img: onward,
            description:'Dos hermanos hadas adolescentes llamados Ian y Barley Lightfoot viven en un mundo fantástico. Allí la gente una vez tuvo magia. Ian y Barley conocen a un mago como regalo preestablecido de su difunto padre.'
        },
        {
            name: 'Pixar',
            title: 'Soul',
            img: soul,
            description:'Soul es una película animada estadounidense de aventura, drama y comedia dirigida por Pete Docter y producida por Pixar Animation Studios. Narra la historia de un profesor de música que sufre un accidente antes de poder cumplir su sueño de convertirse en un reconocido exponente del jazz, por lo que debe embarcarse en un viaje al más allá para volver a la vida. Cuenta con las voces de Jamie Foxx, Tina Fey, Graham Norton, Questlove, Phylicia Rashad y Angela Bassett.'
        },
        {
            name: 'Pixar',
            title: 'Toy Story',
            img: toystory,
            description:'Woody (Tom Hanks), un muñeco vaquero de buen corazón que pertenece a un niño llamado Andy (John Morris), ve en peligro su posición como el juguete favorito de Andy cuando sus padres le compran una figura de acción de Buzz Lightyear (Tim Allen). Peor aún, el arrogante Buzz cree que es un verdadero astronauta en una misión para regresar a su planeta natal. Cuando la familia de Andy se muda a una nueva casa, Woody y Buzz deben escapar de las garras del vecino inadaptado Sid Phillips (Erik von Detten) y reunirse con su hijo.'
        },
        {
            name: 'Pixar',
            title: 'Viaje',
            img: viaje,
            description:'¿Qué hubiera pasado si el asteroide que cambió para siempre la vida en la Tierra hubiera esquivado el planeta y los dinosaurios no se hubieran extinguido nunca? Un viaje al mundo de los dinosaurios donde un Apatosaurus llamado Arlo se hace amigo de un humano, aunque resulte asombroso. Mientras viaja por un paisaje desolado y misterioso, Arlo aprende a enfrentarse a sus temores y descubre de lo que es capaz.'
        },
        {
            name: 'Star Wars',
            title: 'Ascenso',
            img: asenso,
            description:'Cuando se descubre que el malvado Emperador Palpatine no murió a manos de Darth Vader, los rebeldes deben correr contrarreloj para averiguar su paradero. Finn y Poe lideran la Resistencia para poner fin a los planes de la Primera Orden de formar un nuevo Imperio, mientras que Rey anticipa su inevitable confrontación con Kylo Ren. Advertencia: Algunas escenas de luces intermitentes en esta película pueden afectar a los espectadores fotosensibles.'
        },
        {
            name: 'Star Wars',
            title: 'Clon',
            img: clone,
            description:'A medida que más sistemas estelares son arrastrados a las Guerras Clon, los valientes caballeros Jedi luchan por mantener el orden. Anakin Skywalker y su aprendiz padawan Ahsoka Tano se embarcan en una misión que los pone cara a cara con Jabba the Hutt. Conspirando contra ellos está el malvado Conde Dooku y su agente, Asajj Ventress, quienes se asegurarían de que los Jedi fracasaran. Mientras tanto, Yoda y Obi-Wan Kenobi lideran el ejército de clones contra las fuerzas del Lado Oscuro.'
        },
        {
            name: 'Star Wars',
            title: 'Guerra de las Galaxias',
            img: guerra,
            description:'Las Fuerzas Imperiales, bajo las órdenes del cruel Darth Vader (David Prowse), mantienen como rehén a la Princesa Leia (Carrie Fisher), en sus esfuerzos por sofocar la rebelión contra el Imperio Galáctico. Luke Skywalker (Mark Hamill) y Han Solo (Harrison Ford), capitán del Halcón Milenario, trabajan junto con el dúo de droides acompañantes R2-D2 (Kenny Baker) y C-3PO (Anthony Daniels) para rescatar a la hermosa princesa, ayudar al Alianza Rebelde, y restaurar la libertad y la justicia en la Galaxia.'
        },
        {
            name: 'Star Wars',
            title: 'Hansolo',
            img: hansolo,
            description:'El joven Han Solo encuentra la aventura cuando une fuerzas con una pandilla de contrabandistas galácticos y un wookie de 190 años llamado Chewbacca. En deuda con el gángster Dryden Vos, la tripulación idea un atrevido plan para viajar al planeta minero Kessel para robar un lote de valioso coaxium. Al necesitar una nave rápida, Solo conoce a Lando Calrissian, el afable propietario de la nave perfecta para la peligrosa misión: el Halcón Milenario.'
        },
        {
            name: 'Star Wars',
            title: 'El ultimo Jedi',
            img: lastjedi,
            description:'La existencia pacífica y solitaria de Luke Skywalker se ve alterada cuando se encuentra con Rey, una joven que muestra fuertes signos de la Fuerza. Su deseo de aprender los caminos de los Jedi obliga a Luke a tomar una decisión que cambiará sus vidas para siempre. Mientras tanto, Kylo Ren y el General Hux lideran a la Primera Orden en un asalto total contra Leia y la Resistencia por la supremacía de la galaxia.'
        },
        {
            name: 'Star Wars',
            title: 'Solo',
            img: solo,
            description: 'Muchos años antes de conocer a Luke Skywalker y la Princesa Leia, en una galaxia donde impera el caos y existen numerosas bandas criminales, el joven Han Solo consigue huir del planeta Corellia, pero atrás queda su amada Qira, y Han promete volver a por ella algún día. Tras apuntarse a la Academia Imperial para ser piloto, Han conoce a un wookie llamado Chewbacca y más tarde al famoso jugador Lando Calrissian, dueño del Halcón milenario. En una misión desesperada, Han se unirá a Tobias Beckett para obtener un valioso cargamento de coaxium, del que se extrae el hiperfuel para que las naves naveguen por el hiperespacio.'
        },
    ]

    const { id } = useParams();
    return (
        <Container className="mt-2">
            {Array.from(categories).map((category) => {
                if (category.title === id) {
                    return (
                        <Card className='bg-dark'>
                            <Row className='d-flex my-2'>
                                <Col className='d-flex col-md-4'>
                                    <Card.Img className=' p-2 mx-2' variant="top" src={category.img} />
                                </Col>
                                <Col className='d-flex col-md-8'>
                                    <Card.Body>
                                        <Card.Text className='text-white mx-2' align='justify'>
                                            <h1>
                                                {category.title}
                                            </h1>
                                            <hr />
                                            <h4>
                                            {category.description}
                                            </h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    )
                }
            })
            }
        </Container >
    )
}

export default ContentDetails