import Link from "next/link";
import { footerCopy } from "../copy/footer";
import Image from "next/image";
import { navbarCopy } from "../copy/navbar";
import { GoodTimes } from '@/app/fonts'

export default function Footer() {
    return (
        <footer className="container" id="footer">
            <div className="row white-border bt-half p-lg-5 mb-5">
                <div className="row mt-high">
                    <div className="col-lg-6 d-flex flex-column justify-content-between">
                        <Link href="#" className="mb-5 text-decoration-none">
                            <h3 className={`text-xlarge text-light ${GoodTimes.className}`} dangerouslySetInnerHTML={{ __html: navbarCopy.title }}></h3>
                        </Link>
                        {/* <!-- Social Links --> */}
                        <div className="my-4">
                            <ul className="navbar-nav footer-social list-group-horizontal flex-wrap">
                                {
                                    footerCopy.social_links.map((item, index) => {
                                        return (
                                            <li className="p-social my-2" key={index}>
                                                <Link href={item.url} target={item.target} data-query="footer.social-links.x._"
                                                    data-attribute="href" data-target="target"><img src={item.icon} /></Link>
                                            </li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 row justify-content-end">
                        <div className="col-lg-4 col-6">
                            <ul className="list-unstyled">
                                <li className="mb-4">
                                    <h3 className="text-medium">Quick Links</h3>
                                </li>
                                {
                                    footerCopy.quick_links.map((item, index) => {
                                        return (<li key={index}><Link href={item.url} className="nav-link text-small text-thin my-2">{item.name}</Link>
                                        </li>)
                                    })
                                }

                            </ul>
                        </div>
                        <div className="col-lg-4 col-6">
                            <ul className="list-unstyled">
                                <li className="mb-4">
                                    <h3 className="text-medium">Legal</h3>
                                </li>

                                {
                                    footerCopy.legal.map((item, index) => {
                                        return (
                                            <li key={index}> <Link href={item.url} target={item.target} className="nav-link text-small text-thin my-2">{item.name}</Link></li>
                                        )
                                    })
                                }


                            </ul>
                        </div>

                    </div>
                </div>

                <div className="my-5 text-thin text-small" data-query="footer.copyright"> <span></span>
                </div>
            </div>
        </footer >
    );
}