import React, { useState } from "react";
import { showMeAulas, markAsWatched } from "../../Redux/features/modulosSlice";
import { useSelector, useDispatch } from "react-redux";

const List = ({ modulo, aulas, active }) => {
  const dispatch = useDispatch();

  console.log(active);

  return (
    <div className="">
      <div
        onClick={() => dispatch(showMeAulas(modulo))}
        className={`${
          active == modulo ? "opacity-50" : ""
        } mb-2 px-8 py-8 bg-pink-600 w-60 flex justify-center items-center rounded-sm hover:bg-pink-800 hover:transition-colors cursor-pointer my-0`}
      >
        <h1 className="text-white text-xl font-semibold truncate">
          Módulo {modulo}
        </h1>
      </div>

      <ul
        className={`${
          active == modulo ? "flex" : "hidden"
        } flex-col justify-center items-center w-60 py-4 my-0 animate-slide-down`}
      >
        {aulas?.map((aula) => (
          <li
            onClick={() =>
              dispatch(
                markAsWatched({
                  aula: aula.id,
                  moduloid: modulo,
                  situation: true,
                })
              )
            }
            key={aula.id}
            className={`${
              aula?.watched == false ? "text-white" : "text-green-400"
            } hover:bg flex justify-center w-full py-5 hover:bg-slate-700 transition-colors cursor-pointer`}
          >
            <p> {aula.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
