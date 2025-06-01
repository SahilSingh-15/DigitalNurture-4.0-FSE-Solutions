import java.lang.reflect.Method;

public class ReflectionDemo {
    public void greet(String name) {
        System.out.println("Hello, " + name);
    }

    public static void main(String[] args) throws Exception {
        Class<?> cls = Class.forName("ReflectionDemo");
        Object obj = cls.getDeclaredConstructor().newInstance();

        for (Method method : cls.getDeclaredMethods()) {
            System.out.println("Method: " + method.getName());
            if (method.getName().equals("greet")) {
                method.invoke(obj, "World");
            }
        }
    }
}
