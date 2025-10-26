# my first python program
print("Hello, World!")

# ask user for their name
name = (
    input("What is your name? ").strip().title()
)  # remove whitespaces and capitalize first letter

# split user's name into first and last name
first_name, last_name = name.split(" ")

# say hello to the user
print(f"Hello, {first_name}")
