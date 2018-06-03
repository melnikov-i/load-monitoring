import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { SimplePageWrapper, SimplePageText, SimplePageLinkToHome } from './';

interface SimplyPageProps extends RouteComponentProps<void> {
  hint: string,
  type: string,
}

export const SimplyPage: React.SFC<SimplyPageProps> = (props) => {
  const {hint, type} = props;

  return (
    <SimplePageWrapper type={type}>
      <SimplePageText
        type={type}
      >{hint ? hint : 'Неизвестная ошибка'}</SimplePageText>
      <SimplePageLinkToHome to={'/'}>{'На главную'}</SimplePageLinkToHome>
    </SimplePageWrapper>
  );
}