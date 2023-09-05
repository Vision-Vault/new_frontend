import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/contexts/auth"

export default function Header() {
    const [mode, setMode] = useState("0%");
    const { logout, user, token } = useAuth()

    function Nav() {
        if (mode === '0%') {
            setMode("100%")
        }
        else {
            setMode('0%')
        }
    }
    return (
        <>
            <header>
                <section>
                    <h1>VISION VAULT</h1>
                </section>
                <nav id="nav1">
                    <ul>
                        <li><Link href="#">Home</Link></li>
                        <li><Link href="#">About As</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                        <li><Link href="#">Profile</Link></li>
                        <button onClick={() => logout()}>
                            Logout
                        </button>
                    </ul>
                </nav>
                <div id="nav2" onClick={Nav}>
                    <i className="fa-solid fa-list"></i>
                </div>
                <div id="mopileNav" style={{ width: mode }}>
                    <div id="nav22" onClick={Nav}>
                        <i className="fa-solid fa-list"></i>
                    </div>
                    <Link href="#">Home</Link>
                    <Link href="#">About As</Link>
                    <Link href="#">Contact Us</Link>
                    <Link href="#">Log In</Link>
                </div>
            </header>
        </>
    )
}