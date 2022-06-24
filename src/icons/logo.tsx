import React from "react";

type Props = { className?: string; hidden?: boolean };

const Logo = ({ className = ``, hidden = true }: Props) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="120pt"
    height="50pt"
    viewBox="120 40 250 230"
    preserveAspectRatio="xMidYMid meet"
    fill="currentColor"
  >
    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" stroke="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd" fill="bla" d="M2926 2589 c-44 -52 -77 -145 -196 -554 -114 -391 -178 -565 -265 -721 -49 -87 -212 -254 -249 -254 -19 0 -29 7 -36 26 -15 38 -14 40 51 110 33
                                          36 72 90 86 120 23 52 24 56 9 79 -23 36 -58 32 -106 -11 -44 -40 -100 -143
                                          -100 -183 0 -37 -27 -71 -56 -71 -22 0 -24 4 -24 44 0 24 9 73 20 108 24 76
                                          25 92 5 108 -22 18 -89 -18 -170 -92 -72 -66 -73 -65 -38 36 12 34 11 42 -1
                                          55 -21 20 -34 7 -100 -93 -29 -45 -98 -126 -155 -182 -152 -151 -240 -190
                                          -249 -109 -3 22 7 38 46 79 95 98 172 238 152 276 -6 11 -17 20 -26 20 -43 0
                                          -189 -181 -219 -270 -24 -72 -68 -76 -128 -12 l-28 30 47 68 c73 106 97 168
                                          98 245 1 57 -3 70 -27 102 -16 21 -50 49 -78 62 -27 14 -49 28 -49 31 0 3 25
                                          47 57 97 128 208 246 491 227 545 -15 44 -52 49 -120 18 -137 -63 -427 -419
                                          -458 -562 -9 -39 6 -79 38 -99 14 -9 56 -21 95 -27 39 -6 71 -15 71 -20 0 -27
                                          -219 -274 -464 -521 -97 -98 -176 -182 -176 -187 0 -35 41 -3 198 156 193 195
                                          365 384 440 483 44 59 49 62 81 57 49 -8 104 -55 115 -100 7 -27 5 -50 -7 -90
                                          -18 -57 -110 -206 -127 -206 -5 0 -30 14 -55 32 -57 40 -142 50 -210 24 -77
                                          -30 -155 -137 -155 -212 0 -11 9 -33 20 -51 58 -96 187 -79 320 43 39 35 74
                                          64 80 64 5 0 24 -13 42 -29 45 -38 71 -51 106 -51 24 0 32 -6 42 -30 24 -59
                                          88 -77 153 -44 52 27 149 108 222 185 59 63 67 69 61 43 -14 -61 -87 -196
                                          -210 -389 -139 -219 -212 -355 -203 -379 9 -23 40 -20 64 7 56 60 184 270 275
                                          451 135 269 240 419 329 470 32 19 32 19 25 0 -21 -54 -37 -140 -32 -170 12
                                          -59 58 -82 119 -59 9 4 19 -5 27 -25 27 -65 96 -76 157 -27 15 12 36 28 45 35
                                          10 8 0 -19 -23 -65 -41 -80 -44 -113 -9 -113 24 0 44 30 109 157 53 104 114
                                          190 196 278 53 57 53 55 17 -75 -53 -187 -64 -278 -37 -300 27 -22 61 14 115
                                          122 36 74 57 132 72 205 l21 102 51 16 c27 9 72 28 98 41 54 27 59 22 25 -27
                                          -114 -166 -141 -208 -167 -260 -45 -88 -65 -173 -49 -210 39 -96 149 -51 320
                                          129 97 102 102 103 33 9 -74 -101 -104 -217 -56 -217 29 0 55 35 123 165 101
                                          192 204 277 400 330 52 14 96 25 98 25 2 0 -41 -46 -96 -103 -101 -105 -203
                                          -244 -203 -277 0 -32 30 -53 68 -47 97 16 207 107 304 250 32 48 60 87 62 87
                                          1 0 -5 -42 -15 -92 -24 -122 -24 -134 6 -164 25 -25 26 -25 53 -8 41 27 59 51
                                          111 154 48 95 81 181 97 253 l9 39 120 39 c66 21 124 39 128 39 19 0 -63 -100
                                          -254 -312 -38 -42 -69 -83 -69 -91 0 -38 60 -21 100 28 20 24 94 74 136 91
                                          l36 15 -42 -78 c-97 -181 -162 -263 -402 -508 -193 -197 -230 -239 -221 -253
                                          16 -27 50 -26 99 3 110 65 240 205 372 403 52 79 116 167 141 195 26 29 98
                                          112 160 185 62 72 115 132 118 132 3 0 3 -16 0 -35 -8 -50 10 -104 39 -117 37
                                          -17 93 14 173 97 l70 71 -6 -66 c-5 -61 -4 -68 22 -98 43 -51 96 -38 200 48
                                          l50 42 8 -31 c15 -60 55 -28 78 62 10 41 9 51 -4 64 -22 22 -45 11 -142 -72
                                          -118 -101 -155 -110 -155 -36 0 67 62 232 210 556 119 262 224 533 218 563 -2
                                          10 -13 17 -28 17 -22 0 -32 -20 -125 -255 -158 -395 -233 -553 -337 -708 -65
                                          -97 -169 -202 -198 -202 -22 0 -23 2 -17 68 9 101 22 132 82 202 64 75 89 122
                                          80 150 -18 58 -105 -13 -157 -129 -26 -58 -95 -148 -201 -265 l-28 -31 26 41
                                          c27 43 25 74 -5 74 -10 0 -44 -12 -75 -26 -67 -29 -69 -33 33 91 34 42 71 94
                                          82 115 19 36 19 38 1 54 -17 15 -29 13 -182 -35 -90 -29 -172 -59 -181 -67
                                          -11 -9 -18 -29 -18 -52 0 -20 -8 -61 -19 -91 -23 -69 -92 -206 -120 -239 l-20
                                          -25 -1 30 c0 49 37 190 70 261 16 37 30 72 30 79 0 17 -43 55 -62 55 -9 0 -70
                                          -21 -135 -46 -65 -26 -158 -57 -208 -71 -50 -13 -120 -41 -157 -63 -38 -21
                                          -68 -34 -68 -29 0 26 47 97 107 162 275 299 552 766 578 973 11 86 -40 147
                                          -108 130 -36 -9 -111 -87 -157 -164 -52 -89 -142 -288 -252 -557 -49 -121
                                          -118 -278 -153 -350 -59 -123 -71 -139 -218 -306 -156 -177 -236 -249 -276
                                          -249 -12 0 -24 7 -28 16 -8 22 20 108 59 180 38 73 207 320 259 381 42 48 45
                                          53 28 70 -15 15 -25 11 -146 -63 -57 -34 -132 -72 -168 -84 -36 -12 -72 -28
                                          -80 -37 -16 -15 -17 -18 -39 -131 -9 -40 -27 -96 -40 -125 l-26 -52 6 45 c4
                                          25 19 88 35 140 33 108 35 133 14 150 -19 16 -56 6 -94 -25 -26 -22 -13 8 91
                                          222 225 464 304 658 328 807 23 145 -36 226 -104 145z m49 -106 c-9 -76 -38
                                          -175 -86 -295 -54 -136 -141 -329 -146 -324 -5 4 66 249 124 431 73 229 124
                                          318 108 188z m953 35 c68 -68 -156 -526 -409 -840 -44 -54 -82 -98 -84 -98 -3
                                          0 5 24 16 53 11 28 38 98 59 154 52 137 149 360 223 512 44 91 74 139 112 178
                                          54 56 63 61 83 41z m-2548 -273 c0 -59 -184 -459 -259 -562 l-29 -40 -82 13
                                          c-90 14 -110 25 -110 61 0 85 233 396 382 508 69 52 98 58 98 20z m2347 -962
                                          c-45 -70 -104 -149 -130 -175 -47 -47 -143 -105 -155 -94 -18 19 176 243 297
                                          343 36 29 66 53 68 53 1 0 -35 -57 -80 -127z m-2710 -110 c54 -40 53 -50 -8
                                          -107 -67 -62 -131 -96 -182 -96 -41 0 -77 28 -77 59 0 53 56 130 115 157 40 19 119 12 152 -13z"/>
    </g>
  </svg>
);

export default Logo;