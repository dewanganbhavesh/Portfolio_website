setInterval(showTime, 1000);
function showTime() {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        am_pm = "AM";

        //***Uncomment below code to make it 12 hours format*** */
        // if (hour > 12) {
        //     hour -= 12;
        //     am_pm = "PM";
        // }
        // if (hour == 0) {
        //     hr = 12;
        //     am_pm = "AM";
        // }

        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        let currentTime = hour + ":"
                + min;

        document.getElementById("clock")
                .innerHTML = currentTime;
}
showTime();

function theme_change() {
        // console.log("Hello world");
        // var container = document.getElementById('container').style.cssText = 'background-color: red;';
        var container = document.getElementById('container');

        
        if (!(container.className.match('dark_container'))) {
                container.classList.add('dark_container');
                document.getElementById('main_name').style.setProperty("color", "#ebebeb");
                document.getElementById('static_text').style.setProperty("color", "#ebebeb");
                document.getElementById('student_detaill').style.setProperty("color", "#ebebeb");
                document.getElementById('clock').style.setProperty("color", "#a6a6a6");
                document.getElementById('logo').style.setProperty("filter", "invert(1)");
                document.getElementById('leftfader').style.setProperty("background-image", "linear-gradient(90deg, #1c1d25, transparent)");
                document.getElementById('rightfader').style.setProperty("background-image", "linear-gradient(-90deg, #1c1d25, transparent)");

                document.getElementById('theme_changer').classList.remove('theme_changer');
                document.getElementById('theme_changer').classList.add('dark_theme_changer');
      
                const page_heads = document.querySelectorAll('.page_head');
                page_heads.forEach(page_head => {
                  page_head.style.color = 'white';
                });
      
                const dtlss = document.querySelectorAll('.dtls');
                dtlss.forEach(dtls => {
                dtls.classList.remove('dtls');
                dtls.classList.add('dark_dtls');
                });
      
                const contact_icons = document.querySelectorAll('.contact_icon');
                contact_icons.forEach(contact_icon => {
                contact_icon.classList.remove('contact_icon');
                contact_icon.classList.add('dark_contact_icon');
                });
      
                const nav_icons = document.querySelectorAll('.nav_icon');
                nav_icons.forEach(nav_icon => {
                nav_icon.style.setProperty("filter", "invert(0.7)");
                });
                
                const skillset_heads = document.querySelectorAll('.skillset_head');
                skillset_heads.forEach(skillset_head => {
                skillset_head.style.setProperty("color", "#ebebeb");
                skillset_head.style.setProperty("border-bottom", "2px solid #d4d4d4");
                });
                
                const skill_names = document.querySelectorAll('.skill_name');
                skill_names.forEach(skill_name => {
                skill_name.style.setProperty("color", "#d4d4d4");
                });
                
                const bars = document.querySelectorAll('.bar');
                bars.forEach(bar => {
                bar.style.setProperty("background-color", "#4c4f65");
                bar.style.setProperty("border", "1px solid white");
                });
                
                const exp_bgs = document.querySelectorAll('.exp_bg');
                exp_bgs.forEach(exp_bg => {
                exp_bg.style.setProperty("border-bottom", "24rem solid #4c4f65");
                });
                const extra_texts = document.querySelectorAll('.extra_text');
                extra_texts.forEach(extra_text => {
                extra_text.style.setProperty("border-bottom", "6rem solid #4c4f65");
                extra_text.style.setProperty("color", "#c4c4c4");
                });

                const exp_titles = document.querySelectorAll('.exp_title');
                exp_titles.forEach(exp_title => {
                exp_title.style.setProperty("color", "#ebebeb");
                });

                const exp_detaills = document.querySelectorAll('.exp_detaill');
                exp_detaills.forEach(exp_detaill => {
                exp_detaill.style.setProperty("color", "rgb(196, 196, 196)");
                });

                const person_tags = document.querySelectorAll('.person_tag');
                person_tags.forEach(person_tag => {
                person_tag.style.setProperty("color", "white");
                });
        }
        else if (container.className.match('dark_container')) {
                container.classList.remove('dark_container');
                document.getElementById('main_name').style.setProperty("color", "#4c4f65");
                document.getElementById('static_text').style.setProperty("color", "#4c4f65");
                document.getElementById('student_detaill').style.setProperty("color", "#4c4f65");
                document.getElementById('clock').style.setProperty("color", "black");
                document.getElementById('logo').style.setProperty("filter", "invert(0)");
                document.getElementById('leftfader').style.setProperty("background-image", "linear-gradient(90deg, #ebebeb, transparent)");
                document.getElementById('rightfader').style.setProperty("background-image", "linear-gradient(-90deg, #ebebeb, transparent)");
                
                document.getElementById('theme_changer').classList.remove('dark_theme_changer');
                document.getElementById('theme_changer').classList.add('theme_changer');

                const page_heads = document.querySelectorAll('.page_head');
                page_heads.forEach(page_head => {
                  page_head.style.color = '#4c4f65';
                });

                const dtlss = document.querySelectorAll('.dark_dtls');
                dtlss.forEach(dtls => {
                dtls.classList.remove('dark_dtls');
                dtls.classList.add('dtls');
                });

                const contact_icons = document.querySelectorAll('.dark_contact_icon');
                contact_icons.forEach(contact_icon => {
                contact_icon.classList.add('contact_icon');
                contact_icon.classList.remove('dark_contact_icon');
                });

                const nav_icons = document.querySelectorAll('.nav_icon');
                nav_icons.forEach(nav_icon => {
                nav_icon.style.setProperty("filter", "invert(0)");
                });

                const skillset_heads = document.querySelectorAll('.skillset_head');
                skillset_heads.forEach(skillset_head => {
                skillset_head.style.setProperty("color", "black");
                skillset_head.style.setProperty("border-bottom", "2px solid #4c4f65");
                });

                const skill_names = document.querySelectorAll('.skill_name');
                skill_names.forEach(skill_name => {
                skill_name.style.setProperty("color", "black");
                });
             
                const bars = document.querySelectorAll('.bar');
                bars.forEach(bar => {
                bar.style.setProperty("background-color", "#f0f0f0");
                bar.style.setProperty("border", "1px solid rgba(0, 0, 0, 0.256)");
                });
                                
                const exp_bgs = document.querySelectorAll('.exp_bg');
                exp_bgs.forEach(exp_bg => {
                exp_bg.style.setProperty("border-bottom", "24rem solid #bcbcbc");
                });
                const extra_texts = document.querySelectorAll('.extra_text');
                extra_texts.forEach(extra_text => {
                extra_text.style.setProperty("border-bottom", "6rem solid #bcbcbc");
                extra_text.style.setProperty("color", "rgb(34, 34, 34");
                });
                
                const exp_titles = document.querySelectorAll('.exp_title');
                exp_titles.forEach(exp_title => {
                exp_title.style.setProperty("color", "#363636");
                });

                const exp_detaills = document.querySelectorAll('.exp_detaill');
                exp_detaills.forEach(exp_detaill => {
                exp_detaill.style.setProperty("color", "rgb(34, 34, 34)");
                });

                const person_tags = document.querySelectorAll('.person_tag');
                person_tags.forEach(person_tag => {
                person_tag.style.setProperty("color", "rgb(54, 54, 54)");
                });
        }

}