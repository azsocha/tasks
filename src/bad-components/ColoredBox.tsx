import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProp {
    colorIndex: number;
    setColorIndex: (newIndex: number) => void;
}

function ChangeColor({
    colorIndex,
    setColorIndex,
}: ChangeColorProp): React.JSX.Element {
    //const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <Button
            onClick={() => {
                setColorIndex((colorIndex + 1) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

interface ColorPreviewProp {
    colorIndex: number;
}

function ColorPreview({ colorIndex }: ColorPreviewProp): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <div>Colored Box</div>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
