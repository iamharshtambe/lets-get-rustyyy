name = input("Enter name either from Tambe or Naik family: ")

match name:
    case "Harsh" | "Vijay" | "Siya":
        print("Tambe Family")
    case "Riya" | "Rupesh" | "Dipti":
        print("Naik Family")
    case _:
        print("Who?")
