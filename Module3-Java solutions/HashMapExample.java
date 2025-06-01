import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<String, Integer> marks = new HashMap<>();
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of students: ");
        int n = sc.nextInt();
        sc.nextLine();  // Consume newline

        for (int i = 0; i < n; i++) {
            System.out.print("Enter name: ");
            String name = sc.nextLine();
            System.out.print("Enter marks: ");
            int mark = sc.nextInt();
            sc.nextLine(); // Consume newline
            marks.put(name, mark);
        }

        System.out.println("Student Marks:");
        for (String name : marks.keySet()) {
            System.out.println(name + ": " + marks.get(name));
        }
    }
}
