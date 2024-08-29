"use client"
import Image from "next/image";
import { homeCopy } from "@/app/copy/home";
import { useEffect } from "react";
export default function Sections() {
  useEffect(() => {
    const items = document.querySelectorAll('.appear2');
    const itemsAppear = document.querySelectorAll('.appear3');
    const itemsAppears = document.querySelectorAll('.appear4');

    const active = function (entries: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview2');
        } else {
          entry.target.classList.remove('inview2');
        }
      });
    }
    const io2 = new IntersectionObserver(active);
    for (let i = 0; i < items.length; i++) {
      io2.observe(items[i]);
    }


    // appear
    const active2 = function (entries: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview2');
        } else {
          entry.target.classList.remove('inview2');
        }
      });
    }
    const io3 = new IntersectionObserver(active2);
    for (let i = 0; i < itemsAppear.length; i++) {
      io2.observe(itemsAppear[i]);
    }

    // appear4
    const active3 = function (entries: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview2');
        } else {
          entry.target.classList.remove('inview2');
        }
      });
    }
    const io4 = new IntersectionObserver(active3);
    for (let i = 0; i < itemsAppears.length; i++) {
      io2.observe(itemsAppears[i]);
    }
    var prevScrollPosition = 0;
    var op = 1.0;
    var lastScrollTime = 0;
    var throttleDelay = 10;
    document.addEventListener('scroll', () => {
      const now = Date.now();

      if (now - lastScrollTime < throttleDelay) {
        return;
      }

      lastScrollTime = now;

      const scrollPosition = window.scrollY;
      const element = document.getElementById('tunnel-header');
      if (element) {
        if (scrollPosition > 1000) {
          op = 0.1;
          element.style.opacity = op.toString();
          return;
        } else if (scrollPosition == 0) {
          op = 1;
        }

        if (prevScrollPosition < scrollPosition) {
          op -= 0.02;
          if (op < 0.1) {
            op = 0.1;
          }
        } else if (prevScrollPosition > scrollPosition) {
          op += 0.01;
          if (op > 1) {
            op = 1;
          }
        }

        prevScrollPosition = scrollPosition;
        element.style.opacity = op.toString();
      }

    });
  }, [])
  return (
    <>
      <img src="/img/bg-tunnel-header.png" alt="THE ACEL TUNNEL" id="tunnel-header" />
      <div id="seg-0" className="row position-relative" style={{ marginInline: "-3rem;" }}>

        <div className="ps-5 position-relative overflow-hidden mt-high w-100 container header-cont">
          <div className="px-3 px-lg-0 w-lg-50">
            <div className=" text-uppercase font-goodtimes text-xlarge text-narrow-height mt-high">
              <h1 className="text-uppercase font-goodtimes text-xlarge text-narrow-height appear2"
                dangerouslySetInnerHTML={{ __html: homeCopy.header.title }}></h1>
            </div>
            <div className="text-thin text-small my-5 text-narrow-height w-70 text-light text-justify appear2 home-header-subtitle">{homeCopy.header.subtitle}
            </div>
            {/* onclick="scrollToContent('our-mission')" */}
            <a data-query="home.header.button._" data-attribute="href" className="appear2"
              data-target="target" target="_self" href="#">
              <button
                className="box btn font-goodtimes text-medium text-thin bg-blue btn-xpadding mb-high text-oxford">{homeCopy.header.button.name}</button>
            </a>
          </div>
        </div>
      </div>
      <div className="container ">
        {/* <!-- OUR MISSION --> */}
        <div id="our-mission" className="text-center mb-high mt-high">
          <h2 className="font-goodtimes appear2" data-query="home.segment-1.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_1.title }}></h2>
          <p className="text-small mt-5 impact-container-1 text-thin text-n100 mx-auto appear2 home-segment-1-description"
            data-query="home.segment-1.description">
            {homeCopy.segment_1.description}
          </p>
        </div>

        {/* <!-- OUR TECHNOLOGY --> */}
        <div id="seg-1" className="row white-border bb-half">
          <div>
            <h2 className="font-goodtimes text-large text-narrow-height text-center mt-high text-uppercase appear2 home-segment-2-title"
              data-query="home.segment-2.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_2.title }}>
            </h2>
            <p className="text-thin text-small text-center mt-5 impact-container-1 mx-auto appear2 home-segment-2-subtitle"
              data-query="home.segment-2.subtitle">{homeCopy.segment_2.subtitle}</p>
          </div>
          <div className="row p-0 m-0 mt-high">
            <div
              className="col-lg-4 col-12 white-border text-center p-5 bl-half bb-half br-half position-relative overflow-hidden hover-bb">
              <div className="image-wrapper mx-auto">
                <img src="./img/icon-coil-gun.svg" alt="THE SILICON MACHINES" style={{ height: "180px;" }}
                  className="original" />
                <img src="./img/icon-coil-gun-2.svg" alt="THE SILICON MACHINES" style={{ height: "180px;" }}
                  className="hover" />
              </div>
              <div>
                <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3 mt-4 appear4"
                  data-query="home.segment-2.cards.0.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_2.cards[0].title }}>
                </h5>
              </div>
              <div style={{ height: "12rem;" }}>
                <p className="text-thin text-n300 text-small text-narrow-height mt-4 appear4"
                  data-query="home.segment-2.cards.0.description">{homeCopy.segment_2.cards[0].description}</p>
              </div>
              <div className="bb-gradient bg-blue-gradient "></div>
            </div>
            <div
              className="col-lg-4  col-12  white-border text-center p-5 bl-half bb-half br-half position-relative overflow-hidden hover-bb ">

              <div className="image-wrapper mx-auto">
                <img src="./img/icon-emf.svg" alt="EMF FIELDS" style={{ height: "180px;" }} className="original" />
                <img src="./img/icon-emf-2.svg" alt="EMF FIELDS" style={{ height: "180px;" }} className="hover" />
              </div>

              <div>
                <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3 mt-4 appear4"
                  data-query="home.segment-2.cards.1.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_2.cards[1].title }}>
                </h5>
              </div>
              <div style={{ height: "12rem;" }}>
                <p className="text-thin text-n300 text-small text-narrow-height mt-4 appear4"
                  data-query="home.segment-2.cards.1.description">{homeCopy.segment_2.cards[1].description}</p>
              </div>

              <div className="bb-gradient bg-blue-gradient"></div>
            </div>
            <div
              className="col-lg-4  col-12  white-border text-center p-5 bl-half bb-half br-half position-relative overflow-hidden  hover-bb">
              <div className="image-wrapper mx-auto">
                <img src="./img/icon-vacuum.svg" alt="VACUUM AND PLASMA SHIELD" style={{ height: "180px;" }}
                  className="original" />
                <img src="./img/icon-vacuum-2.svg" alt="VACUUM AND PLASMA SHIELD" style={{ height: "180px;" }}
                  className="hover" />
              </div>

              <div>
                <h5 className="text-uppercase font-goodtimes text-medium text-narrow-height my-3 mt-4 appear4"
                  data-query="home.segment-2.cards.2.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_2.cards[2].title }}>
                </h5>
              </div>
              <div style={{ height: "12rem;" }}>
                <p className="text-thin text-n300 text-small text-narrow-height mt-4 appear4"
                  data-query="home.segment-2.cards.2.description">{homeCopy.segment_2.cards[2].description}
                </p>
              </div>

              <div className="bb-gradient bg-blue-gradient"></div>
            </div>
          </div>

        </div>


        <div className="row text-center">
          <div className="col-12 white-border bt-half bb-half p-lg-5 d-flex justify-content-center"
            id="bg-dots-tunnel">
            <h3 className="text-medium font-goodtimes mt-high mb-high w-70 text-thin appear2"
              style={{ lineHeight: "1.6;" }} data-query="home.segment-3.text" dangerouslySetInnerHTML={{ __html: homeCopy.segment_3.text }}>
            </h3>
          </div>
        </div>

        {/* <!-- ECONOMIC IMPACT --> */}
        <div id="seg-2" className="row white-border bt-half bb-half position-relative overflow-hidden">
          <div className="p-5 m-0">
            <h2 className="font-goodtimes text-xlarge text-narrow-height text-center mt-high appear2"
              data-query="home.segment-4.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_4.title }}>
            </h2>
          </div>
          <div className="row m-0 align-center justify-content-center pb-3 impact-container">
            {/* <!-- 1 --> */}
            <div className="col-12 col-lg-4 px-4 mt-5">
              <h4 className="font-goodtimes text-medium  text-center appear4"
                data-query="home.segment-4.items.0.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_4.items[0].title }}>
              </h4>
              <p className="text-xsmall text-thin text-center text-n300 mt-4 appear4"
                data-query="home.segment-4.items.0.description">{homeCopy.segment_4.items[0].description}</p>
            </div>
            {/* <!-- 2 --> */}
            <div className=" col-12 col-lg-4 px-4 mt-5">
              <h4 className="font-goodtimes text-medium  text-center appear4"
                data-query="home.segment-4.items.1.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_4.items[1].title }}>
              </h4>
              <p className="text-xsmall text-thin text-center text-n300 mt-4 appear4"
                data-query="home.segment-4.items.1.description">{homeCopy.segment_4.items[1].description}</p>
            </div>
            {/* <!-- 3 --> */}
            <div className=" col-12 col-lg-4 px-4 mt-5">
              <h4 className="font-goodtimes text-medium  text-center appear4"
                data-query="home.segment-4.items.2.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_4.items[2].title }}>
              </h4>
              <p className="text-xsmall text-thin text-center text-n300 mt-4 appear4"
                data-query="home.segment-4.items.2.description">{homeCopy.segment_4.items[2].description}</p>
            </div>

          </div>
          <div className="bg-blue-gradient br-gradient-medium"></div>
          <div className="bg-blue-gradient tl-gradient-medium"></div>
          {/* <!-- TOP RIGHT SQUARES --> */}
          <div id="right-sq-main">
            <div className="small-square white-border"></div>
            <div className="big-square white-border"></div>
            <div className="small-square-r small-square white-border"></div>
          </div>
          {/* <!-- BOTTOM LEFT SQUARES --> */}
          <div className="position-absolute bottom-0 start-0">
            <div className="big-square white-border position-absolute bottom-0 start-0"></div>
            <div className="small-square white-border position-absolute bottom-0 start-0"></div>
          </div>
        </div>

        {/* <!-- PROJECT PHASES  --> */}
        <div id="seg-3" style={{
          marginRight: "calc(-.5* var(--bs-gutter-x));",
          marginLeft: "calc(-.5* var(--bs-gutter-x));"
        }}
          className="white-border bb-half p-5 bt-half position-relative text-center overflow-hidden">
          <img src="./img/bg-phases.svg" className="w-lg-75" id="bg-phases" alt="Tunnel" />
          <h2 className="font-goodtimes mt-5 appear2" data-query="home.segment-5.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_5.title }}></h2>
          <p className="text-xsmall text-thin text-center text-n300 mt-4 w-lg-50 mx-auto appear2 home-segment-5-subtitle"
            data-query="home.segment-5.subtitle" dangerouslySetInnerHTML={{ __html: homeCopy.segment_5.subtitle }}></p>
          <div className="mx-auto px-md-5" >
            <div className="row justify-content-between position-relative mt-high mb-lg-high">
              {/* <!-- 1 --> */}
              <div className="col-lg-3 col-12 ms-lg-10">
                <h4 className="font-goodtimes text-medium text-start appear4"
                  data-query="home.segment-5.items.0.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_5.items[0].title }}>
                </h4>
                <p className="text-xsmall text-thin text-n300 mt-4 text-start w-lg-75 appear4"
                  data-query="home.segment-5.items.0.description">{homeCopy.segment_5.items[0].description}</p>
              </div>
              {/* <!-- 2 --> */}
              <div className="col-lg-3 col-12 ">
                <h4 className="font-goodtimes text-medium text-start appear4"
                  style={{ width: "max-content;" }}
                  data-query="home.segment-5.items.1.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_5.items[1].title }}>
                </h4>
                <p className="text-xsmall text-thin text-n300 mt-4 text-start w-lg-75 appear4"
                  data-query="home.segment-5.items.1.description">
                  {homeCopy.segment_5.items[1].description}</p>
              </div>
            </div>
            <div className="row justify-content-between mt-lg-high">
              {/* <!-- 3 --> */}
              <div className="col-lg-3 col-12 ms-lg-10">
                <h4 className="font-goodtimes text-medium text-start appear4"
                  data-query="home.segment-5.items.2.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_5.items[2].title }}>
                </h4>
                <p className="text-xsmall text-thin text-n300 mt-4 text-start w-lg-75 appear4"
                  data-query="home.segment-5.items.2.description">{homeCopy.segment_5.items[2].description}</p>
              </div>
              {/* <!-- 4 --> */}
              <div className="col-lg-3 col-12 ">
                <h4 className="font-goodtimes text-medium text-start appear4" style={{ width: "max-content;" }}
                  data-query="home.segment-5.items.3.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_5.items[3].title }}>
                </h4>
                <p className="text-xsmall text-thin text-n300 mt-4 text-start w-lg-75 appear4"
                  data-query="home.segment-5.items.3.description">{homeCopy.segment_5.items[3].description}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-gradient tl-gradient-medium"></div>
          {/* <!-- TOP RIGHT SQUARES --> */}
          <div className="position-absolute top-0 end-0" >
            <div className="big-square white-border position-absolute top-0 end-0"></div>
            <div className="small-square white-border position-absolute top-0 end-0"></div>
          </div>
        </div>

        {/* <!-- FUTURE GOALS --> */}
        <div className="row position-relative overflow-hidden">

          <div className="col-md-8 d-flex flex-column justify-content-center px-5 white-border br-half bb-half bt-half position-relative overflow-hidden">
            <div className="pt-5 pt-lg-0">
              <div className=" text-uppercase font-goodtimes text-xxlarge text-narrow-height ">
                <h1 className="text-uppercase font-goodtimes text-xxlarge text-narrow-height appear2"
                  data-query="home.segment-6.title" dangerouslySetInnerHTML={{ __html: homeCopy.segment_6.title }}>
                </h1>
              </div>
              <div className="text-thin text-medium my-5 text-narrow-height text-n100 appear2"
                data-query="home.segment-6.subtitle">
                {homeCopy.segment_6.subtitle}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div id="future-goals-cont"
                className="col-12 white-border bl-half bb-half p-0 overflow-hidden bt-half position-relative overflow-hidden">
                <img src="./img/future-goals.png" id="future-goals-img" alt="Future Goals" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}