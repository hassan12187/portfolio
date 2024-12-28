import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const header = document.querySelector("header");

    const handleScroll = () => {
      // Update header backdrop filter based on scroll position
      if (window.scrollY > 5) {
        header.style.backdropFilter = "blur(10px)";
      } else {
        header.style.backdropFilter = "none";
      }

      // Add active class to sections in view
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 180) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
