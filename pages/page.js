document.addEventListener('DOMContentLoaded', function () {
    // Fetch user data from backend (mocked for this example)
    fetchUserProfile().then(user => {
        document.querySelector('.name h2').textContent = `Hello, ${user.name}`;
    });

    // Add click event to the settings icon
    document.querySelector('.setting').addEventListener('click', function () {
        alert('Settings clicked!');
    });
});

// Mock function to simulate fetching user data from backend
function fetchUserProfile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'John Doe',
                profilePic: '/path/to/profile-pic.png'
            });
        }, 1000);
    });
}
