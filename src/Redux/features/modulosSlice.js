import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeAula: "",
  activeModulo: "",
  showAulas: 0,
  sideLinks: [
    {
      modulo: 1,
      aulas: [
        { id: 1, title: "Aula 1", watched: false },
        { id: 2, title: "Aula 2", watched: false },
      ],
    },
    {
      modulo: 2,
      aulas: [
        { id: 1, title: "Aula 3", watched: false },
        { id: 2, title: "Aula 4", watched: false },
        { id: 3, title: "Aula 5", watched: false },
      ],
    },
    {
      modulo: 3,
      aulas: [
        { id: 1, title: "Aula 6", watched: false },
        { id: 2, title: "Aula 7", watched: false },
        { id: 3, title: "Aula 8", watched: false },
        { id: 4, title: "Aula 9", watched: false },
        { id: 5, title: "Aula 10", watched: false },
        { id: 6, title: "Aula 11", watched: false },
      ],
    },
    {
      modulo: 4,
      aulas: [
        { id: 1, title: "Aula 12", watched: false },
        { id: 2, title: "Aula 13", watched: false },
        { id: 3, title: "Aula 14", watched: false },
      ],
    },
  ],
};

export const modulosSlice = createSlice({
  name: "modulos",
  initialState,
  reducers: {
    markAsWatched: (state, action) => {
      state.activeAula = action.payload.aula;
      state.activeModulo = action.payload.moduloid;
      state.sideLinks[action.payload.moduloid - 1].aulas[
        action.payload.aula - 1
      ].watched = action.situation;
    },
    showMeAulas: (state, action) => {
      state.showAulas = action.payload;
    },
  },
});

export const {
  activeAula,
  sideLinks,
  markAsWatched,
  showMeAulas,
  showAulas,
  activeModulo,
} = modulosSlice.actions;

export default modulosSlice.reducer;
