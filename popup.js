


// var btn = document.getElementById('send_btn');

// btn.addEventListener("click", function () {
//   console.log('hello332');
//   chrome.tabs.executeScript({
//     code: `
//       var cn = 'btn btn-flat icon-button'
//       var cmd = document.getElementsByClassName('chat')[0].getElementsByClassName('commands-box')[0].children[2]
//       var msg = 'this is a test ' + Math.random()

//       var txtbox = cmd.children[0]
//       var btn = cmd.children[2].children[0]

//       txtbox.innerHTML = msg;
//       btn.click();

//       //console.log(txtbox);
//       //console.log(btn)
//     `
//   });
// });

document.getElementById("new_row").onclick = function addNewRow() {
  console.log(":)))) ");
  var element = document.getElementById("main_form");
  var id = Math.floor(Math.random() * 1000000);

  var str = `
    <div id="row${id}" class="">
      <input type="checkbox" title="اگه میخوای کار کنه تیکش رو بزن"/>
      <input class="message-text" placeholder="متن رو اینجا بزار"/>
      <input type="time" min="00:00" max="23:59" value="08:05" required/>
      <button class="delbtn"> حذف </button>
    </div>
  `;
  var obj = new DOMParser().parseFromString(str, "text/html").getElementById(`row${id}`);
  var delbtn = obj.getElementsByClassName('delbtn')[0]
  element.append(obj);
  delbtn.addEventListener("click", () => obj.remove())
}


function delete_element(e) {
  e.remove();
  // Further work with element ...
}


// $(document).ready(function(){
//   $("#button-0").click(function(){
//     $("input").remove(".message-text");
//   });
// });    