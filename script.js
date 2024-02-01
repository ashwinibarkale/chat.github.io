function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const chatContainer = document.getElementById('chatContainer');

    if (messageInput.value.trim() !== '') {
        const message = document.createElement('div');
        const isUserA = chatContainer.children.length % 2 === 0;
        message.className = `message ${isUserA ? 'userA' : 'userB'}`;
        message.innerHTML = `
            <img src="${isUserA ? 'A.png' : 'B.png'}" alt="${isUserA ? 'User A' : 'User B'}" class="user-profile">
            <div class="message-content">
                <span class="username">${isUserA ? 'Ashwini' : 'Developer'}</span>
                <p>${messageInput.value}</p>
                <span class="timestamp">${getCurrentTime()}</span>
            </div>
        `;

        
        chatContainer.appendChild(message);

        
        messageInput.value = '';

       
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}




function getCurrentTime() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}
