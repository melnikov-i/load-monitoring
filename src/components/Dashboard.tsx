import * as React from 'react';

import {
  DashboardInterface,
  MainHeaderInterface,
  WidgetInterface,
} from '@src/interfaces';

/* Компонент спиннера */
import { Spinner } from '@src/components';
/* Компонент заголовка страницы */
import MainHeaderConnected from
  '@src/usage/MainHeaderUsage';  
/* Компонент с параметрами настройки виджетов с диаграммами */
import DashboardGridSettingsConnected from
  '@src/usage/DashboardGridSettingsUsage';
/* Компонент перемещаемых виджетов */
import DashboardDragDropContextConnected from
  '@src/usage/DashboardDragDropContextUsage';
/* Компонент статических виджетов */
import DashboardWidgetConnected from
  '@src/usage/DashboardWidgetUsage';

import {
  WidgetLayout,
  Widget,
} from '@src/styled';

interface DashboardProps {
  /* Идентификатор дашборда */
  id: DashboardInterface['dash_id']['dashboard_id'],
  /* Ключ, указывающий, что данные о виджетах были запрошены с бэкэнда */
  DashboardWasRequestedFromAPI: DashboardInterface['dash_id']['dashboard_id'],
  /* Запускает в action метод запроса данных о виджетах */
  makeDashboardRequestFromAPI: 
  (payload: DashboardInterface['dash_id']['dashboard_id']) => any,
  /* Значение активного чекбокса выбора количества колонок */
  SelectedCheckbox: string,
  /* Коллекция виджетов дашборда */
  DashboardCollection: DashboardInterface,
  /* Ключ состояния отображения дашборда */
  MainHeaderButtonWasClicked: boolean,
}


export const Dashboard: React.SFC<DashboardProps> = (props) => {
  const {
    id,
    DashboardWasRequestedFromAPI,
    makeDashboardRequestFromAPI,
    SelectedCheckbox,
    DashboardCollection,
    MainHeaderButtonWasClicked,
  } = props;
  

  /**
   * Выполняет проверку наличия информации о структуре дашборда
   * в Store. При отсутствии запускает в action 
   * makeDashboardRequestFromAPI()
   */

  if ( DashboardWasRequestedFromAPI !== id ) {
    makeDashboardRequestFromAPI(id);
  } else {
    if ( DashboardCollection.dash_id.dashboard_id !== id ) {
      return (
        <Spinner
          width={3}
          color={'#2f4050'}
          bgColor={'#f3f3f4'}
        />
      );
    }      
  }


  /**
   * Данные для заголовка страницы
   */
  
  const MainHeaderState: MainHeaderInterface = {
    header: DashboardCollection.dash_id.dashboard_name,
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
        href: DashboardCollection.dash_id.dashboard_name,
        title: DashboardCollection.dash_id.dashboard_name,
      }
    ],
  };


  /* Тестовые данные для диаграмм */

  const series: any = [
    {
      // color: '#1ab394',
      data: [
        45, 23, 65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45,
        23, 65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23,
        65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23, 65,
        12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23, 65, 12,
        67, 43, 1, 34, 88, 99, 33, 99,
      ]
    }
  ];

  
  /**
   * По нажатию на кнопку 'Настройка', расположенную в компоненте 
   * заголовка страницы (MainHeader), показывается один из двух
   * видов: Статические виджеты (по-умолчанию) и динамические с 
   * возможностью конфигурирования их отображения.
   *
   * Конфигурирование дашборда вынесено в отдельный компонент,
   * т.к. в connector'е подключаются компоненты библиотеки
   * react-dnd.
   */

  if ( MainHeaderButtonWasClicked ) {
    /* Настройка дашборда */
    return (
      <div>
        {/* Основной заголовок страницы */}
        <MainHeaderConnected data={MainHeaderState} />
        {/* Виджет редактирования, отмены и применения параметров */}
        <DashboardGridSettingsConnected />
        {/* Корневой компонент перетаскиваемых виджетов */}
        <DashboardDragDropContextConnected />
      </div>
    );
  } else {
    return (
      <div>
        {/* Основной заголовок страницы */}
        <MainHeaderConnected data={MainHeaderState} />
        {/* Контейнер с виджетами */}
        <WidgetLayout>
          {DashboardCollection.dash_data.map((e, i) => {
            const item: WidgetInterface = {
              widget_name: e.widget_name,
              device_id: e.device_id,
              isPreview: false,
              series: series,
            };
            return (
              <Widget
                key={i}
                width={SelectedCheckbox}
                margin={i + 1}
              >
                <DashboardWidgetConnected item={item} />
              </Widget>
            )
          })}
        </WidgetLayout>
      </div>
    );
  }
      // <DynamicWidthWidgetsLayout>
      // </DynamicWidthWidgetsLayout>
        // {DashboardCollection.dash_data.map((e, i) => {
        //   const item: WidgetInterface = {
        //     widget_name: e.widget_name,
        //     device_id: e.device_id,
        //     isPreview: false,
        //     series: series,
        //   };
        // //   return (
        //     <WidgetLayout
        //       width={SelectedCheckbox}
        //       margin={i + 1}
        //       key={i}
        //     >
        //       <DashboardWidgetConnected item={item} />
        //     </WidgetLayout>
        //   );
        // })}






  
  /**
   * По нажатию на кнопку 'Настройка', расположенную в компоненте 
   * заголовка страницы (MainHeader), показывается один из двух
   * видов: Статические виджеты (по-умолчанию) и динамические с 
   * возможностью конфигурирования их отображения.
   */

  // if ( MainHeaderButtonWasClicked ) {
  //   /* Настройка дашборда */
  //   return (
  //     <div>
  //       {/* Основной заголовок страницы */}
  //       <MainHeaderConnected data={MainHeaderState} />
  //       {/* Виджет редактирования, отмены и применения параметров */}
  //       <DashboardGridSettingsConnected />
  //       {/* Корневой компонент перетаскиваемых виджетов */}
  //       <DashboardDragDropContextConnected />
  //     </div>
  //   );
  // } else {
  //   /* Отображение дашборда */
  //   return (
  //     <div>
  //       {/* Основной заголовок страницы */}
  //       <MainHeaderConnected data={MainHeaderState} />
  //       {/* Конструктор виджетов с диаграммами */}
  //       <DynamicWidthWidgetsLayout>          
          // {DashboardCollection.dash_data.map((e, i) => {
          //   const item: WidgetInterface = {
          //     widget_name: e.widget_name,
          //     device_id: e.device_id,
          //     isPreview: false,
          //     series: series,
          //   }
          //   return (
          //     <DynamicWidthWidgetWrapper
          //       width={SelectedCheckbox}
          //       margin={i + 1}
          //       key={i}
          //     >
          //       <DashboardWidgetConnected item={item} />
          //     </DynamicWidthWidgetWrapper>

          //   );
          // })}
  //       </DynamicWidthWidgetsLayout>
  //     </div>
  //   );
  // }
};