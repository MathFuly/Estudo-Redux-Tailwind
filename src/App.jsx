import { Provider } from "react-redux";
import store from "./Redux/store";
import { SiRedux } from "react-icons/si";

import SideBar from "./Components/Dashboard/SideBar";

function App() {
  return (
    <div className="bg-gray-900  min-h-screen">
      <div className="bg-gray-800 text-white text-3xl font-bold  px-5">
        <div className="flex items-center h-20">
          <SiRedux className="mr-2 text-pink-700 animate-pulse" />
          Redux
        </div>
      </div>
      <Provider store={store}>
        <SideBar />
      </Provider>
    </div>
  );
}

export default App;
