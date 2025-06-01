import java.util.concurrent.*;
import java.util.*;

public class CallableDemo {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(5);

        List<Callable<Integer>> tasks = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            final int num = i;
            tasks.add(() -> num * num);
        }

        List<Future<Integer>> results = executor.invokeAll(tasks);

        for (Future<Integer> future : results) {
            System.out.println("Result: " + future.get());
        }

        executor.shutdown();
    }
}
