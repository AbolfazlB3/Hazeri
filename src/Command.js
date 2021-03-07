
import parseHtml from './DOMParser.js'

class Command {

  ID = 'cmdrow';

  defaultHtml = `
    <div id="${this.ID}">
      <input class="cmd_checkbox" type="checkbox" title="اگه میخوای کار کنه تیکش رو بزن"/>
      <input class="cmd_input" placeholder="متن رو اینجا بزار"/>
      <input class="cmd_time" type="time" min="00:00" max="23:59" value="08:00" required/>
      <button class="cmd_remove"> حذف </button>
    </div>
  `;

  constructor(id = 0, active = true, text = "", time="08:00", par = null) {

    //var e = this.e = new DOMParser().parseFromString(this.defaultHtml, "text/html").getElementById(this.ID);
    var e = this.e = parseHtml(this.defaultHtml, this.ID);
    this.setID(id);

    var checkbox =  this.checkbox =  e.getElementsByClassName('cmd_checkbox')[0]
    var txtbox =    this.txtbox =    e.getElementsByClassName('cmd_input')[0]
    var time =      this.time =      e.getElementsByClassName('cmd_time')[0]
    var rembtn =    this.rembtn =    e.getElementsByClassName('cmd_remove')[0]

    console.log(time.value)

    rembtn.addEventListener("click", () => this.remove())



    
    if(par) this.setParent(par)
    
  }

  setID(id) {
    this.e.id = this.ID + "_" + id
  }


  /// par is instance of CommandList
  setParent(par) {
    par.e.append(this.e)
    this.par = par
    console.log(this.par)
  }


  remove() {
    console.log(this.par)
    this.par.removeCommand(this);
  }

}


export default Command








