import random, math, re

class Hangman:
    def __init__(self):
        self.tried_list = []
        self.answer_list = ['apple', 'microsoft', 'facebook', 'netflix', 'amazon', 'uber', 'lyft', 'twitter', 'google']
        self.random_number = math.floor(random.random() * len(self.answer_list))
        self.goal = self.answer_list[self.random_number]
        self.chance = len(self.goal)
        self.result = '_' * len(self.goal)
        
        self.play_game()

    def play_game(self):
		letter = input('please enter one of alphabet between \"a\" and \"z\": ' )
        while self.chance > 0:
            if self.is_valid_length(letter) and self.is_valid_length(letter):
                self.update_result(letter)

    def update_result(letter):

			if letter in self.tried_list:
				idx = self.tried_list.index(letter)
				letter = input(f'you already used \'{self.tried_list[idx]}\'\nplease enter another alphabet: ' )
				self.is_valid_alpha(letter)
			else:
				if letter in self.goal:
					self.tried_list.append(letter)   


    def is_valid_alpha(self, letter):
		if letter.isalpha():             
            return True
		else:
			letter = input('please enter alphabet only between \"a\" and \"z\": ' )
			self.is_valid_alpha(letter)

    def is_valid_length(self, letter):
        if len(letter) > 1:
			letter = input('please enter one letter between\"a\" and \"z\": ' )
			self.is_valid_length(letter)
        else:
            return True


Hangman()
