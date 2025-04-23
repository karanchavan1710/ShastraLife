import React from 'react';
import { Avatar, Tooltip, Divider } from '@mui/material';

const Sidebar = () => {
  return (
    <div className="!min-h-screen !w-screen !bg-gray-50">
      {/* Sidebar */}
      <div className="!absolute !left-0 !flex !h-screen !w-72 !flex-col !overflow-hidden !rounded-r-2xl !bg-gray-700 !text-white">
        <h1 className="!mt-10 !ml-10 !text-3xl !font-bold">Urbane</h1>

        <ul className="!mt-20 !space-y-3">
          {[
            { label: 'Overview', svg: 'grid' },
            { label: 'Transaction', svg: 'arrows', active: true },
            { label: 'Send Money', svg: 'send' },
            { label: 'Payments', svg: 'wallet' },
            { label: 'Cards', svg: 'creditcard' },
            { label: 'Settings', svg: 'settings' },
          ].map((item, index) => (
            <li
              key={index}
              className={`!relative !flex !cursor-pointer !space-x-2 !rounded-md !py-4 !px-10 hover:!bg-slate-600 ${
                item.active ? '!text-white !font-semibold' : '!text-gray-300'
              }`}
            >
              <span>
                {/* Placeholder SVG icons (replace with MUI icons if preferred) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="!h-6 !w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      item.svg === 'grid'
                        ? 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                        : item.svg === 'arrows'
                        ? 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
                        : item.svg === 'send'
                        ? 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                        : item.svg === 'wallet'
                        ? 'M32 15h-1V9a1 1 0 0 0-1-1H6a1 1 0 0 1-1-.82v-.36A1 1 0 0 1 6 6h23.58a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v20.57A4.1 4.1 0 0 0 7.13 32H30a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-3 15H7.13A2.11 2.11 0 0 1 5 27.93V9.88A3.11 3.11 0 0 0 6 10h23v5h-7a5 5 0 0 0 0 10h7Zm2-7h-9a3 3 0 0 1 0-6h9Z'
                        : item.svg === 'creditcard'
                        ? 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                        : 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                    }
                  />
                </svg>
              </span>
              <span>{item.label}</span>

              {item.active && (
                <svg
                  className="!absolute -top-1/2 -right-1 !h-32 !w-8 !text-gray-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="399.349 57.696 100.163 402.081"
                  width="1em"
                  height="4em"
                >
                  <path
                    fill="currentColor"
                    d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z"
                  />
                </svg>
              )}
            </li>
          ))}
        </ul>

        {/* Divider from MUI */}
        <Divider sx={{ bgcolor: '#6b7280', my: 2 }} />

        {/* Bottom User Info with MUI Avatar and Tooltip */}
        <Tooltip title="User Profile" arrow placement="right">
          <div className="!my-6 !mt-auto !ml-10 !flex !cursor-pointer !items-center">
            <Avatar
              alt="Palmer"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              sx={{ width: 48, height: 48 }}
            />
            <div className="!ml-3">
              <p className="!font-medium">Palmer</p>
              <p className="!text-sm !text-gray-300">Kiev, Ukraine</p>
            </div>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
