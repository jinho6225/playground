import random, math, re

def hangman():
	print('welcome to hangman game!\nanswer would be one of the biggest tech company\ngood luck!')
	answer = ['apple', 'microsoft', 'facebook', 'netflix', 'amazon', 'uber', 'lyft', 'twitter', 'google']
	store = []
	num = math.floor(random.random() * len(answer))
	goal = answer[num]
	chance = len(goal)
	string = '_' * len(goal)
	
	while chance > 0:
		letter = input('please enter one of alphabet between \"a\" and \"z\": ' )
		if letter.isalpha():
			if letter in store:
				idx = store.index(letter)
				letter = input(f'you already used \'{store[idx]}\'\nplease enter another alphabet: ' )
				if letter in store:
					idx = store.index(letter)
					letter = print(f'you already used \'{store[idx]}\'')
					continue;
			else:
				if letter in goal:
					store.append(letter)
		else:
			letter = input('please enter alphabet only between \"a\" and \"z\": ' )
		print(f'\nyou left {chance-1} chance')
		if not goal.find(letter.lower()) == -1:
			idx = goal.find(letter.lower())
			while idx != -1:
				string = string[0:idx] + letter.lower() + string[idx+1:]
				idx = goal.find(letter.lower(), idx+1)
			print(f'\n{string}\n')	
		else:
			print(f'\n{string}\n')	
			chance -= 1
		
		if string in answer:
			answer = input('congraturation!!\nstart again?\nplease enter \'yes\' or \'y\', otherwise enter anykey to exit here ')
			if answer.lower() == 'yes' and answer.lower() == 'y':
				return hangman()
			else:
				print('bye bye')
				return

	if chance == 0:
		answer = input('lost game\nstart again?\nplease enter \'yes\' or \'y\', otherwise enter anykey to exit here ')
		if answer == 'yes':
			return hangman()
		else:
			print('bye bye')
			return
	
hangman()