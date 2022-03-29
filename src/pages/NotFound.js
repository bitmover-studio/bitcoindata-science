import React from "react";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Container className="p-5 mt-4 text-center">
            <h3 className="pb-4 font-weight-bolder">Erro 404 - Página não encontrada</h3>
            <span className="h5 font-weight-normal">Retornar para a <Link to="/" className="text-secondary">
                página inicial.
            </Link></span>
        </Container>
    )
}

export default NotFound