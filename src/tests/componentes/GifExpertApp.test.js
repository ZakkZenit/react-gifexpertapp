import React from 'react';
import { shallow } from 'enzyme';
import {GifExpertApp} from '../../GifExpertApp';
import {renderHook} from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en GifExpertapp', () => {
    
    test('debe cargar correctamente', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    })

    test('debe retornar el estado inicial ', async() => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Dragon Ball'));
        const {data, loading} = result.current;

        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    })
    
    test('debe retornar arreglo de imagenes y loading en false', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Dragon Ball'));
        await waitForNextUpdate();
        
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();
    })
    
    
})
