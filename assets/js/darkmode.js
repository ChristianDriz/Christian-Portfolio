$(document).ready(function () {


    const progressBar = $('.percent');
    const progressNum = $('.prog');
    const maxProgress = [90, 85, 65, 70, 60];
    
    progressBar.each(function (index) {
        let counter = 0;
        const progbar = $(this);
        const prognum = progressNum.eq(index);
        let interval;
    
        function updateProgress() {
            if (counter >= maxProgress[index]) {
                clearInterval(interval);
            } else {
                counter += 1;
                progbar.css('width', counter + '%');
                prognum.html(counter + '%');
            }
        }
        interval = setInterval(updateProgress, 20);
    });
    

    //dark mode
    let theme = true;

    $('.dark-mode-button').click(function (e) { 
        e.preventDefault();

        if (theme){
            $('body').toggleClass('dark-mode');
            $('.dark-mode-button i').removeClass('gg-moon').addClass('gg-sun');
            $('.dark-mode-button i').attr('data-bs-original-title', 'Light Mode');
            $('#portfolyo').attr('src', 'assets/img/codes/portfolio.png');
            theme = false;
        } else{
            $('body').toggleClass('dark-mode');
            $('.dark-mode-button i').removeClass('gg-sun').addClass('gg-moon');
            $('.dark-mode-button i').attr('data-bs-original-title', 'Dark Mode');
            $('#portfolyo').attr('src', 'assets/img/codes/portfolio-dark.png');
            theme = true;
        }
    });


    /* navigation script */
    $(document).scroll(function () { 
        const scroll_position = $(document).scrollTop();
        
        $('section').each(function () {
            const top = $(this).offset().top;
            const bottom = top + $(this).height();

            if (scroll_position >= top && scroll_position < bottom) {
                $('.nav-link').removeClass('aktib');
                $('.nav-link[href="#' + this.id + '"]').addClass('aktib');
            }

            if (scroll_position > 100) {    
                $('.navbar').css('boxShadow', '0 5px 10px var(--shadow-color)');
            } else {
                $('.navbar').css('boxShadow', 'none');
            }
        });
    })


    // // Retrieve the saved mode and icon from localStorage, or default to 'false' (light mode)
    // let mode = localStorage.getItem('darkMode') === 'true';
    // let icon = localStorage.getItem('darkModeIcon') || 'moon'; // Default to sun icon

    // // Set the initial mode and icon based on the saved values
    // if (mode) {
    //     $('body').addClass('dark-mode');
    // }
    
    // // Set the initial icon
    // $('.gg-moon').toggle(!mode && icon === 'sun');
    // $('.gg-sun').toggle(mode && icon === 'moon');
    
    // $('.dark-mode-button').click(function (e) { 
    //     e.preventDefault();

    //     // Toggle the mode
    //     mode = !mode;
        
    //     // Toggle the icon
    //     icon = mode ? 'moon' : 'sun';

    //     // Toggle the dark mode class on the body
    //     $('body').toggleClass('dark-mode', mode);

    //     // Toggle the icon visibility
    //     $('.gg-moon').toggle(mode && icon === 'moon');
    //     $('.gg-sun').toggle(!mode && icon === 'sun');

    //     // Save the mode and icon to localStorage
    //     localStorage.setItem('darkMode', mode);
    //     localStorage.setItem('darkModeIcon', icon);
    // });
});