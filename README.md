# Africa Gaming Central Site

This is the home of Africa Gaming Central's website. 

## Tech Stack
- [Flask](http://flask.pocoo.org)
- Python 2.7
- [Bootstrap 4](http://getbootstrap.com)

## Installation Instructions (Unix)
- `$ git clone https://github.com/djbotha/agc-site.git`
- `$ cd agc-site`
- `$ pip install virtualenv` (if you don't have `virtualenv` on your machine yet)
- `$ virtualenv env`
- `$ source env/bin/activate` (your prompt should show `(env)` now)
- `$ pip install flask`
- `$ export FLASK_APP=app.py && export FLASK_ENV=development`
- `$ flask run`

## Installation Instructions (Windows)
- `$ git clone https://github.com/djbotha/agc-site.git`
- `$ cd agc-site`
- `$ pip install virtualenv` (if you don't have `virtualenv` on your machine yet)
- `$ virtualenv env`
- `$ env\Scripts\activate` (your prompt should show `(env)` now)
- `$ pip install flask`
- `$ set FLASK_APP=app.py && set FLASK_ENV=development`
- `$ flask run`

To install any aditional packages (like mysql, WTForms, or whatever your heart desires), make sure you are in your env (`(env)` on your prompt) and run `pip install <packagename>`.
