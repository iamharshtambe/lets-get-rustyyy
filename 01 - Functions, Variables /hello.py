def main():
    name = input("What is your name? ").strip().title()
    say_hello(name)


def say_hello(to="User"):
    print("Hello", to)


main()
