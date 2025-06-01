import java.io.*;
import java.net.*;

public class TCPClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 6666);

        BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));

        String message;
        while (true) {
            System.out.print("You: ");
            out.println(userInput.readLine());
            message = in.readLine();
            if (message == null) break;
            System.out.println("Server: " + message);
        }

        socket.close();
    }
}
