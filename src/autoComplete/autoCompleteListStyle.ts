import css from 'styled-jsx/css'
import { color, font, radius, space } from '~/_utils/branding'

export default css`
  .kirk-autoComplete-list {
    list-style: none;
    padding: 0;
    margin-top: ${space.m};
    flex: 1;
  }

  :global(.kirk-autoComplete-item) {
    padding: ${space.m} ${space.xl};
  }

  :global(.kirk-autoComplete-primaryText) {
    color: ${color.primaryText};
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
  }

  :global(.kirk-autoComplete-secondaryText) {
    color: ${color.secondaryText};
    font-size: ${font.base.size};
    line-height: ${font.base.lineHeight};
    margin-top: ${space.s};
  }

  :global(.kirk-autoComplete-item:hover),
  :global(.kirk-autoComplete-item[aria-selected='true']) {
    background-color: ${color.lightBackground};
    border-radius: ${radius.l};
  }
`
