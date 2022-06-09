import type { FC } from 'react';
import { Button, Result } from 'antd';
import { history } from 'umi';

const PageFor404: FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);
export default PageFor404;
