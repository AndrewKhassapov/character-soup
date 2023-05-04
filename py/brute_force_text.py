import math as Math

"""The maximum number of characters
"""
MAX_LENGTH = 3

"""Characters to be used for brute force string generation
"""
CHARACTERS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%\&()*+,-./:;<=>?@[\]^_{|}~"

"""List of all possible strings
"""
text = []


def combinations(length=1):
    return pow(len(CHARACTERS), length)


def combinationsStacked(length=1):
    if (length > 1):
        return combinations(length) + combinationsStacked(length - 1)
    return combinations()


def decimalToText(num):
    """Converts a decimal number to a string using the CHARACTERS list

    :param num: Decimal number to convert
    :type num: int
    :returns: String representation of the decimal number
    :rtype: str
    """

    str = ""
    while (num != 0):
        str += CHARACTERS[(num - 1) % len(CHARACTERS)]
        num = Math.floor((num - 1) / len(CHARACTERS))

    return str


for i in range(combinationsStacked(MAX_LENGTH) + 1):
    text.insert(i, decimalToText(i))

print(text)
