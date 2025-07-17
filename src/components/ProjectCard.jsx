import FlashlightWrapper from "./FlashlightWrapper";
import IconFont from "./IconFont";
import { languages } from "../constants/techstacks";

const ProjectCard = ({project}) => {
  return (
    <FlashlightWrapper pattern="grain" opacity={0.6} className="overflow-hidden h-full w-full rounded-xl border border-blue-bell-800 shadow hover:shadow-lg duration-300 cursor-crosshair">
      <div className="overflow-hidden flex flex-col h-full -z-10 recent-project-bg">
        <img
          src={project.urls.image}
          alt={project.name}
          className="duration-200 h-64 object-cover z-20"
        />
        <p className="text-sideways-lr p-2 absolute right-0 bottom-0 font-bold text-6xl truncate z-10 opacity-10">{project.name}</p>

        <div className="p-4">
          <div className="mt-2">
            <a href={project.urls.website} target="_blank" rel="noopener noreferrer">
              <p className="font-bold montserrat truncate hover:text-blue-bell-900">{project.name}</p>
            </a>
            <p className="victor-mono text-sm">{project.type?.join(", ")}</p>
          </div>
          <p className="my-8 text-justify">{project.description}</p>
        </div>

        <div className="flex gap-2 mt-auto px-4">
          {project.tags.techstacks.map((t, index) => <IconFont key={index} name={t} size={20} tooltip={t} className="text-blue-bell-600 text-2xl" />)}
        </div>
        <div className="p-2">
          {project.tags.languages?.map((lang, index) => (
            <span
              key={index}
              style={{
                color: languages.find((L) => L.icon === lang)?.color,
              }}
              className="border-2 victor-mono text-xs px-1 rounded font-semibold mr-2"
            >
              {languages.find((L) => L.icon === lang)?.name}
            </span>
          ))}
        </div>
      </div>
    </FlashlightWrapper>
  )
}

export default ProjectCard;