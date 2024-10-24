import { moto, aboutme } from "../string";
import { languages, technologies } from "../constants";
import IconFont from "../components/IconFont";

const Home = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="montserrat w-fit">
          <p className="text-[128px] font-thin ml-20 w-fit">Pyromagne</p>
          <p className="text-2xl ml-24 w-fit">OREWANINGENJANAI</p>
          <p className="ml-24">{moto}</p>
        </div>
      </div>
      <main className="m-24 mt-16">
        <p className="text-lg w-1/2">{aboutme}</p>
        <p className="font-semibold text-2xl mb-4 mt-8 montserrat">Languages</p>
        <div className="flex gap-4">
          {languages.map((icon, index) => {
            return (
              <IconFont name={icon.icon} color2={icon.color} tooltip={icon.name} size={'32px'} key={index} />
            )
          })}
          <IconFont name='csharp' tooltip='C#' color2="#69207A" className="devicon-csharp-plain text-[32px] leading-normal"></IconFont>
          <IconFont name='java' tooltip='Java' color2="#EB2C2E" className="devicon-java-plain text-[32px] leading-normal"></IconFont>
        </div>
        <p className="font-semibold text-2xl mb-4 mt-8 montserrat">Technologies</p>
        <div className="flex gap-4">
          {technologies.map((icon, index) => {
            return (
              <IconFont name={icon.icon} color2={icon.color} tooltip={icon.name} size={'32px'} key={index} />
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default Home;
