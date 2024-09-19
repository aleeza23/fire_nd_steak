import Address from '@/components/Address';
import ContactUs from '@/components/ContactUs';
import Container from '@/components/Container';
import Footer from '@/components/Footer';
import MenuCard from '@/components/MenuCard';
import MenuDetails from '@/components/MenuDetails';
import bgImg from '@/public/pic1.webp';
import Image from 'next/image';
import MenuData from '@/Data/MenuData';



const MenuPage = () => {
  return (
    <Container>
      <section className="relative py-10 w-[100vw] xl:w-[83vw]">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src={bgImg}
              alt="Background Image"
              fill
              priority
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
        </div>

        {/* Card Container */}
        <div className="relative z-10 container mx-auto px-4">

          <h6 className="text-lg mb-3 text-yellow-300 text-center">Special Selection</h6>
          <h1 className="text-4xl font-bold mb-4 text-white text-center font-pirata-one tracking-widest">Delicious Menu</h1>

          <div className="flex flex-wrap -mx-4">
            {MenuData.map((card, index) => (
              <MenuCard
                key={index}
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
                link={card.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* menu details card */}
      <MenuDetails />

      {/* contact us */}
      <ContactUs />

      {/* address */}
      <Address />
      <Footer />
    </Container>
  );
};

export default MenuPage;
