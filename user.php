import mysql.connector
from mysql.connector import Error

def getAllUsers(conn):
    sql = "SELECT id, name, email FROM users"
    cursor = conn.cursor()
    cursor.execute(sql)
    return cursor.fetchall()

class Database:
    def __init__(self, host_name, db_name, user_name, user_password):
        self.host_name = host_name
        self.db_name = db_name
        self.user_name = user_name
        self.user_password = user_password

    def establish_connection(self):
        conn = None
        try:
            conn = mysql.connector.connect(
                host=self.host_name,
                database=self.db_name,
                user=self.user_name,
                password=self.user_password
            )
        except Error as err:
            print(f"Error: '{err}'")

        return conn

# Example usage
if __name__ == "__main__":
    db = Database('localhost', 'your_database', 'your_username', 'your_password')
    conn = db.establish_connection()
    if conn is not None:
        users = getAllUsers(conn)
        for user in users:
            print(user)