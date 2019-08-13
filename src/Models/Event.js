import {api} from "../services/API";

class Event {

  name = "Anun";
  description = "Nkaragrutyun";
  label = "Label";
  creationDate = "2019-08-11T11:13:13.452Z";
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

  async getAll() {

  }

  async save() {
    const response = await api.post('/api/Events');
    console.log(response.data);
  }

  async edit() {

  }

  async delete(id) {

  }

}

export default Event;

export const modelEvent = new Event();