import React from 'react'
import RichText from "prismic-reactjs/src/Component";
import styled from "styled-components";


const HeroWrapper = styled.section`
  background: url('${props => props.backgroundImage}');
  height: 65vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding:80px
  }
`
export const Hero = ({title, content, backgroundImage}) => {
    return (
        <HeroWrapper backgroundImage={backgroundImage}>
            <div>
                <RichText render={title}/>
                <p>{content}</p>
            </div>
        </HeroWrapper>

    )
}
