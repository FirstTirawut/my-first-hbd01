// เพิ่มลูกโป่ง
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // สุ่มสีลูกโป่ง
    const colors = ['#ff6b81', '#ff7eb3', '#ff9f43', '#1abc9c', '#6c5ce7'];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
    // สุ่มตำแหน่งลูกโป่ง
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = Math.random() * 2 + 3 + 's';
  
    document.getElementById('balloon-container').appendChild(balloon);
  
    // ลบลูกโป่งเมื่อออกจอ
    balloon.addEventListener('animationend', () => {
      balloon.remove();
    });
  }
  
  // เรียกใช้ลูกโป่งเมื่อกดปุ่ม
  document.getElementById('surpriseBtn').addEventListener('click', () => {
    document.getElementById('message').innerText = 'ขอให้ความสุขที่เธอเคยมอบให้เค้าและคนอื่นๆ นั้นย้อนกลับมาหาเธอนะ! 🎂';
  
    // สร้างลูกโป่งเรื่อยๆ
    setInterval(createBalloon, 300);
  });
  