
import Command from './Command.js';
import parseHtml from './DOMParser.js'

class CommandList {

  ID = 'cmdlist';

  defaultHtml = `
    <div id="${this.ID}"></div>
  `;

  constructor(list = []) {
    this.list = list
    this.cnt = list.length

    var e = this.e = parseHtml(this.defaultHtml, this.ID)

    for(const cmd of list)
      cmd.setParent(this)
  }

  addNewCommand(active = false, text = "", time="08:00") {
    var cmd = new Command(this.cnt, active, text, time, this)
    this.list.push(cmd)
    this.cnt++
  }


  removeCommand(cmd) {
    this.list = this.list.filter(c => c.e.id!==cmd.e.id)
    cmd.e.remove()
    this.resetIDs()
  }


  resetIDs() {
    this.cnt = 0;
    for(const cmd of this.list)
      cmd.setID(this.cnt++)
  }

}


export default CommandList




















