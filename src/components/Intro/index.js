import React, { useEffect, useState } from 'react';
import { Wrapper, StyledImg, ContentBox, Title, Button, Colored } from './styles';

export default function Intro() {
    const [isScreenBiggerThan942px, setIsScreenBiggerThan942px] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenBiggerThan942px(window.innerWidth > 942);
        };

        handleResize(); // Call the function initially

        window.addEventListener('resize', handleResize); // Add event listener for resize

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the event listener
        };
    }, []);

    return (
        <Wrapper>
            <StyledImg src={isScreenBiggerThan942px ? "img/branca.png" : "img/branca.png"} srcSet={isScreenBiggerThan942px ? "img/branca.png 942w" : "img/branca.png 942w"} alt="Parallax" />
            <ContentBox>
                <Title><Colored>O seu sonho é o nosso compromisso.</Colored></Title>
                <a href="#Contato"><Button>Entre em contato</Button></a>
            </ContentBox>
        </Wrapper>
    );
}
