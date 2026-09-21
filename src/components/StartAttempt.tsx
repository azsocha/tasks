import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startQ(): void {
        setProgress(true);
        setAttempt(attempt - 1);
    }

    function stopQ(): void {
        setProgress(false);
    }

    function editMulligan(): void {
        setAttempt(attempt + 1);
    }

    return (
        <div>
            <div>Attempts remaining: {attempt} </div>
            <Button onClick={startQ} disabled={progress || attempt === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQ} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={editMulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
