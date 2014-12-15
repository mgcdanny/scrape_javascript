from flask import Flask
app = Flask(__name__)

@app.route('/')
def root():
	return app.send_static_file('not_javascript.html')

@app.route('/spa')
def spa():
	return app.send_static_file('partial/index.html')


if __name__ == "__main__":
    app.run(debug=True)