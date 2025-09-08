import psycopg2
from psycopg2.extras import RealDictCursor

DB_CONFIG = {
    "dbname": "new_database",
    "user": "postgres",
    "password": "1234hihi",
    "host": "localhost",
    "port": "5432",
}

def get_db_connection():
    conn = psycopg2.connect(**DB_CONFIG, cursor_factory=RealDictCursor)
    return conn

class MenuItem:
    def __init__(self, name, price=0):
        self.name = name
        self.price = price

    def save(self):
        connection = get_db_connection()
        cursor = connection.cursor()
        query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s);"
        cursor.execute(query, (self.name, self.price))
        connection.commit()
        connection.close()

    def delete(self):
        connection = get_db_connection()
        cursor = connection.cursor()
        query = "DELETE FROM Menu_Items WHERE item_name=%s;"
        cursor.execute(query, (self.name,))
        connection.commit()
        connection.close()

    def update(self, new_name, new_price):
        connection = get_db_connection()
        cursor = connection.cursor()
        query = "UPDATE Menu_Items SET item_name=%s, item_price=%s WHERE item_name=%s;"
        cursor.execute(query, (new_name, new_price, self.name))
        connection.commit()
        connection.close()
        self.name = new_name
        self.price = new_price
