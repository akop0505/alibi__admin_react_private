import {api} from "../services/API";
import moment from "moment";

class Event {

  name = "test name";
  description = "<div>Body description</div>";
  label = "<div>Body label</div>";
  creationDate = moment("2019-08-11").format("YYYY-MM-DD");
  headerTemplate = [];

  constructor(data = null) {
    if (data !== null) {
      this.name = data.name;
      this.description = data.description;
      this.label = data.label;
      this.creationDate = data.creationDate;
      this.headerTemplate = data.headerTemplate;
    }
  }

  getAttributes() {
    return {
      name: this.name,
      description: this.description,
      label: this.label,
      creationDate: this.creationDate,
      headerTemplate: JSON.stringify(this.headerTemplate)
    }
  }

  async getAll() {

  }

  async save() {
    const response = await api.post('/events', this.getAttributes());
    return response.data;
  }

  async edit() {

  }

  async delete(id) {

  }

}

export default Event;

export const modelEvent = new Event();