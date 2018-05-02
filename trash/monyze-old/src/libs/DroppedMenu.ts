type EventType = 
  | HTMLAnchorElement
  | HTMLDivElement;

/**
 * Вешает глобальное событие для выпадающего меню.
 * Задает алгоритм поведения открытия и закрытия меню,
 * при котором меню автоматически закрывается при нажатии куда-либо
 * кроме меню.
 *
 * @param {React.MouseEvent<T>} e
 * @param {string} buttonClickedId
 * @param {() => any} action
 * @return {undefined}
 */

export const DroppedMenu = (
  e: React.MouseEvent<EventType>,
  buttonClickedId: string,
  action: ( payload: string ) => any ) => {
    e.preventDefault();
    e.stopPropagation();

    /**
     * Удаляет глобальный обработчик события.
     * Отправляет в Store пустое значение для очистки параметра
     */
    const remove = () => {
      document.removeEventListener('click', remove);
      action('');
    };
    
    /* Получение параметра элемента для сравнения */
    const current: string = 
      String(e.currentTarget.getAttribute('data-button-id'));

    if ( buttonClickedId === '' ) {
      
      /**
       * В Store пустое значение, кнопка нажата впервые.
       * Создается глобальный обработчик события на элемент
       * document и функцию remove(), которая отключает отслеживание
       * этого события. Послылает в Store значение аргумента 
       * data-button-id нажатого элемента.
       */
      document.addEventListener('click', remove);
      action(current);
    } else {
      /* В Store содержится значение нажатого элемента */
      if ( current === buttonClickedId ) {
        /**
         * В Store хранится значение нажатого в данный момент элемента.
         * Посылает в Store пустое значение. При этом срабатывает сброс
         * глобального отслеживания обработчика события в document
         */
        action('');
      } else {
        /**
         * В Store хранится значение элемента, отличного от нажатого.
         * Посылает в Store значение нажатого элемента.
         * Отключает всплытие, что позволяет не отключать обработчик
         * события в document'е
         */
        e.nativeEvent.stopImmediatePropagation();
        action(current);
      }
    }
  };