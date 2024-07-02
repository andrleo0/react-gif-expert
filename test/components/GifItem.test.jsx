import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en el <GiftItem />', () => {

    const image = {
        title : 'Avatar',
        url : 'https://avatar/korra.jpg'
    }

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifItem {...image} />);
        expect( container ).toMatchSnapshot();
        
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render( <GifItem {...image} /> );
        const { src , alt } = screen.getByRole('img');
        expect( src ).toBe( image.url );
        expect( alt ).toBe( image.title );
        // expect( screen.getByRole('img').src ).toBe( image.url );
        // expect( screen.getByRole('img').alt ).toBe( image.title );

    })

    test('Debe de mostrar el titulo en el componente', () => { 
        render( <GifItem {...image} /> );
        expect( screen.getByText( image.title ) ).toBeTruthy();
    })

});