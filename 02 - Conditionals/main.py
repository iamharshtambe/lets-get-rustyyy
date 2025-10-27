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

# equal or not
if a != b:
    print("A and B are not equal")
else:
    print("A and B are equal")

# grade according to score
score = int(input("Enter your score: "))

if score >= 90:
    print("Grade A")
elif score >= 80:
    print("Grade B")
elif score >= 70:
    print("Grade C")
elif score >= 60:
    print("Grade D")
else:
    print("Go and study! You have failed...")

# even or odd
if x % 2 == 0:
    print(f"{x} is a even number")
else:
    print(f"{x} is a odd number")
