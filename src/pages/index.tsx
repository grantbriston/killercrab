import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const portfolioList = [
  {
    title: 'Man United',
    subTitle: 'The Story Of The Seven',
    vimeoID: '768293826',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 1,
  },
  {
    title: 'ITV',
    subTitle: 'World Cup 2022',
    vimeoID: '761297621',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 3,
  },
  {
    title: 'Homobloc',
    subTitle: 'Step Into The Light',
    vimeoID: '768056733',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 4,
  },
  {
    title: 'Fiture',
    subTitle: `Don't Fit In`,
    vimeoID: '755327583',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 9,
  },
  {
    title: 'SONOS',
    subTitle: 'FEEL MORE',
    vimeoID: '679725688',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 10,
  },
  {
    title: 'Expedia x UEFA',
    subTitle: 'GOALS OF DANI ALVES',
    vimeoID: '716364767',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 8,
  },
  // {
  //   title: 'EBAY',
  //   subTitle: 'DREAM TRANSFER',
  //   vimeoID: '696952280',
  //   otherLink: '',
  //   role: 'MUSIC, SOUND DESIGN & MIX',
  //   order: 6,
  // },
  {
    title: 'Kick It Out',
    subTitle: 'Football Charity',
    vimeoID: '731777269',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 14,
  },
  {
    title: 'Nissan',
    subTitle: 'Electrify The City',
    vimeoID: '642690354',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 6,
  },
  {
    title: 'Adidas',
    subTitle: 'Blue',
    vimeoID: '605486806',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 2,
  },
  {
    title: 'Adidas X End',
    subTitle: 'Superturf',
    vimeoID: '612658972',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 12,
  },
  {
    title: 'Nike',
    subTitle: 'precieux',
    vimeoID: '643003058',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 16,
  },
  {
    title: 'New Balance',
    subTitle: 'Things To Do In Flimby',
    vimeoID: '680473098',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 19,
  },
  {
    title: 'On Running',
    subTitle: 'Speed Runner',
    vimeoID: '695277950',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 7,
  },
  {
    title: 'Expedia x UEFA ',
    subTitle: 'The goals of',
    vimeoID: '719879359',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 13,
  },
  {
    title: 'Adidas',
    subTitle: 'UCL',
    vimeoID: '690561821',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 15,
  },
  // {
  //   title: "ballantine's",
  //   subTitle: 'shawna x',
  //   vimeoID: '645226616',
  //   otherLink: '',
  //   role: 'MUSIC, SOUND DESIGN & MIX',
  //   order: 12,
  // },
  {
    title: 'MAN CITY FC',
    subTitle: 'What would it mean?',
    vimeoID: '642998840',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 17,
  },
  {
    title: 'oi polloi',
    subTitle: 'lavenham',
    vimeoID: '671136968',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 18,
  },
  {
    title: 'Nike',
    subTitle: '110s Love affair',
    vimeoID: '489037777',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 11,
  },
  {
    title: 'mr bexx',
    subTitle: 'the new shoes',
    vimeoID: '638847678',
    otherLink: '',
    role: 'MUSIC, SOUND DESIGN & MIX',
    order: 5,
  },
];
const Index = () => {
  const [triggered, setTriggered] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const [shouldShow, setShouldShow] = useState(true);

  const onScroll = useCallback(() => {
    const { scrollY, innerWidth } = window;
    // get width and height of each slide
    setWindowWidth(innerWidth);
    const innerHeightOfItem = innerWidth / 1.7;
    const fullBodyLength = innerHeightOfItem * (portfolioList.length - 2);
    const scrolledSoMany = Math.ceil(scrollY / innerHeightOfItem);
    setShouldShow(scrollY > fullBodyLength);
    setTriggered(scrolledSoMany);
  }, []);

  useEffect(() => {
    const { innerWidth } = window;
    setWindowWidth(innerWidth);

    // add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = () => {
    let offsetReal = 0;
    let realTriggered = triggered;
    if (triggered === 0) {
      realTriggered = 1;
    }
    const ele = document?.getElementById(`${realTriggered}`);
    if (ele) {
      offsetReal = ele.offsetTop - 96;
      window.scrollTo({
        top: offsetReal,
        behavior: 'smooth',
      });
      setTriggered(triggered + 1);
    } else {
      offsetReal = 0;
      window.scrollTo({
        top: offsetReal,
        behavior: 'smooth',
      });
      setTriggered(1);
    }
  };

  const mapOutElements = () => {
    return portfolioList
      .sort((a, b) => (a.order > b.order ? 1 : -1))
      .map((v, i) => {
        const { ref, inView } = useInView({
          threshold: 0,
        });
        return (
          <div
            className={`${
              windowWidth > 700
                ? 'aspect-w-12 aspect-h-4'
                : 'aspect-w-16 aspect-h-12'
            } bg-white`}
            ref={ref}
            style={{
              overflow: 'hidden',
              maxWidth: 900,
              display: 'block',
              margin: 'auto',
              marginBottom: 20,
            }}
            id={`${i}`}
          >
            <div
              className={`absolute top-0 bg-white font-rubik text-black ${
                inView ? 'animate-fadeInUp' : ''
              } left-0 z-10 p-5 py-0 lg:text-3xl`}
              style={{
                bottom: 'auto !important',
                transform: 'translateY(-200px)',
                height: 50,
                overflow: 'hidden',
                paddingRight: '32%',
              }}
            >
              <div className="block truncate py-2 text-sm uppercase lg:text-2xl">
                <strong>{v.title}</strong> &nbsp;{' '}
                <i className="hidden animate-pulse lg:inline">{v.subTitle}</i>
              </div>
              <div
                style={{
                  position: 'absolute',
                  right: '34%',
                  top: 0,
                  width: '3%',
                  height: '130%',
                  transform: 'rotate(20deg)',
                  background: '#f9f9f9',
                }}
                className="bg-white-500"
              ></div>
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  width: '35%',
                  height: '100%',
                  background: '#f9f9f9',
                }}
                className="bg-white-500 text-center text-black"
              >
                <strong className="block py-2 text-xs lg:truncate lg:text-lg">
                  {v.role}
                </strong>
              </div>
            </div>
            <iframe
              src={`https://player.vimeo.com/video/${v.vimeoID}?color=0c88dd&title=0&byline=0&portrait=0&badge=0`}
              width="640"
              height="360"
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        );
      });
  };

  return (
    <Main
      meta={
        <Meta
          title="Killer Crab Men - Music, Sound Engineering and Mixing"
          description="Creative music, sound engineering and mixing for commercials, brands and creatives."
        />
      }
    >
      {/* <div className="text-bold z-10 w-full bg-slate-900 p-5 py-3 text-center text-white">
        <b className=" font-rubik text-xl ">
          <span className="text-yellow-400">MUSIC AND SOUND DESIGN</span> AS
          AWESOME AS YOUR IDEAS
        </b>
        <br />
        <span className="text-sm">
          <b>Don't believe us?</b> Check out our work below ↓
        </span>
      </div> */}

      {mapOutElements()}
      <button
        onClick={() => handleScroll()}
        style={{ zIndex: 800 }}
        className={`z-100 fixed bottom-10 right-8 h-12 w-12 rounded-full bg-pink-600 text-xl text-white drop-shadow-lg duration-300 hover:animate-bounce hover:bg-pink-700 hover:drop-shadow-2xl ${
          shouldShow ? 'hidden' : ''
        }`}
      >
        <small
          style={{
            fontSize: 14,
            display: 'block',
            textAlign: 'center',
            clear: 'both',
            marginBottom: -12,
          }}
        >
          next
        </small>
        ↓
      </button>
    </Main>
  );
};

export default Index;
