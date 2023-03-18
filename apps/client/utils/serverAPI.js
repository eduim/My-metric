const BASE_URL = "http://localhost:8080";

const serverAPI = {
  async getMetrics() {
    const response = await fetch(`${BASE_URL}/metrics`);
    return await response.json();
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
    return await response.json();
  },

  async getMetric(id) {
    const response = await fetch(`${BASE_URL}/metrics/${id}`);
    return await response.json();
  },

  async updateMetric(id) {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${BASE_URL}/metrics/${id}`, options);
    return await response.json();
  },
};

export default serverAPI;
