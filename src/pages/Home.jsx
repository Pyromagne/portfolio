import { moto, aboutme } from "../string";
import { languages, technologies } from "../constants";
import IconFont from "../components/IconFont";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <main className="">
      <div className="flex">
        <div className="montserrat w-fit">
          <p className="text-[128px] font-thin ml-4 w-fit">Pyromagne</p>
          <p className="text-2xl ml-8 w-fit tracking-widest">OREWANINGENJANAI</p>
        </div>
      </div>
      <section className="m-8 mt-16 flex flex-col">
        <p className="text-lg w-1/2 victor-mono h-20">
          <Typewriter words={[aboutme, moto]} loop={false} delaySpeed={5000}
            deleteSpeed={20} typeSpeed={30} cursor={true}
            cursorBlinking={true} cursorStyle='_' cursorColor="white"
          />
        </p>
        <p className="font-semibold text-2xl mb-4 mt-8 montserrat self-end">Languages</p>
        <div className="flex gap-4 justify-end">
          {languages.map((icon, index) => {
            return (
              <IconFont name={icon.icon} color2={icon.color} tooltip={icon.name} size={'32px'} key={index} />
            )
          })}
          <IconFont name='csharp' tooltip='C#' color2="#69207A" className="devicon-csharp-plain text-[32px] leading-normal"></IconFont>
          <IconFont name='java' tooltip='Java' color2="#EB2C2E" className="devicon-java-plain text-[32px] leading-normal"></IconFont>
        </div>
        <p className="font-semibold text-2xl mb-4 mt-8 montserrat self-end">Technologies</p>
        <div className="flex gap-4 justify-end">
          {technologies.map((icon, index) => {
            return (
              <IconFont name={icon.icon} color2={icon.color} tooltip={icon.name} size={'32px'} key={index} />
            )
          })}
        </div>
      </section>
    </main>
  );
}

export default Home;
