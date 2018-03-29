function t(id, text, callback) {
    let currentText = 0;
    let target = text.length;
    document.getElementById(id).innerText = "";
    a();

    function a() {
        setTimeout(() => {
            let imp = text.substring(currentText, currentText + 1);
            if (imp === ' ') {
                imp = '&nbsp';
            }
            let targetText = document.getElementById('user').innerText + imp;
            document.getElementById(id).innerHTML = targetText;
            if (currentText++ >= target) {
                callback();
            } else {
                a();
            }
        }, 100);
    }
}

let arr = ["BOt ezreal", "bottom yasuo", "Hi", "Mid Zed", "Help", "support SONA", "Sup lulu", "jg MasterYi", "JUNGLE wukong"];
arr.sort(() => {
    return 0.5 - Math.random();
});

function c(pointer) {
    if (pointer === arr.length) {
        pointer = 0;
    }
    setTimeout(() => {
        t("user", arr[pointer], () => {
            c(pointer + 1)
        })
    }, 1000);
}
c(0);