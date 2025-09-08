import psycopg2
from menu_item import MenuItem
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

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        conn = get_db_connection()
        cursor = conn.cursor()
        query = "SELECT item_name, item_price FROM Menu_Items WHERE item_name=%s;"
        cursor.execute(query, (name,))
        result = cursor.fetchone()
        conn.close()
        if result:
            return MenuItem(result['item_name'], result['item_price'])
        return None

    @classmethod
    def all_items(cls):
        conn = get_db_connection()
        cursor = conn.cursor()
        query = "SELECT item_name, item_price FROM Menu_Items;"
        cursor.execute(query)
        results = cursor.fetchall()
        conn.close()
        return [MenuItem(row['item_name'], row['item_price']) for row in results]
