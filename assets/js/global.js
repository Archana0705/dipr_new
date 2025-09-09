const API_BASE_URL = "https://tngis.tnega.org/lcap_api/dipr-lcap-api/v1/";
$(document).ready(function () {


    $.ajaxSetup({
        headers: {
            "X-App-Key": "dipr",
            "X-App-Name": "dipr"
        }
    });
            
    function getBasePath() {
        const path = window.location.pathname;
        const baseMatch = path.match(/^(\/dipr)?/);
        return baseMatch ? baseMatch[0] : "";
    }

    function navigateTo(page) {
        const basePath = getBasePath();
        window.location.href = `${basePath}/${page}`;
    }

    function signOut() {
        localStorage.removeItem("role");
        localStorage.removeItem("userAdminName");
        navigateTo("index.html");
    }

});
