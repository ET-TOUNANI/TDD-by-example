package fizz_buzz;

public class Fizz {

    public static String fizzBuzz(int number) {
        if (number % 5 == 0 && number % 3 == 0)
            return "FizzBuzz";
        if (number % 5 == 0)
            return "Buzz";
        if (number % 3 == 0)
            return "Fizz";
        return "";
    }
}
