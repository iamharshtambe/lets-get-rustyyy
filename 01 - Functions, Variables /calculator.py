def main():
    x = float(input("Enter first number: "))
    y = float(input("Enter second number: "))

    addition(x, y)

    subtraction(x, y)

    multiplication(x, y)

    division(x, y)


def addition(x, y):
    print(f"Addition of {x} + {y} = {round(x + y)}")


def subtraction(x, y):
    print(f"Subtraction of {x} - {y} = {round(x - y)}")


def multiplication(x, y):
    print(f"Multiplication of {x} * {y} = {round(x * y)}")


def division(x, y):
    print(f"Division of {x} / {y} = {round(x / y, ndigits=2)}")


main()
