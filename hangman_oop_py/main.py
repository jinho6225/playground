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
	    print('welcome to hangman game!\nanswer would be one of the biggest tech company\ngood luck!')
        
        while self.chance > 0:
            letter = self.get_letter()
            if self.is_valid_len(letter):
                self.is_valid_alpha(letter)
            else:
                continue;
        self.check_lose()


    def get_letter(self):
		letter = input('please enter one of alphabet between \"a\" and \"z\": ' )
        return letter

    def is_valid_len(self, letter):
        if len(letter) > 1:
            letter = input('please enter one letter between\"a\" and \"z\": ' )
            if len(letter) > 1:
                return False

    def is_valid_alpha(self, letter):
        if letter.isalpha():
            if letter in self.tried_list:
                idx = self.tried_list.index(letter)
                letter = input(f'you already used \'{self.tried_list[idx]}\'\nplease enter another alphabet: ' )
                if letter in self.tried_list:
                    idx = self.tried_list.index(letter)
                    letter = print(f'you already used \'{self.tried_list[idx]}\'')
                    continue;
            else:
                if letter in self.goal:
                    self.tried_list.append(letter)
        else:
            letter = input('please enter alphabet only between \"a\" and \"z\": ' )
        self.update_result(letter)

    def update_result(self, letter):
        print(f'\nyou left {self.chance-1} chance')
		if not self.goal.find(letter.lower()) == -1:
			idx = self.goal.find(letter.lower())
			while idx != -1:
				self.result = self.result[0:idx] + letter.lower() + self.result[idx+1:]
				idx = self.goal.find(letter.lower(), idx+1)
			print(f'\n{self.result}\n')	
		else:
			print(f'\n{self.result}\n')	
			self.chance -= 1
        self.check_if_answer()

    def check_if_answer(self):
        if self.result in self.answer_list:
        answer = input('congraturation!!\nstart again?\nplease enter \'yes\' or \'y\', otherwise enter anykey to exit here: ')
        if answer.lower() == 'yes' or answer.lower() == 'y':
            return self.play_game()
        else:
            print('bye bye')
            return

    def check_lose(self):
        if self.chance == 0:
		answer = input('lost game\nstart again?\nplease enter \'yes\' or \'y\', otherwise enter anykey to exit here ')
		if answer.lower() == 'yes' or answer.lower() == 'y':
			return self.play_game()
		else:
			print('bye bye')
			return


hangman = Hangman()
