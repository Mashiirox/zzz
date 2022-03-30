import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

import Homepage from './page/home';

// const TagPage = lazy(() => import('./page/tag-page'));

export default (
  <Suspense fallback={<Spin />}>
    <Routes>
      <Route path='/' element={<Homepage />} />
      {/* <Route exact path='/tag' component={TagPage} /> */}
      {/* <Route exact path='/article/:id' component={ArticlePage} /> */}
    </Routes>
  </Suspense>
);
