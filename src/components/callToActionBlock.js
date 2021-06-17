import React from 'react'
import styled from "styled-components";
import RichText from "prismic-reactjs/src/Component";
import {Link} from "gatsby";

const CallToActionGridBlock = styled.section`
  padding: 20px;
  background: #ffdea7;
  border-radius: 10px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 400px) {
    .call-to-action-content {
      flex-direction: column;
    }
  }

  .call-to-action-content {
    display: flex;
    align-items: center;


    .featured-image-wrapper {
      margin: 0 10px;
      background: white;
      padding: 10px;
      border-radius: 10px;
      margin: auto 10px;
    }

    img {
      max-width: 200px;
    }
  }
`

const Button = styled.div`
  cursor: pointer;
  background: orange;
  border-radius: 4px;
  max-width: fit-content;

  a {
    padding: 4px 8px;
    color: white;
    display: inline-block;
    text-decoration: none;
  }
`
export const CallToActionBlock = ({title, content, buttonLabel, buttonDestination, featuredImage}) => {
    return (
        <CallToActionGridBlock>
            <RichText render={title}/>
            <div className={'call-to-action-content'}>
                <RichText render={content}/>
                <div className={'featured-image-wrapper'}>
                    <img src={featuredImage} alt={'Featured'}/>
                </div>
            </div>
            <Button>
                <Link to={buttonDestination}>{buttonLabel}</Link>
            </Button>
        </CallToActionGridBlock>
    )
}
