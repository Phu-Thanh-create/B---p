// Hiển thị thông báo khi nhấn nút
function showMessage() {
    alert("Chào bạn! Cảm ơn đã ghé thăm website của mình 🎉");
}

// Xử lý khi gửi form
function submitForm(event) {
    event.preventDefault();
    alert("Cảm ơn bạn đã gửi tin nhắn! Mình sẽ phản hồi sớm nhất.");
    event.target.reset();
}

// Cuộn mượt khi click menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});