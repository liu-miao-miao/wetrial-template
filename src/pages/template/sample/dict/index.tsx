import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';
import { useModel } from 'umi';

export default (): React.ReactNode => {
  const { countrys } = useModel('dict', (model) => ({
    countrys: model.countrys,
  }));

  return (
    <PageContainer title="测试共享数据" breadcrumb={undefined}>
      {JSON.stringify(countrys)}
    </PageContainer>
  );
};
