import type { NextPage } from 'next'
import { OnlineContacts, LastActivity, PostField, PostFrends, Stories, Articles, Modal } from '../components';
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
        <Modal />
      </div>
      <div className='bodyInner'>
        <Stories />
        <Articles />
      </div>
    </>
  )
}

export default withLayout(Home);
