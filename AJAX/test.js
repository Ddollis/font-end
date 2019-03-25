var xhr;

function createRequest() {
    try {
        xhr = new XMLHttpRequest();
    } catch (tryMS) {
        try {
            xhr = new ActiveXObject("Msxm12.XMLHTTP")
        } catch (otherMS) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (failed) {
                xhr = null;
            }
        }
    }
    return xhr;
}

