from datetime import datetime
birthdate_str = input("Please enter your birthdate (DD/MM/YYYY): ")
birthdate = datetime.strptime(birthdate_str, "%d/%m/%Y")
today = datetime.today()
age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
last_digit = age % 10
candles = "i" * last_digit if last_digit > 0 else "i"
cake = f"""
       ___{candles}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""
print(f"\nVous avez {age} ans.")
print(cake)

