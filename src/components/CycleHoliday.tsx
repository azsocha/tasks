import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays = "🍾" | "🐰" | "🎂" | "🎃" | "🎄";
const HolidaysYear: Record<Holidays, Holidays> = {
    "🍾": "🐰",
    "🐰": "🎂",
    "🎂": "🎃",
    "🎃": "🎄",
    "🎄": "🍾",
};
const HolidaysAlphabet: Record<Holidays, Holidays> = {
    "🎂": "🎄",
    "🎄": "🐰",
    "🐰": "🎃",
    "🎃": "🍾",
    "🍾": "🎂",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holidays>("🍾");

    function advanceByAlphabet(): void {
        setHoliday((currentHoliday) => HolidaysAlphabet[currentHoliday]);
    }

    function advanceByYear(): void {
        setHoliday((currentHoliday) => HolidaysYear[currentHoliday]);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
