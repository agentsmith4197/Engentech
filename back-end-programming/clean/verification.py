user_credentials = {
    "gentle": "admin28",
    "ruth": "123abc",
    "smith": "passcode36f"
}


def validate_user(username, password):
    if username in user_credentials:
        if password == user_credentials[username]:
            return True
    return False


username_input = input("Enter your username: ")
password_input = input("Enter your password: ")

if validate_user(username_input, password_input):
    print("Acess Granted")
else:
    print("Acess Denied")
