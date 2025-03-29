import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Hospo</h1>
        <div className="flex items-center gap-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Contact Us</button>
          <FaUserCircle className="text-4xl text-gray-700 cursor-pointer" />
        </div>
            </div>
            

    )}
export default Navbar