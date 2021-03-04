
export default function parseHtml(str, id = null) {
  var doc = new DOMParser().parseFromString(str, "text/html");
  if(id) return doc.getElementById(id);
  return doc
}













