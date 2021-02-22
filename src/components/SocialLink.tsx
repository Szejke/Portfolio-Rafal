import React from 'react';
import { Link } from 'rebass/styled-components';
import Tippy from '@tippy.js/react';
import styled from 'styled-components';

import { lighten } from 'polished';
import { SocialLink as SocialLinkType } from '../types';


type Props = SocialLinkType & {
  invert?: boolean;
};

const SocialLink = ({ icon, name, url, invert }: Props) => {
  return (
    <Tippy
      content={name}
      placement="bottom"
      trigger="mouseenter focus"
      arrow={false}
    >
      <IconLink
        href={url}
        target="_blank"
        invert={invert}
        rel="noreferrer"
        aria-label={name}
      >
        <i className={icon}></i>
      </IconLink>
    </Tippy>
  );
};

const IconLink = styled(Link)<{ invert?: boolean }>`
  transition: color 0.4s;
  color: ${({ theme, invert }) =>
   invert ? theme.colors.background : theme.colors.gray};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => lighten(0.3, theme.colors.primary)};
  }
`;

export default SocialLink;
