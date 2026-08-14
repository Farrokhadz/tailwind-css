import "./App.css";
import { CiHeart } from "react-icons/ci";
function App() {
  return (
    <>
      <div>
        <CiHeart className="text-3xl"></CiHeart>
        <button
          onClick={() => {}}
          className="inline-block bg-fuchsia-700 px-7 py-3 rounded-full hover:bg-fuchsia-600"
        >
          {" "}
          My Button
        </button>
      </div>
    </>
  );
}

export default App;
