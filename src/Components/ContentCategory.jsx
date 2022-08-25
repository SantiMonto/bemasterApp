import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
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


const ContentCategory = () => {

    const categories = [
        {
            name: 'Disney',
            title: 'Lilo y Stich',
            img: lilo
        },
        {
            name: 'Disney',
            title: 'Encanto',
            img: encanto
        },
        {
            name: 'Disney',
            title: 'Frozen',
            img: frozen
        },
        {
            name: 'Disney',
            title: 'La dama y el Vagabundo',
            img: ladamayvagabundo
        },
        {
            name: 'Disney',
            title: 'Mulan',
            img: mulan
        },
        {
            name: 'Disney',
            title: 'UP',
            img: up
        },
        {
            name: 'Marvel',
            title: 'Avengers',
            img: avengers
        },
        {
            name: 'Marvel',
            title: 'Capitan America',
            img: captain
        },
        {
            name: 'Marvel',
            title: 'Guerra Civil',
            img: civilwar
        },
        {
            name: 'Marvel',
            title: 'Iron Man',
            img: ironman
        },
        {
            name: 'Marvel',
            title: 'Logan',
            img: logan
        },
        {
            name: 'Marvel',
            title: 'El hombre Araña',
            img: spiderman
        },
        {
            name: 'National Geographic',
            title: '1989',
            img: eightynine
        },
        {
            name: 'National Geographic',
            title: 'Explorer',
            img: explorer
        },
        {
            name: 'National Geographic',
            title: 'Marte',
            img: mars
        },
        {
            name: 'National Geographic',
            title: 'Fotos',
            img: photos
        },
        {
            name: 'National Geographic',
            title: 'Ballenas',
            img: whales
        },
        {
            name: 'National Geographic',
            title: 'Lugares',
            img: places
        },
        {
            name: 'Pixar',
            title: 'Luca',
            img: luca
        },
        {
            name: 'Pixar',
            title: 'Monsters Inc',
            img: monsters
        },
        {
            name: 'Pixar',
            title: 'Onward',
            img: onward
        },
        {
            name: 'Pixar',
            title: 'Soul',
            img: soul
        },
        {
            name: 'Pixar',
            title: 'Toy Story',
            img: toystory
        },
        {
            name: 'Pixar',
            title: 'Viaje',
            img: viaje
        },
        {
            name: 'Star Wars',
            title: 'Ascenso',
            img: asenso
        },
        {
            name: 'Star Wars',
            title: 'Clon',
            img: clone
        },
        {
            name: 'Star Wars',
            title: 'Guerra de las Galaxias',
            img: guerra
        },
        {
            name: 'Star Wars',
            title: 'Hansolo',
            img: hansolo
        },
        {
            name: 'Star Wars',
            title: 'El ultimo Jedi',
            img: lastjedi
        },
        {
            name: 'Star Wars',
            title: 'Solo',
            img: solo
        },
    ]

    const { id } = useParams();


    return (
        <Container className="mt-4">
            <Row xs={2} md={3} className="g-4">
                {Array.from(categories).map((category) => {
                    if (category.name === id) {
                        return (
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={category.img} />
                                    <Card.Body className="text-center">
                                        <Link to={`${category.title}`} className="link-dark">
                                            {category.title}
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                })}
            </Row>
        </Container>
    )
}

export default ContentCategory