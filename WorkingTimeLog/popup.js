// popup.html 에서 동작
let toggleBtn = document.getElementById("toggle");
toggleBtn.addEventListener('click', function() {
    if (toggleBtn.textContent == 'Stop Logging') {
        alert('작업시간 기록을 중지합니다.');
        document.getElementById("toggle").innerText = 'Start Logging';
    } else {
        alert('작업시간 기록을 시작합니다.');
        document.getElementById("toggle").innerText = 'Stop Logging';
    }
});