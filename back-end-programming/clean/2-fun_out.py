from random import randint

computer_number = randint(1, 10)

def play_game():
    while True:
        userNumber = int(input("Guess the number$ "))
        if userNumber != computer_number:
            print("am sorry you lost try again ")
            # if computer_number.count() == 3:
            #     print("am sorry you lost ")
            #     break
        else:
            print("congratulations you won ")
            break
            

play_game()