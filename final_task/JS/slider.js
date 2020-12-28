document.addEventListener('DOMContentLoaded', function () {
    let position = 0;
    const slidesToShow = 1,
          slidesToScroll = 1,
          container = document.querySelector('.feedback__slider'),
          track = document.querySelector('.feedback__track'),
          items = document.querySelectorAll('.feedback__item'),
          btnPrev = document.querySelector('.slick-prev'),
          btnNext = document.querySelector('.slick-next'),
          itemWidth = container.clientWidth / slidesToShow,
          itemsCount = items.length,
          movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {item.style.minWidth = `${itemWidth}px`;});

    btnPrev.addEventListener('click', function() {
        const itemsLetf = Math.abs(position) / itemWidth;
        position += itemsLetf >= slidesToScroll ? movePosition : itemsLetf * itemWidth;
        setPosition();
        checkBtns();
    });

    btnNext.addEventListener('click', function() {
        const itemsLetf = itemsCount - (Math.abs(position) / itemWidth + slidesToShow);
        position -= itemsLetf >= slidesToScroll ? movePosition : itemsLetf * itemWidth;
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        btnPrev.disabled = position === 0; 
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth; 
    };

    checkBtns();
           

});