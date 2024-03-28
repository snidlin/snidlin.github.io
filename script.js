function show(block) {

  alldivs = document.getElementsByClassName("show")

  for (let data of alldivs) {
    document.getElementById(data.id).className="noshow"
  }
    document.getElementById(block).className="show"

}
