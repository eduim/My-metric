const BASE_URL = "http://localhost:8080";

const serverAPI = {
  async getMetrics() {
    const response = await fetch(`${BASE_URL}/metrics`);
    const data = await response.json();
    return data;
  },

  async pushMetrics(name) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    };
    const response = await fetch(`${BASE_URL}/metrics`, options);
    const data = await response.json();
    return data;
  },

  async getMetric(id) {
    const response = await fetch(`${BASE_URL}/metrics/${id}`);
    const data = await response.json();
    return data;
  },
};

export default serverAPI;
