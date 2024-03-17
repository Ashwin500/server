document.getElementById('postButton').addEventListener('click', function() {
    var code = document.getElementById('vid').value;
    var apiUrl = "https://pastebin.com/api/api_post.php";
    var apiKey = "7WHVkbqB_RrZMtT2gnjesDp4U42Mqa";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", apiUrl, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Code successfully posted to Pastebin!");
            console.log(xhr.responseText);
            // You can handle the response here
        }
    };

    // Additional parameters
    var expiration = "1M"; // Example: 1M (1 month), 1H (1 hour), 1D (1 day), N (never)
    var visibility = 0; // 0 = public, 1 = unlisted, 2 = private

    var params = "api_dev_key=" + apiKey + "&api_paste_code=" + encodeURIComponent(code) + "&api_option=paste" + "&api_paste_expire_date=" + expiration + "&api_paste_private=" + visibility;
    xhr.send(params);
});
