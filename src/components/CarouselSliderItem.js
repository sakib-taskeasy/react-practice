import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselSliderItem (props) {
    const {imgPath, imgAlt, captionTitle, captionDesc} = props;
    return (
        <>
            <img className="d-block w-100" src={imgPath} alt={imgAlt} />
            <Carousel.Caption>
                <h1>{captionTitle}</h1>
                <p>{captionDesc}</p>
            </Carousel.Caption>
        </>
    )
}

export default CarouselSliderItem;