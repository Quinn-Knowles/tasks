import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const Holiday_List: string[] = ["🎄", "🎃", "🎉", "🎆", "🦃"];
    const [Holiday, set_Holiday] = useState<string>(Holiday_List[0]);
    function Date_change() {
        // eslint-disable-next-line prettier/prettier
        set_Holiday(Holiday === "🎉"? "🎆": Holiday === "🎆" ? "🎃" : Holiday === "🎃" ? "🦃" : Holiday === "🦃"? "🎄": "🎉");
    }
    function Name_change() {
        // eslint-disable-next-line prettier/prettier
        set_Holiday(Holiday === "🎄" ? "🎆": Holiday === "🎆" ? "🎃": Holiday === "🎃" ? "🎉" : Holiday === "🎉" ? "🦃": "🎄");
    }
    return (
        <span>
            <Button onClick={Date_change}> Change by Year</Button>
            <Button onClick={Name_change}> Change by Alphabet</Button>
            <span data-testid="Holiday display"> Holiday: {Holiday}</span>
        </span>
    );
}
