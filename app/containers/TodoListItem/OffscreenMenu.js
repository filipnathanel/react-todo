import styled from 'styled-components';

const OffscreenMenu = styled.div`
  width: 164px;
  position: absolute;
  left: calc( 100% - 3.5vw );
  transition: opacity 0.2s;
  transition-delay: 0.1s;
  opacity: ${(props) => props.active ? '1' : '0'};

  a{
    display:block;
    float:left;
  }

  > div, > svg, > a{
    margin-right: 7px;
  }
`;

export default OffscreenMenu;
