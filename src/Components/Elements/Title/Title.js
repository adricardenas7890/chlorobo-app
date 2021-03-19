import React from 'react';
import Container from 'react-bootstrap/Container';

const Title = (props) => {
    return (
        <Container>
            <h1>
                {props.title}
            </h1>
        </Container>
    )
}

export default Title;