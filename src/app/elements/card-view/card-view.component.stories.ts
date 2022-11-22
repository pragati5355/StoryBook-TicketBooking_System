
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CardViewComponent} from './card-view.component';

export default {
    title : "Ticket Boooking System/Card-View Component",
    component : CardViewComponent,
    
} as Meta;

const Template: Story<CardViewComponent> = (args: CardViewComponent) => ({
    props: args,
});

export const PrimaryCard = Template.bind({});
