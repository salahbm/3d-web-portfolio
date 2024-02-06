import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Music from './Music';
import sakura2 from '../assets/sakura2.mp3';
const Navbar = () => {
  const audioRef = useRef(new Audio(sakura2));
  audioRef.current.volume = 0.35;
  audioRef.current.loop = true;

  const [isPlayingSong, setIsPlayingSong] = useState(false);
  useEffect(() => {
    if (isPlayingSong) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingSong]);

  return (
    <header className="header">
      <NavLink
        to={'/'}
        className="md:w-24 w-16 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text md:text-sm text-[10px]"> Muhammad</p>
      </NavLink>
      <nav className="flex text-[12px] md:text-lg gap-2 md:gap-3 font-bold items-center justify-between ">
        <NavLink
          to={'/about'}
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : ' text-neutral-700'
          }
        >
          About
        </NavLink>
        <NavLink
          to={'/projects'}
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : ' text-neutral-700'
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={'/experience'}
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : ' text-neutral-700'
          }
        >
          Experience
        </NavLink>
        <NavLink
          to={'/contact'}
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : ' text-neutral-700'
          }
        >
          Contact
        </NavLink>
        <Music
          isPlayingSong={isPlayingSong}
          setIsPlayingSong={setIsPlayingSong}
        />
      </nav>
    </header>
  );
};

export default Navbar;
