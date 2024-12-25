import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  window.onscroll = () => {
    const sections = document.querySelectorAll("section");
    const header =  document.querySelector('header');
    if(window.scrollY > 5){
      header.style.backdropFilter="blur(10px)";
    }else{
      document.querySelector('header').style.backdropFilter='none';
    }
    sections.forEach((val) => {
      if(window.scrollY >= val.offsetTop - 180){
        val.classList.add("active");
      }
    });
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
