import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [hasShownLoader, setHasShownLoader] = useState(true);
  const handleMenuTrigger = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useEffect(() => {
    if (router.asPath === '/') {
      setHasShownLoader(false);
      setTimeout(() => {
        setHasShownLoader(true);
      }, 1000);
    }
  }, [router]);

  return (
    <div className="w-full text-gray-700 antialiased">
      {props.meta}
      {!hasShownLoader ? (
        <div className="fixed top-0 z-20 h-full w-full flex-auto animate-splash items-center justify-center justify-items-center bg-white object-center text-center">
          <img
            src={`${router.basePath}/assets/images/biglogo.png`}
            style={{
              position: 'absolute',
              margin: 'auto',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </div>
      ) : (
        ''
      )}

      <nav
        className="fixed top-0 flex w-full flex-wrap items-center justify-between bg-white p-6"
        style={{ zIndex: 900 }}
      >
        <div className="mr-6 flex shrink-0 items-center">
          <div className="mr-2 h-12 w-60 fill-current ">
            <Link href="/">
              <img
                src={`${router.basePath}/assets/images/logoicon.png`}
                style={{ cursor: 'pointer', width: 74 }}
              />
            </Link>
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center rounded border border-teal-400 px-3 py-2 text-black hover:border-white"
            onClick={() => {
              handleMenuTrigger();
            }}
          >
            {!menuIsOpen ? (
              <svg
                className="h-3 w-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            ) : (
              'X'
            )}
          </button>
        </div>
        <div
          className={`block lg:flex lg:w-auto lg:items-center ${
            !menuIsOpen ? 'float-right hidden' : ''
          } lg:block ${menuIsOpen ? 'w-full' : ''}`}
        >
          <div className="font-rubik text-sm font-bold lg:grow">
            <Link href="/">
              <div
                className="mt-4 mr-8 block text-lg text-black hover:text-slate-600 lg:mt-0  lg:inline-block"
                style={{ cursor: 'pointer' }}
              >
                OUR WORK
              </div>
            </Link>
            <Link href="/about">
              <div
                className="mt-4 mr-8 block text-lg text-black hover:text-slate-600  lg:mt-0 lg:inline-block"
                style={{ cursor: 'pointer' }}
              >
                ABOUT
              </div>
            </Link>
            <Link href="/contact">
              <div
                className="mt-4 block text-lg text-black hover:text-slate-600 lg:mt-0 lg:inline-block  "
                style={{ cursor: 'pointer' }}
              >
                CONTACT
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="content mt-20 py-3 text-xl">{props.children}</div>

      <div className="border-t border-gray-300 p-5 text-center text-sm">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-slate-600 sm:text-center">
            © {new Date().getFullYear()} {AppConfig.title}. All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a
              href="https://www.facebook.com/killercrabmen/"
              className="text-slate-600"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/killercrabmen/?hl=en"
              className="text-slate-600"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://vimeo.com/user129128654"
              className="text-slate-600"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 460 500"
              >
                <path d="M476.9,114c-5-23.39-17.51-38.78-40.61-46.27s-64.92-4.5-94.12,16.79c-26.79,19.51-46.26,54.42-54,78.28a4,4,0,0,0,5.13,5c10.77-3.8,21.72-7.1,34-6.45,15,.8,24.51,12,24.91,25.29.3,9.79-.2,18.69-3.6,27.68C337.87,243,321,270.78,301.06,295.07a72.49,72.49,0,0,1-10,9.89c-10.21,8.29-18.81,6.1-25.41-5.2-5.4-9.29-9-18.88-12.2-29.08-12.4-39.67-16.81-80.84-23.81-121.52-3.3-19.48-7-39.77-18-56.86-11.6-17.79-28.61-24.58-50-22-14.7,1.8-36.91,17.49-47.81,26.39,0,0-56,46.87-81.82,71.35l21.2,27s17.91-12.49,27.51-18.29c5.7-3.39,12.4-4.09,17.2.2,4.51,3.9,9.61,9,12.31,14.1,5.7,10.69,11.2,21.88,14.7,33.37,13.2,44.27,25.51,88.64,37.81,133.22,6.3,22.78,13.9,44.17,28,63.55,19.31,26.59,39.61,32.68,70.92,21.49,25.41-9.09,46.61-26.18,66-43.87,33.11-30.18,59.12-65.36,85.52-101.14C433.59,270,450.49,242,464.59,210.72,478.5,179.74,484,147.26,476.9,114Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Main };
