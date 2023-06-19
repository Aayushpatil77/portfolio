const Navbar = () => {
  return (
    <nav className="flex justify-between items-center my-5">
      <h1 className="text-3xl font-bold">Ayush</h1>
      <ul className="flex gap-4 font-bold">
        <li>
          <p className="text-base cursor-pointer">About</p>
        </li>
        <li>
          <p className="text-base cursor-pointer">Shop Templates</p>
        </li>
        <li>
          <p className="text-base cursor-pointer">Services</p>
        </li>
        <li>
          <p className="text-base cursor-pointer">Blog</p>
        </li>
      </ul>
      <button className="text-base outline outline-1 px-2 py-1">
        {"Let's Talk"}
      </button>
    </nav>
  );
};

export default Navbar;
