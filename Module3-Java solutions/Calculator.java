import java.util.Scanner;
public class Calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter two numbers: ");
        double a = sc.nextDouble(), b = sc.nextDouble();
        System.out.print("Choose operation (+ - * /): ");
        char op = sc.next().charAt(0);
        double result = 0;
        switch(op) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/': result = b != 0 ? a / b : 0; break;
            default: System.out.println("Invalid operator");
        }
        System.out.println("Result: " + result);
    }
}
