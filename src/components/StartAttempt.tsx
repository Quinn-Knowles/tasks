import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setattempt] = useState<number>(4);
    const [in_progress, set_progress] = useState(false);
    function toggle() {
        setattempt(in_progress === false ? -1 + attempts : attempts);
       // setattempt((attempts) => -1 + attempts);
        set_progress((in_progress) => !in_progress);
    }
    return (
        <span>
            {
                <p>
                    number of attempts is: {attempts} {"\n"}
                </p>
            }
            {in_progress && <p> an attempt is in progress</p>}
            <Button type="button" disabled={!in_progress} onClick={toggle}>
                Stop Quiz
            </Button>
            {
                <Button
                    type="button"
                    disabled={attempts < 1 || in_progress}
                    onClick={toggle}
                >
                    Start Quiz
                </Button>
            }
            <Button
                type="button"
                disabled={in_progress}
                onClick={() => setattempt(1 + attempts)}
            >
                Mulligan
            </Button>
        </span>
    );
}
