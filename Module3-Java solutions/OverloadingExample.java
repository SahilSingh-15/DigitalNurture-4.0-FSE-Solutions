public class OverloadingExample {
    void display(int a) {
        System.out.println("Integer: " + a);
    }

    void display(String s) {
        System.out.println("String: " + s);
    }

    public static void main(String[] args) {
        OverloadingExample obj = new OverloadingExample();
        obj.display(10);
        obj.display("Hello");
    }
}
