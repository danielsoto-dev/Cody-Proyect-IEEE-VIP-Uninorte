import * as React from 'react';

function SvgUninorteLogo(props) {
  return (
    <svg
      viewBox='0 0 511 160'
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      clipRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit={2}
      width='1em'
      height='1em'
      {...props}
    >
      <path
        d='M7.4 56.768v2.687c0 12.871-.016 25.746.013 38.621.009 2.758.013 5.5.35 8.275.492 4.067 1.713 7.809 3.792 11.263.896 1.487 2.096 2.85 3.363 4.058 1.845 1.763 4.083 2.996 6.429 3.996 3.054 1.308 6.2 2.25 9.558 2.292 1.542.016 3.083-.034 4.621.02 3.817.142 7.458-.504 11.042-1.854 3.766-1.416 6.9-3.558 9.42-6.7 3.667-4.566 5.442-9.879 5.509-15.579.183-15.18.07-30.367.062-45.554 0-.504-.162-1.009-.241-1.471-4.28-.358-15.084-.22-16.88.246v42.929c0 2.38.071 4.767-.491 7.108-.842 3.513-2.342 6.484-5.992 7.917-1.446.57-2.879.338-4.325.425-3.342.213-5.483-1.57-7.07-4.267-1.622-2.746-1.988-5.804-1.997-8.883-.054-14.338-.025-28.675-.033-43.013 0-.816-.07-1.633-.108-2.516H7.4zm37.76-11.171c1.733-1.817 2.695-3.85 3.795-5.775 4.05-7.1 7.454-14.517 10.625-22.046a2108.427 2108.427 0 016.917-16.13c.2-.478.533-.9.975-1.624.246.567.441.858.487 1.17.063.455.021.922.021 1.388-.004 42.188-.012 84.371-.02 126.559 0 .616.062 1.246-.042 1.846-.121.737-.388 1.445-.538 1.975-1.317.825-2.52.937-3.775.937-19.667-.008-39.333-.004-59-.004-.617 0-1.25.025-1.846-.096-1.854-.37-2.596-1.258-2.716-3.187-.05-.846-.042-1.696-.042-2.546V52.176c0-.925.03-1.85.037-2.779.009-1.313.455-2.404 1.838-3.28 1.154-.028 2.533-.103 3.912-.103 11.646-.009 23.292.012 34.938-.017 1.52-.004 3.042-.267 4.433-.4M101.539 56.705H89.78c-1.925 0-3.858-.054-5.779.017-1.887.067-3.808-.304-5.775.283v2.171c.03 22.438.054 44.875.088 67.313 0 .066.05.141.091.204.046.062.113.104.184.17 2.475.322 12.516.247 14.425-.153v-2.442c0-14.342.012-28.684-.017-43.03 0-1.445-.271-2.891-.354-4.341-.021-.354.191-.72.346-1.258 5.562 17.279 11.041 34.291 16.504 51.258 3.875.37 21.541.22 23.2-.196V56.984c-2.509-.458-12.971-.375-14.663.138v2.48c0 14.34-.004 28.682 0 43.024 0 1.613-.162 3.233.396 4.808.08.23-.075.542-.204 1.313-5.625-17.55-11.1-34.62-16.683-52.042M71.205.001c.496.896.859 1.446 1.121 2.042 4.038 9.237 7.938 18.541 12.154 27.7 2.15 4.675 4.909 9.066 7.317 13.629 1.033 1.967 2.642 2.662 4.725 2.658 2.158-.004 4.317.017 6.479.017 10.025-.004 20.05-.013 30.075-.02h3.325c1.842 1.09 2.433 2.42 2.375 4.095-.017.537 0 1.08 0 1.62v76.35c0 .847.008 1.7-.042 2.547-.091 1.546-.833 2.65-2.404 2.975-.966.196-1.975.287-2.966.287-11.796.017-23.596.009-35.396.009-7.713-.005-15.425-.013-23.138.004-1.429.004-2.791-.084-3.725-1.367-.312-1.73-.6-127.15-.287-131.38.02-.262.166-.516.387-1.166M68.651 144.589c-10.813 2.833-21.588 5.658-32.367 8.475-7.062 1.846-14.137 3.654-21.187 5.533-1.371.363-2.563.367-3.634-.57-.591-1.16-.4-2.338-.216-3.455.446-2.725.975-5.442 1.546-8.146.479-2.25 1.062-4.483 1.612-6.716.404-1.625 1.404-2.767 2.98-3.263 1.012-.32 2.108-.392 3.17-.55.3-.046.613-.008.925-.008 31.996 0 63.996-.004 95.996.016 1.138.005 2.296.192 3.413.434.55.116 1.033.554 1.454.796 1.241 5.125 2.45 10.05 3.612 14.983.459 1.933 1.104 3.858.7 6.12-.416.313-.95.709-1.566 1.172-9.034-2.409-18.013-4.805-26.996-7.192-6.759-1.8-13.517-3.596-20.28-5.367-2.974-.775-5.966-1.475-9.162-2.262M212.097 70.684c.72-1.704.312-3.229.387-4.7.08-1.541.017-3.083.017-4.625v-9.108c3.225-.258 6.267-.067 9.417-.129v33.187c-1.646.021-3.238.05-4.83.059-1.537.012-3.074.004-4.791.004-4.092-5.988-8.192-11.988-12.504-18.292-.721 2.259-.292 4.225-.371 6.146-.08 1.921-.017 3.854-.017 5.78v5.953c-1.662.5-5.854.6-9.3.255V52.372c1.446-.492 2.992-.18 4.5-.238 1.538-.054 3.08-.012 4.817-.012 4.167 6.1 8.342 12.22 12.675 18.562M331.176 129.205h-9.55l-12.675-18.466c-.141.796-.291 1.254-.291 1.712-.017 4.78-.009 9.563-.009 14.342v2.446c-3.108.141-6 .087-8.862.041-.43-1.812-.575-29.162-.184-33.133 1.475-.025 2.988-.067 4.5-.08 1.542-.016 3.08-.003 4.705-.003 4.166 6.12 8.312 12.216 12.637 18.57.57-2.258.23-4.237.292-6.183.062-2.004.012-4.008.012-6.012v-6.117c1.55-.492 3.088-.196 4.592-.246 1.537-.054 3.075-.012 4.583-.012.475 1.9.65 26.508.25 33.141M413.293 104.847c-.667-1.408-1.692-2.133-2.958-2.267-2.196-.237-4.409-.3-6.571.025-.45 2.459-.38 5.596.179 7.3 1.004 0 2.075.05 3.137-.016.917-.054 1.821-.242 2.734-.363 1.546-.204 2.762-.892 3.479-2.429v-2.25zm1.442 24.488c-1.663-3.125-3.192-6.055-4.775-8.955-.917-1.683-1.759-3.45-3.659-4.441-.766-.071-1.608-.15-2.625-.242-.4 2.204-.133 4.417-.179 6.608-.046 2.23-.012 4.455-.012 6.867-1.675.313-3.28.125-4.863.154-1.612.034-3.225.009-5.058.009-.254-2.85-.084-5.6-.117-8.342-.03-2.775-.004-5.55-.004-8.325V96.08h2.47c4.855 0 9.71-.046 14.563.025 2.067.03 4.146.184 6.196.48 2.967.429 5.18 2.091 6.163 4.929 1.762 5.116.104 10.629-5.655 12.516-.491.163-.95.421-1.825.817 3.884 1.175 5.438 4.108 6.938 7.096 1.208 2.404 2.442 4.792 3.762 7.392h-11.32zM328.697 65.826c2.62.192 4.9.28 7.154-.333 1.913-.521 3.042-1.925 2.95-3.625-.087-1.642-1.166-2.863-3.108-3.184-2.2-.366-4.425-.2-6.538-.116-.229.391-.441.587-.445.787-.021 2.042-.013 4.084-.013 6.471m22.675 19.463h-11.38c-1.29-2.388-2.603-4.821-3.928-7.246-.7-1.284-1.4-2.571-2.15-3.825-1.275-2.142-2.384-2.588-5.117-2.067-.37 2.171-.12 4.396-.167 6.608-.045 2.142-.012 4.284-.012 6.525h-9.467c-.091-.35-.262-.704-.262-1.054-.013-10.329-.013-20.662-.004-30.991 0-.288.091-.584.162-.996.65-.038 1.246-.1 1.846-.1 5.629-.004 11.258-.059 16.883.05 1.742.029 3.509.366 5.209.8 4.616 1.179 6.22 5.45 5.754 9.533-.459 3.992-2.746 6.571-6.6 7.738-.43.133-.846.312-1.354.504.229.241.35.504.529.55 2.279.575 3.704 2.2 4.779 4.096 1.783 3.129 3.408 6.35 5.28 9.875M418.251 78.08c1.688 0 3.217.042 4.75-.008 2.538-.088 4.467-1.52 5.067-3.925.892-3.563.85-7.133-.196-10.683-.529-1.792-1.742-2.888-3.387-3.509-2.05-.775-4.175-.737-6.28-.404-.42 2.204-.383 16.68.046 18.53M408.04 52.217c.583-.03 1.183-.088 1.787-.088 4.78-.004 9.559-.02 14.342.025 2.08.021 4.092.404 6.075 1.138 3.167 1.17 5.312 3.329 6.662 6.337 1.113 2.48 1.746 5.088 1.767 7.825.017 2.463.108 4.93-.492 7.35-1.158 4.642-3.745 8.063-8.366 9.671-1.225.425-2.542.775-3.821.792-5.93.083-11.863.037-17.78.037-.537-1.937-.65-24.65-.174-33.087M160.955 122.035c1.742 0 3.267.045 4.788-.013 2.466-.092 3.975-1.237 4.808-3.575 1.233-3.458 1-6.967.196-10.446-.654-2.82-2.85-4.492-5.83-4.62-1.295-.055-2.59-.009-4.024-.009-.08.346-.263.78-.263 1.212-.02 5.384-.02 10.771.004 16.159 0 .496.242.987.321 1.292m-10.254 7.262V96.259c.358-.05.783-.166 1.208-.17 5.234-.005 10.471-.013 15.705.02a14.38 14.38 0 016.012 1.346c4.154 1.909 6.225 5.396 7.192 9.592.887 3.854.833 7.796.029 11.675-.788 3.796-2.858 6.767-6.258 8.704-2.034 1.163-4.263 1.821-6.596 1.85-5.692.063-11.388.021-17.292.021M489.772 78.151c1.771.567 3.354.017 4.946-.1 2.833-.212 4.683-1.929 5.13-4.72.453-2.822.6-5.655-.005-8.476-.45-2.104-1.254-4-3.487-4.808-2.13-.767-4.313-.883-6.5-.53-.355 1.863-.413 16.226-.084 18.634m-10.129 7.133V52.24c.575-.046 1.092-.121 1.604-.121 4.775-.009 9.55-.05 14.325.033 1.592.03 3.221.258 4.771.646 4.388 1.096 7.146 4.017 8.654 8.192.659 1.816.838 3.716 1.059 5.633.333 2.87.041 5.658-.55 8.425-1.28 5.983-5.563 9.812-11.817 10.167-5.904.333-11.842.07-18.046.07M369.622 112.685c-.208-2.096-.1-4.163-1.17-6.105-1.53-2.783-3.913-3.833-6.917-3.612-2.8.208-4.721 1.746-5.688 4.379-1.083 2.967-1.146 5.992-.525 9.088.804 4.025 3.317 6.154 7.4 6.079 3.12-.059 5.304-1.571 6.15-4.604.467-1.68.513-3.48.75-5.225m-7.408 17.308c-1.83-.225-3.675-.346-5.48-.692-4.82-.925-8.145-3.737-10.12-8.225-1.53-3.479-1.763-7.07-1.425-10.816.266-2.988 1.025-5.734 2.658-8.238 2.096-3.213 5.183-5.03 8.813-5.88 3.791-.89 7.666-.903 11.445.022 5.334 1.304 8.946 4.504 10.538 9.925 1.258 4.275 1.237 8.575.146 12.77-1.742 6.667-6.409 10.25-13.317 10.892-1.07.1-2.158.017-3.237.017-.009.075-.013.15-.021.225M172.651 52.234h9.963c.033.7.087 1.3.087 1.9.008 5.859.05 11.721-.017 17.58-.029 2.629-.491 5.216-1.75 7.57-1.633 3.059-4.058 5.205-7.491 6.042-3.15.767-6.321 1.263-9.575.53-1.267-.288-2.613-.213-3.871-.517-4.613-1.121-7.458-4.071-8.675-8.63-.542-2.016-.85-4.041-.825-6.145.05-5.317.017-10.638.017-15.959v-2.37h10.033v18.558c0 .616-.025 1.233.012 1.85.325 5.129 3.634 6.65 8.192 5.625 2.63-.596 3.592-2.7 3.875-5.171.07-.608.025-1.233.025-1.85V52.234zM204.589 102.851v5.488c1.808.479 3.57.191 5.308.241 1.77.05 3.546.009 5.317.009h5.379v6.246c-2.671.312-5.275.104-7.867.141-2.612.038-5.225.009-7.775.009-.58 1.7-.63 5.004-.12 7.316 2.853.134 5.762.071 8.67.054 2.913-.016 5.821-.116 8.846-.183.375 1.08.142 2.238.183 3.367.038 1.146.009 2.296.009 3.404-1.759.458-23.65.617-27.759.237-.05-.058-.108-.112-.15-.175-.041-.058-.096-.129-.096-.2-.033-.612-.083-1.225-.079-1.841.009-10.092.03-20.184.054-30.275 0-.134.113-.271.225-.517h27.217v6.68H204.59zM506.556 102.88H489.36c-.43 1.921-.292 3.65-.125 5.53 1.783.379 3.546.15 5.287.191 1.771.038 3.542.008 5.317.008h5.37v6.255c-.683.05-1.278.129-1.87.133-4.008.013-8.017 0-12.021.013-.742.004-1.487.091-2.2.137v6.808c1.688.509 13.642.684 17.7.288.604 1.037.263 2.208.317 3.317.05 1.145.008 2.295.008 3.404-1.767.446-23.9.6-27.754.225-.05-.054-.109-.109-.154-.171-.038-.058-.092-.133-.092-.2-.03-10.092-.054-20.184-.08-30.275 0-.617.022-1.23.06-1.846.003-.138.12-.267.237-.5h27.196v6.683zM312.335 85.243h-27.43c-.362-1.95-.408-30.671-.054-32.988h26.875c.404 2.109.121 4.234.2 6.521-.804.058-1.47.146-2.137.146-4.321.017-8.638.004-12.959.017-.745 0-1.495.066-2.358.108v5.296c1.725.604 3.496.225 5.23.287 1.85.067 3.7.017 5.55.017h5.47v6.42h-16.08c-.512 2.455-.278 4.697-.203 7.167 1.046.071 1.866.171 2.683.171 4.242.017 8.483.009 12.725.004h2.408c.242 2.35.146 4.475.08 6.834M353.772 74.78c3.13-.212 6.108-.412 9.104-.612.725 1.7 1.192 3.296 2.538 4.491 1.646 1.459 5.583 1.746 7.479-.083 1.446-1.392 1.62-3.35.092-4.62-.859-.717-1.955-1.238-3.025-1.597-1.963-.658-4.013-1.062-5.98-1.708-1.529-.496-3.041-1.087-4.462-1.829-3.054-1.592-4.638-4.092-4.57-7.642.062-3.491 1.566-6.025 4.595-7.687 2.13-1.171 4.408-1.821 6.833-1.834 2.534-.016 5.046-.07 7.588.359 4.366.733 8.079 3.716 8.6 9.087-1.509.092-3.013.167-4.517.28-1.53.112-3.05.258-4.604.391-.188-.408-.313-.675-.43-.946-1.22-2.787-3.383-3.908-6.333-3.275-1.729.375-2.408 1.28-2.462 3.28.404 1.037 1.287 1.529 2.262 1.804 1.846.529 3.738.9 5.571 1.462 2.121.654 4.263 1.308 6.288 2.204 7.633 3.38 6.187 13.059 1.7 16.538-2.213 1.712-4.692 2.454-7.38 2.97-3.737.717-7.345.184-10.95-.629-4.854-1.104-7.97-5.92-7.937-10.404M461.089 72.701c-1.3-5.229-3.113-10.67-4.05-11.892-1.23 4.017-2.413 7.9-3.604 11.792 2.033.496 5.6.517 7.654.1m-9.254-20.467h11.145c4.117 10.942 8.225 21.85 12.346 32.788-1.912.43-7.925.492-10.37.142a582.36 582.36 0 01-.792-2.592c-.242-.8-.484-1.6-.709-2.338-1.695-.5-9.17-.604-12.254-.17-.512 1.629-1.058 3.366-1.662 5.275h-10.163c4.13-10.971 8.292-22.03 12.459-33.105M244.451 52.218h10.442l7.537 23.833c1.909-3.85 2.917-7.85 4.188-11.758 1.279-3.942 2.433-7.921 3.62-11.804 1.896-.43 7.696-.471 10.176-.084-4.075 10.967-8.138 21.892-12.221 32.884h-11.154c-4.275-10.842-8.275-21.884-12.588-33.071M466.293 96.201v7.675h-10.546c-.425 2.1-.583 19.1-.287 25.38h-9.667c-.038-.871-.1-1.688-.1-2.505-.008-6.779-.004-13.558-.004-20.342v-2.495c-3.6-.1-6.967.008-10.484-.075-.32-2.55-.112-4.984-.15-7.388 1.817-.483 25.213-.667 31.238-.25M245.697 121.551h16.12v7.467c-1.753.367-22.637.483-25.853.158-.405-1.816-.563-26.662-.213-32.72 1.513-.488 7.246-.567 9.946-.1v25.195zM239.572 85.289h-9.62c-.388-1.884-.538-27.538-.2-32.93 1.528-.479 3.137-.17 4.716-.225 1.612-.05 3.229-.008 4.729-.008.17.146.233.188.283.246.05.054.121.12.121.183.038 10.467.067 20.93.092 31.396 0 .375-.063.746-.121 1.338M389.914 52.234h9.633c.363 1.792.475 29.742.133 32.921-1.525.475-3.141.163-4.725.217-1.608.054-3.22.012-4.712.012-.17-.179-.23-.233-.27-.291-.047-.063-.11-.134-.11-.196a40048.07 40048.07 0 01-.062-31.642c0-.296.063-.591.113-1.02'
        fill='currentColor'
        fillRule='nonzero'
      />
    </svg>
  );
}

export default SvgUninorteLogo;