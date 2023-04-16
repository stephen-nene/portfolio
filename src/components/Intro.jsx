import Typed from "react-typed"
import "../assets/styles/intro.css"

export default function Intro() {

  return (
    <div className="intro">
      <div className="left">


      </div>

      <div className="right">

      </div>
      <Typed strings={
        [ "Front End Developer", "Back End Developer", "Software Engineer" ]
      }
        typeSpeed={100}
        backDelay={1100}
        backSpeed={30}
        loop
      />
    </div>
  )
}
