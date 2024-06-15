import React, { useContext } from "react";
import { ThemeContext } from "../../../app/domain/context/ThemeContext";

const ListOutline = ({ ...props }) => {
  const { algorithm } = useContext(ThemeContext);

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.6667 4.66783C14.1167 4.6759 14.902 4.7402 15.4142 5.25246C16 5.83825 16 6.78105 16 8.66667V12.6667C16 14.5523 16 15.4951 15.4142 16.0809C14.8284 16.6667 13.8856 16.6667 12 16.6667H8C6.11438 16.6667 5.17157 16.6667 4.58579 16.0809C4 15.4951 4 14.5523 4 12.6667V8.66667C4 6.78105 4 5.83825 4.58579 5.25246C5.09804 4.7402 5.88332 4.6759 7.33333 4.66783"
        stroke={algorithm === "dark" ? "black" : "white"}
        strokeWidth="1.2"
      />
      <path
        d="M9 10.7333C8.66863 10.7333 8.4 11.002 8.4 11.3333C8.4 11.6647 8.66863 11.9333 9 11.9333V10.7333ZM13.3333 11.9333C13.6647 11.9333 13.9333 11.6647 13.9333 11.3333C13.9333 11.002 13.6647 10.7333 13.3333 10.7333V11.9333ZM9 11.9333L13.3333 11.9333V10.7333L9 10.7333V11.9333Z"
        fill={algorithm === "dark" ? "black" : "white"}
      />
      <path
        d="M6.66669 10.5833C6.25247 10.5833 5.91669 10.9191 5.91669 11.3333C5.91669 11.7475 6.25247 12.0833 6.66669 12.0833V10.5833ZM7.00002 12.0833C7.41423 12.0833 7.75002 11.7475 7.75002 11.3333C7.75002 10.9191 7.41423 10.5833 7.00002 10.5833V12.0833ZM6.66669 12.0833H7.00002V10.5833H6.66669V12.0833Z"
        fill={algorithm === "dark" ? "black" : "white"}
      />
      <path
        d="M6.66669 8.25C6.25247 8.25 5.91669 8.58579 5.91669 9C5.91669 9.41421 6.25247 9.75 6.66669 9.75V8.25ZM7.00002 9.75C7.41423 9.75 7.75002 9.41421 7.75002 9C7.75002 8.58579 7.41423 8.25 7.00002 8.25V9.75ZM6.66669 9.75H7.00002V8.25H6.66669V9.75Z"
        fill={algorithm === "dark" ? "black" : "white"}
      />
      <path
        d="M6.66669 12.9167C6.25247 12.9167 5.91669 13.2525 5.91669 13.6667C5.91669 14.0809 6.25247 14.4167 6.66669 14.4167V12.9167ZM7.00002 14.4167C7.41423 14.4167 7.75002 14.0809 7.75002 13.6667C7.75002 13.2525 7.41423 12.9167 7.00002 12.9167V14.4167ZM6.66669 14.4167H7.00002V12.9167H6.66669V14.4167Z"
        fill={algorithm === "dark" ? "black" : "white"}
      />
      <path
        d="M9 8.4C8.66863 8.4 8.4 8.66863 8.4 9C8.4 9.33137 8.66863 9.6 9 9.6V8.4ZM13.3333 9.6C13.6647 9.6 13.9333 9.33137 13.9333 9C13.9333 8.66863 13.6647 8.4 13.3333 8.4V9.6ZM9 9.6H13.3333V8.4H9V9.6Z"
        fill={algorithm === "dark" ? "black" : "white"}
      />
      <path
        d="M9 13.0667C8.66863 13.0667 8.4 13.3353 8.4 13.6667C8.4 13.998 8.66863 14.2667 9 14.2667V13.0667ZM13.3333 14.2667C13.6647 14.2667 13.9333 13.998 13.9333 13.6667C13.9333 13.3353 13.6647 13.0667 13.3333 13.0667V14.2667ZM9 14.2667H13.3333V13.0667H9V14.2667Z"
        fill={algorithm === "dark" ? "black" : "white"}
      />
      <path
        d="M8.33331 3.93333H11.6666V2.73333H8.33331V3.93333ZM12.0666 4.33333V4.99999H13.2666V4.33333H12.0666ZM11.6666 5.39999H8.33331V6.6H11.6666V5.39999ZM7.93331 4.99999V4.33333H6.73331V4.99999H7.93331ZM8.33331 5.39999C8.1124 5.39999 7.93331 5.22091 7.93331 4.99999H6.73331C6.73331 5.88365 7.44966 6.6 8.33331 6.6V5.39999ZM12.0666 4.99999C12.0666 5.22091 11.8876 5.39999 11.6666 5.39999V6.6C12.5503 6.6 13.2666 5.88365 13.2666 4.99999H12.0666ZM11.6666 3.93333C11.8876 3.93333 12.0666 4.11241 12.0666 4.33333H13.2666C13.2666 3.44967 12.5503 2.73333 11.6666 2.73333V3.93333ZM8.33331 2.73333C7.44966 2.73333 6.73331 3.44967 6.73331 4.33333H7.93331C7.93331 4.11241 8.1124 3.93333 8.33331 3.93333V2.73333Z"
        fill={algorithm === "dark" ? "black" : "white"}
      />
    </svg>
  );
};

export default ListOutline;
