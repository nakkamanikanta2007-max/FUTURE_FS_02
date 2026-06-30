import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-white h-20 shadow-md flex justify-between items-center px-8">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back, Admin 👋
        </p>
      </div>

      <div className="flex items-center gap-6">

        <div className="relative">

          <FaSearch className="absolute left-3 top-3 text-gray-400"/>

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

        </div>

        <button className="relative">

          <FaBell
            size={22}
            className="text-gray-600 hover:text-cyan-500 cursor-pointer"
          />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <FaUserCircle
            size={42}
            className="text-cyan-600"
          />

          <div>

            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-sm text-gray-500">
              CRM Manager
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}