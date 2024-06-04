type Props = {
  image: string;
  url: string;
  name: string;
  inProgress?: boolean;
  main?: boolean;
};

const menus = [
  {
    key: "/",
    name: "Home",
    url: "/",
  },
  {
    key: "/about",
    name: "About",
    url: "/about",
  },
  {
    name: "Blog",
    url: "https://indentasi.dhsrlab.com",
  },
];

const Navbar: React.FC<Props> = (props) => {
  const pathname = window.location.pathname;

  return (
    <nav className="fixed left-1/2 top-5 -translate-x-1/2 border py-2 px-5 border-[#ddddda] rounded-3xl bg-[#fdfdfc] hover:border-slate-500 transition-all hover:shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 z-50">
      <ul className="flex gap-2 items-center text-sm">
        {menus.map((menuItem, idx) => {
          let classes =
            "hover:text-[#635bff] p-1 px-4 rounded-3xl transition-colors duration-300";

          if (pathname === menuItem.key) {
            classes +=
              " underline text-[#635bff] underline-offset-4 font-semibold";
          }

          return (
            <li className={classes} key={idx}>
              <a href={menuItem.url}>{menuItem.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Navbar };
