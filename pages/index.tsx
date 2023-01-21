import type { NextPage } from 'next'
import { OnlineContacts, LastActivity, PostField, PostFrends } from '../components';
import { withLayout } from '../layout/Layout';

const Home: NextPage = () => {
  return (
    <>
      <div className='bodyInner'>
        <LastActivity />
        <OnlineContacts />
      </div>
      <div className='bodyInner'>
        <PostField />
        <PostFrends />
      </div>
      <div className='bodyInner'>
      </div>
    </>
  )
}

export default withLayout(Home);
