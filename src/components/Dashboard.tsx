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
  (payload: DashboardInterface['dash_id']['dashboard_id']) => any,
  
  /* Значение активного чекбокса выбора количества колонок */
  // SelectedCheckbox: string,
  /* Ключ состояния отображения дашборда */
  MainHeaderButtonWasClicked: boolean,
}


export const Dashboard: React.SFC<DashboardProps> = (props) => {
  const {
    id,
    DashboardStaticModel,
    DashboardWasRequestedFromAPI,
    makeDashboardRequestFromAPI,
    // SelectedCheckbox,
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
    if ( DashboardStaticModel.dash_id.dashboard_id !== id ) {
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


  /* Тестовые данные для диаграмм */

  // const series: any = [
  //   {
  //     // color: '#1ab394',
  //     data: [
  //       45, 23, 65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45,
  //       23, 65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23,
  //       65, 12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23, 65,
  //       12, 67, 43, 1, 34, 88, 99, 33, 45, 45, 23, 65, 12,
  //       67, 43, 1, 34, 88, 99, 33, 99,
  //     ]
  //   }
  // ];

  
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



  // if ( MainHeaderButtonWasClicked ) {
  //   /* Настройка дашборда */
  //   return (
  //     <div>
  //       {/* Виджет редактирования, отмены и применения параметров */}
  //       <DashboardGridSettingsConnected />
  //       {/* Корневой компонент перетаскиваемых виджетов */}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       {/* Основной заголовок страницы */}
  //       <MainHeaderConnected data={MainHeaderState} />
  //       {/* Контейнер с виджетами */}
  //       <WidgetsLayout>
  //         {DashboardCollection.dash_data.map((e, i) => {
            
  //           const item: WidgetInterface = {
  //             widget_name: e.widget_name,
  //             device_id: e.device_id,
  //             id: e.id,
  //             series: series,
  //           };
  //           return (
  //             <Widget
  //               key={i}
  //               width={SelectedCheckbox}
  //               margin={i + 1}
  //             >
  //               <DashboardWidgetConnected item={item} />
  //             </Widget>
  //           )
  //         })}
  //       </WidgetsLayout>
  //     </div>
  //   );
  // }





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
        //     <WidgetsLayout
        //       width={SelectedCheckbox}
        //       margin={i + 1}
        //       key={i}
        //     >
        //       <DashboardWidgetConnected item={item} />
        //     </WidgetsLayout>
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