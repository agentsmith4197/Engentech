#catch all errors in the code
def get_numeric_value(repeat):
    while True:
        try:
            value = int(input(repeat))
            return value
        except ValueError:
            print("Sorry!!!, incorrect datatype, please enter a numeric value")

def get_arimetor_value(repeat):
    while True:
        try:
            value = input(repeat)
            return value
        except ValueError:
            print("Sorry!!!, Please check your operator again and proivide a vailde operator thank you")

name = input("please enter your name ")
arimetor = get_arimetor_value("enter ether +, -, / or * ")
number = get_numeric_value("enter a number ")
stopValue = get_numeric_value("Enter where you whish to stop ")
interval = get_numeric_value("enter your interval ")


if arimetor == "*":
    print(f'Hello!! {name}, welcome \nThis the outcome of your requested multiplication')
    for x in range(1, stopValue +1, interval):
        answer = number * x
        print(f'{number} * {x} = {answer}')
elif arimetor == "+":
    print(f'Hello!! {name}, welcome \nThis the outcome of your requested addiction')
    for x in range(1, stopValue +1, interval):
        answer = number + x
        print(f'{number} + {x} = {answer}')
elif arimetor == "-":
    print(f'Hello!! {name}, welcome \nThis the outcome of your requested subtraction')
    for x in range(1, stopValue +1, interval):
        answer = number - x
        print(f'{number} - {x} = {answer}')
elif arimetor == "/":
    print(f'Hello!! {name}, welcome \nThis the outcome of your requested division')
    for x in range(1, stopValue +1, interval):
        answer = number / x
        print(f'{number} / {x} = {answer}')
else:
    print("sorry check your operator again and proivide a vailde operator thank you")