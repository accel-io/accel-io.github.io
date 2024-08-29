"use client"
import React, { useCallback, useContext, useEffect, useState } from 'react'
import scss from './OffCanvas.module.scss'
import { AppContext } from './Context'
import { OffcanvasProps } from './Props'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navbarCopy } from '@/app/copy/navbar'




export function Offcanvas({

    position = 'right',
    backdrop = true,
    allowClickAway = true,
    allowEsc = true,
    allowScroll = true,
    className = 'simple-offcanvas',
    styles = {},
    children
}: OffcanvasProps) {
    const { handleClose, isOpen, randomId } = useContext(AppContext)
    const router = usePathname();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        if (router) {
            setCurrentPath(router);
        }
    }, [router]);
    const onClickOutside = useCallback(() => {
        if (!allowClickAway) return

        if (isOpen) {
            if (handleClose) handleClose()
        }
    }, [allowClickAway, isOpen, handleClose])

    const onEscKey = useCallback(
        (event: KeyboardEvent) => {
            if (!allowEsc) return

            if (event.key === 'Escape') {
                if (isOpen) {
                    if (handleClose) handleClose()
                }
            }
        },
        [allowEsc, isOpen, handleClose]
    )

    useEffect(() => {
        document.addEventListener('keydown', onEscKey, false)
        return () => document.removeEventListener('keydown', onEscKey)
    }, [onEscKey])



    useEffect(() => {
        if (!allowScroll) {
            if (isOpen) document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen, allowScroll])

    return (
        <>
            <div
                id={`offcanvas_${randomId}`}
                className={`${scss.offcanvas} ${scss[position]} ${isOpen ? scss.show : ''
                    } ${className}  bg-neutral-900`}
                tabIndex={-1}
                style={styles}
                role="dialog"
                aria-labelledby={scss.title}
                aria-modal="true"
                onClick={(event) => event.stopPropagation()}
              
            >
                <div className={scss.header}>

                    <button
                        className={scss.close}
                        onClick={handleClose}
                        type="button"
                        tabIndex={0}
                        aria-label="Close"
                    />
                </div>
                <div className={scss.body}>
                    <ul className=" px-4 list-group">
                      
                        {/* {navbarCopy['navbar-links'].map((link, index) => (
                            <li key={index} className="nav-item my-3 list-group">
                                <Link className={`lg:text-2xl text-lg font-normal leading-6 text-white text-decoration-none ${currentPath === link.url ? 'gradient-text' : ''}`}
                                    href={link.url} target={link.target} onClick={handleClose}>{link.name}</Link>
                            </li>
                        ))
                        } */}

                    </ul>
                    <div className="flex-1 justify-start flex mt-5" >
                        <a href={navbarCopy.button.url} target={navbarCopy.button.target}
                            className=" box btn bg-blue text-oxford btn-padding fw-bold text-xsmal text-decoration-none text-dark fw-bold w-100 d-block text-center">
                            {navbarCopy.button.name}
                        </a>
                    </div>
                </div>
            </div>
            {backdrop && (
                <div onClick={handleClose} className={`${scss.backdrop} ${isOpen ? scss.show : ''}`} />
            )}
        </>
    )
}