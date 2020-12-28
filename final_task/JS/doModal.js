document.addEventListener('DOMContentLoaded', function () {
    var modalButtons = document.querySelectorAll('.js-open-modal'),     // Collect all action open modals
        overlay = document.querySelector('#overlay-modal'),             // Find overlay for modals
        closeButtons = document.querySelectorAll('.js-modal-close'),    //Collect all close modal buttons 
        consultFormBtn = document.querySelector('.js-modal-form[data-modal="btn"]');
    var consultlist = [];

    // Open modal window 
    modalButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {

            e.preventDefault();
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.js-modal[data-modal="' + modalId + '"]');

            let removeNode = document.querySelector('.js-remove');
            if(removeNode) {
                removeNode.remove();
            }
            if(modalElem.attributes.clonecontent.value === "yes"){
                let getNode = item.cloneNode(true);
                getNode.classList.add('js-remove');
                modalElem.appendChild(getNode);
            }
            modalElem.classList.add('active');
            overlay.classList.add('active');
        }); 
    }); 

    closeButtons.forEach(function (cross) { 
        cross.addEventListener("click", function() {
            var parent = this.parentNode;
            parent.classList.remove("active");
            overlay.classList.remove("active");
        });
    });

    overlay.addEventListener('click',function(){ 
        var openModal = document.querySelector('.js-modal.active');
        openModal.classList.remove('active');
        overlay.classList.remove("active");
    });

    consultFormBtn.addEventListener('click',function(){
        let fullNameVal = document.querySelector('.js-modal-form[data-modal="in1"]').value,
            phoneVal = document.querySelector('.js-modal-form[data-modal="in2"]').value;
        consultlist.push({fullName: fullNameVal, phone: phoneVal});
        console.log(consultlist);

        let openModal = document.querySelector('.js-modal.active');
        openModal.classList.remove('active');
        overlay.classList.remove("active");
});

}); // end ready
