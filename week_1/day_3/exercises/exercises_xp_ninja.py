# ------ Exercise 1
class Phone:
    def __init__(self,phone_number):
        self.phone_number=phone_number
        self.call_history=[]
        self.messages=[]
    def call(self,other_phone):
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)
    def show_call_history(self):
        print(self.show_call_history)
    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message) 
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}: {content}")
    def show_outgoing_messages(self):
        outgoing = [msg for msg in self.messages if msg["from"] == self.phone_number]
        if not outgoing:
            print("No outgoing messages.")
        else:
            print("Outgoing Messages:")
            for msg in outgoing:
                print(f"To {msg['to']}: {msg['content']}")

    def show_incoming_messages(self):
        incoming = [msg for msg in self.messages if msg["to"] == self.phone_number]
        if not incoming:
            print("No incoming messages.")
        else:
            print("Incoming Messages:")
            for msg in incoming:
                print(f"From {msg['from']}: {msg['content']}")

    def show_messages_from(self, number):
        filtered = [msg for msg in self.messages if msg["from"] == number]
        if not filtered:
            print(f"No messages from {number}.")
        else:
            print(f"Messages from {number}:")
            for msg in filtered:
                print(f"{msg['content']}") 
phone1 = Phone("066111")
phone2 = Phone("069967")
phone3 = Phone("065899")
print("\n=== Calls ===")
phone1.call(phone2)
phone2.call(phone3)
phone1.show_call_history()
phone2.show_call_history()
print("\n=== Messages ===")
phone1.send_message(phone2, "Salam, kif dayr?")
phone2.send_message(phone1, "Labas 3lik? Ana bikhir")
phone3.send_message(phone1, "Fin ghadi lyom?")
print("\n--- Phone1 Outgoing ---")
phone1.show_outgoing_messages()
print("\n--- Phone1 Incoming ---")
phone1.show_incoming_messages()
print("\n--- Messages from 066111to Phone1 ---")
phone1.show_messages_from("066111")
print("\n--- Messages from 065899 to Phone1 ---")
phone1.show_messages_from("065899")


        
        
# ------ Exercise 2

# ------ Exercise 3

# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
