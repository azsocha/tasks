import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

interface DoubleHalfState {
    setDhValue: (value: (dhValue: number) => number) => void;
}

function Doubler({ setDhValue }: DoubleHalfState): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue((dhValue: number) => dhValue * 2);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ setDhValue }: DoubleHalfState): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue((dhValue: number) => dhValue * 0.5);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue}></Doubler>
            <Halver setDhValue={setDhValue}></Halver>
        </div>
    );
}
