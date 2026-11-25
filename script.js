// Hiển thị thông báo khi nhấn nút (nếu có dùng)
function showMessage() {
    alert("Chào bạn! Cảm ơn đã ghé thăm website của mình 🎉");
}

// Xử lý khi gửi form (nếu có dùng)
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

// Hàm ẩn/hiện Phân công nhiệm vụ
function toggleExtra() {
    const content = document.getElementById('extra-content');
    const icon = document.getElementById('icon-nhiem-vu');
    const btn = document.getElementById('btn-nhiem-vu');
    
    // Nếu đang đóng (max-height = 0) thì mở ra
    if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
        content.style.maxHeight = '3000px'; // Đủ lớn để chứa nội dung
        content.style.padding = '30px';     // Thêm padding khi mở
        icon.style.transform = 'rotate(180deg)'; // Xoay mũi tên lên
        btn.innerHTML = '<i class="fa-solid fa-list-check"></i> Thu gọn phân công <i id="icon-nhiem-vu" class="fa-solid fa-chevron-down" style="font-size: 14px; transition: transform 0.3s; transform: rotate(180deg);"></i>';
    } 
    // Nếu đang mở thì đóng lại
    else {
        content.style.maxHeight = '0px';
        content.style.padding = '0 30px'; // Trả lại padding ban đầu
        icon.style.transform = 'rotate(0deg)'; // Xoay mũi tên xuống
        btn.innerHTML = '<i class="fa-solid fa-list-check"></i> Xem Phân Công Nhiệm Vụ Các Tổ <i id="icon-nhiem-vu" class="fa-solid fa-chevron-down" style="font-size: 14px; transition: transform 0.3s;"></i>';
    }
}