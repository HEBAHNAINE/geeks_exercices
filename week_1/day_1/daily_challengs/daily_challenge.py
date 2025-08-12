# ------ Challenge 1
number=int(input("enter un nombre :"))
length = int(input("Entrez une longueur:"))
for i in range(1,length+1):
    numebres=number*i
    print(f"{numebres}")
# ------ Challenge 2
str=input("entrer un string")
newStr=""
for i in range (len(str)):
   if i == len(str) - 1 or str[i] != str[i + 1]:
        newStr+=str[i]
print(f"{newStr}")

    
