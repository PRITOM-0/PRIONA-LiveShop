import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

  const formatName = (name: string) => {
    return name
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <div className="text-sm md:text-lg text-neutral-500 m-4 border-b border-red-300 pb-2">
      <nav className="flex items-center gap-1 flex-wrap">
        
        {/* HOME */}
        <Link
          to="/"
          className="hover:text-red-500 transition font-medium"
        >
          Home
        </Link>

        {pathnames.map((value, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <span key={to} className="flex items-center gap-1">
              <span className="mx-1 text-neutral-400">/</span>

              {isLast ? (
                <span className="text-black font-semibold">
                  {formatName(value)}
                </span>
              ) : (
                <Link
                  to={to}
                  className="hover:text-red-500 transition"
                >
                  {formatName(value)}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumb;