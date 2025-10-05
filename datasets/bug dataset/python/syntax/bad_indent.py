# Syntax bug via indentation error introduced in complex function - subtle in large files
def greet(name):
    print("Hello,", name)
    if name:
      print("Welcome!")  # incorrect indent level that may be unnoticed in merges
