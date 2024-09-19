// app/menu/[menuItem]/page.js
import Image from 'next/image';
import MenuData from '@/Data/MenuData';
import Container from '@/components/Container';
import banner from '@/public/gourmet-steak-grilled-natural-flame-generated-by-ai_188544-10231.jpg';
import ClientMenuItems from '@/components/ClientMenuItems';

const MenuItems = ({ params }) => {
    const menuItemSlug = params.menuItem;
    const menuItem = MenuData.find(card => card.link.split('/').pop() === menuItemSlug);

    if (!menuItem) {
        return <div>Menu item not found.</div>;
    }

    return (
        <Container>
            <section className="relative w-full h-[400px]">
                <Image
                    src={banner}
                    alt="Background Image"
                    fill
                    sizes="100vw"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-white text-center font-pirata-one tracking-widest">{menuItem.title}</h1>
                    <p className="text-lg mt-3 text-center text-white max-w-2xl">{menuItem.description}</p>
                </div>
            </section>
            <ClientMenuItems menuItem={menuItem} />
        </Container>
    );
};

export async function generateStaticParams() {
    return MenuData.map(card => ({
        menuItem: card.link.split('/').pop(),
    }));
}

export default MenuItems;
