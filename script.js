// === LOGIN LOGIC ===
function registerUser(e) {
  e.preventDefault();
  localStorage.setItem('username', document.getElementById('newUsername').value);
  localStorage.setItem('password', document.getElementById('newPassword').value);
  alert('Registration successful! You can now log in.');
  window.location.reload();
}

function loginUser(e) {
  e.preventDefault();
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  if (u === localStorage.getItem('username') && p === localStorage.getItem('password')) {
    window.location.href = 'homepage.html';
  } else {
    alert('Invalid login details!');
  }
}

// === APARTMENT DATA ===
const apartments = {
  njukiiri: {
    name: "Njukiiri Apartments",
    rent: "Ksh 25,000 / month",
    reason: "Quiet environment near town and schools.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227"
    ]
  },
  kayole: {
    name: "Kayole Apartments",
    rent: "Ksh 18,000 / month",
    reason: "Affordable and secure, close to main road.",
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20a",
      "https://images.unsplash.com/photo-1613977257360-9143b1d54b08",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
    ]
  },
  gtown: {
    name: "G-Town Apartments",
    rent: "Ksh 22,000 / month",
    reason: "Modern design, great neighborhood.",
    images: [
      "https://images.unsplash.com/photo-1613977257360-9143b1d54b08",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    ]
  },
  kangaru: {
    name: "Kangaru Apartments",
    rent: "Ksh 27,000 / month",
    reason: "Spacious rooms, easy access to amenities.",
    images: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227"
    ]
  },
  kamiu: {
    name: "Kamiu Apartments",
    rent: "Ksh 20,000 / month",
    reason: "Ideal for small families, near transport.",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0a0021d1d347",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
    ]
  },
  embu: {
    name: "Embu Town Apartments",
    rent: "Ksh 30,000 / month",
    reason: "Luxury finish and great parking area.",
    images: [
      "https://images.unsplash.com/photo-1628744692293-43fd6b2f3b25",
      "https://images.unsplash.com/photo-1613977257360-9143b1d54b08",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    ]
  }
};

// === CARD GENERATION ===
window.onload = () => {
  const container = document.getElementById('apartments');
  if (container) {
    Object.keys(apartments).forEach(key => {
      const apt = apartments[key];
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<img src="${apt.images[0]}" alt="${apt.name}"><h3>${apt.name}</h3>`;
      card.onclick = () => openModal(key);
      container.appendChild(card);
    });
  }
};

// === MODAL SLIDES ===
let currentApartment = null;
let currentIndex = 0;

function openModal(key) {
  currentApartment = apartments[key];
  currentIndex = 0;
  document.getElementById('imageModal').style.display = 'block';
  showSlide();
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

function showSlide() {
  const apt = currentApartment;
  document.getElementById('modalImg').src = apt.images[currentIndex];
  document.getElementById('aptName').innerText = apt.name;
  document.getElementById('aptRent').innerText = apt.rent;
  document.getElementById('aptReason').innerText = apt.reason;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % currentApartment.images.length;
  showSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + currentApartment.images.length) % currentApartment.images.length;
  showSlide();
}
// === LOGOUT FUNCTIONALITY ===
function logout() {
  window.location.href = 'login.html';
}