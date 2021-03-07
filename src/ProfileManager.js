
import Command from './Command.js';
import parseHtml from './DOMParser.js';
import Profile from './Profile.js';
import { getList } from './Routes.js';

class ProfileManager {

  ID = 'profilelist';
  activeProfile = null

  defaultHtml = `
    <div id="${this.ID}"></div>
  `;

  constructor(list = []) {
    this.list = list
    this.cnt = list.length

    var e = this.e = parseHtml(this.defaultHtml, this.ID)
  }

  addNewProfile(name = "New Profile") {
    var prof = new Profile(this.cnt, name)
    this.list.push(prof)
    this.cnt++
  }


  removeProfile(prof) {
    this.list = this.list.filter(c => c.id!==prof.id)
    this.resetIDs()
  }


  resetIDs() {
    this.cnt = 0;
    for(const prof of this.list)
      prof.setID(this.cnt++)
  }


  setActiveProfile(prof = null) {
    if(this.activeProfile)
      this.activeProfile.unactivate()
    this.activeProfile = prof
    if(prof)
      this.activeProfile.activate()
  }

  addNewCommand(active = false, text = "", time="08:00") {
    this.activeProfile.cmdlist.addNewCommand(active, text, time)
  }

}


export default ProfileManager










