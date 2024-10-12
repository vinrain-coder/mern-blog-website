import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar className="relative border-b-2 py-2 px-2 w-full flex flex-col items-center justify-between ">
      {/* Logo */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Vinrain's
        </span>
        Blog
      </Link>

      {/* Search Form for Medium Screens and Up */}
      <form className="hidden md:flex items-center relative">
        <TextInput type="text" placeholder="Search..." className="relative" />
        <AiOutlineSearch className="absolute right-2 top-2 text-xl cursor-pointer" />
      </form>

      <Button
        className="w-12 h-10 items-center justify-center rounded-full md:hidden"
        color="gray"
      >
        <AiOutlineSearch className="text-xl" />
      </Button>

      {/* Right Side Buttons for Small Screens */}
      <div className="flex gap-2 items-center md:hidden">
        <Button
          className="w-12 h-10 rounded-full"
          color="gray"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
             
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm text">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button className="text-slate-500 border border-pink-500 hover:text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 font-bold">
              Sign In
            </Button>
          </Link>
        )}
        <button onClick={toggleMenu} className="text-2xl">
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Dropdown Menu for Small Screens */}
      <nav
        className={`absolute top-full left-0 w-full bg-white md:hidden z-50 dark:bg-[rgb(16,23,42)] dark:text-gray-200 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`hover:text-indigo-500 ${
                isActive("/") ? "text-indigo-600 font-bold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={`hover:text-indigo-500 ${
                isActive("/about") ? "text-indigo-600 font-bold" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              onClick={() => setMenuOpen(false)}
              className={`hover:text-indigo-500 ${
                isActive("/project") ? "text-indigo-600 font-bold" : ""
              }`}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu for Medium Screens and Up */}
      <nav className="hidden md:flex md:items-center">
        <ul className="flex gap-10">
          <li>
            <Link
              to="/"
              className={`hover:text-indigo-500 ${
                isActive("/") ? "text-indigo-600 font-bold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-indigo-500 ${
                isActive("/about") ? "text-indigo-600 font-bold" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className={`hover:text-indigo-500 ${
                isActive("/project") ? "text-indigo-600 font-bold" : ""
              }`}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex gap-2 items-center">
        <Button
          className="w-12 h-10 rounded-full"
          color="gray"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button className="text-slate-500 border border-pink-500 hover:text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 font-bold">
              Sign In
            </Button>
          </Link>
        )}
        <button onClick={toggleMenu} className="text-2xl md:hidden">
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </Navbar>
  );
}
