import dynamic from 'next/dynamic';
import Container from '@/components/Container';
import bgImg from '@/public/slide01.webp';
import Image from 'next/image';

// Dynamically import components
const ClientMenuItems = dynamic(() => import('@/components/ClientMenuItems'));
const Address = dynamic(() => import('@/components/Address'));
const ContactUs = dynamic(() => import('@/components/ContactUs'));
const Footer = dynamic(() => import('@/components/Footer'));

const MenuPage = () => {
  return (
    <Container>
      <ClientMenuItems>
        <Image
          src={bgImg}
          alt="Background Image"
          fill
          sizes="(min-width: 1980px) 1536px, (min-width: 1320px) calc(68.75vw + 189px), (min-width: 1040px) calc(21.15vw + 804px), (min-width: 780px) 768px, (min-width: 680px) 640px, calc(94.44vw + 17px)"
          className=" object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white text-center font-pirata-one tracking-widest">Discover Our Delicious Menu</h1>
          <p className="text-lg mt-3 text-center text-white max-w-2xl px-3 lg:px-0">
            Savor the taste of flame-grilled perfection with every delicious bite. Our expertly crafted dishes are designed to tantalize your taste buds.
          </p>
        </div>
      </ClientMenuItems>
      <ContactUs />
      <Address />
      <Footer />
    </Container>
  );
};

export default MenuPage;
