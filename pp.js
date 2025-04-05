function register(event) {
    event.preventDefault(); 

    let newUsername = document.getElementById("newUsername").value;
    let newEmail = document.getElementById("newEmail").value;
    let newPassword = document.getElementById("newPassword").value;
    let newconfirm_password = document.getElementById("newconfirm_password").value;

    if (!newUsername || !newEmail || !newPassword || !newconfirm_password) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง!");
        return;
    }

    if (localStorage.getItem(newUsername)) {
        alert("ชื่อผู้ใช้นี้ถูกใช้แล้ว!");
        return;
    }

    if (newPassword !== newconfirm_password) {
        alert("รหัสผ่านไม่ตรงกัน! กรุณาลองใหม่");
        return;
    }

    let userData = {
        username: newUsername,
        email: newEmail,
        password: newPassword
    };

    localStorage.setItem(newUsername, JSON.stringify(userData));

    alert("สมัครสมาชิกสำเร็จ! ไปที่หน้าเข้าสู่ระบบ");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
}


function login(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!username || !password) {
        alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน!");
        return;
    }

    let savedPassword = localStorage.getItem(username);

    if (!savedPassword) {
        alert("ไม่พบชื่อผู้ใช้นี้! กรุณาสมัครสมาชิกก่อน");
        return;
    }

    if (savedPassword === password) {
        alert("เข้าสู่ระบบสำเร็จ!");
        window.location.href = "menu.html"; 
    } else {
        alert("รหัสผ่านไม่ถูกต้อง! กรุณาลองอีกครั้ง");
    }
}

function placeOrder() {
    const orderItems = menuItems.filter(item => item.quantity > 0);

    if (orderItems.length === 0) {
        alert("กรุณาเลือกสินค้าอย่างน้อย 1 รายการ");
        return;
    }

    localStorage.setItem("currentOrder", JSON.stringify(orderItems));

    alert("ทำการสั่งอาหารเรียบร้อย! กำลังไปยังหน้าสรุปรายการ...");

    setTimeout(() => {
        window.location.href = "review.html";
    }, 1500);
}
