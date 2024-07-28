import { cleanup, render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"

describe('Pruebas en el componente GifGridItem', () => { 
    afterEach(cleanup)
    
    const url="http://urltest.com/";
    const title = "titleTest"

    test('Debe asegurarse el snapshot es correcto', () => { 
       const {container} = render(<GifGridItem url={url} title={title} />)

       expect(container).toMatchSnapshot();
    });

    test('Debe de mostrat la imagen con el URL y el ALT indicado', () => { 
        render(<GifGridItem url={url} title={title} />);
        screen.debug()

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe(url);
        expect( alt ).toBe(title);

        // expect(screen.getByRole('img').src).toBe(url.toLowerCase());
     });

     test('Se debe mostrar el titulo en el componente', () => { 
        render(<GifGridItem url={url} title={title} />);
        expect(screen.findByText(title)).toBeTruthy()
      })



 })