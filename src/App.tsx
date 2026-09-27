import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import img from "./assets/cat.jpeg";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "navy", color: "white" }}
            >
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Alanna Socha</p>
            <p>Hello World</p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>Brandy</p>
            <img
                src={img}
                width="300"
                height="400"
                alt="A picture of my cat Brandy"
            />
            <p>Class List</p>
            <ul>
                <li>CISC 260</li>
                <li>CISC 275</li>
                <li>CISC 320</li>
                <li>ENGL 151</li>
            </ul>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                }}
            >
                {/* Column 1 */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <p>Column 1</p>
                    <div
                        style={{
                            width: "100px",
                            height: "60px",
                            backgroundColor: "red",
                        }}
                    ></div>
                </div>

                {/* Column 2 */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <p>Column 2</p>
                    <div
                        style={{
                            width: "100px",
                            height: "60px",
                            backgroundColor: "red",
                        }}
                    ></div>
                </div>

                {/* Column 3 */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <p>Column 3</p>
                    <div
                        style={{
                            width: "100px",
                            height: "60px",
                            backgroundColor: "red",
                        }}
                    ></div>
                </div>
            </div>
            <div>
                <Counter />
            </div>
            <div>
                <RevealAnswer />
            </div>
            <div>
                <StartAttempt />
            </div>
            <div>
                <TwoDice />
            </div>
            <div>
                <ChangeType />
            </div>
            <div>
                <CycleHoliday />
            </div>
            <div>
                <DoubleHalf></DoubleHalf>
            </div>
            <div>
                <ChooseTeam></ChooseTeam>
            </div>
            <div>
                <ColoredBox></ColoredBox>
                <div>
                    <ShoveBox></ShoveBox>
                </div>
            </div>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
