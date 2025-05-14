import ImgId1 from '../img/ProductsImg/Product-Id-1.jpg'
import ImgId2 from '../img/ProductsImg/Product-Id-2.jpg'
import ImgId3 from '../img/ProductsImg/Product-Id-3.jpg'
import ImgId4 from '../img/ProductsImg/Product-Id-4.jpg'
import ImgId5 from '../img/ProductsImg/Product-Id-5.jpg'
import ImgId6 from '../img/ProductsImg/Product-Id-6.jpg'
import ImgId7 from '../img/ProductsImg/Product-Id-7.jpg'
import ImgId8 from '../img/ProductsImg/Product-Id-8.jpg'
import ImgId9 from '../img/ProductsImg/Product-Id-1.jpg'
import ImgId10 from '../img/ProductsImg/Product-Id-10.jpg'
import ImgId11 from '../img/ProductsImg/Product-Id-11.jpg'
import ImgId12 from '../img/ProductsImg/Product-Id-12.jpg'
import ImgId13 from '../img/ProductsImg/Product-Id-13.jpg'
import ImgId14 from '../img/ProductsImg/Product-Id-14.jpg'
import ImgId15 from '../img/ProductsImg/Product-Id-15.jpg'
import ImgId16 from '../img/ProductsImg/Product-Id-16.jpg'
import ImgId17 from '../img/ProductsImg/Product-Id-17.jpg'
import ImgId18 from '../img/ProductsImg/Product-Id-18.jpg'
import ImgId19 from '../img/ProductsImg/Product-Id-19.jpg'
import ImgId20 from '../img/ProductsImg/Product-Id-20.jpg'
import ImgId21 from '../img/ProductsImg/Product-Id-21.jpg'
import ImgId22 from '../img/ProductsImg/Product-Id-22.jpg'
import ImgId23 from '../img/ProductsImg/Product-Id-23.jpg'
import ImgId24 from '../img/ProductsImg/Product-Id-24.jpg'
import ImgId25 from '../img/ProductsImg/Product-Id-25.jpg'
import ImgId26 from '../img/ProductsImg/Product-Id-26.jpg'
import ImgId27 from '../img/ProductsImg/Product-Id-27.jpg'
import ImgId28 from '../img/ProductsImg/Product-Id-28.jpg'
import ImgId29 from '../img/ProductsImg/Product-Id-29.jpg'
import ImgId30 from '../img/ProductsImg/Product-Id-30.jpg'
import ImgId31 from '../img/ProductsImg/Product-Id-31.jpg'
import ImgId32 from '../img/ProductsImg/Product-Id-32.jpg'
import ImgId33 from '../img/ProductsImg/Product-Id-33.jpg'
import ImgId34 from '../img/ProductsImg/Product-Id-34.jpg'
import ImgId35 from '../img/ProductsImg/Product-Id-35.jpg'
import ImgId36 from '../img/ProductsImg/Product-Id-36.jpg'
import ImgId37 from '../img/ProductsImg/Product-Id-37.jpg'
import ImgId38 from '../img/ProductsImg/Product-Id-38.jpg'
import ImgId39 from '../img/ProductsImg/Product-Id-39.jpg'
import ImgId40 from '../img/ProductsImg/Product-Id-40.jpg'
import ImgId41 from '../img/ProductsImg/Product-Id-41.jpg'
import ImgId42 from '../img/ProductsImg/Product-Id-42.jpg'
import ImgId43 from '../img/ProductsImg/Product-Id-43.jpg'
import ImgId44 from '../img/ProductsImg/Product-Id-44.jpg'
import ImgId45 from '../img/ProductsImg/Product-Id-45.jpg'
import ImgId46 from '../img/ProductsImg/Product-Id-46.jpg'
import ImgId47 from '../img/ProductsImg/Product-Id-47.jpg'
import ImgId48 from '../img/ProductsImg/Product-Id-48.jpg'
import ImgId49 from '../img/ProductsImg/Product-Id-49.jpg'
import ImgId50 from '../img/ProductsImg/Product-Id-50.jpg'
import ImgId51 from '../img/ProductsImg/Product-Id-51.jpg'
import ImgId52 from '../img/ProductsImg/Product-Id-52.jpg'
import ImgId53 from '../img/ProductsImg/Product-Id-53.jpg'
import ImgId54 from '../img/ProductsImg/Product-Id-54.jpg'
import ImgId55 from '../img/ProductsImg/Product-Id-55.jpg'
import ImgId56 from '../img/ProductsImg/Product-Id-56.jpg'
import { FiltersByX } from './filtersData'


  

 type FiltersOptions = Omit<
 FiltersByX,    
 'camas multiposiciones' |
 'comedores' |
 'living' |
 'mesas extensibles' |
 'relax' |
 'sofas cama' >



export type Product = {
    id: number,
    title: string,
    desc: string,
    img: string,
    price: number,
    category: 'relax' | 'sofas cama' | 'living' | 'camas multiposiciones' | 'comedores' | 'mesas extensibles',
    filters: FiltersOptions[]

}





export const productsData: Product[] = [
    {
        id: 1,
        title: 'Olimpo',
        desc: 'Silla de Relax',
        img: ImgId1,
        price: 120000,
        category: 'relax',
        filters: ['eco cuero', 'entrega inmediata']
    },
    {
        id: 2,
        title: 'Munich',
        desc: 'Sillón de Relax',
        img: ImgId2,
        price: 400000,
        category: 'relax',
        filters: ['eco cuero', '3 cuerpos', '40 dias']
    },
    {
        id: 3,
        title: 'Grand-M',
        desc: 'Sillón Masajeador',
        img: ImgId3,
        price: 350000,
        category: 'relax',
        filters: ['tela', 'sillones masajeadores', 'entrega inmediata']
    },
    {
        id: 4,
        title: 'La Rome',
        desc: 'Sillón de Relax',
        img: ImgId4,
        price: 320000,
        category: 'relax',
        filters: ['eco cuero', '2 cuerpos', '35 dias']
    },
    {
        id: 5,
        title: 'Stability',
        desc: 'Silla de Relax',
        img: ImgId5,
        price: 150000,
        category: 'relax',
        filters: ['tela', 'entrega inmediata']
    },
    {
        id: 6,
        title: 'Rest-3000',
        desc: 'Silla de Relax',
        img: ImgId6,
        price: 200000,
        category: 'relax',
        filters: ['tela', 'entrega inmediata']
    },
    {
        id: 7,
        title: 'Vintage',
        desc: 'Silla de Relax',
        img: ImgId7,
        price: 170000,
        category: 'relax',
        filters: [
            'madera', 'entrega inmediata']
    },
    {
        id: 8,
        title: 'Blacker',
        desc: 'Silla de Relax',
        img: ImgId8,
        price: 165000,
        category: 'relax',
        filters: ['eco cuero', 'entrega inmediata']
    },
    {
        id: 9,
        title: 'Oklahoma',
        desc: 'Silla de Relax',
        img: ImgId9,
        price: 180000,
        category: 'relax',
        filters: ['eco cuero', 'entrega inmediata']
    },
    {
        id: 10,
        title: 'Tucson',
        desc: 'Sillón  de Relax',
        img: ImgId10,
        price: 220000,
        category: 'relax',
        filters: ['tela', '2 cuerpos', '35 dias']
    },
    {
        id: 11,
        title: 'Dakota',
        desc: 'Silla de Relax',
        img: ImgId11,
        price: 150000,
        category: 'relax',
        filters: ['tela', 'entrega inmediata']
    },
    {
        id: 12,
        title: 'Barbados',
        desc: 'Sillon de Relax',
        img: ImgId12,
        price: 240000,
        category: 'relax',
        filters: ['cuero', '2 cuerpos', '35 dias']
    },
    {
        id: 13,
        title: 'Onix',
        desc: 'Silla de Relax',
        img: ImgId13,
        price: 120000,
        category: 'relax',
        filters: ['cuero', 'entrega inmediata']
    },
    {
        id: 14,
        title: 'Scarlet',
        desc: 'Sillon de Relax',
        img: ImgId14,
        price: 190000,
        category: 'relax',
        filters: ['cuero', '2 cuerpos', '35 dias']
    },
    {
        id: 15,
        title: 'Lipari',
        desc: 'Sillon de Relax',
        img: ImgId15,
        price: 230000,
        category: 'relax',
        filters: ['tela', '3 cuerpos', '40 dias']
    },
    {
        id: 16,
        title: 'Esmeralda',
        desc: 'Silla de Relax',
        img: ImgId16,
        price: 130000,
        category: 'relax',
        filters: ['tela',
            'madera', 'entrega inmediata']
    },
    {
        id: 17,
        title: 'Purple T',
        desc: 'Silla de Relax',
        img: ImgId17,
        price: 140000,
        category: 'relax',
        filters: ['eco cuero', 'madera', 'entrega inmediata']
    },
    {
        id: 18,
        title: 'Dublin',
        desc: 'Silla de Relax',
        img: ImgId18,
        price: 170000,
        category: 'relax',
        filters: ['tela', 'entrega inmediata']
    },
    {
        id: 19,
        title: 'Burgos',
        desc: 'Silla de Relax',
        img: ImgId19,
        price: 140000,
        category: 'relax',
        filters: ['eco cuero', 'madera', 'entrega inmediata']
    },
    {
        id: 20,
        title: 'Alaska',
        desc: 'Sofá cama 2 plazas',
        img: ImgId20,
        price: 320000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 21,
        title: 'Olsen',
        desc: 'Sofá cama 2 plazas',
        img: ImgId21,
        price: 350000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 22,
        title: 'Quick',
        desc: 'Sofá cama 2 y 1/2 plazas',
        img: ImgId22,
        price: 370000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 23,
        title: 'Doppio',
        desc: 'Sofá cama 1 y 1/2 plazas',
        img: ImgId23,
        price: 300000,
        category: 'sofas cama',
        filters: ['tela', '1 plaza', '40 dias']
    },
    {
        id: 24,
        title: 'Michigan',
        desc: 'Sofá cama 2 y 1/2 plazas',
        img: ImgId24,
        price: 330000,
        category: 'sofas cama',
        filters: ['cuero', '2 plazas', '40 dias']
    },
    {
        id: 25,
        title: 'Suecia',
        desc: 'Sofá cama 2 y 1/2 plazas',
        img: ImgId25,
        price: 370000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 26,
        title: 'Chester',
        desc: 'Sofá cama 1 plaza',
        img: ImgId26,
        price: 380000,
        category: 'sofas cama',
        filters: ['tela', '1 plaza', '35 dias']
    },
    {
        id: 27,
        title: 'Estonia',
        desc: 'Sofá cama 2 plazas',
        img: ImgId27,
        price: 315000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 28,
        title: 'Marruecos',
        desc: 'Sofá cama 1 y 1/2 plazas',
        img: ImgId28,
        price: 330000,
        category: 'sofas cama',
        filters: ['tela', '1 plaza', '35 dias']
    },
    {
        id: 29,
        title: 'Granada',
        desc: 'Silla de Relax',
        img: ImgId29,
        price: 340000,
        category: 'sofas cama',
        filters: ['tela', '35 dias']
    },
    {
        id: 30,
        title: 'Valencia',
        desc: 'Sofá cama 2 plazas',
        img: ImgId30,
        price: 370000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 31,
        title: 'Málaga',
        desc: 'Sofá cama 2 plazas',
        img: ImgId31,
        price: 350000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 32,
        title: 'Andorra',
        desc: 'Sofá cama 2 plazas',
        img: ImgId32,
        price: 315000,
        category: 'sofas cama',
        filters: ['tela', '2 plazas', '40 dias']
    },
    {
        id: 33,
        title: 'París',
        desc: 'Sofá cama 1 plaza',
        img: ImgId33,
        price: 290000,
        category: 'sofas cama',
        filters: ['tela', '1 plaza', '35 dias']
    },
    {
        id: 34,
        title: 'Altona',
        desc: 'Sofá rinconero',
        img: ImgId34,
        price: 320000,
        category: 'living',
        filters: ['tela', '2 cuerpos modulares', '35 dias']
    },
    {
        id: 35,
        title: 'Etherna',
        desc: 'Sofá de living',
        img: ImgId35,
        price: 330000,
        category: 'living',
        filters: ['tela', '3 cuerpos modulares', '40 dias']
    },
    {
        id: 36,
        title: 'Laurent',
        desc: 'Sofá rinconero',
        img: ImgId36,
        price: 380000,
        category: 'living',
        filters: ['tela', '3 cuerpos', 'esquinero', '40 dias']
    },
    {
        id: 37,
        title: 'Motion E01',
        desc: 'Mesa baja',
        img: ImgId37,
        price: 120000,
        category: 'living',
        filters: ['entrega inmediata']
    },
    {
        id: 38,
        title: 'Island',
        desc: 'Sofá en isla',
        img: ImgId38,
        price: 420000,
        category: 'living',
        filters: ['tela', '40 dias']
    },
    {
        id: 39,
        title: 'Motion E02',
        desc: 'Mesa baja',
        img: ImgId39,
        price: 120000,
        category: 'living',
        filters: ['entrega inmediata']
    },
    {
        id: 40,
        title: 'Motion E03',
        desc: 'Mesa Lateral',
        img: ImgId40,
        price: 100000,
        category: 'living',
        filters: ['entrega inmediata']
    },
    {
        id: 41,
        title: 'Motion E04',
        desc: 'Mesa baja',
        img: ImgId41,
        price: 110000,
        category: 'living',
        filters: ['madera', 'entrega inmediata']
    },
    {
        id: 42,
        title: 'Grand Circle Motion',
        desc: 'Mesa Baja',
        img: ImgId42,
        price: 150000,
        category: 'living',
        filters: ['madera', 'entrega inmediata']
    },
    {
        id: 43,
        title: 'Lerida',
        desc: 'Mesa baja plegable',
        img: ImgId43,
        price: 115000,
        category: 'living',
        filters: ['entrega inmediata']
    },
    {
        id: 44,
        title: 'Osaka',
        desc: 'Sofá rinconero modular',
        img: ImgId44,
        price: 370000,
        category: 'living',
        filters: ['tela', '3 cuerpos', 'esquinero', '40 dias']
    },
    {
        id: 45,
        title: 'Loira',
        desc: 'Mesa Baja',
        img: ImgId45,
        price: 130000,
        category: 'living',
        filters: ['40 dias']
    },
    {
        id: 46,
        title: 'Texas',
        desc: 'Silla de living',
        img: ImgId46,
        price: 190000,
        category: 'living',
        filters: ['tela', 'entrega inmediata']
    },
    {
        id: 47,
        title: 'Grand Michigan',
        desc: 'Sofá rinconero modular',
        img: ImgId47,
        price: 430000,
        category: 'living',
        filters: ['tela', '4 cuerpos', 'esquinero', '40 dias']
    },
    {
        id: 48,
        title: 'Flex 1',
        desc: 'Cama articulada',
        img: ImgId48,
        price: 500000,
        category: 'camas multiposiciones',
        filters: ['35 dias']
    },
    {
        id: 49,
        title: 'Flex 2',
        desc: 'Cama articulada',
        img: ImgId49,
        price: 570000,
        category: 'camas multiposiciones',
        filters: ['35 dias']
    },
    {
        id: 50,
        title: 'Extense 1',
        desc: 'Mesa de comedor extensible',
        img: ImgId50,
        price: 230000,
        category: 'comedores',
        filters: ['entrega inmediata']
    },
    {
        id: 51,
        title: 'Extense 2',
        desc: 'Mesa de comedor extensible',
        img: ImgId51,
        price: 240000,
        category: 'comedores',
        filters: ['entrega inmediata']
    },
    {
        id: 52,
        title: 'Extense 3',
        desc: 'Mesa de comedor extensible',
        img: ImgId52,
        price: 260000,
        category: 'comedores',
        filters: ['entrega inmediata']
    },
    {
        id: 53,
        title: 'Vera',
        desc: 'Silla de comedor',
        img: ImgId53,
        price: 80000,
        category: 'comedores',
        filters: ['entrega inmediata']
    },
    {
        id: 54,
        title: 'Metz',
        desc: 'Silla de comedor',
        img: ImgId54,
        price: 70000,
        category: 'comedores',
        filters: ['tela', 'entrega inmediata']
    },
    {
        id: 55,
        title: 'Agness',
        desc: 'Silla de comedor',
        img: ImgId55,
        price: 57000,
        category: 'comedores',
        filters: ['entrega inmediata']
    }, {
        id: 56,
        title: 'Lena',
        desc: 'Silla de comedor',
        img: ImgId56,
        price: 60000,
        category: 'comedores',
        filters: ['entrega inmediata']
    },

    {
        id: 50,
        title: 'Extense 1',
        desc: 'Mesa de comedor extensible',
        img: ImgId50,
        price: 230000,
        category: 'mesas extensibles',
        filters: []
    },
    {
        id: 51,
        title: 'Extense 2',
        desc: 'Mesa de comedor extensible',
        img: ImgId51,
        price: 240000,
        category: 'mesas extensibles',
        filters: []
    },
    {
        id: 52,
        title: 'Extense 3',
        desc: 'Mesa de comedor extensible',
        img: ImgId52,
        price: 260000,
        category: 'mesas extensibles',
        filters: []
    },
]



export const TotalProducts = productsData.length



export const productosXCategorias = Object.entries(productsData.reduce((acc, product: Product) => {

    if (!acc[product.category]) {
        acc[product.category] = []
    }

    acc[product.category] = [...acc[product.category], product]

    return acc

}, {} as Record<string, Product[]>)
)


