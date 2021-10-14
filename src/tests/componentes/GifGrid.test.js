import React from 'react';
import { shallow } from 'enzyme'
import { GifGrid } from '../../componentes/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Preubas <GifGrid />', () => {

    const category = 'Dragon Ball';

    // let wrapper = shallow( <GifGrid category={category}/> );
    
    // beforeEach( () =>  {

    //     wrapper = shallow( <GifGrid category={category}/> );

    // });
    
    test('debe cargar correctamente', () => {

        useFetchGifs.mockReturnValue({
           data: [],
           loading: true 
        });

        const wrapper = shallow( <GifGrid category={category}/> );

        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe mostrar items cuando carga imagenes con useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://google.com',
            title: 'ABC Title'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
 
        expect(wrapper).toMatchSnapshot();
    })
    

})
