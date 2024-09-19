import card01 from '@/public/card1.webp';
import card02 from '@/public/card2.webp';
import card03 from '@/public/card3.webp';

const MenuData = [
    {
        id: 'menu-item-1',
        imgSrc: card01,
        title: 'Flavour Loaded Steaks',
        link: '/menu/flavour-loaded-steaks',
        description: 'A succulent steak, grilled to perfection and served with a rich, flavorful sauce. Perfectly seasoned and sure to satisfy your taste buds.',
        subMenuItems: [
            {
                id: 'sub-menu-item-1-1',
                imgSrc: card01,
                title: 'Twin Steak Special',
                price: ' 7000',
            },
            {
                id: 'sub-menu-item-1-2',
                imgSrc: card01,
                title: 'Fire Steak',
                price: ' 8500',
            },
            // Add more sub-items as needed
        ],
    },
    {
        id: 'menu-item-2',
        imgSrc: card02,
        title: 'Cheese Fries',
        link: '/menu/cheese-fries',
        description: 'Crispy golden fries smothered in melted cheese and topped with a hint of seasoning. A classic comfort food that’s delicious.',
        subMenuItems: [
            {
                id: 'sub-menu-item-2-1',
                imgSrc: card02,
                title: 'Classic Cheese Fries',
                price: ' 2000',
            },
            {
                id: 'sub-menu-item-2-2',
                imgSrc: card02,
                title: 'Spicy Cheese Fries',
                price: ' 2400',
            },
            // Add more sub-items as needed
        ],
    },
    {
        id: 'menu-item-3',
        imgSrc: card03,
        title: 'Penne Chicken Pasta',
        link: '/menu/penne-chicken-pasta',
        description: 'Tender penne pasta combined with juicy chicken and a rich, creamy sauce. This dish offers a hearty and satisfying meal.',
        subMenuItems: [
            {
                id: 'sub-menu-item-3-1',
                imgSrc: card03,
                title: 'Chicken Penne Pasta',
                price: ' 3800',
            },
        ],
    },
];

export default MenuData;
