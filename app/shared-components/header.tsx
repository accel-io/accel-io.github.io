"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarCopy } from "../copy/navbar";
import { Html } from "next/document";


export default function Header() {
    const pathname = usePathname();
    const handleOpen = () => console.log("");
    const handleClose = () => console.log("");
    return (
        <header className="header">
            <nav className="container position-absolute top-0 start-0 end-0" id="navbar">
                <div className="navbar navbar-expand-lg navbar-dark mb-3 mt-1 justify-content-between px-lg-4" style={{ zIndex: "1;" }}>

                    <a className="navbar-brand  text-large mx-lg-0" style={{ fontFamily: "'GoodTimes',sans-serif" }} href="./index.html"
                        dangerouslySetInnerHTML={{ __html: navbarCopy.title }}></a>
                    <div id="navbarToggleMain" className="light-text justify-content-end text-center">
                        <a target="_self">
                            <button className="box btn bg-blue text-oxford text-bold mt-lg-0 mt-3"
                                style={{ paddingInline: "3rem !important;" }}>{navbarCopy.button.name}</button>
                        </a>
                    </div>

                </div>
            </nav>
        </header>
    );
}