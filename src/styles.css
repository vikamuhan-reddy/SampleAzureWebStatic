const imageInput = document.getElementById('imageInput');
const gallery = document.getElementById('gallery');

imageInput.addEventListener('change', function () {
  const files = Array.from(this.files);

  files.forEach(file => {
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = file.name;

      card.appendChild(img);
      gallery.appendChild(card);
    };
    reader.readAsDataURL(file);
  });
});
