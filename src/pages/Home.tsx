import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-custom-gradient flex flex-col">
      <Navbar />
      <div className="flex flex-grow items-center justify-center">
        <button
          onClick={() => navigate("/quiz?mode=custom")}
          className="px-8 py-4 m-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 text-xl"
        >
          Custom Quiz
        </button>
        <button
          onClick={() => navigate("/quiz?mode=challenge")}
          className="px-8 py-4 m-2 bg-pink-600 text-white rounded hover:bg-pink-500 text-xl"
        >
          Challenge Mode
        </button>
      </div>
    </div>
  );
}
export default Home;
