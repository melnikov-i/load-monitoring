import styled from 'styled-components';

export const DevicesLoadLayout = styled.div`
  padding: 8px 4px 0 0;
  width: 100%;
  font-size: 12px;
`;

export const DevicesLoadInfo = styled.p`
  font-size: 13px;
  font-weight: normal;
  color: #676a6c;
`;

export const DevicesLoadInfoSpan = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin-right: 5px;
`;

export const DevicesStatusInfoLabel = styled.div`
  background-color: ${ (props: {status:string}) => (
    (props.status === 'online')
    ? '#1ab394'
    : '#ed5565'
    )
  };
  width: 100%;
  max-width: 60px;
  margin: 0 auto;
  height: 20px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  border-radius: 3px;
  font-size: 10px;
`;

export const DevicesStatusInfo = styled.p`
  font-size: 10px;
  font-weight: normal;
  text-align: center;
  color: #676a6c;
`;