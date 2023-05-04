import math as Math

# The maximum number of characters
MAX_LENGTH = 3

# Characters
CHARACTERS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%\&()*+,-./:;<=>?@[\]^_{|}~"

text = []


def decimalToText(num):
    str = ""
    while (num != 0):
        str += CHARACTERS[(num - 1) % len(CHARACTERS)]
        num = Math.floor((num - 1) / len(CHARACTERS))

    return str


for i in range(pow(len(CHARACTERS), MAX_LENGTH)):
    text.insert(i, decimalToText(i))

print(text)
