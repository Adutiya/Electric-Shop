import { Link } from 'react-router-dom';
import Form from './Form';

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-800 text-white py-2">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="w-1/5">
          <Link to="/" className="text-2xl font-bold tracking-wide text-yellow-400">
            EleKtro
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="w-3/5 flex justify-center">
          <div className="w-full max-w-md">
            <Form />
          </div>
        </div>

        {/* Right: Login & Cart */}
        <div className="w-1/5 flex justify-end gap-6 text-sm font-medium">
          <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
          <Link to="/cart" className="hover:text-yellow-300 transition">Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
