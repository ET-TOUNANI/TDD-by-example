package string_calculator;

public class Calculator {
    static String devider1 = ",";
    static String devider2 = "\n";
    static int result = 0;

    public static int add(String numbers) {

        if (!numbers.contains(devider1) && !numbers.contains(devider2))
            return Integer.valueOf((numbers.isEmpty())?"0":numbers);
        else {
            String[] str = numbers.split(devider1);
            result = Integer.valueOf(str[0]);
            if (str[1].contains(devider2)) {
                String[] str2 = str[1].split(devider2);
                result += Integer.valueOf(str2[0]);
                result += Integer.valueOf(str2[1]);
            } else {
                result += Integer.valueOf(str[1]);
            }
        }

        return result;
    }

}
