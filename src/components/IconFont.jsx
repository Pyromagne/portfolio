import { useState } from "react";

const IconFont = ({ name = '', style = {}, tooltip = "", onClick = () => {}, className='' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span className="relative flex justify-center duration-300 h-fit" onClick={onClick} title={tooltip}>
      <i
        className={`si si-${name} ` + className}
        style={style}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
      >
      </i>
    </span>
  )
}

export default IconFont;