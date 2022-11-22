import { Story, Meta } from '@storybook/angular/types-6-0';
import { CardCarouselComponent } from './card-carousel.component';

export default {
    title : "Ticket Boooking System/Card-Carousel Component",
    component : CardCarouselComponent,
    
} as Meta;


const Template: Story<CardCarouselComponent> = (args: CardCarouselComponent) => ({
    props: args,
});

export const CardCarousel = Template.bind({});