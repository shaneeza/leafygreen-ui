import React from 'react';
import { SVGLogoProps } from '../utils';

export default function RealmDefaultMonochromeLogo({
  fill,
  ...rest
}: SVGLogoProps) {
  return (
    <svg viewBox="0 0 181 32" {...rest}>
      <path
        d="M6.91571 0C6.91717 0.029982 6.91717 0.060018 6.91571 0.09C7.16191 0.715422 7.46309 1.31778 7.81571 1.89C8.26571 2.8 12.1657 5.19 13.8157 12.48C13.971 13.4754 14.0346 14.483 14.0057 15.49C14.0463 19.5307 12.432 23.406 9.54869 26.2209L9.26571 26.49L8.9441 26.7838C8.79849 26.9114 8.64937 27.0349 8.4969 27.1542L8.26571 27.33H8.21571C7.98402 28.3867 7.79669 29.4526 7.65418 30.5247L7.55571 31.33H6.92571L6.88307 30.8934C6.71599 29.2301 6.51339 27.7209 6.4968 27.5981L6.49571 27.59L6.40571 27.53C5.59571 26.94 -0.344294 22.35 0.0157061 14.63C0.405706 6.36 5.25571 2.29 6.23571 1.55C6.6877 1.16467 6.93826 0.593519 6.91571 0ZM66.4057 15.25C67.1779 15.2687 67.9389 15.4386 68.6457 15.75C69.0684 15.9029 69.5164 15.9742 69.9657 15.96L70.1432 15.9663L70.3188 15.9549C70.6774 15.9137 71.0167 15.7635 71.2895 15.5222C71.3261 15.4898 71.3616 15.4557 71.3957 15.42C71.4305 15.5094 71.4541 15.6026 71.4663 15.6974C71.4719 15.7413 71.4751 15.7856 71.4757 15.83C71.4977 16.1637 71.4061 16.495 71.2157 16.77C70.9904 17.024 70.6652 17.1665 70.3257 17.16H70.2257C70.0429 17.1508 69.8617 17.1206 69.6857 17.07H69.5957V17.22C69.6608 17.5097 69.7042 17.8039 69.7257 18.1L69.728 18.142L69.7388 18.307C69.7737 19.4082 69.2538 20.46 68.3457 21.1C67.7276 21.5652 67.0049 21.8687 66.2431 21.9851L65.9557 22.02H65.4057C65.2515 22.0682 64.8742 22.2465 64.8472 22.5817C64.8462 22.5947 64.8457 22.6073 64.8457 22.62C64.8457 22.98 65.0257 23.29 65.9057 23.36H66.4757C67.5861 23.3927 68.691 23.53 69.7757 23.77C70.756 24.0744 71.414 24.9939 71.3857 26.02C71.3857 27.53 70.3057 28.95 68.5057 29.82C67.754 30.1803 66.9384 30.3851 66.1078 30.4235L65.7957 30.4301L65.7857 30.33C64.8072 30.3866 63.8388 30.1229 63.0259 29.5817C62.9718 29.5457 62.9184 29.5085 62.8657 29.47C62.2331 28.9911 61.8392 28.2616 61.7857 27.47C61.7984 27.1519 61.9069 26.8463 62.0951 26.5924L62.1957 26.47C62.7725 25.9168 63.4099 25.4304 64.0957 25.02C64.1316 25.0043 64.1551 24.9692 64.1557 24.93L64.154 24.922L64.1485 24.8963C64.1363 24.8646 64.1097 24.8396 64.0757 24.83C63.4479 24.6437 62.9511 24.1618 62.7457 23.54C62.6906 23.4168 62.7251 23.2743 62.8249 23.1893C62.8374 23.1785 62.8511 23.1687 62.8657 23.16L63.4457 22.8C63.7685 22.6206 64.0792 22.4202 64.3757 22.2C64.3878 22.1649 64.3898 22.1273 64.3817 22.0913C64.38 22.0838 64.3781 22.0769 64.3757 22.07C64.3682 22.0227 64.3384 21.9818 64.2957 21.96C62.9259 21.5561 62.0308 20.2426 62.1557 18.82L62.157 18.769L62.1612 18.6168C62.2176 17.6731 62.6985 16.8009 63.4757 16.25C64.2608 15.7245 65.1577 15.3926 66.0927 15.2796L66.4057 15.25ZM66.0116 25.0126L65.6457 25.02H65.6557C65.3529 25.0181 65.0543 25.0902 64.7857 25.23C63.9357 25.78 63.5457 26.32 63.5457 26.95C63.541 27.526 63.8077 28.0706 64.2657 28.42C64.9051 28.9161 65.6908 29.1816 66.4958 29.1778L66.7157 29.17C68.7957 29.17 69.7157 28.05 69.7157 26.95C69.7416 26.2604 69.3152 25.6412 68.6759 25.4128L68.5357 25.37C67.832 25.1666 67.1072 25.0493 66.377 25.02L66.0116 25.0126ZM7.18571 12.35C6.86551 12.35 6.82241 20.453 6.81661 22.6346L6.81571 23.17H6.84571C6.84571 24.02 7.34571 26.25 7.81571 26.35C7.81571 26.35 7.55571 12.35 7.18571 12.35ZM146.156 14.8299C148.256 14.8299 150.556 16.24 150.556 19.97V20.23H143.266V20.31C143.185 21.1911 143.476 22.066 144.068 22.7231C144.661 23.3802 145.501 23.7598 146.386 23.77C147.663 23.7472 148.733 22.7961 148.906 21.53L150.556 21.75C150.045 23.7163 148.247 25.0713 146.216 25.02C143.856 25.02 141.516 23.61 141.516 19.83C141.412 18.5376 141.855 17.2609 142.737 16.3105C143.619 15.3601 144.859 14.8231 146.156 14.8299ZM156.366 14.76C157.202 14.7497 158.027 14.9491 158.766 15.34C160.067 16.0765 160.205 17.0235 160.215 18.6009L160.216 22.22C160.216 22.79 160.216 23.34 160.946 23.34C161.112 23.3338 161.276 23.3069 161.436 23.26V24.62C161.116 24.742 160.778 24.8063 160.436 24.81C160.086 24.8155 159.741 24.7293 159.436 24.56C159.081 24.2599 158.85 23.8398 158.786 23.38C157.985 24.3706 156.78 24.9473 155.506 24.95C153.586 24.95 152.246 23.85 152.246 22.2C152.23 21.3872 152.601 20.6152 153.246 20.12C154.421 19.4296 155.753 19.051 157.116 19.02L158.586 18.92L158.585 18.4221C158.576 17.5022 158.443 16.03 156.446 16.03C155.096 16.03 154.366 16.7 154.366 17.9V18.02L152.676 17.92C152.676 17.45 152.956 14.76 156.366 14.76ZM46.1744 16.485C47.0325 17.3678 47.4794 18.5711 47.4057 19.8C47.4876 21.4834 46.6787 23.086 45.2757 24.02C44.4278 24.5336 43.4658 24.8291 42.4757 24.88V24.9C38.9957 24.9 37.7657 22.35 37.7657 19.96C37.7022 18.4073 38.4624 16.9363 39.7657 16.09C40.7068 15.505 41.7879 15.1838 42.8957 15.16C44.1262 15.1213 45.3163 15.6022 46.1744 16.485ZM81.5644 16.485C82.4225 17.3678 82.8694 18.5711 82.7957 19.8C82.8778 21.4811 82.0733 23.0823 80.6757 24.02C79.8234 24.5321 78.8586 24.8274 77.8657 24.88V24.9C74.3957 24.9 73.1557 22.35 73.1557 19.96C73.0922 18.4073 73.8524 16.9363 75.1557 16.09C76.0968 15.505 77.1779 15.1838 78.2857 15.16C79.5162 15.1213 80.7063 15.6022 81.5644 16.485ZM58.3657 16.36C58.7963 17.1076 59.0223 17.9537 59.0236 18.8131L59.0157 19.1V23.22C59.0318 23.3395 59.0842 23.4512 59.1657 23.54C59.4955 23.694 59.8456 23.7985 60.2048 23.8507L60.426 23.874H60.4267L60.4757 23.88L60.4267 23.875L60.4567 24.0027C60.496 24.2255 60.4735 24.4549 60.3918 24.6658L60.3357 24.79C60.0157 24.79 59.2057 24.72 57.9257 24.72C57.0279 24.72 56.3751 24.7753 55.8197 24.7876L55.6157 24.79C55.5007 24.4941 55.5007 24.1659 55.6157 23.87C55.956 23.8591 56.2929 23.7985 56.6157 23.69C56.8957 23.578 56.9753 23.4137 56.9847 22.7256L56.9857 22.57L56.9865 21.9563C56.9867 21.8529 56.9869 21.7491 56.9871 21.6452L56.987 20.718C56.9841 19.8072 56.9697 18.972 56.9157 18.45C56.8649 17.9576 56.6333 17.5015 56.2657 17.17C55.8706 16.8423 55.3687 16.6714 54.8557 16.69C54.1616 16.6933 53.4902 16.9371 52.9557 17.38C52.7878 17.5491 52.6959 17.777 52.6972 18.0121L52.7057 18.13L52.7065 19.405C52.7088 20.755 52.7182 22.24 52.7557 23.05C52.7757 23.46 52.8657 23.65 53.2357 23.74C53.5635 23.8188 53.8987 23.8623 54.2357 23.87C54.3075 24.1334 54.2942 24.4116 54.1997 24.6653L54.1457 24.79C53.7817 24.79 53.1912 24.729 52.0165 24.7209L51.7557 24.72C50.907 24.72 49.8974 24.7736 49.5042 24.787L49.4297 24.7892L49.3757 24.79C49.2654 24.4933 49.2654 24.1667 49.3757 23.87C49.5692 23.8484 49.7614 23.8175 49.9517 23.7773L50.2357 23.71L50.3317 23.6806C50.6049 23.5852 50.746 23.4217 50.7715 23.0586L50.7757 22.93L50.7766 17.6871C50.7795 17.5136 50.7795 17.32 50.5957 17.18C50.2961 16.9984 49.9778 16.8501 49.6465 16.7376L49.3957 16.66L49.3056 16.6248C48.8922 16.4327 49.027 16.0144 49.4957 15.93C50.5708 15.7748 51.6244 15.4963 52.6357 15.1C52.7533 15.21 52.8094 15.3707 52.7857 15.53C52.7357 15.85 52.7457 16.31 52.7357 16.53C52.7313 16.6278 52.7643 16.6505 52.8025 16.6456L52.8315 16.6374C52.8702 16.6216 52.9057 16.59 52.9057 16.59C53.7547 15.7802 54.8415 15.2649 56.0057 15.12C56.9517 15.1064 57.8402 15.5732 58.3657 16.36ZM28.0057 16.61C28.0327 16.657 28.0816 16.6871 28.1357 16.69C28.1874 16.6877 28.2353 16.6619 28.2657 16.62C29.1703 15.8366 30.2811 15.3298 31.4657 15.16C33.3657 15.16 34.4657 16.58 34.4657 18.95V23.14C34.4952 23.3543 34.636 23.5369 34.8357 23.62C35.1381 23.7406 35.4528 23.8272 35.7738 23.8783L36.0157 23.91C36.0321 24.12 36.0091 24.3308 35.9483 24.5315L35.8957 24.68H33.8257L33.5453 24.68L33.0423 24.6809C32.3601 24.6834 31.8902 24.6932 31.4588 24.7317L31.2757 24.75C31.2258 24.4958 31.2258 24.2342 31.2757 23.98C31.6357 23.91 31.8157 23.86 32.0357 23.8C32.4357 23.66 32.5557 23.48 32.5757 22.95C32.5957 22.42 32.6657 19.24 32.5757 18.45C32.4663 17.4494 31.6336 16.6948 30.6433 16.6681L30.4857 16.67C29.7259 16.7133 28.9987 16.993 28.4057 17.47C28.3719 17.5035 28.3478 17.545 28.3354 17.5902L28.3257 17.66C28.4105 18.2157 28.4406 18.7784 28.4157 19.34V23.11C28.3948 23.4162 28.6046 23.6903 28.9057 23.75L29.2157 23.82C29.3957 23.82 29.5857 23.91 29.8657 23.96C29.9096 24.1475 29.9096 24.3425 29.8657 24.53C29.8595 24.5783 29.8452 24.6249 29.8236 24.6681L29.7857 24.73C29.0857 24.73 28.3757 24.68 27.3357 24.68H25.1457C25.0922 24.5537 25.0683 24.4169 25.0757 24.28C25.0271 24.1665 25.0066 24.0431 25.0157 23.92H25.2957C25.5357 23.87 25.7457 23.84 25.9457 23.79C26.2957 23.68 26.4257 23.49 26.4457 23.06C26.5515 21.4985 26.5515 19.9315 26.4457 18.37C26.3699 17.3873 25.5688 16.6285 24.6 16.59L24.4457 16.59C23.6873 16.6397 22.962 16.9187 22.3657 17.39C22.2383 17.5124 22.1692 17.6834 22.1757 17.86V23.12C22.1825 23.4445 22.4242 23.7158 22.7457 23.76C22.9036 23.8002 23.0639 23.8303 23.2257 23.85L23.5957 23.92C23.6269 24.1263 23.62 24.3361 23.5758 24.5392L23.5357 24.69L18.8747 24.689L18.8395 24.5784C18.8094 24.4651 18.7979 24.3474 18.8057 24.23C18.803 24.1225 18.8271 24.0159 18.8757 23.92C19.1752 23.875 19.4723 23.8149 19.7657 23.74C20.1757 23.64 20.3357 23.41 20.3557 22.89C20.393 22.234 20.4105 21.268 20.4156 20.2634L20.4172 19.507C20.4168 18.8778 20.4124 18.26 20.4057 17.72V17.67C20.4353 17.4519 20.3525 17.2336 20.1857 17.09C19.8067 16.8464 19.3916 16.6641 18.9557 16.55C18.7657 16.49 18.6557 16.39 18.6657 16.27C18.6757 16.15 18.7957 16.01 19.0457 15.96C20.1123 15.8055 21.1586 15.5339 22.1657 15.15C22.2178 15.2214 22.2489 15.3053 22.2563 15.3923L22.2557 16.46C22.2659 16.546 22.3391 16.6106 22.4257 16.61C22.4705 16.6089 22.5133 16.591 22.5457 16.56C23.4115 15.7932 24.4883 15.3053 25.6357 15.16C26.6361 15.1573 27.5527 15.7181 28.0057 16.61ZM101.746 10.25L101.836 10.3C102.046 10.3 102.666 10.37 104.236 10.37C105.806 10.37 106.916 10.32 108.356 10.32C110.136 10.32 112.586 10.97 112.586 13.62C112.522 14.9173 111.68 16.0473 110.456 16.48C110.386 16.48 110.386 16.55 110.456 16.57C112.176 17.01 113.676 18.06 113.676 20.07C113.676 22.08 112.446 23.27 110.676 24.07C109.71 24.4442 108.692 24.6584 107.661 24.7058L107.274 24.7158C107.144 24.7165 107.015 24.7145 106.886 24.71L106.713 24.7091L106.513 24.7066C105.446 24.6904 103.443 24.6214 102.034 24.6177L101.761 24.6179C101.672 24.6183 101.587 24.6189 101.506 24.62C101.432 24.5896 101.449 24.4349 101.502 24.2606C101.573 24.0333 101.706 23.7723 101.786 23.71C102.124 23.6919 102.46 23.6349 102.786 23.54C103.346 23.41 103.406 23.23 103.476 22.4C103.542 21.6115 103.482 19.388 103.476 17.6244L103.476 12.35C103.476 11.7468 103.245 11.5256 102.85 11.3765C102.826 11.3674 102.801 11.3586 102.776 11.35C102.336 11.2 101.856 11.21 101.396 11.14C101.28 11.0337 101.612 10.3856 101.734 10.261C101.738 10.257 101.742 10.2531 101.746 10.25ZM177.886 14.78C178.747 14.7969 179.559 15.183 180.116 15.84C180.631 16.5697 180.862 17.4621 180.766 18.35V24.69H179.156V18.29C179.156 16.6 178.036 16.29 177.406 16.29C176.39 16.3187 175.485 16.9413 175.096 17.88C174.987 18.3348 174.946 18.8033 174.976 19.27V24.67H173.386V18.43C173.386 16.54 172.166 16.33 171.616 16.33C170.649 16.3456 169.771 16.8965 169.336 17.76C169.209 18.1534 169.161 18.5681 169.196 18.98V24.69H167.666V15.09H169.196V16.39C169.862 15.439 170.927 14.8457 172.086 14.78C172.848 14.7897 173.573 15.1156 174.086 15.68C174.308 15.955 174.506 16.2495 174.676 16.56C175.456 15.5516 176.617 14.9081 177.886 14.78ZM164.836 10.3V24.69H163.286V10.3H164.836ZM117.203 21.09C118.194 21.0827 119.005 21.8786 119.016 22.87C119.027 23.3525 118.841 23.8187 118.502 24.1618C118.2 24.4668 117.8 24.6513 117.376 24.6846L117.216 24.69C116.224 24.6899 115.419 23.8881 115.416 22.8966C115.412 21.9051 116.211 21.0974 117.203 21.09ZM135.016 10.3C137.766 10.3 139.686 11.61 139.686 14.5C139.763 15.474 139.448 16.4386 138.812 17.18C138.176 17.9214 137.27 18.3785 136.296 18.45L140.296 24.69H138.016L134.076 18.57H130.376V24.69H128.516V10.3H135.016ZM93.3839 10.3211L93.7012 10.3257C95.2841 10.3822 96.8144 10.9411 98.0657 11.93C99.5696 13.2481 100.403 15.1714 100.336 17.17C100.441 19.4775 99.3676 21.6806 97.4857 23.02C96.0561 24.0085 94.3859 24.5765 92.6637 24.6707L92.3186 24.6832L91.9725 24.683C91.857 24.6808 91.7414 24.6765 91.6257 24.67L91.3567 24.6694L91.0663 24.6678C90.2651 24.6623 89.2571 24.6468 88.2163 24.6312L87.4322 24.6197C87.0398 24.6141 86.6489 24.6088 86.2686 24.6044L85.8657 24.6C85.7657 24.42 86.0357 23.7 86.1957 23.69C86.5138 23.6764 86.8278 23.6123 87.1257 23.5C87.5457 23.33 87.6457 23.11 87.6957 22.36C87.7657 20.94 87.6957 19.25 87.6957 17.36V12.46C87.6957 11.61 87.3257 11.57 86.6957 11.46C86.2663 11.3674 85.8324 11.2973 85.3957 11.25C85.4743 10.9262 85.6209 10.6228 85.8257 10.36L85.8557 10.33C86.2457 10.33 87.7457 10.4 88.4357 10.4C89.7357 10.4 90.6357 10.33 93.0657 10.33L93.3839 10.3211ZM117.216 21.26C116.866 21.2579 116.534 21.3667 116.261 21.5594C116.014 21.7331 115.815 21.975 115.693 22.2654C115.436 22.8779 115.574 23.585 116.043 24.0561C116.367 24.3822 116.805 24.5507 117.248 24.5395L117.395 24.5291C117.543 24.5119 117.689 24.4745 117.831 24.4161C118.445 24.1629 118.846 23.5642 118.846 22.9C118.848 22.466 118.678 22.0488 118.372 21.7409C118.066 21.4331 117.65 21.26 117.216 21.26ZM117.216 21.76C117.716 21.76 117.926 21.98 117.926 22.39C117.962 22.6807 117.764 22.949 117.476 23L117.956 24L117.656 24.03L117.196 23.03H116.816V24.03H116.546V21.76H117.216ZM77.4957 16.13C77.1033 16.1222 76.7173 16.23 76.3857 16.44C75.4946 17.1221 75.0337 18.2268 75.1757 19.34C75.1757 22.03 76.5257 23.9 78.4457 23.9C78.9652 23.9185 79.4724 23.7398 79.8657 23.4C80.561 22.6233 80.8889 21.5852 80.7657 20.55C80.7657 17.91 79.4557 16.13 77.4957 16.13ZM42.1057 16.13C41.7133 16.1222 41.3273 16.23 40.9957 16.44C40.1046 17.1221 39.6437 18.2268 39.7857 19.34C39.7857 22.03 41.1257 23.9 43.0557 23.9C43.5727 23.922 44.0781 23.7428 44.4657 23.4C45.1646 22.625 45.4962 21.5866 45.3757 20.55C45.3757 17.9925 44.1369 16.2421 42.2867 16.1352L42.1057 16.13ZM105.946 17.45C105.882 17.45 105.818 17.5081 105.807 17.5487C105.806 17.553 105.806 17.5566 105.806 17.56V22.23C105.861 22.6756 106.105 23.076 106.476 23.33C107.05 23.5299 107.658 23.6148 108.266 23.58L108.469 23.5902L108.672 23.5855C109.343 23.5454 109.983 23.2614 110.465 22.7791C111.044 22.2004 111.337 21.3954 111.266 20.58L111.306 20.61C111.306 18.61 109.826 17.45 107.126 17.45C106.733 17.4256 106.339 17.4256 105.946 17.45ZM158.646 20.02C157.466 20.1447 156.298 20.3688 155.156 20.69C154.514 20.9057 154.065 21.4851 154.016 22.16C154.016 22.87 154.546 23.58 155.826 23.58C156.592 23.6379 157.345 23.358 157.887 22.8139C158.429 22.2697 158.706 21.5158 158.646 20.75V20.02ZM92.5168 23.5777L92.7857 23.57L93.0224 23.5767L93.2581 23.5709C94.2762 23.5188 95.2513 23.1188 96.0157 22.43C97.3193 21.1511 97.9894 19.3605 97.8457 17.54C97.9807 15.4205 96.9545 13.3949 95.1657 12.25C93.9936 11.6014 92.6636 11.2932 91.3257 11.36L91.0945 11.3539L90.8639 11.365C90.634 11.3846 90.4065 11.4298 90.1857 11.5C90.0815 11.5798 90.0075 11.6926 89.9757 11.82V22.09C89.9909 22.4731 90.1605 22.8338 90.4457 23.09L90.4757 23.02C91.0965 23.3829 91.8008 23.5745 92.5168 23.5777ZM117.176 22.01H116.816V22.79H117.216C117.536 22.79 117.656 22.68 117.656 22.39C117.656 22.1 117.536 22.01 117.176 22.01ZM65.7957 16.02C64.7257 16.02 64.0257 16.87 64.0257 18.18C64.0257 19.49 64.6257 21.02 66.3057 21.02C66.6997 21.0147 67.079 20.8693 67.3757 20.61C67.8132 20.0992 68.0417 19.442 68.0157 18.77C68.0157 18.4643 67.9904 18.1815 67.9412 17.9229C67.7085 16.701 66.9428 16.02 65.7957 16.02ZM146.016 16.02C144.286 16.02 143.426 17.44 143.286 18.97L148.786 19.02C148.838 18.2493 148.571 17.4911 148.047 16.9235C147.523 16.356 146.788 16.0292 146.016 16.02ZM134.876 11.89H130.376V16.96H134.606C136.256 16.96 137.746 16.48 137.746 14.5C137.746 12.89 136.746 11.89 134.876 11.89ZM106.056 11.45L106.016 11.49C105.912 11.5676 105.841 11.6801 105.814 11.8058C105.81 11.8239 105.808 11.8419 105.806 11.86V16.32C105.816 16.3781 105.859 16.4251 105.916 16.44H107.586L107.829 16.4482L108.072 16.4416C108.476 16.4183 108.875 16.3337 109.256 16.19C109.966 15.782 110.384 15.0075 110.336 14.19C110.336 13.2441 110.025 12.5801 109.48 12.1428C108.873 11.6556 107.976 11.45 106.896 11.45C106.616 11.4335 106.335 11.4335 106.056 11.45Z"
        fill={fill}
      />
    </svg>
  );
}