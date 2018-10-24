// popup.html 에서 동작
let toggleBtn = document.getElementById("toggle");
toggleBtn.onclick = function(element) {
    // console.log(element);
    // alert('기록을 중지합니다.');

    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        console.log(element);
        alert('기록을 중지합니다.');
    });
};