import Typed from "react-typed"

export default function Intro() {

  return (
    <div className="intro">
      <Typed
        strings={[
          "Front End Developer",
          "Back End Developer",
          "Software Engineer"
        ]}
        typeSpeed={100}
        backDelay={1100}
        backSpeed={30}
        loop
      />
    </div>
  )
}
