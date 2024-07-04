import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => {

    const category = 'Avatar';

    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category }  /> );
        expect( screen.getByText('Loading...') );
        expect( screen.getByText( category ) );
     })

     test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Cualquier cosa',
                url: 'https://localhost/cualquier.jpg'
            },
            {
                id: '123',
                title: 'Cualquier cosa 2',
                url: 'https://localhost/cualquier2.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category }  /> );

        expect( screen.getAllByRole('img').lenght ).toBe( gifs.lenght );

      })

});