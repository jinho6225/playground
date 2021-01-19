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
        print('welcome to hangman game!\nanswer would be one of the biggest tech company\ngood luck!\n')
        while self.chance > 0:
            letter = input('please enter one of alphabet between \"a\" and \"z\": ' )
            self.update_result(letter)
            if self.result in self.answer_list:
                return self.winning_condition('congraturation!!\nstart again?\nplease enter \'yes\' or \'y\', otherwise enter anykey to exit here: ')

        if self.chance == 0:
            return self.winning_condition('lost game\nstart again?\nplease enter \'yes\' or \'y\', otherwise enter any key to exit here ')

    def update_result(self, letter):
        letter = self.is_valid_length(letter)
        letter = self.is_valid_alpha(letter)
        letter = self.check_duplicate(letter)
        if not self.goal.find(letter.lower()) == -1:
            #found it
            idx = self.goal.find(letter.lower())
            while idx != -1:
                self.result = self.result[0:idx] + letter.lower() + self.result[idx+1:]
                idx = self.goal.find(letter.lower(), idx+1)
            print(f'\n{self.result}\n')
            if not letter in self.tried_list:
                self.tried_list.append(letter)
            else:
                pass    
        else:
            #not found it
            print(f'\n{self.result}\n')    
            self.chance -= 1
        print(f'\nyou left {self.chance} chance')

    def check_duplicate(self, letter):
        while True:
            if letter in self.tried_list:
                idx = self.tried_list.index(letter)
                letter = input(f'you already used \'{self.tried_list[idx]}\'\nplease enter another alphabet: ' )
            else:
                break;
        return letter

    def is_valid_alpha(self, letter):
        while True:
            if letter.isalpha():             
                break;
            else:
                letter = input('please enter alphabet only between \"a\" and \"z\": ' )
        return letter    
    
    def is_valid_length(self, letter):
        while True:
            if len(letter) > 1:
                letter = input('please enter one letter between\"a\" and \"z\": ' )
            else:
                break;
        return letter

    def winning_condition(self, text):
        answer = input(text)
        if answer.lower() == 'yes' or answer.lower() == 'y':
            return Hangman()
        else:
            print('bye bye')
            return

Hangman()