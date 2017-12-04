import styled from 'styled-components';

/* Ширина ячейки в % */
export const TableHeadCollBigWidth = '7.69230769299998%';

export const Table = styled.table`
  width: 100%;
  margin: 30px auto;
  border-spacing: 0;
`;

export const TableHead = styled.thead`
`;

export const TableHeadRow = styled.tr`
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #e7eaec;
`;

export const TableHeadColl = styled.th`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  font-weight: normal;
  width: ${ TableHeadCollBigWidth };
  min-height: 25px;
  line-height: 25px;
  text-align: left;
  background-color: green;
`;
  // @media screen and (min-width: 941px) and (max-width: 1180px) {
  //   width: ${ DevicesTableHeadCollMiddleWidth };
  //   background-color: red;
  // }