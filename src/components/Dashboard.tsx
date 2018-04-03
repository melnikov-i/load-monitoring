import * as React from 'react';

import {
  DashboardInterface,
  MainHeaderInterface,
} from '@src/interfaces';


/* Компонент спиннера */
import { Spinner } from '@src/components';
/* Компонент заголовка страницы */
import MainHeaderConnected from
  '@src/usage/MainHeaderUsage';  
/* Контейнер с перемещаемыми виджетами */
import DashboardDragContainerConnected from
  '@src/usage/DashboardDragContainerUsage';
/* Контейнер со статическими виджетами */
import DashboardStaticContainer from
  '@src/usage/DashboardStaticContainerUsage';
/* Компонент с параметрами настройки виджетов с диаграммами */
import DashboardGridSettingsConnected from
  '@src/usage/DashboardGridSettingsUsage';


interface DashboardProps {
  /* Идентификатор дашборда */
  id: DashboardInterface['dash_id']['dashboard_id'],
  /* Ключ состояния компонента, используемый для выбора Вида */
  DashboardStateKey: string,
  /* Ключ, указывающий, что данные о виджетах были запрошены с бэкэнда */
  // DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['dashboard_id'],
  /* Коллекция виджетов дашборда */
  DashboardStaticModel: DashboardInterface,
  /* Запускает в action метод запроса данных о виджетах */
  makeDashboardRequestFromAPI: 
  ( payload: DashboardInterface['dash_id']['dashboard_id'] ) => any,
  /* Ключ состояния отображения дашборда */
  MainHeaderButtonWasClicked: boolean,
  /* Запускает в action метод запроса данных для диаграмм */
  makeSeriesDataRequestFromAPI: 
  ( payload: DashboardInterface ) => any,
  switchDashboardStateKeyValue: ( payload: string ) => any,
}


export const Dashboard: React.SFC<DashboardProps> = (props) => {
  const {
    id,
    DashboardStateKey,
    DashboardStaticModel,
    // DashboardWasRequestedFromAPI,
    makeDashboardRequestFromAPI,
    MainHeaderButtonWasClicked,
    // makeSeriesDataRequestFromAPI,
    // switchDashboardStateKeyValue
  } = props;


  /**
   * (1) Первичный вид. Технически Видом не совсем является.
   * Основным назначением этого Вида является выполнение запроса
   * данных от бэкэнда
   *
   * @return {null}
   */

  const viewState1 = (): null => {
    makeDashboardRequestFromAPI(id);
    return null;
  }


  /**
   * (2) Вид, отображаемый в процессе получения данных от бэкэнда.
   *
   * @return {JSX.Element}
   */

  const viewState2 = (): JSX.Element => (
    <Spinner
      width={3}
      color={'#2f4050'}
      bgColor={'#f3f3f4'}
    />
  );


  /**
   * (30) Вид, отображаемый после получения данных от бэкэнда.
   * В Виде реализовано два варианта отображения, не связанных
   * с загрузкой данных от бэкэнда. По нажатию на кнопку "Настройка",
   * расположенную в компоненте заголовка страницы (MainHeader), пока-
   * зывается либо Статические виджеты (по-умолчанию), либо Динамические
   * виджеты для возможности конфигурирования их отображения.
   *
   * Конфигурирование дашборда вынесено в отдельный компонент,
   * т.к. в connector'е подключаются компоненты библиотеки
   * react-dnd (пересмотреть).
   *
   * @return {JSX.Element}
   */

  const viewState30 = (): JSX.Element | null => {
    /* Данные для заголовка страницы */
    const MainHeaderState: MainHeaderInterface = {
      header: DashboardStaticModel.dash_id.dashboard_name,
      button: true,
      breadcrumbs: [
        {
          href: '',
          title: 'Главная',
        },
        {
          href: 'devices',
          title: 'Все устройства',
        },
        {
          href: DashboardStaticModel.dash_id.dashboard_name,
          title: DashboardStaticModel.dash_id.dashboard_name,
        }
      ],
    };

    
    return (
      <div>
        {/* Основной заголовок страницы */}
        <MainHeaderConnected data={MainHeaderState} />
        {/* Панель настройки / панель выбора интервала */}
        {MainHeaderButtonWasClicked
          ? <DashboardGridSettingsConnected />
          : null
        }
        {/* Дашборды перетаскиваемые / дашборды статические */}
        {MainHeaderButtonWasClicked
          ? <DashboardDragContainerConnected />
          : <DashboardStaticContainer
              width={DashboardStaticModel.dash_id.dash_columns}
              widgets={DashboardStaticModel.dash_data}
            />
        }
      </div>
    );
  };


  /**
   * (31) Вид, отображаемый, если от бэкэнда пришли некорректные данные.
   */

  const viewState31 = (): JSX.Element | null => {
    return (
      <div
        style={{
          padding: '20px 15px',
        }}
      >
        <p
          style={{
            fontSize: '12px',
            color: '#ec4758',
          }}
          >
            {'На сервере отсутствует информация об этом устройстве'}
          </p>
      </div>
    );
  };

  
  switch ( DashboardStateKey ) {
    case '1': return viewState1();
    case '2': return viewState2();
    case '3':  return viewState30();
    case '31': return viewState31();
    default: return null;
  }
};