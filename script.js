function sendMessage() {
    var inputElement = document.getElementById('chat-input');
    var message = inputElement.value.trim();
    if (message) {
        var chatBox = document.getElementById('chat-box');

        // 创建用户消息
        var userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'message user-message';

        var userEmoji = document.createElement('span');
        userEmoji.className = 'emoji';
        userEmoji.textContent = '😀'; // 用户头像 Emoji

        var userText = document.createElement('span');
        userText.className = 'text';
        userText.textContent = message;

        userMessageDiv.appendChild(userEmoji);
        userMessageDiv.appendChild(userText);
        chatBox.appendChild(userMessageDiv);

        // 清空输入框并滚动到底部
        inputElement.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;

        // 模拟机器人消息
        var botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'message bot-message';

        var botEmoji = document.createElement('span');
        botEmoji.className = 'emoji';
        botEmoji.textContent = '🤖'; // 机器人头像 Emoji

        var botText = document.createElement('span');
        botText.className = 'text';
        botText.textContent = 'Let me think...';

        botMessageDiv.appendChild(botEmoji);
        botMessageDiv.appendChild(botText);
        chatBox.appendChild(botMessageDiv);

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

document.getElementById('send-btn').addEventListener('click', sendMessage);

document.getElementById('chat-input').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) { // Enter key
        sendMessage();
    }
});

document.getElementById('showTime').addEventListener('click', function() {
    document.getElementById('time').textContent = new Date().toLocaleTimeString();
});
