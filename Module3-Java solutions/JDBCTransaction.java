import java.sql.*;

public class JDBCTransaction {
    public static void transferMoney(Connection conn, int fromId, int toId, double amount) throws SQLException {
        try {
            conn.setAutoCommit(false);

            PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
            debit.setDouble(1, amount);
            debit.setInt(2, fromId);
            debit.executeUpdate();

            PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");
            credit.setDouble(1, amount);
            credit.setInt(2, toId);
            credit.executeUpdate();

            conn.commit();
            System.out.println("Transfer successful!");

        } catch (SQLException e) {
            conn.rollback();
            System.out.println("Transfer failed. Rolled back.");
        } finally {
            conn.setAutoCommit(true);
        }
    }

    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:sqlite:bank.db");
        transferMoney(conn, 1, 2, 100.0);
    }
}
