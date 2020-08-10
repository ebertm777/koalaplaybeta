import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';


const ErrorPage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

const PageNotFound = styled.div`
    background: var(--white);
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 155);
    color: purple;
    padding: 1rem;
    font-size: 20px;
    margin-bottom: 1rem;

    & i {
        font-size: 100px;
        color: var(--primary);
    }
`

const ErrorTitle = styled.div`
    color: #ff1324;
    font-size: 40px;
    font-weight: 500;
`

const Pagina404 = () => (
    <>
        <div style={{ display: 'none' }}>
            {document.body.style.paddingTop = "0px"}
        </div>
        <ErrorPage>
            <PageNotFound>
                <i className="material-icons">Ops! erro</i>
                <ErrorTitle>404</ErrorTitle>
                Página Não Encontrada!
            </PageNotFound>
            <Button as={Link} to="/">
                Retornar
            </Button>
        </ErrorPage>

    </>
);

export default Pagina404;