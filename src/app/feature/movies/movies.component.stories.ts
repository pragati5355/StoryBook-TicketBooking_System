import { Story, Meta } from '@storybook/angular/types-6-0';
import { MoviesComponent } from './movies.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/shared/service/api.service';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { ElementsModule } from 'src/app/elements/elements.module';
import { FeatureRoutingModule } from '../feature-routing.module';
import { RouterModule } from '@angular/router';
import { withA11y } from '@storybook/addon-a11y';

// @ts-ignore
import markNotes from './../movies/moviesreadme.md';

storiesOf('Movies Component', module)
// .addDecorator(withA11y)
.addDecorator(
    moduleMetadata({
        imports : [HttpClientModule, 
                ElementsModule,
                FeatureRoutingModule,
                RouterModule.forRoot([])],
        declarations : [MoviesComponent],
        providers : [ApiService]
    }),
)
.add('Default', () => {
    return {
        template : `<app-movies></app-movies>`,
        props : {

        }
    }

},{
    notes : {markdownNotes : markNotes}
});

// export default {
//     title : "Movie Component",
//     component : MoviesComponent,    
// } as Meta;

// const Template: Story<MoviesComponent> = (args: MoviesComponent) => ({
//     props: args,
// });

// export const PrimaryCard = Template.bind({});