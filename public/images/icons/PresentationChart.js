import React from 'react';

export const PresentationChart = ({ index2, clickedId }) => (
  <div>
    {clickedId !== index2 ? (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M21 2V14.1C21 16 20 17 18.1 17H5.89999C3.99999 17 3 16 3 14.1V2H21Z"
          fill="#9AA1AD"
        />
        <path
          d="M22 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H22C22.41 1.25 22.75 1.59 22.75 2C22.75 2.41 22.41 2.75 22 2.75Z"
          fill="#9AA1AD"
        />
        <path
          d="M16.67 22.34C16.54 22.6 16.27 22.75 16 22.75C15.89 22.75 15.77 22.72 15.67 22.67L12 20.84L8.33001 22.67C8.23001 22.72 8.11002 22.75 8.00002 22.75C7.73002 22.75 7.46001 22.6 7.33001 22.34C7.14001 21.96 7.29004 21.51 7.67004 21.33L11.25 19.54V17H12.75V19.54L16.33 21.33C16.71 21.51 16.86 21.96 16.67 22.34Z"
          fill="#9AA1AD"
        />
        <path
          d="M7.49993 11.7499C7.28993 11.7499 7.06994 11.6599 6.91994 11.4799C6.64994 11.1599 6.69992 10.6899 7.01992 10.4199L10.1699 7.78993C10.4599 7.54993 10.8299 7.44994 11.1799 7.50994C11.5399 7.56994 11.8499 7.78991 12.0399 8.10991L13.0899 9.85991L16.0199 7.41994C16.3399 7.14994 16.8099 7.19992 17.0799 7.51992C17.3499 7.83992 17.2999 8.30991 16.9799 8.57991L13.8299 11.2099C13.5399 11.4499 13.1699 11.5499 12.8199 11.4899C12.4599 11.4299 12.1499 11.2099 11.9599 10.8899L10.9099 9.13994L7.97994 11.5799C7.83994 11.6899 7.66993 11.7499 7.49993 11.7499Z"
          fill="#9AA1AD"
        />
      </svg>
    ) : (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M21 2V14.1C21 16 20 17 18.1 17H5.89999C3.99999 17 3 16 3 14.1V2H21Z"
          fill="#E06343"
        />
        <path
          d="M22 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H22C22.41 1.25 22.75 1.59 22.75 2C22.75 2.41 22.41 2.75 22 2.75Z"
          fill="#E06343"
        />
        <path
          d="M16.67 22.34C16.54 22.6 16.27 22.75 16 22.75C15.89 22.75 15.77 22.72 15.67 22.67L12 20.84L8.33001 22.67C8.23001 22.72 8.11002 22.75 8.00002 22.75C7.73002 22.75 7.46001 22.6 7.33001 22.34C7.14001 21.96 7.29004 21.51 7.67004 21.33L11.25 19.54V17H12.75V19.54L16.33 21.33C16.71 21.51 16.86 21.96 16.67 22.34Z"
          fill="#E06343"
        />
        <path
          d="M7.49993 11.7499C7.28993 11.7499 7.06994 11.6599 6.91994 11.4799C6.64994 11.1599 6.69992 10.6899 7.01992 10.4199L10.1699 7.78993C10.4599 7.54993 10.8299 7.44994 11.1799 7.50994C11.5399 7.56994 11.8499 7.78991 12.0399 8.10991L13.0899 9.85991L16.0199 7.41994C16.3399 7.14994 16.8099 7.19992 17.0799 7.51992C17.3499 7.83992 17.2999 8.30991 16.9799 8.57991L13.8299 11.2099C13.5399 11.4499 13.1699 11.5499 12.8199 11.4899C12.4599 11.4299 12.1499 11.2099 11.9599 10.8899L10.9099 9.13994L7.97994 11.5799C7.83994 11.6899 7.66993 11.7499 7.49993 11.7499Z"
          fill="#E06343"
        />
      </svg>
    )}
  </div>
);