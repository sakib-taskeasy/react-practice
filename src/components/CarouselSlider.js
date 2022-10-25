import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

import CarouselSliderItem from "./CarouselSliderItem";
import "./CarouselSlider.css";

import imgSlider1 from "../images/slider-1.jpg";
import imgSlider2 from "../images/slider-2.jpg";
import imgSlider3 from "../images/slider-3.jpg";
import imgSlider4 from "../images/slider-4.jpg";

function CarouselSlider(props) {
    return (
        <Carousel>
            <CarouselItem>
                <CarouselSliderItem
                    imgPath={imgSlider1}
                    imgAlt="First Slide"
                    captionTitle="First Slide"
                    captionDesc="Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto,
                    incidunt cumque dolor accusamus dolorum, error,
                    in veniam ipsum consequuntur mollitia saepe veritatis cupiditate vitae.
                    Suscipit minus omnis maiores nulla nobis."
                />
            </CarouselItem>
            <CarouselItem>
                <CarouselSliderItem
                    imgPath={imgSlider2}
                    imgAlt="Second Slide"
                    captionTitle="Second Slide"
                    captionDesc="Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto,
                    incidunt cumque dolor accusamus dolorum, error,
                    in veniam ipsum consequuntur mollitia saepe veritatis cupiditate vitae.
                    Suscipit minus omnis maiores nulla nobis."
                />
            </CarouselItem>
            <CarouselItem>
                <CarouselSliderItem
                    imgPath={imgSlider3}
                    imgAlt="Third Slide"
                    captionTitle="Third Slide"
                    captionDesc="Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto,
                    incidunt cumque dolor accusamus dolorum, error,
                    in veniam ipsum consequuntur mollitia saepe veritatis cupiditate vitae.
                    Suscipit minus omnis maiores nulla nobis."
                />
            </CarouselItem>
            <CarouselItem>
                <CarouselSliderItem
                    imgPath={imgSlider4}
                    imgAlt="Fourth Slide"
                    captionTitle="Fourth Slide"
                    captionDesc="Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Architecto,
                    incidunt cumque dolor accusamus dolorum, error,
                    in veniam ipsum consequuntur mollitia saepe veritatis cupiditate vitae.
                    Suscipit minus omnis maiores nulla nobis."
                />
            </CarouselItem>
        </Carousel>
    );
}

export default CarouselSlider;