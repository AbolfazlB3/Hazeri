
import parseHtml from './DOMParser.js'

class CommandList {

  ID = 'cmdlist';

  defaultHtml = `
    <div id="${this.ID}"></div>
  `;

  constructor(id = 0, list = []) {
    this.list = list
    this.cnt = list.length
  
    var e = this.e = parseHtml(this.defaultHtml, this.ID);
    e.id = this.ID + "_" + id
    
    console.log(this.e.id)

    for(var cmd of list)
      cmd.setParent(this)

  }

}


export default CommandList




















