import {getGifs} from '../../helpers/getGifs'

describe('Pruebas con getGifs Fetch', () => {

    test('debe traer 10 elementos', async() => {
      
        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBe(10);

    })

    test('debe traer arreglo vacio', async() => {
      
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    })
})
