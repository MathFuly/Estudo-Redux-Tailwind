import { useSelector } from "react-redux";

import VideoBar from "./VideoBar";
import List from "./List";
import Nothing from "./Nothing";

const SideBar = () => {
  const { sideLinks, showAulas, activeAula, activeModulo } = useSelector(
    (state) => state.modulos
  );

  return (
    <div className="flex">
      <div className="flex flex-col items-center bg-gray-800 w-60 h-screen">
        {sideLinks?.map((side) => (
          <List modulo={side.modulo} aulas={side.aulas} active={showAulas} />
        ))}
      </div>
      <div>
        {activeAula != 0 ? (
          <VideoBar
            activeModulo={activeModulo}
            activeAula={activeAula}
            list={sideLinks}
          />
        ) : (
          <Nothing />
        )}
      </div>
    </div>
  );
};

export default SideBar;
