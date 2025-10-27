def main():
    x = int(input("Enter X = "))
    if is_even(x):
        print("X is Even")
    else:
        print("X is Odd")


def is_even(x):
    return x % 2 == 0


main()
