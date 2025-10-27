# positive, negative or zero
x = int(input("Enter X = "))

if x > 0:
    print(f"{x} is a Positive Integer")
elif x < 0:
    print(f"{x} is a Negative Integer")
else:
    print(f"{x}")

a = int(input("Enter A = "))
b = int(input("Enter B = "))

if a > b or a < b:
    print("A and B are not equal")
else:
    print("A and B are equal")
