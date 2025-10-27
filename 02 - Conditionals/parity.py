def main():
    x = int(input("Enter X = "))
    if is_even(x):
        print("X is Even")
    else:
        print("X is Odd")


def is_even(x):
    if x % 2 == 0:
        return True
    else:
        return False


main()
