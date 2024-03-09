import { useRef, useState } from "react";

const ToolboxItem: React.FC<{ image: string; url: string; name: string }> = (
  props
) => {
  const itemRef = useRef<HTMLAnchorElement>(null);

  const [mouseHovering, setMouseHovering] = useState(false);
  const [mouseY, setMouseY] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  return (
    <a
      ref={itemRef}
      className="toolbox-item block border border-[#ddddda] w-28 h-28 rounded-md transition-all relative overflow-hidden hover:shadow-sm hover:border-[#425466]"
      href={props.url}
      onMouseEnter={() => setMouseHovering(true)}
      onMouseLeave={() => setMouseHovering(false)}
      onMouseMove={(e) => {
        setTimeout(() => {
          setMouseY(e.clientY - itemRef.current?.getBoundingClientRect().top!);
          setMouseX(e.clientX - itemRef.current?.getBoundingClientRect().left!);
        }, 90);
      }}
    >
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center backdrop-blur-xl rounded-md">
        <img src={props.image} className="w-8" />
        <span className="text-sm">{props.name}</span>
      </div>
      <div
        className="rounded-full w-16 h-16 bg-gray-400 -z-10 absolute transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: !mouseHovering ? 0 : 0.3, left: mouseX, top: mouseY }}
      ></div>
    </a>
  );
};

export default ToolboxItem;
