import React from 'react';
import { shallow } from 'enzyme'
import { GifGridItem } from "../../componentes/GifGridItem";


describe('Pruebas en el <GifGridItem />', () => {

    const title = 'Titulo';
    const url = 'https://localhost/algo.jpg'

    let wrapper = shallow( <GifGridItem title={title} url={url} /> );
    
    beforeEach( () =>  {

        wrapper = shallow( <GifGridItem title={title} url={url}/> );

    });

    test('debe mostrar el componenete correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener parrafo con titulo ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('debe tener animate fadeIn', () => {
        const div = wrapper.find('div');

        expect(div.hasClass('animate__fadeIn')).toBe(true);
    })
    
    
    
});