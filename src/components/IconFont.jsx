import { useState } from "react";

const IconFont = ({ name = '', size = {}, color = 'white', color2='white', tooltip = '', onClick = () => {}, className='' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button className="relative flex justify-center duration-300" onClick={onClick}>
      <i
        className={`si si-${name} ` + className}
        style={{ fontSize: size, color: isHovered ? color2 : color }}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
      >
      </i>

      <span className={`${isHovered ? 'visible opacity-100' : 'invisible opacity-0'} absolute -bottom-7 duration-200`}>
        <p className="montserrat text-nowrap">{tooltip}</p>
      </span>
    </button>
  )
}

export default IconFont;