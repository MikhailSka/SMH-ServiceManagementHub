import random
import time

a = int(input("1)kamien 2)nozyce 3)paier "))
b = random.randint(1,3)

if a == b:
    print("remis")
elif (a == 1 and b == 3) or (a == 2 and b == 1) or (a == 3 and b == 2):
    time.sleep(2)
    print("Lose")
elif (b == 1 and a == 3) or (b == 2 and a == 1) or (b == 3 and a == 2):
    time.sleep(2)
    print("Win")