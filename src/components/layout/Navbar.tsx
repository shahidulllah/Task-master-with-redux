import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-20 p-6 flex justify-between">
      <div
        className="flex
       gap-1"
      >
        <div>
          <img className="w-5" src="vite.svg" alt="" />
        </div>
        <div className="font-extralight">Task Master</div>
      </div>
      <div className="flex gap-2">
        <Link to="/">Tasks</Link>
        <Link to="/user">User</Link>
      </div>
    </div>
  );
};

export default Navbar;
