# API misuse / security: naive SQL concatenation leads to SQL injection
import sqlite3

def find_user(conn, username):
    q = "SELECT * FROM users WHERE username = '%s'" % username
    return conn.execute(q).fetchall()

if __name__ == '__main__':
    conn = sqlite3.connect(':memory:')
    conn.execute('CREATE TABLE users (username TEXT)')
    conn.execute("INSERT INTO users VALUES ('admin')")
    print(find_user(conn, "' OR '1'='1"))  # vulnerable
