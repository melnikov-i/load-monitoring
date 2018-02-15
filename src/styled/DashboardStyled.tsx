import styled from 'styled-components';

const Checkboxes = require('@src/images/checkboxes');

export const DashboardLayout = styled.div`
  width: 100%;
  position: relative;
`;

export const DashboardText = styled.p`
  font-size: 14px;
`;

export const DraggableConfigLayout = styled.div`
  width: 100%;
  background-color: #fff;
  border-top: 2px solid #e7eaec;
`;

export const DraggableConfigHeaderWrapper = styled.div`
  border-bottom: 1px solid #e7eaec;
`;

export const DraggableConfigHeader = styled.h5`
  display: inline-block;
  font-size: 14px;
  text-overflow: ellipsis;
  padding: 15px;
  color: #676a6c;
`;

export const DraggableConfigCollumnsWrapper = styled.div`
  padding: 15px 0;
`;

export const DraggableConfigCollumnsHeaderWrapper = styled.div`
  width: 20%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
`;

export const DraggableConfigCollumnsHeader = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: #676a6c;
  padding: 0 15px;
`;

export const DraggableConfigCollumnsItems = styled.div`
  width: 30%;
  display: inline-block;
  vertical-align: top;
`;

export const DraggableConfigCollumnsItemAnchor = styled.a`
  text-decoration: none;
  width: 100%;
  height: 24px;
  display: block;
  margin-bottom: 3px;
  cursor: pointer;
  &::before {
    content: "";
    display: inline-block;
    vertical-align: top;
    width: 24px;
    height: 24px;
    background-image: url(${ Checkboxes });
    background-size: 240px 24px;
    background-position: ${(props: {isSelected: boolean}) => (
        props.isSelected
          ? '-168px 0' : '-120px 0'
      )
    };
  }
  &:hover:before {
    background-position: ${(props: {isSelected: boolean}) => (
        props.isSelected
          ? '-168px 0' : '-144px 0'
      )
    };
  }
`;

export const DraggableConfigCollumnsItemSpan = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #676a6c;
  padding: 0 5px;
`;