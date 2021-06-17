import React from 'react'
import {Hero} from "./hero";
import {CallToActionGrid} from "./callToActionGrid";

export const SliceZone = ({body}) => {
    return (
        <div>
            {body.map((bodyContent, i) => {
                if (bodyContent.type === 'hero2') {
                    return (
                        <Hero
                            key={i}
                            backgroundImage={bodyContent.primary.background_image.url}
                            title={bodyContent.primary.hero_title}
                            content={bodyContent.primary.hero_content}
                        />
                    )
                } else if (bodyContent.type === 'call_to_action_grid') {
                    return (
                        <CallToActionGrid
                        key={i}
                        callToActionGrid={bodyContent.fields}
                        title={bodyContent.primary.section_title}
                        />
                    )
                } else {
                    return null
                }
            })}
        </div>
    )
}
