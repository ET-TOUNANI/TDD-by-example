package fizz_buzz;

import static org.junit.Assert.assertEquals;

import org.junit.*;

/**
 * Unit test for simple App.
 */
public class AppTest {

    @Test
    public void nineShouldReturnFizz() {
        assertEquals("Fizz", Fizz.fizzBuzz(9));
    }

    @Test
    public void twentyShouldReturnBuzz() {
        assertEquals("Buzz", Fizz.fizzBuzz(20));
    }

    @Test
    public void FifteenShouldReturnFizzBuzz() {
        assertEquals("FizzBuzz", Fizz.fizzBuzz(15));
    }
    @Test
    public void eightShouldReturnEmptyString() {
        assertEquals("", Fizz.fizzBuzz(8));
    }

}
