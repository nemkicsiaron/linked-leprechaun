function collect_data () {
    alert(document.querySelector("a[]"));
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button#generate").addEventListener("click", collect_data, false);
}, false);
