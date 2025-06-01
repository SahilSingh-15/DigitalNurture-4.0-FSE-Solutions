import java.io.*;
import java.net.*;

public class TCPServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(6666);
        Socket socket = serverSocket.accept();

        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

        BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in));
        String message;

        while ((message = in.readLine()) != null) {
            System.out.println("Client: " + message);
            System.out.print("You: ");
            out.println(userInput.readLine());
        }

        socket.close();
        serverSocket.close();
    }
}
