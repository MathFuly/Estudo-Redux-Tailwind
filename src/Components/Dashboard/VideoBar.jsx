import { useSelector } from "react-redux";

const VideoBar = ({ activeModulo, activeAula, list }) => {
  return (
    <div className="p-5">
      <p className="text-gray-400 text-md font-semibold">
        Modulo: {activeModulo}
      </p>
      <div className="ml-8">
        <h1 className="text-[70px] truncate font-bold text-white mt-6">
          {list[activeModulo - 1].aulas[activeAula - 1].title}
        </h1>

        <div className="h-[500px] w-[900px] bg-black opacity-30 rounded-lg my-5 animate-pulse"></div>
      </div>
    </div>
  );
};

export default VideoBar;
