import React from 'react';
import { HTMLElementProps } from '@leafygreen-ui/lib';

type ProductIconProps = HTMLElementProps<'svg'> & {
  active: boolean;
};

export function AtlasIcon({ active, ...rest }: ProductIconProps) {
  return (
    <svg {...rest} width="18px" height="18px" viewBox="0 0 18 18">
      <defs>
        <linearGradient
          x1="28.515977%"
          y1="105.584466%"
          x2="79.424121%"
          y2="-9.67572816%"
          id="linearGradient-1"
        >
          <stop stopColor="#0D6149" offset="0%"></stop>
          <stop stopColor="#03AA4F" offset="36.97%"></stop>
          <stop stopColor="#00D057" offset="64.96%"></stop>
          <stop stopColor="#5FD891" offset="91.18%"></stop>
          <stop stopColor="#80DBA5" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="82.3061787%"
          y1="109.629126%"
          x2="7.44162975%"
          y2="-16.1830097%"
          id="linearGradient-2"
        >
          <stop stopColor="#0D6149" offset="0%"></stop>
          <stop stopColor="#03AA4F" offset="36.97%"></stop>
          <stop stopColor="#00D057" offset="64.96%"></stop>
          <stop stopColor="#5FD891" offset="91.18%"></stop>
          <stop stopColor="#80DBA5" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="2.43172043%"
          y1="82.3204029%"
          x2="114.608065%"
          y2="-3.16314823%"
          id="linearGradient-3"
        >
          <stop stopColor="#0D6149" offset="0%"></stop>
          <stop stopColor="#03AA4F" offset="36.97%"></stop>
          <stop stopColor="#00D057" offset="64.96%"></stop>
          <stop stopColor="#5FD891" offset="91.18%"></stop>
          <stop stopColor="#80DBA5" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="105.040323%"
          y1="85.5592964%"
          x2="-16.483871%"
          y2="-1.59363401%"
          id="linearGradient-4"
        >
          <stop stopColor="#0D6149" offset="0%"></stop>
          <stop stopColor="#03AA4F" offset="36.97%"></stop>
          <stop stopColor="#00D057" offset="64.96%"></stop>
          <stop stopColor="#5FD891" offset="91.18%"></stop>
          <stop stopColor="#80DBA5" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(1.000000, 1.000000)" fillRule="nonzero">
          <path
            d="M10.5142857,9.63809524 C12.2666667,8.45714286 14.1333333,8.15238095 15.6952381,8.19047619 C15.6952381,8.07619048 15.6952381,7.96190476 15.6952381,7.84761905 C15.6952381,6.36190476 15.2761905,4.99047619 14.552381,3.80952381 C13.447619,3.92380952 12.2666667,4.22857143 11.1238095,5.02857143 C9.67619048,6.01904762 8.87619048,7.35238095 8.45714286,8.34285714 L8.45714286,11.6571429 C8.99047619,10.9714286 9.63809524,10.247619 10.5142857,9.63809524 Z"
            fill={active ? 'url(#linearGradient-1)' : 'currentColor'}
          ></path>
          <path
            d="M8.45714286,6.13333333 C8.95238095,5.44761905 9.63809524,4.72380952 10.5142857,4.11428571 C11.6190476,3.35238095 12.7238095,2.97142857 13.8285714,2.78095238 C12.5333333,1.25714286 10.6285714,0.228571429 8.4952381,0.0761904762 L8.4952381,6.13333333 L8.45714286,6.13333333 Z"
            fill={active ? '#00804B' : 'currentColor'}
          ></path>
          <path
            d="M5.33333333,9.63809524 C6.20952381,10.247619 6.85714286,10.9333333 7.39047619,11.6571429 L7.39047619,8.34285714 C6.97142857,7.35238095 6.17142857,6.01904762 4.72380952,5.02857143 C3.58095238,4.26666667 2.4,3.92380952 1.2952381,3.80952381 C0.571428571,4.99047619 0.152380952,6.36190476 0.152380952,7.84761905 C0.152380952,7.96190476 0.152380952,8.07619048 0.152380952,8.19047619 C1.71428571,8.15238095 3.58095238,8.45714286 5.33333333,9.63809524 Z"
            fill={active ? 'url(#linearGradient-2)' : 'currentColor'}
          ></path>
          <path
            d="M11.1238095,10.552381 C9.67619048,11.5428571 8.87619048,12.8761905 8.45714286,13.8666667 L8.45714286,15.6571429 C12,15.4285714 14.8952381,12.7619048 15.5428571,9.33333333 C14.2095238,9.2952381 12.6095238,9.52380952 11.1238095,10.552381 Z"
            fill={active ? 'url(#linearGradient-3)' : 'currentColor'}
          ></path>
          <path
            d="M7.39047619,13.8666667 C6.97142857,12.8761905 6.17142857,11.5428571 4.72380952,10.552381 C3.23809524,9.52380952 1.63809524,9.2952381 0.304761905,9.33333333 C0.952380952,12.7619048 3.84761905,15.3904762 7.39047619,15.6571429 L7.39047619,13.8666667 Z"
            fill={active ? 'url(#linearGradient-4)' : 'currentColor'}
          ></path>
          <path
            d="M5.33333333,4.15238095 C6.20952381,4.76190476 6.85714286,5.44761905 7.39047619,6.17142857 L7.39047619,0.152380952 C5.25714286,0.304761905 3.35238095,1.2952381 2.05714286,2.85714286 C3.12380952,3.00952381 4.26666667,3.39047619 5.33333333,4.15238095 Z"
            fill={active ? '#00804B' : 'currentColor'}
          ></path>
        </g>
      </g>
    </svg>
  );
}

export function RealmIcon({ active, ...rest }: ProductIconProps) {
  return (
    <svg {...rest} width="18px" height="18px" viewBox="0 0 18 18">
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="12.48"
          y1="13.26"
          x2="13.48"
          y2="6.77"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#af478b" />
          <stop offset="0.22" stopColor="#c66191" />
          <stop offset="0.53" stopColor="#ec8c9a" />
          <stop offset="0.66" stopColor="#ee99a2" />
          <stop offset="0.88" stopColor="#f3bcb6" />
          <stop offset="1" stopColor="#f6d0c2" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="8.77"
          y1="17.71"
          x2="8.87"
          y2="10.47"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-3"
          x1="4.19"
          y1="11.97"
          x2="5.2"
          y2="5.49"
          xlinkHref="#linear-gradient"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            d="M7.83,11.11l.78.28a12.41,12.41,0,0,0,5.31,1,9.83,9.83,0,0,0,3.78-1.08A9.12,9.12,0,0,0,18,9V8.67A11.61,11.61,0,0,0,7.83,11.11Z"
            fill={active ? 'url(#linear-gradient)' : 'currentColor'}
          />
          <path
            d="M17.07,13a10.55,10.55,0,0,1-3.07.69,13.74,13.74,0,0,1-5.82-1.11,10.45,10.45,0,0,0-5.82-.86,8.43,8.43,0,0,0-1.75.54A9,9,0,0,0,17.07,13Z"
            fill={active ? 'url(#linear-gradient-2)' : 'currentColor'}
          />
          <path
            d="M4.44,5.34a9.12,9.12,0,0,1,6.3,2.6,12.91,12.91,0,0,1,7.11-.59A9,9,0,0,0,.42,6.27,9,9,0,0,1,4.44,5.34Z"
            fill={active ? '#6e60f2' : 'currentColor'}
          />
          <path
            d="M.07,7.93A8.76,8.76,0,0,0,0,9,9.47,9.47,0,0,0,.23,11a10,10,0,0,1,1.89-.57,9.56,9.56,0,0,1,4.31.21A13.19,13.19,0,0,1,9.48,8.5,7.83,7.83,0,0,0,4.43,6.6,7.77,7.77,0,0,0,.07,7.93Z"
            fill={active ? 'url(#linear-gradient-3)' : 'currentColor'}
          />
        </g>
      </g>
    </svg>
  );
}

export function ChartsIcon({ active, ...rest }: ProductIconProps) {
  return (
    <svg {...rest} width="18px" height="18px" viewBox="0 0 18 18">
      <defs>
        <linearGradient
          x1="27.1067278%"
          y1="70.8320287%"
          x2="97.8314985%"
          y2="26.6076705%"
          id="linearGradient-1"
        >
          <stop stopColor="#007DAE" offset="0%"></stop>
          <stop stopColor="#78CFDD" offset="99.15%"></stop>
        </linearGradient>
        <linearGradient
          x1="57.7048969%"
          y1="72.0328462%"
          x2="41.5582474%"
          y2="26.7463253%"
          id="linearGradient-2"
        >
          <stop stopColor="#2AA0C7" offset="16.69%"></stop>
          <stop stopColor="#B5E7CA" offset="73.54%"></stop>
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(1.000000, 1.000000)" fillRule="nonzero">
          <path
            d="M10.0190476,12.647619 C9.82857143,12.8380952 9.52380952,12.8380952 9.33333333,12.6857143 L6.74285714,10.7809524 L3.2,14.1714286 C4.4952381,15.1619048 6.13333333,15.7333333 7.88571429,15.7333333 C12.1904762,15.7333333 15.6571429,12.2666667 15.6571429,7.96190476 C15.6571429,7.73333333 15.6571429,7.5047619 15.6190476,7.27619048 L10.0190476,12.647619 Z"
            fill={active ? 'url(#linearGradient-1)' : 'currentColor'}
          ></path>
          <path
            d="M7.00952381,9.63809524 L9.6,11.5428571 L15.352381,6.01904762 C15.047619,4.87619048 14.4761905,3.80952381 13.7142857,2.93333333 L9.56190476,6.8952381 C9.37142857,7.08571429 9.1047619,7.08571429 8.91428571,6.97142857 C8.91428571,6.97142857 8.87619048,6.97142857 8.87619048,6.93333333 C8.8,6.8952381 7.12380952,5.63809524 6.36190476,5.06666667 L0.571428571,10.6285714 C0.952380952,11.6952381 1.56190476,12.647619 2.36190476,13.447619 L6.32380952,9.67619048 C6.51428571,9.48571429 6.81904762,9.48571429 7.00952381,9.63809524 Z"
            fill={active ? 'url(#linearGradient-2)' : 'currentColor'}
          ></path>
          <path
            d="M5.94285714,3.96190476 C6.13333333,3.77142857 6.43809524,3.77142857 6.62857143,3.92380952 L9.18095238,5.79047619 L12.9904762,2.13333333 C11.6190476,0.914285714 9.82857143,0.19047619 7.88571429,0.19047619 C3.58095238,0.19047619 0.114285714,3.65714286 0.114285714,7.96190476 C0.114285714,8.45714286 0.152380952,8.95238095 0.266666667,9.40952381 L5.94285714,3.96190476 Z"
            fill={active ? '#007DAE' : 'currentColor'}
          ></path>
        </g>
      </g>
    </svg>
  );
}

export function ChartsInactive(props: HTMLElementProps<'svg'>) {
  return (
    <svg {...props} width="18px" height="18px" viewBox="0 0 18 18">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(1.000000, 1.000000)" fill="currentColor">
          <path d="M15.6571429,7.12380952 C15.6952381,7.35238095 15.6952381,7.58095238 15.6952381,7.80952381 C15.6952381,12.0380952 12.2666667,15.4666667 8.03809524,15.4666667 C6.32380952,15.4666667 4.72380952,14.8571429 3.42857143,13.9047619 L3.42857143,13.9047619 L6.93333333,10.552381 L9.48571429,12.4571429 C9.67619048,12.6095238 9.98095238,12.6095238 10.1714286,12.4190476 L10.1714286,12.4190476 Z M13.8285714,2.85714286 C14.5904762,3.73333333 15.1238095,4.76190476 15.4285714,5.9047619 L15.4285714,5.9047619 L9.75238095,11.352381 L7.2,9.44761905 C6.97142857,9.2952381 6.7047619,9.2952381 6.51428571,9.52380952 L6.51428571,9.52380952 L2.62857143,13.2571429 C1.82857143,12.4952381 1.21904762,11.5428571 0.838095238,10.4761905 L0.838095238,10.4761905 L6.55238095,4.99047619 C7.31428571,5.52380952 8.99047619,6.78095238 9.06666667,6.81904762 C9.06666667,6.85714286 9.1047619,6.85714286 9.1047619,6.85714286 C9.2952381,6.97142857 9.56190476,6.93333333 9.75238095,6.78095238 L9.75238095,6.78095238 Z M8,0.19047619 C9.94285714,0.19047619 11.7333333,0.914285714 13.0666667,2.0952381 L13.0666667,2.0952381 L9.33333333,5.67619048 L6.81904762,3.80952381 C6.62857143,3.65714286 6.32380952,3.65714286 6.13333333,3.84761905 L6.13333333,3.84761905 L0.495238095,9.2952381 C0.380952381,8.8 0.342857143,8.34285714 0.342857143,7.84761905 C0.342857143,3.61904762 3.77142857,0.19047619 8,0.19047619 Z"></path>
        </g>
      </g>
    </svg>
  );
}

export function CloudIcon(props: HTMLElementProps<'svg'>) {
  return (
    <svg {...props} width="25px" height="19px" viewBox="0 0 25 19">
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g transform="translate(0.000000, 1.000000)" stroke="currentColor">
          <path d="M18.4,5.2 C18.5,5.6 18.5,6 18.5,6.4 C18.5,6.7 18.5,6.9 18.5,7.2 C18.5,6.9 18.5,6.7 18.5,6.4"></path>
          <path d="M20.1,12.6 C20.7,12.6 21.3,12.5 21.8,12.2 C23.7,11.3 24.6,8.9 23.6,7 C22.7,5.1 20.3,4.2 18.4,5.2 C17.9,2.8 16.2,0.9 13.8,0.3 C10.5,-0.6 7,1.4 6.2,4.8"></path>
          <path d="M4.5,12.6 C3.9,12.6 3.3,12.5 2.8,12.2 C0.9,11.3 0,8.9 1,7 C1.9,5.1 4.3,4.2 6.2,5.2 C6.7,2.8 8.4,0.9 10.8,0.3 C14.1,-0.6 17.6,1.4 18.4,4.8"></path>
          <path d="M12.4,5.3 C12.4,5.3 19.5,12.9 12.4,15.9 C5.3,12.9 12.4,5.3 12.4,5.3 Z"></path>
          <line x1="12.4" y1="15.9" x2="12.4" y2="17.3"></line>
        </g>
      </g>
    </svg>
  );
}

export function SupportIcon(props: HTMLElementProps<'svg'>) {
  return (
    <svg {...props} width="25px" height="24px" viewBox="0 0 24 24">
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="currentColor">
          <path d="M2.4,9.7 C2.3,6.3 4,3.2 6.8,1.5 C9.7,-0.2 13.3,-0.2 16.1,1.5 C19,3.2 20.7,6.4 20.5,9.7"></path>
          <path d="M19.4,18.1 C18,20.1 15.8,21.4 13.4,21.8"></path>
          <path d="M5.2,15.6 C5.3,16.2 5.1,16.8 4.8,17.3 C4.3,18 3.3,18.4 2.4,18.2 C1.5,18 0.8,17.2 0.7,16.3 L0.1,12.3 C1.38777878e-17,11.7 0.2,11.1 0.5,10.6 C1,9.9 2,9.5 2.9,9.7 C3.8,9.9 4.5,10.7 4.6,11.6 L5.2,15.6 Z"></path>
          <path d="M18,15.6 C17.9,16.2 18.1,16.8 18.4,17.3 C18.9,18 19.9,18.4 20.8,18.2 C21.7,18 22.4,17.2 22.5,16.3 L23.1,12.3 C23.2,11.7 23,11.1 22.7,10.6 C22.2,9.9 21.2,9.5 20.3,9.7 C19.4,9.9 18.7,10.7 18.6,11.6 L18,15.6 Z"></path>
          <path d="M11.6,23.2 C12.6,23.2 13.5,22.3 13.5,21.3 C13.5,20.2 12.6,19.4 11.6,19.4 C10.6,19.4 9.7,20.3 9.7,21.3 C9.7,22.4 10.5,23.2 11.6,23.2 Z"></path>
        </g>
      </g>
    </svg>
  );
}

export function UniversityIcon(props: HTMLElementProps<'svg'>) {
  return (
    <svg {...props} width="25px" height="25px" viewBox="0 0 19 25">
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="currentColor">
          <path d="M0.6,2.9 L0.6,21.8 C0.6,22.9 1.6,23.8 2.7,23.8 L17.3,23.8 C17.9,23.8 18.3,23.4 18.3,22.8 L18.3,6.8 C18.3,5.9 17.6,5.3 16.8,5.3 L16,5.3"></path>
          <path d="M16.8,5.2 L2.9,5.2 C2.3,5.2 1.7,5 1.3,4.5 C0.9,4.1 0.6,3.5 0.6,2.9 L0.6,2.9 C0.6,1.6 1.6,0.6 2.9,0.6 L15.3,0.6 C16.2,0.6 16.8,1.3 16.8,2.1 L16.8,5.2"></path>
          <polyline points="4.4 12.1 6.7 14.4 4.4 16.7"></polyline>
          <line x1="9.7" y1="14.5" x2="13.7" y2="14.5"></line>
        </g>
      </g>
    </svg>
  );
}

export function MegaphoneIcon(props: HTMLElementProps<'svg'>) {
  return (
    <svg {...props} width="25px" height="18px" viewBox="0 0 21 18">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g stroke="currentColor">
          <g>
            <path d="M16.6937164,1.45178813 C16.5671727,1.43279473 16.4333832,1.46207613 16.3223422,1.54413425 L15.887998,1.8651098 C15.5171808,2.25362448 15.0603669,2.6542574 14.1802936,3.31884422 C13.5458126,3.80443448 12.9603084,4.25210376 11.7400663,4.90812987 C11.3948275,5.09373704 10.6686803,5.43453778 9.0099575,5.5 L2,5.5 C1.58578644,5.5 1.21078644,5.66789322 0.939339828,5.93933983 C0.667893219,6.21078644 0.5,6.58578644 0.5,7 L0.5,10.8 C0.5,11.2142136 0.667893219,11.5892136 0.939339828,11.8606602 C1.21078644,12.1321068 1.58578644,12.3 2,12.3 L3.35230175,12.3003809 C3.26657468,13.5407726 3.25652909,14.4271291 3.33387468,14.9585055 C3.42552866,15.5881828 3.74347056,16.4368924 4.0954574,16.6607499 C4.17310703,16.7101337 4.29531111,16.7134233 4.44604432,16.7134233 L6.99587203,16.712755 C7.07146945,16.7074926 7.06949316,16.5426228 7.05811042,16.3856783 C6.79296702,16.0452639 6.4428408,15.54439 6.23769756,14.7664351 C6.16017432,14.4725929 6.03732876,13.9968592 6.06252502,13.3658381 C6.07100023,13.1535829 6.12606622,12.7983839 6.23834715,12.3012016 L8.14247057,12.2991854 L9.01644939,12.3126604 C9.57792718,12.3011553 9.9870633,12.3309703 10.5900116,12.4820386 C11.0971489,12.594523 11.8627587,12.7703497 12.5539102,13.1570991 C13.4041178,13.6328521 14.3017275,14.2706168 15.1356738,14.9951972 C15.5890988,15.3892577 15.991443,15.7411346 16.723155,16.1358322 C16.8197167,16.1155071 16.905894,16.0673638 16.9730543,16.0002035 C17.0635365,15.9097213 17.1195009,15.7847213 17.1195009,15.6466501 L17.1195009,1.94624951 C17.1195009,1.83927589 17.0851924,1.73512224 16.6937164,1.45178813 Z"></path>
            <line x1="9" y1="5.78529888" x2="9" y2="12.2025237"></line>
            <line
              x1="18.5"
              y1="6.70513577"
              x2="19.5"
              y2="5.5"
              strokeLinecap="round"
            ></line>
            <line
              x1="18.5"
              y1="9.20513577"
              x2="20.5"
              y2="9.20513577"
              strokeLinecap="round"
            ></line>
            <line
              x1="18.5"
              y1="11.7051358"
              x2="19.5"
              y2="12.5"
              strokeLinecap="round"
            ></line>
          </g>
        </g>
      </g>
    </svg>
  );
}