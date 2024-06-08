function loadNavbar() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './navbar.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('navbar').innerHTML = xhr.responseText;
        }
        loadFooter();
    };
    xhr.send();
}
function loadJs() {
    loadNavbar();
    updateFavicon();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
}


function updateFavicon() {
    const favicon = document.getElementById('favicon');
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeMediaQuery.matches) {
        favicon.href = 'favicon-dark.svg';
    } else {
        favicon.href = 'favicon-light.svg';
    }
}


function loadFooter() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './footer.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('footer').innerHTML = xhr.responseText;
        }
        loadJsonData();
    };
    xhr.send();
}


var jsonData = null;
function loadJsonData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './site-data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            jsonData = JSON.parse(xhr.responseText);
            replaceInnerHTMLWithJSONValues();
        }
    };
    xhr.send();

}


function getValue(query) {
    const keys = query.split('.');
    let index = null;
    if (!isNaN(keys[keys.length - 1])) {
        index = parseInt(keys.pop());
    }
    let value = jsonData;
    for (const key of keys) {
        if (value.hasOwnProperty(key)) {
            value = value[key];
        } else {
            return null;
        }
    }
    if (index !== null && Array.isArray(value)) {
        if (index >= 0 && index < value.length) {
            return value[index];
        } else {
            return null;
        }
    } else {
        return value;
    }
}

function replaceInnerHTMLWithJSONValues() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        const query = element.getAttribute('data-query');
        if (query) {
            // Set Alt values of images
            if (element.getAttribute('data-attribute') === 'alt') {
                const altValue = getValue(query);
                element.setAttribute('alt', altValue);
            } else {
                // set innerhtml & href
                const value = getValue(query);
                if (value !== null && value !== undefined) {
                    element.innerHTML = value;
                }
                if (element.getAttribute('data-attribute') === 'href') {
                    const linkQuery = query.split('.').splice(0, query.split('.').length - 1).join('.').concat('.url');
                    const hrefValue = getValue(linkQuery);
                    element.setAttribute('href', hrefValue);
                }
                if (element.getAttribute('data-target') === 'target') {
                    const targetQuery = query.split('.').splice(0, query.split('.').length - 1).join('.').concat('.target');
                    const targetValue = getValue(targetQuery);
                    element.setAttribute('target', targetValue);
                }
            }
        }
    });
    navActiveLink();
}

function navActiveLink() {
    var currentPath = window.location.pathname;
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link')
    navbarLinks.forEach(function (link) {
        var linkPath = link.getAttribute('href');
        if (currentPath === linkPath) {
            link.classList.add('active-nav');
        }
    });
}

function scrollToContent(index) {
    $('html,body').animate({
        scrollTop: $("#seg-" + index).offset().top
    }, 'fast');
}