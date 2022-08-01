from random import randint

class Test:
  
  def __init__(self, no_mult, no_div, bound_lower, bound_upper):
    '''
      Initialize the Test object. no_mult and no_div refer to how many questions of multicplication and division there is respectively.
    '''
    self.questions = []
    self.no_mult = no_mult
    self.no_div = no_div
    self.bound_lower = bound_lower
    self.bound_upper = bound_upper
    self.no_total = no_mult + no_div
    self.score = -1
    self.grade = -1

    self.__initQuestions()

  def __initQuestions(self):
    '''
      Generaters x no. of multiplication questions and y no. of division questions.
      x and y correspond to initial values no_mult and no_div respectively.
    '''
    id = 0

    # Generate mult questions
    for i in range(self.no_mult):
      id += 1
      a = randint(self.bound_lower, self.bound_upper)
      b = randint(self.bound_lower, self.bound_upper)
      answer = a * b

      q = Question(id, a, b, "mult", answer)
      self.questions.append(q)

    # Generate div questions
    for i in range(self.no_mult):
      id += 1
      b = randint(self.bound_lower, self.bound_upper)
      a = b * randint(self.bound_lower, self.bound_upper) # ensures only whole numbers questions
      answer = a / b

      q = Question(id, a, b, "div", answer)
      self.questions.append(q)

  def get_score(self):
    score = 0
    for q in self.questions:
      if(q.mark == 1):
        score += 1

    self.score = score
    return score

  def get_grade(self):
    total = self.no_total
    score = self.score

    if( (score/total) >= .98 ):
      self.grade = "A*"
    elif( (score/total) >= .90 ):
      self.grade = "A"
    elif( (score/total) >= .80 ):
      self.grade = "B"
    elif( (score/total) >= .70 ):
      self.grade = "C"
    elif( (score/total) >= .60 ):
      self.grade = "D"
    elif( (score/total) >= .50 ):
      self.grade = "E"
    elif( (score/total) <= .40 ):
      self.grade = "F"

    return self.grade

  def jsonify(self):
    
    # instansiate test dictionary
    test = {
      "questions": [],
      "no_mult" : self.no_mult,
      "no_div" : self.no_div,
      "no_total" : self.no_total
    }

    # fill questions array
    for q in self.questions:
      q_json = q.jsonify()
      test["questions"].append(q_json)

    return test

class Question:
  
  def __init__(self, id, a , b, operator, answer):
    '''
      Initialize the Question object.
      a refers to the first term in the question (e.g 3 * 7, a = 3)
      b refers to the second term in the question (e.g 3 * 7, b = 7)
      operator refers to either division or multiplication (values are mult or div)
      answer refers to the answer to the equestion (e.g 3 * 7 = 21, answer = 21)
    '''
    self.id = id
    self.a = int(a)
    self.b = int(b)
    self.operator = operator
    self.answer = int(answer)
    self.mark = -1

  def markQuestion(self, user_answer):
    '''
      Checks if user_answer == self.answer. If true then set marked to correct int(1).
      All other answers result in erroneous mark int(0)
    '''
    if( int(user_answer) == self.answer):
      self.mark = 1
      return

    self.mark = 0
    return

  def get_mark(self):
    '''
      Returns a boolean value based on class property marked. 
      edge-case marking (such as question unmarked [neither true nor false]) return a -1 value
    '''
    if(self.mark == 1):
      return True
    elif( self.mark == 0):
      return False
    return -1

  def jsonify(self):
    question = {
      "id" : self.id,
      "a" : self.a,
      "b" : self.b,
      "operator": self.operator,
      "answer": self.answer,
      "mark": self.mark
    }

    return question