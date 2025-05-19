const imageInput = document.getElementById('imageInput');
const uploadBtn = document.getElementById('uploadBtn');
const uploadArea = document.getElementById('uploadArea');
const gallery = document.getElementById('gallery');

// Handle file input manually
uploadBtn.addEventListener('click', () => imageInput.click());

imageInput.addEventListener('change', () => handleFiles(imageInput.files));

// Handle drag and drop
uploadArea.addEventListener('dragover', e => {
  e.preventDefault();
  uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', e => {
  e.preventDefault();
  uploadArea.classList.remove('dragover');
  const files = e.dataTransfer.files;
  handleFiles(files);
});

function handleFiles(files) {
  [...files].forEach(file => {
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = e => {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = file.name;

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = '×';
      deleteBtn.onclick = () => card.remove();

      card.appendChild(img);
      card.appendChild(deleteBtn);
      gallery.appendChild(card);
    };
    reader.readAsDataURL(file);
  });
}
