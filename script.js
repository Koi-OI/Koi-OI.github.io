document.getElementById('showTime').addEventListener('click', function() {
    document.getElementById('time').textContent = new Date().toLocaleTimeString();
});

