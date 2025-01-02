function MapSite({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none" // No fill applied
      xmlns="http://www.w3.org/2000/svg"
      className={className} // No need for fill-current since we're using stroke
    >
      <g id="SVGRepo_bgCarrier" ></g>
      <g
        id="SVGRepo_tracerCarrier"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M5.7 15C4.03377 15.6353 3 16.5205 3 17.4997C3 19.4329 7.02944 21 12 21C16.9706 21 21 19.4329 21 17.4997C21 16.5205 19.9662 15.6353 18.3 15M12 9H12.01M18 9C18 13.0637 13.5 15 12 18C10.5 15 6 13.0637 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z"
          stroke="currentColor" // Set stroke to currentColor for dynamic color
        />
      </g>
    </svg>
  );
}

export default MapSite;
