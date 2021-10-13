
const Navbar = () => {
  const nav = [
    "home",
    "our product",
    "contact us",
    "about us",
    "get free gift",
  ];
  return (
    <ul className="nav-list" id="nav-list">
      {nav.map((i) => (
          // eslint-disable-next-line
        <li><a href="#" class="nav__right-link active">{i.toUpperCase()}</a></li>
      ))}
    </ul>
  );
};

export default Navbar;
