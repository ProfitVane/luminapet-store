const token = "eu7RWsK5FioYdoPOmn0eRG2z8svuQFWKOkewhbzF8GjeYcKoexGsAkG6uiUZ";
const url = "https://accounts.cartpanda.com/api/v1/products";

async function fetchProducts() {
    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json"
            }
        });
        const text = await response.text();
        console.log("Status:", response.status);
        console.log(text.substring(0, 500));
    } catch (e) {
        console.error(e);
    }
}

fetchProducts();
