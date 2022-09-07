import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Row, Col, Container } from 'react-bootstrap';
import Disney from '../media/Disney.jpg';
import Marvel from '../media/Marvel.jpg';
import Nationalg from '../media/Nationalg.png';
import Pixar from '../media/Pixar.jpg';
import Starwars from '../media/Starwars.jpg';



const Home = () => {

    const categories = [
        {
            title: 'Disney',
            img: Disney
        },
        {
            title: 'National Geographic',
            img: Nationalg
        },
        {
            title: 'Pixar',
            img: Pixar
        },
        {
            title: 'Star Wars',
            img: Starwars
        },
        {
            title: 'Marvel',
            img: Marvel
        }

    ]

    return (
        <div className='p-4'>
            <h1 className='mb-4 text-center p-2'>CATEGORIAS</h1>
            <Row xs={1} md={5} className="g-4">
                {Array.from(categories).map((category, id) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={category.img} />
                            <Card.Body className="text-center">
                                <Link to={`/home/${category.title}`} className="link-dark">
                                    {category.title}
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default Home