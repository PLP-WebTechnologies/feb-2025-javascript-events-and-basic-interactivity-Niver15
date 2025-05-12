// 1. Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  document.getElementById('hoverBox').addEventListener('mouseover', () => {
    document.getElementById('hoverBox').style.backgroundColor = '#cceeff';
  });
  document.getElementById('hoverBox').addEventListener('mouseout', () => {
    document.getElementById('hoverBox').style.backgroundColor = '';
  });
  
  document.getElementById('keyInput').addEventListener('keyup', (e) => {
    console.log('Key pressed:', e.key);
  });
  
  const secretBox = document.getElementById('secretBox');
  const secretMsg = document.getElementById('secretMsg');
  
  // Double-click
  secretBox.addEventListener('dblclick', () => {
    secretMsg.style.display = 'block';
  });
  
  // Long-press
  let pressTimer;
  secretBox.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
      secretMsg.style.display = 'block';
    }, 1000);
  });
  secretBox.addEventListener('mouseup', () => clearTimeout(pressTimer));
  
  // 2. Interactive Elements
  document.getElementById('changeTextBtn').addEventListener('click', () => {
    const text = document.getElementById('changeableText');
    text.textContent = 'Text has been changed!';
    text.style.color = 'green';
  });
  
  // Slideshow
  let imageIndex = 1;
  const galleryImg = document.getElementById('galleryImg');
  function nextImage() {
    imageIndex = (imageIndex % 3) + 1; // cycle 1-3
    galleryImg.src = https://via.placeholder.com/200x150?text=Image+${imageIndex};
  }
  
  // Tabs
  function toggleTab(tabId) {
    document.querySelectorAll('.tabContent').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
  }
  
  // 3. Form Validation
  const form = document.getElementById('myForm');
  const passwordHint = document.getElementById('passwordHint');
  
  document.getElementById('password').addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.length < 8) {
      passwordHint.textContent = 'Password too short (min 8 characters)';
      passwordHint.style.color = 'red';
    } else {
      passwordHint.textContent = 'Password strength OK';
      passwordHint.style.color = 'green';
    }
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
  
    if (!name || !email || !password) {
      alert('Please fill out all required fields.');
      return;
    }
  
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email.');
      return;
    }
  
    if (password.length < 8) {
      alert('Password must be at least 8 characters.');
      return;
    }
  
    alert('Form submitted successfully!');
  });