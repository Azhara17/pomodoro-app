import "./Btn.css";

function SettingsBtn(props) {
  return (
    <button className="settings__btn" {...props}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.8709 32.0834H16.1146C15.4648 32.0834 14.8417 31.8253 14.3822 31.3658C13.9227 30.9064 13.6646 30.2832 13.6646 29.6334V28.0438C13.6567 27.9502 13.6224 27.8607 13.5655 27.7858C13.5087 27.7109 13.4318 27.6538 13.3438 27.6209C13.2545 27.5637 13.1508 27.5334 13.0448 27.5334C12.9388 27.5334 12.8351 27.5637 12.7459 27.6209L11.6667 28.7876C11.4403 29.0155 11.1711 29.1965 10.8745 29.3199C10.5779 29.4434 10.2598 29.5069 9.93856 29.5069C9.6173 29.5069 9.29922 29.4434 9.00263 29.3199C8.70604 29.1965 8.4368 29.0155 8.21044 28.7876L6.21252 26.8334C5.98126 26.6075 5.79759 26.3375 5.67235 26.0395C5.54712 25.7414 5.48285 25.4213 5.48335 25.098C5.48429 24.4367 5.74635 23.8025 6.21252 23.3334L7.29169 22.2542C7.34379 22.1739 7.37151 22.0802 7.37151 21.9845C7.37151 21.8887 7.34379 21.795 7.29169 21.7147C7.20419 21.4959 7.05835 21.3355 6.85419 21.3355H5.36669C4.71557 21.3316 4.09243 21.0703 3.63338 20.6085C3.17433 20.1467 2.91668 19.522 2.91669 18.8709V16.1147C2.91669 15.4649 3.17481 14.8417 3.63428 14.3823C4.09374 13.9228 4.71691 13.6647 5.36669 13.6647H6.95627C7.04992 13.6568 7.1394 13.6224 7.21428 13.5656C7.28916 13.5088 7.34635 13.4319 7.37919 13.3438C7.43636 13.2546 7.46674 13.1508 7.46674 13.0449C7.46674 12.9389 7.43636 12.8351 7.37919 12.7459L6.21252 11.6667C5.98456 11.4404 5.80364 11.1711 5.68018 10.8746C5.55672 10.578 5.49316 10.2599 5.49316 9.93862C5.49316 9.61736 5.55672 9.29928 5.68018 9.00269C5.80364 8.7061 5.98456 8.43687 6.21252 8.2105L8.16669 6.21258C8.39039 5.98241 8.65789 5.79933 8.95342 5.6741C9.24895 5.54888 9.56655 5.48404 9.88752 5.48341C10.2175 5.48197 10.5444 5.54563 10.8497 5.67075C11.155 5.79587 11.4327 5.98 11.6667 6.21258L12.7459 7.29175C12.8262 7.34385 12.9199 7.37157 13.0156 7.37157C13.1114 7.37157 13.2051 7.34385 13.2854 7.29175C13.5042 7.20425 13.6646 7.05841 13.6646 6.85425V5.36675C13.6685 4.71563 13.9298 4.09249 14.3916 3.63344C14.8534 3.17439 15.4781 2.91674 16.1292 2.91675H18.9584C19.6081 2.91675 20.2313 3.17487 20.6908 3.63434C21.1502 4.0938 21.4084 4.71697 21.4084 5.36675V6.95633C21.4163 7.04998 21.4506 7.13946 21.5074 7.21434C21.5642 7.28922 21.6411 7.34641 21.7292 7.37925C21.8184 7.43642 21.9222 7.4668 22.0281 7.4668C22.1341 7.4668 22.2379 7.43642 22.3271 7.37925L23.3334 6.21258C23.5597 5.98462 23.829 5.8037 24.1255 5.68024C24.4221 5.55678 24.7402 5.49322 25.0615 5.49322C25.3827 5.49322 25.7008 5.55678 25.9974 5.68024C26.294 5.8037 26.5632 5.98462 26.7896 6.21258L28.7875 8.16675C29.0181 8.39316 29.2014 8.66322 29.3265 8.96116C29.4517 9.25911 29.5164 9.57899 29.5167 9.90216C29.5237 10.2307 29.4626 10.5572 29.3371 10.8609C29.2116 11.1646 29.0244 11.439 28.7875 11.6667L27.7084 12.7459C27.6563 12.8263 27.6285 12.92 27.6285 13.0157C27.6285 13.1115 27.6563 13.2052 27.7084 13.2855C27.7959 13.5042 27.9417 13.6647 28.1459 13.6647H29.7354C30.3687 13.6947 30.966 13.9675 31.4032 14.4265C31.8405 14.8855 32.0841 15.4953 32.0834 16.1292V18.9584C32.0834 19.6082 31.8252 20.2314 31.3658 20.6908C30.9063 21.1503 30.2831 21.4084 29.6334 21.4084H28.0438C27.9501 21.4163 27.8606 21.4507 27.7858 21.5075C27.7109 21.5643 27.6537 21.6412 27.6209 21.7292C27.5688 21.8096 27.541 21.9033 27.541 21.999C27.541 22.0948 27.5688 22.1885 27.6209 22.2688L28.7438 23.3917C28.9717 23.6181 29.1527 23.8873 29.2761 24.1839C29.3996 24.4805 29.4631 24.7986 29.4631 25.1199C29.4631 25.4411 29.3996 25.7592 29.2761 26.0558C29.1527 26.3524 28.9717 26.6216 28.7438 26.848L26.8334 28.7876C26.6096 29.0177 26.3422 29.2008 26.0466 29.3261C25.7511 29.4513 25.4335 29.5161 25.1125 29.5167C24.4613 29.5082 23.839 29.2467 23.3771 28.7876L22.2542 27.7084C22.1738 27.6563 22.0801 27.6286 21.9844 27.6286C21.8886 27.6286 21.7949 27.6563 21.7146 27.7084C21.4959 27.7959 21.3354 27.9417 21.3354 28.1459V29.7355C21.3054 30.3687 21.0326 30.966 20.5736 31.4033C20.1146 31.8405 19.5048 32.0841 18.8709 32.0834ZM16.5813 29.1667H18.4188V28.0438C18.425 27.3713 18.6306 26.7158 19.0096 26.1602C19.3887 25.6047 19.924 25.1741 20.5479 24.923C21.1744 24.6492 21.8682 24.5681 22.5409 24.6902C23.2136 24.8123 23.8347 25.1319 24.325 25.6084L25.1125 26.3959L26.3959 25.1126L25.6084 24.3105C25.1349 23.8276 24.8155 23.2149 24.6909 22.5502C24.5663 21.8855 24.642 21.1988 24.9084 20.5772C25.1617 19.956 25.5933 19.4237 26.1486 19.0474C26.704 18.6711 27.3583 18.4676 28.0292 18.4626H29.1667V16.5813H28.0438C27.3713 16.5751 26.7157 16.3695 26.1602 15.9905C25.6046 15.6114 25.174 15.0761 24.9229 14.4522C24.6491 13.8257 24.5681 13.1319 24.6901 12.4592C24.8122 11.7865 25.1319 11.1654 25.6084 10.6751L26.3959 9.88758L25.1125 8.60425L24.3104 9.39175C23.82 9.83969 23.2119 10.1382 22.5575 10.2521C21.9031 10.366 21.2299 10.2906 20.617 10.0347C20.004 9.77877 19.477 9.35308 19.0979 8.80771C18.7188 8.26234 18.5034 7.62 18.4771 6.95633V5.83341H16.5813V6.95633C16.5751 7.62884 16.3694 8.28438 15.9904 8.83993C15.6114 9.39549 15.076 9.82607 14.4521 10.0772C13.8256 10.351 13.1318 10.432 12.4591 10.31C11.7864 10.1879 11.1653 9.86824 10.675 9.39175L9.88752 8.60425L8.60419 9.88758L9.39169 10.6897C9.83963 11.1801 10.1381 11.7882 10.252 12.4426C10.3659 13.097 10.2905 13.7702 10.0346 14.3831C9.77871 14.9961 9.35302 15.5231 8.80765 15.9022C8.26228 16.2813 7.61994 16.4967 6.95627 16.523H5.83335V18.3605H6.95627C7.62878 18.3667 8.28431 18.5723 8.83987 18.9514C9.39543 19.3304 9.82601 19.8658 10.0771 20.4897C10.3509 21.1161 10.432 21.8099 10.3099 22.4826C10.1878 23.1553 9.86817 23.7764 9.39169 24.2667L8.60419 25.0542L9.88752 26.3376L10.6896 25.5501C11.18 25.1021 11.7882 24.8036 12.4425 24.6897C13.0969 24.5758 13.7702 24.6513 14.3831 24.9072C14.996 25.1631 15.523 25.5887 15.9021 26.1341C16.2813 26.6795 16.4966 27.3218 16.5229 27.9855L16.5813 29.1667Z"
          fill="#FAFAFA"
          fill-opacity="0.7"
        />
        <path
          d="M17.5 22.6041C16.4905 22.6041 15.5036 22.3047 14.6643 21.7439C13.8249 21.183 13.1707 20.3859 12.7843 19.4532C12.398 18.5205 12.2969 17.4943 12.4939 16.5041C12.6908 15.514 13.177 14.6046 13.8908 13.8907C14.6046 13.1769 15.5141 12.6908 16.5042 12.4938C17.4943 12.2969 18.5206 12.398 19.4533 12.7843C20.3859 13.1706 21.1831 13.8248 21.7439 14.6642C22.3048 15.5036 22.6042 16.4904 22.6042 17.4999C22.6042 18.8536 22.0664 20.1519 21.1092 21.1091C20.152 22.0663 18.8537 22.6041 17.5 22.6041ZM17.5 15.3124C17.0673 15.3124 16.6444 15.4407 16.2847 15.6811C15.9249 15.9214 15.6446 16.2631 15.479 16.6628C15.3134 17.0625 15.2701 17.5023 15.3545 17.9267C15.4389 18.351 15.6473 18.7408 15.9532 19.0467C16.2591 19.3526 16.6489 19.561 17.0732 19.6454C17.4976 19.7298 17.9374 19.6865 18.3371 19.5209C18.7368 19.3553 19.0785 19.075 19.3188 18.7152C19.5592 18.3555 19.6875 17.9326 19.6875 17.4999C19.6875 16.9198 19.457 16.3634 19.0468 15.9531C18.6365 15.5429 18.0801 15.3124 17.5 15.3124Z"
          fill="#FAFAFA"
          fill-opacity="0.7"
        />
      </svg>
    </button>
  );
}

export default SettingsBtn;
