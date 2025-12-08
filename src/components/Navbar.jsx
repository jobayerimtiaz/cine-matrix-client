import { useState } from "react";
import { Menu, X, Search, TicketPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-transparent fixed top-0 left-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white font-heading text-3xl tracking-wide">
          CineMatrix
        </Link>

        {/* Center Search Bar */}
        <div className="flex-1 px-6 hidden md:flex justify-center">
          <div className="nav-search relative w-full max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              className="nav-search-input"
              placeholder="Search movies, theaters..."
            />
          </div>
        </div>

        {/* Desktop Menu + Login */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
          <Link to="/theaters" className="nav-link">
            Theaters
          </Link>
          <Link to="/releases" className="nav-link">
            Releases
          </Link>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
          {!user ? (
            <Link onClick={openSignIn} to="/login" className="btn-light">
              Login
            </Link>
          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<TicketPlus width={15} />}
                  onClick={() => navigate("/my-bookings")}
                />
              </UserButton.MenuItems>
            </UserButton>
          )}
        </div>

        {/* Mobile Menu Button */}

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0c0c18]/95 border-t border-white/10 px-6 py-5 flex flex-col gap-6">
          {/* Search Bar (Mobile) */}
          <div className="nav-search relative w-full">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              className="nav-search-input"
              placeholder="Search movies, theaters..."
            />
          </div>

          {/* Menu Links */}
          <Link onClick={() => setOpen(false)} to="/" className="nav-link">
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/movies"
            className="nav-link"
          >
            Movies
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/theaters"
            className="nav-link"
          >
            Theaters
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/releases"
            className="nav-link"
          >
            Releases
          </Link>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
          {!user ? (
            <Link
              onClick={() => {
                setOpen(false);
                openSignIn();
              }}
              to="/login"
              className="btn-light w-fit"
            >
              Login
            </Link>
          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<TicketPlus width={15} />}
                  onClick={() => navigate("/my-bookings")}
                />
              </UserButton.MenuItems>
            </UserButton>
          )}
        </div>
      )}
    </nav>
  );
}
