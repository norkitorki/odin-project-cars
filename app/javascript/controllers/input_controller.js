import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="input"
export default class extends Controller {
  static targets = [ "field", "addLink" ]

  connect() {
    this.addLinkTarget.hidden = false;
  }

  add(event) {
    event.preventDefault();
    let newIndex = this.fieldTargets.length;
    let lastField = this.fieldTargets[newIndex - 1];
    let newField = lastField.cloneNode(true);

    newField.innerHTML = newField.innerHTML
      .replaceAll(`_attributes_${newIndex - 1}_`, `_attributes_${newIndex}_`)
      .replaceAll(`_attributes][${newIndex - 1}]`, `_attributes][${newIndex}]`);
    // newField.querySelector('input').value = "";
    lastField.after(newField);
  }
}
