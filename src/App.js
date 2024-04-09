import "./App.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Header from "./Sections/Header/Header";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import store from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
