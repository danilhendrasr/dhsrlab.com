import ToolboxItem from "@/components/ToolboxItem";
import { ArticlesList } from "@/components/ArticleList";
import { ClickableLink } from "@/components/ClickableLink";

type Tool = {
  image: string;
  name: string;
  url?: string;
  inProgress?: boolean;
  main?: boolean;
};

const tools: Tool[][] = [
  [
    { image: "/typescript.svg", name: "TypeScript", main: true },
    { image: "/rust.svg", name: "Rust" },
    { image: "/go.svg", name: "Go", main: true },
    { image: "/php.svg", name: "PHP" },
  ],
  [
    { image: "/nodejs.svg", name: "Node.js" },
    { image: "/react.svg", name: "React", main: true },
    { image: "/react.svg", name: "React Native" },
  ],
  [
    { image: "/postgresql.svg", name: "PostgreSQL" },
    { image: "/mysql.svg", name: "MySQL", main: true },
  ],
  [
    { image: "/docker.svg", name: "Docker", main: true },
    { image: "/k8s.svg", name: "Kubernetes", inProgress: true },
    { image: "/aws.svg", name: "AWS" },
  ],
];

export default function Home() {
  return (
    <main className="flex flex-col gap-y-10 pb-20">
      <section className="h-screen w-screen relative">
        <div className="absolute top-1/2 lg:left-16 xl:left-32 -translate-y-1/2 leading-7 px-10">
          <h1 className="text-5xl font-bold">Danil Hendra Suryawan</h1>
          <p className="font-light my-2">
            Software engineer @{" "}
            <ClickableLink link="https://speechify.com">
              Speechify
            </ClickableLink>
          </p>

          <p className="font-light my-5 text-[#425466]">
            I work with end-to-end web technologies and stuff. Creating and
            <br />
            solving problems using TypeScript, Go, and Rust.
          </p>

          <p className="font-light text-[#425466] mb-2">
            View my{" "}
            <ClickableLink link="https://docs.google.com/document/d/1zmPBRiLGmQnJuW0bGpEuAWashMNqsvDHWClJsosU4dw/edit">
              resume,
            </ClickableLink>{" "}
            <ClickableLink link="mailto:hello@dhsrlab.com">
              email me,
            </ClickableLink>{" "}
            or find me online:
          </p>
          <div className="flex gap-1">
            <a
              target="_blank"
              href="https://github.com/danilhendrasr"
              className="inline-block hover:bg-slate-200 w-fit transition-colors duration-300 p-2 rounded-md"
            >
              <img src="/github.svg" className="w-5" />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/danilhendrasr"
              className="inline-block hover:bg-slate-200 w-fit transition-colors duration-300 p-2 rounded-md"
            >
              <img src="/linkedin.svg" className="w-5" />
            </a>
            <a
              target="_blank"
              href="https://leetcode.com/danilhendrasr"
              className="inline-block hover:bg-slate-200 w-fit transition-colors duration-300 p-2 rounded-md"
            >
              <img src="/leetcode.svg" className="w-5" />
            </a>
          </div>
        </div>

        <div className="hidden lg:block absolute md:top-1/2 lg:right-24 xl:right-60 md:-translate-y-1/2 h-fit">
          <figure className="flex items-center flex-col">
            <img
              src="/bw-portrait.webp"
              className="lg:w-[300px] xl:w-[350px]"
            />
            <figcaption className="font-extralight my-2 text-xs">
              Pardon the weird mix of outer clothes :p
            </figcaption>
          </figure>
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-5 flex items-center flex-col group cursor-pointer"
          id="hero-bottom-arrow"
        >
          <span className="text-[#425466] text-xs md:text-sm mb-2 group-hover:mb-2 group-hover:opacity-100 md:opacity-0 transition-all duration-300">
            See more
          </span>
          <img
            src="/bottom-arrow.svg"
            className="w-6 md:w-7 transition-all origin-bottom rotate-2 animate-bounce opacity-60 group-hover:opacity-100 duration-300"
          />
        </div>
      </section>

      <section className="relative flex flex-col justify-center items-center px-5">
        <h2 id="about" className="text-3xl font-bold my-10">
          Latest Writings
        </h2>

        <ArticlesList />
      </section>

      <section>
        <div className="flex flex-col items-center w-full">
          <h2 id="about" className="text-3xl font-bold my-10">
            Toolbox
          </h2>

          <ul className="flex flex-col gap-3">
            {tools.map((row, i) => {
              return (
                <div
                  key={i}
                  className="flex justify-center flex-wrap gap-2 md:gap-3"
                >
                  {row.map((item, idx) => {
                    return (
                      <li key={idx}>
                        <ToolboxItem
                          image={item.image}
                          name={item.name}
                          url="https://dhsrlab.com"
                          inProgress={item.inProgress}
                          main={item.main}
                        />
                      </li>
                    );
                  })}
                </div>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
