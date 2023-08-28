def get_numeric_value(repeat):
    while True:
        try:
            value = int(input(repeat))
            return value
        except ValueError:
            print("Sorry!!!, incorrect datatype, please enter a numeric value")

number = get_numeric_value("enter a numeric number ")

if number >= 0:
    print(f'{number} is a postive number')

else:
    print(f'{number} is negative number')