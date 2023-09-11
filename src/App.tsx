/* eslint-disable prettier/prettier */
import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import soulframe from "./Assets/images/soulframe image.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UM COS420 with React Hooks and TypeScript</h1>
            </header>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                background: "blue",
                                height: "70px",
                                width: "40px",
                                display: "inline-block"
                            }}
                        ></div>
                        <ol>
                            <li>First thing</li>
                            <li>Another thing</li>
                            <li>A third item</li>
                        </ol>
                    </Col>
                    <Col>
                        <div
                            style={{
                                background: "blue",
                                height: "70px",
                                width: "40px",
                                display: "inline-block"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <img
                height="700"
                width="1400"
                src={soulframe}
                alt="Image from Soulframe Twitter"
            />
        </div>
    );
}

export default App;
