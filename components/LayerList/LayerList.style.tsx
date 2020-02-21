import styled from "styled-components";

export const StyledLayerList = styled.ul`
  margin: 0;
  padding: 0;
  height: 150px;
  overflow-y: scroll;
  width: 100%;
  border-top: 1px solid ${props => props.theme.border};
`;

export const StyledHandle = styled.svg`
  cursor: grab;
  fill: ${props => props.theme.border};
  padding: 1rem 0.5rem;
  height: 0.75rem;
  width: auto;
  flex-shrink: 0;

  &:hover {
    fill: ${props => props.theme.text};
  }
`;

interface ListItemProps {
  readonly isActive: boolean;
}

export const StyledListItem = styled.li<ListItemProps>`
  list-style-type: none;
  z-index: 999;
  padding: 0;
  margin: 0;
  background: ${({ theme, isActive }) =>
    isActive ? theme.backgroundDark : theme.backgroundLight};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.border};
  border-left: 4px solid ${props => props.theme.border};
  user-select: none;

  &.dragging-helper-class {
    border-color: ${props => props.theme.backgroundDark};
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  }

  button {
    margin: 0;
    padding: 1rem 0.5rem;
    text-align: left;
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
    flex-grow: 2;
    color: ${props => props.theme.text};
    font-weight: ${props => props.isActive && "bold"};
  }

  .listItem__delete {
    flex-grow: 0;
    padding: 1rem;

    svg {
      width: 10px;
      height: auto;
      fill: ${props => props.theme.border};
    }

    &:hover svg {
      fill: ${props => props.theme.text};
    }
  }
`;
