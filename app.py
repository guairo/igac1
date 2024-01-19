from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/backend', methods=['GET'])
def get_backend_data():
    divipola = request.args.get('divipola')
    
    response = requests.get(f'https://services2.arcgis.com/RVvWzU3lgJISqdke/arcgis/rest/services/clasificacionsuelopot/FeatureServer/0/query?where=MpCodigo={divipola}&outFields=*&f=json')
    data = response.json()
    
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
