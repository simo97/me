import { IconProps } from '../../types';

const LinkedinIcon = ({ height = 50, width = 50 }: IconProps) => {
  return (
    <svg viewBox="0 0 128 128" width={width} height={height}>
      <g id="original">
        <path
          fill="none"
          d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3Z"
        />
        <path
          fill="#ccd6f6"
          d="M21.06,48.73H39.17V107H21.06Zm9.06-29a10.5,10.5,0,1,1-10.5,10.49,10.5,10.5,0,0,1,10.5-10.49"
        />
        <path
          fill="#ccd6f6"
          d="M50.53,48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53Z"
        />
      </g>
    </svg>
  );
};

export default LinkedinIcon;
