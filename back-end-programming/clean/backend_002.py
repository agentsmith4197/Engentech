user = [
    "Engentech", "Smith", 
    "Habor", "Ruth", 
    "Favour", "Deborah", 
    "kingsley", "Sharp"
        ]

name = input("Please enter your name ")
if name in user:
    print(f'{name} is found in the database')

else:
    print(f'{name} is not found in the database')