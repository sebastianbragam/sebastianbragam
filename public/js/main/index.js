posBtn = document.getElementById('pos-btn');
digBtn = document.getElementById('dig-btn');
salBtn = document.getElementById('sal-btn');
posDes = document.getElementById('pos-des');
digDes = document.getElementById('dig-des');
salDes = document.getElementById('sal-des');

function activateDescription(name) {
    switch (name) {
        case 'pos':
            posBtn.classList.add("selected");
            digBtn.classList.remove("selected");
            salBtn.classList.remove("selected");
            posDes.classList.remove("hidden");
            digDes.classList.add("hidden");
            salDes.classList.add("hidden");
            break;
        case 'dig':
            posBtn.classList.remove("selected");
            digBtn.classList.add("selected");
            salBtn.classList.remove("selected");
            posDes.classList.add("hidden");
            digDes.classList.remove("hidden");
            salDes.classList.add("hidden");
            break;
        case 'sal':
            posBtn.classList.remove("selected");
            digBtn.classList.remove("selected");
            salBtn.classList.add("selected");
            posDes.classList.add("hidden");
            digDes.classList.add("hidden");
            salDes.classList.remove("hidden");
            break;
    }
}

