import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [is_on, set_on] = useState(false);
    function toggle() {
        set_on((is_on) => !is_on);
    }
    const answers: string[] = ["42"];
    const [Answer, This_Answer] = useState<string>(answers[0]);
    return (
        <div className="Reveal">
            {is_on && <p>{answers[0]}</p>}
            <Button onClick={toggle}>Reveal Answer</Button>
        </div>
    );
}
