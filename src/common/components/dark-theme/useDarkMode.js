import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

export const useDarkMode = () => {
    const [theme, setTheme] = useState('');
    const currTheme = useSelector((state) => state.global.theme);

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        currTheme === 'day' ? setMode('night') : setMode('day')
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
    }, []);
    return [currTheme, themeToggler]
};