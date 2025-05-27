import { css } from 'styled-components';

/**
 * Common CSS attributes for all parallax images
 * Import this in your styled components to apply consistent styling
 * 
 * Usage example:
 * const MyImage = styled.img`
 *   ${commonImageStyles}
 *   // Additional component-specific styles
 * `;
 */
export const commonImageStyles = css`
  position: absolute;
  transition: transform 0.2s ease-out;
  height: 100vh;
  mix-blend-mode: difference;
`;
