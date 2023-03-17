import styled from "@emotion/styled";

export const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  background-color: var(--background-color-secondary);
  border: 1px solid;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  border-color: var(--point-color-0);
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export const ToggleThumb = styled.span<{ $activeTheme?: string }>`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: var(--background-color-secondary);
  transition: transform 0.25s ease-in-out;
  transform: ${({ $activeTheme }) =>
    $activeTheme === "dark"
      ? "translateX(calc(var(--toggle-width) - var(--toggle-height) - 3px))"
      : "translateX(1px)"};
`;