chrome.runtime.onInstalled.addListener(function() {
    console.log('작업시간 기록 프로그램');
    const start = new Date();
    chrome.storage.sync.set({start: start.getTime(), total: 0, work: 0, etc: 0}, function() {
        console.log("작업시간 기록 시작");
    });
});