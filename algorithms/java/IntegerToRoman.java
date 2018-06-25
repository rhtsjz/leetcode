public class IntegerToRoman {

    public String intToRoman(int num) {
        String M[] = {"", "M", "MM", "MMM"};
        String C[] = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
        String X[] = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
        String I[] = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
        return M[num / 1000] + C[(num % 1000) / 100] + X[(num % 100) / 10] + I[num % 10];
    }


    public static void main(String[] args) {
        IntegerToRoman itr = new IntegerToRoman();
        int i = 3;
        String r;
        r = itr.intToRoman(i);
        System.out.printf("integer: %d, roman: %s\n", i, r);
        i = 4;
        r = itr.intToRoman(i);
        System.out.printf("integer: %d, roman: %s\n", i, r);
        i = 9;
        r = itr.intToRoman(i);
        System.out.printf("integer: %d, roman: %s\n", i, r);
        i = 58;
        r = itr.intToRoman(i);
        System.out.printf("integer: %d, roman: %s\n", i, r);
        i = 1994;
        r = itr.intToRoman(i);
        System.out.printf("integer: %d, roman: %s\n", i, r);
    }
}
