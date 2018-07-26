from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
	return render_template('index.html')


@app.route('/roles')
def roles():
	return render_template('roles.html')


@app.route('/stats')
def stats():
	return render_template('stats.html')


@app.route('/contact')
def contact():
	return render_template('contact.html')
