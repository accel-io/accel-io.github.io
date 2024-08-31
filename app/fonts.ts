import localFont from 'next/font/local'

export const Helvetica_Neue = localFont({
    src: [
        {
            path: '../public/fonts/helveticaneueblack-webfont.woff2',
            weight: '900',
            style: 'normal',
        }
    ],
})

export const GoodTimes = localFont({
    src: [
        {
            path: '../public/fonts/goodtimesrg.woff',
            weight: 'normal',
            style: 'normal',
        },
    ],
})
