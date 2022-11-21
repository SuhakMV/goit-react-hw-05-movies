import { Link } from 'react-router-dom';

export const AppBar = () => {
  const navItems = [
    { href: 'home', text: 'Home' },
    { href: 'movies', text: 'Movies' },
  ];

  return (
    <div>
      <header>
        {navItems.map(({ href, text }) => (
          <Link to={href} key={href}>
            {text}
          </Link>
        ))}
      </header>
    </div>
  );
};
