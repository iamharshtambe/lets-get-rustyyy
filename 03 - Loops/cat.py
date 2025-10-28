# while loop
i = 0

while i < 3:
    print("Meow")
    i += 1

# for loop
for _ in range(3):
    print("Meow")

# print("Hello\n" * 3, end="")

# printing Meow n times
while True:
    n = int(input("Enter n = "))
    if n < 0:
        continue
    else:
        break

for i in range(n):
    print("Meow")
