import { Input } from 'antd';
import { forwardRef, LegacyRef } from 'react';

type Props = {
  num: number;
};

function Test({ num }: Props, ref?: LegacyRef<Input>): JSX.Element {
  const handlePressEnter = (): void => console.log(1);
  return <Input ref={ref} defaultValue={num} onPressEnter={handlePressEnter} />;
}

export default forwardRef(Test);
