import sqlite3
from flask import Flask, render_template_string

app = Flask(__name__)

def get_all_users(conn):
    cur = conn.cursor()
    cur.execute("SELECT * FROM users")
    return cur.fetchall()

@app.route('/')
def index():
    conn = sqlite3.connect('database.db')
    users = []
    for user in get_all_users(conn):
        users.append({'name': user[1], 'email': user[2]})
    conn.close()
    template = '''
    <html>
        <head>
            <title>User List</title>
        </head>
        <body>
            <h2>User List</h2>
            <ul>
                {% for user in users %}
                    <li><strong>{{ user.name|e }}</strong> ({{ user.email|e }})</li>
                {% endfor %}
            </ul>
        </body>
    </html>
    '''
    return render_template_string(template, users=users)

if __name__ == '__main__':
    app.run()