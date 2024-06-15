import React, { useContext } from "react";
import { ThemeContext } from "../../../app/domain/context/ThemeContext";

export const AppStore = () => {
  const { algorithm } = useContext(ThemeContext);
  return (
    <svg
      width="101"
      height="32"
      viewBox="0 0 101 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M95.5761 1.47559H5.00908C3.17476 1.47559 1.68774 2.9626 1.68774 4.79692V26.2551C1.68774 28.0894 3.17476 29.5764 5.00908 29.5764H95.5761C97.4105 29.5764 98.8975 28.0894 98.8975 26.2551V4.79692C98.8975 2.9626 97.4105 1.47559 95.5761 1.47559Z"
        fill={algorithm === "dark" ? "black" : "#e4e4e4"}
      />
      <path
        d="M33.929 9.3111L33.5195 10.6612H32.6194L34.136 5.92676H35.2386L36.7778 10.6612H35.8597L35.4097 9.3111H33.929ZM35.2791 8.65853L34.9056 7.49291C34.8156 7.20489 34.7391 6.88085 34.6671 6.59282C34.5951 6.86735 34.5276 7.19588 34.4421 7.49291L34.0775 8.65853H35.2791Z"
        fill="black"
      />
      <path
        d="M38.0789 7.23242L38.6325 8.9696C38.7315 9.27113 38.799 9.54565 38.8665 9.82468C38.9295 9.54565 39.006 9.27563 39.1005 8.9696L39.6496 7.23242H40.5497L39.2445 10.6528H38.4165L37.1428 7.23242H38.0789Z"
        fill="black"
      />
      <path
        d="M44.0232 9.82877C44.0181 10.1045 44.0377 10.3801 44.0818 10.6524H43.2987L43.2357 10.2743C43.1128 10.4221 42.9575 10.5395 42.7819 10.6176C42.6063 10.6956 42.4151 10.7321 42.2231 10.7244C42.0847 10.7323 41.9461 10.7119 41.8159 10.6644C41.6856 10.6169 41.5665 10.5432 41.4657 10.448C41.365 10.3527 41.2848 10.2379 41.2301 10.1105C41.1753 9.98311 41.1472 9.84589 41.1475 9.70726C41.1475 8.85217 41.9125 8.40663 43.1772 8.41563V8.36162C43.1772 8.1366 43.0872 7.76306 42.4796 7.76306C42.1626 7.76635 41.8521 7.85329 41.5795 8.01509L41.413 7.45253C41.792 7.24538 42.2188 7.1414 42.6506 7.151C43.7487 7.151 44.0638 7.84857 44.0638 8.60015L44.0232 9.82877ZM43.1772 9.00069C42.5651 9.00069 41.9845 9.1222 41.9845 9.63975C41.9783 9.70573 41.9867 9.77227 42.0091 9.83464C42.0315 9.897 42.0675 9.95363 42.1143 10.0005C42.1612 10.0474 42.2178 10.0833 42.2802 10.1057C42.3426 10.1282 42.4091 10.1366 42.4751 10.1303C42.6208 10.134 42.7642 10.0928 42.8858 10.0123C43.0073 9.93181 43.1012 9.81589 43.1547 9.68025C43.165 9.61767 43.165 9.55382 43.1547 9.49123L43.1772 9.00069Z"
        fill="black"
      />
      <path
        d="M45.6707 6.7508C45.5839 6.74295 45.5012 6.71004 45.4327 6.65606C45.3642 6.60209 45.3129 6.52937 45.2849 6.44676C45.257 6.36415 45.2537 6.27521 45.2753 6.19074C45.297 6.10627 45.3427 6.02991 45.407 5.97096C45.4713 5.912 45.5513 5.87299 45.6373 5.85866C45.7233 5.84433 45.8116 5.8553 45.8915 5.89023C45.9714 5.92517 46.0395 5.98257 46.0874 6.05545C46.1353 6.12833 46.1609 6.21355 46.1613 6.30076C46.1615 6.36343 46.1487 6.42546 46.1236 6.48288C46.0985 6.5403 46.0617 6.59184 46.0155 6.63421C45.9693 6.67658 45.9148 6.70883 45.8554 6.72891C45.7961 6.74899 45.7332 6.75644 45.6707 6.7508ZM45.2207 10.6617V7.24135H46.0848V10.6617H45.2207Z"
        fill="black"
      />
      <path
        d="M47.3496 5.65723H48.2137V10.6527H47.3496V5.65723Z"
        fill="black"
      />
      <path
        d="M52.1207 9.82877C52.1142 10.1044 52.1323 10.38 52.1747 10.6524H51.3961L51.3331 10.2743C51.2102 10.4221 51.0549 10.5395 50.8793 10.6176C50.7037 10.6956 50.5125 10.7321 50.3205 10.7244C50.1821 10.7323 50.0435 10.7119 49.9133 10.6644C49.783 10.6169 49.6639 10.5432 49.5632 10.448C49.4624 10.3527 49.3822 10.2379 49.3275 10.1105C49.2728 9.98311 49.2446 9.84589 49.2449 9.70726C49.2449 8.85217 50.01 8.40663 51.2746 8.41563V8.36162C51.2746 8.1366 51.1846 7.76306 50.5815 7.76306C50.2645 7.76635 49.954 7.85329 49.6814 8.01509L49.5149 7.45253C49.8939 7.24538 50.3207 7.1414 50.7525 7.151C51.8461 7.151 52.1657 7.84857 52.1657 8.60015L52.1207 9.82877ZM51.2791 9.00069C50.667 9.00069 50.0865 9.1222 50.0865 9.63975C50.0802 9.70573 50.0886 9.77227 50.111 9.83464C50.1335 9.897 50.1694 9.95363 50.2163 10.0005C50.2631 10.0474 50.3198 10.0833 50.3821 10.1057C50.4445 10.1282 50.511 10.1366 50.577 10.1303C50.7228 10.134 50.8661 10.0928 50.9877 10.0123C51.1092 9.93181 51.2031 9.81589 51.2566 9.68025C51.2669 9.61767 51.2669 9.55382 51.2566 9.49123L51.2791 9.00069Z"
        fill="black"
      />
      <path
        d="M53.3387 5.65723H54.2028V7.70043C54.3222 7.5213 54.4863 7.37643 54.6789 7.28014C54.8715 7.18385 55.0859 7.13947 55.3009 7.15138C56.1379 7.15138 56.732 7.84895 56.7275 8.88855C56.7275 10.1172 55.9489 10.7292 55.1748 10.7292C54.958 10.7399 54.7424 10.6906 54.5518 10.5865C54.3612 10.4825 54.203 10.3279 54.0947 10.1397L54.0542 10.6527H53.3162C53.3162 10.4187 53.3432 10.0407 53.3432 9.69863L53.3387 5.65723ZM54.2028 9.25759C54.1955 9.3249 54.1955 9.39279 54.2028 9.46011C54.2441 9.63188 54.3421 9.78474 54.4809 9.89412C54.6196 10.0035 54.7911 10.063 54.9678 10.0632C55.5079 10.0632 55.8409 9.61312 55.8409 8.93806C55.8409 8.33499 55.5529 7.84445 54.9768 7.84445C54.7971 7.84839 54.6239 7.91267 54.4852 8.02695C54.3464 8.14124 54.2501 8.29887 54.2118 8.47451C54.1945 8.54829 54.1854 8.62376 54.1847 8.69953L54.2028 9.25759Z"
        fill="black"
      />
      <path
        d="M57.7588 5.65723H58.6229V10.6527H57.7588V5.65723Z"
        fill="black"
      />
      <path
        d="M60.4858 9.18536C60.4884 9.31619 60.5187 9.44499 60.5746 9.5633C60.6305 9.6816 60.7109 9.78671 60.8104 9.87174C60.9098 9.95676 61.0262 10.0198 61.1517 10.0566C61.2773 10.0934 61.4093 10.1033 61.5389 10.0854C61.862 10.0905 62.1834 10.0387 62.4885 9.93243L62.6145 10.522C62.2352 10.6724 61.8298 10.7459 61.4219 10.738C61.1868 10.7604 60.9496 10.731 60.727 10.6521C60.5044 10.5731 60.3018 10.4465 60.1333 10.281C59.9648 10.1155 59.8345 9.91517 59.7516 9.69404C59.6687 9.47291 59.6351 9.23632 59.6532 9.00084C59.6532 8.05125 60.2293 7.16016 61.3274 7.16016C62.4255 7.16016 62.8035 8.06025 62.8035 8.82532C62.8047 8.94738 62.7957 9.06932 62.7765 9.18986L60.4858 9.18536ZM61.9889 8.5823C62.0036 8.47952 61.9963 8.3748 61.9675 8.27506C61.9387 8.17532 61.889 8.08283 61.8218 8.00371C61.7546 7.92459 61.6714 7.86063 61.5776 7.81607C61.4838 7.77151 61.3817 7.74736 61.2779 7.74521C61.0645 7.75885 60.8642 7.85276 60.7173 8.00805C60.5703 8.16335 60.4876 8.36851 60.4858 8.5823H61.9889Z"
        fill="black"
      />
      <path
        d="M67.056 10.7286C66.8242 10.7373 66.5932 10.6972 66.3779 10.611C66.1626 10.5247 65.9679 10.3942 65.8062 10.2279C65.6446 10.0616 65.5197 9.86319 65.4396 9.64554C65.3595 9.42789 65.326 9.19584 65.3413 8.96443C65.3251 8.72654 65.3595 8.48791 65.4422 8.26428C65.5249 8.04065 65.6541 7.83708 65.8212 7.667C65.9883 7.49691 66.1896 7.36417 66.4117 7.27751C66.6339 7.19085 66.8718 7.15225 67.11 7.16425C67.3404 7.15548 67.57 7.19532 67.784 7.28115C67.998 7.36699 68.1915 7.49692 68.352 7.66247C68.5124 7.82803 68.6362 8.02551 68.7154 8.24207C68.7945 8.45863 68.8271 8.68942 68.8111 8.91942C68.8264 9.15557 68.792 9.39229 68.7101 9.6143C68.6282 9.83631 68.5006 10.0387 68.3356 10.2083C68.1706 10.378 67.9719 10.5111 67.7523 10.5992C67.5326 10.6873 67.2969 10.7283 67.0605 10.7196L67.056 10.7286ZM67.083 10.103C67.5735 10.103 67.9201 9.62599 67.9201 8.92842C67.9201 8.39287 67.6815 7.77631 67.092 7.77631C66.5024 7.77631 66.2324 8.37487 66.2324 8.94192C66.2324 9.60349 66.5609 10.103 67.074 10.103H67.083Z"
        fill="black"
      />
      <path
        d="M69.8385 8.24933C69.8385 7.85779 69.8385 7.52476 69.8115 7.23223H70.5631L70.6036 7.74528C70.7195 7.55992 70.8817 7.40803 71.0743 7.30463C71.2669 7.20123 71.4832 7.1499 71.7017 7.15572C72.3003 7.15572 72.9168 7.54276 72.9168 8.62287V10.6526H72.0528V8.72187C72.0528 8.23133 71.8682 7.85779 71.4002 7.85779C71.2492 7.86095 71.1029 7.91124 70.9819 8.00162C70.8608 8.09199 70.7711 8.21794 70.7251 8.36184C70.6957 8.4503 70.682 8.5432 70.6846 8.63637V10.6526H69.8205L69.8385 8.24933Z"
        fill="black"
      />
      <path
        d="M76.9171 6.35449V7.25458H77.7406V7.87564H76.9171V9.37879C76.9171 9.80184 77.0296 10.0089 77.3671 10.0089C77.4808 10.014 77.5946 10.0019 77.7046 9.97285V10.6254C77.5026 10.6902 77.2912 10.7207 77.0791 10.7154C76.9428 10.7226 76.8064 10.7016 76.6786 10.6535C76.5508 10.6055 76.4344 10.5316 76.3365 10.4364C76.1249 10.1624 76.0266 9.81766 76.062 9.4733V7.87564H75.5759V7.23208H76.0575V6.59302L76.9171 6.35449Z"
        fill="black"
      />
      <path
        d="M78.7034 5.65723H79.5675V7.69593C79.6804 7.52925 79.8358 7.39566 80.0175 7.30889C80.2006 7.20736 80.4067 7.15466 80.6161 7.15588C81.1966 7.15588 81.8087 7.54292 81.8087 8.63652V10.6527H80.9446V8.72653C80.9446 8.23598 80.7601 7.85345 80.283 7.85345C80.134 7.85467 79.9891 7.90208 79.8682 7.98913C79.7473 8.07618 79.6564 8.1986 79.608 8.3395C79.5812 8.42383 79.569 8.5121 79.572 8.60052V10.6527H78.7079L78.7034 5.65723Z"
        fill="black"
      />
      <path
        d="M83.6399 9.18536C83.6425 9.31619 83.6728 9.44499 83.7287 9.5633C83.7847 9.6816 83.865 9.78671 83.9645 9.87174C84.064 9.95676 84.1803 10.0198 84.3059 10.0566C84.4314 10.0934 84.5634 10.1033 84.693 10.0854C85.018 10.0804 85.3395 10.018 85.6426 9.90093L85.7686 10.4905C85.3894 10.6409 84.9839 10.7144 84.576 10.7065C84.3437 10.7283 84.1095 10.6996 83.8893 10.6225C83.6691 10.5454 83.4681 10.4216 83.3002 10.2596C83.1322 10.0977 83.0013 9.90135 82.9162 9.68409C82.8311 9.46684 82.794 9.23377 82.8073 9.00084C82.8073 8.05125 83.3834 7.16016 84.4815 7.16016C85.5796 7.16016 85.9576 8.06025 85.9576 8.82532C85.9589 8.94738 85.9498 9.06932 85.9306 9.18986L83.6399 9.18536ZM85.1431 8.5823C85.1577 8.47952 85.1504 8.3748 85.1216 8.27506C85.0928 8.17532 85.0432 8.08283 84.9759 8.00371C84.9087 7.92459 84.8255 7.86063 84.7317 7.81607C84.638 7.77151 84.5358 7.74736 84.432 7.74521C84.2186 7.75885 84.0183 7.85276 83.8714 8.00805C83.7245 8.16335 83.6418 8.36851 83.6399 8.5823H85.1431Z"
        fill="black"
      />
      <path
        d="M23.1818 15.2423C23.1912 14.5291 23.3816 13.83 23.735 13.2105C24.0885 12.591 24.5934 12.0714 25.2025 11.7004C24.8177 11.15 24.3098 10.6971 23.7191 10.3775C23.1285 10.058 22.4714 9.88068 21.8002 9.85972C20.369 9.71121 18.9829 10.7148 18.2538 10.7148C17.5247 10.7148 16.3771 9.90023 15.1665 9.90023C14.3848 9.92545 13.6228 10.1526 12.9549 10.5595C12.2869 10.9665 11.7356 11.5393 11.3546 12.2225C9.70746 15.0757 10.9361 19.2657 12.5157 21.5744C13.3078 22.704 14.2304 23.9641 15.4365 23.9191C16.6427 23.8741 17.0567 23.1676 18.4833 23.1676C19.91 23.1676 20.3105 23.9191 21.5436 23.8921C22.7768 23.8651 23.6094 22.758 24.3699 21.6194C24.9334 20.8165 25.3663 19.9294 25.6526 18.9911C24.9153 18.6799 24.2861 18.1583 23.8435 17.4916C23.4009 16.8249 23.1645 16.0425 23.1638 15.2423"
        fill="black"
      />
      <path
        d="M20.8559 8.35269C21.5414 7.52809 21.8802 6.46974 21.801 5.40039C20.7451 5.51116 19.7697 6.01572 19.0692 6.81353C18.7263 7.203 18.4635 7.65628 18.2959 8.14742C18.1283 8.63857 18.0593 9.15794 18.0926 9.67582C18.6213 9.68127 19.1443 9.56664 19.6221 9.34056C20.1 9.11448 20.5204 8.78285 20.8514 8.37069"
        fill="black"
      />
      <path
        d="M40.2563 23.7437H38.6136L37.7136 20.9084H34.5632L33.7036 23.7437H32.115L35.2203 14.0947H37.1375L40.2563 23.7437ZM37.439 19.7203L36.6244 17.2C36.5374 16.942 36.3754 16.342 36.1384 15.3999H36.1114C36.0154 15.8109 35.8654 16.411 35.6613 17.2L34.8603 19.7203H37.439Z"
        fill="black"
      />
      <path
        d="M48.2441 20.18C48.2999 21.2035 47.9563 22.2087 47.2855 22.9838C47.0146 23.2771 46.6841 23.5091 46.3162 23.6643C45.9483 23.8195 45.5515 23.8944 45.1523 23.8839C44.7644 23.9154 44.3753 23.8403 44.0271 23.6666C43.6788 23.4928 43.3847 23.2272 43.1766 22.8983H43.1496V26.5616H41.6015V19.0774C41.6015 18.3333 41.582 17.5697 41.543 16.7867H42.8931L42.9786 17.8893H43.0101C43.2445 17.5308 43.5595 17.2321 43.9298 17.0169C44.3001 16.8016 44.7156 16.6759 45.1431 16.6497C45.5706 16.6235 45.9983 16.6975 46.3921 16.8658C46.786 17.0341 47.1351 17.2921 47.4116 17.6192C47.9859 18.3456 48.2784 19.255 48.2351 20.18M46.66 20.2385C46.686 19.6474 46.5289 19.0627 46.2099 18.5643C46.0604 18.3459 45.8584 18.1684 45.6226 18.0481C45.3867 17.9278 45.1245 17.8686 44.8598 17.8758C44.4794 17.8748 44.1111 18.0087 43.8202 18.2538C43.5075 18.5055 43.29 18.8564 43.2036 19.2484C43.1626 19.3952 43.1384 19.5462 43.1316 19.6985V20.8821C43.1155 21.3496 43.2762 21.806 43.5817 22.1602C43.7358 22.3355 43.9276 22.4735 44.1428 22.5639C44.3579 22.6543 44.5908 22.6948 44.8238 22.6823C45.0869 22.6918 45.3482 22.6355 45.584 22.5184C45.8198 22.4013 46.0226 22.2271 46.1739 22.0117C46.5207 21.4921 46.694 20.8761 46.669 20.252"
        fill="black"
      />
      <path
        d="M56.2562 20.18C56.3125 21.2036 55.9688 22.2089 55.2976 22.9838C55.0267 23.2771 54.6962 23.5091 54.3283 23.6643C53.9604 23.8195 53.5636 23.8944 53.1644 23.8839C52.7765 23.9154 52.3874 23.8403 52.0392 23.6666C51.6909 23.4928 51.3968 23.2272 51.1887 22.8983H51.1617V26.5616H49.6181V19.0774C49.6181 18.3333 49.5986 17.5697 49.5596 16.7867H50.9097L50.9952 17.8893H51.0267C51.2611 17.5308 51.5761 17.2321 51.9464 17.0169C52.3167 16.8016 52.7322 16.6759 53.1597 16.6497C53.5872 16.6235 54.0149 16.6975 54.4087 16.8658C54.8026 17.0341 55.1517 17.2921 55.4282 17.6192C56.0042 18.3449 56.2983 19.2545 56.2562 20.18ZM54.6811 20.2385C54.7077 19.6474 54.5505 19.0625 54.231 18.5643C54.0815 18.3459 53.8795 18.1684 53.6437 18.0481C53.4078 17.9278 53.1456 17.8686 52.8809 17.8758C52.5005 17.8748 52.1322 18.0087 51.8413 18.2538C51.5317 18.5067 51.3174 18.8575 51.2337 19.2484C51.1923 19.3951 51.1681 19.5461 51.1617 19.6985V20.8821C51.1447 21.3497 51.3055 21.8064 51.6118 22.1602C51.7623 22.3315 51.949 22.4671 52.1584 22.5574C52.3677 22.6477 52.5945 22.6903 52.8224 22.6823C53.0855 22.6918 53.3468 22.6355 53.5826 22.5184C53.8184 22.4013 54.0212 22.2271 54.1725 22.0117C54.52 21.4923 54.6948 20.8765 54.6721 20.252"
        fill="black"
      />
      <path
        d="M65.1942 21.0349C65.2099 21.4103 65.143 21.7846 64.9984 22.1314C64.8538 22.4782 64.6349 22.7891 64.3571 23.0421C63.6184 23.6442 62.6801 23.9463 61.7288 23.8882C60.8548 23.9302 59.9869 23.7226 59.2266 23.2896L59.5866 22.0025C60.2642 22.4144 61.0438 22.628 61.8368 22.619C62.3183 22.6463 62.7947 22.5081 63.187 22.2275C63.3427 22.097 63.4654 21.9315 63.5452 21.7446C63.6249 21.5577 63.6595 21.3547 63.646 21.1519C63.6501 20.9683 63.6167 20.7858 63.5478 20.6156C63.4789 20.4453 63.3761 20.2909 63.2455 20.1618C62.8524 19.8214 62.3925 19.5669 61.8953 19.4147C60.2062 18.7847 59.3616 17.8621 59.3616 16.6469C59.3534 16.275 59.4302 15.9062 59.5862 15.5685C59.7422 15.2308 59.9732 14.9331 60.2617 14.6983C60.9342 14.1674 61.778 13.9016 62.6334 13.9512C63.3836 13.9249 64.1291 14.0792 64.8071 14.4012L64.4201 15.6613C63.8528 15.3581 63.2181 15.2032 62.5749 15.2113C62.1154 15.1829 61.6618 15.3256 61.3013 15.6118C61.1779 15.721 61.0794 15.8556 61.0126 16.0062C60.9458 16.1569 60.9123 16.3201 60.9142 16.4849C60.9111 16.6665 60.9501 16.8464 61.0282 17.0104C61.1062 17.1744 61.2213 17.318 61.3643 17.43C61.7894 17.7525 62.2634 18.0047 62.7684 18.1771C63.4646 18.4209 64.0947 18.823 64.6091 19.3517C65.0053 19.8177 65.2139 20.4145 65.1942 21.0259"
        fill="black"
      />
      <path
        d="M70.3018 17.9428H68.6006V21.3226C68.6006 22.1807 68.9007 22.6098 69.5007 22.6098C69.7309 22.6141 69.9606 22.5899 70.1848 22.5377L70.2253 23.7124C69.8379 23.8393 69.4312 23.8972 69.0237 23.8834C68.7591 23.898 68.4945 23.8558 68.2476 23.7595C68.0007 23.6633 67.7774 23.5152 67.5925 23.3253C67.1966 22.784 67.0125 22.1164 67.075 21.4486V17.9428H66.0669V16.7862H67.084V15.5125L68.6006 15.0625V16.7862H70.3018V17.9428Z"
        fill="black"
      />
      <path
        d="M77.9883 20.2067C78.0303 21.1663 77.7089 22.1064 77.0882 22.8395C76.7662 23.1906 76.3715 23.4671 75.9315 23.6498C75.4915 23.8325 75.0169 23.9169 74.541 23.8971C74.0846 23.9171 73.6295 23.8363 73.2079 23.6606C72.7863 23.4848 72.4087 23.2183 72.1017 22.88C71.4877 22.1715 71.1659 21.2561 71.2016 20.3192C71.162 19.3496 71.4972 18.402 72.1377 17.673C72.4567 17.3326 72.8454 17.0651 73.2773 16.8888C73.7091 16.7125 74.1739 16.6315 74.64 16.6514C75.0994 16.633 75.5574 16.7143 75.9824 16.8899C76.4074 17.0655 76.7893 17.3311 77.1017 17.6685C77.7153 18.3719 78.0373 19.283 78.0018 20.2157M76.3997 20.2652C76.4159 19.6871 76.2726 19.1157 75.9856 18.6136C75.8558 18.3589 75.657 18.1457 75.4119 17.9985C75.1668 17.8513 74.8853 17.776 74.5995 17.781C74.3088 17.7726 74.0217 17.8463 73.771 17.9936C73.5203 18.1408 73.3161 18.3557 73.1818 18.6136C72.8922 19.1244 72.7489 19.7053 72.7678 20.2922C72.7516 20.8704 72.8948 21.4418 73.1818 21.9439C73.3159 22.199 73.5181 22.4119 73.7661 22.5589C74.014 22.7059 74.2978 22.7812 74.586 22.7765C74.8728 22.7782 75.1545 22.6999 75.3993 22.5505C75.6441 22.401 75.8425 22.1863 75.9721 21.9304C76.2741 21.428 76.43 20.8514 76.4222 20.2652"
        fill="black"
      />
      <path
        d="M83.0154 18.1456C82.8549 18.1178 82.6922 18.1042 82.5294 18.1051C82.2845 18.0944 82.0409 18.1453 81.8208 18.253C81.6007 18.3607 81.4111 18.5218 81.2692 18.7216C80.9994 19.1273 80.864 19.6075 80.8822 20.0943V23.7441H79.3385V18.9782C79.3385 18.1771 79.319 17.4465 79.28 16.7864H80.6302L80.6887 18.1366H80.7292C80.8757 17.7022 81.1444 17.3193 81.5033 17.034C81.8268 16.7877 82.2217 16.6534 82.6284 16.6514C82.7579 16.6505 82.8873 16.6595 83.0154 16.6784V18.1456Z"
        fill="black"
      />
      <path
        d="M89.9289 19.9367C89.9329 20.1719 89.9148 20.4069 89.8749 20.6387H85.2394C85.2291 20.9344 85.2838 21.2287 85.3997 21.5008C85.5155 21.773 85.6897 22.0164 85.91 22.2139C86.3413 22.5517 86.8793 22.7241 87.4266 22.7C88.0672 22.7085 88.7037 22.597 89.3033 22.3714L89.5463 23.447C88.8071 23.7564 88.0119 23.9096 87.2106 23.8971C86.7446 23.9222 86.2784 23.8503 85.8415 23.6861C85.4046 23.5219 85.0065 23.2689 84.6724 22.943C84.3568 22.5993 84.1128 22.1963 83.9544 21.7575C83.796 21.3187 83.7264 20.8527 83.7498 20.3867C83.7104 19.4316 84.0154 18.494 84.6094 17.745C84.8985 17.3813 85.2691 17.0908 85.6913 16.8969C86.1135 16.7031 86.5754 16.6112 87.0396 16.6288C87.4829 16.6047 87.9251 16.6946 88.3237 16.89C88.7224 17.0854 89.0643 17.3798 89.3168 17.745C89.7419 18.395 89.9557 19.1605 89.9289 19.9367ZM88.4572 19.5361C88.4776 19.1189 88.3726 18.7051 88.1557 18.348C88.0279 18.1389 87.8456 17.9686 87.6284 17.8552C87.4112 17.7418 87.1672 17.6897 86.9226 17.7045C86.6819 17.701 86.444 17.7566 86.2298 17.8665C86.0156 17.9763 85.8316 18.137 85.694 18.3345C85.4323 18.6839 85.2762 19.1008 85.2439 19.5361H88.4572Z"
        fill="black"
      />
    </svg>
  );
};
