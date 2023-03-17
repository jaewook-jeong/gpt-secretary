const maxWidthQuery = (breakPoint: number) =>
  `(max-width: ${breakPoint}px)`;

export const mediaQuery = (breakPoint: number) =>
  `@media ${maxWidthQuery(breakPoint)}`;