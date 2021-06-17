import React from 'react'
import styled from "styled-components";
import RichText from "prismic-reactjs/src/Component";
import {CallToActionBlock} from "./callToActionBlock";

const CallToActionGridWrapper = styled.section`
  max-width: 800px;
  margin: 25px auto;
  padding: 15px;

`
export const CallToActionGrid = ({title, callToActionGrid}) => {
    return (
        <CallToActionGridWrapper>
            <RichText render={title}/>
            {callToActionGrid.map((callToAction, i) => {
                console.log(callToAction);
                return (
                    <CallToActionBlock
                        featuredImage={callToAction.featured_image.url}
                        buttonLabel={callToAction.button_label}
                        buttonDestination={`/${callToAction.button_destination._meta.uid}`}
                        title={callToAction.call_to_action_title}
                        content={callToAction.content}
                        key={i}
                    />
                )
            })}
        </CallToActionGridWrapper>
    )
}
