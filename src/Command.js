
import './DOMParser.js'

class Command {

  ID = 'cmdrow';

  defaultHtml = `
    <div id="${this.ID}">
      <input name="checkbox" type="checkbox" title="اگه میخوای کار کنه تیکش رو بزن"/>
      <input name="input" class="message-text" placeholder="متن رو اینجا بزار"/>
      <input name="time" type="time" min="00:00" max="23:59" value="08:00" required/>
      <button name="remove" class="delbtn"> حذف </button>
    </div>
  `;

  constructor(id = 0, active = true, text = "", time="08:00", par = null) {

    //var e = this.e = new DOMParser().parseFromString(this.defaultHtml, "text/html").getElementById(this.ID);
    var e = this.e = parseHtml(this.defaultHtml, this.ID);
    e.id = this.ID + "_" + id

    var checkbox =  this.checkbox =  e.getElementsByName('checkbox')[0]
    var txtbox =    this.txtbox =    e.getElementsByName('input')[0]
    var time =      this.time =      e.getElementsByName('time')[0]
    var rembtn =    this.rembtn =    e.getElementsByName('remove')[0]

    console.log(time.value)

    rembtn.addEventListener("click", this.remove)



    
    if(par) this.setParent(par)
    
  }


  remove() {
    this.e.remove()
  }


  /// par is instance of CommandList
  setParent(par) {
    par.e.append(this.e)
    this.par = par
  }

}


export default Command








