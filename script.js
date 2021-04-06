const tagsElement = document.querySelector('.tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', e => {
    createTags(e.target.value);

    if (e.key === "Enter") {
        e.target.value = "";

        randomSelect();
    }
});



function createTags(x) {
    const tags = x.split(',')
        .filter(tag => tag.trim() !== '')
        .map(tag => tag.trim());

    tagsElement.innerHTML = '';

    tags.forEach(tag => {
        const span = document.createElement('span');
        span.classList.add('tag');
        span.textContent = tag;
        tagsElement.appendChild(span);
    });

    const title = `<h5 class="title">Your words will be shown here...</h5>`;

    if (tagsElement.firstElementChild === null) {
        tagsElement.innerHTML = title;
    }
}

function randomSelect() {
    const setTime = document.getElementById('setTime');
    const setTimeValue = setTime.selectedIndex + 1;


    const interval = setInterval(() => {
        const randomTag = pickATag();

        highlight(randomTag);

        setTimeout(() => {
            unHighlight(randomTag);
        }, 100);


    }, 100);

    if (setTimeValue === 6) {
        setTimeout(() => {
            clearInterval(interval);

            setTimeout(() => {
                const randomTag = pickATag();

                highlight(randomTag);

                setTimeout(() => {
                    while (randomTag.previousElementSibling !== null) {
                        randomTag.previousElementSibling.remove();
                    }

                    while (randomTag.nextElementSibling !== null) {
                        randomTag.nextElementSibling.remove();
                    }
                }, 1000);
            }, 100);

        }, 10000);
    }

    else {
        setTimeout(() => {
            clearInterval(interval);

            setTimeout(() => {
                const randomTag = pickATag();

                highlight(randomTag);

                setTimeout(() => {
                    while (randomTag.previousElementSibling !== null) {
                        randomTag.previousElementSibling.remove();
                    }

                    while (randomTag.nextElementSibling !== null) {
                        randomTag.nextElementSibling.remove();
                    }
                }, 1000);


            }, 100);
        }, setTimeValue * 1000);
    }


}

function pickATag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}


function highlight(tag) {
    tag.classList.add('highlight');
}

function unHighlight(tag) {
    tag.classList.remove('highlight');
}

