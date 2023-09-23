// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { idText } from "typescript";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    return {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
export function isCorrect(question: Question, answer: string): boolean {
    const expec = question.expected.trim();
    const answer_H = answer.trim();
    if (expec.toLowerCase() == answer_H.toLowerCase()) return true;
    return false;
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type == "short_answer_question") return true;
    const exists_in_string = (item: string): boolean => item != answer;
    const option_H = question.options;
    const result = option_H.filter(exists_in_string);
    if (result.length == question.options.length) return false;
    return true;
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */
export function toShortForm(question: Question): string {
    let result = "";
    if (question.name.length > 10) {
        // eslint-disable-next-line prettier/prettier
        result = question.id.toString() + ": " + question.name.slice(0, 10);
        return result;
    }
    result = question.id.toString() + ": " + question.name;
    return result;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
export function toMarkdown(question: Question): string {
    let result = "# " + question.name + "\n" + question.body;
    let counter = 0;
    if (question.options[counter] != null) {
        result = result + "\n" + "- " + question.options[counter];
        counter++;
    }
    if (question.options[counter] != null) {
        result = result + "\n" + "- " + question.options[counter];
        counter++;
    }
    if (question.options[counter] != null) {
        result = result + "\n" + "- " + question.options[counter];
        counter++;
    }
    if (question.options[counter] != null) {
        result = result + "\n" + "- " + question.options[counter];
        counter++;
    }
    if (question.options[counter] != null) {
        result = result + "\n" + "- " + question.options[counter];
        counter++;
    }
    if (question.options[counter] != null) {
        result = result + "\n" + "- " + question.options[counter];
        counter++;
    }
    if (question.options[counter] != null) {
        result = result + "\n" + "- " + question.options[counter];
        counter++;
    }
    if (question.options[counter] != null) {
        result = result + "\n" + "- " + question.options[counter];
        counter++;
    }
    return result;
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    const { id, name, type, body, expected, options, points, published } =
        question;
    const new_Q = {
        id: id,
        name: name,
        type: type,
        body: body,
        expected: expected,
        options: options,
        points: points,
        published: published
    };
    new_Q.name = newName;
    return new_Q;
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
export function publishQuestion(question: Question): Question {
    const { id, name, type, body, expected, options, points, published } =
        question;
    const new_Q = {
        id: id,
        name: name,
        type: type,
        body: body,
        expected: expected,
        options: options,
        points: points,
        published: published
    };
    if (new_Q.published) {
        new_Q.published = false;
        return new_Q;
    }
    new_Q.published = true;
    return new_Q;
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(
    id2: number,
    oldQuestion: Question
): Question {
    const { name, type, body, expected, options, points, published } =
        oldQuestion;
    const new_Q = {
        id: id2,
        name: name,
        type: type,
        body: body,
        expected: expected,
        options: options,
        points: points,
        published: published
    };
    new_Q.name = "Copy of " + new_Q.name;
    new_Q.published = false;
    return new_Q;
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    const { id, name, type, body, expected, options, points, published } =
        question;
    const new_Q = {
        id: id,
        name: name,
        type: type,
        body: body,
        expected: expected,
        options: [...options],
        points: points,
        published: published
    };
    new_Q.options = [...options, newOption];
    return new_Q;
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    id2: number,
    name2: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    const { type, body, expected, options } = contentQuestion;
    const new_Q = {
        id: id2,
        name: name2,
        type: type,
        body: body,
        expected: expected,
        options: options,
        points: points,
        published: false
    };
    return new_Q;
}
