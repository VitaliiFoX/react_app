import './Header.css'
import logo from '/vite.svg'
import { useState } from 'react';

export default function Header() {
    const [now, setNow] = useState(new Date())
    // const now = new Date();

    setInterval(() => {setNow(new Date())}, 1000) // () => setNow(new Date());

    return (
        <header>
            <h1>It's header</h1>
            <img src={logo} alt=""/>

            <span>Current time - {now.toLocaleTimeString()}</span>
        </header>
    )
}