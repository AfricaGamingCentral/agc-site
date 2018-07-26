from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
	return render_template('index.html')


@app.route('/templates/roles.html')
def roles():
	return render_template('roles.html')


@app.route('/templates/stats.html')
def stats():
	return render_template('stats.html')


@app.route('/templates/contact.html')
def contact():
	return render_template('contact.html')
