import { useState } from 'react';
import styled from 'styled-components';
import Slide from './Slide.js';

const StyledSLider = styled.div`
    width: 100%;
    min-height: 504px;
    height: auto;
    margin: 44px auto;
`;

const StyledWrapper = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    height: 504px;
    display: flex;
`;

const Slider = () => {
    const [selectedId, setSelectedId] = useState({
        id: 1
    })

    return (
        <StyledSLider >
            <StyledWrapper >
                <Slide
                    myClassName={"slide-first"}
                    id={1}
                    isOpen={selectedId.id === 1 ? true : false}
                    stateChanger={setSelectedId}
                    background={"https://static.empikfoto.pl/tina/odbitki_tina_210727.jpg"}
                    headlineText={"Odbitki 10x15 do 0,19 zł/szt."}
                    openTextTop={"Odbitki 10x15"}
                    openTextTopAfterBr={"błyszczące"}
                    openTextBottom={"od 0,19 zł/szt."}
                    openTextSmall={"Oferta ważna do 02.08.21 r."}
                    href={"https://www.empikfoto.pl/odbitki"}
                />
                <Slide
                    myClassName={"slide-second"}
                    id={2}
                    isOpen={selectedId.id === 2 ? true : false}
                    stateChanger={setSelectedId}
                    background={"https://static.empikfoto.pl/tina/tina_fotoksiazka_210727_2.jpg"}
                    headlineText={"Fotoksiążka 20x30 tylko 28 zł"}
                    openTextTop={"Fotoksiążka 20x30"}
                    openTextTopAfterBr={""}
                    openTextBottom={"tylko 28 zł"}
                    openTextSmall={"Oferta ważna do 09.08.21 r."}
                    href={"https://www.empikfoto.pl/fotoksiazki/tematy?format=20x30"}
                />
                <Slide
                    myClassName={"slide-third"}
                    id={3}
                    isOpen={selectedId.id === 3 ? true : false}
                    stateChanger={setSelectedId}
                    background={"https://static.empikfoto.pl/tina/apka_28.07.jpg"}
                    headlineText={"Rabat w aplikacji"}
                    openTextTop={"Rabat na odbitki -20%"}
                    openTextTopAfterBr={"za rejestrację"}
                    openTextBottom={"w aplikacji"}
                    openTextSmall={"Oferta ważna do 15.08.21 r."}
                    href={"https://www.empikfoto.pl/aplikacja?screen=Cart"}
                />
            </StyledWrapper>
        </StyledSLider>
    )
}

export default Slider;