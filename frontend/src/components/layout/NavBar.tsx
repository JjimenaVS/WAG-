interface NavHeaderProps {
  logo: string;
  options: string[];
}

export default function NavHeader(props: NavHeaderProps) {
  return (


    <header className="bg-[var(--primary-color)]">

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


        {/* Logo */}
        <div className="flex ">
          <h1 className="text-2xl font-bold">{props.logo}</h1>
        </div>


        {/* Navigation Links centered */}
        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex items-center gap-8">
            {props.options.map((index) => (
              <li key={index}>
                <a
                  href={`#${index.toLowerCase()}`}
                  className="font-bold text-[var(--dark-text)] hover:text-[var(--orange-color)] transition-colors"
                >
                  {index}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button (opcional) */}
        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>



  );
}
