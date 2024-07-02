import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en el <GiftItem />', () => {

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<GifItem title="Un titulo" url="https://localhost/algo.jpg" />);
        expect( container ).toMatchSnapshot();
        
    });

});