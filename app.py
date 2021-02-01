from flask import Flask, jsonify, Response,render_template
from flask_cors import CORS, cross_origin
import os
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func


app = Flask(__name__)
CORS(app, support_credentials=True)

# database=os.environ.get("DATABASE_URL",'')

# #create engine 
# engine = create_engine(f'{database}')
# #print(engine.table_names())
# #Reflect database into ORM class
# Base = automap_base()
# Base.prepare(engine, reflect=True)
# Stats=Base.classes.cancer_data

# session = Session(engine)

#create routes
@app.route("/")
def index():
    return render_template("landing.html")

@app.route("/visualizations")
def visualizations():
    return render_template("visualizations.html")

@app.route("/correlation")
def correlation():
    return render_template("correlation.html")

@app.route("/conclusion")
def conclusion():
    return render_template("conclusion.html")

@app.route("/knn_scaled")
def knn_scaled():
    return render_template("knn_scaled.html")

@app.route("/knn_unscaled")
def knn_unscaled():
    return render_template("knn_unscaled.html")

@app.route("/tree_all")
def tree_all():
    return render_template("/tree_all.html")

@app.route("/tree_mean")
def tree_mean():
    return render_template("tree_mean.html")


@app.route("/data")
def table():
    return render_template("data.html")

# @app.route("/data.json")
# def data():
#     stmt=session.query(Stats).statement
#     df=pd.read_sql_query(stmt,session.bind)
#     return Response(df.to_json(orient="records"), mimetype='application/json')



if __name__ == "__main__":
    app.run(debug=True)
