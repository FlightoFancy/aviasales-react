import axios from "axios";

export default class AviaService {
  static async getTickets() {
    const searchID = await axios.get(
      "https://front-test.dev.aviasales.ru/search"
    );
    const response = await axios.get(
      `https://front-test.dev.aviasales.ru/tickets?searchId=${searchID.data.searchId}`
    );
    return response;
  }
}
