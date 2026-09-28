import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode-switch"
                    label="Edit Mode"
                    checked={isEditMode}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setIsEditMode(e.target.checked);
                    }}
                />
            </div>
            {isEditMode ?
                <div>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-checkbox"
                        label="Student?"
                        checked={isStudent}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setIsStudent(e.target.checked);
                        }}
                    />
                </div>
            :   <div>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
