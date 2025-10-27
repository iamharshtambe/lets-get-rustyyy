# my first python program
print("Hello, World!")


def say_hello(name="User"):
    print(f"Hello, {name}")


# ask user for their name
name = (
    input("What is your name? ").strip().title()
)  # remove whitespaces and capitalize first letter

# say hello to the user
say_hello(name)
say_hello()
