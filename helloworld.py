#import flask
from flask import Flask, render_template

#initialise the app
app = Flask(__name__)

#define a Python function that returns helloworld on the root URL

@app.route('/')
def hello_world():
    return "Hello World from Flask!"

@app.route('/about-us')
def about_us():
    return "We are humans"

@app.route("/hello2/<string:myname>")
def hello2(my_name):
    return render_template('hello.html', person_to_greet=my_name) 
 
@app.route("/hello3/<string:my_name>") 
def hello3(my_name): 
   return render_template('hello-with-layout.html', person_to_greet=my_name) 

if __name__ == "__main__":
    app.run()