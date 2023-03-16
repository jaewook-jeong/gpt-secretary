const maxWidthQuery = (breakPoint: number) =>
  `(max-width: ${breakPoint}px)`;

const minWidthQuery = (breakPoint: number) =>
  `(min-width: ${breakPoint + 1}px)`;

export const mediaQuery = (breakPoint: number) =>
  `@media ${maxWidthQuery(breakPoint)}`;