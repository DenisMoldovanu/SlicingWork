document.addEventListener('DOMContentLoaded', function () {
    // Get the modal element
    const modal = document.getElementById('myModal');

    // Get the button that opens the modal
    const btn = document.getElementById('modalBtn');

    // // Get the <span> element that closes the modal
    // const span = document.getElementsByClassName('close')[0];

    // When the user clicks the button, open the modal
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // // When the user clicks on <span> (x), close the modal
    // span.addEventListener('click', () => {
    //     modal.style.display = 'none';
    // });


    const accountItems = modal.querySelectorAll('.account-item');
    const registerButton = modal.querySelector('.register-button');
    const affiliatesModalButton = document.getElementById('afiliates-modal');

    // Function to handle account item click
    function handleAccountItemClick(event) {
        accountItems.forEach(item => {
            item.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        registerButton.removeAttribute('disabled');
        registerButton.classList.remove('disabled');
    }

    // Add click event listeners to each account item
    accountItems.forEach(item => {
        item.addEventListener('click', handleAccountItemClick);
    });

    // Function to reset modal state
    function resetModalState() {
        modal.style.display = 'none';
        accountItems.forEach(item => {
            item.classList.remove('active');
        });
        registerButton.setAttribute('disabled', true);
        registerButton.classList.add('disabled');
    }
    // Event listener to open the modal when affiliates-modal is clicked
    affiliatesModalButton.addEventListener('click', function () {
        modal.style.display = 'block';
        document.querySelector('.affiliates-account').classList.add('active');
        registerButton.removeAttribute('disabled');
        registerButton.classList.remove('disabled');
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            resetModalState();
        }
    });
});
