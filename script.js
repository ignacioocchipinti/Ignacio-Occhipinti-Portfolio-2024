let hamburgerIcon = document.querySelector(".menu-icon");
        let hamburgerIconClass = document.querySelector(".menu-icon span i");
        let Menu = document.querySelector(".menu");

        const closeMenu = () => {
            Menu.style.top = "-100%";
            hamburgerIcon.style.color = "black";
            hamburgerIcon.style.fontSize = "30px";
            hamburgerIconClass.classList.remove("fas", "fa-times");
            hamburgerIconClass.classList.add("fas", "fa-bars");
        };

        const openMenu = () => {
            Menu.style.top = "0px";
            hamburgerIcon.style.color = "white";
            hamburgerIcon.style.fontSize = "35px";
            hamburgerIconClass.classList.remove("fas", "fa-bars");
            hamburgerIconClass.classList.add("fas", "fa-times");
        };

        window.onload = function () {
            hamburgerIcon.addEventListener("click", function () {
                const topValue = getComputedStyle(Menu).getPropertyValue("top");

                if (topValue === "0px" || topValue === "0%") {
                    closeMenu();
                } else {
                    openMenu();
                }
            });

            const menuLinks = document.querySelectorAll(".menu li a");
            menuLinks.forEach(function (link) {
                link.addEventListener("click", function () {
                    closeMenu();
                });
            });
        };

        $(document).ready(function () {
            $(".filter-button").click(function () {
                var value = $(this).attr('data-filter');
                if (value == "all") {
                    $('.filter').show('500').fadeIn(500);
                } else {
                    $(".filter").not('.' + value).hide('500').fadeOut(500);
                    $('.filter').filter('.' + value).show('500').fadeIn(500);
                }
                if ($(".filter-button").removeClass("active")) {
                    $(this).removeClass("active");
                }
                $(this).addClass("active");
            });
        });