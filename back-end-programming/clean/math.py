def get_numeric_value(repeat):
    while True:
        try:
            value = int(input(repeat))
            return value
        except ValueError:
            print("Sorry!!!, incorrect datatype, please enter a numeric value")

number = get_numeric_value("enter a number ")
stopValue = get_numeric_value("Enter where you whish to stop your multiplication ")
interval = get_numeric_value("enter your interval ")
arimetor = input("enter ether +, - or * /")

for x in range(1, stopValue +1, interval):
    if arimetor == "*":
        answer = number * x
        print(f'{number} * {x} = {answer}')
    elif arimetor == "+":
        answer = number + x
        print("the multiplication of requted number and in the required interval is$ ")
        print(f'{number} + {x} = {answer} ')
    elif arimetor == "-":
        answer = number - x
        print(f'{number} - {x} = {answer}')
    elif arimetor == "/":
        answer = number / x 
        print(f'{answer} / {x} = {answer}')
    else:
        print("thank you")