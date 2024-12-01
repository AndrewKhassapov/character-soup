"""
Brute force text generator - Character soup

Description: Generates an array of all possible combinations of CHARACTERS from 1 digit to MAX_LENGTH digits.
Warning: A long maximum length (eg. 12) with a large number of unique characters (eg. 62) will take a long time to generate or may not complete without optimization.
"""

import math as Math


MAX_LENGTH = 3
"""The maximum number of characters
"""

CHARACTERS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%\&()*+,-./:;<=>?@[\]^_{|}~"
"""Characters to be used for brute force string generation
"""


def combinations(length=1):
    """Returns number of combinations

    Args:
        length (int, optional): Length of output. Defaults to 1.

    Returns:
        (int): Number of combinations of characters
    """
    return pow(len(CHARACTERS), length)


def combinations_factorial(length=1):
    """Returns number of combinations when combined. e.g. combinations(3) + combinations(2) + combinations(1)

    Args:
        length (int, optional): Maximum length of output, starting from 1. Defaults to 1.

    Returns:
        (int): Number of combinations of characters for lengths from 1 to length
    """
    if length > 1:
        return combinations(length) + combinations_factorial(length - 1)
    return combinations()


def decimalToText(num):
    """Converts a decimal number to a string using the CHARACTERS list

    Args:
        num (int): Number to count to in characters

    Returns:
        (str): Character, or characters, at given number
    """

    str = ""
    while num != 0:
        str += CHARACTERS[(num - 1) % len(CHARACTERS)]
        num = Math.floor((num - 1) / len(CHARACTERS))

    return str


def main():

    text = []  # List of all possible strings

    for i in range(combinations_factorial(MAX_LENGTH) + 1):
        text.insert(i, decimalToText(i))

    print(text)
    return


if __name__ == "__main__":
    main()
