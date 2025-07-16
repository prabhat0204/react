from datetime import datetime

def get_greeting(hour):
    if hour < 12:
        return "Good morning!"
    elif hour < 18:
        return "Good afternoon!"
    else:
        return "Good evening!"

hour = datetime.now().hour
greeting = get_greeting(hour)

print("<h1>Welcome to My Page</h1>")
print(f"<p>The current time is: {datetime.now().strftime('%I:%M %p')}</p>")
print(f"<p>{greeting}</p>")