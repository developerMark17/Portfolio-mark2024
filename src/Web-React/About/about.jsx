import "./about.css";
import { useTypewriter } from "react-simple-typewriter";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from "react";
import { Footer } from "../footer/footer";

export function About() {
  const [typeEffect] = useTypewriter({
    words: ["Mark's Portfolio", "Welcome to the Developer's World"],
    loop: {},
    typeSpeed: 100,
  });

  const [theme, setTheme] = useState("");

  function handleThemeChange(e) {
    if (e.target.checked) {
      setTheme("bg-dark text-white");
    } else {
      setTheme("");
    }
  }

  return (
    <div style={{ marginTop: "8rem" }}>
      <div className="bg">
        <div className="h2">
          <span
            className="effects"
            style={{
              fontWeight: "bold",
              color: "rgb(255 5 5)",
              fontFamily: "Vollkorn",
              fontSize: "40px",
              width: "625px",
            }}
          >
            {typeEffect}
          </span>
        </div>

        <section className="firstSection mt-4">
          <div className="container-about mb-5">
            <div className="image-container-about">
              <img
                src="../../images/school.JPG"
                alt=""
                className="image rounded-5"
              />
            </div>
            <div className="content-container-about">
              <h1 className="mx-3">St.Pauls Inter College</h1>
              <p className="content fw-bold">
                I have done my schooling form St.Pauls Inter College From
                Shahjahanpur(Uttar Pradesh).
              </p>
            </div>
          </div>

          <div className="container-about">
            <div className="content-container">
              <h1 className="mx-3 fst-italic">Integral University</h1>
              <p className="content fw-bold">
                Persuing BCA (Bachelor's Computer Applications) from Integral
                University (Uttar Pradesh).
              </p>
            </div>
            <div className="image-container-about">
              <img
                src="../../images/integral.jpeg"
                alt=""
                className="image rounded-5"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
