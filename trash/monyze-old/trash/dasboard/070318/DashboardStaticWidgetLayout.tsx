import * as React from 'react';

import {

} from '@src/interfaces';

interface DashboardStaticWidgetLayoutProps {

}

export const DashboardStaticWidgetLayout: 
React.SFC<DashboardStaticWidgetLayoutProps> = (props) => {
  const {

  } = props;

  return (
    <DynamicWidthWidgetsLayout>
      {DashboardCollection.dash_data.map((e, i) => {
        
        return (              
          <DynamicWidthWidgetWrapper
            width={SelectedCheckbox}
            margin={i + 1}
            key={i}
          >
            <DynamicWidthWidget>
              <DynamicWidthWidgetHeaderWrapper>
                <WidgetHeader>{ e.widget_name }</WidgetHeader>
              </DynamicWidthWidgetHeaderWrapper>
              <DynamicWidthWidgetContent>

              </DynamicWidthWidgetContent>
            </DynamicWidthWidget>
          </DynamicWidthWidgetWrapper>
        );
      })}
    </DynamicWidthWidgetsLayout>
  );
}