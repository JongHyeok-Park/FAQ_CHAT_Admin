async function reissue() {
    await $.ajax({
        type: "POST",
        url: config.authServer + "/api/auth/reissue",
        headers: {
            Authorization: "Bearer " + getCookie("refreshToken")
        },
        success: function (res) {
            setCookie("accessToken", res.accessToken, 2 * 60);
            setCookie("refreshToken", res.refreshToken, 24 * 14 * 60);
            if (res.registerStateEnum === "INACTIVE") {
                location.replace("/register");
            }
        },
        error: function (err) {
            console.error(err);
        }
    })
}