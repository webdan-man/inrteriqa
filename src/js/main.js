'use strict';
document.addEventListener("DOMContentLoaded", function() {

    setTimeout(() => document.getElementsByTagName('body')[0].className += ' pre-loaded', 2000);
    
    const interaqa = new interaqaJS();
});

const interaqaJS = function () {

    const menu = document.querySelector('.menu'),
        indicator = document.querySelector('#indicator'),
        documentElement = document.documentElement,
        viewport = document.querySelector('meta[name="viewport"]'),
        contact_info = document.querySelector('header .wrap .header .header_right .contact_info'),
        contact_info_footer = document.querySelector('footer .wrap .footer_grup .footer_left .contact_info'),
        contact_info_clone = contact_info.cloneNode(true),
        messengers = document.querySelector('header .wrap .header .header_right .messengers'),
        messengers_clone = messengers.cloneNode(true),
        nav = document.querySelector('header nav .wrap'),
        scrollButtons = document.querySelectorAll('.button_scroll'),
        popapScrollButtons = document.querySelectorAll('.popap_button_scroll'),
        quantityArrowMinus = document.querySelector(".minus"),
        quantityArrowPlus = document.querySelector(".plus"),
        quantityNum = document.querySelector("#count_input"),
        areaRoom = document.querySelector("#areaRoom"),
        totalCost = document.querySelector("#total-cost"),
        totalDay = document.querySelector("#total-day"),
        nameInput = document.querySelector('input[name="name"]'),
        phoneInput = document.querySelector('input[name="phone"]'),
        button_sostav = document.querySelector('.button_sostav'),
        button_project = document.querySelectorAll('.button_project'),
        popapSostav = document.querySelector('#sostav'),
        popapProject= document.querySelector('#project'),
        closeButtons = document.querySelectorAll('.popap .close'),
        removeArray = [
            contact_info,
            messengers,
            contact_info_footer
        ]
    ;
    
    const init = function () {
        scrollButtonAction();
        openMenuToggle();
        indicatorLine();
        mobilecheck();
        changePhoneNode(contact_info);
        changePhoneNode(contact_info_footer);
        quantityProducts();
        checkText();
        checkPhone();
        buttonSostav();
        buttonProject();
        closeButtonAction();
        popapScrollButtonAction();
    };

    const closeButtonAction = function () {
        for (var i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', cloceButtonClick);
        }
    }

    const cloceButtonClick = function () {
        document.body.classList.remove('popap_open');
        this.closest('.popap').classList.remove('open');
    }

    const popapScrollButtonAction = function () {        
        for (var i = 0; i < popapScrollButtons.length; i++) {
            popapScrollButtons[i].addEventListener('click', handleButtonClick);
        }
    }

    const scrollButtonAction = function () {
        for (var i = 0; i < scrollButtons.length; i++) {
            scrollButtons[i].addEventListener('click', handleButtonClick);
        }
    }

    const handleButtonClick = function () {
        document.querySelector(".section6").scrollIntoView({block: "center", behavior: "smooth"});
        document.body.classList.remove('popap_open');
        this.closest('.popap').classList.remove('open');
     }

    const indicatorLine = function () {
        window.addEventListener('scroll', function() {
            const progres = 100 * documentElement.scrollTop / (documentElement.scrollHeight - documentElement.clientHeight);
            indicator.style.width = progres + '%';
        });
    }

    const openMenuToggle = function () {
        menu.addEventListener('click', function(e) {        
            e.target.closest('#main').classList.toggle('open');
        })
    }

    const mobilecheck = function() {
        (function(a){
            if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) {
                viewport.setAttribute('content', 'width=480, initial-scale=1');
                addNavInfo();
                removeElement();
            }
        })(navigator.userAgent||navigator.vendor||window.opera);
    };

    const removeElement = function () {
        removeArray.forEach(element => {
            element.parentNode.removeChild(element);
        })
    };
    
    const changePhoneNode = function (element) {
        let newSpan = document.createElement('span');
        let spanTextNode = document.createTextNode(element.querySelector('.phone').innerHTML);
        newSpan.className = "phone";
        newSpan.appendChild(spanTextNode);
        element.removeChild(element.querySelector('.phone'))
        element.appendChild(newSpan);
    };

    const addNavInfo = function () {
        let newDiv = document.createElement('div');
        newDiv.className = "nav_info";
        newDiv.appendChild(contact_info_clone);
        newDiv.appendChild(messengers_clone);
        nav.appendChild(newDiv);
    }

    const quantityProducts = function () {
        quantityArrowMinus.addEventListener('click', function () {
            if (+quantityNum.value > 1 ) {
                quantityNum.value = +quantityNum.value - 1;
                formChange();
            }
        });
        quantityArrowPlus.addEventListener('click', function () {
            if (+quantityNum.value > 0 && +quantityNum.value < 999) {
                quantityNum.value = +quantityNum.value + 1;
                formChange();
            }
        });
        quantityNum.addEventListener('change', function () {
            if (quantityNum.value > 999) {
                quantityNum.value = 999;
            }
            if (quantityNum.value < 1) {
                quantityNum.value = 1;
            }
            formChange();
        });
    }
    
    const formChange = function () {
        areaRoom.textContent = quantityNum.value;
        totalCost.textContent = +quantityNum.value * 2500;
        totalDayFunk(quantityNum.value);
    }

    const totalDayFunk = function (val) {
        if (+val > 0 && +val <= 50) totalDay.textContent = 20;
        if (+val > 50 && +val <= 100) totalDay.textContent = 30;
        if (+val > 100 && +val <= 200) totalDay.textContent = 50;
        if (+val > 200 && +val <= 999) totalDay.textContent = 60;
    }

    const checkText = function () {
        nameInput.addEventListener('keyup', function() {            
            const regex = /^[a-zA-Z]*$/;
            let newVal = '';
            if (regex.test(nameInput.value) !== true) {
                for (let char of nameInput.value) if(/[0-9]/.test(char) !== true) newVal += char;
                nameInput.value = newVal;
            }
        });
    }

    const checkPhone = function () {        
        phoneInput.addEventListener('keyup', function() {
            const phoneInputLegth = phoneInput.value.length;
            let newVal = '';
            if (phoneInputLegth > 12) {
                for (let i = 0; i < 12; i++) newVal += phoneInput.value[i];
                phoneInput.value = newVal;
            }
        });
    }
    
    const buttonSostav = function () {
        button_sostav.addEventListener('click', function () {
            document.body.classList += ' popap_open' ;
            popapSostav.classList += ' open';
        })
    }

    const buttonProject = function () {
        for (var i = 0; i < button_project.length; i++) {                   
            button_project[i].addEventListener('click', function () {
                document.body.classList += ' popap_open' ;
                popapProject.classList += ' open';
            })
        }
    }

    init();
};


$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();
        var type=$(this).attr('method');
        var url=$(this).attr('action');
        var data=$(this).serialize();
            
        $.ajax({type: type, url: url, data: data,
            success : function(){
                //$.arcticmodal('close');$('#okgo').arcticmodal();
            }
        }); 
    });
})