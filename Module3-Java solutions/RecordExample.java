import java.util.*;

public class RecordExample {
    public record Person(String name, int age) {}

    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Alice", 25),
            new Person("Bob", 17),
            new Person("Charlie", 30)
        );

        people.forEach(System.out::println);

        System.out.println("\nAdults:");
        people.stream()
              .filter(p -> p.age() >= 18)
              .forEach(p -> System.out.println(p.name() + " is an adult."));
    }
}
