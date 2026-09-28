//import { parse } from "path";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    const parsedRequested = parseInt(requestedAttempts, 10);

    function gainAttempts(): void {
        if (!isNaN(parsedRequested)) {
            setAttemptsLeft(attemptsLeft + parsedRequested);
        }
    }

    function useAttempt(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    return (
        <div>
            <div>Give Attempts</div>
            <div>Attempts Left: {attemptsLeft}</div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(e.target.value);
                    }}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                use
            </Button>
            <Button onClick={gainAttempts}>gain</Button>
        </div>
    );
}
