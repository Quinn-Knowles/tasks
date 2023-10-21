import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const Types: QuestionType[] = [
        "short_answer_question",
        "multiple_choice_question"
    ];
    const [type, set_type] = useState<QuestionType>(Types[0]);
    const Change_type_set = (): void => {
        set_type(
            type === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };
    return (
        <div className="Type change">
            {type === "multiple_choice_question"&& <p> Multiple Choice Question</p>}
            {type === "short_answer_question" && <p> Short Answer Question</p>}
            <Button onClick={Change_type_set}>Change Type</Button> {type}
        </div>
    );
}
