import { useState } from 'react';

const useExample = () => {
  const [state, setState] = useState<unknown>(null);

  const doSomething = (newState: unknown) => setState(newState);

  return {
    state,
    doSomething,
  };
};

export default useExample;
