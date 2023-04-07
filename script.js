//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');


//MESSAGES  
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

// font Sizes 
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

// Color Theme 
const colorPalette = document.querySelectorAll('.choose-color span');

// Background Change 
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');




//remove active class from all menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').
                style.display = 'none';
        } else { 
            document.querySelector('.notifications-popup').
                style.display = 'block';
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
            
        }
        
    })
})


// MESSAGES
//searches chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1){
            chat.style.display = 'flex';

        } else {
            chat.style.display = 'none';
        }
          
    })
}
//search Chat
messageSearch.addEventListener('keyup', searchMessage);
    


//highlight message card and remove message notification when it will click on message menu item on side bar
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';

    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000)
})


// THEME DISPLAY CUSTOMIZATION


//open modal
const openThemeModal = () => {
    themeModal.style.display = "grid";
} 

// closes modal 
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
    
}

//events of open and closing modal theme
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);







// FONTS

//remove a tive class from spans or font size selector
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
     })
}


fontSizes.forEach(size => {
     size.addEventListener('click', () => {
     removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }
        else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }
        else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }
        
        // change the font size  of the root html  Element 
    document.querySelector('html').style.fontSize = 'fontSize';

        
    })
   

})
    
// remove active class from colors
const changeAtiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}


    // change primary colors
    
    colorPalette.forEach(color => {
        
        color.addEventListener('click', () => {
            let primary;
            // change primary colors
        changeAtiveColorClass();
        if (color.classList.contains('color-1')){
            pimaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            pimaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            pimaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            pimaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            pimaryHue = 202;
        }
        color.classList.add('active');
        
        root.style.setProperty('--primary-color-hue', pimaryHue);
    })

    })

 
    // theme Background values 
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


//Change Background color function
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {

    //add active class
    Bg1.classList.add('active');

    //remove active class from others

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})





Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%'; 



    //add active class
    Bg2.classList.add('active');

    //remove active class from others

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})


Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%'; 

    //add active class
    Bg3.classList.add('active');

    //remove active class from others

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})






































































































