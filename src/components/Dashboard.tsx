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
  /* Ключ, указывающий, что данные о виджетах были запрошены с бэкэнда */
  DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['dashboard_id'],
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

}


export const Dashboard: React.SFC<DashboardProps> = (props) => {
  const {
    id,
    DashboardStaticModel,
    DashboardWasRequestedFromAPI,
    makeDashboardRequestFromAPI,
    MainHeaderButtonWasClicked,
    makeSeriesDataRequestFromAPI
  } = props;
  

  /**
   * Выполняет проверку наличия информации о структуре дашборда
   * в Store. При отсутствии запускает в action 
   * makeDashboardRequestFromAPI()
   */

  if ( DashboardWasRequestedFromAPI !== id ) {
    makeDashboardRequestFromAPI(id);
    return null;
  } else {
    if ( DashboardStaticModel.dash_id.dashboard_id !== id ) {
      /* ID приходит от родителя, dashboard_id из стора */
      if ( DashboardStaticModel.dash_id.dashboard_id === '' ) {
        /* Ожидание первых данных при загрузке страницы */
        return (
          <Spinner
            width={3}
            color={'#2f4050'}
            bgColor={'#f3f3f4'}
          />
        );        
      } else {
        /* Пришли первые данные и они неверные */
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
      }
    } else {
      /*
       * Если id и dashboard_id равны, значит данные с сервера пришли
       * корректные. Запускается процедура подргузки данных для 
       * графиков
       */
       
      makeSeriesDataRequestFromAPI(DashboardStaticModel);
    }
  }


  /**
   * Данные для заголовка страницы
   */
  
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


  /**
   * По нажатию на кнопку 'Настройка', расположенную в компоненте 
   * заголовка страницы (MainHeader), показывается один из двух
   * видов: Статические виджеты (по-умолчанию) и динамические с 
   * возможностью конфигурирования их отображения.
   *
   * Конфигурирование дашборда вынесено в отдельный компонент,
   * т.к. в connector'е подключаются компоненты библиотеки
   * react-dnd (пересмотреть).
   */

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