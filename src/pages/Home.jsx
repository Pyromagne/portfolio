import { moto } from "../constants/strings";
const Home = () => {

  return (
    <main>
      <div className="relative mt-36">
        <div className="wave-container absolute top-10 left-0 w-full z-0">
          <div className="wave"></div>
          <div className="wave flipped-wave"></div>
        </div>
        <div className="montserrat w-full relative z-10">
          <p className="text-7xl font-thin text-center">RICARDO ARON III</p>
          <p className="text-2xl font-light text-center">Full Stack Developer</p>
          <p className="text-center mt-10 text-blue-bell-600">{moto}</p>
        </div>
      </div>

      <div>
        
      </div>
    </main>
  );
}

export default Home;