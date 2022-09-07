import React, { useState } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import background from '../media/background.jpg'

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const user = {
        email: 'smontoya@bemaster.com',
        password: 'pruebasuperada'
    }

    const validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        toast.warn("Ha ingresado una dirección de correo electronico invalida", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        return (false)
    };

    const loginValidate = async () => {
        if (validateEmail(email)) {
            if (user.email === email && user.password === password) {
                toast.success('Login exitoso', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                navigate('/home');
            }
            else {
                toast.error('Correo o contraseña invalidos',{
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        }
    }

    return (
        <Container className="mt-4 bg-black text-white rounded-2 allign-center">
            <Form className="mb-4">
                <h1 className="p-2 text-center">Bienvenido a BemasterApp</h1>
                <Row>
                    <Col>
                        <img img src={background} className="p-4 w-100" alt="Inicio" />
                    </Col>
                    <Col className="p-4">
                        <h5 className="mb-4">Ingresa tu correo y contraseña para ingresar a la plataforma</h5>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingrese su correo"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su contraseña"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                        </Form.Group>
                        <Button
                            variant="success"
                            type="button"
                            onClick={() => {
                                loginValidate();
                            }}
                        >
                            Login
                        </Button>
                        <ToastContainer/>
                    </Col>
                </Row>
            </Form>
        </Container>

    )
}

export default Login