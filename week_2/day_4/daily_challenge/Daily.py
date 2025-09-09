import requests
import psycopg2
import random

#Connexion à postgreSQL 
conn = psycopg2.connect(
    dbname="new_database",
    user="postgres",
    password="1234hihi",
    host="localhost",
    port="5432"
)
cur = conn.cursor()

# Récupérer tous les pays via API
url = "https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population"
response = requests.get(url)
countries = response.json()

# Choisir 10 pays au hasard
random_countries = random.sample(countries, 10)

# Insérer dans la base
for country in random_countries:
    name = country.get("name", {}).get("common", "Unknown")
    capital = country.get("capital", ["Unknown"])[0] if country.get("capital") else "Unknown"
    flag = country.get("flag", "🏳️")
    subregion = country.get("subregion", "Unknown")
    population = country.get("population", 0)

    cur.execute("""
        INSERT INTO countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
    """, (name, capital, flag, subregion, population))

# Sauvegarder les changements
conn.commit()

print("10 random countries inserted successfully!")

# Fermer la connexion
cur.close()
conn.close()
