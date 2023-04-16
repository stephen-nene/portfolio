import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation  (){

    return (
        <div>
            {/* <h2>navbar</h2> */}
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            {/* <img
              alt=""
              src="../assets/svg/about/blueTheme-boy.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'  '} */}
            Stephen Nene
          </Navbar.Brand>
        </Container>
      </Navbar>
        </div>
    )
}
