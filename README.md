# Africa Gaming Central Site

This is the home of Africa Gaming Central's website. 

## Tech Stack
- Flask
- Python 2.7
- Bootstrap 4

## Installation Instructions
- `$ git clone https://github.com/djbotha/agc-site.git`
- `$ cd agc-site`
- `$ virtualenv env`
- `$ source env/bin/activate` (your prompt should show `(env)` now)
- `$ pip install flask`
- `$ export FLASK_APP=app.py && export FLASK_ENV=development`
- `$ flask run`

To install any aditional packages (like mysql, WTForms, or whatever your heart desires), make sure you are in your env (`(env)` on your prompt) and run `pip install <packagename>`.
