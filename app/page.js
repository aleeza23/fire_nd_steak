import Home from '@/components/Home';
import dynamic from 'next/dynamic';
import banner from '@/public/slide03.webp'
import { GrRestaurant } from "react-icons/gr";
const Container = dynamic(() => import('@/components/Container'), {
  ssr: false,
});


const slides = [
  {
    image: banner,
    heading: "Welcome to The Fire and Steak House",
    text: "We are glad to have you here. Explore our services and offerings",
    buttonText: "View Menu",
    icon: <GrRestaurant className="text-yellow-500 text-5xl" />,
    link: '/menu',
  },
];
const HomePage = () => {

  return (
    <Container>
      <div className="relative w-[100vw] xl:w-[83vw] ms-0 lg:ms-auto h-[100vh] overflow-hidden">
        {slides.map((slide, index) => (
          <Home slide={slide} key={index} />

        ))}
      </div>
    </Container>
  );
}

export default HomePage;
