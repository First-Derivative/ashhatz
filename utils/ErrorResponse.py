class ErrorResponse():

  def __init__(self, message, status=400):
    if( ( not isinstance(status, int) ) or ( status < 100 or status > 599 ) ):
      raise TypeError('Status must be an integer between 100-599')
    if( ( not isinstance(message, str) ) or (message == '') ):
      raise ValueError('Message must be a non empty string')
    self.status = status
    self.message = { 'error' : message }

  # override dunder for ['key'] dict operator
  def __getitem__(self, key):
    if( key.lower() == 'message' ):
      return { 'error': self.message }
    elif( key.lower() == 'status'):
      return self.status
    else:
      raise Exception("ErrorResponse has no attribute {key}".format(key=key))