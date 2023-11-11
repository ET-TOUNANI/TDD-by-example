package com.ettounani;

import static org.junit.Assert.assertEquals;

import  org.junit.*;

/**
 * Unit test for simple App.
 */
public class AppTest {
  
    @Test
    public void threePlusFourEqualsSeven() {
        Calc calc = new Calc();
        assertEquals(7,calc.add(3,4));
    }
}
