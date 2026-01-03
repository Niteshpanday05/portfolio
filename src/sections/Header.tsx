export const Header = () => {
  return (
    <div className="flex justify-center items-center relative  w-full top-3 z-10 ">
      <nav className="flex sticky gap-6 p-0.5  border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="home" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Projects
        </a>
        <a href="about" className="nav-item">
          About
        </a>
        <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          Contacts
        </a>
      </nav>
    </div>
  );
};
