/* eslint-disable prefer-const */
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let new_Questions = [...questions];
    const publish_check = (item: Question): boolean => item.published;
    const final = new_Questions.filter(publish_check);
    return final;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let new_Questions = [...questions];
    const empty_body_check = (item: Question): boolean =>
        !(
            item.body.length == 0 &&
            item.expected.length == 0 &&
            item.options.length == 0
        );
 //   const empty_expected_check = (item: Question): boolean =>
 //       item.expected.length != 0;
 //   const empty_options_check = (item: Question): boolean =>
 //       item.options.length != 0;
  //  const empty_body = new_Questions.filter(empty_body_check);
 //   const empty_expected = empty_body.filter(empty_expected_check);
    const empty_options = new_Questions.filter(empty_body_check);
    return empty_options;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const new_Questions = questions;
    const Find_id = (item: Question): boolean => item.id == id;
    const Final_Questions = new_Questions.filter(Find_id);
    if (Final_Questions.length == 1) {
        const Searched_Question = Final_Questions[0];
        return Searched_Question;
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const new_Questions = questions;
    const Find_id = (item: Question): boolean => item.id != id;
    const Final_Questions = new_Questions.filter(Find_id);
    return Final_Questions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const new_Questions = questions;
    let new_array = [];
    const Final_Questions = new_Questions.map((item) =>
        new_array.push(item.name)
    );
    return new_array;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const new_Questions = questions;
    let total_points = 0;
    const Final_Questions = new_Questions.map(
        (item) => (total_points = item.points + total_points)
    );
    return total_points;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const new_Questions = questions;
    const Find_published = (item: Question): boolean => item.published;
    const Final_Questions = new_Questions.filter(Find_published);
    return sumPoints(Final_Questions);
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let returned_String = "id,name,options,points,published";
    const new_Questions = questions;
    const incon = new_Questions.map(
        (item) =>
            (returned_String =
                returned_String +
                "\n" +
                item.id.toLocaleString().replace(",", "") +
                "," +
                item.name +
                "," +
                item.options.length.toLocaleString() +
                "," +
                item.points.toLocaleString() +
                "," +
                item.published.toLocaleString())
    );
    return returned_String;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const New_Questions = questions;

    return [];
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const new_Questions = questions;
    const make_published = new_Questions.map((item) => (item.published = true));
    return new_Questions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const new_Questions = questions;
    if (questions.length == 0) {
        return true;
    }
    const first_Question = questions[0];
    const first_Type = first_Question.type;
    const check_against = (item: Question): boolean => item.type == first_Type;
    const Final_Questions = new_Questions.filter(check_against);
    if (Final_Questions.length == questions.length) {
        return true;
    }
    return false;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const new_question = makeBlankQuestion(id, name, type);
    const new_Questions = [...questions, new_question];
    return new_Questions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return [];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return [];
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return [];
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    return [];
}
