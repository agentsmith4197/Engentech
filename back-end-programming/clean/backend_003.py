credentials = {
    'gentel': 'admin28',
    'deborah': '324debby',
    'ruth': 'smartpass123',
    'favour': 'sharpman3690'
}


username = (input("Enter your Username "))
password = (input("Enter your passord "))

if username in credentials and credentials[username] == password:
    print(f'welcome {username}, your Credential was found in our database')
else:
    print("please check your username and password and try again")