import React from 'react';
import { Cloud, renderSimpleIcon, ICloud } from 'react-icon-cloud';
import {
  siCursor,
  siGooglegemini,
  siClaude,
  siMixpanel,
  siGithub,
  siVercel,
  siN8n,
  siSupabase,
  siLangchain,
  siHuggingface,
  siPython,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siDocker,
  siGooglecloud,
  siFirebase,
  siPostgresql,
  siFigma,
  siVite,
  siNodedotjs,
  siGoogleanalytics,
  siDatadog
} from 'simple-icons';

const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const icons = [
  siCursor,
  siGooglegemini,
  siClaude,
  siMixpanel,
  siGithub,
  siVercel,
  siN8n,
  siSupabase,
  siLangchain,
  siHuggingface,
  siPython,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siDocker,
  siGooglecloud,
  siFirebase,
  siPostgresql,
  siFigma,
  siVite,
  siNodedotjs,
  siGoogleanalytics,
  siDatadog
];

export function IconCloud() {
  const renderedIcons = icons.map((icon) =>
    renderSimpleIcon({
      icon,
      minContrastRatio: 1.2,
      bgHex: '#fff',
      fallbackHex: '#000',
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: any) => e.preventDefault(),
      },
    })
  );

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
}
