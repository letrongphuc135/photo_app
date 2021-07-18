import { createSlice } from "@reduxjs/toolkit";

const initialPhotos = [
  {
    id: 91176,
    categoryId: 5,
    photo: "https://picsum.photos/id/132/300/300",
    title: "lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    id: 82605,
    categoryId: 1,
    photo: "https://picsum.photos/id/43/300/300",
    title: "Ad officia magna veniam sunt.",
  },
  {
    id: 82601,
    categoryId: 1,
    photo: "https://picsum.photos/id/423/300/300",
    title: "Dolor sit amet, consectetur adip",
  },
];

const photo = createSlice({
  name: "photos",
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state, action) => {
      // const newPhoto = action.payload;
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      //action.payload ~ id
      const removePhotoId = action.payload;
      return state.filter((photo) => photo.id !== removePhotoId);
    },

    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const index = state.findIndex((photo) => photo.id === newPhoto.id);
      if (index >= 0) {
        state[index] = newPhoto;
      }
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
