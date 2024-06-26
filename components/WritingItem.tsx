interface Props {
  coverUrl: string;
  url: string;
  title: string;
  subtitle: string;
  readTimeInMinutes: number;
  views: number;
}

const WritingItem: React.FC<Props> = (props) => {
  return (
    <div className="item flex flex-col items-center md:flex-row bg-white justify-center gap-3 relative border border-slate-400 py-5 px-7 rounded-lg hover:shadow-md transition-all">
      <img src={props.coverUrl} alt="" className="rounded-md w-56" />
      <div className="flex flex-col gap-3">
        <a href={props.url} className="hover:text-[#635bff]">
          <p className="text-xl font-bold">{props.title}</p>
        </a>
        <span className="text-[#425466]">{props.subtitle}</span>
        <div className="text-slate-500 text-xs flex items-center gap-1">
          <div className="inline-flex justify-center items-center gap-1">
            <img src="book.svg" alt="" className="w-3 inline" />
            <span>{props.readTimeInMinutes} minutes</span>
          </div>
          |
          <div className="inline-flex justify-center items-center gap-1">
            <img src="eye.svg" alt="" className="w-3 inline" />
            <span>{props.views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { WritingItem };
