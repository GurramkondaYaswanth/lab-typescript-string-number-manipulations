"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        var Str2 = "world";
        console.log(word); //printing the word without modifications
        console.log("str in uppercase: " + word.toUpperCase()); //string in uppercase
        console.log("str in lowercase : " + word.toLowerCase()); //string in lowercase
        console.log("character at " + " " + "position in a given string : " + word.charAt(1)); //character at a particular position in a given string
        console.log("Concatenation with another string : " + word.concat(Str2.toString())); //Concatenate the given string with another string
        console.log("Slice : " + word.slice(2, -1)); //Slice
        console.log("length of the given string: " + word.length); //Slice
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        var Str2 = sentence[0] + " ";
        for (var i = 1; i < sentence.length; i++) {
            Str2 = Str2 + sentence.charAt(i) + " ";
        }
        console.log("print with space: " + Str2);
    };
    StringManipulations.prototype.findVowel = function (str) {
        var vowels = "aeiouAEIOU";
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (vowels.indexOf(str[i]) != -1) {
                count++;
            }
        }
        console.log("Number of vowels in a given string is: " + count);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        var prime = 0;
        if (num == 1) {
            console.log(num + " is not a prime number");
        }
        else {
            for (var i = 2; i < Math.sqrt(num); i++) {
                if (num % i == 0) {
                    prime++;
                }
            }
            if (prime == 0) {
                console.log(num + " is a prime number");
            }
            else {
                console.log(num + " is not a prime number");
            }
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        if (num % 9 === 1) {
            console.log(num + " is a Magic number");
        }
        else {
            console.log(num + " is not a magic number");
        }
    };
    return NumbersManipulations;
}());
var obj = new StringManipulations();
obj.print("Hello");
obj.printWithSpace("space");
obj.findVowel("yaswanth");
var obj1 = new NumbersManipulations();
obj1.findMagic(10);
obj1.findPrime(5);
obj1.findMagic(199);
