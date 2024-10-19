// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Function to open modal with details
function showDetails(title) {
    const modal = document.getElementById('detailsModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    modalTitle.innerText = title;

    // Custom descriptions based on clicked card
    let description = '';
    switch (title) {
        case 'Personal Training':
            description = 'Our certified trainers create a personalized plan just for you.';
            break;
        case 'Group Classes':
            description = 'Engage in fun, community-based group classes that push you.';
            break;
        case 'Nutrition Plans':
            description = 'Get tailored meal plans from our nutrition experts to achieve your goals.';
            break;
        case 'Yoga':
            description = 'Calming yet strengthening, our yoga sessions are perfect for body and mind.';
            break;
        case 'Strength Training':
            description = 'Build muscle and get stronger with our focused strength training classes.';
            break;
        case 'HIIT':
            description = 'Burn fat fast with high-intensity interval training!';
            break;
        case 'Protein Supplements':
            description = 'Top quality protein supplements to help you recover faster and build muscle.';
            break;
        case 'Gym Equipment':
            description = 'Explore our range of home gym equipment.';
            break;
        case 'Fitness Apparel':
            description = 'Comfortable and stylish gym wear for your best performance.';
            break;
        default:
            description = 'More information coming soon!';
            break;
    }

    modalDescription.innerText = description;
    modal.style.display = "flex"; // Show modal
}

// Function to close modal
function closeModal() {
    document.getElementById('detailsModal').style.display = "none";
}
function addToCart(product) {
    alert(product + ' has been added to your cart!');
}
function handleContact(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contact-form').reset(); // Reset form fields
}
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
    (function(){
        emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
    })();
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                alert('Message sent successfully!');
                document.getElementById('contact-form').reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
                console.error('Error:', error);
            });
    });
</script>