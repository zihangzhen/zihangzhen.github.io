// 检查系统主题偏好
function getSystemThemePreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// 设置主题
function setTheme(theme) {
    // 设置主题
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // 更新开关状态
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (toggleSwitch) {
        toggleSwitch.checked = theme === 'dark';
    }
}

// 初始化主题
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    // const systemTheme = getSystemThemePreference();
    const defaultTheme = 'light';

    // 如果用户没有保存过主题偏好
    if (!savedTheme) {
        setTheme(defaultTheme);
    } else {
        setTheme(savedTheme);
    }

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// 主题切换处理
function handleThemeSwitch(e) {
    const theme = e.target.checked ? 'dark' : 'light';
    setTheme(theme);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    const toggleSwitches = document.querySelectorAll('.theme-switch input[type="checkbox"]');
    toggleSwitches.forEach(toggleSwitch => {
        toggleSwitch.addEventListener('change', handleThemeSwitch);
    });
});