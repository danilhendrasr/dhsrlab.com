import { useRef, useState } from "react";

type Props = {
  image: string;
  url: string;
  name: string;
  inProgress?: boolean;
  main?: boolean;
};

const ToolboxItem: React.FC<Props> = (props) => {
  const itemRef = useRef<HTMLAnchorElement>(null);

  const [mouseHovering, setMouseHovering] = useState(false);
  const [mouseY, setMouseY] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  let opacity = 1;

  if (props.inProgress && !mouseHovering) {
    opacity = 0.4;
  }

  if (props.inProgress && mouseHovering) {
    opacity = 1;
  }

  return (
    <a
      ref={itemRef}
      className="block border border-[#ddddda] w-28 h-28 rounded-md transition-all relative overflow-hidden hover:shadow-md"
      style={{
        opacity,
        borderColor: props.main ? "#425466" : "#ddddda",
      }}
      onClick={(e) => {
        e.preventDefault();
        alert("Coming soon :p");
      }}
      href={props.url}
      onMouseEnter={() => setMouseHovering(true)}
      onMouseLeave={() => setMouseHovering(false)}
      onMouseMove={(e) => {
        if (props.inProgress) return;
        setTimeout(() => {
          setMouseY(e.clientY - itemRef.current?.getBoundingClientRect().top!);
          setMouseX(e.clientX - itemRef.current?.getBoundingClientRect().left!);
        }, 90);
      }}
    >
      <div className="h-full w-full flex flex-col gap-1 items-center justify-center backdrop-blur-xl rounded-md">
        <div className="w-8 h-10 flex justify-center items-center">
          <img src={props.image} className="w-full invert" />
        </div>
        <span className="text-sm">{props.name}</span>
      </div>
      <div
        className="rounded-full w-16 h-16 bg-gray-400 -z-10 absolute transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundColor: props.main ? "#635bff" : "#425466",
          opacity: mouseHovering && !props.inProgress ? 0.3 : 0,
          left: mouseX,
          top: mouseY,
        }}
      ></div>
      <div
        className="absolute left-0 top-0 w-full h-full z-50 bg-white backdrop-blur-xl bg-opacity-30 flex flex-col justify-center items-center transition-all"
        style={{ opacity: mouseHovering && props.inProgress ? 1 : 0 }}
      >
        <span className="text-lg text-center">🚧</span>
        <span className="text-xs text-center">Coming soon...</span>
      </div>
    </a>
  );
};

export default ToolboxItem;
