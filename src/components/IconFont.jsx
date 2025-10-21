import { useState } from "react";

const IconFont = ({ name = '', style = {}, tooltip = "", onClick = () => {}, className='', type = "si" }) => {
  const [isHovered, setIsHovered] = useState(false);
  let iconClass;

  if (type === "si") {
    iconClass = `si si-${name} ` + className;
  } else if (type === 'dev') {
    iconClass = `devicon-${name}-plain ` + className;
  } else return;
  
  return (
    <span className="relative flex justify-center duration-300 h-fit" onClick={onClick} title={tooltip}>
      <i
        className={iconClass}
        style={style}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
      >
      </i>
    </span>
  )
}

export default IconFont;

export const IconCapsule = ({ icon='', name = '', color='black', style = {}, onClick = () => {}, className='text-xl', type = "si" }) => {
  let iconClass;

  if (type === "si") {
    iconClass = `si si-${icon} ` + className;
  } else if (type === 'dev') {
    iconClass = `devicon-${icon}-plain ` + className;
  } else return;
  
  return (
    <div className="flex gap-2 items-center border py-1 px-3 rounded-full w-fit text-blue-bell-800 shadow">
      <i className={iconClass} style={{color: color}} />
      <span className="font-medium text-blue-bell-800">{name}</span>
    </div>
  )
}