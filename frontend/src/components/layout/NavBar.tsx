interface NavHeaderProps {
  logo: string;
  options: string[];
}

export default function NavHeader(props: NavHeaderProps) {
  return (


    <header className="bg-[var(--primary-color)]">

      <nav className="max-w-7xl mx-auto px-3 py-4 grid grid-cols-[auto_1fr_auto] items-center">

        {/* Logo */}
        <div className="flex">
          <h1 className="text-2xl font-bold">{props.logo}</h1>
        </div>

        {/* Navigation Links centered */}
        <div className="flex justify-center">
          <ul className="hidden md:flex items-center gap-5">
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

        <div className="flex items-center justify-end gap-6">
          {/* Mobile Menu Button (opcional) */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-8 invisible">
            <div className="flex items-center gap-2">
              <p className="text-xs font-bold">Instagram</p>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.588.147-1.079.355-1.623.923-.568.544-.776 1.035-.923 1.623-.267.788-.468 1.658-.53 2.936C1.031 8.333 1.015 8.74 1.015 12c0 3.26.015 3.667.072 4.947.06 1.277.261 2.148.529 2.936.147.588.355 1.079.923 1.623.568.568 1.035.776 1.623.923.788.268 1.658.468 2.936.53 1.28.058 1.687.072 4.947.072s3.667-.015 4.947-.072c1.28-.062 2.147-.262 2.936-.53.588-.147 1.079-.355 1.623-.923.568-.568.776-1.035.923-1.623.268-.788.468-1.658.53-2.936.058-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.53-2.936-.147-.588-.355-1.079-.923-1.623-.568-.568-1.035-.776-1.623-.923-.788-.268-1.658-.468-2.936-.53C15.667 1.031 15.26 1.015 12 1.015zm0 2.163c3.203 0 3.585.009 4.849.07 1.171.054 1.805.244 2.227.406.562.217.961.477 1.382.896.419.42.679.819.896 1.381.162.422.352 1.056.406 2.227.061 1.264.07 1.645.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.406 2.227-.217.562-.477.961-.896 1.382-.42.419-.819.679-1.381.896-.422.162-1.056.352-2.227.406-1.264.061-1.645.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.406-.562-.217-.961-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.162-.422-.352-1.056-.406-2.227-.061-1.264-.07-1.645-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.406-2.227.217-.562.477-.961.896-1.382.42-.419.819-.679 1.381-.896.422-.162 1.056-.352 2.227-.406 1.264-.061 1.645-.07 4.849-.07z"/>
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-bold">Facebook</p>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>



  );
}
