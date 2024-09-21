import dynamic from 'next/dynamic';
import Container from '@/components/Container';

// Dynamically import components
const ClientMenuItems = dynamic(() => import('@/components/ClientMenuItems'));
const Address = dynamic(() => import('@/components/Address'));
const ContactUs = dynamic(() => import('@/components/ContactUs'));
const Footer = dynamic(() => import('@/components/Footer'));

const MenuPage = () => {
  return (
    <Container>
      <ClientMenuItems />    
      <ContactUs />
      <Address />
      <Footer />
    </Container>
  );
};

export default MenuPage;
