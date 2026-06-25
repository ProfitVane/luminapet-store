import requests
import json

url = "https://luminapet.mycartpanda.com/api/v1/products"
headers = {
    "Authorization": "Bearer eu7RWsK5FioYdoPOmn0eRG2z8svuQFWKOkewhbzF8GjeYcKoexGsAkG6uiUZ",
    "Accept": "application/json"
}

response = requests.get(url, headers=headers)
print("Status Code:", response.status_code)
try:
    print(json.dumps(response.json(), indent=2))
except Exception as e:
    print("Response text:", response.text)
