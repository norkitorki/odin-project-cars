import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="input"
export default class extends Controller {
  static classes = [ "field" ]

  connect() {
    this.element.hidden = false;
  }

  fields() {
    if (this.hasFieldClass) {
      return document.querySelectorAll(`.${this.fieldClass}`)
    } else {
      console.log("Please provide a data-input-field-class to the controller element.")
    }
  }

  add(event) {
    event.preventDefault();

    let fields = this.fields();
    let newIndex = fields.length;
    let lastField = fields[newIndex - 1];
    let newField = lastField.cloneNode(true);

    newField.innerHTML = newField.innerHTML
      .replaceAll(`_attributes_${newIndex - 1}_`, `_attributes_${newIndex}_`)
      .replaceAll(`_attributes][${newIndex - 1}]`, `_attributes][${newIndex}]`);
    newField.querySelector('input').value = "";
    lastField.after(newField);
  }

  remove(event) {
    event.preventDefault();

    let fields = this.fields();
    let fieldCount = fields.length;
    if (fieldCount > 1) { fields[fieldCount - 1].remove(); }
  }
}
