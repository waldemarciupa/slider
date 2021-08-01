import React from 'react';
import styled from 'styled-components';

const StyledSlider = styled.div`
    width: ${(props) => props.isOpen ? "100%" : "16.5%"};
    max-width: ${(props) => props.isOpen ? "70%" : "none"};
    cursor: ${(props) => props.isOpen ? "default" : "pointer"};
    min-width: 16.5%;
    height: 504px;
    position: relative;
    z-index: 0;
    transition: width 300ms cubic-bezier(0,0,.3,1);
`;

const StyledWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;

    &:hover {
        .bg {
            max-width: ${(props) => props.isOpen ? "412px" : "40px"};
            max-height: ${(props) => props.isOpen ? "300px" : "40px"};
            min-height: ${(props) => props.isOpen ? "300px" : "40px"};
            transition: all cubic-bezier( 0,0,0.30,1 ) 300ms;
        }
    }
`;

const StyledOverlay = styled.div`
    background: ${(props) => props.isOpen ? "transparent" : "rgba(0,0,0,.5)"};
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 2;
    transition: all 250ms cubic-bezier(0,0,0,1);

    &:hover {
        background: ${(props) => props.isOpen ? "transparent" : "rgba(0,0,0,.4)"};
        transition: background .3s ease;
    }
`;

const StyledImage = styled.div`
    background: ${props => `url("${props.background}") no-repeat top center`};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
`;

const StyledText = styled.div`
    width: 100%;
`;

const StyledContent = styled.div`
    height: 100%;
    display: flex;
    color: #fff;
    align-items: center;
`;

const StyledSlideText = styled.div`
    display: flex;
    margin-bottom: 23px;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: .3px;
    font-family: empikProBold;
    width: 75%;
    height: ${(props) => props.isOpen ? "13%" : "auto"};
    z-index: 2;
    position: relative;
    flex-direction: column;
    pointer-events: none;
`;

const StyledHeadline = styled.h2`
    margin-left: 23px;
    font-size: 26px;
    display: ${(props) => props.isOpen ? "none" : "block"};
`;

const StyledSlideCard = styled.div`
    width: ${(props) => props.isOpen ? "100%" : "inherit"};
    max-width: ${(props) => props.isOpen ? "412px" : "36px"};
    max-height: ${(props) => props.isOpen ? "300px" : "36px"};
    min-height: ${(props) => props.isOpen ? "300px" : "36px"};
    border-radius: ${(props) => props.isOpen ? "8px" : "32px"};
    min-width: 36px;
    display: flex;
    justify-content: center;
    flex-direction: column; 
    position: absolute;
    align-items: ${(props) => props.isOpen ? "flex-start" : "center"};
    bottom: ${(props) => props.isOpen ? "-130px" : "-36px"};
    left: ${(props) => props.isOpen ? "13%;" : "24px"};
    padding: ${(props) => props.isOpen ? "42px" : "0"};
    margin: 0;
    z-index: 2;
    transition: all cubic-bezier( 0,0,0.30,1 ) 300ms;
`;

const StyledSlideCardImage = styled.img`
    position: absolute;
    display: ${(props) => props.isOpen ? "none" : "block"};
`;

const StyledSlideCardWrapper = styled.div`
    pointer-events: ${(props) => props.isOpen ? "all" : "none"};
`;

const StyledSlideCardText = styled.div`
    font-size: 32px;
    line-height: 40px;
    letter-spacing: .2px;
    width: 100%;
    visibility: ${(props) => props.isOpen ? "visible" : "hidden"};
    opacity: ${(props) => props.isOpen ? "1" : "0"};
    margin-top: ${(props) => props.isOpen ? "0" : "0"};
    margin-bottom: 34px;
    display: flex;
    font-family: empikProBold;
    cursor: pointer;
    z-index: 2;
    position: relative;
    flex-direction: column;
    cursor: default;
    top: 0;
    transition: all cubic-bezier( 0,0,0.30,1 ) 300ms;
    transition-delay: 200ms;
`;

const StyledSlideCardTextNormal = styled.h2`
    margin: 0;
    margin-bottom: 24px;
    font-size: 32px;
    padding: 0;
`;

const StyledSlideCardTextSpecial = styled.span`
    font-size: 56px;
    letter-spacing: .2px;
`;

const StyledButtonWrapper = styled.div`
    visibility: ${(props) => props.isOpen ? "visible" : "hidden"};
    opacity: ${(props) => props.isOpen ? "1" : "0"};
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:  visibility, opacity cubic-bezier( 0,0,0.30,1 ) 300ms;
    transition-delay: 200ms;
`;

const StyledButton = styled.a`
    background: #000;
    border-radius: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: empikProBold;
    width: 133px;
    font-size: 14px;
    z-index: 1;
    height: 40px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
`;

const StyledTextSmall = styled.p`
    font-family: empikProBold;
    font-size: 14px;
    margin-left: 24px;
`;

const Slide = ({ myClassName, isOpen, background, id, stateChanger, headlineText, openTextTop, openTextTopAfterBr, openTextBottom, openTextSmall, href }) => {

    const handleClick = () => {
        stateChanger({
            id: id
        })
    }

    return (
        <StyledSlider className={myClassName} onClick={handleClick} isOpen={isOpen} >
            <StyledWrapper isOpen={isOpen} >
                <StyledOverlay isOpen={isOpen} />
                <StyledImage background={background} />
                <StyledText >
                    <StyledContent >
                        <StyledSlideText isOpen={isOpen}>
                            <StyledHeadline isOpen={isOpen} >
                                {headlineText}
                            </StyledHeadline >
                            <StyledSlideCard className="bg" isOpen={isOpen}>
                                <StyledSlideCardImage isOpen={isOpen} src={"https://static.empikfoto.pl/slider/open-slider.svg"} />
                                <StyledSlideCardWrapper isOpen={isOpen}>
                                    <StyledSlideCardText isOpen={isOpen}>
                                        <StyledSlideCardTextNormal>
                                            {openTextTop}<br></br>{openTextTopAfterBr}
                                        </StyledSlideCardTextNormal>
                                        <StyledSlideCardTextSpecial>
                                            {openTextBottom}
                                        </StyledSlideCardTextSpecial>
                                    </StyledSlideCardText>
                                    <StyledButtonWrapper isOpen={isOpen}>
                                        <StyledButton href={href}>Sprawdź</StyledButton>
                                        <StyledTextSmall>
                                            {openTextSmall}
                                        </StyledTextSmall>
                                    </StyledButtonWrapper>
                                </StyledSlideCardWrapper>
                            </StyledSlideCard>
                        </StyledSlideText>
                    </StyledContent>
                </StyledText>
            </StyledWrapper>
        </StyledSlider >
    )
}

export default Slide;