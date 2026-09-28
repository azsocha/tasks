import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "cyan",
    "magenta",
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <div>Change Color</div>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id={`color-check-${color}`}
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                    display: "inline-block",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
