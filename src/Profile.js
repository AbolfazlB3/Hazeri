
import CommandList from './CommandList.js'
import { getList } from './Routes.js';

class Profile {

  id
  name
  cmdlist

  constructor(id = 0, name = "New Profile", cmdlist = null) {
    this.setID(id)
    this.name = name
    if(!cmdlist)
      cmdlist = new CommandList()
    this.cmdlist = cmdlist
  }

  setID(id) {
    this.id = id
  }

  activate() {
    var list = getList()
    if(list.hasChildNodes)
      list.insertBefore(this.cmdlist.e, list.firstChild);
    else
      list.append(this.cmdlist.e);
  }

  unactivate() {
    this.cmdlist.e.remove()
  }

}

export default Profile




