(function () {
    const root = document.documentElement;
    const STORAGE_KEY = 'site-theme';

    function applyTheme(theme) {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme');
        }
    }

    function getStored() {
        return localStorage.getItem(STORAGE_KEY) ?? 'system';
    }

    function setStored(theme) {
        localStorage.setItem(STORAGE_KEY, theme);
        applyTheme(theme);
        updateThemeUI();
    }

    // initial apply
    applyTheme(getStored());
    // update which theme dropdown theme item is selected
    try { 
        updateThemeUI();
    } catch (e) {
        console.error("updateThemeUI error: ", e);
    }

    window.themeManager = {
        set: setStored,
        get: getStored,
        toggle() {
            const cur = getStored();
            const next = (cur === 'dark' ? 'light' : cur === 'light' ? 'system' : 'dark');
            setStored(next);
        },
    };
})();

function updateThemeUI() {
    try {
        const current = ((window.themeManager && 
                          window.themeManager.get) ? window.themeManager.get() : localStorage.getItem('site-theme') 
                          || 'system');
        const items = document.querySelectorAll('[data-set-theme]');
        items.forEach((it) => {
            it.classList.toggle('active', it.getAttribute('data-set-theme') === current);
        });
    } catch (err) {
        console.error('updateThemeUI error:', err);
    }
}

window.setTheme = function setTheme(theme) {
    try {
        if (window.themeManager && window.themeManager.set) {
            window.themeManager.set(theme);
        } else {
            if (theme === 'system') {
                document.documentElement.removeAttribute('data-theme');
            } else {
                document.documentElement.setAttribute('data-theme', theme);
            }
            localStorage.setItem('site-theme', theme);
            updateThemeUI();
        }
    } catch (err) {
        console.error('setTheme error:', err);
    }
};

// react to OS theme changes when using 'system'
if (window.matchMedia) {
    try {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        if ((window.themeManager && 
            window.themeManager.get ? window.themeManager.get() : localStorage.getItem('site-theme') 
            || 'system') === 'system') {
            updateThemeUI();
        }
        });
    } catch (e) {
        const mm = window.matchMedia('(prefers-color-scheme: dark)');
        if (mm && mm.addListener) {
            mm.addListener(function () {
                if ((window.themeManager && 
                    window.themeManager.get ? window.themeManager.get() : localStorage.getItem('site-theme') 
                    || 'system') === 'system') {
                    updateThemeUI();
                }
            });
        }
    }
}
