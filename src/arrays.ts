/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 1) {
        const new_numbers = [...numbers, ...numbers];
        return new_numbers;
    }
    if (numbers.length == 0) {
        return numbers;
    }
    const new_numbers = [numbers[0], numbers[numbers.length - 1]];
    return new_numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const new_numbers = numbers.map((item) => item * 3);
    return new_numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const temp_numbers = numbers.map((x) => parseInt(x));
    const new_numbers = temp_numbers.map((item) =>
        isNaN(item) ? (item = 0) : item
    );
    return new_numbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numbers = amounts.map((item) =>
        item.charAt(0) == "$" ? item.slice(1) : item
    );
    const temp_numbers = numbers.map((x) => parseInt(x));
    const new_numbers = temp_numbers.map((item) =>
        isNaN(item) ? (item = 0) : item
    );
    return new_numbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const new_message = messages.map((item: string) =>
        item.charAt(item.length - 1) == "!" ? item.toLocaleUpperCase() : item
    );
    const isquestion = (item: string): boolean =>
        item.charAt(item.length - 1) != "?";
    const final_message = new_message.filter(isquestion);
    return final_message;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const word_length = (item: string): boolean => item.length <= 3;
    const new_words = words.filter(word_length);

    return new_words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const begin_length = colors.length;
    const isColorR = (item: string): boolean => item == "red";
    const isColorG = (item: string): boolean => item == "green";
    const isColorB = (item: string): boolean => item == "blue";
    const redwords = colors.filter(isColorR);
    const greenwords = colors.filter(isColorG);
    const bluewords = colors.filter(isColorB);
    if (begin_length == redwords.length + greenwords.length + bluewords.length)
        return true;
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let counter = 0;
    let straang = "";
    if (addends.length == 0) return "0=0";
    addends.map((item: number) => (counter = counter + item));
    addends.map(
        (item: number) => (straang = straang.concat(item.toString(), "+"))
    );
    straang = straang.slice(0, straang.length - 1);
    const counted = counter.toString();
    const final = counted.concat("=", straang);
    return final;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const holder = [...values];
    const negative = (item: number): boolean => item >= 0;
    const neg_check = values.filter(negative);
    let counter = 0;
    let position = 0;
    if (neg_check.length == values.length) {
        holder.map((item: number) => (counter = counter + item));
        const final = [...holder, counter];
        return final;
    }
    let acctuate = 0;
    let location = 0;
    holder.map((item: number) =>
        item < 0 ? (acctuate = counter) : (counter = item + counter)
    );
    holder.map((item: number) =>
        item < 0 ? (location = position) : (position = position + 1)
    );
    let cont = [...holder];
    cont.splice(location + 1, 0, acctuate);
    const forreal = [...cont];
    return forreal;
}
