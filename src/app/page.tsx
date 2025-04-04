import Footer from '@/components/Footer';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div>
      <section className="h-screen w-full bg-red-500">
        <Spline
          className="w-full h-screen fixed top-0 left-0"
          scene="https://prod.spline.design/j3dPCCdObKVKGV5g/scene.splinecode"
        />
      </section>
      <section className="w-full mt-[500vh]">
        <Footer />
      </section>
    </div>
  );
}
