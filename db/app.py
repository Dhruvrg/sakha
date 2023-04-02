import pymysql
from flask import Flask, jsonify, request
from flask_cors import CORS
import pymysql
import json

app = Flask(__name__)
cors = CORS(app)

conn = pymysql.connect(host="localhost", user="root", password="", db="sakha")
print("connected succ...")


@app.route("/add-user", methods=["POST"])
def add_user():
    cred = False
    try:
        cur = conn.cursor(pymysql.cursors.DictCursor)
        raw_json = request.get_json()
        name = raw_json["name"]
        phone = raw_json["phone"]
        email = raw_json["email"]
        password = raw_json["password"]
        cur.execute(
            f"insert into users(name,phone,email,password) values ('{name}','{phone}','{email}','{password}')"
        )
        conn.commit()
        cur.execute(f"select id from users where email = '{email}'")
        records = cur.fetchall()
        id = records[0]["id"]
        cred = True
        return jsonify({"cred": cred, "id": id})
    except:
        return jsonify({"cred": cred, "msg": "Internal server error"})


@app.route("/login-user", methods=["POST"])
def login_user():
    cred = False
    try:
        cur = conn.cursor(pymysql.cursors.DictCursor)
        raw_json = request.get_json()
        email = raw_json["email"]
        phone = raw_json["phone"]
        password = raw_json["password"]
        cur.execute(
            f"select id from users where (email = '{email}' OR phone='{phone}') AND password = '{password}'"
        )
        records = cur.fetchall()
        cred = False
        id = 0
        print(records)
        if records:
            cred = True
            id = records[0]["id"]
        return jsonify({"cred": cred, "id": id})
    except:
        return jsonify({"cred": cred, "msg": "Internal server error"})


@app.route("/delete-user", methods=["DELETE"])
def delete_user():
    cred = False
    try:
        cur = conn.cursor(pymysql.cursors.DictCursor)
        raw_json = request.get_json()
        id = raw_json["id"]
        cur.execute(f"delete from users where id = '{id}'")
        conn.commit()
        cred = True
        return jsonify({"cred": cred, "id": id})
    except:
        return jsonify({"cred": cred, "msg": "Internal server error"})


@app.route("/get-travel", methods=["POST"])
def get_travel():
    cred = False
    try:
        cur = conn.cursor(pymysql.cursors.DictCursor)
        raw_json = request.get_json()
        address = raw_json["address"]
        cur.execute(f"select * from travel where source like '{address}%'")
        result = cur.fetchall()
        cred = True
        return jsonify({"cred": cred, "result": result})
    except:
        return jsonify({"cred": cred, "msg": "Internal server error"})


@app.route("/get-mytravel", methods=["POST"])
def get_mytravel():
    cred = False
    try:
        cur = conn.cursor(pymysql.cursors.DictCursor)
        raw_json = request.get_json()
        userId = raw_json["userId"]
        cur.execute(f"select * from users where id = '{userId}'")
        info = cur.fetchall()
        cur.execute(f"select * from travel where userId = '{userId}'")
        result = cur.fetchall()
        cred = True
        return jsonify({"cred": cred, "result": result, "info": info})
    except:
        return jsonify({"cred": cred, "msg": "Internal server error"})


@app.route("/contact", methods=["POST"])
def contact():
    cred = False
    try:
        cur = conn.cursor(pymysql.cursors.DictCursor)
        raw_json = request.get_json()
        id = raw_json["id"]
        cur.execute(
            f"select * from users where id = (select userId from travel where id = '{id}')"
        )
        result = cur.fetchall()
        cred = True
        return jsonify({"cred": cred, "result": result})
    except:
        return jsonify({"cred": cred, "msg": "Internal server error"})


@app.route("/delete-mytravel", methods=["DELETE"])
def delete_mytravel():
    cred = False
    try:
        cur = conn.cursor(pymysql.cursors.DictCursor)
        raw_json = request.get_json()
        id = raw_json["id"]
        print("python")
        cur.execute(f"delete from travel where id = '{id}'")
        conn.commit()
        cred = True
        return jsonify({"cred": cred})
    except:
        return jsonify({"cred": cred, "msg": "Internal server error"})


@app.route("/add-travel", methods=["POST"])
def add_travel():
    cred = False
    try:
        cur = conn.cursor(pymysql.cursors.DictCursor)
        raw_json = request.get_json()
        mode = raw_json["mode"]
        source = raw_json["source"]
        destination = raw_json["destination"]
        userId = raw_json["userId"]
        cur.execute(
            f"insert into travel(mode,source,destination,userId) values ('{mode}','{source}','{destination}','{userId}')"
        )
        conn.commit()
        cred = True
        return jsonify({"cred": cred})
    except:
        return jsonify({"cred": cred, "msg": "Internal server error"})


@app.route("/update-travel", methods=["PUT"])
def update_travel():
    cred = False
    try:
        cur = conn.cursor(pymysql.cursors.DictCursor)
        raw_json = request.get_json()
        mode = raw_json["mode"]
        source = raw_json["source"]
        destination = raw_json["destination"]
        id = raw_json["id"]
        cur.execute(
            f"UPDATE travel SET mode = '{mode}',destination = '{destination}',source = '{source}' WHERE id = '{id}'"
        )
        conn.commit()
        cred = True
        return jsonify({"cred": cred})
    except:
        return jsonify({"cred": cred, "msg": "Internal server error"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int("1000"), debug=True)
