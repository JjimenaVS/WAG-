import DefaultProfile from '../../assets/images/DefaultProfile.jpg';

interface NavHeaderProps {
  logo: string;
  options: string[];
}

export default function NavHeader(props: NavHeaderProps) {
  return (


    <header className="bg-(--primary-color)">

      <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-3 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">{props.logo}</h1>
        </div>

        {/* Navigation Links centered */}
        <div className="flex w-full justify-center">
          <ul className="hidden items-center gap-5 md:flex">
            {props.options.map((index) => (
              <li key={index}>
                <a
                  href={`#${index.toLowerCase()}`}
                  className="font-bold text-(--dark-text) hover:text-(--orange-color) transition-colors"
                >
                  {index}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-end gap-6">
          {/* Mobile Menu Button (opcional) */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          

          <button
            type="button"
            aria-label="Perfil de usuario"
            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full hover:cursor-pointer"
          >
            <img
              src={DefaultProfile}
              alt="Foto de perfil"
              className="h-full w-full object-cover"
            />
          </button>

        </div>
      </nav>
    </header>



  );
}
