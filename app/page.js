import dynamic from 'next/dynamic';
import Main from '@/components/Main';




const Container = dynamic(() => import('@/components/Container'), {
  ssr: false,
});


const HomePage = () => {

  return (
    <Container>
      <div className="relative w-[100vw] xl:w-[83vw] ms-0 lg:ms-auto h-[100vh] overflow-hidden">
       <Main />
      </div>
    </Container>
  );
}

export default HomePage;
