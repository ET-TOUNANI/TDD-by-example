package string_calculator;

import static org.junit.Assert.assertEquals;


import org.junit.*;

/**
 * Unit test for simple App.
 */
public class AppTest {

    @Test
    public void emptySringShouldReturn0() {
        assertEquals(0, Calculator.add(""));
    }

    @Test
    public void addOneShouldReturn1() {
        assertEquals(1, Calculator.add("1"));
    }

    @Test
    public void addTwoShouldReturn2() {
        assertEquals(2, Calculator.add("2"));
    }

    @Test
    public void addOneAndTowShouldReturn3() {
        assertEquals(3, Calculator.add("1,2"));
    }

    @Test
    public void addZeroAndFiveShouldReturn5() {
        assertEquals(5, Calculator.add("0,5"));
    }
    @Test(expected = NumberFormatException.class)
    public void addUnkownNumberShouldReturnException() {
        Calculator.add("a");
    }
    @Test(expected = NumberFormatException.class)
    public void addUnkownNumber2ShouldReturnException() {
        Calculator.add("2,a");
    }
    @Test
    public void addNewLine123DeviderShouldReturn6() {
        assertEquals(6,Calculator.add("1,2\n3"));
    }
    @Test(expected=SeparatorInTheEndException.class)
    public void addDeviderInTheEndShouldThrowException() {
        Calculator.add("1,2,");
    }
   
}
