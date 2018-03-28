let cgb = document.getElementById('cgb');

function t(id, text, callback) {
    let currentText = 0;
    let target = text.length;
    document.getElementById(id).innerText = "";
    a();

    function a() {
        setTimeout(() => {
            console.log(document.getElementById(id).innerText);
            let target = document.getElementById('user').innerText + text.substring(currentText, currentText + 1);
            document.getElementById(id).innerText = target;
            console.log(target);
            if (currentText++ >= target) {
                callback();
            } else {
                a();
            }
        }, 1000);
    }
}

t("user", "opopo", () => {
    console.log('done');
})