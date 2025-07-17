import mysql.connector
from mysql.connector import Error

host = "localhost"
dbname = "your_database"
user = "root"
passw = ""

try:
    conn = mysql.connector.connect(host=host, database=dbname, user=user, password=passw)
    print("Database connection successful")
except Error as e:
    print(f"Database connection failed: {e}")