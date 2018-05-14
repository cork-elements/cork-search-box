import {html} from "@polymer/polymer"

export default html`
<style>
  :host {
    display: block;
    border-radius: 6px;
  }

  #root {
    display: flex;
    align-items: center;
  }

  input {
    flex: 1;
    height: 43px;
    font-size: 18px;
    border: none;
    border-radius: 6px 0 0 6px;
    background: white;
    outline: none; 
    padding: 0 0 0 13px;
    margin:0;
  }

  input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-style: italic;
  }
  input::-moz-placeholder { /* Firefox 19+ */
    font-style: italic;
  }
  input:-ms-input-placeholder { /* IE 10+ */
    font-style: italic;
  }
  input:-moz-placeholder { /* Firefox 18- */
    font-style: italic;
  }
  input::placeholder {
    font-style: italic;
  }

  #clear {
    background: white;
    width: 35px;
    height: 43px;
    text-align: center;
    cursor: pointer;
  }

  iron-icon[icon="clear"] {
    margin-top: 9px;
  }

  paper-button {
    padding: 9.5px 0px;
    min-width: 43px;
    background-color: var(--cork-search-box-btn-color, #ccc);
    border-radius: 0 6px 6px 0;
    margin: 0px;
    @apply --cork-search-box-btn;
  }

  [hidden] {
    display: none;
  }
</style>

<div id="root">
  <input 
    id="input" 
    type="text" 
    on-keyup="_onKeyUp" 
    on-change="_onChange" 
    autocomplete="off"
    placeholder$="[[placeholder]]"/>
  
    <span id="clear">
    <iron-icon icon="clear" hidden="[[!showClear]]" on-click="clear"></iron-icon>
  </span>
  
  <paper-button>
    <iron-icon icon="search" on-click="_fireSearch"></iron-icon>
  </paper-button>
</div>
`;