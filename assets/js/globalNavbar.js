$(document).ready(function () {
    // //debugger
    $('#navbar-container').load("globalNavbar.html", function () {
        setTimeout(() => {
            const role = localStorage.getItem("role");
            const userAdminName = localStorage.getItem("userAdminName");

            if (userAdminName) {
                $('.admin-name-change').text(role);
                $('.js-tabLike .admin-menu-show').css('display', 'block');
            }

            const interval = setInterval(() => {
                if ($('#t_MenuNav_7').length) {
                    $('#t_MenuNav_7').css('display', 'flex');
                }
                if ($('#t_MenuNav_8').length) {
                    $('#t_MenuNav_8').css('display', 'flex');
                }

                if ($('#t_MenuNav_7').length && $('#t_MenuNav_8').length) {
                    clearInterval(interval);
                }
            }, 100);

            $(document).on("click", '.a-MenuBar-label[href="#"]', function (e) {
                e.preventDefault();

                const $parentLi = $(this).closest("li");
                const $submenu = $parentLi.find("ul").first();

                // Toggle visibility
                if ($submenu.is(":visible")) {
                    $submenu.slideUp();
                } else {
                    $submenu.slideDown();
                }
            });

            const appendSignout = `
        <div class="t-NavigationBar-menu showlink">
          <ul>
            <li><a href="${window.basePath}/index.html" class="signOutBtn">Sign Out</a></li>
          </ul>
        </div>
      `;

            $('.t-NavigationBar-item.has-username.shownav').append(appendSignout);

            $(".signOutBtn").on("click", function (event) {
                event.preventDefault();
                localStorage.removeItem("role");
                localStorage.removeItem("userAdminName");
                window.location.href = `${window.basePath}/index.html`;
            });
        }, 100);
    });
});
