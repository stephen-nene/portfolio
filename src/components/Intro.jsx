import Typed from "react-typed"
import Button from 'react-bootstrap/Button';
import "../assets/styles/intro.css"

export default function Intro() {

  return (
    <div className="intro">
            <div className="left">

              <Typed strings={
                ["Front End Developer", "Back End Developer", "Software Engineer"]
              }
                typeSpeed={100}
                backDelay={1100}
                backSpeed={30}
                loop
              />

            </div>
            <div className="right">
              <p>
              Striving to be a software developer means bringing innovation to the forefront of every project. There wasn't a bug in the code, but that was not what caught my attention. It was the challenge. The deep complexity that isn't the norm for simple tasks, but came with these. I know what's coming and I hope I am prepared. With every keystroke, I am committed to bringing out the best in every line of code, pushing the boundaries of what is possible and crafting elegant solutions to complex problems. As a software developer, I am constantly striving to improve my skills and deliver exceptional results, fueled by a passion for creativity and a drive for excellence.
              </p>
              <div className="buttons">
                <Button variant="outline-warning">Resume</Button>{' '}
                <Button variant="outline-success">Contact-me</Button>{' '}
              </div>
            </div>
    </div>
  )
}
