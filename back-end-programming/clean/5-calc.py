def get_numeric_value(repeat):
    while True:
        try:
            value = int(input(repeat))
            return value
        except ValueError:
            print("Sorry!!!, incorrect datatype, please enter a numeric value")

while True:
    number1 = get_numeric_value("enter the first number ")
    number2 = get_numeric_value("enter the second  number ")
    signs = input("Please enter an arithmetic sign  ")
    
    def calc(numb1, numb2, sign):
        if sign == "+":
            ans = numb1 + numb2
            print(f'cal$ {numb1} {sign} {numb2}')
            print(f'the sum of {numb1} and {numb2} = {ans}')
        elif sign == "-":
            ans = numb1 - numb2
            print(f'cal$ {numb1} {sign} {numb2}')
            print(f'the difference of {numb1} and {numb2} = {ans}')
        elif sign == "/":
            ans = numb1 / numb2
            print(f'cal$ {numb1} {sign} {numb2}')
            print(f'the division of {numb1} and {numb2} = {ans}')
        elif sign == "*":
            ans = numb1 * numb2
            print(f'cal$ {numb1} {sign} {numb2}')
            print(f'the multiplication of {numb1} and {numb2} = {ans}')
        else:
            print("please enter the a correct arithmetic sign ")

    calc(number1, number2, signs)
    con = input("do you want to continue ").lower()
    if con == "yes":
        calc(number1, number2, signs)
    else:
        break
