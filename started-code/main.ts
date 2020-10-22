import {StringManipulationService, NumberManipulationService} from "./main-service";
class StringManipulations implements StringManipulationService{

    
    print(word: string): void {
        let Str2: String = "world";
        console.log(word);  //printing the word without modifications

        console.log("str in uppercase: " + word.toUpperCase());  //string in uppercase

        console.log("str in lowercase : " + word.toLowerCase());  //string in lowercase

        console.log("character at "+ " " +"position in a given string : " + word.charAt(1));  //character at a particular position in a given string
        
        console.log("Concatenation with another string : " + word.concat(Str2.toString())); //Concatenate the given string with another string

        console.log("Slice : " + word.slice(2, -1)); //Slice
        
        console.log("length of the given string: " + word.length); //Slice

    }
    printWithSpace(sentence: string): void {
        let Str2: String = sentence[0]+" ";
        for (let i = 1; i < sentence.length; i++){
            Str2 = Str2 + sentence.charAt(i) + " ";
        }
        console.log("print with space: " + Str2);
    }
    findVowel(str: string): void {
        let vowels: String = "aeiouAEIOU";
        let count: number = 0;
        for (let i = 0; i < str.length; i++){
            if (vowels.indexOf(str[i]) != -1) {
                count++;
            }
        }

        console.log("Number of vowels in a given string is: " + count);
    }


}

class NumbersManipulations implements NumberManipulationService{

    findPrime(num: number): void {
        var prime: number = 0;
        if (num == 1) {
            console.log(num + " is not a prime number");
        } else {
            for (let i = 2; i < Math.sqrt(num); i++) {
                if (num % i == 0) {
                    prime++;
                }
            }

            if (prime == 0) {
                console.log(num + " is a prime number")
            } else {
                console.log(num + " is not a prime number");
            }
        }
    }
    findMagic(num: number): void {

        if(num % 9 === 1){
            console.log(num +" is a Magic number");
        }else{
        console.log(num +" is not a magic number");
        }
        
    }
    
}


let obj = new StringManipulations();
obj.print("Hello");
obj.printWithSpace("space");
obj.findVowel("yaswanth");

let obj1 = new NumbersManipulations();
obj1.findMagic(10);
obj1.findPrime(5);
obj1.findMagic(199);