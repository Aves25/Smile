function showImage() {
  const imgDiv = document.getElementById("hidden-image");

  if (imgDiv.style.display === "none" || imgDiv.style.display === "") {
    imgDiv.style.display = "block";
  } else {
    imgDiv.style.display = "none";
  }
}



