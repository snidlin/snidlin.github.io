function show(block) {

  alldivs = document.getElementsByClassName("show")

  for (let data of alldivs) {
    document.getElementById(data.id).className="noshow"
  }
    document.getElementById(block).className="show"

}


setInterval(rotateAds, 5000);
setInterval(rotateVads, 5000)
adCounter = 0;
vadCounter = 0;

function rotateVads() {
  vad1 = "fakeadv1.png";
  vad2 = "fakeadv2.png";
  vad3 = "fakeadv3.png";


    vadCounter += 1;

  if (vadCounter == 1) {
    document.getElementById("fakevad").src = vad1;
  }
  else if (vadCounter == 2) {
      document.getElementById("fakevad").src = vad2;
  }
  else if (vadCounter == 3) {
      document.getElementById("fakevad").src = vad3;
  }
  else {
    vadCounter = 1;

    document.getElementById("fakevad").src = vad1;
  }
}

function rotateAds() {
  ad1 = "fakead1.png";
  ad2 = "fakead2.png";

  adCounter += 1;
  if (adCounter <= 2) {
    document.getElementById("fakead").src = ad1;
  }
  else if (adCounter <= 4) {
      document.getElementById("fakead").src = ad2;
  }
  else {
    adCounter = 1;

    document.getElementById("fakead").src = ad1;
  }

}