import random, math, re

class Hangman:
    def __init__(self):
        self.tried_list = []
        self.answer_list = ['apple', 'microsoft', 'facebook', 'netflix', 'amazon', 'uber', 'lyft', 'twitter', 'google']
        self.random_number = math.floor(random.random() * len(self.answer_list))
        self.goal = self.answer_list[self.random_number]
        self.chance = len(self.goal)
        self.result = '_' * len(self.goal)

Hangman()
