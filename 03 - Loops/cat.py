def main():
    say_meow(get_number())


def get_number():
    while True:
        n = int(input("Enter n = "))
        if n > 0:
            break
    return n


def say_meow(n):
    for _ in range(n):
        print("Meow")


main()
