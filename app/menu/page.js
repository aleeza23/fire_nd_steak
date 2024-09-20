
import ClientMenuItems from '@/components/ClientMenuItems';
import MenuDetails from '@/components/MenuDetails';
import Address from '@/components/Address';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import Container from '@/components/Container';


const MenuPage = () => {

  return (
    <Container>
      <ClientMenuItems />
      <MenuDetails />
      <ContactUs />
      <Address />
      <Footer />
    </Container>
  );
};

export default MenuPage;
