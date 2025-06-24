const imageUrls = [
  "https://picsum.photos/id/1015/400/300",
  "https://picsum.photos/id/1016/400/300",
  "https://picsum.photos/id/1020/400/300",
  "https://picsum.photos/id/1024/400/300",
  "https://picsum.photos/id/1027/400/300",
  "https://picsum.photos/id/1035/400/300"
];

const gallery = document.getElementById("gallery");

imageUrls.forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  gallery.appendChild(img);
});
