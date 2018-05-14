import {PolymerElement} from "@polymer/polymer/polymer-element"
import template from "./cork-toggle-panel.html.js"


export class CorkSearchBox extends PolymerElement {
  
  static get template() { 
    return template; 
  }

  static get properties() {
    return {
      showClear: {
        type: Boolean,
        value: false
      },
      placeholder : {
        type : String,
        value : ''
      }
    };
  }

  get value() {
    return this.$.input.value;
  }

  set value(value) {
    this.$.input.value = value;
    this.showClear = (value) ? true : false;
  }

  clear() {
    this.$.input.value = '';
    this.showClear = false;
    this.dispatchEvent(new CustomEvent('clear', {}));
  }

  _onChange() {
    this.showClear = (this.$.input.value) ? true : false;
  }

  _onKeyUp(e) {
    if( e.which === 13 ) this._fireSearch();
    else this._onChange();
  }

  _fireSearch() {
    this.dispatchEvent(new CustomEvent('search', {detail: {value: this.value}}));
  }

}

customElements.define('cork-search-box', CorkSearchBox);