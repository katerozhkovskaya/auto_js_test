/*
1. Функція для перетворення строки на масив слів, сортування його за алфавітним порядком
   і повернення результату (у масиві не повинно бути пробілів як елементів)
*/
function stringToArray(str) {
    const words = str.trim().toLocaleLowerCase().split(" ");
    words.sort();
    return words;
}

const str = "Це довільний текст для створення масиву слів ";
console.log(stringToArray(str)); // виводить [ 'для', 'довільний', 'масиву', 'слів', 'створення', 'текст', 'це' ]

/*
2. Функція для видалення з масива елементів, що дублюються, та повернення масиву оригінальних елементів,
   відсортованих за зростанням
*/
function removeDuplicatesAndSort(arr) {
    const uniqueArray = [];
    for (const number of arr) {
        if (!uniqueArray.includes(number)) {
            uniqueArray.push(number);
        }
    }
    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;
}

const initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 1000, 66, 1];
console.log(removeDuplicatesAndSort(initialArray)); // виводить [ 1, 4, 5, 6, 7, 34, 66, 1000 ]

/*
3. Функція для повернення масиву парних чисел
*/
function arrayOfEvens(arr) {
    const evens = arr.filter(number => number % 2 === 0);
    return evens;
}

const initialArray2 = [2, 3, 6, 7, 9, 12];
console.log(arrayOfEvens(initialArray2)); // виводить [ 2, 6, 12 ]

/*
4. Функція для створення масиву з послідовності чисел, збільшуючи кожний наступний елемент на самого себе,
   максимальне значення масиву не перевищує число 30
*/
function createArray(element) {
    const result = [];
    let currentValue = element;

    while (currentValue <= 30) {
        result.push(currentValue);
        currentValue += element;
    }

    return result;
}

console.log(createArray(5)); // виведе [ 5, 10, 15, 20, 25, 30 ]
console.log(createArray(3)); // виведе [ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30 ]
