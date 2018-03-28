let user = document.getElementById('user');
let cgb = document.getElementById('cgb');

function t(where, text, callback) {
    let currentText = 0;
    let target = text.length;
    where.innerHtml = "";
    a();

    function a() {
        setTimeout(() => {
            console.log(where.innerHtml);
            where.innerHtml = where.innerHtml + text.substring(currentText, currentText + 1);
            if (currentText++ >= target) {
                callback();
            } else {
                a();
            }
        }, 100);
    }
}

t(user, "opopo", () => {
    console.log('done');
})