import {addStyleSheet} from '../util.js';

(function() {
  var thisScript = document.currentScript;

  class List extends HTMLElement {
    constructor() {
      super();
      this._init();
    }

    _init() {
      addStyleSheet(this, '../components/list/list.css'); //id, url
    }
  }
  
  customElements.define('a-list', List);
})();