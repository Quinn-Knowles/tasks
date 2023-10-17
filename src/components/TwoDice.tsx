import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die_1, set_die1] = useState<number>(-1);
    const [die_2, set_die2] = useState<number>(0);
    const [Left_has_been_rolled, disable_left] = useState(false);
    const [final, set_final] = useState(false);
    const [Right_has_been_rolled, disable_Right] = useState(false);
    const winner: string[] = [
        "Snake Eyes! You LOSE",
        "Thats a pair! Winner!",
        "No result.",
        "No games played yet!"
    ];
    const [pair, register_pair] = useState(false);
    const [Result_counter, set_winner] = useState<string>(winner[3]);
    function toggle1() {
        const die1 = d6();
        set_die1(die1);
        disable_left(true);
        if (Right_has_been_rolled) {
            // eslint-disable-next-line prettier/prettier
            set_winner(die1 === die_2 && die1 === 1 ? winner[0]: die1 === die_2 ? winner[1] : winner[2]);
            set_final(true);
        }
    }
    function toggle2() {
        const die2 = d6();
        set_die2(die2);
        disable_Right(true);
        if (Left_has_been_rolled) {
            // eslint-disable-next-line prettier/prettier
            set_winner(die_1 === die2 && die_1 === 1 ? winner[0]: die_1 === die2 ? winner[1] : winner[2]);
            set_final(true);
        }
    }
    function toggle3() {
        set_die2(0);
        set_die1(-1);
        disable_Right(false);
        disable_left(false);
        set_winner(winner[2]);
        register_pair(false);
        set_final(false);
    }
    return (
        <span>
            {final && <button onClick={toggle3}> replay? </button>}
            <p>{Result_counter} </p>
            <Button disabled={Left_has_been_rolled} onClick={toggle1}>
                {" "}
                roll left die
            </Button>
            <Button disabled={Right_has_been_rolled} onClick={toggle2}>
                {" "}
                roll right die
            </Button>
            <p> here are the die!</p>
            <button data-testid="left-die" disabled={true}>
                {die_1}
            </button>
            <button data-testid="right-die" disabled={true} onClick={toggle2}>
                {" "}
                {die_2}
            </button>
        </span>
    );
}
