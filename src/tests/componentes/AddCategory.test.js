import React from 'react';
import { shallow } from 'enzyme'
import { AddCategory } from '../../componentes/AddCategory';
import '@testing-library/jest-dom'


describe('Pruebas en <AddCategory />>', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    
    beforeEach( () =>  {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    });

    
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe cambiar el input', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe postear ', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe llamar el setCategories y limpiar el input', () => {
        const input = wrapper.find('input');
        const value = 'Dragon Ball';
        input.simulate('change', {target: {value}});

        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(input.prop('value')).toBe('');


    })
    
    
})
