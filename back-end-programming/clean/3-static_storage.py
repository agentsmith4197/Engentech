storage = [
    {
        'name': "EnGentech",
        'sex': "male",
        'mobile': '08039678842'
    }
]

def new_user(name, sex, mobile):
        new = { }
        new.update(name)
        new.update(sex)
        new.update(mobile)
        new2= storage.append(new)
        print(new2)
userName = input("Please enter your name ")
userSex = input("Please enter your sex ")
mobile = input("Please enter your mo ")
new_user(userName, userSex , mobile)