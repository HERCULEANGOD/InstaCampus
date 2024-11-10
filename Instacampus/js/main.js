const notificationButton = document.getElementById('notification-button');
const notificationPanel = document.getElementById('notification-panel');

if (notificationButton && notificationPanel) {
  notificationButton.addEventListener('click', () => {
    notificationPanel.classList.toggle('active');
  });
}


const loginForm = document.getElementById('login-form');

if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if (username.value === '' || password.value === '') {
      alert('Please fill out all fields!');
    } else {
      alert('Login Successful! Redirecting...');
      
      setTimeout(() => {
        window.location.href = 'index.html'; 
      }, 1000);
    }
  });
}


const eventItems = document.querySelectorAll('.event');

eventItems.forEach(eventItem => {
  eventItem.addEventListener('click', () => {
    alert('You clicked on an event!');
    
  });
});


const closeNotificationButton = document.querySelector('.notification-close-button');

if (closeNotificationButton) {
  closeNotificationButton.addEventListener('click', () => {
    const notificationBox = document.querySelector('.notification');
    if (notificationBox) {
      notificationBox.style.display = 'none'; 
    }
  });
}


const scrollToTopButton = document.getElementById('scroll-to-top');

if (scrollToTopButton) {
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


const toggleNotificationPanel = () => {
  const panel = document.getElementById('notification-panel');
  if (panel) {
    panel.classList.toggle('active');
  }
};


const notificationButtonElement = document.querySelector('#notification-button');
if (notificationButtonElement) {
  notificationButtonElement.addEventListener('click', toggleNotificationPanel);
}
