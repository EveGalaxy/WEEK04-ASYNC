// ข้อ 2.1
function displayMax() {
    // hint: ทำการเรียก function findMax ส่งตัวเลขตัวที่ 1 ไปที่ num1 และ ตัวเลขตัวที่ 2 ไปที่ num2 
    // และส่ง display เป็น callback function เพื่อแสดงผล
    let num1 = document.getElementById('max1').value;
    let num2 = document.getElementById('max2').value;
    const display = (num) => { document.getElementById("test1").innerHTML = "1. ค่าสูงสุดที่ได้คือ : " + num, document.getElementById("test2").innerHTML = "2. The Maximum Value is : " + num }
    findMax(num1, num2, display)
}
function findMax(num1, num2, display) {

    return display(Math.max(num1, num2));

}
// ข้อ 2.2
function start() {
    // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()
    setTimeout(function timeout() {
        document.getElementById("start").innerHTML = "Program started"
        setTimeout(function timeout() {
            document.getElementById("process").innerHTML = "Hello World"
            setTimeout(function timeout() {
                document.getElementById("end").innerHTML = "Program ended"
            }, 3000);
        }, 2000); 
    }, 0);
}

// ข้อ 2.3

let myVar = setInterval(myTime, 1000)
function myTime() {
    const d = new Date();
    document.getElementById("myTime").innerHTML = d.toLocaleTimeString();
}
function mytimeStop() {
    clearInterval(myVar)
}

// ข้อ 2.4
function getDogDemo(url) {
    // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
    // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร

}

// ข้อ 2.5
function getMedium(url) {
    // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://v1.nocodeapi.com/jacktnp/medium/xvYwlRhrjtVLsWUn
    // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร
   
}

// ข้อ extra
function stopTime() {
    
}

// ฟังก์ชันเรียก API
function getAPI(url, success, error) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.response);
            success(res);
        } else if (this.readyState == 4) {
            const res = JSON.parse(this.response);
            error(res);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.send();
}