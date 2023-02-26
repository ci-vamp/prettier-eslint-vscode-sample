import * as React from 'react';
import { View } from 'react-native';
import { useState } from 'react';
import useExample from '@hooks/exampleHook';

const App: React.FC = (props) => {
  const { link, logWatch, isLoading, oneMore, andAnother } = props;
  const { state, doSomething } = useExample();

  const a = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
  ];

  const longAssigment =
    'some really long long of stuff some really long long of stuff some really long long of stuff some really long long of stuff';

  const video: any = React.useRef(undefined);
  const [play, setPlay] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log({
    link,
    logWatch,
    isLoading,
    video,
    play,
    setPlay,
  });

  // stop when we navigate away from page
  return <View />;
};

export default App;
