import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="input"
export default class extends Controller {
  static targets = [ "field", "addLink" ]

  connect() {
    this.addLinkTarget.hidden = false;
  }

  add() {
    let newIndex = this.fieldTargets.length;
    let lastField = this.fieldTargets[newIndex - 1];
    let newField = lastField.cloneNode(true);

    newField.innerHTML = newField.innerHTML.replaceAll(newIndex - 1, newIndex);
    // newField.querySelector('input').value = "";
    lastField.after(newField);
  }
}
