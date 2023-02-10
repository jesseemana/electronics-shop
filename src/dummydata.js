import tv1 from './assets/TV1.png';
import tv2 from './assets/TV2.png';
import thinkpad from './assets/thinkpad1.png';

export const dummydata = [
    {
        id: 1,
        category: 'computers',
        name: 'lenovo thinkpad e15',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quibusdam rerum sit tenetur hic voluptas explicabo impedit voluptatem praesentium provident!',
        specs: [ 'i5 11th Generation processor', '16GB DDR3 RAM', '256GB SSD', '13inch UHD LED Display', 'Type-C Charging port', 'USB 3.0' ],
        price: 400,
        image: thinkpad
    },
    {
        id: 2,
        category: 'Televisions',
        name: `55" LG 4K UHD TV`,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quibusdam rerum sit tenetur hic voluptas explicabo impedit voluptatem praesentium provident!',
        specs: ['55 inch 4k UHD Display', 'USB 3.0', 'HDMI x 3', 'Thin Bazel', 'Android 12'],
        price: 550,
        image: tv1
    },
    {
        id: 3,
        category: 'Televisions',
        name: `65" Samsung QLED TV`,
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quibusdam rerum sit tenetur hic voluptas explicabo impedit voluptatem praesentium provident!',
        specs: [ '65 inch 4k UHD Display', '8 Billion colors', 'USB 3.0', 'HDMI x 3', 'Thin Bazel', 'Android 12' ],
        price: 1000,
        image: tv2
    }
];
